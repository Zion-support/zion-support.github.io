import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Headphones, MessageCircle, Wrench, BarChart3 } from 'lucide-react';

const AISupportPage: React.FC = () => {
  const supportServices = [
    {
      title: '24/7 AI System Monitoring',
      description: 'Round-the-clock monitoring of your AI systems with proactive issue detection and automated resolution.',
      icon: '👁️',
      price: '$999/month',
      features: [
        '24/7 system monitoring',
        'Proactive issue detection',
        'Automated alerting',
        'Performance tracking',
        'Uptime monitoring',
        'Error tracking',
        'Capacity monitoring',
        'Health checks'
      ],
      benefits: [
        'Prevent system downtime',
        'Reduce resolution time by 90%',
        'Improve system reliability',
        'Minimize business impact'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Monitoring',
      technologies: ['Monitoring Tools', 'AI/ML', 'APIs', 'Databases', 'Cloud Computing'],
      responseTime: 'Immediate'
    },
    {
      title: 'AI Technical Support',
      description: 'Expert technical support for AI systems including troubleshooting, optimization, and maintenance.',
      icon: '🔧',
      price: '$1,499/month',
      features: [
        'Expert technical support',
        'Issue troubleshooting',
        'System optimization',
        'Performance tuning',
        'Bug fixes',
        'Updates and patches',
        'Documentation updates',
        'Knowledge transfer'
      ],
      benefits: [
        'Faster issue resolution',
        'Improved system performance',
        'Reduced downtime',
        'Expert guidance'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Technical Support',
      technologies: ['AI/ML', 'Cloud Computing', 'Databases', 'APIs', 'Monitoring'],
      responseTime: '2 hours'
    },
    {
      title: 'AI Model Maintenance',
      description: 'Comprehensive AI model maintenance including retraining, optimization, and performance monitoring.',
      icon: '🤖',
      price: '$1,799/month',
      features: [
        'Model retraining',
        'Performance optimization',
        'Data drift detection',
        'Model versioning',
        'A/B testing',
        'Performance monitoring',
        'Accuracy tracking',
        'Model updates'
      ],
      benefits: [
        'Maintain model accuracy',
        'Improve performance',
        'Reduce model drift',
        'Ensure reliability'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Model Maintenance',
      technologies: ['AI/ML', 'Model Training', 'Data Science', 'APIs', 'Monitoring'],
      responseTime: '4 hours'
    },
    {
      title: 'AI Security Support',
      description: 'Comprehensive AI security support including threat detection, vulnerability assessment, and incident response.',
      icon: '🔒',
      price: '$1,299/month',
      features: [
        'Security monitoring',
        'Threat detection',
        'Vulnerability assessment',
        'Incident response',
        'Security updates',
        'Compliance monitoring',
        'Access control',
        'Audit support'
      ],
      benefits: [
        'Protect AI systems',
        'Ensure compliance',
        'Prevent security breaches',
        'Maintain data privacy'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Security Support',
      technologies: ['Security Tools', 'AI/ML', 'Monitoring', 'Compliance', 'APIs'],
      responseTime: '1 hour'
    },
    {
      title: 'AI Performance Optimization',
      description: 'Continuous AI performance optimization including speed improvements, accuracy enhancements, and cost reduction.',
      icon: '⚡',
      price: '$1,599/month',
      features: [
        'Performance analysis',
        'Speed optimization',
        'Accuracy improvement',
        'Cost optimization',
        'Resource optimization',
        'Scalability improvements',
        'Efficiency enhancements',
        'ROI optimization'
      ],
      benefits: [
        'Improve AI performance',
        'Reduce operational costs',
        'Increase accuracy',
        'Enhance scalability'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Performance Optimization',
      technologies: ['AI/ML', 'Performance Tools', 'Optimization', 'APIs', 'Monitoring'],
      responseTime: '4 hours'
    },
    {
      title: 'AI Training & Support',
      description: 'Comprehensive AI training and support for your team including technical training, best practices, and ongoing guidance.',
      icon: '🎓',
      price: '$899/month',
      features: [
        'Technical training',
        'Best practices guidance',
        'Documentation support',
        'Code reviews',
        'Mentoring',
        'Workshop sessions',
        'Knowledge sharing',
        'Ongoing support'
      ],
      benefits: [
        'Build team capabilities',
        'Improve AI adoption',
        'Reduce learning curve',
        'Foster innovation'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Training & Support',
      technologies: ['AI/ML', 'Training', 'Documentation', 'Mentoring', 'Support'],
      responseTime: '8 hours'
    }
  ];

  const supportFeatures = [
    {
      title: '24/7 Availability',
      description: 'Round-the-clock support for your AI systems and applications',
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Expert Team',
      description: 'Experienced AI engineers and data scientists providing support',
      icon: <Users className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Proactive Monitoring',
      description: 'Proactive monitoring and issue prevention for optimal performance',
      icon: <BarChart3 className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Rapid Response',
      description: 'Fast response times and quick issue resolution',
      icon: <Zap className="w-8 h-8 text-orange-600" />
    }
  ];

  const supportLevels = [
    {
      level: 'Basic',
      price: '$999/month',
      features: [
        'Email support',
        'Business hours coverage',
        'Standard response time',
        'Basic monitoring',
        'Documentation access'
      ],
      responseTime: '24 hours'
    },
    {
      level: 'Professional',
      price: '$1,499/month',
      features: [
        'Phone & email support',
        'Extended hours coverage',
        'Faster response time',
        'Advanced monitoring',
        'Priority support',
        'Monthly reports'
      ],
      responseTime: '4 hours'
    },
    {
      level: 'Enterprise',
      price: '$2,499/month',
      features: [
        '24/7 phone support',
        'Dedicated support team',
        'Immediate response',
        'Comprehensive monitoring',
        'Highest priority',
        'Weekly reports',
        'Account manager'
      ],
      responseTime: '1 hour'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-green-50">
      <Helmet>
        <title>AI Support Services | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI support services including 24/7 monitoring, technical support, model maintenance, and performance optimization. Keep your AI systems running smoothly." />
        <meta name="keywords" content="AI support, AI monitoring, AI maintenance, AI optimization, AI security, AI training, 24/7 support" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-green-600 to-blue-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Support Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Keep your AI systems running smoothly with our comprehensive support services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                ✉️ Get Support Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Support Levels
            </h2>
            <p className="text-xl text-gray-600">
              Choose the support level that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportLevels.map((level, index) => (
              <div key={index} className={`rounded-lg p-8 ${index === 1 ? 'bg-green-50 border-2 border-green-500' : 'bg-white border border-gray-200'}`}>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                  <div className="text-3xl font-bold text-green-600 mb-2">{level.price}</div>
                  <div className="text-sm text-gray-500">Response: {level.responseTime}</div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <a 
                  href="/contact"
                  className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors inline-flex items-center justify-center ${
                    index === 1 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  Choose Plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Support Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI support services for every aspect of your AI systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-green-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
                  <span className="ml-2 text-xs text-gray-500">Response: {service.responseTime}</span>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="space-y-2 mb-6">
                  <h4 className="font-semibold text-gray-900">Key Benefits:</h4>
                  {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <p key={benefitIndex} className="text-sm text-green-600">✓ {benefit}</p>
                  ))}
                </div>
                
                <a 
                  href="/contact"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Support
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our AI Support?
            </h2>
            <p className="text-xl text-gray-600">
              Expert support with proven methodologies and rapid response times
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real results from our AI support clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Zion Tech Group's 24/7 AI monitoring prevented a major system failure that would have cost us $500K. Their proactive approach is incredible!"</p>
              <div className="font-semibold text-gray-900">David Kim</div>
              <div className="text-sm text-gray-500">CTO, TechCorp</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Their AI model maintenance service improved our model accuracy by 25% and reduced maintenance costs by 40%. Highly recommended!"</p>
              <div className="font-semibold text-gray-900">Lisa Wang</div>
              <div className="text-sm text-gray-500">Head of AI, DataSolutions</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"The AI support team's response time is amazing. They resolved our critical issue in just 30 minutes. Their expertise is unmatched!"</p>
              <div className="font-semibold text-gray-900">Robert Johnson</div>
              <div className="text-sm text-gray-500">AI Engineer, InnovateTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get AI Support?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Get a free support quote and discover how we can keep your AI systems running smoothly
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-green-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISupportPage;