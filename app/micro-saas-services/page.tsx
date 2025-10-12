import React from 'react';
import { CheckCircle, ArrowRight, Zap, BarChart, Mail, Users, Clock, DollarSign, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSAAS = [
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: 'AI Content Writer',
      description: 'Generate high-quality content for blogs, social media, and marketing materials with AI assistance.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $19/month',
      link: '/ai-content-writer',
      popular: true
    },
    {
      icon: <BarChart className="w-8 h-8 text-blue-500" />,
      title: 'AI Analytics Dashboard',
      description: 'Transform your data into actionable insights with our powerful analytics platform.',
      features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Automated insights'],
      pricing: 'Starting at $29/month',
      link: '/ai-analytics-dashboard',
      popular: true
    },
    {
      icon: <Mail className="w-8 h-8 text-purple-500" />,
      title: 'AI Email Assistant',
      description: 'Automate email management and improve communication efficiency with AI-powered tools.',
      features: ['Smart replies', 'Email scheduling', 'Priority sorting', 'Template suggestions'],
      pricing: 'Starting at $15/month',
      link: '/ai-email-assistant',
      popular: false
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: 'AI Lead Generation',
      description: 'Find and qualify potential customers using advanced AI algorithms and data analysis.',
      features: ['Lead scoring', 'Contact discovery', 'Email verification', 'CRM integration'],
      pricing: 'Starting at $39/month',
      link: '/ai-lead-generation',
      popular: false
    }
  ];

  const benefits = [
    {
      title: 'Affordable Pricing',
      description: 'Get powerful AI tools at a fraction of the cost of enterprise solutions',
      icon: <DollarSign className="w-6 h-6 text-green-500" />
    },
    {
      title: 'Easy Setup',
      description: 'Start using our tools in minutes with our simple onboarding process',
      icon: <Zap className="w-6 h-6 text-blue-500" />
    },
    {
      title: 'No Contracts',
      description: 'Cancel anytime with our flexible month-to-month pricing',
      icon: <Clock className="w-6 h-6 text-purple-500" />
    },
    {
      title: '24/7 Support',
      description: 'Get help whenever you need it with our dedicated support team',
      icon: <Star className="w-6 h-6 text-yellow-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta name="description" content="Powerful micro software solutions designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro SAAS, software as a service, AI tools, business automation, productivity tools" />
      </Helmet>
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">SAAS Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Powerful, AI-driven micro software solutions designed to streamline your business operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {microSAAS.map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/10 rounded-lg">
                    {tool.icon}
                  </div>
                  {tool.popular && (
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{tool.title}</h3>
                <p className="text-gray-300 mb-4">{tool.description}</p>
                <ul className="space-y-2 mb-6">
                  {tool.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">{tool.pricing}</span>
                  <Link 
                    to={tool.link}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 text-sm"
                  >
                    Try Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS Tools?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the benefits of AI-powered tools designed for modern professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                    <div className="mb-4 flex justify-center">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Boost Your Productivity?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Start using our micro SAAS tools today and see the difference AI can make in your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MicroSAASServicesPage;
