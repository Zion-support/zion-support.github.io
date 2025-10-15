import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  BarChart3, 
  Smartphone, 
  Database, 
  Zap, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

const Services: React.FC = () => {
  const serviceCategories = [
    {
      title: 'Micro SAAS Solutions',
      description: 'Powerful, scalable micro-services that integrate seamlessly with your existing systems',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/20',
      services: [
        'AI Content Writer',
        'Project Manager Pro',
        'Email Marketing Automation',
        'Analytics Dashboard',
        'Document Processor',
        'Invoice Generator'
      ],
      link: '/micro-saas'
    },
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes',
      icon: Zap,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/20',
      services: [
        'Machine Learning Models',
        'Computer Vision',
        'Natural Language Processing',
        'Predictive Analytics',
        'Chatbot Development',
        'AI Automation'
      ],
      link: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT solutions to modernize your infrastructure and boost productivity',
      icon: Cloud,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/20',
      services: [
        'Cloud Migration',
        'Cybersecurity',
        'DevOps & CI/CD',
        'Mobile Development',
        'Web Development',
        'System Integration'
      ],
      link: '/it-services'
    }
  ];

  const features = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with end-to-end encryption'
    },
    {
      icon: BarChart3,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights and performance monitoring'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive solutions that work on all devices'
    },
    {
      icon: Database,
      title: 'Scalable Infrastructure',
      description: 'Grows with your business needs'
    }
  ];

  return (
    <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-blue-300 text-sm font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Comprehensive
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Technology Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From AI-powered micro SAAS to enterprise IT services, we provide end-to-end solutions 
            that drive innovation and growth for your business.
          </p>
        </div>

        {/* Service Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((category, index) => (
            <div
              key={index}
              className={`relative group ${category.bgColor} ${category.borderColor} border rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">{category.title}</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">{category.description}</p>

              {/* Services List */}
              <ul className="space-y-3 mb-8">
                {category.services.map((service, serviceIndex) => (
                  <li key={serviceIndex} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{service}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to={category.link}
                className="group/btn inline-flex items-center space-x-2 text-white font-semibold hover:space-x-3 transition-all duration-300"
              >
                <span>Explore Services</span>
                <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Support Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5★</div>
              <div className="text-gray-400">Average Rating</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss how our solutions can help you achieve your goals. 
            Get a free consultation and discover the possibilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Pricing</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;