<<<<<<< HEAD
import React from 'react'
import { Link } from 'react-router-dom'

import { Cloud, ArrowRight, CheckCircle, Star, TrendingUp, Server, Shield } from 'lucide-react';

import Layout from '../layout'

import React from 'react';

=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CloudInfrastructureManagement() {
<<<<<<< HEAD
  const features = [

      icon: <Cloud className="w-6h-6text-cyan-400" />,
      title: 'Multi-Cloud Management',
      description: 'Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds'
    },
      icon: <Shield className="w-6h-6text-purple-400" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with automated compliance monitoring and threat detection'
    },
      icon: <TrendingUp className="w-6h-6text-yellow-400" />,
      title: 'Cost Optimization',
      description: 'Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing'
    },
      icon: <Server className="w-6h-6text-green-400" />,

      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performance optimization, and incident response'
  ]

  const managementFeatures = [
      category: 'Infrastructure Management',
      items: ['Server Provisioning', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerability Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimization', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasting', 'Right-sizing Recommendations']
    },
      category: 'Support & Maintenance',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Capacity Planning', 'Health Checks']
  ]

  const pricingPlans = [
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic backup'
      ],
      popular: false
    },
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Advanced backup',
        'Cost optimization'
      ],
      popular: true
    },
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited servers',
        'Comprehensive monitoring',
        'Dedicated support',
        'Enterprise security',
        'Real-time reports',
        'Disaster recovery',
        'Custom solutions'
      ],
      popular: false
  ]

  const testimonials = [
      name: 'Robert Kim',
      company: 'Financial Services',
      content: 'Cloud Infrastructure Management reduced our operational costs by 35% while improving performance and security.',
      rating: 5
    },
      name: 'Lisa Martinez',
      company: 'E-commerce Platform',
      content: 'The automated scaling and monitoring saved us from multiple outages. Our uptime is now 99.99%.',
      rating: 5
    },
      name: 'David Wilson',
      company: 'Healthcare Provider',
      content: 'HIPAA compliance was seamless with their security framework. Our auditors were very impressed.',
      rating: 5
  ]

  return (

        {/* Hero Section */}
    
                Enterprise Cloud Management

              <h1 className="text-4 xl sm:text-5 xl md:text-6 xl font-boldtext-whitemb-6">Cloud Infrastructure Management

              Optimize your cloud infrastructure with comprehensive management, security, and cost optimization. 
                Multi-cloud support, 24/7 monitoring, and enterprise-grade security.
    
                  Get Free Assessment

                <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">View Demo

        {/* Features Section */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Comprehensive Cloud Management
                Enterprise-grade features that optimize your cloud infrastructure performance and costs

 (

                    {feature.icon}
    
                    <h3 className="text-xl font-semiboldtext-whiteml-3">{feature.title}</h3>

                  <p className="text-gray-300">{feature.description}</p>

              ))}

        {/* Management Features */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Complete Infrastructure Solution
                Everything you need to manage, secure, and optimize your cloud infrastructure

 (
    
                  <h3 className="text-xl font-semiboldtext-whitemb-4">{feature.category}</h3>
 (

                        {item}
                    ))}

              ))}

        {/* Pricing Section */}
    
              <h2 className="text-3 xl sm:text-4 xl font-boldtext-whitemb-4">Transparent Pricing Plans
                Choose the plan that fits your infrastructure needs

 (
                  {plan.popular && (

                      Most Popular
                  )}

                  <h3 className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h3>
                  <p className="text-gray-300mb-6">{plan.description}</p>
                    <span className="text-4 xlfont-boldtext-white">{plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
 (

                        {feature}
                    ))}
                  
                    to="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-sky-500 to-purple-600 text-white hover:from-sky-600 hover:to-purple-700'
                        : 'border-2 border-sky-400 text-sky-400 hover: bg-sky-400/10'
                    }`}

Get Started
    
              ))}

        {/* Testimonials */}
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Trusted by Industry Leaders
                See how our Cloud Infrastructure Management transforms businesses

 (

 (
                    ))}

                  <p className="text-gray-300mb-4">"{testimonial.content}"</p>
                    <div className="font-semiboldtext-white">{testimonial.name}</div>
                    <div className="text-smtext-gray-400">{testimonial.company}</div>

              ))}

        {/* CTA Section */}
    
              <h2 className="text-3 xl font-boldtext-whitemb-4">Optimize Your Cloud Infrastructure Today
                Join thousands of businesses using our Cloud Infrastructure Management to reduce costs and improve performance

                <Link to="/contact" className="bg-gradient-to-r from-sky-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-purple-700transition-allduration-300">Get Your Free Assessment
                <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
  )
};

=======
  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Professional cloud infrastructure management by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Cloud Infrastructure Management</h1>
          <p className="text-lg text-gray-300 mb-8">Professional cloud infrastructure management coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
