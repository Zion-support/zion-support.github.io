import React from 'react';
import Head from 'next/head';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, Phone, Mail, MapPin, Cloud, Database, Server, Lock, Network, Bot, Calendar, UserCheck, DollarSign, PieChart, GitBranch, Timer, AlertTriangle, Headphones, ThumbsUp } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const serviceCategories = [
    {
      title: 'AI Services',
      icon: <Brain className="w-8 h-8" />,
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/20',
      services: [
        {
          name: 'AI Services',
          description: 'Comprehensive AI solutions for enterprise applications',
          price: 'Starting at $1,500/month',
          features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
          link: '/ai-services'
        },
        {
          name: 'AI Marketing',
          description: 'AI-powered marketing automation and optimization',
          price: 'Starting at $199/month',
          features: ['Ad Optimization', 'Content Generation', 'Customer Segmentation', 'ROI Tracking'],
          link: '/ai-marketing'
        },
        {
          name: 'AI Automation',
          description: 'Intelligent business process automation',
          price: 'Starting at $399/month',
          features: ['Workflow Automation', 'Decision Making', 'Exception Handling', 'Process Optimization'],
          link: '/ai-automation'
        },
        {
          name: 'AI CRM Automation',
          description: 'Revolutionary AI-powered customer relationship management',
          price: 'Starting at $299/month',
          features: ['Lead Scoring', 'Automated Follow-ups', 'Predictive Analytics', 'Smart Scheduling'],
          link: '/ai-crm-automation'
        },
        {
          name: 'AI Project Management',
          description: 'Intelligent project management with AI insights',
          price: 'Starting at $199/month',
          features: ['Task Prioritization', 'Risk Prediction', 'Team Optimization', 'Smart Communication'],
          link: '/ai-project-management'
        },
        {
          name: 'AI Customer Support',
          description: '24/7 AI-powered customer support automation',
          price: 'Starting at $199/month',
          features: ['AI Chatbot', 'Sentiment Analysis', 'Smart Routing', 'Knowledge Base AI'],
          link: '/ai-customer-support'
        }
      ]
    },
    {
      title: 'IT Services',
      icon: <Server className="w-8 h-8" />,
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/20',
      services: [
        {
          name: 'IT Infrastructure',
          description: 'Enterprise-grade IT infrastructure solutions',
          price: 'Starting at $999/month',
          features: ['99.9% Uptime', '24/7 Support', 'Scalable Architecture', 'Security Hardening'],
          link: '/it-infrastructure'
        },
        {
          name: 'Cloud Migration',
          description: 'Seamless migration to AWS, Azure, and Google Cloud',
          price: 'Starting at $2,999',
          features: ['Zero Downtime', 'Multi-Cloud Strategy', 'Security & Compliance', 'Performance Optimization'],
          link: '/cloud-migration'
        },
        {
          name: 'Network Security',
          description: 'Advanced network security with AI-powered protection',
          price: 'Starting at $1,999/month',
          features: ['Threat Detection', '24/7 Monitoring', 'Compliance Management', 'Incident Response'],
          link: '/network-security'
        },
        {
          name: 'DevOps & CI/CD',
          description: 'Streamlined development operations and automation',
          price: 'Starting at $1,499/month',
          features: ['Automated Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Container Orchestration'],
          link: '/devops'
        },
        {
          name: 'Database Services',
          description: 'Comprehensive database management and optimization',
          price: 'Starting at $799/month',
          features: ['Performance Tuning', 'Backup & Recovery', 'Security Hardening', 'Migration Services'],
          link: '/database'
        },
        {
          name: 'Cybersecurity',
          description: 'Comprehensive security solutions and compliance',
          price: 'Starting at $1,299/month',
          features: ['Security Auditing', 'Penetration Testing', 'Compliance Management', 'Security Training'],
          link: '/cybersecurity'
        }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: <Cpu className="w-8 h-8" />,
      color: 'text-green-400',
      bgColor: 'bg-green-900/20',
      services: [
        {
          name: 'Micro SAAS Solutions',
          description: '50+ ready-to-use AI-powered applications',
          price: 'Starting at $79/month',
          features: ['AI Code Review', 'Test Generation', 'API Documentation', 'SEO Optimization'],
          link: '/micro-saas'
        },
        {
          name: 'AI Content Generation',
          description: 'High-quality content creation with AI',
          price: 'Starting at $199/month',
          features: ['Blog Posts', 'Social Media', 'Email Templates', 'SEO Optimization'],
          link: '/ai-content-generation'
        },
        {
          name: 'AI Data Analytics',
          description: 'Transform data into actionable insights',
          price: 'Starting at $599/month',
          features: ['Real-time Dashboards', 'Predictive Analytics', 'Custom Reports', 'Data Visualization'],
          link: '/ai-data-analytics'
        },
        {
          name: 'AI E-commerce Solutions',
          description: 'Revolutionary AI-powered e-commerce platform',
          price: 'Starting at $899/month',
          features: ['Personalization', 'Inventory Optimization', 'Customer Experience', 'Sales Analytics'],
          link: '/ai-ecommerce-solutions'
        }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/20',
      services: [
        {
          name: 'Quantum Computing',
          description: 'Next-generation quantum computing capabilities',
          price: 'Custom Pricing',
          features: ['Complex Problem Solving', 'Optimization Algorithms', 'Research & Development', 'Custom Solutions'],
          link: '/quantum-computing'
        },
        {
          name: 'Autonomous Systems',
          description: 'Self-managing and intelligent systems',
          price: 'Starting at $2,499/month',
          features: ['Self-Healing', 'Predictive Maintenance', 'Adaptive Learning', 'Resource Optimization'],
          link: '/autonomous-systems'
        },
        {
          name: 'Blockchain & Web3',
          description: 'Decentralized solutions and blockchain development',
          price: 'Starting at $1,999/month',
          features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Web3 Integration'],
          link: '/blockchain-web3'
        },
        {
          name: 'IoT & Edge Computing',
          description: 'Connected devices and edge computing solutions',
          price: 'Starting at $1,299/month',
          features: ['Device Management', 'Real-time Processing', 'Data Analytics', 'Security'],
          link: '/iot-edge-computing'
        }
      ]
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp Solutions',
      role: 'CTO',
      content: 'Zion Tech Group transformed our entire technology stack. The AI services increased our efficiency by 300% and the IT infrastructure is rock solid.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'InnovateTech Inc',
      role: 'VP of Engineering',
      content: 'The micro SAAS solutions saved us months of development time. The AI-powered tools are incredibly powerful and easy to use.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'ScaleUp Ventures',
      role: 'CEO',
      content: 'Outstanding service and support. The team delivered exactly what they promised and exceeded our expectations in every way.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and micro SAAS services. Transform your business with our cutting-edge technology solutions and expert support." />
        <meta name="keywords" content="AI services, IT services, micro SAAS, cloud migration, cybersecurity, automation, business solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
              Comprehensive Technology Solutions for Modern Businesses
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your business with our cutting-edge AI, IT, and micro SAAS solutions. 
              From enterprise AI applications to cloud migration and cybersecurity, we provide 
              everything you need to succeed in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="mb-16">
            <div className="flex items-center mb-8">
              <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                <div className={category.color}>
                  {category.icon}
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-3">{service.name}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{service.price}</div>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={service.link}
                    className="w-full text-center py-2 px-4 rounded-lg font-semibold bg-cyan-400 text-black hover:bg-cyan-300 transition-all duration-300"
                  >
                    Learn More
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">$50M+ annual savings delivered to clients with 95% process automation and 300% ROI.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security and compliance for your critical data and infrastructure.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Implementation</h3>
              <p className="text-gray-300">Rapid deployment with minimal disruption to your business operations.</p>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-white mb-3">Expert Support</h3>
              <p className="text-gray-300">24/7 expert support and ongoing optimization to ensure maximum value.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-cyan-400">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact us today for a free consultation and discover how our services can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown, DE 19709</p>
              <p>🕒 Mon-Fri: 9AM-6PM EST</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesPage;