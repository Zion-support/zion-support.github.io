import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Zap, Star, Users, TrendingUp, Shield, Cloud, BarChart3, MessageSquare, Target, Rocket } from 'lucide-react';

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  pricing: string;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const products: MicroSaasProduct[] = [
    {
      id: '1',
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'Analytics Dashboard Pro',
      description: 'Comprehensive business analytics with real-time insights and customizable reports.',
      features: ['Real-time analytics', 'Custom dashboards', 'Data visualization', 'Export capabilities'],
      pricing: '$29/month',
      category: 'Analytics',
      popular: true
    },
    {
      id: '2',
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Customer Support Hub',
      description: 'AI-powered customer support with automated responses and ticket management.',
      features: ['AI chatbot', 'Ticket management', 'Knowledge base', 'Multi-channel support'],
      pricing: '$49/month',
      category: 'Support'
    },
    {
      id: '3',
      icon: <Users className="w-8 h-8" />,
      title: 'Team Collaboration Suite',
      description: 'Streamline team communication and project management with integrated tools.',
      features: ['Team chat', 'File sharing', 'Project tracking', 'Video conferencing'],
      pricing: '$39/month',
      category: 'Collaboration'
    },
    {
      id: '4',
      icon: <Shield className="w-8 h-8" />,
      title: 'Security Monitor',
      description: 'Advanced security monitoring and threat detection for your applications.',
      features: ['Threat detection', 'Security alerts', 'Compliance reporting', 'Incident response'],
      pricing: '$59/month',
      category: 'Security'
    },
    {
      id: '5',
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Backup Manager',
      description: 'Automated cloud backup and disaster recovery solutions for your data.',
      features: ['Automated backups', 'Version control', 'Disaster recovery', 'Cross-platform sync'],
      pricing: '$19/month',
      category: 'Backup'
    },
    {
      id: '6',
      icon: <Target className="w-8 h-8" />,
      title: 'Marketing Automation',
      description: 'Streamline your marketing efforts with automated campaigns and lead management.',
      features: ['Email campaigns', 'Lead scoring', 'A/B testing', 'ROI tracking'],
      pricing: '$79/month',
      category: 'Marketing'
    }
  ];

  const categories = ['All', 'Analytics', 'Support', 'Collaboration', 'Security', 'Backup', 'Marketing'];

  const benefits = [
    'Quick setup and deployment',
    'Scalable infrastructure',
    '24/7 technical support',
    'Regular updates and improvements',
    'API integration capabilities',
    'Custom branding options'
  ];

  const stats = [
    { label: 'Active Users', value: '10,000+', icon: <Users className="w-6 h-6" /> },
    { label: 'Uptime', value: '99.9%', icon: <Shield className="w-6 h-6" /> },
    { label: 'Customer Satisfaction', value: '98%', icon: <Star className="w-6 h-6" /> },
    { label: 'Response Time', value: '< 1s', icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Micro SaaS Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our collection of micro SaaS solutions designed to solve specific business problems with powerful, focused tools." />
        <meta name="keywords" content="micro SaaS, SaaS solutions, business tools, productivity software, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Powerful, focused tools designed to solve specific business problems. 
            Get started quickly with our ready-to-use micro SaaS applications.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Micro SaaS Products</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choose from our collection of specialized tools designed to enhance your business operations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 ${
                  product.popular ? 'ring-2 ring-purple-500' : ''
                }`}
              >
                {product.popular && (
                  <div className="flex items-center justify-center mb-4">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white">
                      {product.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{product.description}</p>
                  <span className="text-purple-400 text-sm font-semibold">{product.category}</span>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-4">{product.pricing}</div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our Micro SaaS?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our micro SaaS solutions are designed for quick deployment and maximum impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our micro SaaS solutions or let us create a custom solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              Browse Solutions
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Custom Development
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSaasPage;