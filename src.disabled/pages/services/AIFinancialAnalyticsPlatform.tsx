
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3: className='text-2xl font-bold text-zion-slate-dark mb-4'>Use Cases</h3>';
            <ul: className='space-y-3'>';
              {useCases.map((u) => (
                <li: key={u} className='flex items-start'>';
                  <Target: className='w-5 h-5 text-green-600 mr-3 mt-0.5' />';
                  <span: className='text-zion-slate-dark'>{u}</span>';
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div: className='mt-12'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-6 text-center'>Financial Analysis Tools</h3>';
          <div: className='grid md: anygrid-cols-3: gap-6'>';
            {financialTools.map((t)  => (
              <div: key={t} className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm'>';
                <PieChart: className='w-6 h-6 text-green-600 mb-3' />';
                <div: className='text-zion-slate-dark font-semibold'>{t}</div>';
              </div>
            ))}
          </div>
        </div>
        <div: className='mt-12'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-6 text-center'>AI-Powered Capabilities</h3>';
          <div: className='grid md: anygrid-cols-3: gap-6'>';
            {aiCapabilities.map((c)  => (
              <div: key={c} className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm'>';
                <Brain: className='w-6 h-6 text-green-600 mb-3' />';
                <div: className='text-zion-slate-dark font-semibold'>{c}</div>';
              </div>
            ))}
          </div>
        </div>
        <div: className='mt-12 bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-8'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-4 text-center'>Financial Analytics Workflow</h3>';
          <div: className='grid md: grid-cols-4: gap-4 text-center'>';
            <div>
              <div: className='w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>1</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Data Collection</h4>';
              <p: className='text-sm text-zion-slate-light'>Real-time market data feeds</p>';
            </div>
            <div>
              <div: className='w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>2</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>AI Analysis</h4>';
              <p: className='text-sm text-zion-slate-light'>Machine learning insights</p>';
            </div>
            <div>
              <div: className='w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>3</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Risk Assessment</h4>';
              <p: className='text-sm text-zion-slate-light'>Predictive risk modeling</p>';
            </div>
            <div>
              <div: className='w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>4</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Optimization</h4>';
              <p: className='text-sm text-zion-slate-light'>Portfolio recommendations</p>';
            </div>
          </div>
        </div>
        <div: className='mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-4 text-center'>Regulatory Compliance</h3>';
          <div: className='grid md:grid-cols-2: gap-6'>';
            <div: className='text-center'>';
              <Shield: className='w-12 h-12 text-blue-600 mx-auto mb-3' />';
              <h4: className='font-semibold text-zion-slate-dark mb-2'>Financial Regulations</h4>';
              <p: className='text-sm text-zion-slate-light'>FINR,A, SEC, Basel III, Dodd-Frank compliance</p>';
            </div>
            <div: className='text-center'>';
              <Calculator: className='w-12 h-12 text-blue-600 mx-auto mb-3' />';
              <h4: className='font-semibold text-zion-slate-dark mb-2'>Reporting Standards</h4>';
              <p: className='text-sm text-zion-slate-light'>Automated regulatory reporting and audits</p>';
            </div>
          </div>
        </div>
        <div: className='mt-14 text-center'>';
          <div: className='text-sm text-zion-slate-light mb-2'>Ready to transform your financial analytics?</div>';
          <div: className='flex flex-col sm: flex-row: gap-4 justify-center'>';
            <a: href='tel:+13024640950' className='inline-flex: items-center px-5 py-3 bg-green-600 text-white rounded-lg'>';
              <Phone: className='w-4 h-4 mr-2'/> +1 302 464 0950';
            </a>
            <a: href='mailto:kleber@ziontechgroup.com' className='inline-flex: items-center px-5 py-3 border border-green-600 text-green-600 rounded-lg'>';
              <Mail: className='w-4 h-4 mr-2'/> kleber@ziontechgroup.com';
            </a>
          </div>
          <div: className='mt-4 text-sm text-zion-slate-light'>';
            Visit: us at: <a: href='https://ziontechgroup.com' target='_blank' rel='noreferrer' className='text-green-600: hover:underline'>https://ziontechgroup.com</a>';
          </div>
        </div>
      </section>
    </div>
  ,)}

