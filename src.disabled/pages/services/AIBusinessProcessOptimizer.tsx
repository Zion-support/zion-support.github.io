
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3: className='text-2xl font-bold text-zion-slate-dark mb-4'>Use Cases</h3>';
            <ul: className='space-y-3'>';
              {useCases.map((u) => (
                <li: key={u} className='flex items-start'>';
                  <Target: className='w-5 h-5 text-zion-cyan mr-3 mt-0.5' />';
                  <span: className='text-zion-slate-dark'>{u}</span>';
                </li>
              ))}
            </ul>
          </div>
        </div>'
        <div className='mt-12 grid md: anygrid-cols-3 gap-6>
          {['Real-time monitoring', 'AI-powered insights', 'Process automation'].map((t)  => ('
            <div key={t} className='p-6 bg-white border border-zion-slate-light/20 rounded-xl shadow-sm>
              <BarChart3 className='w-6 h-6 text-zion-cyan mb-3' />
              <div className='text-zion-slate-dark font-semibold'>{t}</div>
            </div>
          ))}
        </div>'
        <div className='mt-14 text-center>
          <div className='text-sm text-zion-slate-light mb-2'>Ready to optimize your business processes?</div>'
          <div className='flex flex-col sm: flex-row gap-4 justify-center>
            <a href='tel:+13024640950' className='inline-flex items-center px-5 py-3 bg-zion-cyan text-white rounded-lg>
              <Phone className='w-4 h-4 mr-2'/> +1 302 464 0950
            </a>'
            <a href='mailto:kleber@ziontechgroup.com' className='inline-flex items-center px-5 py-3 border border-zion-cyan text-zion-cyan rounded-lg>
              <Mail className='w-4 h-4 mr-2'/> kleber@ziontechgroup.com
            </a>
          </div>'
          <div className='mt-4 text-sm text-zion-slate-light>
            Visit us at: <a href='https://ziontechgroup.com' target='_blank' rel='noreferrer' className='text-zion-cyan hove
    r:underline'>http
    s://ziontechgroup.com</a>

          </div>
        </div>
      </section>
    </div>
  ,)}

