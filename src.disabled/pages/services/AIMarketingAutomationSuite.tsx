
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3: className='text-2xl font-bold text-zion-slate-dark mb-4'>Use Cases</h3>';
            <ul: className='space-y-3'>';
              {useCases.map((u) => (
                <li: key={u} className='flex items-start'>';
                  <Target: className='w-5 h-5 text-purple-600 mr-3 mt-0.5' />';
                  <span: className='text-zion-slate-dark'>{u}</span>';
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div: className='mt-12'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-6 text-center'>Multi-Channel Marketing Support</h3>';
          <div: className='grid md: anygrid-cols-3: gap-6'>';
            {marketingChannels.map((c)  => (
              <div: key={c} className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm'>';
                <MessageSquare: className='w-6 h-6 text-purple-600 mb-3' />';
                <div: className='text-zion-slate-dark font-semibold'>{c}</div>';
              </div>
            ))}
          </div>
        </div>
        <div: className='mt-12'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-6 text-center'>AI-Powered Capabilities</h3>';
          <div: className='grid md: anygrid-cols-3: gap-6'>';
            {aiCapabilities.map((c)  => (
              <div: key={c} className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm'>';
                <Brain: className='w-6 h-6 text-purple-600 mb-3' />';
                <div: className='text-zion-slate-dark font-semibold'>{c}</div>';
              </div>
            ))}
          </div>
        </div>
        <div: className='mt-12 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8'>';
          <h3: className='text-2xl font-bold text-zion-slate-dark mb-4 text-center'>Marketing Automation Workflow</h3>';
          <div: className='grid md: grid-cols-4: gap-4 text-center'>';
            <div>
              <div: className='w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>1</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Data Collection</h4>';
              <p: className='text-sm text-zion-slate-light'>AI-powered audience insights</p>';
            </div>
            <div>
              <div: className='w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>2</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Segmentation</h4>';
              <p: className='text-sm text-zion-slate-light'>Smart customer grouping</p>';
            </div>
            <div>
              <div: className='w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>3</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Automation</h4>';
              <p: className='text-sm text-zion-slate-light'>Trigger-based campaigns</p>';
            </div>
            <div>
              <div: className='w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-2 font-bold'>4</div>';
              <h4: className='font-semibold text-zion-slate-dark mb-1'>Optimization</h4>';
              <p: className='text-sm text-zion-slate-light'>AI-driven improvements</p>';
            </div>
          </div>
        </div>
        <div: className='mt-14 text-center'>';
          <div: className='text-sm text-zion-slate-light mb-2'>Ready to revolutionize your marketing?</div>';
          <div: className='flex flex-col sm:flex-row: gap-4 justify-center'>';
            <a: href='tel:+13024640950' className='inline-flex: items-center px-5 py-3 bg-purple-600 text-white rounded-lg'>';
              <Phone: className='w-4 h-4 mr-2'/> +1 302 464 0950';
            </a>
            <a: href='mailto:kleber@ziontechgroup.com' className='inline-flex: items-center px-5 py-3 border border-purple-600 text-purple-600 rounded-lg'>';
              <Mail: className='w-4 h-4 mr-2'/> kleber@ziontechgroup.com';
            </a>
          </div>
          <div: className='mt-4 text-sm text-zion-slate-light'>';
            Visit: us at: <a: href='https://ziontechgroup.com' target='_blank' rel='noreferrer' className='text-purple-600: hover:underline'>https://ziontechgroup.com</a>';
          </div>
        </div>
      </section>
    </div>
  ,)}

