'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Phone, Mail, MapPin, DollarSign, Award, Lock, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location } from 'lucide-react';

const MicroSAASPage: React.FC = () => {
  const saasCategories = [
    {
      title: 'AI-Powered Tools',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { 
          name: 'AI Writing Assistant', 
          price: '$29/month', 
          description: 'AI-powered writing and content creation tool',
          features: ['Content Generation', 'Grammar Check', 'Style Optimization', 'Multi-language Support'],
          benefits: ['Save 80% writing time', 'Improve content quality', 'Generate unlimited content', 'Multi-language support']
        },
        { 
          name: 'AI Voice Cloning', 
          price: '$299/month', 
          description: 'Advanced voice synthesis and cloning technology',
          features: ['Voice Cloning', 'Text-to-Speech', 'Emotion Control', 'Multi-language Support'],
          benefits: ['Create personalized voices', 'Reduce production costs', 'Improve accessibility', 'Scale voice content']
        },
        { 
          name: 'AI 3D Generation', 
          price: '$499/month', 
          description: 'AI-powered 3D model and asset creation',
          features: ['3D Model Generation', 'Texture Synthesis', 'Animation Creation', 'VR/AR Integration'],
          benefits: ['Accelerate 3D creation', 'Reduce production costs', 'Generate unlimited content', 'Professional quality']
        },
        { 
          name: 'AI Music Composition', 
          price: '$199/month', 
          description: 'Intelligent music generation and composition',
          features: ['Music Composition', 'Style Transfer', 'Emotional Analysis', 'MIDI Export'],
          benefits: ['Create original music', 'Explore new styles', 'Reduce composition time', 'Professional quality']
        }
      ]
    },
    {
      title: 'Business Productivity',
      icon: Briefcase,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { 
          name: 'AI Scheduler', 
          price: '$19/month', 
          description: 'Smart scheduling and calendar management',
          features: ['Smart Scheduling', 'Conflict Resolution', 'Resource Booking', 'Meeting Analytics'],
          benefits: ['Save 90% scheduling time', 'Eliminate conflicts', 'Optimize meetings', 'Improve productivity']
        },
        { 
          name: 'Task Manager Pro', 
          price: '$39/month', 
          description: 'Advanced task and project management',
          features: ['Task Management', 'Project Tracking', 'Team Collaboration', 'Progress Analytics'],
          benefits: ['Improve productivity', 'Better project visibility', 'Team coordination', 'Deadline management']
        },
        { 
          name: 'Expense Tracker', 
          price: '$19/month', 
          description: 'Intelligent expense tracking and management',
          features: ['Expense Tracking', 'Receipt Scanning', 'Budget Management', 'Tax Preparation'],
          benefits: ['Automate expense tracking', 'Reduce manual work', 'Improve accuracy', 'Tax compliance']
        },
        { 
          name: 'CRM Lite', 
          price: '$49/month', 
          description: 'Customer relationship management system',
          features: ['Contact Management', 'Sales Pipeline', 'Lead Tracking', 'Analytics'],
          benefits: ['Improve customer relationships', 'Track sales progress', 'Manage leads', 'Increase sales']
        }
      ]
    },
    {
      title: 'Marketing & Sales',
      icon: Target,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { 
          name: 'AI Email Marketing', 
          price: '$79/month', 
          description: 'Intelligent email marketing automation',
          features: ['Email Automation', 'Personalization', 'A/B Testing', 'Analytics'],
          benefits: ['Increase open rates', 'Automate campaigns', 'Personalize content', 'Track performance']
        },
        { 
          name: 'Social Media Manager', 
          price: '$59/month', 
          description: 'AI-powered social media management',
          features: ['Content Scheduling', 'Post Optimization', 'Analytics', 'Multi-platform'],
          benefits: ['Save time on social media', 'Improve engagement', 'Track performance', 'Multi-platform management']
        },
        { 
          name: 'SEO Optimizer', 
          price: '$89/month', 
          description: 'AI-powered SEO analysis and optimization',
          features: ['Keyword Research', 'Content Optimization', 'Technical SEO', 'Competitor Analysis'],
          benefits: ['Improve search rankings', 'Increase organic traffic', 'Optimize content', 'Beat competitors']
        },
        { 
          name: 'Landing Page Builder', 
          price: '$39/month', 
          description: 'AI-powered landing page creation',
          features: ['Drag & Drop Builder', 'AI Optimization', 'A/B Testing', 'Analytics'],
          benefits: ['Create pages quickly', 'Improve conversions', 'Test variations', 'Track performance']
        }
      ]
    },
    {
      title: 'Development Tools',
      icon: Code,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { 
          name: 'Code Assistant', 
          price: '$99/month', 
          description: 'AI-powered coding assistant and code review',
          features: ['Code Generation', 'Bug Detection', 'Code Review', 'Documentation'],
          benefits: ['Accelerate development', 'Improve code quality', 'Reduce bugs', 'Learn best practices']
        },
        { 
          name: 'API Builder', 
          price: '$149/month', 
          description: 'Rapid API development and testing platform',
          features: ['API Design', 'Code Generation', 'Testing', 'Documentation'],
          benefits: ['Build APIs faster', 'Ensure quality', 'Generate documentation', 'Test thoroughly']
        },
        { 
          name: 'Bug Tracker Pro', 
          price: '$69/month', 
          description: 'Advanced bug tracking and issue management',
          features: ['Bug Tracking', 'Issue Management', 'Team Collaboration', 'Analytics'],
          benefits: ['Track bugs efficiently', 'Improve team coordination', 'Reduce resolution time', 'Better visibility']
        },
        { 
          name: 'Doc Generator', 
          price: '$39/month', 
          description: 'Automated documentation generation',
          features: ['Auto Documentation', 'Code Analysis', 'Multiple Formats', 'Version Control'],
          benefits: ['Save documentation time', 'Keep docs updated', 'Multiple formats', 'Version control']
        }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Immediate ROI',
      description: 'See results from day one with our ready-to-use AI tools'
    },
    {
      icon: Zap,
      title: 'Easy Integration',
      description: 'Seamlessly integrate with your existing workflows and tools'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated support team to help you succeed'
    }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$19',
      period: '/month',
      description: 'Perfect for individuals and small teams',
      features: [
        'Access to 5 AI tools',
        'Basic analytics',
        'Email support',
        'Standard features',
        '1 user account'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Access to 20 AI tools',
        'Advanced analytics',
        'Priority support',
        'All features',
        'Up to 10 users',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Access to all AI tools',
        'Advanced analytics',
        'Dedicated support',
        'All features',
        'Unlimited users',
        'Full API access',
        'Custom integrations',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="50+ AI-powered micro SAAS tools for business productivity, marketing, development, and more. Starting at $19/month with instant access." />
        <meta name="keywords" content="micro saas, ai tools, business productivity, marketing tools, development tools, saas solutions" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Micro SAAS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            50+ AI-powered micro SAAS tools designed to boost productivity, streamline workflows, 
            and accelerate business growth. Get instant access to professional-grade tools at affordable prices.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">AI Tools</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-green-400 mb-2">$19</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 cyber-card">
              <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
              <div className="text-gray-300">Support</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12 cyber-card">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAAS Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            AI-Powered Micro SAAS Tools
          </h2>
          <div className="space-y-16">
            {saasCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 cyber-card">
                <div className="flex items-center mb-8">
                  <div className={`w-16 h-16 ${category.bgColor} rounded-xl flex items-center justify-center mr-6`}>
                    <category.icon className={`w-8 h-8 ${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">{category.title}</h3>
                    <p className="text-gray-300">Professional AI tools for your business needs</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 cyber-card">
                      <h4 className="text-xl font-bold text-white mb-3">{service.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                      
                      {/* Features */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Features:</h5>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Benefits:</h5>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                              <TrendingUp className="w-3 h-3 text-blue-400 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                        <a
                          href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.name}`}
                          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        >
                          Get Started
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Micro SAAS Tools?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 cyber-card">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Simple Pricing Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300 cyber-card relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${plan.name} Micro SAAS Plan`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Boost Your Productivity with AI?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get instant access to 50+ AI-powered tools and transform your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASPage;