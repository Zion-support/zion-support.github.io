import React from 'react';

import { CheckCircle } from 'lucide-react';
const AIMobileAppDevelopmentPage: React.FC = () => {
  const mobileServices = [
    {
      title: 'AI-Powered Mobile App Development',
      description: 'Complete mobile app development with AI integration, machine learning capabilities, and intelligent features.',
      icon: '📱',
      price: '$4,999/project',
      features: [
        'Native iOS & Android development',
        'AI/ML integration',
        'Cross-platform compatibility',
        'Real-time data processing',
        'Push notifications',
        'Offline functionality',
        'App store optimization',
        'Maintenance & updates'
      ],
      benefits: [
        'Faster development time',
        'Lower development costs',
        'Advanced AI features',
        'Scalable architecture'
      ],
      marketPrice: '$8,000-15,000/project',
      category: 'Mobile Development',
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TensorFlow Lite', 'Core ML'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    },
    {
      title: 'AI Chatbot Mobile Integration',
      description: 'Intelligent chatbot integration for mobile apps with natural language processing and context awareness.',
      icon: '🤖',
      price: '$1,299/month',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multi-language support',
        'Voice recognition',
        'Image recognition',
        'Integration APIs',
        'Analytics dashboard',
        'Custom training'
      ],
      benefits: [
        'Improve user engagement',
        'Reduce support costs',
        '24/7 customer service',
        'Personalized experiences'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'AI Integration',
      technologies: ['Dialogflow', 'Rasa', 'OpenAI GPT', 'TensorFlow', 'Node.js', 'APIs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    },
    {
      title: 'AI-Powered Analytics for Mobile',
      description: 'Advanced mobile analytics with AI-driven insights, user behavior analysis, and performance optimization.',
      icon: '📊',
      price: '$899/month',
      features: [
        'User behavior tracking',
        'Performance monitoring',
        'Crash analytics',
        'A/B testing',
        'Conversion tracking',
        'Real-time dashboards',
        'Predictive analytics',
        'Custom reports'
      ],
      benefits: [
        'Improve app performance',
        'Increase user retention',
        'Optimize user experience',
        'Data-driven decisions'
      ],
      marketPrice: '$1,500-3,000/month',
      category: 'Analytics',
      technologies: ['Firebase', 'Mixpanel', 'Amplitude', 'Python', 'Machine Learning', 'APIs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    },
    {
      title: 'AI Mobile Security Suite',
      description: 'Comprehensive mobile security solution with AI-powered threat detection and data protection.',
      icon: '🔒',
      price: '$1,599/month',
      features: [
        'Threat detection',
        'Data encryption',
        'Biometric authentication',
        'App shielding',
        'Runtime protection',
        'Compliance monitoring',
        'Security analytics',
        'Incident response'
      ],
      benefits: [
        'Protect user data',
        'Prevent security breaches',
        'Ensure compliance',
        'Build user trust'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Security',
      technologies: ['OWASP', 'Encryption', 'Biometrics', 'Machine Learning', 'APIs', 'SDKs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    },
    {
      title: 'AI Mobile Marketing Automation',
      description: 'Intelligent mobile marketing with personalized campaigns, push notifications, and user engagement optimization.',
      icon: '📈',
      price: '$1,199/month',
      features: [
        'Personalized campaigns',
        'Smart push notifications',
        'In-app messaging',
        'User segmentation',
        'A/B testing',
        'Engagement tracking',
        'Retention optimization',
        'ROI analytics'
      ],
      benefits: [
        'Increase user engagement',
        'Boost retention rates',
        'Improve conversion',
        'Optimize marketing spend'
      ],
      marketPrice: '$2,000-4,000/month',
      category: 'Marketing',
      technologies: ['Firebase', 'OneSignal', 'Branch', 'Machine Learning', 'APIs', 'Analytics'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    },
    {
      title: 'AI Mobile App Testing Suite',
      description: 'Automated mobile app testing with AI-powered test generation, performance testing, and quality assurance.',
      icon: '🧪',
      price: '$799/month',
      features: [
        'Automated test generation',
        'Performance testing',
        'UI/UX testing',
        'Device compatibility',
        'Load testing',
        'Security testing',
        'Regression testing',
        'Test reporting'
      ],
      benefits: [
        'Reduce testing time by 80%',
        'Improve app quality',
        'Catch bugs early',
        'Lower testing costs'
      ],
      marketPrice: '$1,200-2,500/month',
      category: 'Testing',
      technologies: ['Appium', 'Detox', 'Jest', 'Python', 'Machine Learning', 'APIs'],
      platforms: ['iOS', 'Android', 'Cross-platform']
    }
  ];
  const mobileFeatures = [
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your mobile apps',
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Cross-Platform',
      description: 'Build once, deploy everywhere with cross-platform solutions',
      icon: <Smartphone className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Real-Time Analytics',
      description: 'Get insights into user behavior and app performance',
      icon: <Database className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Cloud Backend',
      description: 'Scalable cloud infrastructure for your mobile apps',
      icon: <Cloud className="w-8 h-8 text-orange-600" />
    }
  ];
  const developmentProcess = [
    {
      step: '1',
      title: 'Discovery & Planning',
      description: 'Analyze requirements and create detailed project roadmap'
    },
    {
      step: '2',
      title: 'Design & Prototyping',
      description: 'Create UI/UX designs and interactive prototypes'
    },
    {
      step: '3',
      title: 'Development & AI Integration',
      description: 'Build the app with integrated AI capabilities'
    },
    {
      step: '4',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and app store deployment'
    },
    {
      step: '5',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support'
    }
  ];
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Mobile App Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
              Build intelligent mobile apps with AI-powered features that engage users and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Development Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600">
              Proven 5-step process for building exceptional AI-powered mobile apps
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
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
              Our Mobile Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered mobile app development and support services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                <div className="mb-4">
                  <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2 py-1 rounded">
                    {service.category}
                  </span>
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
                  className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors inline-flex items-center justify-center"
                >
                  Start Building
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
              Why Choose Our Mobile Development?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology with expert mobile development expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mobileFeatures.map((feature, index) => (
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
              Real results from our mobile app development clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Zion Tech Group built our AI-powered fitness app in just 3 months. The AI features are incredible and user engagement is up 200%!"</p>
              <div className="font-semibold text-gray-900">David Kim</div>
              <div className="text-sm text-gray-500">Founder, FitAI</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Their mobile app development team delivered an amazing e-commerce app with AI recommendations. Sales increased by 150%!"</p>
              <div className="font-semibold text-gray-900">Lisa Wang</div>
              <div className="text-sm text-gray-500">CEO, ShopSmart</div>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"The AI chatbot integration they built for our app reduced support tickets by 80% and improved customer satisfaction significantly."</p>
              <div className="font-semibold text-gray-900">Robert Johnson</div>
              <div className="text-sm text-gray-500">CTO, ServicePro</div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your AI Mobile App?
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get a free consultation and discover how AI can transform your mobile app
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-indigo-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};
export default AIMobileAppDevelopmentPage;