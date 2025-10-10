'use client';
import React from 'react';
import { Cpu, Settings, Lock, Globe, BarChart, Building, CheckCircle, ArrowRight, Zap, Brain, Shield, Target, Users, DollarSign, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SpecializedServicesPage: React.FC = () => {
  const specializedServices = [
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum algorithms and computing infrastructure for complex problem solving',
      icon: Cpu,
      price: 'Custom Pricing',
      features: [
        'Quantum Algorithm Development',
        'Quantum Machine Learning',
        'Quantum Optimization',
        'Quantum Cryptography',
        'Quantum Simulation',
        'Quantum Error Correction'
      ],
      benefits: [
        'Exponential speed improvements',
        'Breakthrough problem solving',
        'Future-proof technology',
        'Competitive advantage'
      ],
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      category: 'Quantum Technology'
    },
    {
      title: 'Autonomous Systems',
      description: 'Self-managing intelligent systems that operate independently with minimal human intervention',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'Autonomous Decision Making',
        'Self-Healing Infrastructure',
        'Predictive Maintenance',
        'Adaptive Learning',
        'Real-time Optimization',
        'Exception Handling'
      ],
      benefits: [
        'Reduced operational costs',
        'Improved reliability',
        '24/7 autonomous operation',
        'Scalable intelligence'
      ],
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/20',
      borderColor: 'border-cyan-400/30',
      category: 'Autonomous Technology'
    },
    {
      title: 'Blockchain & Web3 Solutions',
      description: 'Decentralized applications, smart contracts, and Web3 infrastructure development',
      icon: Lock,
      price: 'Custom Pricing',
      features: [
        'Smart Contract Development',
        'DApp Creation',
        'DeFi Solutions',
        'NFT Marketplaces',
        'Token Economics',
        'Web3 Integration'
      ],
      benefits: [
        'Decentralized security',
        'Transparent operations',
        'Reduced intermediaries',
        'Global accessibility'
      ],
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30',
      category: 'Blockchain Technology'
    },
    {
      title: 'IoT & Edge Computing',
      description: 'Connected devices and edge computing solutions for real-time data processing',
      icon: Globe,
      price: 'Custom Pricing',
      features: [
        'IoT Device Development',
        'Edge Computing Infrastructure',
        'Real-time Data Processing',
        'Sensor Integration',
        'Edge AI Implementation',
        'IoT Security'
      ],
      benefits: [
        'Real-time insights',
        'Reduced latency',
        'Improved efficiency',
        'Cost optimization'
      ],
      color: 'text-green-400',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      category: 'IoT Technology'
    },
    {
      title: 'Business Intelligence Platform',
      description: 'Advanced analytics and business intelligence solutions for data-driven decision making',
      icon: BarChart,
      price: 'Custom Pricing',
      features: [
        'Advanced Analytics',
        'Predictive Modeling',
        'Data Visualization',
        'Real-time Dashboards',
        'Custom Reports',
        'Data Integration'
      ],
      benefits: [
        'Better decision making',
        'Competitive insights',
        'Operational efficiency',
        'Revenue optimization'
      ],
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      category: 'Analytics'
    },
    {
      title: 'Robotics Solutions',
      description: 'Intelligent robotics and automation systems for industrial and commercial applications',
      icon: Settings,
      price: 'Custom Pricing',
      features: [
        'Robotic Process Automation',
        'Intelligent Robotics',
        'Computer Vision Integration',
        'Human-Robot Collaboration',
        'Predictive Maintenance',
        'Safety Systems'
      ],
      benefits: [
        'Increased productivity',
        'Improved safety',
        'Cost reduction',
        'Quality consistency'
      ],
      color: 'text-orange-400',
      bgColor: 'bg-orange-500/20',
      borderColor: 'border-orange-400/30',
      category: 'Robotics'
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise-grade solutions for large organizations and complex requirements',
      icon: Building,
      price: 'Custom Pricing',
      features: [
        'Enterprise Architecture',
        'Scalable Infrastructure',
        'Security & Compliance',
        'Integration Services',
        'Change Management',
        'Training & Support'
      ],
      benefits: [
        'Enterprise-grade security',
        'Scalable solutions',
        'Compliance assurance',
        'Dedicated support'
      ],
      color: 'text-red-400',
      bgColor: 'bg-red-500/20',
      borderColor: 'border-red-400/30',
      category: 'Enterprise'
    },
    {
      title: 'Analytics Tools Suite',
      description: 'Comprehensive suite of advanced analytics tools for business intelligence and insights',
      icon: BarChart,
      price: 'Custom Pricing',
      features: [
        'Advanced Analytics',
        'Machine Learning Models',
        'Data Mining',
        'Statistical Analysis',
        'Custom Algorithms',
        'API Integration'
      ],
      benefits: [
        'Deep insights',
        'Predictive capabilities',
        'Custom solutions',
        'Integration flexibility'
      ],
      color: 'text-indigo-400',
      bgColor: 'bg-indigo-500/20',
      borderColor: 'border-indigo-400/30',
      category: 'Analytics'
    }
  ];

  const businessApps = [
    {
      title: 'Expense Tracker Pro',
      description: 'AI-powered expense management and financial tracking',
      icon: DollarSign,
      price: '$99/month',
      features: ['AI Receipt Scanning', 'Automatic Categorization', 'Expense Analytics', 'Budget Planning'],
      color: 'text-green-400'
    },
    {
      title: 'Task Manager Pro',
      description: 'Intelligent task management and project coordination',
      icon: CheckCircle,
      price: '$79/month',
      features: ['AI Task Prioritization', 'Team Collaboration', 'Progress Tracking', 'Deadline Management'],
      color: 'text-blue-400'
    },
    {
      title: 'Smart Analytics',
      description: 'Advanced business analytics and reporting platform',
      icon: BarChart,
      price: '$149/month',
      features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
      color: 'text-purple-400'
    }
  ];

  const stats = [
    { label: 'Specialized Projects', value: '200+', icon: Star },
    { label: 'Success Rate', value: '98%', icon: CheckCircle },
    { label: 'Client Satisfaction', value: '99%', icon: Users },
    { label: 'Average ROI', value: '400%', icon: DollarSign }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>Specialized</h1></<<h1>Solutions</h1><p className="text-xl text-gray-300 mb-8 max-w-4 xl mx-auto">Cutting-edge technologies and specialized solutions for complex business challenges.</p></<<<p>We</p></<<p>deliver</p> innovative solutions that push the boundaries of what's possible.</p>
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16"></sectio>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map((stat, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" /></sta>
                <div className="text-3 xl font-bold text-white mb-2 neon-text"></div>{stat.value}<div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services Grid */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Advanced</h2></<<h2>Technology</h2> Solutions<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{specializedServices.map((service, index) => (</div>
              <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor}`}></articl>
                <div className="flex items-center mb-6"></div>
                  <div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}></div>
                    <service.icon className={`w-8 h-8 ${service.color}`} /></servic>
                  </div>
                  <div></div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text"></h>{service.title}<div className={`text-sm font-semibold ${service.color}`}></div>{service.category}<p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </p>

                <div className="mb-6"></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:</h4><ul className="space-y-2">{service.features.map((feature, featureIndex) => (</u>
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300"></l>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircl>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>

                <div className="mb-6"></div>
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:</h4><ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</u>
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300"></l>
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" >{benefit}</ArrowRigh>
                      </ArrowRight>
                    ))}
                  </ul>
                </div>

                <div className="text-center"></div>
                  <div className={`text-lg font-bold mb-4 neon-text ${service.color}`}></div>{service.price}<a
                    href="/contact"
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >Learn More</a>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Business Apps Section */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Business</h2></<<h2>Applications</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{businessApps.map((app, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                <app.icon className={`w-16 h-16 ${app.color} mx-auto mb-4`} /></ap>
                <h3 className="text-xl font-bold text-white mb-3 neon-text"></h>{app.title}<p className="text-gray-300 mb-4"></p>{app.description}<ul className="space-y-2 mb-6">{app.features.map((feature, featureIndex) => (</u>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                <div className={`text-2 xl font-bold mb-4 neon-text ${app.color}`}></div>{app.price}<a
                  href="/contact"
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${app.color} border border-current hover:bg-current hover:text-slate-900`}
                >Get Started</a>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Specialized Solutions?</h>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" /></Brai>
              <h3 className="text-xl font-bold text-white mb-3 neon-text"></h3></<<<h3>Cutting</h3></h3>-Edge Technology<p className="text-gray-300">We leverage the latest technologies including quantum computing, AI, and blockchain to deliver innovative solutions.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" /></Shiel>
              <h3 className="text-xl font-bold text-white mb-3 neon-text"></h3></<<<h3>Proven</h3></<<h3>Expertise</h3><p className="text-gray-300">Our team has deep expertise in specialized technologies with a track record of successful implementations.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" /></Targe>
              <h3 className="text-xl font-bold text-white mb-3 neon-text"></h3></<<<h3>Custom</h3></<<h3>Solutions</h3><p className="text-gray-300">Every solution is tailored to your specific needs and business requirements for maximum impact.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" /></User>
              <h3 className="text-xl font-bold text-white mb-3 neon-text"></h3></<<<h3>Dedicated</h3></<<h3>Support</h3><p className="text-gray-300">Our specialized team provides ongoing support and maintenance for all our advanced solutions.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" /></Za>
              <h3 className="text-xl font-bold text-white mb-3 neon-text"></h3></<<<h3>Rapid</h3></<<h3>Implementation</h3><p className="text-gray-300">We deliver complex solutions quickly without compromising on quality or security.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
              <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-4" /></DollarSig>
              <h3 className="text-xl font-bold text-white mb-3 neon-text"></h3></<<<h3>ROI</h3></<<h3>Focused</h3><p className="text-gray-300">Our solutions are designed to deliver measurable ROI and long-term business value.</p>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center"></sectio>
          <div className="cyber-card p-12 max-w-4 xl mx-auto"></div>
            <h2 className="text-3 xl md:text-4 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Explore Specialized Solutions?<p className="text-xl text-gray-300 mb-8">Contact our specialized solutions team to discuss your unique requirements and discover how we can help.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >Discuss Your Project</a><a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >Call +1 302 464 0950</a>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default SpecializedServicesPage;