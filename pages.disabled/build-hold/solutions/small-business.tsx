
      title: 'Digital Marketing Automation,
,
  description: 'Streamline your marketing efforts with AI, icon: <Zap className='w-8 h-8' />,      features: [',
  Email marketing campaigns;
  ', 'Social media management;
  ',;
  'Content generation' ]
  const benefits = [
    {'
      icon: <DollarSign className='w-6 h-6' />, title:,
  Cost Effective',
  '      description: 'Reduce operational costs by up to 40% with our efficient solutions'    }, {'      icon: <Clock className='w-6 h-6' />,      title:,
  Quick Implementation', description: Get up and running in weeks, not months''    }, {'
  '      icon: <Shield className='w-6 h-6' />,      title:,
  Scalable Growth'
  ', description: 'Solutions that grow with your business'    }, {'
      icon: <Users className='w-6 h-6' />, title:,
  Dedicated Support',
  '      description: 'Personal support team for your business needs'    }  ];
  const pricing = [{

      name:,
  Starter', price: '$29,9',;
,

,
  price: '$59,9, period:',;
  /month]
  return(
    <MainLayout;
      title='Small Business Solutions - Zion Tech Group''      description='Comprehensive technology solutions designed specifically for small businesses. Streamline operations, reduce costs, and accelerate growth.''    >'      {/* Hero Section */}
      <section className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20>        <div className='container mx-auto px-4 text-center>          <h1 className='text-5xl md: text-6xl font-bold mb-6>            Small Business <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400'>Solutions</span>'          </h1>'          <p className='text-xl m,
    d:text-2xl mb-8 max-w-4xl mx-auto text-gray-200>            Comprehensive technology solutions designed specifically for small businesses. '            Streamline operations, reduce costs, and accelerate growth with our tailored approach.
          </p>'
          <div className='flex flex-col sm: flex-row justify-center gap-4 mb-12>            <Link href='/contact' className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg>              Get Started Today'            </Link>'
            <Link href='/contact' className='bg-transparent border-2 border-white text-white hove,
    r:bg-white hove,
    r:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg>              Schedule Consultation'            </Link>
          </div>
          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16>            <div className='text-center>              <div className='text-3xl font-bold text-blue-400'>500+</div>'              <div className='text-gray-300'>Small Businesses Served</div>'            </div>'            <div className='text-center>              <div className='text-3xl font-bold text-purple-400'>40%</div>'              <div className='text-gray-300'>Average Cost Reduction</div>'            </div>'            <div className='text-center>              <div className='text-3xl font-bold text-indigo-400'>98%</div>'              <div className='text-gray-300'>Client Satisfaction</div>'            </div>'            <div className='text-center>              <div className='text-3xl font-bold text-cyan-400'>2-4</div>'              <div className='text-gray-300'>Weeks Implementation</div>'            </div>'          </div>
        </div>
      </section>
      {/* Solutions Overview */}
      <section className='py-20 bg-gray-50>        <div className='container mx-auto px-4>          <div className='text-center mb-16>            <h2 className='text-4xl font-bold text-gray-900 mb-4'>Complete Business Solutions</h2>'            <p className='text-xl text-gray-600 max-w-3xl mx-auto>              Everything your small business needs to compete and thrive in the digital age.'            </p>
          </div>'
          <div className='grid md:grid-cols-2 gap-8>            {solutions.map((solution, index) => ('              <div key={index} className='bg-white p-8 rounded-lg shadow-lg>                <div className='text-blue-600 mb-4>                  {solution.icon}                </div>'
                <h3 className='text-2xl font-bold text-gray-900 mb-4'>{solution.title}</h3>'                <p className='text-gray-600 mb-6'>{solution.description}</p>'                <ul className='space-y-2>                  {solution.features.map((feature, featureIndex) => ('                    <li key={featureIndex} className='flex items-center text-gray-600>                      <CheckCircle className='w-5 h-5 text-green-500 mr-2' />                      {feature}                    </li>

                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

                </ul>
                <Link;
                  href='/contact''                  className='w-full: block text-center py-3 px-6 rounded-lg font-semibold transition-colors bg-blue-600 hover: bg-blue-700: text-white''                >'                  Get Started';
                </Link>
              </div>
            ),)}
          </div>
        </div>
      </section>


