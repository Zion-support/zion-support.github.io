'use strict';
// Localized version of the current seven-question Discovery form.
// Email acceptance is not inbox delivery; uncertain requests are never retried.
(function(){
    var MAP={
      'field-service':[['Field Visit Handoff Checklist','/zion-app-network/field-visit-handoff-2026.html'],['Field Service Automation Services','/ai-field-service-automation/']],
      'healthcare':[['AI Readiness Assessment Service','/ai-readiness-assessment/']],
      'finance':[['FinOps Consulting','/finops-consulting/'],['Illustrative AI ROI Calculator','/roi-calculator/']],
      'energy':[['Energy Optimization Services','/ai-energy-optimization/'],['Cloud Cost Optimization Overview','/apps/cloud-cost-optimizer.html']],
      'retail':[['AI Lead Generation Services','/ai-lead-generation/']],
      'other':[['Zion Tools and Guides Catalog','/zion-app-network/'],['Full Service Catalog','/services/']],
      'support':[['Customer Support Automation Services','/ai-powered-customer-support/'],['Observability and Incident Management Services','/ai-observability-and-incident-management/']],
      'sla':[['Observability and Incident Management Services','/ai-observability-and-incident-management/'],['Incident Response and Review Services','/ai-incident-response/']],
      'costs':[['FinOps Consulting','/finops-consulting/'],['Cloud Cost Optimization Overview','/apps/cloud-cost-optimizer.html']],
      'sales':[['AI Lead Generation Services','/ai-lead-generation/'],['Lead Scoring Planning Guide','/lead-score-copilot/']],
      'data':[['AI Readiness Assessment Service','/ai-readiness-assessment/'],['Manual AI Readiness Guide','/ai-readiness-framework/']]
    };
    var copy=JSON.parse(document.getElementById('dq-copy').textContent);
    var form=document.getElementById('dq');
    if(!form)return;
    function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
    // Page-session deduplication: uncertain requests must never retry automatically.
    var submissions = new Map();
    var pending = false;
    var button = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async function(e){
      e.preventDefault();
      if (pending) return;
      if (!form.reportValidity()) return;
      var a=Object.fromEntries(new FormData(form).entries());
      a.name=String(a.name||'').replace(/[\u0000-\u001f\u007f]/g,' ').trim().slice(0,120);
      a.email = String(a.email || '').trim();
      if(!a.name||a.email.length>254)return;
      if(!Object.keys(copy.answers).every(function(key){return Object.prototype.hasOwnProperty.call(copy.answers[key],a[key]);}))return;
      if (!/^[^\s@,;<>\"\\]+@[^\s@,;<>\"\\]+\.[^\s@,;<>\"\\]+$/.test(a.email)) return;
      var candidates=(MAP[a.challenge]||[]).concat(MAP[a.industry]||[]);
      var seen=new Set();
      var picks=candidates.filter(function(p){if(seen.has(p[1]))return false;seen.add(p[1]);return true;}).slice(0,4);
      if(picks.length<3&&!seen.has('/zion-app-network/'))picks.push(['Zion Tools and Guides Catalog','/zion-app-network/']);
      picks=picks.map(function(p){return [copy.resources[p[1]]||p[0],p[1]];});
      var lines=picks.map(function(p){return '- '+p[0]+': https://ziontechgroup.com'+p[1];}).join('\n');
      var fields=['name','email','industry','challenge','size','speed','aiuse','outcome','deploy'];
      var summary=copy.reportTitle+'\n'+fields.map(function(key){
        var value=copy.answers[key]&&copy.answers[key][a[key]]||a[key];
        return copy.fields[key]+': '+value;
      }).join('\n')+'\n\n'+copy.recommendations+':\n'+lines;
      var box=document.getElementById('dq-results');
      box.hidden=false;
      box.innerHTML='<h3>'+esc(copy.recommendations)+'</h3><ul>'+picks.map(function(p){return '<li><a href="'+esc(p[1])+'">'+esc(p[0])+'</a></li>';}).join('')+'</ul><p id="dq-mail-status" role="status" aria-live="polite"></p><p id="dq-fallback"></p>';
      box.scrollIntoView({behavior:'smooth'});
      var status = document.getElementById('dq-mail-status');
      var fallback = document.getElementById('dq-fallback');
      var key = summary;
      function manual(){
        var href='mailto:'+encodeURIComponent(a.email)+'?cc=commercial@ziontechgroup.com&subject='+encodeURIComponent(copy.reportTitle)+'&body='+encodeURIComponent(summary);
        fallback.innerHTML='<a class="btn alt" href="'+esc(href)+'">'+esc(copy.manual)+'</a>';
      }
      if (submissions.has(key)) {
        status.textContent = submissions.get(key) + ' '+copy.duplicate;
        manual();
        return;
      }
      var uncertain = copy.uncertain;
      pending = true;
      button.disabled = true;
      form.setAttribute('aria-busy', 'true');
      submissions.set(key, uncertain);
      status.textContent = copy.sending;
      var controller = new AbortController();
      var timer;
      try {
        var response = await Promise.race([
          (async function(){
            var r = await fetch('https://formsubmit.co/ajax/commercial@ziontechgroup.com', {
              method:'POST',
              signal:controller.signal,
              headers:{'Content-Type':'application/json','Accept':'application/json'},
              body:JSON.stringify({name:a.name,email:a.email,_cc:a.email.toLowerCase() === 'commercial@ziontechgroup.com' ? '' : a.email,_replyto:a.email,_subject:copy.reportTitle+' — '+a.name,results:summary})
            });
            if (!r.ok) throw new Error('uncertain-http');
            return r.json();
          })(),
          new Promise(function(resolve, reject){
            timer = setTimeout(function(){ controller.abort(); reject(new Error('timeout')); }, 15000);
          })
        ]);
        if (response && (response.success === true || response.success === 'true')) {
          status.textContent = copy.accepted;
          submissions.set(key, status.textContent);
        } else if (response && (response.success === false || response.success === 'false')) {
          status.textContent = copy.rejected;
          submissions.delete(key);
          manual();
        } else {
          throw new Error('uncertain-response');
        }
      } catch (error) {
        status.textContent = uncertain;
        manual();
      } finally {
        clearTimeout(timer);
        pending = false;
        button.disabled = false;
        form.setAttribute('aria-busy', 'false');
      }
    });
  })();
