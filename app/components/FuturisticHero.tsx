import React from 'react';
'use client'

const FuturisticHeroPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses',
    }
  ];
  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />
      <Helmet />
        <title>Futuristic Hero Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional futuristic hero services by Zion Tech Group. Advanced AI and IT solutions for your business."  />
        <meta name="keywords" content="futuristic hero, AI solutions, IT services, Zion Tech Group, hero solutions"  />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto">
        <div className="text-center">
            <h1 className="text-4xlmd:text-6xlfont-bold text-whitemb-6" />
              <span className="bg-gradient-to-rfrom-purple-400 to-blue-400 bg-clip-text text-transparent"  />Futuristic Hero
              </span>
              <br />
              <span className="text-white"  >Solutions</span>
            </h1>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced futuristic hero solutions.
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" />
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8py-3rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center" />
                Get Started
                <ArrowRight className="ml-2 h-5w-5" />
              </button>
              <button className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-gray-900 transition-all duration-300"  />Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Why Choose Our Futuristic Hero Solutions?
            </h2>
            <p className="text-xltext-gray-300 max-w-3xl mx-auto">
              Our futuristic hero solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-4gap-8" />
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300" />
                <div className="flex items-center justify-center w-12h-12bg-gradient-to-rfrom-purple-500 to-blue-600 rounded-lg mb-4" />
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xlfont-semibold text-whitemb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20px-4sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xl mx-auto">
        <div className="text-centermb-16">
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Key Benefits
            </h2>
            <p className="text-xltext-gray-300 max-w-3xl mx-auto">
              Experience the power of our futuristic hero solutions for your business.
            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6" />
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3" />
                <CheckCircle className="h-6w-6text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20px-4sm:px-6lg:px-8" />
        <div className="max-w-7xl mx-auto">
        <div className="bg-white/10 backdrop-blur-sm rounded-3 xl p-12 border border-white/20 text-center">
            <h2 className="text-3xlmd:text-4xl font-bold text-white mb-6"  />Ready to Get Started?
            </h2>
            <p className="text-xltext-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our futuristic hero solutions and how they can benefit your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" />
              <button className="bg-gradient-to-rfrom-purple-500 to-blue-600 text-whitepx-8py-3rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300"  />Contact Us
              </button>
              <button className="border border-white text-whitepx-8py-3rounded-lg font-semibold hover:bg-whitehover:text-gray-900 transition-all duration-300"  />Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};