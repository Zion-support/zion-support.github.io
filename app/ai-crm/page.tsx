import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Brain, Target, BarChart, Clock, Users, TrendingUp, Globe, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AICRMPage: React.FC = () => {
  const crmServices = [
    {
      title: 'AI Customer Relationship Manager Pro',
      description: 'Intelligent CRM with AI-powered lead scoring, automated follow-ups, and predictive customer insights.',
      icon: '👥',
      price: '$199/month',
      features: [
        'AI-powered lead scoring',
        'Automated follow-up sequences',
        'Predictive customer insights',
        'Sales forecasting',
        'Customer segmentation',
        'Integration with 100+ tools'
      ],
      benefits: [
        'Increase sales by 40%',
        'Reduce lead response time by 80%',
        'Improve customer retention by 35%',
        'Save 25+ hours weekly'
      ],
      marketPrice: '$400-800/month',
      technologies: ['Machine Learning', 'Salesforce API', 'HubSpot API', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Sales Pipeline Optimizer',
      description: 'Advanced sales pipeline management with AI-driven opportunity scoring and automated deal progression.',
      icon: '📈',
      price: '$149/month',
      features: [
        'Deal probability scoring',
        'Pipeline health analysis',
        'Automated deal progression',
        'Sales activity tracking',
        'Performance analytics',
        'Forecasting accuracy'
      ],
      benefits: [
        'Improve deal closure rate by 50%',
        'Reduce sales cycle by 30%',
        'Increase forecast accuracy by 60%',
        'Optimize sales activities'
      ],
      marketPrice: '$300-600/month',
      technologies: ['Python', 'Machine Learning', 'React', 'PostgreSQL', 'Analytics APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Support Automation',
      description: 'Intelligent customer support with AI chatbots, ticket routing, and automated resolution suggestions.',
      icon: '🤖',
      price: '$179/month',
      features: [
        'AI-powered chatbots',
        'Intelligent ticket routing',
        'Automated resolution suggestions',
        'Sentiment analysis',
        'Knowledge base integration',
        'Performance analytics'
      ],
      benefits: [
        'Reduce support costs by 60%',
        'Improve response time by 90%',
        'Increase customer satisfaction by 45%',
        'Handle 80% of queries automatically'
      ],
      marketPrice: '$350-700/month',
      technologies: ['NLP', 'Dialogflow', 'Rasa', 'React', 'MongoDB', 'Custom AI Models'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Email Marketing Automation',
      description: 'Advanced email marketing with AI-driven personalization, send time optimization, and content generation.',
      icon: '📧',
      price: '$129/month',
      features: [
        'AI content personalization',
        'Send time optimization',
        'A/B testing automation',
        'Behavioral triggers',
        'Segmentation intelligence',
        'Performance optimization'
      ],
      benefits: [
        'Increase open rates by 50%',
        'Boost click-through rates by 65%',
        'Improve conversion by 40%',
        'Reduce unsubscribe rates by 30%'
      ],
      marketPrice: '$250-500/month',
      technologies: ['Machine Learning', 'Email APIs', 'React', 'Node.js', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Onboarding Suite',
      description: 'Intelligent customer onboarding with personalized journeys, progress tracking, and automated check-ins.',
      icon: '🚀',
      price: '$159/month',
      features: [
        'Personalized onboarding journeys',
        'Progress tracking and analytics',
        'Automated check-ins',
        'Success milestone detection',
        'Churn risk identification',
        'Engagement optimization'
      ],
      benefits: [
        'Reduce churn by 45%',
        'Improve time-to-value by 50%',
        'Increase user activation by 60%',
        'Enhance customer experience'
      ],
      marketPrice: '$300-600/month',
      technologies: ['Machine Learning', 'React', 'Node.js', 'MongoDB', 'Analytics APIs'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Customer Feedback Analyzer',
      description: 'Advanced feedback analysis with sentiment tracking, trend identification, and actionable insights generation.',
      icon: '💬',
      price: '$99/month',
      features: [
        'Sentiment analysis',
        'Trend identification',
        'Actionable insights generation',
        'Multi-channel feedback collection',
        'Competitor analysis',
        'Automated reporting'
      ],
      benefits: [
        'Understand customer sentiment in real-time',
        'Identify improvement opportunities',
        'Track satisfaction trends',
        'Make data-driven decisions'
      ],
      marketPrice: '$200-400/month',
      technologies: ['NLP', 'Sentiment Analysis', 'React', 'Python', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI CRM Solutions - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered CRM solutions for customer relationship management, sales automation, and customer support. Transform your customer experience." />
        <meta name="keywords" content="AI CRM, customer relationship management, sales automation, customer support, lead scoring, sales pipeline" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI CRM Solutions
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto">
                Revolutionary AI-powered customer relationship management solutions. Automate, optimize, and scale your customer interactions.
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

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our AI CRM Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Advanced AI technology combined with deep CRM expertise to transform your customer relationships
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI-Powered Automation</h3>
                <p className="text-gray-600">Intelligent automation for all customer touchpoints</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Insights</h3>
                <p className="text-gray-600">Get instant insights into customer behavior and preferences</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Predictive Analytics</h3>
                <p className="text-gray-600">Anticipate customer needs and optimize interactions</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven ROI</h3>
                <p className="text-gray-600">Average 300% ROI within 6 months</p>
              </div>
            </div>
          </div>
        </section>

        {/* CRM Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our CRM Solutions
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive AI-powered CRM tools for every business need
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {crmServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-indigo-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>

                  <div className="flex gap-2">
                    <a 
                      href="tel:+13024640950"
                      className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a 
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-indigo-600 text-indigo-600 py-2 px-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="text-xl mb-8 text-indigo-100">
              Contact our AI CRM experts for a free consultation and custom CRM strategy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            <div className="text-sm text-indigo-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICRMPage;