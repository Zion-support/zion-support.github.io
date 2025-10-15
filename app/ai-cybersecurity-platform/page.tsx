import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { BarChart3, Brain, Bug, CheckCircle, Eye, Lock, Mail, Network, Phone, Play, Shield, Star, Users, User, Helmet } from 'lucide-react';

const AiCybersecurityPlatformPage: React.FC = () => { const [isVisible, setIsVisible] = useState(false); useEffect(() => { setIsVisible(true); }, []);
""
const features = [ { icon: <Brain className="w-6 h-6" />, title: "AI Threat Detection", description: "Advanced machine learning algorithms that detect and prevent cyber threats in real-time.", benefits: ["Real-time detection", "Zero-day protection", "Behavioral analysis", "Predictive security"] }, { icon: <Shield className="w-6 h-6" />, title: "Advanced Firewall", description: "Next-generation firewall with AI-powered traffic analysis and threat blocking.", benefits: ["Deep packet inspection", "Application control", "Intrusion prevention", "VPN integration"] }, { icon: <Eye className="w-6 h-6" />, title: "Security Monitoring", description: "24/7 security operations center with AI-driven threat hunting and incident response.", benefits: ["24/7 monitoring", "Threat hunting", "Incident response", "Forensic analysis"] }, { icon: <Lock className="w-6 h-6" />, title: "Data Protection", description: "Comprehensive data encryption, backup, and recovery solutions for all your critical assets.", benefits: ["End-to-end encryption", "Automated backups", "Disaster recovery", "Compliance management"] }, { icon: <Users className="w-6 h-6" />, title: "Identity Management", description: "Multi-factor authentication and identity access management with AI-powered risk assessment.", benefits: ["MFA enforcement", "Single sign-on", "Risk-based access", "Privilege management"] }, { icon: <BarChart3 className="w-6 h-6" />, title: "Security Analytics", description: "Comprehensive security dashboards and reporting with AI-driven insights and recommendations.", benefits: ["Real-time dashboards", "Custom reports", "Risk assessment", "Compliance reporting"] } ];
""
const threatTypes = [ { title: "Malware Protection", description: "Advanced detection and prevention of malware, ransomware, and other malicious software", icon: <Bug className="w-8 h-8" />, coverage: "99.9%" }, { title: "Phishing Defense", description: "AI-powered email security that identifies and blocks sophisticated phishing attempts", icon: <Mail className="w-8 h-8" />, coverage: "99.7%" }, { title: "DDoS Mitigation", description: "Real-time protection against distributed denial-of-service attacks", icon: <Network className="w-8 h-8" />, coverage: "100%" }, { title: "Insider Threats", description: "Behavioral analysis to detect and prevent insider threats and data exfiltration", icon: <Users className="w-8 h-8" />, coverage: "98.5%" } ];
""
const pricingPlans = [ { name: "Essential", price: "$299", period: "month", description: "Perfect for small businesses and startups", features: [ "Basic threat detection", "Email security", "Firewall protection", "24/7 monitoring", "Email support", "Up to 50 users", "Basic reporting" ], popular: false }, { name: "Professional", price: "$699", period: "month", description: "Ideal for growing companies with advanced security needs", features: [ "Advanced AI detection", "Full security suite", "Incident response", "Priority support", "Up to 500 users", "Advanced analytics", "Compliance tools", "Custom integrations" ], popular: true }, { name: "Enterprise", price: "$1,499", period: "month", description: "Complete security solution for large organizations", features: [ "Full AI capabilities", "Custom security policies", "Dedicated SOC team", "24/7 phone support", "Unlimited users", "Custom development", "On-premise deployment", "White-label options" ], popular: false } ];
""
const testimonials = [ { name: "Michael Chen", company: "FinTech Solutions", role: "CISO", content: "The AI cybersecurity platform has reduced our security incidents by 95%. The predictive capabilities are game-changing.", rating: 5 }, { name: "Sarah Williams", company: "Healthcare Corp", role: "IT Director", content: "HIPAA compliance has never been easier. The automated monitoring and reporting save us hours every week.", rating: 5 }, { name: "David Rodriguez", company: "Manufacturing Inc", role: "Security Manager", content: "The threat detection is incredibly accurate. We've prevented several potential breaches before they could cause damage.", rating: 5 } ];
""
const complianceStandards = [ { name: "SOC 2", description: "Security controls" }, { name: "ISO 27001", description: "Information security" }, { name: "GDPR", description: "Data protection" }, { name: "HIPAA", description: "Healthcare privacy" }, { name: "PCI DSS", description: "Payment security" }, { name: "NIST", description: "Cybersecurity framework" } ];
  return (
    <>
      <Helmet> <title>AI Cybersecurity Platform - Advanced Threat Protection | Zion Tech Group</title> <meta name="description" content="Protect your business with our AI-powered cybersecurity platform. Advanced threat detection, 24/7 monitoring, and compliance management for modern enterprises." /> <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, data protection, compliance, SOC 2, HIPAA, GDPR" /> <meta property="og:title" content="AI Cybersecurity Platform - Zion Tech Group" /> <meta property="og:description" content="Advanced AI-powered cybersecurity platform with real-time threat detection and protection" /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com/ai-cybersecurity-platform" /> </Helmet>
      <div className="min-h-screen" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden> { /* Animated Background */ } 
        <div className="absolute" inset-0> 
        <div className="absolute" top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse></div> 
        <div className="absolute" top-40 right-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000></div> 
        <div className="absolute" bottom-20 left-1/4 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-2000></div> </div>
        { /* Grid Pattern */ }
        
        <div className="absolute" inset-0 opacity-20>
          
        <div className="h-full" w-full></div>
        </div>
        <main className="relative" z-10>
          { /* Hero Section */ }
          <section className="relative" py-20 overflow-hidden>
            
        <div className="container" mx-auto px-4>
              <div className="{" `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex" items-center px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-8>
                  <Shield className="w-4" h-4 mr-2 />
                  #1 AI Security Platform
                </div>
                
          <h1 className="text-5xl" md:text-7xl font-bold text-white mb-6 leading-tight>
                  <span className="bg-gradient-to-r" from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent>
                    AI Cybersecurity Platform
                  </span>
                </h1>
                
          <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto>
                  Protect your business with advanced AI-powered cybersecurity. 
                  Real-time threat detection, 24/7 monitoring, and comprehensive compliance management.
                </p>
                
        <div className="flex" flex-col sm:flex-row gap-4 justify-center mb-12>
                  <a"
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center">
                    <Phone className="w-5" h-5 mr-2 />
                    Get Security Assessment
                  </a>
                  <a"
                    href="#demo"
                    className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5" h-5 mr-2 />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900 relative>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-red-400 to-orange-400 bg-clip-text text-transparent>
                    Advanced Security Features
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Comprehensive cybersecurity protection powered by artificial intelligence and machine learning.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-2 lg:grid-cols-3 gap-8>
                { features.map((feature, index) => (
                  <div 
                    key={index } "
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 neon-card">
                    
        <div className="w-16" h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300>
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl" font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300>
                      { feature.title }
                    </h3>
                    
          <p className="text-gray-300" mb-6 leading-relaxed>
                      { feature.description }
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex" items-center text-sm text-gray-300>
                          <CheckCircle className="w-4" h-4 text-green-400 mr-2 flex-shrink-0 />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Threat Protection Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-red-400 to-orange-400 bg-clip-text text-transparent>
                    Comprehensive Threat Protection
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Protect against all types of cyber threats with our advanced AI-powered security platform.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-2 lg:grid-cols-4 gap-8>
                { threatTypes.map((threat, index) => (
                  <div 
                    key={index } "
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="w-16" h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-xl flex items-center justify-center mb-6>
                      
        <div className="text-white">{ threat.icon }</div>
                    </div>
                    <h3 className="text-xl" font-bold text-white mb-4>{ threat.title }</h3>
                    
          <p className="text-gray-300" mb-6>{ threat.description }</p>
                    
        <div className="flex" items-center justify-between>
                      <span className="text-sm" text-gray-400>Protection Rate</span>
                      <span className="text-2xl" font-bold text-green-400>{ threat.coverage }</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Compliance Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-red-400 to-orange-400 bg-clip-text text-transparent>
                    Compliance & Standards
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Meet industry compliance requirements with our comprehensive security and compliance management tools.
                </p>
              </div>
              
        <div className="grid" grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6>
                { complianceStandards.map((standard, index) => (
                  <div 
                    key={index } "
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 text-center hover:border-red-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="text-red-400" font-bold text-lg mb-2>{ standard.name }</div>
                    
        <div className="text-gray-300" text-sm>{ standard.description }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-red-400 to-orange-400 bg-clip-text text-transparent>
                    Security Pricing Plans
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Choose the security plan that best protects your business and meets your compliance needs.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-3 gap-8 max-w-6xl mx-auto>
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className="{" `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-red-400/40 shadow-red-500/10' 
                        : 'border-red-500/20 hover:border-red-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute" -top-4 left-1/2 transform -translate-x-1/2>
                        
        <div className="bg-gradient-to-r" from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold>
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center" mb-8>
                      <h3 className="text-2xl" font-bold text-white mb-2>{ plan.name }</h3>
                      
          <p className="text-gray-300" mb-4>{ plan.description }</p>
                      
        <div className="flex" items-baseline justify-center>
                        <span className="text-5xl" font-bold text-red-400>{ plan.price }</span>
                        <span className="text-gray-400" ml-2>/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4" mb-8>
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex" items-center text-gray-300>
                          <CheckCircle className="w-5" h-5 text-green-400 mr-3 flex-shrink-0 />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a"
                      href="tel:+13024640950"
                      className="{" `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                          : 'border-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900' }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-red-400 to-orange-400 bg-clip-text text-transparent>
                    Security Success Stories
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  See how organizations are protecting their assets with our AI cybersecurity platform.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-3 gap-8>
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } "
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300">
                    
        <div className="flex" items-center mb-4>
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5" h-5 text-yellow-400 fill-current />
                      ))}
                    </div>
                    
          <p className="text-gray-300" mb-6 leading-relaxed>"
                      "{ testimonial.content }"
                    </p>
                    <div>
                      
        <div className="font-semibold" text-white>{ testimonial.name }</div>
                      
        <div className="text-red-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400" text-sm>{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" max-w-4xl mx-auto>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  Secure Your Business Today
                </h2>
                
          <p className="text-xl" text-gray-300 mb-8>
                  Don't wait for a cyber attack. Protect your business with our advanced AI-powered cybersecurity platform.
                </p>
                
        <div className="flex" flex-col sm:flex-row gap-4 justify-center>
                  <a"
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/25 flex items-center justify-center">
                    <Phone className="w-5" h-5 mr-2 />
                    Call +1 302 464 0950
                  </a>
                  <a"
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-red-400 text-red-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5" h-5 mr-2 />
                    Get Security Assessment
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default AiCybersecurityPlatformPage;"