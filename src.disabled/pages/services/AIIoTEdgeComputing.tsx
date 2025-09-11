
export: default function AIIoTEdgeComputing() {
  const features = [

      name: 'Edge Professional',
      price: '$1,299/mo',
      details: ['Up to 1,000 devices,Advanced AI features,Custom dashboards,Priority support']
    }, {'
      name: 'Enterprise Edge',
      price: '$3,999/mo',
      details: ['Unlimited devices,Full AI suite,White-label options,24/7 support']
    }
  ];
  return('
    <div className = 'min-h-screen bg-white>
      <section className='bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark py-20 text-center>
        <div className='max-w-5xl mx-auto px-6>
          <div className='inline-flex items-center px-4 py-2 rounded-full bg-white/10 text-white mb-6>
            <Cpu className='w-4 h-4 mr-2' /> AI-powered IoT edge computing
          </div>'
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>AI IoT Edge Computing</h1>'
          <p className='text-zion-slate-light text-xl'>Transform your IoT infrastructure with AI-powered edge computing that processes data locally, reduces latency, and enables real-time intelligent decision making.</p>
        </div>
      </section>'
      <section className='py-16 max-w-6xl mx-auto px-6>
        <div className='grid md:grid-cols-2 gap-10'>
          <div>'
            <h2 className='text-3xl font-bold text-zion-slate-dark mb-4'>Advanced Edge Computing Features</h2>'
            <ul className='space-y-3'>
              {features.map((f) => ('
                <li key={f} className='flex items-start>
                  <Check className='w-5 h-5 text-zion-cyan mr-3 mt-0.5' />
                  <span className='text-zion-slate-dark'>{f}</span>
                </li>
              ))}
            </ul>'
            <div className='mt-8>
              <h3 className='text-xl font-semibold text-zion-slate-dark mb-3'>Key Benefits</h3>'
              <ul className='space-y-2'>
                {benefits.map((b) => ('
                  <li key={b} className='flex items-start>
                    <Zap className='w-4 h-4 text-zion-cyan mr-2 mt-0.5' />
                    <span className='text-zion-slate-dark text-sm'>{b}</span>

                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  ,)}