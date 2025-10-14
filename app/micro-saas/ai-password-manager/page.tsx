import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Lock, Brain, Shield, CheckCircle, Star, Users, Clock, Target, BarChart3, Globe, Zap, Eye, EyeOff, Key, Fingerprint, Smartphone, Laptop, Monitor, Database, Cpu, Network, AlertTriangle, FileText, Mail, MessageSquare, Calendar, DollarSign } from 'lucide-react';

const AIPasswordManagerPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />'
          title: 'AI Password Generation','
          description: 'Generate ultra-secure passwords using AI algorithms that adapt to each site\'
  }s requirements and your preferences.'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />'
          title: 'Advanced Security','
          description: 'Military-grade encryption with zero-knowledge architecture ensures your passwords are never accessible to anyone but you.'
  }
    },
    {
      icon: <Eye className="w-6 h-6 text-purple-400" />'
          title: 'Breach Monitoring','
          description: 'AI-powered monitoring scans the dark web and alerts you immediately if any of your accounts are compromised.'
  }
    },
    {
      icon: <Key className="w-6 h-6 text-orange-400" />'
          title: 'Auto-Fill & Sync','
          description: 'Seamlessly fill passwords across all your devices with intelligent auto-fill that learns your patterns.'
  }
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-pink-400" />'
          title: 'Biometric Access','
          description: 'Secure access using fingerprint, face ID, or other biometric authentication methods.'
  }
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />'
          title: 'Security Analytics','
          description: 'Detailed security reports and insights to help you understand and improve your password hygiene.'
  }
    }
  ]
  const securityFeatures = [
    {
      icon: <Lock className="w-8 h-8 text-cyan-400" />'
          title: 'Password Vault','
          description: 'Store unlimited passwords with end-to-end encryption and secure cloud backup.'
  },'
      price: 'Included','
      features: ['Unlimited storage', 'End-to-end encryption', 'Cloud backup', 'Offline access']
    },
    {
      icon: <Brain className="w-8 h-8 text-emerald-400" />'
          title: 'AI Security Scan','
          description: 'AI-powered analysis of your passwords to identify weak, reused, or compromised credentials.'
  },'
      price: 'Included','
      features: ['Weak password detection', 'Reuse analysis', 'Breach monitoring', 'Security scoring']
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-400" />'
          title: 'Two-Factor Auth','
          description: 'Built-in 2FA support with TOTP generation and secure backup codes.'
  },'
      price: 'Included','
      features: ['TOTP support', 'Backup codes', 'QR code scanning', 'Multiple devices']
    },
    {
      icon: <Users className="w-8 h-8 text-orange-400" />'
          title: 'Family Sharing','
          description: 'Secure password sharing with family members and trusted contacts.'
  },'
      price: '$2.99/month','
      features: ['Family vault', 'Secure sharing', 'Permission controls', 'Activity monitoring']
    },
    {
      icon: <Globe className="w-8 h-8 text-pink-400" />'
          title: 'Dark Web Monitoring','
          description: 'Continuous monitoring of the dark web for your personal information and credentials.'
  },'
      price: '$4.99/month','
      features: ['Dark web scanning', 'Identity monitoring', 'Credit monitoring', 'Alert system']
    },
    {
      icon: <Database className="w-8 h-8 text-blue-400" />'
          title: 'Business Features','
          description: 'Advanced features for businesses including team management and admin controls.'
  },'
      price: '$9.99/month','
      features: ['Team management', 'Admin dashboard', 'SSO integration', 'Compliance reporting']
    }
  ]
  const pricingPlans = [
    {'
      name: 'Personal','
      price: '$2.99','
      period: '/month','
          description: 'Perfect for individuals'
  },
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
          description: 'Ideal for families'
  },
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
          description: 'For small businesses'
  },
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
    { number: '99.9%', label: 'Security Uptime', icon: <Shield className="w-6 h-6 text-cyan-400"> },'
    { number: '256-bit', label: 'Encryption', icon: <Lock className="w-6 h-6 text-emerald-400"> },'
    { number: '24/7', label: 'Monitoring', icon: <Eye className="w-6 h-6 text-purple-400"> },'
    { number: '1M+', label: 'Users Protected', icon: <Users className="w-6 h-6 text-orange-400"> }
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
    
    <div>
      <Helmet />
        <title>AI Password Manager - Advanced Password Security | Zion Tech Group</title>
        <meta />
        <meta />
        <link />
      </Helmet>

      <div />
        {/* Hero Section */}
        <section>
        <div>
    <div />
            <div>
    <Lock />
              <span>AI-Powered Password Security</span>
            </div>
            
            <h1>Advanced  <span>AI Password Manager</span></h1>
            
            <p />
              Secure your digital life with our AI-powered password manager. Advanced encryption, 
              breach monitoring, and intelligent password generation to keep your accounts safe.
            </p>
            
            <div>
    <Link />
                <span>Start Free Trial</span>
                <ArrowRight />
              </Link>
              <Link />
                <span>View Demo</span>
                <ArrowRight />
              </Link>
            </div>
          </div>
      </section>
        {/* Stats Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Why Choose <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">AI Password Security?</span>
              </h2>
              <p />
                Experience the power of AI-driven password security with our proven track record.
              </p>
            </div>
            
            <div />
              {stats.map((stat, index) => (
                <div>
    <div />
                    {stat.icon}
                  </div>
                  <div />
                    {stat.number}
                  </div>
                  <div />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Features Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Security Features</span>
              </h2>
              <p />
                Everything you need to secure your digital life with advanced AI-powered password management.
              </p>
            </div>
            
            <div />
              {features.map((feature, index) => (
                <div>
    <div />
                    {feature.icon}
                  </div>
                  <h3 />
                    {feature.title}
                  </h3>
                  <p />
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Security Features Section */}
        <section>
        <div>
    <div />
              <h2 />
                Security <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p />
                Comprehensive security features to protect your passwords and personal information.
              </p>
            </div>
            
            <div />
              {securityFeatures.map((feature, index) => (
                <div>
    <div />
                    <div>
    <div />
                        {feature.icon}
                      </div>
                      <h3 />
                        {feature.title}
                      </h3>
                    </div>
  </div>
  <p />
                    {feature.description}
                  </p>
                  <div>
    <div />
                      {feature.price}
                    </div>
                    <div />
                      {feature.features.map((feat, featureIndex) => (
                        <div>
    <CheckCircle />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                    <Link />
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Pricing Section */}
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p />
                Choose the plan that fits your security needs. All plans include a 30-day free trial.
              </p>
            </div>
            
            <div />
              {pricingPlans.map((plan, index) => (
                <div />
                  {plan.popular && (
                    <div>
    <div />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div>
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div>
    <span className="text-5xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
  </div>
  <ul />
                    {plan.features.map((feature, featureIndex) => (
                      <li />
                        <CheckCircle />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
      </section>
        {/* Testimonials Section */}
        <section>
        <div>
    <div />
              <h2 />
                What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Users Say</span>
              </h2>
              <p />
                Join thousands of users who trust our AI-powered password manager for their security.
              </p>
            </div>
            
            <div />
              {testimonials.map((testimonial, index) => (
                <div>
    <div />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star />
                    ))}
                  </div>
                  <p />
                    "{testimonial.content}"
                  </p>
                  <div>
    <div />
                      <span />'
                        {testimonial.name.split(' ').map(n => n[0]).join(';)}
                      </span>
                    </div>
                    <div />
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
        <section>
        <div>
    <div />
            <div>
    <h2 />
                Ready to Secure Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Digital Life?</span>
              </h2>
              
              <p />'
                Don't wait for a security breach. Protect your accounts with our AI-powered password manager. 
                Start your free trial today and experience the peace of mind that comes with advanced security.
              </p>
              
              <div>
    <Link />
                  <span>Start Free Trial</span>
                  <ArrowRight />
                </Link>
                <Link />
                  <span>View All Plans</span>
                  <ArrowRight />
                </Link>
              </div>
        </div>
      </div>
      </section>
      </div>
    </>
  )
}

export default AIPasswordManagerPage;