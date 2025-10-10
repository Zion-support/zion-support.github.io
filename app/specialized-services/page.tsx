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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Specialized Solutions</h1><p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">Cutting-edge technologies and specialized solutions for complex business challenges.</p>
            We deliver innovative solutions that push the boundaries of what's possible.</p>
          </p>
        </section>

        {/* Stats Section */}<section className="mb-16">
          </section><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{stats.map((stat, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.value}</div><div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Specialized Services Grid */}<section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Advanced Technology Solutions<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{specializedServices.map((service, index) => (</div>
              <article key={index} className={`cyber-card p-8 hover:scale-105 transition-all duration-300 ${service.borderColor}`}>
                <div className="flex items-center mb-6">
                  </div><div className={`w-16 h-16 ${service.bgColor} rounded-xl flex items-center justify-center mr-4`}>
                    <service.icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 neon-text">{service.title}<div className={`text-sm font-semibold ${service.color}`}>{service.category}</div><p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Features:<ul className="space-y-2">{service.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"  / />{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-pink-400 mb-3">Benefits:<ul className="space-y-2">{service.benefits.map((benefit, benefitIndex) => (</ul>
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <ArrowRight className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" >{benefit}</ArrowRight>
                      </ArrowRight>
                    ))}
                  </ul>
                </div>

                <div className="text-center">
                  </div><div className={`text-lg font-bold mb-4 neon-text ${service.color}`}>{service.price}<a
                    href="/contact"
                    className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >Learn More</a>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Business Apps Section */}<section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Business Applications<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{businessApps.map((app, index) => (</div>
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <app.icon className={`w-16 h-16 ${app.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{app.title}</h3><p className="text-gray-300 mb-4">{app.description}<ul className="space-y-2 mb-6">{app.features.map((feature, featureIndex) => (</ul>
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0"  / />{feature}</CheckCircle>
                    </CheckCircle>
                  ))}
                <div className={`text-2xl font-bold mb-4 neon-text ${app.color}`}>{app.price}<a
                  href="/contact"
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${app.color} border border-current hover:bg-current hover:text-slate-900`}
                >Get Started</a>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}<section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">Why Choose Our Specialized Solutions?</h2>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            </div><div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4"  / />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Cutting-Edge Technology</h3><p className="text-gray-300">We leverage the latest technologies including quantum computing, AI, and blockchain to deliver innovative solutions.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Shield className="w-16 h-16 text-green-400 mx-auto mb-4"  / />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Proven Expertise</h3><p className="text-gray-300">Our team has deep expertise in specialized technologies with a track record of successful implementations.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Target className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Custom Solutions</h3><p className="text-gray-300">Every solution is tailored to your specific needs and business requirements for maximum impact.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Users className="w-16 h-16 text-blue-400 mx-auto mb-4"  / />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Dedicated Support</h3><p className="text-gray-300">Our specialized team provides ongoing support and maintenance for all our advanced solutions.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <Zap className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">Rapid Implementation</h3><p className="text-gray-300">We deliver complex solutions quickly without compromising on quality or security.</p>
              </p>
            </div>

            <div className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
              <DollarSign className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 neon-text">ROI Focused</h3><p className="text-gray-300">Our solutions are designed to deliver measurable ROI and long-term business value.</p>
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}<section className="text-center">
          </section><div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Ready to Explore Specialized Solutions?</h2><p className="text-xl text-gray-300 mb-8">Contact our specialized solutions team to discuss your unique requirements and discover how we can help.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <Footer />
    </div>
  );
};

export default SpecializedServicesPage;