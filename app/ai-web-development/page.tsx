import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Code, Database, Cloud, Smartphone } from 'lucide-react';

const AIWebDevelopmentPage: React.FC = () => {
  const webServices = [
    {
      title: 'AI-Powered Web Application Development',
      description: 'Complete web application development with AI integration, machine learning capabilities, and intelligent features.',
      icon: '🌐',
      price: '$3,999/project',
      features: [
        'Responsive web design',
        'AI/ML integration',
        'Real-time data processing',
        'User authentication',
        'Database integration',
        'API development',
        'Performance optimization',
        'SEO optimization'
      ],
      benefits: [
        'Faster development time',
        'Lower development costs',
        'Advanced AI features',
        'Scalable architecture'
      ],
      marketPrice: '$6,000-12,000/project',
      category: 'Web Development',
      technologies: ['React', 'Node.js', 'Python', 'TensorFlow', 'PostgreSQL', 'MongoDB'],
      platforms: ['Web', 'Mobile', 'Desktop']
    },
    {
      title: 'AI E-commerce Website Development',
      description: 'Complete e-commerce website with AI-powered features including product recommendations, dynamic pricing, and customer analytics.',
      icon: '🛒',
      price: '$4,999/project',
      features: [
        'Product catalog management',
        'AI product recommendations',
        'Dynamic pricing optimization',
        'Customer behavior analysis',
        'Payment processing',
        'Order management',
        'Inventory tracking',
        'Analytics dashboard'
      ],
      benefits: [
        'Increase conversion by 45%',
        'Reduce cart abandonment by 60%',
        'Boost average order value by 35%',
        'Save 30+ hours per week'
      ],
      marketPrice: '$8,000-15,000/project',
      category: 'E-commerce',
      technologies: ['React', 'Node.js', 'Stripe', 'Machine Learning', 'PostgreSQL', 'Redis'],
      platforms: ['Web', 'Mobile']
    },
    {
      title: 'AI Content Management System',
      description: 'Intelligent CMS with AI-powered content generation, SEO optimization, and automated publishing workflows.',
      icon: '📝',
      price: '$2,999/project',
      features: [
        'AI content generation',
        'SEO optimization',
        'Automated publishing',
        'Content scheduling',
        'Multi-user support',
        'Version control',
        'Analytics integration',
        'Custom workflows'
      ],
      benefits: [
        'Reduce content creation time by 70%',
        'Improve SEO rankings',
        'Automate publishing workflows',
        'Increase content engagement'
      ],
      marketPrice: '$5,000-10,000/project',
      category: 'CMS',
      technologies: ['React', 'Node.js', 'OpenAI GPT', 'Python', 'PostgreSQL', 'Redis'],
      platforms: ['Web', 'Mobile']
    },
    {
      title: 'AI Business Intelligence Dashboard',
      description: 'Advanced BI dashboard with AI-powered insights, predictive analytics, and real-time data visualization.',
      icon: '📊',
      price: '$3,499/project',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom dashboards',
        'Data integration',
        'Automated reporting',
        'Alert system',
        'Export capabilities',
        'Mobile responsive'
      ],
      benefits: [
        'Improve decision making',
        'Identify trends and patterns',
        'Automate reporting',
        'Increase productivity'
      ],
      marketPrice: '$6,000-12,000/project',
      category: 'BI Dashboard',
      technologies: ['React', 'D3.js', 'Python', 'TensorFlow', 'PostgreSQL', 'APIs'],
      platforms: ['Web', 'Mobile']
    },
    {
      title: 'AI Customer Portal Development',
      description: 'Intelligent customer portal with AI-powered support, personalized experiences, and automated workflows.',
      icon: '👥',
      price: '$2,499/project',
      features: [
        'User authentication',
        'AI chatbot integration',
        'Personalized dashboard',
        'Ticket management',
        'Knowledge base',
        'File sharing',
        'Communication tools',
        'Analytics tracking'
      ],
      benefits: [
        'Improve customer satisfaction',
        'Reduce support costs',
        'Increase engagement',
        'Streamline operations'
      ],
      marketPrice: '$4,000-8,000/project',
      category: 'Customer Portal',
      technologies: ['React', 'Node.js', 'Dialogflow', 'PostgreSQL', 'Redis', 'APIs'],
      platforms: ['Web', 'Mobile']
    },
    {
      title: 'AI Web Application Maintenance',
      description: 'Comprehensive web application maintenance with AI-powered monitoring, performance optimization, and security updates.',
      icon: '🔧',
      price: '$599/month',
      features: [
        'Performance monitoring',
        'Security updates',
        'Bug fixes',
        'Feature enhancements',
        'Database optimization',
        'Backup management',
        'Uptime monitoring',
        '24/7 support'
      ],
      benefits: [
        'Ensure optimal performance',
        'Prevent security breaches',
        'Reduce downtime',
        'Keep applications updated'
      ],
      marketPrice: '$1,000-2,000/month',
      category: 'Maintenance',
      technologies: ['Monitoring Tools', 'Security Tools', 'Performance Tools', 'APIs', 'Databases'],
      platforms: ['Web', 'Mobile', 'Desktop']
    }
  ];

  const webFeatures = [
    {
      title: 'AI Integration',
      description: 'Seamlessly integrate AI capabilities into your web applications',
      icon: <Code className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Responsive Design',
      description: 'Mobile-first design that works on all devices',
      icon: <Smartphone className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Real-Time Analytics',
      description: 'Get insights into user behavior and application performance',
      icon: <Database className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud infrastructure for your web applications',
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
      description: 'Build the application with integrated AI capabilities'
    },
    {
      step: '4',
      title: 'Testing & Deployment',
      description: 'Comprehensive testing and production deployment'
    },
    {
      step: '5',
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance, updates, and support'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Helmet>
        <title>AI Web Development Services | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered web development services including web applications, e-commerce, CMS, and BI dashboards. Build intelligent web solutions with cutting-edge AI technology." />
        <meta name="keywords" content="web development, AI web apps, web applications, e-commerce development, CMS development, BI dashboards, web AI integration" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Web Development
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Build intelligent web applications with AI-powered features that engage users and drive business growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
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
              Proven 5-step process for building exceptional AI-powered web applications
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {developmentProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI-powered web development and support services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
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
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
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
              Why Choose Our Web Development?
            </h2>
            <p className="text-xl text-gray-600">
              Advanced AI technology with expert web development expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webFeatures.map((feature, index) => (
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
              Real results from our web development clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Zion Tech Group built our AI-powered e-commerce website in just 2 months. Sales increased by 200% and customer satisfaction is through the roof!"</p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-sm text-gray-500">CEO, TechStore</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Their AI-powered CMS reduced our content creation time by 80% and improved our SEO rankings significantly. Highly recommended!"</p>
              <div className="font-semibold text-gray-900">Michael Chen</div>
              <div className="text-sm text-gray-500">Marketing Director, ContentPro</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"The AI business intelligence dashboard they built for us transformed our decision-making process. We can now make data-driven decisions in real-time."</p>
              <div className="font-semibold text-gray-900">Emily Rodriguez</div>
              <div className="text-sm text-gray-500">CTO, DataInsights</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your AI Web Application?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Get a free consultation and discover how AI can transform your web application
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIWebDevelopmentPage;