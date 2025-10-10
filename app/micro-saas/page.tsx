'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Customer Relationship Manager',
      description: 'AI-powered CRM with automated lead scoring and customer insights',
      features: ['Lead management', 'Automated follow-ups', 'Customer insights', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Monitoring Suite',
      description: 'Comprehensive security monitoring and threat detection for small businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Unlimited',
      category: 'Security'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Backup Manager',
      description: 'Automated cloud backup and disaster recovery solution',
      features: ['Automated backups', 'Disaster recovery', 'Version control', 'Cross-platform sync'],
      price: '$79/month',
      users: 'Unlimited',
      category: 'Backup'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Management Platform',
      description: 'Centralized data management with AI-powered insights and automation',
      features: ['Data integration', 'AI insights', 'Automated workflows', 'Data visualization'],
      price: '$129/month',
      users: 'Up to 200 users',
      category: 'Data'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI Content Generator',
      description: 'AI-powered content creation for marketing, blogs, and social media',
      features: ['Content generation', 'SEO optimization', 'Multi-language support', 'Brand voice training'],
      price: '$89/month',
      users: 'Up to 25 users',
      category: 'AI'
    }]
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Backup', 'Data', 'AI']];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Quick Setup',
      description: 'Get started in minutes with our easy-to-use interface'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee'
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: 'Customizable',
      description: 'Tailor the solution to your specific business needs'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Scalable',
      description: 'Grow with your business with flexible pricing plans'
    }]
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions - Zion Tech Group | Small Business Software</title>
        <meta name="description" content="Discover our micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, small business software, AI tools, business analytics, CRM, security monitoring, cloud backup" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        </div><section className="relative py-20 px-4 overflow-hidden">
          </section><div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          </div><div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          </div><div className="relative max-w-7xl mx-auto text-center">
            </div><h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Powerful, affordable software solutions designed specifically for small to medium businesses.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300">
                Choose from our range of specialized business solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product, index) => (
                </div><div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  </div><div className="text-center mb-6">
                    </div><div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                      </div><div className="text-cyan-400">
                        {product.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mb-4">
                      </div><div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{product.price}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{product.users}</span>
                      </div>
                    </div>
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <div className="space-y-3 mb-6">
                    </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-cyan-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                    <span>Try Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 bg-white/5">
          </section><div className="max-w-7xl mx-auto">
            </div><div className="text-center mb-16">
              </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300">
                Built for small businesses, powered by enterprise-grade technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                </div><div key={index} className="text-center">
                  </div><div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-500/20 rounded-full mb-4">
                    </div><div className="text-cyan-400">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          </section><div className="max-w-4xl mx-auto text-center">
            </div><h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start your free trial today and see how our micro SaaS solutions can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors duration-200 flex items-center justify-center space-x-2">
                <span>Start Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="border-2 border-cyan-600 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-600/10 transition-colors duration-200"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;