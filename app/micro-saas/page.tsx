'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  users: string;
  popular: boolean;
  category: string})
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: '📊',
      title: 'AI Analytics Dashboard',
      description: 'Real-time business intelligence and predictive analytics for small to medium businesses',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Mobile app', 'API integration'],
      price: '$99/month',
      users: 'Up to 50 users',
      popular: true,
      category: 'Analytics'})
},
    {
      id: '2',
      icon: '👥',
      title: 'AI-Powered CRM',
      description: 'Intelligent customer relationship management with automated lead scoring and personalized interactions',
      features: ['Lead management', 'Email automation', 'Sales forecasting', 'Integration APIs', 'Custom fields'],
      price: '$149/month',
      users: 'Up to 100 users',
      popular: false,
      category: 'CRM'})
},
    {
      id: '3',
      icon: '🔒',
      title: 'Security Monitoring Suite',
      description: 'Comprehensive cybersecurity monitoring and threat detection for growing businesses',
      features: ['Threat detection', 'Vulnerability scanning', 'Compliance reporting', '24/7 monitoring', 'Incident response'],
      price: '$199/month',
      users: 'Up to 200 users',
      popular: false,
      category: 'Security'})
},
    {
      id: '4',
      icon: '☁️',
      title: 'Cloud Infrastructure Manager',
      description: 'Automated cloud resource management and cost optimization for multi-cloud environments',
      features: ['Resource optimization', 'Cost tracking', 'Auto-scaling', 'Multi-cloud support', 'Backup management'],
      price: '$299/month',
      users: 'Unlimited users',
      popular: false,
      category: 'Infrastructure'})
},
    {
      id: '5',
      icon: '📧',
      title: 'Email Marketing Automation',
      description: 'AI-driven email campaigns with advanced segmentation and personalization',
      features: ['Email templates', 'A/B testing', 'Segmentation', 'Analytics', 'Integration tools'],
      price: '$79/month',
      users: 'Up to 25,000 contacts',
      popular: false,
      category: 'Marketing'})
},
    {
      id: '6',
      icon: '💬',
      title: 'Customer Support Chatbot',
      description: 'Intelligent chatbot solution for 24/7 customer support and lead generation',
      features: ['Natural language processing', 'Multi-channel support', 'Knowledge base', 'Analytics', 'Custom training'],
      price: '$129/month',
      users: 'Unlimited conversations',
      popular: false,
      category: 'Support'})
}
  ];

  const benefits = [
    'No upfront costs or setup fees',
    'Quick deployment in 24-48 hours',
    'Scalable solutions that grow with you',
    'Regular updates and new features',
    '24/7 technical support',
    'Easy integration with existing tools',
    'Free trial for all products',
    'Cancel anytime, no long-term contracts'
  ];

  const categories = ['All', 'Analytics', 'CRM', 'Security', 'Infrastructure', 'Marketing', 'Support'];

  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Active Users',
      description: 'Growing community of satisfied customers'})
},
    {
      icon: TrendingUp,
      value: '99.9%',
      label: 'Uptime',
      description: 'Reliable service you can count on'})
},
    {
      icon: Star,
      value: '4.8/5',
      label: 'Rating',
      description: 'Highly rated by our customers'})
},
    {
      icon: Zap,
      value: '24/7',
      label: 'Support',
      description: 'Always here when you need us'})
}
  ];

  return (
    <>
      <Helmet></Helmet>
        <title></titl>Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed for small to medium businesses. AI-powered tools for analytics, CRM, security, and more." />
        <meta name="keywords" content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></di></div>
        {/* Hero Section */}
        <section className="py-20 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto text-center"></di></div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
              Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"></spa>SaaS</span> Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12"></p>
              Ready-to-use business tools that solve specific problems. No complex setup, no long-term commitments - just powerful solutions that work.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto"></di></div>
              {stats.map((stat, index) => (
                <div key={index} className="text-center"></di></div>
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center"></di></div>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2"></di>{stat.value}</div>
                  <div className="text-gray-400 text-sm"></di>{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1"></di>{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="flex flex-wrap justify-center gap-4"></di></div>
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'})
}`}
                ></button>
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Our Micro SaaS Products</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Choose from our collection of specialized business tools designed to solve specific challenges.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></di></div>
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? 'border-purple-400 shadow-2xl shadow-purple-500/25 scale-105'
                      : 'border-white/20'})
} hover:border-purple-400 transition-all duration-300 group`}
                ></di></div>
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></di></div>
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2"></di></div>
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6"></di></div>
                    <div className="text-4xl mb-4"></di>{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors"></h3>
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{product.description}</p>
                    <div className="flex items-center justify-center gap-2 mb-4"></di></div>
                      <span className="text-2xl font-bold text-white"></spa>{product.price}</span>
                      <span className="text-gray-400 text-sm"></spa>{product.users}</span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full"></di></div>
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8"></ul>
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm"></li>
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col gap-3"></di></div>
                    <button className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105"></button>
                      Start Free Trial
                    </button>
                    <button className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20"></button>
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>Why Choose Our Micro SaaS Solutions?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We've designed our micro SaaS products to be simple, powerful, and accessible to businesses of all sizes.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"></di></div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></di></div>
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3"></di></div>
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300"></spa>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-7xl mx-auto"></di></div>
            <div className="text-center mb-16"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h>How It Works</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Getting started with our micro SaaS solutions is simple and straightforward.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></di></div>
              <div className="text-center"></di></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></di></div>
                  <span className="text-2xl font-bold text-white"></spa>1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4"></h>Choose Your Solution</h3>
                <p className="text-gray-300">Browse our collection and select the micro SaaS product that fits your needs.</p>
              </div>
              <div className="text-center"></di></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></di></div>
                  <span className="text-2xl font-bold text-white"></spa>2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4"></h>Start Free Trial</h3>
                <p className="text-gray-300">Sign up for a free trial and explore all features without any commitment.</p>
              </div>
              <div className="text-center"></di></div>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center"></di></div>
                  <span className="text-2xl font-bold text-white"></spa>3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4"></h>Scale & Grow</h3>
                <p className="text-gray-300">Upgrade when you're ready and scale your usage as your business grows.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4"></sectio></section>
          <div className="max-w-4xl mx-auto text-center"></di></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20"></di></div>
              <h2 className="text-3xl font-bold text-white mb-6"></h2>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>
                Choose the micro SaaS solution that fits your business needs. 
                Start with a free trial and scale as you grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></di></div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                ></Link>
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                ></Link>
                  View All Plans
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  ));)
};

export default MicroSaasPage;