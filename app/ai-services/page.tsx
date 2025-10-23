import React from "react";
import { BarChart3, FileText, MessageSquare } from "lucide-react";
import { Helmet } from "react-helmet-async";
// Removed unused imports

const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]

  const benefits = [
    
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  
  ];

  return (
<div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">{/* Futuristic Background Effects */}</div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(139,92,246,0.1)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[length:50px_50px]" />{/* Animated Grid Pattern */}</div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[length:100px_100px] animate-pulse" />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 relative z-10">
          <div className="text-center">

            <div className="inline-block mb-6">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 neon-text">AI Services</h1>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">Transform your business with our comprehensive suite of cutting-edge AI-powered solutions</p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/20">
                <div className="text-3xl font-bold text-cyan-400 mb-2">35+</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
                <div className="text-3xl font-bold text-purple-400 mb-2">25K+</div>
                <div className="text-gray-300">Active Users</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-pink-400/20">
                <div className="text-3xl font-bold text-pink-400 mb-2">99.9%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-green-400/20">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">AI Support</div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">AI Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto neon-glow-cyan">Transform your business with our comprehensive suite of AI-powered solutions</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-cyan-400 font-semibold">15+ AI Platforms</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-purple-400 font-semibold">25,000+ Companies</span>
              </div>
              <div className="holographic px-6 py-3 rounded-lg">
                <span className="text-pink-400 font-semibold">99.9% Accuracy</span>
              </div>
            </div>
          </div>
        </section>

{/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4">{categories.map((category) => (</div>
            <button
              key={category}
              className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-white hover:bg-white/20 hover:border-cyan-400/50 transition-all duration-300 font-medium"
            >{category}</button>button>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{services.map((service) => (</div>
            <div
              key={service.id}

              className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden ${
                service.popular ? 'ring-2 ring-purple-500/50 shadow-lg shadow-purple-500/20 neon-glow-purple' : ''
              }`}
            >{/* Animated Background */}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${service.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <div className="flex items-center space-x-2">{service.popular && (</div>
                      <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full flex items-center font-bold shadow-lg">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    )}
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="ml-1 text-sm font-medium">{service.rating}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">{service.name}</h3>

                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                    <Zap className="w-4 h-4 mr-2 text-cyan-400" />
                    Key Features:
                  </h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-cyan-400 text-sm font-medium">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div className="text-sm text-gray-400">{service.users} users</div>
                  <div className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 font-medium">{service.category}</div>
                </div>

                <div className="mb-6">
                  <div className="text-lg font-semibold text-cyan-400 mb-2">{service.pricing}</div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Capabilities:</h4>
                  <ul className="space-y-1">
                    {service.capabilities.map((capability, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
<div className="space-y-3">
                  <a
                    href={service.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >Get Started</a>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                  <a
                    href="/contact"
                    className="w-full border border-cyan-400/50 text-cyan-400 py-3 px-6 rounded-xl font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center"
                  >Learn More</a>a>
                </div>
              </div>

            </div>
          </div>
        </section>

{/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl text-purple-100 mb-8">Join 25,000+ companies already using our cutting-edge AI solutions. Start your free trial today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://ziontechgroup.com/contact"
              className="bg-white text-purple-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300"
            >Start Your Free Trial</a>a>
            <a
              href="tel:+13024640950"
              className="border-2 border-white text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300"
            >Call: +1 (302) 464-0950</a>a>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our AI solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Start Free Trial
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      
      <Footer />
    </>
  );
};

export default AIServicesPage;
