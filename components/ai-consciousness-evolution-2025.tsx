import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import {_Brain, _Star, _Users, _TrendingUp, _Zap, _Shield, _CheckCircle, _Clock, _Award, _Target, _Globe, _Sparkles, _Cpu, _Lock, _Cloud, _BarChart3, _Eye, _Heart, _Lightbulb, _ArrowRight, _Phone, _Mail, _MapPin, _Globe as GlobeIcon} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _features = [
  'Emotional intelligence training modules',
  'Consciousness expansion exercises',
  'Self-awareness development tools',
  'Empathy and compassion training',
  'Mindfulness and meditation guidance',
  'Cognitive enhancement techniques',
  'Social intelligence development',
  'Creative consciousness exploration',
  'Spiritual growth pathways',
  'Personal transformation tracking'
];

const _useCases = [
  'Personal development and growth',
  'Professional leadership training',
  'Therapeutic and healing practices',
  'Educational enhancement',
  'Corporate wellness programs',
  'Mental health support',
  'Spiritual development',
  'Creative arts enhancement',
  'Relationship improvement',
  'Stress management and resilience'
];

const _technology = [
  'Advanced AI algorithms',
  'Machine learning models',
  'Natural language processing',
  'Emotional recognition systems',
  'Biometric feedback integration',
  'Virtual reality experiences',
  'Augmented reality overlays',
  'Brain-computer interfaces',
  'Quantum computing integration',
  'Blockchain security'
];

const _integrations = [
  'Wearable devices',
  'Mobile applications',
  'Web platforms',
  'Smart home systems',
  'Healthcare platforms',
  'Educational systems',
  'Corporate wellness platforms',
  'Social media networks',
  'Fitness trackers',
  'Meditation apps'
];

const _testimonials = [
  {_name: 'Dr. Sarah Chen', _role: 'Clinical Psychologist', _company: 'Mindful Wellness Center', _content: 'The AI Consciousness Evolution platform has revolutionized how we approach emotional intelligence training. Our clients show remarkable improvements in self-awareness and empathy.', _rating: 5, _avatar: '👩‍⚕️'},
  {_name: 'Michael Rodriguez', _role: 'CEO', _company: 'InnovateTech Solutions', _content: 'Implementing this platform in our leadership development program has transformed our company culture. Our executives are more emotionally intelligent and effective leaders.', _rating: 5, _avatar: '👨‍💼'},
  {_name: 'Dr. Emily Watson', _role: 'Research Director', _company: 'Consciousness Research Institute', _content: 'This is the most advanced consciousness development tool I\'ve ever encountered. The AI integration makes personal growth accessible to everyone.', _rating: 5, _avatar: '👩‍🔬'}
];

export default function AIConsciousnessEvolution2025() {_return (
    <Layout>
      <Head>
        <title>AI Consciousness Evolution Platform 2025 - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered consciousness evolution platform that enhances emotional intelligence, _self-awareness, _and personal transformation through advanced technology." />
        <meta name="keywords" content="AI consciousness, _emotional intelligence, _self-awareness, _personal development, _consciousness evolution, _AI training, _Zion Tech Group" />
      </Head>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {_/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(168,85,247,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(236,72,153,0.15),transparent_50%)]"></div>
        </div>
        
        {_/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {_[...Array(15)].map(_(_, _i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-30"
              animate={_{
                x: [0, _100, _0], _y: [0, _-100, _0], _opacity: [0.3, _0.8, _0.3]}}
              transition={_{
                duration: 8 + i * 2, _repeat: Infinity, _delay: i * 0.3}}
              style={_{
                left: `${Math.random() * 100}%`,
                top: `${_Math.random() * 100}%`}}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            animate={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
          >
            {_/* Badge */}
            <motion.div
              initial={_{ opacity: 0, _scale: 0.8}}
              animate={_{ opacity: 1, _scale: 1}}
              transition={_{ duration: 0.6, _delay: 0.2}}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Revolutionary AI Technology
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
                AI Consciousness
              </span>
              <br />
              <span className="text-white">Evolution Platform</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-purple-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Experience the future of personal development with our revolutionary AI-powered consciousness evolution platform. 
              Enhance your emotional intelligence, expand self-awareness, and unlock your full potential.
            </p>

            {_/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {_[
                { label: 'Success Rate', _value: '94%', _icon: <Award className="w-8 h-8" />},
                {_label: 'Active Users', _value: '12.5K+', _icon: <Users className="w-8 h-8" />},
                {_label: 'Improvement', _value: '300%', _icon: <TrendingUp className="w-8 h-8" />},
                {_label: 'Satisfaction', _value: '4.9/5', _icon: <Star className="w-8 h-8" />}
              ].map(_(stat, _index) => (
                <motion.div
                  key={_stat.label}
                  initial={_{ opacity: 0, _y: 20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.8, _delay: 0.4 + index * 0.1}}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400">
                    {_stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{_stat.value}</div>
                  <div className="text-sm text-purple-300">{_stat.label}</div>
                </motion.div>
              ))}
            </div>

            {_/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                initial={_{ opacity: 0, _scale: 0.9}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: 0.6}}
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                initial={_{ opacity: 0, _scale: 0.9}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: 0.8}}
                className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200"
              >
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {_/* Features Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Revolutionary Features for
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness Evolution</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered platform combines cutting-edge technology with ancient wisdom to create 
              the most advanced consciousness development experience ever created.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_features.map(_(feature, _index) => (
              <motion.div
                key={feature}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {_feature}
                </h3>
                <p className="text-gray-400">
                  Advanced AI algorithms guide you through personalized consciousness development exercises.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* How It Works Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              How AI Consciousness Evolution
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Works</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our revolutionary platform uses advanced AI to create personalized consciousness development 
              experiences that adapt to your unique journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_[
              {
                step: '01', _title: 'AI Assessment', _description: 'Our AI analyzes your current consciousness level and creates a personalized development plan.', _icon: <Brain className="w-12 h-12" />},
              {_step: '02', _title: 'Personalized Training', _description: 'AI-generated exercises and experiences tailored to your specific needs and goals.', _icon: <Target className="w-12 h-12" />},
              {_step: '03', _title: 'Continuous Evolution', _description: 'Real-time feedback and adaptation ensure continuous growth and development.', _icon: <TrendingUp className="w-12 h-12" />}
            ].map(_(step, _index) => (
              <motion.div
                key={_step.step}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.2}}
                viewport={_{ once: true}}
                className="text-center"
              >
                <div className="relative mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-white font-bold text-2xl">{_step.step}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-xl opacity-30"></div>
                </div>
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-400">
                  {_step.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{_step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{_step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Use Cases Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Life with
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> AI Consciousness</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From personal development to professional growth, our platform serves diverse needs 
              across multiple domains.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {_useCases.map(_(useCase, _index) => (
              <motion.div
                key={useCase}
                initial={_{ opacity: 0, _y: 20}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-200">
                  {_useCase}
                </h3>
                <p className="text-gray-400">
                  Leverage AI-powered consciousness development for enhanced personal and professional growth.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Technology Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Cutting-Edge
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Technology</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our platform leverages the latest advancements in AI, machine learning, and consciousness research 
              to deliver unprecedented results.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {_technology.map(_(tech, _index) => (
              <motion.div
                key={tech}
                initial={_{ opacity: 0, _scale: 0.8}}
                whileInView={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.6, _delay: index * 0.1}}
                viewport={_{ once: true}}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-10 h-10 text-purple-400" />
                </div>
                <p className="text-sm text-gray-300 font-medium">{_tech}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Testimonials Section */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              What Our Users
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of satisfied users who have transformed their lives with our AI consciousness platform.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_testimonials.map(_(testimonial, _index) => (
              <motion.div
                key={testimonial.name}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.2}}
                viewport={_{ once: true}}
                className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border border-purple-500/20 rounded-2xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{_testimonial.avatar}</div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{_testimonial.name}</h4>
                    <p className="text-sm text-purple-300">{_testimonial.role}</p>
                    <p className="text-xs text-gray-400">{_testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {_[...Array(testimonial.rating)].map(_(_, _i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{_testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* Pricing Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Evolution Path</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options designed to make consciousness evolution accessible to everyone.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {_[
              {
                name: 'Starter', _price: '$99', _period: '/month', _description: 'Perfect for individuals beginning their consciousness journey', _features: [
                  'Basic AI assessment', _'10 consciousness exercises', _'Progress tracking', _'Email support', _'Mobile app access'
                ], _popular: false},
              {_name: 'Professional', _price: '$299', _period: '/month', _description: 'Advanced features for serious consciousness development', _features: [
                  'Advanced AI assessment', _'Unlimited exercises', _'Personalized coaching', _'Priority support', _'Advanced analytics', _'Integration with wearables', _'Group sessions'
                ], _popular: true},
              {_name: 'Enterprise', _price: '$799', _period: '/month', _description: 'Complete solution for organizations and teams', _features: [
                  'Everything in Professional', _'Team management', _'Custom integrations', _'Dedicated support', _'White-label options', _'Advanced reporting', _'API access'
                ], _popular: false}
            ].map(_(plan, _index) => (
              <motion.div
                key={_plan.name}
                initial={_{ opacity: 0, _y: 30}}
                whileInView={_{ opacity: 1, _y: 0}}
                transition={_{ duration: 0.6, _delay: index * 0.2}}
                viewport={_{ once: true}}
                className={_`relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-lg border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20' 
                    : 'border-purple-500/20'}`}
              >
                {_plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{_plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-purple-400">{_plan.price}</span>
                    <span className="text-gray-400">{_plan.period}</span>
                  </div>
                  <p className="text-gray-300">{_plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {_plan.features.map(_(feature, _featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-purple-400 mr-3 flex-shrink-0" />
                      {_feature}
                    </li>
                  ))}
                </ul>

                <button className={_`w-full py-3 px-6 rounded-xl font-bold transition-all duration-200 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white hover:from-purple-600 hover:to-pink-700 hover:scale-105'
                    : 'border border-purple-500/50 text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 hover:text-white'}`}>
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {_/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-t border-purple-500/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={_{ opacity: 0, _y: 30}}
            whileInView={_{ opacity: 1, _y: 0}}
            transition={_{ duration: 0.8}}
            viewport={_{ once: true}}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Evolve Your
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Consciousness?</span>
            </h2>
            <p className="text-xl text-purple-200 mb-8">
              Join thousands of users who have already transformed their lives with our revolutionary AI platform. 
              Start your consciousness evolution journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <button className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 hover:shadow-2xl hover:shadow-purple-500/25 hover:scale-105">
                Start Free Trial
              </button>
              <button className="border-2 border-purple-500/50 text-purple-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200">
                Schedule Demo
              </button>
            </div>

            {_/* Contact Info */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              {_[
                { icon: <Phone className="w-6 h-6" />, _label: 'Call Us', _value: contactInfo.mobile},
                {_icon: <Mail className="w-6 h-6" />, _label: 'Email Us', _value: contactInfo.email},
                {_icon: <MapPin className="w-6 h-6" />, _label: 'Visit Us', _value: contactInfo.address}
              ].map(_(contact, _index) => (
                <motion.div
                  key={_contact.label}
                  initial={_{ opacity: 0, _y: 20}}
                  whileInView={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.6, _delay: 0.4 + index * 0.1}}
                  viewport={_{ once: true}}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-3 text-purple-400">
                    {_contact.icon}
                  </div>
                  <div className="text-sm text-purple-300 mb-1">{_contact.label}</div>
                  <div className="text-white font-medium">{_contact.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}