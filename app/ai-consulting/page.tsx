import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, Globe, Brain, Target, Lightbulb, BarChart3 } from 'lucide-react';

const AIConsultingPage: React.FC = () => {
  const consultingServices = [
    {
      title: 'AI Strategy & Roadmap Development',
      description: 'Comprehensive AI strategy development including technology assessment, implementation roadmap, and ROI analysis.',
      icon: '🎯',
      price: '$2,999/project',
      features: [
        'AI readiness assessment',
        'Technology evaluation',
        'Implementation roadmap',
        'ROI analysis',
        'Risk assessment',
        'Timeline planning',
        'Budget estimation',
        'Success metrics definition'
      ],
      benefits: [
        'Clear AI implementation path',
        'Reduced implementation risks',
        'Optimized technology choices',
        'Measurable success metrics'
      ],
      marketPrice: '$5,000-10,000/project',
      category: 'Strategy',
      technologies: ['AI/ML', 'Data Analytics', 'Cloud Computing', 'APIs', 'Databases'],
      deliverables: ['Strategy Document', 'Roadmap', 'ROI Analysis', 'Implementation Plan']
    },
    {
      title: 'AI Technology Assessment',
      description: 'Comprehensive evaluation of your current technology stack and AI readiness with detailed recommendations.',
      icon: '🔍',
      price: '$1,999/project',
      features: [
        'Current technology audit',
        'AI readiness evaluation',
        'Gap analysis',
        'Technology recommendations',
        'Integration assessment',
        'Security evaluation',
        'Performance analysis',
        'Scalability assessment'
      ],
      benefits: [
        'Identify technology gaps',
        'Optimize existing systems',
        'Reduce implementation costs',
        'Improve system performance'
      ],
      marketPrice: '$3,000-6,000/project',
      category: 'Assessment',
      technologies: ['AI/ML', 'Cloud Computing', 'Databases', 'APIs', 'Security'],
      deliverables: ['Assessment Report', 'Recommendations', 'Technology Roadmap', 'Cost Analysis']
    },
    {
      title: 'AI Data Strategy & Governance',
      description: 'Comprehensive data strategy development including data governance, quality management, and AI-ready data preparation.',
      icon: '📊',
      price: '$2,499/project',
      features: [
        'Data strategy development',
        'Data governance framework',
        'Data quality assessment',
        'Data preparation for AI',
        'Privacy compliance',
        'Data security measures',
        'Data pipeline design',
        'Analytics framework'
      ],
      benefits: [
        'Improve data quality',
        'Ensure compliance',
        'Enable AI implementation',
        'Reduce data risks'
      ],
      marketPrice: '$4,000-8,000/project',
      category: 'Data Strategy',
      technologies: ['Data Engineering', 'AI/ML', 'Databases', 'Cloud Computing', 'APIs'],
      deliverables: ['Data Strategy', 'Governance Framework', 'Quality Plan', 'Compliance Guide']
    },
    {
      title: 'AI Implementation Consulting',
      description: 'End-to-end AI implementation consulting including project management, technical guidance, and change management.',
      icon: '🚀',
      price: '$3,999/project',
      features: [
        'Project management',
        'Technical guidance',
        'Change management',
        'Team training',
        'Implementation support',
        'Quality assurance',
        'Performance monitoring',
        'Ongoing support'
      ],
      benefits: [
        'Successful AI implementation',
        'Reduced project risks',
        'Team capability building',
        'Faster time to value'
      ],
      marketPrice: '$6,000-12,000/project',
      category: 'Implementation',
      technologies: ['AI/ML', 'Project Management', 'Change Management', 'Training', 'Support'],
      deliverables: ['Implementation Plan', 'Training Materials', 'Support Documentation', 'Success Metrics']
    },
    {
      title: 'AI Performance Optimization',
      description: 'Optimize existing AI systems for better performance, accuracy, and efficiency with detailed analysis and recommendations.',
      icon: '⚡',
      price: '$1,799/project',
      features: [
        'Performance analysis',
        'Model optimization',
        'Accuracy improvement',
        'Efficiency enhancement',
        'Cost optimization',
        'Scalability improvement',
        'Monitoring setup',
        'Best practices implementation'
      ],
      benefits: [
        'Improve AI performance',
        'Reduce operational costs',
        'Increase accuracy',
        'Enhance scalability'
      ],
      marketPrice: '$3,000-6,000/project',
      category: 'Optimization',
      technologies: ['AI/ML', 'Performance Tools', 'Monitoring', 'Optimization', 'APIs'],
      deliverables: ['Optimization Report', 'Performance Metrics', 'Implementation Guide', 'Monitoring Setup']
    },
    {
      title: 'AI Training & Education',
      description: 'Comprehensive AI training programs for your team including technical training, best practices, and hands-on workshops.',
      icon: '🎓',
      price: '$1,299/project',
      features: [
        'Technical AI training',
        'Best practices workshops',
        'Hands-on exercises',
        'Certification programs',
        'Ongoing support',
        'Custom curriculum',
        'Team assessments',
        'Progress tracking'
      ],
      benefits: [
        'Build team capabilities',
        'Improve AI adoption',
        'Reduce external dependencies',
        'Foster innovation culture'
      ],
      marketPrice: '$2,000-4,000/project',
      category: 'Training',
      technologies: ['AI/ML', 'Training Materials', 'Workshops', 'Certification', 'Support'],
      deliverables: ['Training Curriculum', 'Workshop Materials', 'Certification Program', 'Progress Reports']
    }
  ];

  const consultingFeatures = [
    {
      title: 'Expert Guidance',
      description: 'Get guidance from experienced AI consultants and industry experts',
      icon: <Brain className="w-8 h-8 text-blue-600" />
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored solutions that fit your specific business needs and requirements',
      icon: <Target className="w-8 h-8 text-green-600" />
    },
    {
      title: 'Proven Methodologies',
      description: 'Use proven methodologies and best practices for successful AI implementation',
      icon: <Lightbulb className="w-8 h-8 text-purple-600" />
    },
    {
      title: 'Measurable Results',
      description: 'Track and measure the success of your AI initiatives with clear metrics',
      icon: <BarChart3 className="w-8 h-8 text-orange-600" />
    }
  ];

  const consultingProcess = [
    {
      step: '1',
      title: 'Discovery & Analysis',
      description: 'Understand your business needs and current AI readiness'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a comprehensive AI strategy and implementation plan'
    },
    {
      step: '3',
      title: 'Implementation Support',
      description: 'Provide guidance and support during AI implementation'
    },
    {
      step: '4',
      title: 'Optimization & Training',
      description: 'Optimize AI systems and train your team for success'
    },
    {
      step: '5',
      title: 'Ongoing Support',
      description: 'Provide continuous support and guidance for AI success'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Helmet>
        <title>AI Consulting Services | Zion Tech Group</title>
        <meta name="description" content="Expert AI consulting services including strategy development, technology assessment, implementation support, and training. Transform your business with AI expertise." />
        <meta name="keywords" content="AI consulting, AI strategy, AI implementation, AI training, AI assessment, AI optimization, AI governance" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Consulting Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Expert AI consulting to help you navigate the AI landscape and achieve successful implementation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                ✉️ Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Consulting Process
            </h2>
            <p className="text-xl text-gray-600">
              Proven 5-step process for successful AI implementation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {consultingProcess.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
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
              Our Consulting Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive AI consulting services for every stage of your AI journey
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                
                <div className="mb-4">
                  <span className="text-2xl font-bold text-purple-600">{service.price}</span>
                  <span className="text-sm text-gray-500 ml-2">Market: {service.marketPrice}</span>
                </div>
                
                <div className="mb-4">
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
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
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center justify-center"
                >
                  Get Started
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
              Why Choose Our AI Consulting?
            </h2>
            <p className="text-xl text-gray-600">
              Expert guidance with proven methodologies and measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultingFeatures.map((feature, index) => (
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
              Real results from our AI consulting clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Zion Tech Group's AI strategy consulting helped us identify the right AI opportunities and saved us $2M in implementation costs. Their expertise is unmatched!"</p>
              <div className="font-semibold text-gray-900">David Kim</div>
              <div className="text-sm text-gray-500">CTO, TechCorp</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"Their AI implementation consulting was instrumental in our successful AI deployment. We achieved 300% ROI in just 6 months!"</p>
              <div className="font-semibold text-gray-900">Lisa Wang</div>
              <div className="text-sm text-gray-500">CEO, DataSolutions</div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <p className="text-gray-600 mb-4 italic">"The AI training program they provided transformed our team's capabilities. We're now able to implement AI solutions independently."</p>
              <div className="font-semibold text-gray-900">Robert Johnson</div>
              <div className="text-sm text-gray-500">Head of AI, InnovateTech</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get a free AI consultation and discover how AI can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center"
            >
              📞 +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-purple-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultingPage;