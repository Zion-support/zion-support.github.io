
      title: 'Cloud Infrastructure,
,
  description: 'Scalable cloud solutions that grow with your startup, icon: <Globe className='w-8 h-8' />,      features: [',
  Auto-scaling infrastructure;
  ', 'Cost optimization;
  ',;
  'High availability' ]
  const benefits = [
    {'
      icon: <Rocket className='w-6 h-6' />, title:,
  Fast Time to Market',
  '      description: 'Launch your product 3x faster with our proven methodologies'    }, {'      icon: <DollarSign className='w-6 h-6' />,      title:,
  Cost Effective', description: 'Startup-friendly pricing with flexible payment options'    },
  '    {'
      icon: <Shield className='w-6 h-6' />, title:,
  Scalable Solutions'
  ',      description: 'Built to scale from day one as your startup grows'    }, {'
  '      icon: <Users className='w-6 h-6' />,      title:,
  Expert Guidance;
  ', description: 'Access to experienced entrepreneurs and technical experts'    }  ];
  const packages = [{

      name:,
  Launch', price: $,2,999',;
  , description: 'Perfect: for early-stage startup,s',;
,
  features: [';';
  'MVP: development (4-6 weeks,)',;
 {
      name:,
  Enterprise', price: 'Custo,m',;
,

                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

  ring-2 ring-blue-500': '}`}> {pkg.popular && (`
  '                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2>                    <span className='bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium>                      Most Popular'                    </span>`                  </div>
                )}`
                <div className='text-center mb-6>                  <h3 className='text-2xl font-bold text-gray-900 mb-2'>{pkg.name}</h3>'                  <div className='text-4xl font-bold text-blue-600 mb-1>                    {pkg.price}                  </div>'
                  <p className='text-gray-600'>{pkg.description}</p>'                </div>''
                <ul className='space-y-3 mb-8>                  {pkg.features.map((feature, featureIndex) => ('                    <li key={featureIndex} className='flex items-center>                      <CheckCircle className='w-5 h-5 text-green-500 mr-3 flex-shrink-0' />                      <span className='text-gray-600'>{feature}</span>'                    </li>'                  ))}
                </ul>
                <Link;
                  href='/contact''                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${'                    pkg.popular`                      ? 'bg-blue-600 hover: bg-blue-700 text-white';
  '                      : 'bg-gray-100 hove,
    r:bg-gray-200 text-gray-900'                  }`}                >`                  Get Started

                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

        </div>
      </section>
      {/* CTA Section */}
      <section className='py-20 bg-blue-600>        <div className='container mx-auto px-4 text-center>          <h2 className='text-4xl font-bold text-white mb-6>            Ready to Launch Your Startup?'          </h2>'
          <p className='text-xl text-blue-100 mb-8 max-w-2xl mx-auto>            Join the ranks of successful startups that have transformed their ideas into reality with our help.'          </p>'
          <Link href='/contact' className='bg-white text-blue-600 hover: bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg>            Start Your Success Story'          </Link>
        </div>
      </section>
    </MainLayout>
  )}


