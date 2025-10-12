import React from 'react';
import { Cloud, Database, Users, Server, HardDrive, Monitor, Printer, Router, ArrowRight, CheckCircle, Star, Award, FileText, Activity, Code, Target, Rocket } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

  ];

  // Removed unused categories and services variables

  // Removed unused benefits array

  ];

  // Removed unused benefits variable

    <div className="mi n-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="containe r mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="tex t-center mb-16">
          <h1 className="tex t-4xl md:text-6xl font-bold text-white mb-6">
            <span className="b g-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              IT Services & Infrastructure
            </span>
          </h1>
          <p className="tex t-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Comprehensive IT solutions to support and optimize your business infrastructure. 
            From cloud migration to cybersecurity, we keep your technology running smoothly.
          </p>
          <div className="fle x flex-col sm:flex-row gap-4 justify-center">
            
            >
              Get Free IT Assessment
            </a>
            
            >
              (302) 464-0950
            </a>
          </div>
        </section>

        {/* Main Services Grid */}
        <section className="m b-16">
          <h2 className="tex t-3xl font-bold text-white text-center mb-12">Core IT Services</h2>
          <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div key={index} className="cybe r-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="tex t-cyan-400 mb-4">
                  {React.createElement(service.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="tex t-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="tex t-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="m b-4">
                  <h4 className="tex t-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                  <ul className="tex t-sm text-gray-400 space-y-1">
                      <li key={idx} className="fle x items-center">
                        <CheckCircle className="w-3 h-3 tex t-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="m b-4">
                  <h4 className="tex t-sm font-semibold text-cyan-400 mb-2">Benefits:</h4>
                  <ul className="tex t-sm text-gray-400 space-y-1">
                      <li key={idx} className="fle x items-center">
                        <Star className="w-3 h-3 tex t-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="m b-4">
                  <div className="tex t-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                <div className="m b-4">
                  <h4 className="tex t-sm font-semibold text-cyan-400 mb-2">Technologies:</h4>
                  <div className="fle x flex-wrap gap-1">
                      <span key={idx} className="p x-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                <p className="tex t-gray-300 mb-4">{service.description}</p>
                <ul className="spac e-y-2 mb-6">
                    <li key={featureIndex} className="fle x items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="tex t-center">
                  <div className="tex t-lg font-bold text-cyan-400 mb-2">{service.price}</div>
                  
                  >
                    Learn More <ArrowRight className="w-4 h-4 m l-1" />
                  </a>
                </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="m b-16">
          <h2 className="tex t-3xl font-bold text-white text-center mb-12">Additional IT Services</h2>
          <div className="gri d grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div key={index} className="b g-slate-800/30 backdrop-blur-sm rounded-lg p-4 hover:bg-slate-800/50 transition-all duration-300">
                <div className="fle x items-center mb-3">
                  {React.createElement(service.icon, { className: "w-6 h-6 text-cyan-400 mr-3" })}
                  <h3 className="tex t-lg font-bold text-white">{service.title}</h3>
                </div>
                <p className="tex t-gray-300 text-sm mb-3">{service.description}</p>
                <div className="tex t-cyan-400 font-bold text-sm">{service.price}</div>
            ))}
          </div>
        </section>

        {/* Support Tiers */}
        <section className="m b-16">
          <h2 className="tex t-3xl font-bold text-white text-center mb-12">Support Tiers</h2>
          <div className="gri d grid-cols-1 md:grid-cols-3 gap-8">
            <div className="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="tex t-xl font-bold text-white mb-4">Basic Support</h3>
              <div className="tex t-3xl font-bold text-cyan-400 mb-4">$199/month</div>
              <ul className="spac e-y-2 mb-6">
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Business hours support
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Remote assistance
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Basic monitoring
                </li>
              </ul>
              
              >
                Get Started
              </a>
            </div>
            <div className="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6 border-2 border-cyan-500">
              <h3 className="tex t-xl font-bold text-white mb-4">Professional Support</h3>
              <div className="tex t-3xl font-bold text-cyan-400 mb-4">$499/month</div>
              <ul className="spac e-y-2 mb-6">
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  24/7 support
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  On-site visits
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Advanced monitoring
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Priority response
                </li>
              </ul>
              
              >
                Get Started
              </a>
            </div>
            <div className="b g-slate-800/50 backdrop-blur-sm rounded-xl p-6">
              <h3 className="tex t-xl font-bold text-white mb-4">Enterprise Support</h3>
              <div className="tex t-3xl font-bold text-cyan-400 mb-4">Custom</div>
              <ul className="spac e-y-2 mb-6">
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Dedicated team
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Custom SLAs
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Proactive monitoring
                </li>
                <li className="fle x items-center text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 tex t-green-400 mr-2" />
                  Strategic consulting
                </li>
              </ul>
              
              >
                Contact Sales
              </a>
            </div>
        </section>

        {/* CTA Section */}
        <section className="tex t-center">
          <div className="b g-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-2xl p-8">
            <h2 className="tex t-3xl font-bold text-white mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="tex t-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free IT assessment and discover how our services can improve your technology infrastructure and reduce costs.
            </p>
            <div className="fle x flex-col sm:flex-row gap-4 justify-center">
              
              >
                Get Free IT Assessment
              </a>
              
              >
                (302) 464-0950
              </a>
            </div>
          </section>
        </main>
        <Footer />
      </div>
  );
};

export default ITServicesPage;
