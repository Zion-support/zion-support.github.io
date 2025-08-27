import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  Globe,
  ArrowRight,
  CheckCircle,
  Play,
  BarChart3,
  Cpu,
  Eye,
  MessageSquare,
  Database,
  Network,
  Rocket,
  Target,
  Award,
  Clock,
  Star,
  Heart
} from 'lucide-react';
import SEO from '../components/SEO';

const AIServicesPage = () => {
  const aiServices = [
    {
      id: 'ai-consciousness-simulator',
      name: 'AI Consciousness Simulator',
      tagline: 'Simulate and test AI consciousness emergence patterns',
      price: '$15,999',
      period: '/month',
      description: 'Advanced AI consciousness simulation platform for researchers, ethicists, and AI safety organizations. Test consciousness emergence, ethical boundaries, and safety protocols in controlled environments.',
      features: [
        'Multi-dimensional consciousness mapping',
        'Ethical boundary testing framework',
        'Consciousness emergence prediction',
        'Safety protocol validation',
        'Real-time consciousness monitoring',
        'Ethical decision tree analysis',
        'Consciousness transfer protocols',
        'Safety breach prevention',
        'Regulatory compliance tools',
        'Research collaboration platform'
      ],
      popular: true,
      icon: Brain,
      color: 'from-indigo-600 to-purple-700',
      textColor: 'text-indigo-400',
      link: '/ai-services/consciousness-simulator',
      marketPosition: 'First-to-market AI consciousness simulation platform. No direct competitors in this specialized field. Positioned for research institutions and AI safety organizations.',
      targetAudience: 'AI research institutions, Ethics committees, AI safety organizations, Government agencies, University research departments, AI ethics think tanks',
      trialDays: 30,
      setupTime: '2-4 weeks',
      category: 'AI & Consciousness Research',
      realService: true,
      technology: ['Quantum computing', 'Advanced neural networks', 'Consciousness mapping algorithms', 'Ethical AI frameworks', 'Real-time monitoring systems'],
      integrations: ['Research databases', 'Academic platforms', 'Government systems', 'AI safety protocols', 'Ethics frameworks'],
      useCases: ['AI consciousness research', 'Ethical AI development', 'Safety protocol testing', 'Regulatory compliance', 'Academic research'],
      roi: 'Research institutions report 500% ROI through accelerated AI safety research and regulatory compliance.',
      competitors: ['No direct competitors', 'Academic research tools', 'AI safety platforms'],
      marketSize: '$500M emerging market',
      growthRate: '300% annual growth',
      rating: 4.9,
      reviews: 18,
      customers: 25
    },
    {
      id: 'quantum-emotion-processor',
      name: 'Quantum Emotion Processor',
      tagline: 'Process and analyze emotions using quantum computing',
      price: '$12,999',
      period: '/month',
      description: 'Revolutionary quantum-powered emotional intelligence platform that processes human emotions with unprecedented accuracy and speed.',
      features: [
        'Quantum emotion recognition',
        'Real-time emotional analysis',
        'Multi-modal emotion processing',
        'Emotional pattern prediction',
        'Cross-cultural emotion mapping',
        'Emotional health monitoring',
        'Therapeutic intervention suggestions',
        'Emotional intelligence training',
        'Sentiment analysis at scale',
        'Emotional data visualization'
      ],
      popular: false,
      icon: Heart,
      color: 'from-pink-600 to-red-700',
      textColor: 'text-pink-400',
      link: '/ai-services/quantum-emotion',
      marketPosition: 'Leading quantum emotion processing platform with advanced AI algorithms and quantum computing capabilities.',
      targetAudience: 'Healthcare providers, Mental health professionals, HR departments, Customer service teams, Educational institutions, Research organizations',
      trialDays: 21,
      setupTime: '1-2 weeks',
      category: 'Quantum AI & Emotional Intelligence',
      realService: true,
      technology: ['Quantum computing', 'Advanced AI algorithms', 'Emotion recognition', 'Natural language processing', 'Machine learning'],
      integrations: ['Healthcare systems', 'CRM platforms', 'HR software', 'Educational platforms', 'Research tools'],
      useCases: ['Mental health assessment', 'Customer sentiment analysis', 'HR decision support', 'Educational personalization', 'Research studies'],
      roi: 'Healthcare providers achieve 400% ROI through improved patient outcomes and operational efficiency.',
      competitors: ['Traditional emotion analysis tools', 'AI sentiment platforms', 'Healthcare AI solutions'],
      marketSize: '$2.1B emotional AI market',
      growthRate: '180% annual growth',
      rating: 4.8,
      reviews: 32,
      customers: 67
    }
  ];

  const aiSolutions = [
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent customer service automation',
      benefits: ['24/7 Availability', 'Multi-language Support', 'Seamless Integration']
    },
    {
      title: 'Intelligent Document Processing',
      description: 'Automated data extraction and analysis',
      benefits: ['Faster Processing', 'Reduced Errors', 'Cost Savings']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures with AI insights',
      benefits: ['Reduced Downtime', 'Lower Costs', 'Improved Safety']
    },
    {
      title: 'AI-Driven Marketing',
      description: 'Personalized campaigns and customer insights',
      benefits: ['Higher Conversion', 'Better Targeting', 'ROI Optimization']
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Industries',
      industry: 'Manufacturing',
      challenge: 'Quality control inefficiencies',
      solution: 'Computer vision system for defect detection',
      results: ['99.2% accuracy', '40% faster inspection', '30% cost reduction']
    },
    {
      company: 'Global Finance Ltd',
      industry: 'Financial Services',
      challenge: 'Fraud detection complexity',
      solution: 'ML-powered risk assessment',
      results: ['95% fraud detection rate', '60% faster processing', '25% false positive reduction']
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Patient data analysis',
      solution: 'NLP for medical records',
      results: ['80% faster diagnosis', 'Improved accuracy', 'Better patient outcomes']
    }
  ];

  return (
    <>
      <SEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including machine learning, natural language processing, and intelligent automation solutions."
        keywords="AI services, machine learning, natural language processing, intelligent automation"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions for modern businesses
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">Machine Learning</h3>
              <p className="text-gray-300 mb-4">Advanced ML algorithms and predictive analytics</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-semibold text-white mb-3">NLP Solutions</h3>
              <p className="text-gray-300 mb-4">Natural language processing and understanding</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Automation</h3>
              <p className="text-gray-300 mb-4">Smart automation and process optimization</p>
            </div>
          </div>

          {/* AI Solutions Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">AI Solutions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{solution.description}</p>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Case Studies */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-purple-400/20"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{study.company}</h3>
                  <p className="text-purple-400 text-sm mb-4">{study.industry}</p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-white font-medium">Challenge:</h4>
                      <p className="text-gray-300 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Solution:</h4>
                      <p className="text-gray-300 text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-white font-medium">Results:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-purple-400 mr-2" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you implement intelligent solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIServicesPage;