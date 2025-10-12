import React from 'react';
import { CheckCircle, ArrowRight, Zap, Users, Shield, Brain, Globe, Settings } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';

const MicroSAASServicesPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: <Brain className="w-8 h-8 text-blue-500" />,
      title: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Multi-language support', 'SEO optimization', 'Brand voice customization', 'Content templates'],
      pricing: 'Starting at $29/month',
      link: '/micro-saas/content-generator',
      popular: true
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Lead Scoring System',
      description: 'Automatically score and prioritize leads to improve conversion rates and sales efficiency.',
      features: ['Behavioral tracking', 'Predictive scoring', 'CRM integration', 'Real-time updates'],
      pricing: 'Starting at $39/month',
      link: '/micro-saas/lead-scoring',
      popular: false
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      title: 'Email Marketing Automation',
      description: 'Create and manage automated email campaigns with advanced segmentation and personalization.',
      features: ['Drag-and-drop builder', 'A/B testing', 'Analytics dashboard', 'Template library'],
      pricing: 'Starting at $49/month',
      link: '/micro-saas/email-marketing',
      popular: true
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Support Bot',
      description: 'Deploy intelligent chatbots for 24/7 customer support and lead generation.',
      features: ['Natural language processing', 'Multi-channel support', 'Custom training', 'Analytics'],
      pricing: 'Starting at $35/month',
      link: '/micro-saas/support-bot',
      popular: false
    },
    {
      icon: <Globe className="w-8 h-8 text-orange-500" />,
      title: 'SEO Optimizer',
      description: 'Optimize your website for search engines with automated SEO analysis and recommendations.',
      features: ['Keyword research', 'On-page optimization', 'Competitor analysis', 'Rank tracking'],
      pricing: 'Starting at $59/month',
      link: '/micro-saas/seo-optimizer',
      popular: true
    },
    {
      icon: <Settings className="w-8 h-8 text-cyan-500" />,
      title: 'Task Manager Pro',
      description: 'Advanced project management and task tracking with team collaboration features.',
      features: ['Project templates', 'Time tracking', 'Team collaboration', 'Progress reports'],
      pricing: 'Starting at $45/month',
      link: '/micro-saas/task-manager-pro',
      popular: false
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Quick setup and deployment'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Scalable pricing based on usage'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'No long-term contracts required'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Regular updates and new features'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: '24/7 customer support'
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-500" />,
      text: 'Easy integration with existing tools'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEOHead 
        title="Micro SaaS Services - Zion Tech Group"
        description="Powerful micro SaaS tools designed to solve specific business problems. Quick setup, scalable pricing, and no long-term contracts."
        keywords="micro SaaS, SaaS tools, business automation, productivity tools, software as a service"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powerful <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Micro SaaS Tools</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Solve specific business problems with our collection of powerful micro SaaS tools. Quick setup, scalable pricing, and no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-indigo-400 text-indigo-400 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Micro SaaS Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized tools designed to solve specific business challenges with minimal setup and maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                  service.popular ? 'border-indigo-500 relative' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mb-6">
                  <p className="text-2xl font-bold text-gray-900">{service.pricing}</p>
                </div>
                
                <Link
                  to={service.link}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Micro SaaS Tools?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver focused solutions that address specific business needs without the complexity of enterprise software
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {benefit.icon}
                </div>
                <p className="text-gray-700 text-lg">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-indigo-100 mb-8">
              Start using our micro SaaS tools today and see immediate improvements in your business processes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicroSAASServicesPage;