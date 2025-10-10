'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, BarChart, MessageSquare, FileText, Target, Shield, Cloud } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  icon: any;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '9/month',
      marketPrice: 'echo "'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, BarChart, MessageSquare, FileText, Target, Shield, Cloud } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  icon: any;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Automated Routing'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved satisfaction'],
      icon: MessageSquare,
      category: 'Customer Support',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates'],
      icon: Target,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Solutions</title>
        <meta name=\"description\" content=\"Discover our collection of AI-powered micro SaaS products designed to solve specific business problems with affordable, scalable solutions.\" />
        <meta name=\"keywords\" content=\"micro SaaS, AI products, business software, analytics, customer support, automation, affordable solutions\" />
        <meta property=\"og:title\" content=\"Micro SaaS Products - Zion Tech Group\" />
        <meta property=\"og:description\" content=\"AI-powered micro SaaS products for modern businesses\" />
        <meta property=\"og:type\" content=\"website\" />
      </Helmet>

      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">
        <main className=\"container mx-auto px-4 py-16 pt-24\">
          {/* Hero Section */}
          <section className=\"text-center mb-16\">
            <h1 className=\"text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">
              Micro SaaS Products
            </h1>
            <p className=\"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed\">
              Discover our collection of AI-powered micro SaaS products designed to solve specific 
              business problems with affordable, scalable solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className=\"mb-16\">
            <div className=\"max-w-4xl mx-auto\">
              <div className=\"flex flex-col md:flex-row gap-4 mb-8\">
                <div className=\"flex-1 relative\">
                  <input
                    type=\"text\"
                    placeholder=\"Search products...\"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=\"w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  />
                </div>
                <div className=\"flex items-center space-x-2\">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=\"px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {filteredProducts.map((product, index) => (
                <div key={index} className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300\">
                  {product.popular && (
                    <div className=\"flex items-center justify-center mb-4\">
                      <span className=\"bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center\">
                        <Star className=\"w-4 h-4 mr-1\" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4\">
                      <product.icon className=\"w-6 h-6 text-white\" />
                    </div>
                    <div>
                      <h3 className=\"text-xl font-bold text-white\">{product.title}</h3>
                      <p className=\"text-sm text-gray-400\">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className=\"text-gray-300 mb-4 leading-relaxed\">
                    {product.description}
                  </p>
                  
                  <div className=\"mb-4\">
                    <div className=\"flex items-center justify-between mb-2\">
                      <span className=\"text-2xl font-bold text-cyan-400\">{product.price}</span>
                      <span className=\"text-sm text-gray-400 line-through\">{product.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className=\"mb-4\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Key Features:</h4>
                    <ul className=\"space-y-1\">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className=\"flex items-center text-sm text-gray-300\">
                          <CheckCircle className=\"w-4 h-4 text-green-400 mr-2 flex-shrink-0\" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=\"mb-6\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Benefits:</h4>
                    <ul className=\"space-y-1\">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=\"text-sm text-cyan-400\">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=\"flex items-center justify-between\">
                    <a href=\"/contact\" className=\"flex items-center text-cyan-400 hover:text-cyan-300 transition-colors\">
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-1\" />
                    </a>
                    <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300\">
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className=\"mt-16 text-center\">
              <div className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10\">
                <h2 className=\"text-2xl font-bold text-white mb-4\">
                  Need a Custom Solution?
                </h2>
                <p className=\"text-gray-300 mb-8 max-w-2xl mx-auto\">
                  Don't see what you're looking for? We can create a custom micro SaaS solution 
                  tailored to your specific business needs.
                </p>
                <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                  <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Request Custom Solution
                  </a>
                  <a href=\"tel:+13024640950\" className=\"border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;" > app/micro-saas/page.tsx50-500/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Automated Routing'],
      price: 'echo "'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, BarChart, MessageSquare, FileText, Target, Shield, Cloud } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  icon: any;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Automated Routing'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved satisfaction'],
      icon: MessageSquare,
      category: 'Customer Support',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates'],
      icon: Target,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Solutions</title>
        <meta name=\"description\" content=\"Discover our collection of AI-powered micro SaaS products designed to solve specific business problems with affordable, scalable solutions.\" />
        <meta name=\"keywords\" content=\"micro SaaS, AI products, business software, analytics, customer support, automation, affordable solutions\" />
        <meta property=\"og:title\" content=\"Micro SaaS Products - Zion Tech Group\" />
        <meta property=\"og:description\" content=\"AI-powered micro SaaS products for modern businesses\" />
        <meta property=\"og:type\" content=\"website\" />
      </Helmet>

      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">
        <main className=\"container mx-auto px-4 py-16 pt-24\">
          {/* Hero Section */}
          <section className=\"text-center mb-16\">
            <h1 className=\"text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">
              Micro SaaS Products
            </h1>
            <p className=\"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed\">
              Discover our collection of AI-powered micro SaaS products designed to solve specific 
              business problems with affordable, scalable solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className=\"mb-16\">
            <div className=\"max-w-4xl mx-auto\">
              <div className=\"flex flex-col md:flex-row gap-4 mb-8\">
                <div className=\"flex-1 relative\">
                  <input
                    type=\"text\"
                    placeholder=\"Search products...\"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=\"w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  />
                </div>
                <div className=\"flex items-center space-x-2\">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=\"px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {filteredProducts.map((product, index) => (
                <div key={index} className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300\">
                  {product.popular && (
                    <div className=\"flex items-center justify-center mb-4\">
                      <span className=\"bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center\">
                        <Star className=\"w-4 h-4 mr-1\" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4\">
                      <product.icon className=\"w-6 h-6 text-white\" />
                    </div>
                    <div>
                      <h3 className=\"text-xl font-bold text-white\">{product.title}</h3>
                      <p className=\"text-sm text-gray-400\">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className=\"text-gray-300 mb-4 leading-relaxed\">
                    {product.description}
                  </p>
                  
                  <div className=\"mb-4\">
                    <div className=\"flex items-center justify-between mb-2\">
                      <span className=\"text-2xl font-bold text-cyan-400\">{product.price}</span>
                      <span className=\"text-sm text-gray-400 line-through\">{product.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className=\"mb-4\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Key Features:</h4>
                    <ul className=\"space-y-1\">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className=\"flex items-center text-sm text-gray-300\">
                          <CheckCircle className=\"w-4 h-4 text-green-400 mr-2 flex-shrink-0\" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=\"mb-6\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Benefits:</h4>
                    <ul className=\"space-y-1\">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=\"text-sm text-cyan-400\">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=\"flex items-center justify-between\">
                    <a href=\"/contact\" className=\"flex items-center text-cyan-400 hover:text-cyan-300 transition-colors\">
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-1\" />
                    </a>
                    <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300\">
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className=\"mt-16 text-center\">
              <div className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10\">
                <h2 className=\"text-2xl font-bold text-white mb-4\">
                  Need a Custom Solution?
                </h2>
                <p className=\"text-gray-300 mb-8 max-w-2xl mx-auto\">
                  Don't see what you're looking for? We can create a custom micro SaaS solution 
                  tailored to your specific business needs.
                </p>
                <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                  <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Request Custom Solution
                  </a>
                  <a href=\"tel:+13024640950\" className=\"border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;" > app/micro-saas/page.tsx49/month',
      marketPrice: '00-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved satisfaction'],
      icon: MessageSquare,
      category: 'Customer Support',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'],
      price: '9/month',
      marketPrice: 'echo "'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, BarChart, MessageSquare, FileText, Target, Shield, Cloud } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  icon: any;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Automated Routing'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved satisfaction'],
      icon: MessageSquare,
      category: 'Customer Support',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates'],
      icon: Target,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Solutions</title>
        <meta name=\"description\" content=\"Discover our collection of AI-powered micro SaaS products designed to solve specific business problems with affordable, scalable solutions.\" />
        <meta name=\"keywords\" content=\"micro SaaS, AI products, business software, analytics, customer support, automation, affordable solutions\" />
        <meta property=\"og:title\" content=\"Micro SaaS Products - Zion Tech Group\" />
        <meta property=\"og:description\" content=\"AI-powered micro SaaS products for modern businesses\" />
        <meta property=\"og:type\" content=\"website\" />
      </Helmet>

      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">
        <main className=\"container mx-auto px-4 py-16 pt-24\">
          {/* Hero Section */}
          <section className=\"text-center mb-16\">
            <h1 className=\"text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">
              Micro SaaS Products
            </h1>
            <p className=\"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed\">
              Discover our collection of AI-powered micro SaaS products designed to solve specific 
              business problems with affordable, scalable solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className=\"mb-16\">
            <div className=\"max-w-4xl mx-auto\">
              <div className=\"flex flex-col md:flex-row gap-4 mb-8\">
                <div className=\"flex-1 relative\">
                  <input
                    type=\"text\"
                    placeholder=\"Search products...\"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=\"w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  />
                </div>
                <div className=\"flex items-center space-x-2\">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=\"px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {filteredProducts.map((product, index) => (
                <div key={index} className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300\">
                  {product.popular && (
                    <div className=\"flex items-center justify-center mb-4\">
                      <span className=\"bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center\">
                        <Star className=\"w-4 h-4 mr-1\" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4\">
                      <product.icon className=\"w-6 h-6 text-white\" />
                    </div>
                    <div>
                      <h3 className=\"text-xl font-bold text-white\">{product.title}</h3>
                      <p className=\"text-sm text-gray-400\">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className=\"text-gray-300 mb-4 leading-relaxed\">
                    {product.description}
                  </p>
                  
                  <div className=\"mb-4\">
                    <div className=\"flex items-center justify-between mb-2\">
                      <span className=\"text-2xl font-bold text-cyan-400\">{product.price}</span>
                      <span className=\"text-sm text-gray-400 line-through\">{product.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className=\"mb-4\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Key Features:</h4>
                    <ul className=\"space-y-1\">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className=\"flex items-center text-sm text-gray-300\">
                          <CheckCircle className=\"w-4 h-4 text-green-400 mr-2 flex-shrink-0\" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=\"mb-6\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Benefits:</h4>
                    <ul className=\"space-y-1\">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=\"text-sm text-cyan-400\">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=\"flex items-center justify-between\">
                    <a href=\"/contact\" className=\"flex items-center text-cyan-400 hover:text-cyan-300 transition-colors\">
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-1\" />
                    </a>
                    <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300\">
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className=\"mt-16 text-center\">
              <div className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10\">
                <h2 className=\"text-2xl font-bold text-white mb-4\">
                  Need a Custom Solution?
                </h2>
                <p className=\"text-gray-300 mb-8 max-w-2xl mx-auto\">
                  Don't see what you're looking for? We can create a custom micro SaaS solution 
                  tailored to your specific business needs.
                </p>
                <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                  <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Request Custom Solution
                  </a>
                  <a href=\"tel:+13024640950\" className=\"border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;" > app/micro-saas/page.tsx00-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'],
      price: '9/month',
      marketPrice: '00-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates'],
      icon: Target,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'],
      price: 'echo "'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, BarChart, MessageSquare, FileText, Target, Shield, Cloud } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  icon: any;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Automated Routing'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved satisfaction'],
      icon: MessageSquare,
      category: 'Customer Support',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates'],
      icon: Target,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Solutions</title>
        <meta name=\"description\" content=\"Discover our collection of AI-powered micro SaaS products designed to solve specific business problems with affordable, scalable solutions.\" />
        <meta name=\"keywords\" content=\"micro SaaS, AI products, business software, analytics, customer support, automation, affordable solutions\" />
        <meta property=\"og:title\" content=\"Micro SaaS Products - Zion Tech Group\" />
        <meta property=\"og:description\" content=\"AI-powered micro SaaS products for modern businesses\" />
        <meta property=\"og:type\" content=\"website\" />
      </Helmet>

      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">
        <main className=\"container mx-auto px-4 py-16 pt-24\">
          {/* Hero Section */}
          <section className=\"text-center mb-16\">
            <h1 className=\"text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">
              Micro SaaS Products
            </h1>
            <p className=\"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed\">
              Discover our collection of AI-powered micro SaaS products designed to solve specific 
              business problems with affordable, scalable solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className=\"mb-16\">
            <div className=\"max-w-4xl mx-auto\">
              <div className=\"flex flex-col md:flex-row gap-4 mb-8\">
                <div className=\"flex-1 relative\">
                  <input
                    type=\"text\"
                    placeholder=\"Search products...\"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=\"w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  />
                </div>
                <div className=\"flex items-center space-x-2\">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=\"px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {filteredProducts.map((product, index) => (
                <div key={index} className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300\">
                  {product.popular && (
                    <div className=\"flex items-center justify-center mb-4\">
                      <span className=\"bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center\">
                        <Star className=\"w-4 h-4 mr-1\" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4\">
                      <product.icon className=\"w-6 h-6 text-white\" />
                    </div>
                    <div>
                      <h3 className=\"text-xl font-bold text-white\">{product.title}</h3>
                      <p className=\"text-sm text-gray-400\">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className=\"text-gray-300 mb-4 leading-relaxed\">
                    {product.description}
                  </p>
                  
                  <div className=\"mb-4\">
                    <div className=\"flex items-center justify-between mb-2\">
                      <span className=\"text-2xl font-bold text-cyan-400\">{product.price}</span>
                      <span className=\"text-sm text-gray-400 line-through\">{product.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className=\"mb-4\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Key Features:</h4>
                    <ul className=\"space-y-1\">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className=\"flex items-center text-sm text-gray-300\">
                          <CheckCircle className=\"w-4 h-4 text-green-400 mr-2 flex-shrink-0\" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=\"mb-6\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Benefits:</h4>
                    <ul className=\"space-y-1\">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=\"text-sm text-cyan-400\">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=\"flex items-center justify-between\">
                    <a href=\"/contact\" className=\"flex items-center text-cyan-400 hover:text-cyan-300 transition-colors\">
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-1\" />
                    </a>
                    <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300\">
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className=\"mt-16 text-center\">
              <div className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10\">
                <h2 className=\"text-2xl font-bold text-white mb-4\">
                  Need a Custom Solution?
                </h2>
                <p className=\"text-gray-300 mb-8 max-w-2xl mx-auto\">
                  Don't see what you're looking for? We can create a custom micro SaaS solution 
                  tailored to your specific business needs.
                </p>
                <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                  <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Request Custom Solution
                  </a>
                  <a href=\"tel:+13024640950\" className=\"border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;" > app/micro-saas/page.tsx99/month',
      marketPrice: '00-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'],
      price: '9/month',
      marketPrice: 'echo "'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, BarChart, MessageSquare, FileText, Target, Shield, Cloud } from 'lucide-react';

interface Product {
  title: string;
  description: string;
  features: string[];
  price: string;
  marketPrice: string;
  benefits: string[];
  icon: any;
  category: string;
  popular?: boolean;
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      title: 'Zion Analytics Pro',
      description: 'Advanced real-time business intelligence and analytics platform with AI-powered insights.',
      features: ['Real-time Data Visualization', 'AI-powered Analytics', 'Custom Dashboards', 'Automated Reports'],
      price: '$89/month',
      marketPrice: '$150-500/month',
      benefits: ['Data-driven decisions', 'Real-time insights', 'Custom dashboards'],
      icon: BarChart,
      category: 'Analytics',
      popular: true
    },
    {
      title: 'Zion Chat AI',
      description: 'Next-generation AI customer support platform with advanced NLP and sentiment analysis.',
      features: ['GPT-4 Powered AI', 'Multi-channel Support', 'Sentiment Analysis', 'Automated Routing'],
      price: '$149/month',
      marketPrice: '$300-800/month',
      benefits: ['24/7 customer support', 'Reduced response time', 'Improved satisfaction'],
      icon: MessageSquare,
      category: 'Customer Support',
      popular: true
    },
    {
      title: 'Zion Invoice Genius',
      description: 'AI-powered invoice generation and management with automated billing and payment tracking.',
      features: ['AI Invoice Generation', 'Automated Billing', 'Multi-currency Support', 'Payment Tracking'],
      price: '$49/month',
      marketPrice: '$100-300/month',
      benefits: ['Save 90% invoice time', 'Reduce payment delays', 'Professional invoices'],
      icon: FileText,
      category: 'Finance',
      popular: false
    },
    {
      title: 'Zion Lead Magnet',
      description: 'Advanced lead generation and qualification platform with AI-powered prospect scoring.',
      features: ['AI Lead Scoring', 'Multi-channel Capture', 'Automated Nurturing', 'CRM Integration'],
      price: '$99/month',
      marketPrice: '$200-600/month',
      benefits: ['Increase qualified leads by 300%', 'Automated nurturing', 'Better conversion rates'],
      icon: Target,
      category: 'Marketing',
      popular: false
    },
    {
      title: 'Zion Security Shield',
      description: 'Comprehensive cybersecurity monitoring and threat detection platform for small to medium businesses.',
      features: ['Real-time Threat Monitoring', 'Vulnerability Scanning', 'Incident Response', 'Security Analytics'],
      price: '$199/month',
      marketPrice: '$400-1200/month',
      benefits: ['Enhanced security posture', 'Reduced risk exposure', 'Compliance assurance'],
      icon: Shield,
      category: 'Security',
      popular: false
    },
    {
      title: 'Zion Cloud Vault',
      description: 'Secure cloud backup and disaster recovery solution with automated data protection.',
      features: ['Automated Backups', 'Cross-platform Sync', 'Version Control', 'Disaster Recovery'],
      price: '$79/month',
      marketPrice: '$150-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Solutions</title>
        <meta name=\"description\" content=\"Discover our collection of AI-powered micro SaaS products designed to solve specific business problems with affordable, scalable solutions.\" />
        <meta name=\"keywords\" content=\"micro SaaS, AI products, business software, analytics, customer support, automation, affordable solutions\" />
        <meta property=\"og:title\" content=\"Micro SaaS Products - Zion Tech Group\" />
        <meta property=\"og:description\" content=\"AI-powered micro SaaS products for modern businesses\" />
        <meta property=\"og:type\" content=\"website\" />
      </Helmet>

      <div className=\"min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900\">
        <main className=\"container mx-auto px-4 py-16 pt-24\">
          {/* Hero Section */}
          <section className=\"text-center mb-16\">
            <h1 className=\"text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent\">
              Micro SaaS Products
            </h1>
            <p className=\"text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed\">
              Discover our collection of AI-powered micro SaaS products designed to solve specific 
              business problems with affordable, scalable solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className=\"mb-16\">
            <div className=\"max-w-4xl mx-auto\">
              <div className=\"flex flex-col md:flex-row gap-4 mb-8\">
                <div className=\"flex-1 relative\">
                  <input
                    type=\"text\"
                    placeholder=\"Search products...\"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className=\"w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  />
                </div>
                <div className=\"flex items-center space-x-2\">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=\"px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent\"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className=\"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
              {filteredProducts.map((product, index) => (
                <div key={index} className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300\">
                  {product.popular && (
                    <div className=\"flex items-center justify-center mb-4\">
                      <span className=\"bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center\">
                        <Star className=\"w-4 h-4 mr-1\" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className=\"flex items-center mb-4\">
                    <div className=\"w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4\">
                      <product.icon className=\"w-6 h-6 text-white\" />
                    </div>
                    <div>
                      <h3 className=\"text-xl font-bold text-white\">{product.title}</h3>
                      <p className=\"text-sm text-gray-400\">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className=\"text-gray-300 mb-4 leading-relaxed\">
                    {product.description}
                  </p>
                  
                  <div className=\"mb-4\">
                    <div className=\"flex items-center justify-between mb-2\">
                      <span className=\"text-2xl font-bold text-cyan-400\">{product.price}</span>
                      <span className=\"text-sm text-gray-400 line-through\">{product.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className=\"mb-4\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Key Features:</h4>
                    <ul className=\"space-y-1\">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className=\"flex items-center text-sm text-gray-300\">
                          <CheckCircle className=\"w-4 h-4 text-green-400 mr-2 flex-shrink-0\" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className=\"mb-6\">
                    <h4 className=\"text-sm font-semibold text-white mb-2\">Benefits:</h4>
                    <ul className=\"space-y-1\">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className=\"text-sm text-cyan-400\">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className=\"flex items-center justify-between\">
                    <a href=\"/contact\" className=\"flex items-center text-cyan-400 hover:text-cyan-300 transition-colors\">
                      Learn More
                      <ArrowRight className=\"w-4 h-4 ml-1\" />
                    </a>
                    <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300\">
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className=\"mt-16 text-center\">
              <div className=\"bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10\">
                <h2 className=\"text-2xl font-bold text-white mb-4\">
                  Need a Custom Solution?
                </h2>
                <p className=\"text-gray-300 mb-8 max-w-2xl mx-auto\">
                  Don't see what you're looking for? We can create a custom micro SaaS solution 
                  tailored to your specific business needs.
                </p>
                <div className=\"flex flex-col sm:flex-row gap-4 justify-center\">
                  <a href=\"/contact\" className=\"bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Request Custom Solution
                  </a>
                  <a href=\"tel:+13024640950\" className=\"border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300\">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;" > app/micro-saas/page.tsx50-400/month',
      benefits: ['Data protection', 'Business continuity', 'Cost-effective storage'],
      icon: Cloud,
      category: 'Storage',
      popular: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', count: products.length },
    { id: 'Analytics', name: 'Analytics', count: products.filter(p => p.category === 'Analytics').length },
    { id: 'Customer Support', name: 'Customer Support', count: products.filter(p => p.category === 'Customer Support').length },
    { id: 'Finance', name: 'Finance', count: products.filter(p => p.category === 'Finance').length },
    { id: 'Marketing', name: 'Marketing', count: products.filter(p => p.category === 'Marketing').length },
    { id: 'Security', name: 'Security', count: products.filter(p => p.category === 'Security').length },
    { id: 'Storage', name: 'Storage', count: products.filter(p => p.category === 'Storage').length }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Micro SaaS Products - Zion Tech Group | AI-Powered Solutions</title>
        <meta name="description" content="Discover our collection of AI-powered micro SaaS products designed to solve specific business problems with affordable, scalable solutions." />
        <meta name="keywords" content="micro SaaS, AI products, business software, analytics, customer support, automation, affordable solutions" />
        <meta property="og:title" content="Micro SaaS Products - Zion Tech Group" />
        <meta property="og:description" content="AI-powered micro SaaS products for modern businesses" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Micro SaaS Products
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our collection of AI-powered micro SaaS products designed to solve specific 
              business problems with affordable, scalable solutions.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 mb-8">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name} ({category.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  {product.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-4">
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.title}</h3>
                      <p className="text-sm text-gray-400">{product.category}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-cyan-400">{product.price}</span>
                      <span className="text-sm text-gray-400 line-through">{product.marketPrice}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 4).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {product.benefits.slice(0, 3).map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-cyan-400">
                          • {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <a href="/contact" className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 text-center">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Need a Custom Solution?
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Don't see what you're looking for? We can create a custom micro SaaS solution 
                  tailored to your specific business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Request Custom Solution
                  </a>
                  <a href="tel:+13024640950" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                    Call: (302) 464-0950
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MicroSaasPage;
