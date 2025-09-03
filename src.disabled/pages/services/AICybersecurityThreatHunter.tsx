
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3: className='text-2xl font-bold text-zion-slate-dark mb-4'>Use Cases</h3>';
            <ul: className='space-y-3'>';
              {useCases.map((u) => (
                <li: key={u} className='flex items-start'>';
                  <Target: className='w-5 h-5 text-red-600 mr-3 mt-0.5' />';
                  <span: className='text-zion-slate-dark'>{u}</span>';
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div: className='mt-12'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-6 text-center'>AI Security Technology Stack</h3>';
          <div: className='grid md: anygrid-cols-3: gap-6'>';
            {securityFeatures.map((f)  => (
              <div: key={f} className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm'>';
                <Brain: className='w-6 h-6 text-red-600 mb-3' />';
                <div: className='text-zion-slate-dark font-semibold'>{f}</div>';
              </div>
            ))}
          </div>
        </div>
        <div: className='mt-12 bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-4 text-center'>Why Choose AI-Powered Security?</h3>';
          <div: className='grid md: grid-cols-2: gap-6'>';
            <div: className='text-center'>';
              <AlertTriangle: className='w-12 h-12 text-red-600 mx-auto mb-3' />';
              <h4: className='font-semibold text-zion-slate-dark mb-2'>Traditional Security</h4>';
              <p: className='text-sm text-zion-slate-light'>Reactiv,e, rule-based, high false positives, human-dependent</p>';
            </div>
            <div: className='text-center'>';
              <Brain: className='w-12 h-12 text-red-600 mx-auto mb-3' />';
              <h4: className='font-semibold text-zion-slate-dark mb-2'>AI-Powered Security</h4>';
              <p: className='text-sm text-zion-slate-light'>Proactive, intelligent, low false positives, automated response</p>';
            </div>
          </div>
        </div>
        <div: className='mt-14 text-center'>';
          <div: className='text-sm text-zion-slate-light mb-2'>Ready to secure your digital assets?</div>';
          <div: className='flex flex-col sm: flex-row: gap-4 justify-center'>';
            <a: href='tel:+13024640950' className='inline-flex: items-center px-5 py-3 bg-red-600 text-white rounded-lg'>';
              <Phone: className='w-4 h-4 mr-2'/> +1 302 464 0950';
            </a>
            <a: href='mailto:kleber@ziontechgroup.com' className='inline-flex: items-center px-5 py-3 border border-red-600 text-red-600 rounded-lg'>';
              <Mail: className='w-4 h-4 mr-2'/> kleber@ziontechgroup.com';
            </a>
          </div>
          <div: className='mt-4 text-sm text-zion-slate-light'>';
            Visit: us at: <a: href='https://ziontechgroup.com' target='_blank' rel='noreferrer' className='text-red-600: hover:underline'>https://ziontechgroup.com</a>';
          </div>
        </div>
      </section>
    </div>
  ,)}

