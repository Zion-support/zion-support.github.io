import React from 'react';
import { Link } from 'react-router-dom';
import { Languages, Brain, FileText, Clock, Target, CheckCircle } from 'lucide-react';
import Layout from '../layout';
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: 'Industry-Specific Translation',
      description: 'Specialized translation models for legal, medical, technical, and business content'
    }
  ];

  const translationFeatures = [
    {
      category: 'Translation Types',
      items: ['Text Translation', 'Document Translation', 'Website Translation', 'Audio Translation', 'Video Subtitles', 'Live Translation']
    },
    {
      category: 'Languages',
      items: ['100+ Languages', 'Regional Dialects', 'Rare Languages', 'Sign Language', 'Technical Jargon', 'Cultural Adaptation']
    },
    {
      category: 'Quality Assurance',
      items: ['Human Review', 'Quality Scoring', 'Consistency Checks', 'Terminology Management', 'Style Guides', 'Proofreading']
    },
    {
      category: 'Integration',
      items: ['API Access', 'CMS Integration', 'Website Widgets', 'Mobile Apps', 'Desktop Software', 'Cloud Storage']
    }
        'Up to 10,000 words/month',
        '50+ languages',
        'Basic document translation',
        'Email support',
        'API access',
        'Web interface'
        'Up to 100,000 words/month',
        '100+ languages',
        'Advanced document processing',
        'Priority support',
        'Custom terminology',
        'Quality assurance',
        'Advanced document translation',
        'API access',
        'Priority support',
        'Custom terminology'
      popular: false
    }
      name: 'Sarah Johnson',
      company: 'Global Marketing Agency',
      content: 'The AI translation service has revolutionized our international campaigns. The quality is incredible and saves us weeks of work.',
      rating: 5

  const testimonials = [
    {
      name: 'Dr. Michael Chen',
      company: 'Medical Research Institute',
      content: 'Translating complex medical documents has never been easier. The specialized terminology handling is outstanding.',
      rating: 5
    },
    {
      name: 'Elena Rodriguez',
      company: 'E-commerce Platform',
      content: 'Our product descriptions are now available in 20+ languages with perfect accuracy. Customer engagement has increased significantly.',
      rating: 5
    }
  ];

  const testimonials = [
    {
      name: 'Anna Kowalski',
      company: 'Global Marketing Inc',
      content: 'The translation quality is exceptional. Our international campaigns now reach customers in their native languages perfectly.',
      rating: 5
    },
    {
      name: 'Carlos Mendez',
      company: 'Tech Solutions Ltd',
      content: 'Real-time translation during client meetings has been a game-changer. Communication barriers are completely eliminated.',
      rating: 5
    },
    {
      name: 'Yuki Tanaka',
      company: 'E-commerce Plus',
      content: 'Document translation with formatting preservation saved us countless hours. The AI understands context beautifully.',
      rating: 5
    }
  ]
            <p className="text-gray-300 text-center mb-8">
              Break down language barriers with our advanced AI translation service. 
              Translate documents, websites, and conversations in real-time with 99% accuracy.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">
              Start Free Trial
            </button>
            <Link to="#demo" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Watch Demo
            <p className="text-gray-300 text-lg">
              Powered by state-of-the-art AI for accurate, context-aware translations
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-cyan-500 transition-colors">
                <div className="text-cyan-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Translation Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Advanced Translation Capabilities
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Powered by cutting-edge AI to deliver accurate, context-aware translations
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Translation Features Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  {feature.icon}
                  <h3 className="text-xl font-semibold text-white ml-3">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Translation Features Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Comprehensive Translation Solutions
            </h2>
            <p className="text-gray-300 text-lg">
              Everything you need for professional translation services
            </p>
          </div>
        </div>
      </section>

      {/* Translation Features Grid */}
      <div className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 text-center">
            Comprehensive Translation Solutions
          </h2>
          <p className="text-gray-300 text-center mb-12">
            Everything you need for professional translation services
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translationFeatures.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Translation Features Grid */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {translationFeatures.map((category, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
      {/* CTA Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Break Language Barriers?
          </h2>
          <p className="text-gray-300 mb-8">
            Join thousands of companies using AI translation to reach global audiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              Start Your Free Trial
            </Link>
            <Link to="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>
      </section>
    </Layout>
  );
}
