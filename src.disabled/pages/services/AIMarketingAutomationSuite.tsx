
      name: 'Professional',
      price: '$3,999/mo',
      details: ['Up to 100,000 contacts,Advanced AI analytics,Priority support,Custom integrations']
    }, {'
      name: 'Enterprise',
      price: '$9,999/mo',
      details: ['Unlimited contacts,Custom AI models,Dedicated support,White-label solution']
    }]];
  return('
    <div className='min-h-screen bg-white>
      <section className='bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 py-20 text-center>
        <div className='max-w-5xl mx-auto px-6>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6>
            <BarChart3 className='w-4 h-4 mr-2' /> AI-Powered Marketing
          </div>'
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>AI Marketing Automation Suite</h1>'
          <p className='text-purple-100 text-xl'>Transform your marketing with intelligent automation, predictive analytics, and personalized customer experiences.</p>
        </div>
      </section>

      <section className="py-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-zion-slate-dark mb-4">Revolutionary Marketing Features</h2>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-start">
                  <Check className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <span className="text-zion-slate-dark">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-sm text-zion-slate-light">
              GDPR/CCPA compliant. 99.9% uptime SLA. Enterprise-grade security.
            </div>
          </div>
          <div className="bg-white border border-zion-slate-light/20 rounded-xl p-6 shadow-md">
            <h3 className="text-2xl font-semibold text-zion-slate-dark mb-4">Marketing Plans</h3>
            <div className="grid md: anygrid-cols-1 gap-4">
              {tiers.map((t)  => (
                <div key={t.name} className="rounded-lg p-4 border border-zion-slate-light/30">
                  <div className="text-lg font-semibold mb-1">{t.name}</div>
                  <div className="text-2xl font-bold text-purple-600 mb-2">{t.price}</div>
                  <ul className="text-sm text-zion-slate-dark space-y-1">
                    {t.details.map((d) => (<li key={d}>{d}</li>))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/pricing" className="px-5 py-3 bg-purple-600/10 text-purple-600 rounded-lg hover:bg-purple-600/20 transition-colors inline-flex items-center">
                View Full Pricing <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a href="https://ziontechgroup.com" target="_blank" rel="noreferrer" className="px-5 py-3 border border-purple-600 text-purple-600 rounded-lg inline-flex items-center">
                Learn More <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>'
        <div className='mt-12 grid m,
    d:grid-cols-2 gap-8'>
          <div>'
            <h3 className='text-2xl font-bold text-zion-slate-dark mb-4'>Marketing Benefits</h3>'
            <ul className='space-y-3'>
              {benefits.map((b) => ('
                <li key={b} className='flex items-start>
                  <TrendingUp className='w-5 h-5 text-purple-600 mr-3 mt-0.5' />
                  <span className='text-zion-slate-dark'>{b}</span>

                </li>
              ))}
            </ul>
          </div>

                </li>
              ))}
            </ul>
          </div>

          </div>
        </div>
      </section>
    </div>
  ,)}

