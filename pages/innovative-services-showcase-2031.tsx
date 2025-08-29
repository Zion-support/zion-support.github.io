import React from 'react.ts';
import { Helmet  } from 'react-helmet-async.ts';
import { innovativeMicroSaasServices2031, 
  innovativeITInfrastructureServices2031, 
  innovativeAIServices2031 
 } from '../src/data/innovativeServices2031';
import { Brain, 
  Cloud, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Phone,
  Mail,
  Globe,
  MapPin,
  ArrowRight,
  Rocket,
  Target,
  Award,
  Clock
 } from 'lucide-react.ts';

const InnovativeServicesShowcase2031: React.FC = (): JSX.Element => {
  const scrollToContact = () => {
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Head>
        <title>Innovative Services 2031 - Zion Tech Group | Cutting-Edge Micro SAAS, IT & AI Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's revolutionary 2031 services portfolio featuring quantum computing, AI-powered solutions, and next-generation IT infrastructure. Transform your business with our innovative micro SAAS, IT services, and AI solutions." />
        <meta name="keywords" content="innovative services 2031, quantum computing, AI services, IT infrastructure, micro SAAS, Zion Tech Group, cutting-edge technology, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/innovative-services-showcase-2031" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mb-4">
                <Rocket className="w-4 h-4 mr-2" />
                Revolutionary Services 2031
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Technology</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Starts Here</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Experience Zion Tech Group's cutting-edge portfolio of innovative micro SAAS, IT infrastructure, and AI services designed to revolutionize your business in 2031 and beyond.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button 
                onClick={() => document.getElementById('services-overview')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Explore Services
              </button>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section id="services-overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Three Pillars of Innovation
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our comprehensive service portfolio is built on three foundational pillars, each designed to deliver breakthrough results and competitive advantages.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Micro SAAS Services */}
              <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 p-8 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Micro SAAS Solutions</h3>
                  <p className="text-gray-300">Revolutionary software-as-a-service platforms that transform business operations</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    Quantum computing workflow management
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    Neural network synchronization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    Blockchain orchestration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                    Cybersecurity automation
                  </li>
                </ul>
              </div>

              {/* IT Infrastructure Services */}
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cloud className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">IT Infrastructure</h3>
                  <p className="text-gray-300">Next-generation infrastructure solutions for the digital age</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Quantum cloud infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Edge computing orchestration
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Green IT solutions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3" />
                    Zero-trust architecture
                  </li>
                </ul>
              </div>

              {/* AI Services */}
              <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-2xl border border-green-500/30 backdrop-blur-sm">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">AI Services</h3>
                  <p className="text-gray-300">Cutting-edge artificial intelligence solutions for complex challenges</p>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Quantum AI hybrid platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Autonomous research assistant
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Predictive healthcare
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Financial trading intelligence
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Micro SAAS Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Micro SAAS Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your business operations with our cutting-edge micro SAAS platforms designed for the future.
              </p>
            </div>

            <div className="space-y-8">
              {innovativeMicroSaasServices2031.map((service) => (
                <div key={service.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800 mr-3">
                          {service.category}
                        </span>
                        <span className="text-sm text-gray-400">{service.pricing}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">{service.name}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      
                      <div className="flex items-center mb-6">
                        <span className="text-3xl font-bold text-white">${service.price.toLocaleString()}</span>
                        <span className="text-gray-400 ml-2">/month</span>
                        <span className="ml-4 text-sm text-gray-400">Market: {service.marketPrice}</span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <div className="text-sm text-gray-400">ROI</div>
                          <div className="text-white font-semibold">{service.roi}</div>
                        </div>
                        <div className="text-center p-3 bg-white/5 rounded-lg">
                          <div className="text-sm text-gray-400">Setup Time</div>
                          <div className="text-white font-semibold">{service.setupTime}</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 mb-6">
                        <span className="text-sm text-gray-400">Innovation Level:</span>
                        <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          {service.innovationLevel}
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.features.slice(0, 6).map((feature, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                        <div className="space-y-2">
                          {service.benefits.slice(0, 3).map((benefit, index) => (
                            <div key={index} className="flex items-center text-sm text-gray-300">
                              <TrendingUp className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.tags.slice(0, 4).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-white/10 text-xs text-gray-300 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <button 
                        onClick={scrollToContact}
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact-section" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Let's discuss how our innovative services can revolutionize your operations and drive unprecedented growth.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-300">+1 302 464 0950</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-300">kleber@ziontechgroup.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <div className="text-gray-300">https://ziontechgroup.com</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Address</div>
                      <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                  <h4 className="text-lg font-semibold text-white mb-3">Why Choose Zion Tech Group?</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Industry-leading innovation and expertise
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Proven track record of successful implementations
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Comprehensive support and maintenance
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      Competitive pricing with exceptional ROI
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Request a Consultation</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Company</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-500">
                      <option value="">Select a service</option>
                      <option value="micro-saas">Micro SAAS Solutions</option>
                      <option value="it-infrastructure">IT Infrastructure</option>
                      <option value="ai-services">AI Services</option>
                      <option value="consultation">General Consultation</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white font-medium mb-2">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                      placeholder="Tell us about your project or requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Don't Wait for the Future
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              The future of technology is here, and it's waiting for you. Join the companies already transforming their operations with Zion Tech Group's innovative services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <a 
                href="https://ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                Visit Our Website
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default InnovativeServicesShowcase2031;