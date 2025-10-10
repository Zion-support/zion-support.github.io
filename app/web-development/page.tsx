









        title="Web Development Services - Zion Tech Group"
          </SEOOptimizer>
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
          </SEOOptimizer>

const WebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive web applications with cutting-edge technologies',
      icon: Code,
      price: '$1,200/month',
      features: ['React/Next.js', 'Vue.js/Angular', 'Responsive Design', 'PWA Development'],
      benefits: ['50% faster load times', 'Mobile-first approach', 'SEO optimized'],
      color: 'text-blue-400'
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side solutions and API development',
      icon: Database,
      price: '$1,500/month',
      features: ['Node.js/Python', 'RESTful APIs', 'Microservices', 'Database Design'],
      benefits: ['99.9% uptime', 'Scalable architecture', 'Secure APIs'],
      color: 'text-green-400'
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web solutions from frontend to backend',
      icon: Globe,
      price: '$2,200/month',
      features: ['End-to-end development', 'Cloud deployment', 'DevOps integration', 'Testing & QA'],
      benefits: ['Unified solution', 'Faster development', 'Better performance'],
      color: 'text-purple-400'
    },
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms and online stores',
      icon: Smartphone,
      price: '$1,800/month',
      features: ['Custom platforms', 'Payment integration', 'Inventory management', 'Analytics'],
      benefits: ['Higher conversion rates', 'Mobile optimized', 'Secure payments'],
      color: 'text-orange-400'
    },
    {
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support for your web applications',
      icon: Users,
      price: '$500/month',
      features: ['24/7 Support', 'Regular Updates', 'Bug Fixes', 'Performance Monitoring'],
      color: 'text-gray-400'
    }
  ]
          </SEOOptimizer>

  const technologies = [
    { name: 'React/Next.js', icon: Code, description: 'Modern frontend frameworks' },
    { name: 'Node.js', icon: Database, description: 'Server-side JavaScript' },
    { name: 'Python/Django', icon: Globe, description: 'Backend development' },
    { name: 'MongoDB/PostgreSQL', icon: Database, description: 'Database solutions' },
    { name: 'AWS/Azure', icon: Cloud, description: 'Cloud platforms' },
    { name: 'Docker/Kubernetes', icon: Shield, description: 'Containerization' }
  ]
          </SEOOptimizer>

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan',
      icon: BarChart
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Create wireframes and prototypes to visualize your solution',
      icon: Code
    },
    {
      step: '03',
      title: 'Development',
      description: 'Build your web application using modern technologies and best practices',
      icon: Globe
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment with ongoing support',
      icon: Shield
    }
  ]
          </SEOOptimizer>

  return (
    <>
      <SEOOptimizer
        title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, and e-commerce solutions. Modern technologies and best practices."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'React', 'Node.js']}
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
          {/* Hero Section */}
          <section className="text-center mb-16"></section>
          </SecurityEnhancer>
            <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
          </section>
              Web Development Services;</h1>
          </h1>
            </h1>,
          </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">,
          </h1>
              Build modern, scalable, and high-performance web applications with our expert development team.
          </p>
              From frontend to backend, we deliver solutions that drive business growth.
          </p>
            </p>
          </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
          </p>
              <a
          </div>
                Start Your Project
          </a>
              </a>
          </a>
              <a
          </a>
                Call +1 302 464 0950
          </a>
              </a>
          </a>
            </div>,
          </a>
          </section>,
          </a>
,
          </a>
          {/* Services Grid */}
                      <h3 className="text-2xl font-bold text-white mb-2 neon-text">{service.title}</h3>
                      <div className={`font-semibold ${service.color}`}>{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {service.benefits && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-300">
                            <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                    Get Started
          </li>
                  </a>,
          </li>
                </div>))}
                  
                  <a
                    href="/contact"
                    className="w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 hover:scale-105 cyber-button block"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <tech.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-300">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process */}
          <section className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Development Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
          {/* CTA Section */}
          <section className="text-center"></section>
          </p>
            <div className="cyber-card p-12 max-w-4xl mx-auto"></div>
          </section>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Build Your Next Web Application?<p className="text-xl text-gray-300 mb-8">Let's discuss your project requirements and create a custom solution that drives your business forward.</p>
          </div>
              <h2 className="text-3xl md: text-4xl font-bold text-white mb-6 neon-text">
          </h2>
                Ready to Build Your Next Web Application?
          </h2>
              </h2>
          </h2>
              <p className="text-xl text-gray-300 mb-8">
          </h2>
                Let's discuss your project requirements and create a custom solution that drives your business forward.
          </p>
              </p>
          </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
          </p>
                <a
          </div>
                  Start Your Project
          </a>
                </a>
          </a>
                <a
          </a>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
          </a>
}
          </a>

export default WebDevelopmentPage
          </a>
