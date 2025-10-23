'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react'

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
  ]

  return (
    <>
      <Helmet>
        <title>AI Smart Home Controller Pro - Intelligent Home Automation | Zion Tech Group</title>
        <meta name="description" content="Control your smart home with AI-powered automation. Voice control, predictive maintenance, energy optimization, and security integration for the ultimate smart home experience." />
        <meta name="keywords" content="AI, artificial intelligence, Page, AI solutions, intelligent automation" />
      </Helmet>
<<<<<<< HEAD
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-blue-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Page
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Control your smart home with AI-powered automation. Voice control, predictive maintenance, energy optimization, and security integration for the ultimate smart home experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
=======

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-green-500/10 border border-green-400/20 rounded-full px-6 py-3 mb-8">
              <Home className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-300 font-medium">AI Smart Home Controller Pro</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent neon-text">Intelligent Home Automation</h1>h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">Control Your Home with AI-Powered Intelligence</p>p>

            <p className="text-lg text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">Transform your home into a smart, energy-efficient, and secure environment.</p>
              Control everything with voice commands, automate routines, and optimize energy usage with advanced AI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25">
                <span className="relative z-10">Start Free Trial</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
              </button>
              <button className="border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Learn More
              </button>
            </div>
<<<<<<< HEAD
=======

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-400">Device Types</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">30%</div>
                <div className="text-gray-400">Energy Savings</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-400">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Smart Home Dashboard */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Smart Home Dashboard</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Control and monitor all your smart devices from one place</p>p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Powerful AI-driven features designed to transform your business operations
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="h-12 w-12 text-emerald-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-emerald-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
=======
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">{/* Devices Control */}</div>
              <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Home className="w-8 h-8 text-green-400 mr-3" />
                  Smart Devices
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{devices.map((device) => (</div>
                    <div key={device.id} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-white font-semibold">{device.name}</h4>
                        <button
                          onClick={() =>toggleDevice(device.id)}</button>
                          className={`w-12 h-6 rounded-full transition-colors ${
                            device.status === 'on' ? 'bg-green-500' : 'bg-gray-600'
                          }`}
                        >
                          <div className={`w-5 h-5 bg-white rounded-full transition-transform ${
                            device.status === 'on' ? 'translate-x-6' : 'translate-x-0.5'
                          }`} />
                        </button>
                      </div>

                      <p className="text-gray-400 text-sm mb-3">{device.room}</p>

                      {device.type === 'light' && (
                        <div className="space-y-2">
                          <label className="text-gray-300 text-sm">Brightness: {device.brightness}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={device.brightness}
                            onChange={(e) => adjustBrightness(device.id, parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}

                      {device.type === 'thermostat' && (
                        <div className="space-y-2">
                          <label className="text-gray-300 text-sm">Temperature: {device.temperature}°F</label>
                          <input
                            type="range"
                            min="60"
                            max="80"
                            value={device.temperature}
                            onChange={(e) => adjustTemperature(device.id, parseInt(e.target.value))}
                            className="w-full"
                          />
                        </div>
                      )}

                      {device.type === 'speaker' && (
                        <div className="space-y-2">
                          <label className="text-gray-300 text-sm">Volume: {device.volume}%</label>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={device.volume}
                            onChange={(e) => setDevices(devices.map(d =>
                              d.id === device.id ? { ...d, volume: parseInt(e.target.value) } : d
                            ))}
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Scenes and Energy */}
              <div className="space-y-8">{/* Scenes */}</div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Settings className="w-6 h-6 text-green-400 mr-2" />
                    Scenes
                  </h3>
                  <div className="space-y-3">{scenes.map((scene) => (</div>
                      <button
                        key={scene.id}
                        onClick={() =>activateScene(scene.id)}</button>
                        className={`w-full p-3 rounded-lg border transition-all ${
                          scene.active
                            ? 'border-green-400 bg-green-400/10'
                            : 'border-white/20 hover:border-green-400/50'
                        }`}
                      >
                        <div className="flex items-center">
                          <scene.icon className="w-5 h-5 text-green-400 mr-3" />
                          <span className="text-white font-medium">{scene.name}</span>
                        </div>
                      </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Solution</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of cutting-edge AI technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{benefit}</p>
                </div>
              ))}
=======
      {/* Features Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Smart Home Features</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Advanced AI-powered features for the ultimate smart home experience</p>p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">{features.map((feature, index) => (</div>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-semibold">{feature.price}</span>
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20 bg-gradient-to-br from-slate-800 via-green-900 to-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Smart Home Plans</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Choose the smart home plan that fits your needs</p>p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">{pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm border rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 ${plan.popular ? 'border-green-400/50 ring-2 ring-green-400/30' : 'border-white/10'}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-400 to-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full">Most Popular</span>span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700 transform hover:scale-105'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>{plan.popular ? 'Get Started' : 'Choose Plan'}</button>button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">Transform Your Home Today</h2>h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">Contact our smart home experts to get started with your AI-powered home automation</p>p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-400 mr-3" />
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-green-400 transition-colors">+1 (302) 464-0950</a>a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-400 mr-3" />
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-green-400 transition-colors">kleber@ziontechgroup.com</a>a>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <div className="text-gray-300">
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown, DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Professional installation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">30-day money back guarantee</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-gray-300">24/7 support</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">Schedule Consultation</button>button>
              </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
            </div>
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
      </div>
      <Footer />
    </>
  );
<<<<<<< HEAD
};

export default PagePage;
=======
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-final
