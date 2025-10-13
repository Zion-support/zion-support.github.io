import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, CheckCircle, Star, Users, Award, Smartphone, Globe, Mail, Phone, Database, Lock, Headphones, Sparkles, Clock, Archive } from 'lucide-react';

export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    {
      title: "End-to-End Encryption",
      description: "Military-grade encryption protects your data at rest and in transit, ensuring only you can access your files.",
      icon: <Shield className="w-8 h-8" />,
      benefits: ["AES-256 encryption", "Zero-knowledge architecture", "Client-side encryption", "Secure key management"]
    },
    {
      title: "Unlimited Storage Capacity",
      description: "Store unlimited files and data without worrying about storage limits or additional costs.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Unlimited storage", "No file size limits", "Automatic scaling", "Cost-effective pricing"]
    },
    {
      title: "Cross-Platform Sync",
      description: "Access your files from any device with seamless synchronization across desktop, mobile, and web platforms.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Real-time sync", "Multi-device access", "Offline capabilities", "Conflict resolution"]
    },
    {
      title: "Automated Backup Scheduling",
      description: "Set up automated backups for your critical data with customizable schedules and retention policies.",
      icon: <Clock className="w-8 h-8" />,
      benefits: ["Custom schedules", "Retention policies", "Incremental backups", "Backup verification"]
    },
    {
      title: "Version Control & Recovery",
      description: "Track file versions and recover previous versions with our advanced version control system.",
      icon: <Archive className="w-8 h-8" />,
      benefits: ["Version history", "Point-in-time recovery", "Change tracking", "Rollback capabilities"]
    },
    {
      title: "Team Collaboration Tools",
      description: "Share files securely with team members and collaborate in real-time with advanced permission controls.",
      icon: <Users className="w-8 h-8" />,
      benefits: ["Secure sharing", "Permission controls", "Real-time collaboration", "Activity tracking"]
    }
  ];

  const storageStats = [
    { number: "99.99%", label: "Uptime Guarantee", icon: <Award className="w-6 h-6" /> },
    { number: "256-bit", label: "AES Encryption", icon: <Lock className="w-6 h-6" /> },
    { number: "Unlimited", label: "Storage Capacity", icon: <Database className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Headphones className="w-6 h-6" /> }
  ];

  const pricingPlans = [
    {
      name: "Personal",
      price: "$99",
      period: "month",
      description: "Perfect for individuals and small teams",
      features: [
        "Unlimited storage",
        "End-to-end encryption",
        "Cross-platform sync",
        "Basic sharing",
        "Email support",
        "Up to 5 users"
      ],
      popular: false)
    },
    {
      name: "Business",
      price: "$199",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "Unlimited storage",
        "Advanced encryption",
        "Team collaboration",
        "Advanced sharing",
        "Priority support",
        "Up to 25 users",
        "Admin controls",
        "Audit logs"
      ],
      popular: true)
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "Complete solution for large organizations",
      features: [
        "Unlimited storage",
        "Military-grade encryption",
        "Advanced collaboration",
        "Custom integrations",
        "24/7 dedicated support",
        "Unlimited users",
        "SSO integration",
        "On-premise deployment"
      ],
      popular: false)
    }
  ];

  return (
    <div></div>
      <Helmet></Helmet>
        <title>Zion Cloud Vault Pro - Secure Cloud Storage Platform | Zion Tech Group</title>
        <meta)
          name="description"
          content="Secure your data with Zion Cloud Vault Pro - unlimited cloud storage with end-to-end encryption, cross-platform sync, and team collaboration. Starting at $99/month."
        /></meta>
        <meta)
          name="keywords"
          content="cloud storage, secure storage, end-to-end encryption, file sync, team collaboration, unlimited storage, data backup, file sharing"
        /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/zion-cloud-vault-pro" /></link>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden"></div>
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-teal-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
              <div></div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6"></div>
                  <Cloud className="w-4 h-4 text-blue-400 mr-2" /></Cloud>
                  <span className="text-blue-400 text-sm font-medium">#1 Secure Cloud Storage 2024</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"></h1>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400"></span>
                    Zion Cloud Vault Pro)
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"></p>
                  Secure your data with unlimited cloud storage featuring end-to-end encryption, 
                  cross-platform sync, and advanced team collaboration tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8"></div>
                  <Link)
                    to="/contact"
                    className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                  ></Link>
                    Start Free Trial)
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                  </Link>
                  <Link)
                    to="/demo"
                    className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  ></Link>
                    Watch Demo)
                    <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" /></Sparkles>
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6"></div>
                  {storageStats.map((stat, index) => (
                    <div key={index} className="text-center group"></div>
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"></div>
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative"></div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"></div>
                  <div className="text-center mb-6"></div>
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center"></div>
                      <Cloud className="w-10 h-10 text-white" /></Cloud>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Starting at $99/month</h3>
                    <p className="text-gray-300">Unlimited secure cloud storage</p>
                  </div>
                  
                  <div className="space-y-4"></div>
                    <div className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" /></CheckCircle>
                      <span>Unlimited storage</span>
                    </div>
                    <div className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" /></CheckCircle>
                      <span>End-to-end encryption</span>
                    </div>
                    <div className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" /></CheckCircle>
                      <span>Cross-platform sync</span>
                    </div>
                    <div className="flex items-center text-gray-300"></div>
                      <CheckCircle className="w-5 h-5 text-blue-400 mr-3" /></CheckCircle>
                      <span>Team collaboration</span>
                    </div>
                  </div>
                  
                  <div className="mt-6"></div>
                    <Link)
                      to="/contact"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                    ></Link>
                      Get Started Now)
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                  Secure Storage Features)
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Everything you need to store, sync, and collaborate on your files securely)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => (
                <div)
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                ></div>
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform"></div>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors"></h3>
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed"></p>
                    {feature.description}
                  </p>
                  <div className="space-y-2"></div>
                    {feature.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300"></div>
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                  Simple Storage Plans)
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose the storage plan that fits your needs and budget)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {pricingPlans.map((plan, index) => (
                <div)
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular)
                      ? 'border-blue-500/50 shadow-blue-500/25' 
                      : 'border-white/20 hover:border-blue-500/30'
                  }`}
                ></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-4 py-1 rounded-full text-sm font-semibold"></span>
                        Most Popular)
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-blue-400">${plan.price}</span>
                      <span className="text-gray-300 ml-1">/{plan.period}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8"></div>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-gray-300"></div>
                        <CheckCircle className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" /></CheckCircle>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link)
                    to="/contact"
                    className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                      plan.popular)
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white hover:from-blue-600 hover:to-cyan-700'
                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900'
                    }`}
                  ></Link>
                    Get Started)
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400"></span>
                  Trusted by Thousands)
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                See what our users say about Zion Cloud Vault Pro)
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => (
                <div)
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                ></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" /></Star>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center"></div>
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-semibold mr-3"></div>
                      {`/avatars/avatar-${index + 1}.jpg`}
                    </div>
                    <div></div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
                Ready to Secure Your Data?
              </h2>
              <p className="text-xl text-gray-300 mb-8"></p>
                Join thousands of users already protecting their data with Zion Cloud Vault Pro. 
                Start your free trial today.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"></div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                    <Mail className="w-6 h-6 text-white" /></Mail>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-blue-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                    <Phone className="w-6 h-6 text-white" /></Phone>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-blue-400">+1 302 464 0950</p>
                </div>
                <div className="text-center"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-3"></div>
                    <Globe className="w-6 h-6 text-white" /></Globe>
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-blue-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <Link)
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-blue-500/25 hover:scale-105"
                ></Link>
                  Start Free Trial)
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></ArrowRight>
                </Link>
                <Link)
                  to="/demo"
                  className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                ></Link>
                  Schedule Demo)
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
</div>
  );

</Shield>
</Database>
</Database>
</Smartphone>
</Clock>
</Archive>
</Users>
</Award>
</Lock>
</Headphones>
</meta>
</meta>
</link>
</Cloud>
</Cloud>
</ArrowRight>
</ArrowRight>
</ArrowRight>
</ArrowRight>
</Sparkles>
</CheckCircle>
</CheckCircle>
</CheckCircle>
</CheckCircle>
</CheckCircle>
</Star>
</Mail>
</Phone>
</Globe>
</br>
}