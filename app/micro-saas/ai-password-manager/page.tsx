import React from 'react''
import { Helmet } from 'react-helmet-async''
import { Link } from 'react-router-dom''
import { ArrowRight } from 'lucide-react';
import { Lock } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Shield } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Star } from 'lucide-react';
import { Users } from 'lucide-react';
import { Clock } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { Key } from 'lucide-react';
import { Fingerprint } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Laptop } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Database } from 'lucide-react';
import { Cpu } from 'lucide-react';
import { Network } from 'lucide-react';
import { AlertTriangle } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Mail } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { Calendar } from 'lucide-react';
import { DollarSign } from 'lucide-react';
;
const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,'
      title: 'AI Password Generation','
      description: 'Generate ultra-secure passwords using AI algorithms that adapt to each site\'s requirements and your preferences.'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,'
      title: 'Advanced Security','
      description: 'Military-grade encryption with zero-knowledge architecture ensures your passwords are never accessible to anyone but you.'
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />,'
      title: 'Breach Monitoring','
      description: 'AI-powered monitoring scans the dark web and alerts you immediately if any of your accounts are compromised.'
    },
    {
      icon: <Key className="w-6 h-6 text-orange-400" />,'
      title: 'Auto-Fill & Sync','
      description: 'Seamlessly fill passwords across all your devices with intelligent auto-fill that learns your patterns.'
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-pink-400" />,'
      title: 'Biometric Access','
      description: 'Secure access using fingerprint, face ID, or other biometric authentication methods.'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,'
      title: 'Security Analytics','
      description: 'Detailed security reports and insights to help you understand and improve your password hygiene.'
    }
  ]
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />,'
      title: 'Password Vault','
      description: 'Store unlimited passwords with end-to-end encryption and secure cloud backup.','
      price: 'Included','
      features: ['Unlimited storage', 'End-to-end encryption', 'Cloud backup', 'Offline access']
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />,'
      title: 'AI Security Scan','
      description: 'AI-powered analysis of your passwords to identify weak, reused, or compromised credentials.','
      price: 'Included','
      features: ['Weak password detection', 'Reuse analysis', 'Breach monitoring', 'Security scoring']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />,'
      title: 'Two-Factor Auth','
      description: 'Built-in 2FA support with TOTP generation and secure backup codes.','
      price: 'Included','
      features: ['TOTP support', 'Backup codes', 'QR code scanning', 'Multiple devices']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />,'
      title: 'Family Sharing','
      description: 'Secure password sharing with family members and trusted contacts.','
      price: '$2.99/month','
      features: ['Family vault', 'Secure sharing', 'Permission controls', 'Activity monitoring']
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />,'
      title: 'Dark Web Monitoring','
      description: 'Continuous monitoring of the dark web for your personal information and credentials.','
      price: '$4.99/month','
      features: ['Dark web scanning', 'Identity monitoring', 'Credit monitoring', 'Alert system']
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />,'
      title: 'Business Features','
      description: 'Advanced features for businesses including team management and admin controls.','
      price: '$9.99/month','
      features: ['Team management', 'Admin dashboard', 'SSO integration', 'Compliance reporting']
    }
  ]
  const pricingPlans = [
    {'
      name: 'Personal','
      price: '$2.99','
      period: '/month','
      description: 'Perfect for individuals',
      features: ['
        'Unlimited passwords','
        'AI password generation','
        'Auto-fill & sync','
        'Biometric access','
        'Breach monitoring','
        'Email support'
      ],
      popular: false;
    },
    {'
      name: 'Family','
      price: '$4.99','
      period: '/month','
      description: 'Ideal for families',
      features: ['
        'Everything in Personal','
        'Up to 6 family members','
        'Secure sharing','
        'Family vault','
        'Priority support','
        'Dark web monitoring'
      ],
      popular: true;
    },
    {'
      name: 'Business','
      price: '$9.99','
      period: '/month','
      description: 'For small businesses',
      features: ['
        'Everything in Family','
        'Team management','
        'Admin dashboard','
        'SSO integration','
        'Compliance reporting','
        'Dedicated support'
      ],
      popular: false;
=======
    }
>>>>>>> origin/main
  ]

  const stats = ['
    { number: '99.9%', label: 'Security Uptime', icon: <Shield className="w-6 h-6 text-cyan-400" /> },'
    { number: '256-bit', label: 'Encryption', icon: <Lock className="w-6 h-6 text-emerald-400" /> },'
    { number: '24/7', label: 'Monitoring', icon: <Eye className="w-6 h-6 text-purple-400" /> },'
    { number: '1M+', label: 'Users Protected', icon: <Users className="w-6 h-6 text-orange-400" /> }
  ]
  const testimonials = [
    {'
      name: 'Sarah Johnson','
      company: 'Tech Professional','
      content: 'Zion Tech Group\'s AI Password Manager has completely transformed how I handle passwords. The AI generation is incredibly smart and the breach monitoring gives me peace of mind.',
      rating: 5
    },
    {'
      name: 'Michael Chen','
      company: 'Small Business Owner','
      content: 'The family sharing features are perfect for our household. We can securely share important accounts while maintaining individual privacy. The AI security scan caught several weak passwords we didn\'t even know about.',
      rating: 5
    },
    {'
      name: 'Emily Rodriguez','
      company: 'IT Manager','
      content: 'The business features are exactly what we needed. The team management and admin controls make it easy to ensure our employees are following security best practices.',
      rating: 5;
  ]
  return (
    <></>
      <Helmet></Helmet>
        <title>AI Password Manager - Advanced Password Security | Zion Tech Group</title>
        <meta name="description" content="Secure your digital life with our AI-powered password manager. Advanced encryption, breach monitoring, and intelligent password generation with 99.9% security uptime." /></meta>
        <meta name="keywords" content="AI password manager, password security, password generator, breach monitoring, two-factor authentication, password vault" /></meta>
        <link rel="canonical" href="https://ziontechgroup./ai-password-manager" /></link>
      </Helmet>

      <div className="min-h-screen bg-gray-900 text-white"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10" /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30"></div>
              <Lock className="w-4 h-4" /></Lock>
              <span>AI-Powered Password Security</span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight"></h1>
              Advanced <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Password Manager</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"></p>
              Secure your digital life with our AI-powered password manager. Advanced encryption, 
              breach monitoring, and intelligent password generation to keep your accounts safe.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16"></div>
              <Link 
                to="/contact" ;
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
              ></Link>
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link>
              <Link 
                to="/demo" ;
                className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
              ></Link>
                <span>View Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></ArrowRight>
              </Link>
            </div>
          </div>
        </section>
        {/* Stats Section */}
        <section className="py-20 px-4 relative"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" /></div>
          <div className="relative max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4"></h2>
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Password Security?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the power of AI-driven password security with our proven track record.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8"></div>
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"></div>
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors"></div>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors"></div>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4 relative"></section>
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" /></div>
          <div className="relative max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
                Everything you need to secure your digital life with advanced AI-powered password management.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300"></div>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"></h3>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed"></p>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Security Features Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative"></section>
          <div className="relative max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Security <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
                Comprehensive security features to protect your passwords and personal information.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {securityFeatures.map((feature, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"></div>
                  <div className="flex items-center justify-between mb-4"></div>
                    <div className="flex items-center space-x-3"></div>
                      <div className="p-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg group-hover:scale-110 transition-transform duration-300"></div>
                        {feature.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors"></h3>
                        {feature.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed"></p>
                    {feature.description}
                  </p>
                  <div className="space-y-3"></div>
                    <div className="text-2xl font-bold text-cyan-400 mb-2"></div>
                      {feature.price}
                    </div>
                    <div className="space-y-1"></div>
                      {feature.features.map((feat, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2 text-gray-400 text-xs"></div>
                          <CheckCircle className="w-3 h-3 text-green-400" /></CheckCircle>
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link ;
                      to="/contact"
                      className="block w-full mt-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                    ></Link>
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4 relative"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" /></div>
          <div className="relative max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the plan that fits your security needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 hover:scale-105 ${
                  plan.popular '
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/20' '
                    : 'border-white/20 hover:border-cyan-400/30'
                }`}></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold"></div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8"></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3"></li>
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" /></CheckCircle>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" ;
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular'
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700''
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                    }`}
                  ></Link>
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative"></section>
          <div className="relative max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6"></h2>
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto"></p>
                Join thousands of users who trust our AI-powered password manager for their security.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed"></p>
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center"></div>
                      <span className="text-white font-bold text-sm"></span>'
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div></div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 relative"></section>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16"></div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"></h2>
                Ready to Secure Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Digital Life?</span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed"></p>'
                Don't wait for a security breach. Protect your accounts with our AI-powered password manager. 
                Start your free trial today and experience the peace of mind that comes with advanced security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center"></div>
                <Link 
                  to="/contact" ;
                  className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                ></Link>
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                </Link>
                <Link 
                  to="/pricing" ;
                  className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                ></Link>
                  <span>View All Plans</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AIPasswordManagerPage'