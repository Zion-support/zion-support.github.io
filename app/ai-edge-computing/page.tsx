    <React.Fragment>
import React  from 'react';
const AiEdgeComputingPage: React.FC = () => {
  return (
      <Helmet>
        <title>Ai Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Ai Edge Computing solutions by Zion Tech Group" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/20 to-purple-800/20 opacity-20"></section>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"></h1>
            AI Edge Computing
          </h1>
          <p className="text-xl md:text-2 xl text-gray-300 mb-8 max-w-4 xl mx-auto"></p>
            Bring artificial intelligence to the edge of your network. Process data locally with ultra-low latency, 
            enhanced security, and real-time decision making capabilities.
          </p>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Edge Computing
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai edge computing solution for modern businesses.
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button>
              Deploy Edge AI
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>View</butto></<<butto>Solutions</butto>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;10ms</div>
              <div className="text-gray-400">Response Time</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-pink-400 mb-2">50%</div>
              <div className="text-gray-400">Bandwidth Savings</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-400">Offline Operation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-5xl font-bold text-white mb-6">Edge Computing Features</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"></p>
              Powerful edge computing capabilities that bring AI and real-time processing to your data sources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div></div></div></div></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {features.map((feature, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div></div></div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Real-World Applications
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              See how edge computing is transforming industries with real-time AI processing.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
            {useCases.map((useCase, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mr-4"></div>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2 xl font-bold text-white">{useCase.title}</h>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2"></div>
                  {useCase.benefits.map((benefit, benefitIndex) => (</div>
                    <div key={benefitIndex} className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edge Devices Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8"></section>
        <div className="max-w-7xl mx-auto"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Edge Computing Devices
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              Comprehensive range of edge devices designed for different applications and environments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {edgeDevices.map((device, index) => (</div>
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-green-400/20 rounded-xl p-6 hover:border-green-400/40 transition-all duration-300"></div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                    <device.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{device.name}</h>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{device.description}</p>
                  <div className="space-y-1"></div>
                    {device.specs.map((spec, specIndex) => (</div>
                      <div key={specIndex} className="text-xs text-gray-400"></div>
                        • {spec}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Edge Computing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              Flexible pricing options to match your edge computing requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {pricingPlans.map((plan, index) => (</div>
              <div key={index} className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 relative ${
                plan.popular ? 'border-cyan-400/40 ring-2 ring-cyan-400/20' : 'border-gray-700'
              }`}></div>
                {plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full"></span>
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8"></div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8"></u>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300"></l>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" /></CheckCircl>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}></button></<<<butto>Get</butto></<<butto>Started</butto>
                </button>
                <button className="border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
              </div></div></div>
            </div>
          </div>
        </div>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"></section>
          <div className="text-center mb-20"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto leading-relaxed"></p>
              See how organizations are leveraging edge computing for competitive advantage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
            {testimonials.map((testimonial, index) => (</div>
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"></div>
                <div className="flex items-center mb-4"></div>
                  <div className="flex text-yellow-400"></div>
                    {[...Array(5)].map((_, i) => (</div>
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 italic"></p>
                  "{testimonial.content}"
                </p>
                <div className="flex items-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4"></div>
                    {testimonial.avatar}
                  </div>
                  <div></div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-xs">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10"></section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"></section>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8"></h2>
            Deploy AI at the Edge
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed"></p>
            Transform your operations with real-time AI processing at the edge of your network.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-4 px-8 rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center"></button>
              Start Deployment
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border-2 border-cyan-400 text-cyan-400 font-semibold py-4 px-8 rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"></button></<<<butto>Schedule</butto></<<butto>Demo</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
    </React.Fragment>
  );
}
import React from 'react';

const AiEdgeComputingPage: React.FC = () => {return (
    <>
      <title>AiEdgeComputing - Zion Tech Group</title>

      <  />
  );}

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function AiedgecomputingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Ai Edge Computing - Zion Tech Group</title>
        <meta name="description" content="Professional ai edge computing services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Ai Edge Computing</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai edge computing services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

      <div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        <div className="container mx-autopx-4py-16">
          <div className="text-centermb-16">
            <h1 className="text-4xl md:text-6 xl font-bold text-white mb-6" />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent"  />Ai Edge Computing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xlmx-auto">
              Professional ai edge computing services by Zion Tech Group.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xlp-8text-center">
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="text-gray-300 mb-6">
              We're working on bringing you comprehensive ai edge computing solutions. 
              Contact us to learn more about our services.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600transition-allduration-300">Contact Us
            </button>
          </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div>

  );
};

export default AiEdgeComputingPage;
