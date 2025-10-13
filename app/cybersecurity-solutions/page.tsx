import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, AlertTriangle, CheckCircle, ArrowRight, Brain, Users, Star, Activity, Database, FileText } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import { Helmet } from 'react-helmet-async';

const CybersecuritySolutions = () => 
  const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];

  const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];

  const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];

  const services = [
    
    },
    
    },
    
    },
    
    }
  ];

  const pricingPlans = [
    
    },
    
    },
    
    }
  ];

  const capabilities = [
    
    },
    
    },
    
    },
    
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900" />
      <Helmet />
        <title>Cybersecurity Solutions - Advanced Security Services | Zion Tech Group</title>
        <meta name="description" content="Protect your business with our comprehensive cybersecurity solutions. AI-powered threat detection, zero trust architecture, and 24/7 monitoring. Get started today!" />
        <meta name="keywords" content="cybersecurity, security solutions, threat detection, zero trust, data protection, compliance, security audit, penetration testing" />
        <link rel="canonical" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" />
        <div className="absolute inset-0 overflow-hidden" />
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <ResponsiveContainer className="text-center relative z-10" />
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6" />
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Advanced Cybersecurity Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400" />
              Cybersecurity Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed" />
            Protect your business with our comprehensive cybersecurity solutions. From AI-powered threat detection 
            to zero trust architecture, we provide enterprise-grade security that adapts to evolving threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12" />
            <FuturisticButton
               />
              Get Protected
            </FuturisticButton>
            <FuturisticButton
               />
              Explore Solutions
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto" />
            
              <div key={index} className="text-center group" />
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300" />
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" />
        <ResponsiveContainer />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" />
              Why Choose Our Cybersecurity Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" />
              Our advanced security technologies and expert team provide comprehensive protection against the most sophisticated cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
            
                key={index}
                className="group hover:scale-105 transition-all duration-300"
               />
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-red-400 transition-colors" />
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed" />
                  {capability.description}
                </p>
                <div className="text-center" />
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-400" />
                    {capability.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50" />
        <ResponsiveContainer />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Our Cybersecurity Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Comprehensive security solutions designed to protect your business from all types of cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
            
                key={index}
                className="group hover:scale-105 transition-all duration-300"
               />
                <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-red-400 transition-colors" />
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed" />
                  {service.description}
                </p>
                <div className="space-y-2 mb-6" />
                  
                    <div key={idx} className="flex items-center text-sm text-gray-300" />
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature.title}
                    </div>
                  ))}
                </div>
                <div className="text-center" />
                  <span className="text-red-400 font-semibold text-lg">{service.price}</span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8" />
        <ResponsiveContainer />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              Choose the security plan that provides the right level of protection for your organization
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" />
            
                key={index}
                className=
                }`}
               />
                
                )}
                
                <div className="text-center mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" />
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8" />
                  
                    <li key={idx} className="flex items-center text-sm text-gray-300" />
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature.title}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#contact"}
                  variant={plan.popular ? "primary" : "outline"}
                  className="w-full"
                 />
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50" />
        <ResponsiveContainer />
          <div className="text-center mb-16" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" />
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
              See how organizations are using our cybersecurity solutions to protect their critical assets
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
            
                key={index}
                className="group hover:scale-105 transition-all duration-300"
               />
                <div className="flex items-center mb-4" />
                  
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed" />
                  "{testimonial.content}"
                </p>
                <div className="flex items-center" />
                  <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-3" />
                    {`/avatars/avatar-${index + 1}.jpg`}
                  </div>
                  <div />
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30" />
        <ResponsiveContainer />
          <div className="text-center" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6" />
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" />
              Don't wait for a breach to happen. Protect your organization with our comprehensive cybersecurity solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center" />
              <FuturisticButton
                 />
                Get Protected Now
              </FuturisticButton>
              <FuturisticButton
                 />
                Schedule Security Audit
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400" />
              <p>Free security assessment • Custom solutions • 24/7 support</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CybersecuritySolutions;
