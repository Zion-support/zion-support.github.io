import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Sparkles, CheckCircle, Target, Zap } from 'lucide-react';

const CybersecurityAuditPage = () => 
    },
    
    },
    
    },
    
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden" />
      <Helmet />
        <title>Cybersecurity Audit - Zion Tech Group</title>
        <meta name="description" content="Professional cybersecurity audit services including vulnerability assessment, penetration testing, and compliance verification to protect your business." />
        <meta name="keywords" content="cybersecurity audit, security assessment, penetration testing, vulnerability scanning, compliance audit, security consulting" />
        <link rel="canonical" href="https://ziontechgroup.com/cybersecurity-audit" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" />
        <div className="absolute inset-0 overflow-hidden" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10" />
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6" />
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Security Excellence</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400" />
              Cybersecurity Audit
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" />
            Protect your business with comprehensive cybersecurity audits. Identify vulnerabilities, 
            ensure compliance, and strengthen your security posture with expert assessment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16" />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
             />
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
             />
              Watch Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" />
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" />
              Our cybersecurity audit services provide complete protection assessment 
              using industry-leading tools and methodologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
            
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
               />
                <div
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                 />
                  {feature.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors" />
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed text-sm md:text-base" />
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50" />
        <div className="max-w-7xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Secure Your Business Future
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Protect your business with professional cybersecurity audit services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
            
              <div key={index} className="flex items-center space-x-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20" />
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30" />
        <div className="max-w-4xl mx-auto text-center" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" />
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed" />
            Don't wait for a security breach. Get a comprehensive cybersecurity audit 
            and protect your business today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center" />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
             />
              Start Security Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
             />
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityAuditPage;
