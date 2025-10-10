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
  category: string;
}

const MicroSaasPage: React.FC = () => {
  const microSaasProducts: MicroSaasProduct[] = [
    {
      id: '1',
      icon: 'analytics',
      title: 'AI Analytics Dashboard',
      description: 'Comprehensive business intelligence with AI-powered insights and real-time analytics.',
      features: ['Real-time data visualization', 'AI-powered insights', 'Custom dashboards', 'Automated reporting'],
      price: '$29/month',
      users: 'Up to 10 users',
      popular: true,
      category: 'Analytics'
    },
    {
      id: '2',
      icon: 'security',
      title: 'Security Monitoring Suite',
      description: 'Advanced cybersecurity monitoring with threat detection and automated response.',
      features: ['24/7 threat monitoring', 'Automated incident response', 'Compliance tracking', 'Security analytics'],
      price: '$49/month',
      users: 'Up to 25 users',
      popular: false,
      category: 'Security'
    },
    {
      id: '3',
      icon: 'project',
      title: 'Project Management Pro',
      description: 'AI-enhanced project management with intelligent task allocation and progress tracking.',
      features: ['Smart task management', 'Team collaboration', 'Progress analytics', 'Resource optimization'],
      price: '$39/month',
      users: 'Up to 15 users',
      popular: false,
      category: 'Productivity'
    },
    {
      id: '4',
      icon: 'crm',
      title: 'CRM Assistant',
      description: 'AI-powered customer relationship management with automated lead scoring and follow-ups.',
      features: ['Lead scoring', 'Automated follow-ups', 'Customer insights', 'Sales forecasting'],
      price: '$59/month',
      users: 'Up to 20 users',
      popular: true,
      category: 'Sales'
    },
    {
      id: '5',
      icon: 'content',
      title: 'Content Generator',
      description: 'AI-powered content creation tool for blogs, social media, and marketing materials.',
      features: ['Blog post generation', 'Social media content', 'SEO optimization', 'Brand voice consistency'],
      price: '$19/month',
      users: 'Up to 5 users',
      popular: false,
      category: 'Marketing'
    },
    {
      id: '6',
      icon: 'support',
      title: 'Customer Support Bot',
      description: 'Intelligent chatbot for customer support with natural language processing.',
      features: ['24/7 support', 'Multi-language support', 'Ticket management', 'Knowledge base integration'],
      price: '$35/month',
      users: 'Unlimited',
      popular: false,
      category: 'Support'
    }
  ];

  const categories = ['All', 'Analytics', 'Security', 'Productivity', 'Sales', 'Marketing', 'Support'];

  const getIcon = (iconName: string) => {
    const icons = {
      analytics: BarChart3,
      security: Shield,
      project: TrendingUp,
      crm: Users,
      content: MessageSquare,
      support: MessageSquare
    };
    return icons[iconName as keyof typeof icons] || BarChart3;
  };

  return (
    <>
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS tools designed to solve specific business problems efficiently and cost-effectively." />
        <meta name="keywords" content="micro SaaS, AI tools, business automation, productivity software, cloud solutions" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SaaS Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused AI tools designed to solve specific business problems with maximum efficiency and minimal complexity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center text-cyan-400">
                <Zap className="w-5 h-5 mr-2" />
                <span>AI-Powered</span>
              </div>
              <div className="flex items-center text-cyan-400">
                <Shield className="w-5 h-5 mr-2" />
                <span>Secure</span>
              </div>
              <div className="flex items-center text-cyan-400">
                <Cloud className="w-5 h-5 mr-2" />
                <span>Cloud-Based</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Collection</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Each tool is designed to solve a specific business challenge with precision and efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => {
                const IconComponent = getIcon(product.icon);
                return (
                  <div
                    key={product.id}
                    className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group ${
                      product.popular ? 'border-cyan-400/50 ring-1 ring-cyan-400/20' : 'border-white/10'
                    }`}
                  >
                    {product.popular && (
                      <div className="flex items-center justify-center mb-4">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm font-medium rounded-full">
                          Most Popular
                        </span>
                      </div>
                    )}

                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {product.title}
                        </h3>
                        <span className="text-sm text-gray-400">{product.category}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 text-sm">
                      {product.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className="text-2xl font-bold text-white">{product.price}</div>
                        <div className="text-sm text-gray-400">{product.users}</div>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="text-sm text-gray-300">4.8</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group">
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need a Custom Micro SaaS Solution?
            </h2>
            <p className="text-gray-300 mb-8">
              We can build a tailored micro SaaS tool specifically for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/consultation"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;