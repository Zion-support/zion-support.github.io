import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Brain, 
  Cloud, 
  Shield, 
  Zap, 
  BarChart3, 
  Smartphone, 
  Globe,
  CheckCircle,
  Star,
  Phone,
  Mail
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      description: 'Powerful, AI-driven micro SAAS tools designed to streamline your business operations and boost productivity.',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      link: '/micro-saas',
      features: [
        'AI Content Writer Pro',
        'AI Project Manager',
        'Email Marketing Suite',
        'Analytics Dashboard',
        'Document Processor',
        'Customer Support Bot'
      ],
      pricing: 'Starting from $29/month'
    },
    {
      title: 'AI Services',
      description: 'Comprehensive artificial intelligence solutions including automation, machine learning, and predictive analytics.',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      link: '/ai-services',
      features: [
        'AI Automation Platform',
        'Machine Learning Suite',
        'Computer Vision Solutions',
        'Natural Language Processing',
        'Predictive Analytics',
        'Conversational AI'
      ],
      pricing: 'Starting from $1,499/month'
    },
    {
      title: 'IT Services',
      description: 'Complete IT solutions including cloud migration, cybersecurity, DevOps, and custom software development.',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      link: '/it-services',
      features: [
        'Cloud Migration Services',
        'Cybersecurity Solutions',
        'DevOps & Automation',
        'Web Development',
        'Mobile App Development',
        'Data Analytics Solutions'
      ],
      pricing: 'Starting from $2,999/month'
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: '500+ successful projects delivered across various industries'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance and regular audits'
    },
    {
      icon: Star,
      title: 'Expert Team',
      description: 'Certified professionals with 10+ years of experience'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Rapid implementation with proven methodologies'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business. 
            From micro SAAS tools to enterprise AI and IT services, we deliver results that matter.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 group">
              <div className={`h-2 bg-gradient-to-r ${category.color}`}></div>
              <div className="p-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
                <p className="text-gray-300 mb-6">{category.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Solutions:</h4>
                  <ul className="space-y-2">
                    {category.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="text-2xl font-bold text-blue-400">{category.pricing}</div>
                </div>

                <Link
                  to={category.link}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-center hover:bg-white/15 transition-all duration-300">
              <benefit.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-md rounded-xl border border-white/10 p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our services can transform your business. 
            Our expert team is ready to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;