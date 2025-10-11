'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Shield, Cloud, Database, Code, Users, Settings, Zap, Brain, BarChart, Target, TrendingUp, Globe, Smartphone, Calendar, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Package, Mic, Workflow, Eye, Wifi, MessageSquare, ShoppingCart } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud solutions for your business needs.',
      icon: Cloud,
features: ['AWS/Azure/GCP', 'Migration Services', 'DevOps', 'Monitoring'],
      price: 'From $500/month'

    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      icon: Shield,
      features: ['Security Audit', 'Penetration Testing', 'Compliance', 'Incident Response'],
      price: 'From $1,000/month'
    },
    {
id: 3,
      title: 'Database Management',
      description: 'Optimize and maintain your database infrastructure.',
      icon: Database,
      features: ['Performance Tuning', 'Backup & Recovery', 'Migration', 'Monitoring'],
      price: 'From $800/month'
    },
    {
      id: 4,
      title: 'Network Solutions',
      description: 'Design and implement robust network infrastructure.',
      icon: Wifi,
      features: ['Network Design', 'Security Implementation', 'Monitoring', 'Support'],
      price: 'From $600/month'
    },
    {
      id: 5,
      title: 'IT Support',
      description: '24/7 technical support for your business operations.',
      icon: Users,
      features: ['Help Desk', 'Remote Support', 'On-site Service', 'Training'],
      price: 'From $300/month'
    },
    {
      id: 6,
      title: 'System Administration',
      description: 'Comprehensive system management and maintenance.',
      icon: Settings,
      features: ['Server Management', 'User Management', 'Security Updates', 'Monitoring'],
      price: 'From $700/month'
    }
  ]

  const benefits = [
    {
      icon: Zap,
      title: 'Fast Implementation',
      description: 'Quick deployment and setup of IT solutions'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and reliability'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: '24/7 support from certified professionals'
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Solutions that grow with your business'

    }
  ]

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'development', name: 'Web Development' },
    { id: 'security', name: 'Cybersecurity' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' }
  ]

  const filteredServices = services.filter(service => 
    selectedCategory === 'all' || service.category === selectedCategory)

  return (
    <>

icon: Database,
      title: 'Database Management',
      description: 'Optimize and manage your data infrastructure',
      features: ['Database Design', 'Performance Tuning', 'Backup  & Recovery', 'Data Migration']
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions for your business needs',
      features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration']
    },
    {
      icon: Settings,
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      features: ['Help Desk', 'Remote Support', 'System Updates', 'Troubleshooting']
    }
  ]

  const processSteps = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We analyze your current IT infrastructure and identify areas for improvement.'
    },
    {
      step: '02',
      title: 'Planning',
      description: 'We develop a comprehensive strategy tailored to your specific requirements.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with minimal disruption to your operations.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.'
    }
  ]

  return (
    </><></><Helmet>
        <title>IT Services - Zion Tech Group  | Comprehensive IT Solutions</title>
        <meta name="description" content="Professional IT services including infrastructure management, cloud solutions, cybersecurity, and custom development. Transform your business with our expert IT support." />
        <meta name="keywords" content="IT services, infrastructure management, cloud solutions, cybersecurity, database management, custom development, IT support" />
      </Helmet>

<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        </div><section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
</section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                IT <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions to keep your business running smoothly and securely.
              </p>

            </div>
          </div>
        </section>

{/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services ? </h2>
              <p className="text-xl text-gray-300">
                We provide reliable, secure, and scalable IT solutions tailored to your business needs.
              </p>
            </div>
<div className="grid grid-cols-1 md : grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                </div>
<div key={index} className="text-center">
                  </div>
<div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>

              ))}
<div className="max-w-7xl mx-auto">
            </div>
<div className="text-center">
              <h1 className="text-4xl md: text-6xl font-bold text-white mb-6">
                Professional <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">IT Services</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Comprehensive IT solutions designed to optimize your business operations and drive growth through technology.
              </p>
              </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Services
                </button>
              </div>
</div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm: px-6 lg:px-8">
          </section>
<div className="max-w-7xl mx-auto">
</div>
<div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300">
Comprehensive IT solutions designed to meet your business requirements.

              </p>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
{services.map((service) => (
                </div>
<div
                  key={service.id}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  </div>
<div className="flex items-center mb-4">
                    </div>
<div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
<div className="flex items-center justify-between mb-4">
                    </div>
<div className="text-lg font-bold text-cyan-400">{service.price}</div>
                  </div>
                  
                  <button className="w-full cyber-button group-hover: bg-cyan-500 group-hover:text-white transition-all duration-300">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />

                        {feature}
                      </li>
                    ))}
                  </ul>
</button><button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 group-hover:scale-105">
                    Learn More
                    <ArrowRight className="w-4 h-4 inline ml-2" />
</button>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="py-16 px-4 sm: px-6 lg:px-8">

          </section>
<div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
Let's discuss how our IT services can help streamline your operations and improve efficiency.
            </p>
            </div>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="cyber-button-secondary">
                Schedule Consultation
                <Calendar className="w-5 h-5 ml-2" />

Let's discuss how our IT services can help streamline your operations and boost productivity.
            </p>
            </div></button><div className="flex flex-col sm: flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Your Project
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-white transition-all duration-300">
                Schedule Consultation
</button>
            </div>
          </div>
        </section>
</div>
      
      <Footer />
    </>
  )
}

export default ITServicesPage

export default ItServicesPage
