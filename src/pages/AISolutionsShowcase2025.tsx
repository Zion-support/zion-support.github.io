import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Shield, 
  Globe, 
  Rocket, 
  Cpu, 
  Database, 
  Cloud, 
  Lock, 
  Target,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Award,
  Gauge,
  Sparkles,
  Eye,
  MessageSquare,
  BarChart3,
  Cog,
  FileText,
  Search,
  Filter
} from 'lucide-react';

const AISolutionsShowcase2025: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState('autonomous');
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const aiSolutions = {
    autonomous: [
      {
        title: 'Autonomous Business Operations',
        description: 'AI systems that run your business operations autonomously with minimal human intervention.',
        features: ['Automated Decision Making', 'Predictive Analytics', 'Self-Healing Systems', 'Real-time Optimization'],
        price: 'Starting at $4,999/month',
        badge: 'Revolutionary',
        icon: Brain,
        color: 'from-purple-500 to-pink-500'
      },
      {
        title: 'AI-Powered Customer Service',
        description: 'Intelligent customer service agents that understand context and provide personalized support.',
        features: ['Natural Language Understanding', 'Sentiment Analysis', 'Multi-channel Support', '24/7 Availability'],
        price: 'Starting at $2,499/month',
        badge: 'Popular',
        icon: MessageSquare,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        title: 'Predictive Analytics Engine',
        description: 'Advanced machine learning models that predict future trends and behaviors.',
        features: ['Forecasting Models', 'Risk Assessment', 'Trend Analysis', 'Real-time Insights'],
        price: 'Starting at $3,999/month',
        badge: 'Enterprise',
        icon: BarChart3,
        color: 'from-green-500 to-emerald-500'
      }
    ],
    vision: [
      {
        title: 'Computer Vision Platform',
        description: 'Advanced image and video analysis for business applications across industries.',
        features: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Automated Inspection'],
        price: 'Starting at $2,799/month',
        badge: 'Advanced',
        icon: Eye,
        color: 'from-orange-500 to-red-500'
      },
      {
        title: 'Smart Surveillance System',
        description: 'AI-powered security and monitoring solutions for enhanced safety.',
        features: ['Threat Detection', 'Behavioral Analysis', 'Alert System', 'Video Analytics'],
        price: 'Starting at $1,999/month',
        badge: 'Security',
        icon: Shield,
        color: 'from-indigo-500 to-purple-500'
      }
    ],
    processing: [
      {
        title: 'Natural Language Processing',
        description: 'Advanced NLP capabilities for text analysis, translation, and content generation.',
        features: ['Text Analysis', 'Language Translation', 'Content Generation', 'Sentiment Analysis'],
        price: 'Starting at $1,799/month',
        badge: 'Essential',
        icon: FileText,
        color: 'from-teal-500 to-blue-500'
      },
      {
        title: 'Intelligent Search Engine',
        description: 'AI-powered search capabilities with semantic understanding and context awareness.',
        features: ['Semantic Search', 'Context Awareness', 'Auto-suggestions', 'Multi-modal Search'],
        price: 'Starting at $2,299/month',
        badge: 'Smart',
        icon: Search,
        color: 'from-pink-500 to-rose-500'
      }
    ]
  };

  const useCases = [
    {
      industry: 'Healthcare',
      solution: 'AI-Powered Diagnostics',
      description: 'Machine learning models that assist doctors in diagnosing diseases with 95% accuracy.',
      results: '40% faster diagnosis, 30% reduction in misdiagnosis',
      icon: Brain,
      color: 'from-green-500 to-emerald-500'
    },
    {
      industry: 'Finance',
      solution: 'Fraud Detection System',
      description: 'Real-time fraud detection using advanced AI algorithms and behavioral analysis.',
      results: '99.7% fraud detection rate, 60% reduction in false positives',
      icon: Shield,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      industry: 'Manufacturing',
      solution: 'Predictive Maintenance',
      description: 'AI systems that predict equipment failures before they occur, reducing downtime.',
      results: '50% reduction in unplanned downtime, 25% cost savings',
      icon: Cog,
      color: 'from-orange-500 to-red-500'
    },
    {
      industry: 'Retail',
      solution: 'Personalized Recommendations',
      description: 'AI-driven recommendation engine that increases customer engagement and sales.',
      results: '35% increase in sales, 45% improvement in customer satisfaction',
      icon: Target,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Medical Officer',
      company: 'MedTech Solutions',
      content: 'Zion Tech Group\'s AI diagnostic system has revolutionized our patient care. We\'ve seen a 40% improvement in diagnosis accuracy.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'VP of Operations',
      company: 'Global Manufacturing Corp',
      content: 'Their predictive maintenance AI has saved us millions in downtime costs. The ROI was evident within the first quarter.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Watson',
      role: 'Head of Customer Experience',
      company: 'RetailMax',
      content: 'The personalized recommendation engine has transformed our customer engagement. Sales have increased by 35% since implementation.',
      rating: 5,
      avatar: 'EW'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">AI Solutions 2025</h1>
              <p className="text-sm text-cyan-300">Powered by Zion Tech Group</p>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#solutions" className="hover:text-cyan-400 transition-colors">Solutions</a>
            <a href="#use-cases" className="hover:text-cyan-400 transition-colors">Use Cases</a>
            <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-4 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-400/30 mb-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300">Next-Generation AI</span>
            </motion.div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Solutions
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-300 leading-relaxed">
            Transform your business with cutting-edge artificial intelligence solutions that learn, adapt, 
            and optimize your operations autonomously.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center space-x-2"
            >
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
            >
              Explore Solutions
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: '500+', label: 'AI Models Deployed', icon: Brain },
              { number: '99.9%', label: 'Accuracy Rate', icon: Gauge },
              { number: '24/7', label: 'AI Monitoring', icon: Shield },
              { number: '50+', label: 'Industries Served', icon: Globe }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Solutions</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive AI solutions designed to transform your business operations
            </p>
          </motion.div>

          {/* Solution Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[
              { id: 'autonomous', name: 'Autonomous AI', icon: Brain },
              { id: 'vision', name: 'Computer Vision', icon: Eye },
              { id: 'processing', name: 'Natural Language', icon: FileText }
            ].map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSolution(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeSolution === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span className="font-semibold">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Solutions Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiSolutions[activeSolution as keyof typeof aiSolutions]?.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-4`}>
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{solution.title}</h3>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xs font-semibold">
                    {solution.badge}
                  </span>
                </div>
                <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                <ul className="space-y-2 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-cyan-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-white">{solution.price}</span>
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="relative z-10 py-20 bg-black/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Applications</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how our AI solutions are transforming industries across the globe
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20"
              >
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${useCase.color} rounded-lg flex items-center justify-center`}>
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{useCase.industry}</h3>
                    <p className="text-cyan-400 font-semibold">{useCase.solution}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{useCase.description}</p>
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 p-4 rounded-lg">
                  <p className="text-green-400 font-semibold text-sm">Results: {useCase.results}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our AI solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{testimonial.avatar}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                    <div className="text-xs text-cyan-400">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative z-10 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join the AI revolution and unlock the full potential of your business operations
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg hover:shadow-2xl transition-all duration-300 font-semibold text-lg"
              >
                Start Your AI Journey
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-semibold text-lg"
              >
                Schedule AI Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/20 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Zion Tech Group</h3>
                <p className="text-sm text-gray-400">AI Solutions 2025</p>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-400 mb-2">© 2025 Zion Tech Group. All rights reserved.</p>
              <p className="text-sm text-gray-500">Empowering businesses with artificial intelligence.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AISolutionsShowcase2025;