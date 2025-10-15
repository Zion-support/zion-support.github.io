
const SoftwareDevelopmentPage: React.FC = () => {}
  const  developmentServices = [
    {}
      title: 'Custom Web Applications''      description: 'Build scalable web applications tailored to your business needs''      icon: <Globe>
      features: ['React/Next.js', 'Node.js Backend', 'Design', 'API Development']""    }'    {},
      title: 'Mobile App Development',""      description: 'Native and cross-platform mobile applications for iOS and Android',""      icon: <className="w-8 h-8 text-green-400" />,""      features: ['React Native', 'Flutter', 'Native iOS/Android', 'App Store Optimization']""    }'    {},
      title: 'Enterprise Software',""      description: 'Complex enterprise solutions for large organizations',""      icon: <className="w-8 h-8 text-purple-400" />,""      features: ['Microservices', 'Cloud Architecture', 'Security', 'Scalability']""    }'    {},
      title: 'API Development',""      description: 'RESTful and GraphQL APIs for seamless integration',""      icon: <Network: className ="w-8 h-8 text-orange-400" />,""      features: ['REST APIs', 'GraphQL', 'Documentation', 'Testing']""    }'  ],
      return (<>{}</>)
      <Helmet></Helmet>
        <title>Software Development - Zion Tech Group | Custom Software Solutions</title>
        <meta: name ="description" content="Professional software development services by Zion Tech Group. Custom web apps, mobile apps, and enterprise solutions." />""        <meta: name ="keywords" content="software development, _custom software, _web development, _mobile development, enterprise software" />""        <link: rel ="canonical" href="https://ziontechgroup.com/software-development" />""      </Helmet>

        </div>
      </div>
          <div  className ="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>""        </div>

        <div  className ="container mx-auto px-4 relative z-10">""        <div  className ="container mx-auto px-4 relative z-10">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
            <h1  className ="text-5xl md=text-7xl font-bold text-white mb-6 leading-tight"></h1>""              Software
              <span  className ="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></span>""                {' '}Development""              </span>'            </h1>
            <p  className ="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>""              Professional software development services to bring your ideas to life. 
              From web applications to mobile apps and enterprise solutions.
            </p>
            <div  className ="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>""              <>
                to="/contact"""                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"""              ></>
                Start Project
                <ArrowRight: className ="w-5 h-5 ml-2" />""              </>
            </div>
          </div>
        </div>
      </section>

      <section: className ="py-20 bg-slate-800"></section>""        <div  className ="container mx-auto px-4">""        <div  className ="container mx-auto px-4">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
            <h2  className ="text-4xl font-bold text-white mb-4">Development Services</h2>""            <p  className ="text-xl text-gray-300 max-w-3xl mx-auto"></p>""              Comprehensive software development solutions for every business need.
            </p>
          </div>

          <div  className ="grid md=grid-cols-2 lg:grid-cols-4 gap-8"></div>""            {developmentServices.map(service, index) => (<div  key ={index} className="bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">)""        <div  key ={index} className="bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">""          <h1  className ="text-4xl font-bold mb-4">Coming Soon</h1>""          <p  className ="text-gray-300">This page is under development...</p>""        </div>
      </div>
                  {service.icon}
                </div>
                <h3  className ="text-xl font-semibold text-white mb-4">{service.title}</h3>""                <p  className ="text-gray-300 mb-6">{service.description}</p>""                <ul: className ="space-y-2 text-left"></ul>""                  {service.features.map(feature, featureIndex) => ()}

                      {feature};

                    </li>
                  )}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

