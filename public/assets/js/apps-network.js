(function () {
  var APPS = [
    { href: '/apps-network/', slug: 'hub', title: 'Apps Network', blurb: 'Hub with categories, product apps, and path tools.', group: 'hub' },
    { href: '/apps/', slug: 'catalog', title: 'Live catalog', blurb: 'Searchable GitHub apps constellation on this domain.', group: 'hub' },
    { href: '/roi-calc/', slug: 'roi-calc', title: 'ROI calculator', blurb: 'Hours leaked vs Discovery / Consulting / Starter.', group: 'money' },
    { href: '/sla-calculator/', slug: 'sla-calculator', title: 'SLA calculator', blurb: 'Allowed downtime and penalty exposure.', group: 'ops' },
    { href: '/incident-cost/', slug: 'incident-cost', title: 'Incident cost', blurb: 'What an outage actually costs this month.', group: 'ops' },
    { href: '/token-cost/', slug: 'token-cost', title: 'Token cost', blurb: 'LLM spend envelope before you ship an agent.', group: 'money' },
    { href: '/finops-estimator/', slug: 'finops-estimator', title: 'FinOps estimator', blurb: 'Compute, storage, egress and model spend sketch.', group: 'money' },
    { href: '/cloud-waste/', slug: 'cloud-waste', title: 'Cloud waste', blurb: 'Idle / over-provision sketch for cloud + model lines.', group: 'money' },
    { href: '/change-risk/', slug: 'change-risk', title: 'Change risk', blurb: 'Score change risk before a patch window.', group: 'ops' },
    { href: '/ai-governance-checklist/', slug: 'ai-governance-checklist', title: 'AI governance', blurb: 'Ten controls. Live readiness score.', group: 'govern' },
    { href: '/stack-audit/', slug: 'stack-audit', title: 'Stack audit', blurb: 'Ten yes/no checks that pick the next SKU.', group: 'govern' },
    { href: '/rfp-readiness/', slug: 'rfp-readiness', title: 'RFP readiness', blurb: 'Score an edital / RFQ before you bid.', group: 'govern' },
    { href: '/prompt-library/', slug: 'prompt-library', title: 'Prompt library', blurb: 'Ten IT-ops prompts, copy-ready.', group: 'work' },
    { href: '/agent-brief/', slug: 'agent-brief', title: 'Agent brief', blurb: 'One-pager for Discovery. Nothing stored.', group: 'work' },
    { href: '/edital-desk/', slug: 'edital-desk', title: 'Edital desk', blurb: 'RFQ / TR brief. No invented hardware prices.', group: 'work' },
    { href: '/patch-window/', slug: 'patch-window', title: 'Patch window', blurb: 'Nights needed for a patch crew.', group: 'ops' },
    { href: '/llm-gateway/', slug: 'llm-gateway', title: 'LLM Gateway', blurb: 'Model routing, caching and failover.', group: 'ai' },
    { href: '/prompt-shield/', slug: 'prompt-shield', title: 'Prompt Shield', blurb: 'Prompt-injection defense and LLM security tests.', group: 'ai' },
    { href: '/finops-autopilot/', slug: 'finops-autopilot', title: 'FinOps Autopilot', blurb: 'Cloud cost anomaly detection & rightsizing.', group: 'money' },
    { href: '/apps/playbook/', slug: 'playbook', title: 'Playbook', blurb: 'Which tool to open first in a sales or ops conversation.', group: 'hub' }
  ];
  var COMMERCIAL = [
    { href: '/discovery/', title: 'Discovery $99' },
    { href: '/en/plans/', title: 'Official plans' },
    { href: '/contact/', title: 'Contact' }
  ];

  function path() {
    var p = (location.pathname || '/').replace(/\/+$/, '') || '/';
    return p + '/';
  }

  function currentSlug() {
    var p = path();
    for (var i = 0; i < APPS.length; i++) {
      if (APPS[i].href === p) return APPS[i].slug;
    }
    return '';
  }

  function navHtml() {
    var here = path();
    var bits = ['<a href="/">Home</a>', '<a href="/apps-network/">Network</a>'];
    var primary = APPS.filter(function (a) {
      return ['hub', 'catalog', 'playbook', 'roi-calc', 'token-cost', 'incident-cost', 'change-risk', 'cloud-waste', 'llm-gateway'].indexOf(a.slug) !== -1;
    });
    primary.forEach(function (app) {
      if (app.slug === 'hub') return;
      var cls = app.href === here ? ' is-current' : '';
      bits.push('<a class="' + cls.trim() + '" href="' + app.href + '">' + app.title + '</a>');
    });
    COMMERCIAL.forEach(function (c) {
      bits.push('<a href="' + c.href + '">' + c.title + '</a>');
    });
    return bits.join(' · ');
  }

  function relatedHtml(limit) {
    var here = currentSlug();
    var cards = APPS.filter(function (a) { return a.slug !== 'hub' && a.slug !== 'catalog' && a.slug !== here; });
    var n = typeof limit === 'number' ? limit : cards.length;
    return cards.slice(0, n).map(function (a) {
      return '<article class="card apps-card"><h2>' + a.title + '</h2><p>' + a.blurb + '</p><a class="btn" href="' + a.href + '">Open ' + a.href + '</a></article>';
    }).join('');
  }

  function mount() {
    document.querySelectorAll('[data-apps-nav]').forEach(function (el) {
      el.innerHTML = navHtml();
      if (!el.getAttribute('aria-label')) el.setAttribute('aria-label', 'Apps network');
    });
    document.querySelectorAll('[data-apps-related]').forEach(function (el) {
      var limit = parseInt(el.getAttribute('data-limit') || '', 10);
      el.innerHTML = relatedHtml(isNaN(limit) ? undefined : limit);
    });
  }

  window.ZION_APPS_NETWORK = { apps: APPS, commercial: COMMERCIAL, path: path, relatedHtml: relatedHtml, navHtml: navHtml };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
