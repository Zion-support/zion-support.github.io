import React from 'react';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin } from 'lucide-react';

const AIVoiceAssistantPage: React.FC = () => {
  const voiceServices = [
    {
      title: 'AI Voice Assistant Pro',
      description: 'Advanced conversational AI with natural language processing, multi-language support, and custom voice training.',
      icon: '🎤',
      price: '$299/month',
      features: [
        'Natural Language Processing',
        'Multi-language Support (50+ languages)',
        'Custom Voice Training',
        'Real-time Speech Recognition',
        'Context Awareness',
        'Integration with 100+ Apps',
        'Voice Analytics',
        'Custom Wake Words'
      ],
      benefits: [
        'Improve customer engagement by 60%',
        'Reduce response time to 2 seconds',
        'Handle 1000+ concurrent conversations',
        'Available 24/7/365',
        'Reduce operational costs by 40%'
      ],
      marketPrice: '$500-1000/month',
      category: 'Voice AI',
      technologies: ['OpenAI Whisper', 'Google Speech API', 'Amazon Polly', 'WebRTC', 'React', 'Node.js'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Call Center Automation',
      description: 'Intelligent call routing, sentiment analysis, and automated customer service with human handoff capabilities.',
      icon: '📞',
      price: '$399/month',
      features: [
        'Intelligent Call Routing',
        'Sentiment Analysis',
        'Automated Responses',
        'Human Handoff',
        'Call Recording & Analytics',
        'Multi-channel Support',
        'CRM Integration',
        'Performance Metrics'
      ],
      benefits: [
        'Reduce call handling time by 50%',
        'Improve customer satisfaction by 35%',
        'Handle 500+ calls simultaneously',
        'Reduce staffing costs by 30%'
      ],
      marketPrice: '$800-1500/month',
      category: 'Call Center AI',
      technologies: ['Twilio', 'Asterisk', 'Machine Learning', 'NLP', 'React', 'Python'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'AI Voice Analytics Platform',
      description: 'Advanced voice data analysis with emotion detection, speaker identification, and conversation insights.',
      icon: '📊',
      price: '$199/month',
      features: [
        'Emotion Detection',
        'Speaker Identification',
        'Conversation Analytics',
        'Sentiment Tracking',
        'Keyword Extraction',
        'Compliance Monitoring',
        'Real-time Dashboards',
        'Custom Reports'
      ],
      benefits: [
        'Improve customer experience',
        'Identify training opportunities',
        'Ensure compliance',
        'Optimize call center performance'
      ],
      marketPrice: '$400-800/month',
      category: 'Voice Analytics',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'React', 'PostgreSQL'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            AI Voice Assistant Solutions
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Revolutionary voice AI technology that understands, responds, and learns from every conversation to deliver exceptional customer experiences.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">2s</div>
              <div className="text-gray-300">Response Time</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">1000+</div>
              <div className="text-gray-300">Concurrent Calls</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 mb-12">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Choose Your Voice AI Solution
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {voiceServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-green-600">{service.price}</span>
                    <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                  </div>
                  <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full inline-block">
                    {service.category}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                        <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${service.title}`}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                  >
                    Get Started Now
                  </a>
                  <p className="text-xs text-gray-500 mt-2">
                    {service.contactInfo}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI voice assistant solutions today and revolutionize how you interact with customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Call (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIVoiceAssistantPage;