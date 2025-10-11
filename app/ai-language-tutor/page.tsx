import React from 'react';
import { CheckCircle, ArrowRight, Globe, BookOpen, Mic, Headphones, Target, Zap, BarChart3, Users } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AILanguageTutorPage: React.FC = () => {
  const features = [
    'AI-powered personalized learning paths',
    'Real-time pronunciation feedback and correction',
    'Conversational practice with AI chatbots',
    'Adaptive difficulty adjustment based on progress',
    'Multi-modal learning (visual, audio, text)',
    'Cultural context and real-world scenarios',
    'Progress tracking and performance analytics',
    'Gamified learning with achievements and rewards',
    'Voice recognition and speech analysis',
    'Integration with popular learning platforms'
  ];

  const languages = [
    { name: 'Spanish', level: 'Beginner to Advanced', students: '50,000+', icon: '🇪🇸' },
    { name: 'French', level: 'Beginner to Advanced', students: '35,000+', icon: '🇫🇷' },
    { name: 'Mandarin', level: 'Beginner to Advanced', students: '25,000+', icon: '🇨🇳' },
    { name: 'German', level: 'Beginner to Advanced', students: '20,000+', icon: '🇩🇪' },
    { name: 'Japanese', level: 'Beginner to Advanced', students: '18,000+', icon: '🇯🇵' },
    { name: 'Portuguese', level: 'Beginner to Advanced', students: '15,000+', icon: '🇵🇹' },
    { name: 'Italian', level: 'Beginner to Advanced', students: '12,000+', icon: '🇮🇹' },
    { name: 'Arabic', level: 'Beginner to Advanced', students: '10,000+', icon: '🇸🇦' }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$19',
      period: '/month',
      features: [
        '1 language',
        'Basic lessons',
        'Mobile app access',
        'Progress tracking',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$39',
      period: '/month',
      features: [
        'Unlimited languages',
        'Advanced AI features',
        'Voice recognition',
        'Conversation practice',
        'Priority support',
        'Offline access',
        'Certificates'
      ],
      popular: true
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      features: [
        'Unlimited languages',
        'All AI features',
        '1-on-1 AI tutoring',
        'Business language courses',
        'Custom learning paths',
        'API access',
        'White-label solution'
      ],
      popular: false
    }
  ];

  const stats = [
    { number: '95%', label: 'Success Rate' },
    { number: '200,000+', label: 'Active Students' },
    { number: '25+', label: 'Languages Available' },
    { number: '24/7', label: 'AI Tutoring' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI Language Tutor - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered language learning platform with personalized tutoring, real-time feedback, and adaptive learning. Master any language with AI technology." />
        <meta name="keywords" content="AI language learning, language tutor, online language course, AI education, language app, multilingual AI" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full mb-6">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Language Tutor
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Master any language with our revolutionary AI-powered tutoring platform. 
              Get personalized lessons, real-time feedback, and adaptive learning that adjusts to your pace and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/micro-saas-services" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                View All Micro SAAS
              </Link>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Advanced AI Learning Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Languages Available</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {languages.map((language, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center">
                  <div className="text-4xl mb-3">{language.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{language.name}</h3>
                  <p className="text-sm text-gray-300 mb-2">{language.level}</p>
                  <p className="text-xs text-gray-400">{language.students} students</p>
                </div>
              ))}
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">1. Set Your Goals</h3>
                <p className="text-gray-300">Choose your target language, proficiency level, and learning objectives. Our AI creates a personalized curriculum.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">2. Learn with AI</h3>
                <p className="text-gray-300">Engage with interactive lessons, practice conversations with AI, and receive real-time feedback on pronunciation.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">3. Track Progress</h3>
                <p className="text-gray-300">Monitor your learning progress, identify areas for improvement, and celebrate achievements as you advance.</p>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-purple-500' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-6">
                    {plan.price}<span className="text-lg text-gray-400">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    to="/contact" 
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700' 
                        : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Why Choose Our AI Language Tutor?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Personalized Learning</h3>
                <p className="text-gray-300">AI adapts to your learning style, pace, and preferences for optimal language acquisition.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Real-time Feedback</h3>
                <p className="text-gray-300">Instant pronunciation correction and speaking practice with advanced voice recognition technology.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Progress Tracking</h3>
                <p className="text-gray-300">Detailed analytics and progress reports to keep you motivated and on track with your goals.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Community Learning</h3>
                <p className="text-gray-300">Connect with fellow learners, practice conversations, and participate in language challenges.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Master a New Language?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of thousands of learners who have achieved fluency with our AI-powered language tutor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Start Free Trial
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AILanguageTutorPage;