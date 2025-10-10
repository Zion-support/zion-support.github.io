'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Users, BarChart, Shield, Cloud, Database, Brain, Clock, DollarSign, Globe, Settings } from 'lucide-react';
const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app'],
      price: '$99/month',
      users: 'Up to 50 users',
      category: 'Analytics'
    },
    {
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs'],
      price: '$149/month',
      users: 'Up to 100 users',
      category: 'CRM'
    },
    {
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring'],
      price: '$199/month',
      users: 'Up to 200 users',
      category: 'Security'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support'],
      price: '$299/month',
      users: 'Unlimited users',
      category: 'Infrastructure'
    },
    {
      icon: Brain,
      title: 'AI Content Generator',
      description: 'Automated content creation for marketing, social media, and documentation',
      features: ['Content templates', 'Multi-language support', 'SEO optimization', 'Brand consistency'],
      price: '$79/month',
      users: 'Up to 25 users',
      category: 'Content'
    },
    {
      icon: Database,
      title: 'Data Pipeline Manager',
      description: 'Automated data collection, processing, and analysis for business intelligence',
      features: ['Data connectors', 'ETL processes', 'Real-time processing', 'Data visualization'],
      price: '$179/month',
      users: 'Up to 75 users',
      category: 'Data'
    }
  ];
  const benefits = [
    'No upfront costs',
    'Quick deployment',
    'Scalable solutions',
    'Regular updates',
    '24/7 support',
    'Easy integration'
  ];
  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get started in minutes with our intuitive setup process'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built-in collaboration tools for seamless team coordination'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Access',
      description: 'Access your tools from anywhere with our cloud-based platform'
    }
  ];
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 5 users',
        'Basic analytics',
        'Email support',
        'Standard integrations'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies with advanced needs',
      features: [
        'Up to 25 users',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'API access'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large organizations',
      features: [
        'Unlimited users',
        'Custom analytics',
        'Dedicated support',
        'White-label options',
        'On-premise deployment'
      ],
      popular: false;
    }
  ];
  return (
    <>
      <Helmet></Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group | Affordable AI Tools</title>
        <meta name="description" content="Discover our range of micro SAAS solutions - affordable, powerful AI-driven tools that transform your business operations without breaking the bank." />
        <meta name="keywords" content="micro SAAS, AI tools, business software, affordable solutions, small business tools, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
        <div className="container mx-auto px-4 py-16"></div>
          {/* Header */}
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl font-bold text-white mb-6"></h1>
              Micro <span className="text-cyan-400">SaaS</span> Solutions;
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>
              Affordable, scalable AI and IT tools designed for growing businesses. 
              Start with low monthly costs and scale as you grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <Link;
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              ></Link>
                <Zap className="w-5 h-5" />
                <span>Start Free Trial</span>
              </Link>
              <Link;
                to="/pricing"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              ></Link>
                View Pricing;
              </Link>
            </div>
          </div>
          {/* Benefits */}
          <div className="mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Why Choose Our Micro SaaS?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {benefits.map((benefit, index) => (
                <div;
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 text-center"
                ></div>
                  <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"></div>
            {microSaasProducts.map((product, index) => (
              <div;
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
              ></div>
                <div className="flex items-start space-x-4 mb-6"></div>
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0"></div>
                    <product.icon className="w-6 h-6 text-white" />
                  </div>
                  <div></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <p className="text-gray-300 mb-4">{product.description}</p>
                  </div>
                </div>
                <div className="mb-6"></div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2"></ul>
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2"></li>
                        <CheckCircle className="w-4 h-4 text-cyan-400" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between mb-6"></div>
                  <div></div>
                    <div className="text-3xl font-bold text-cyan-400">{product.price}</div>
                    <div className="text-sm text-gray-300">{product.users}</div>
                  </div>
                  <div className="flex items-center space-x-1"></div>
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3"></div>
                  <button className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"></button>
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button className="flex-1 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"></button>
                    Learn More;
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* Comparison Table */}
          <div className="mb-16"></div>
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Compare Plans</h2>
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 overflow-x-auto"></div>
              <table className="w-full text-left"></table>
                <thead></thead>
                  <tr className="border-b border-white/10"></tr>
                    <th className="pb-4 text-white font-semibold">Features</th>
                    <th className="pb-4 text-white font-semibold text-center">AI Analytics</th>
                    <th className="pb-4 text-white font-semibold text-center">CRM</th>
                    <th className="pb-4 text-white font-semibold text-center">Security Suite</th>
                    <th className="pb-4 text-white font-semibold text-center">Cloud Manager</th>
                  </tr>
                </thead>
                <tbody className="space-y-4"></tbody>
                  <tr></tr>
                    <td className="py-3 text-gray-300">Users</td>
                    <td className="py-3 text-gray-300 text-center">Up to 50</td>
                    <td className="py-3 text-gray-300 text-center">Up to 100</td>
                    <td className="py-3 text-gray-300 text-center">Up to 200</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr></tr>
                    <td className="py-3 text-gray-300">Storage</td>
                    <td className="py-3 text-gray-300 text-center">100GB</td>
                    <td className="py-3 text-gray-300 text-center">500GB</td>
                    <td className="py-3 text-gray-300 text-center">1TB</td>
                    <td className="py-3 text-gray-300 text-center">Unlimited</td>
                  </tr>
                  <tr></tr>
                    <td className="py-3 text-gray-300">API Access</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                  <tr></tr>
                    <td className="py-3 text-gray-300">24/7 Support</td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                    <td className="py-3 text-center"><CheckCircle className="w-5 h-5 text-cyan-400 mx-auto" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12"></div>
              <h2 className="text-4xl font-bold text-white mb-4"></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto"></p>
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <Link;
                  to="/contact"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
                ></Link>
                  <Zap className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </Link>
                <Link;
                  to="/pricing"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors duration-200"
                ></Link>
                  View All Plans;
                </Link>
              </div>
            </div>
          </div>
        </section>
        </div>
      </div>
    </>
  );
};
export default MicroSaasPage;