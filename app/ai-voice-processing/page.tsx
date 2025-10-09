import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, TrendingUp, Phone, Mail, MapPin, Mic, Volume2, Headphones, MessageSquare } from 'lucide-react';

const AIVoiceProcessingPage: React.FC = () => {
  const voiceServices = [
    {
      title: 'Speech Recognition & Transcription',
      description: 'Convert speech to text with high accuracy using advanced AI models for multiple languages and accents.',
      icon: '🎤',
      price: '$1,400/month',
      features: [
        'Real-time Speech-to-Text',
        'Multi-language Support',
        'Accent Recognition',
        'Noise Cancellation',
        'Speaker Identification',
        'Custom Vocabulary Training'
      ],
      benefits: [
        'Achieve 95%+ accuracy rates',
        'Process speech in real-time',
        'Support 50+ languages',
        'Reduce transcription costs by 80%'
      ],
      marketPrice: '$3,000-6,000/month',
      category: 'Speech Recognition',
      technologies: ['DeepSpeech', 'Whisper', 'Google Speech', 'Azure Speech', 'AWS Transcribe'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Text-to-Speech & Voice Synthesis',
      description: 'Generate natural-sounding speech from text with customizable voices and emotional expressions.',
      icon: '🔊',
      price: '$1,200/month',
      features: [
        'Natural Voice Generation',
        'Multiple Voice Options',
        'Emotional Expression',
        'SSML Support',
        'Real-time Synthesis',
        'Voice Cloning'
      ],
      benefits: [
        'Create lifelike voice content',
        'Reduce voice production costs by 70%',
        'Scale voice content globally',
        'Enable personalized experiences'
      ],
      marketPrice: '$2,500-5,000/month',
      category: 'Voice Synthesis',
      technologies: ['Tacotron', 'WaveNet', 'Google TTS', 'Azure TTS', 'AWS Polly'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    },
    {
      title: 'Conversational AI & Chatbots',
      description: 'Build intelligent voice assistants and chatbots that understand context and provide natural conversations.',
      icon: '🤖',
      price: '$1,800/month',
      features: [
        'Natural Language Understanding',
        'Context Awareness',
        'Multi-turn Conversations',
        'Intent Recognition',
        'Sentiment Analysis',
        'Integration APIs'
      ],
      benefits: [
        'Handle 80% of customer inquiries',
        'Provide 24/7 support',
        'Improve customer satisfaction by 40%',
        'Reduce support costs by 60%'
      ],
      marketPrice: '$4,000-8,000/month',
      category: 'Conversational AI',
      technologies: ['NLP', 'Dialogflow', 'Rasa', 'Microsoft Bot Framework', 'Amazon Lex'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Voice Processing - Zion Tech Group</title>
        <meta name="description" content="Advanced AI voice processing solutions. Speech recognition, text-to-speech, conversational AI, and voice synthesis for natural human-computer interaction." />
        <meta name="keywords" content="voice processing, speech recognition, text-to-speech, conversational AI, voice synthesis, speech-to-text" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-voice-processing" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Voice Processing</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform human speech into intelligent interactions with our advanced AI voice processing and conversational AI solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                >
                  Get Started
                </a>
                <a
                  href="/demo"
                  className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Voice Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI-powered voice processing services designed for seamless human-computer interaction.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {voiceServices.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-purple-400">{service.price}</span>
                      <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                    </div>
                    <span className="text-sm text-green-400 bg-green-400/20 px-2 py-1 rounded">
                      {service.category}
                    </span>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <TrendingUp className="w-4 h-4 text-pink-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <p className="text-sm text-gray-400 mb-4">{service.contactInfo}</p>
                    <a
                      href="/contact"
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-lg font-semibold text-center block hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                    >
                      Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Hear the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join innovative companies using our AI voice processing to create natural, intelligent interactions with their customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
              >
                Start Your Voice Journey
              </a>
              <a
                href="tel:+13024640950"
                className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIVoiceProcessingPage;