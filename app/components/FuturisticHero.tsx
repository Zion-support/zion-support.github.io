import React  from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
      <Helmet>
        <title>Futuristic Hero Solutions | Zion Tech Group</title>
        <meta name="description" content="Professional futuristic hero services by Zion Tech Group. Advanced AI and IT solutions for your business." / / />
        <meta name="keywords" content="futuristic hero, AI solutions, IT services, Zion Tech Group, hero solutions" / / />
      </Helmet>

      {/* Hero Section */}

      <section className="relative py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400bg-clip-texttext-transparent"  />Futuristic Hero
              </span>
              <br / />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Transform your business with our advanced futuristic hero solutions.
              Powered by cutting-edge AI technology and industry expertise.

            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300flex items-center" />
                Get Started

                <ArrowRight className="ml-2h-5w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Learn More
              </button>
            </div>
        </div>
      </section>

      {/* Features Section */}

      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Why Choose Our Futuristic Hero Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Our futuristic hero solutions deliver unmatched performance, security, and scalability.

            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">
            {features.map((feature, index) => (

              <div key="{index}" className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20transition-allduration-300" />
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600rounded-lgmb-4">
                  <feature.icon className="h-6w-6text-white" />
                </div>
                <h3 className="text-xl font-semiboldtext-white mb-3"  >{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}

          </div>
      </section>

      {/* Benefits Section */}

      <section className="py-20 px-4 sm:px-6lg:px-8bg-white/5" />
        <div className="max-w-7xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4"  />Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Experience the power of our futuristic hero solutions for your business.

            </p>
          </div>
          <div className="grid grid-cols-1md:grid-cols-2gap-6">
            {benefits.map((benefit, index) => (
              <div key="{index}" className="flex items-startspace-x-3" />
                <CheckCircle className="h-6 w-6 text-purple-400mt-1flex-shrink-0" />
                <p className="text-gray-300text-lg">{benefit}</p>
              </div>
            ))}

          </div>
      </section>

      {/* Contact Section */}

      <section className="py-20 px-4sm:px-6lg:px-8" />
        <div className="max-w-7xlmx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3 xl p-12 borderborder-white/20text-center">
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-6"  />Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xlmx-auto">
              Contact us today to learn more about our futuristic hero solutions and how they can benefit your business.

            </p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700transition-allduration-300"  />Contact Us
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900transition-allduration-300">Schedule Demo
              </button>
            </div>
        </div>
      </section>
    </div>

};
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
