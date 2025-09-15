import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Calendar,
  Clock,
  User,
  Share2,
  Bookmark,
  MessageCircle,
  ThumbsUp,
  Building,
  DollarSign,
  BarChart3,
  PieChart,
  Activity,
  ChevronDown,
  ChevronUp,
  ExternalLink
} from 'lucide-react';

const AIEnterpriseCaseStudy: React.FC = () => {
  const [activeMetric, setActiveMetric] = useState(0);
  const [expandedSection, setExpandedSection] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const metrics = [
    {
      icon: TrendingUp,
      label: 'Revenue Growth',
      value: '+47%',
      description: 'Year-over-year revenue increase',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      label: 'Time Savings',
      value: '65%',
      description: 'Reduction in processing time',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: DollarSign,
      label: 'Cost Reduction',
      value: '$2.3M',
      description: 'Annual operational savings',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      label: 'Customer Satisfaction',
      value: '94%',
      description: 'Customer satisfaction score',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Discovery & Analysis',
      duration: '4 weeks',
      description: 'Comprehensive analysis of current systems and identification of AI opportunities',
      deliverables: [
        'Current state assessment',
        'AI readiness evaluation',
        'ROI projections',
        'Implementation roadmap'
      ],
      status: 'completed'
    },
    {
      phase: 'Pilot Program',
      duration: '8 weeks',
      description: 'Small-scale implementation of AI solutions in select departments',
      deliverables: [
        'AI model development',
        'Integration testing',
        'Performance validation',
        'User training program'
      ],
      status: 'completed'
    },
    {
      phase: 'Full Deployment',
      duration: '12 weeks',
      description: 'Enterprise-wide rollout of AI solutions across all business units',
      deliverables: [
        'Scaled AI infrastructure',
        'Cross-department integration',
        'Advanced analytics dashboard',
        'Continuous monitoring system'
      ],
      status: 'completed'
    },
    {
      phase: 'Optimization & Scaling',
      duration: 'Ongoing',
      description: 'Continuous improvement and expansion of AI capabilities',
      deliverables: [
        'Performance optimization',
        'New AI use cases',
        'Advanced predictive models',
        'Strategic AI roadmap'
      ],
      status: 'in-progress'
    }
  ];

  const technologies = [
    {
      name: 'Machine Learning Platform',
      description: 'Custom ML models for predictive analytics',
      impact: 'High',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Natural Language Processing',
      description: 'AI-powered customer service automation',
      impact: 'Medium',
      icon: MessageCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Computer Vision',
      description: 'Automated quality control and inspection',
      impact: 'High',
      icon: Eye,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Robotic Process Automation',
      description: 'Automation of repetitive business processes',
      impact: 'Medium',
      icon: Settings,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const challenges = [
    {
      title: 'Data Quality & Integration',
      description: 'Integrating disparate data sources and ensuring data quality for AI models',
      solution: 'Implemented comprehensive data governance framework and real-time data validation',
      outcome: '99.8% data accuracy achieved'
    },
    {
      title: 'Change Management',
      description: 'Employee resistance to AI adoption and workflow changes',
      solution: 'Extensive training program and gradual rollout with continuous support',
      outcome: '95% employee adoption rate within 6 months'
    },
    {
      title: 'Scalability Concerns',
      description: 'Ensuring AI solutions could scale across multiple business units',
      solution: 'Cloud-native architecture with auto-scaling capabilities',
      outcome: 'Seamless scaling to 10x original capacity'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      company: 'TechCorp Global',
      quote: 'The AI transformation has revolutionized our operations. We\'ve seen unprecedented efficiency gains and our teams are more productive than ever.',
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Operations',
      company: 'TechCorp Global',
      quote: 'The predictive analytics capabilities have transformed our decision-making process. We can now anticipate issues before they occur.',
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Success Manager',
      company: 'TechCorp Global',
      quote: 'Our customer satisfaction scores have never been higher. The AI-powered insights help us deliver personalized experiences.',
      avatar: 'ER'
    }
  ];

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold text-blue-600">Zion Tech Group</a>
              <span className="text-gray-400">|</span>
              <span className="text-gray-600">Enterprise AI Case Study</span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 size={20} />
                <span>Share</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Bookmark size={20} />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Case Study Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full text-sm font-semibold mb-4">
              🏆 Success Story
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              TechCorp Global: AI Transformation Case Study
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto">
              How a Fortune 500 company achieved 47% revenue growth and $2.3M in annual savings 
              through comprehensive AI implementation across all business operations.
            </p>
            <div className="flex items-center justify-center space-x-6 text-gray-500">
              <div className="flex items-center space-x-2">
                <Building size={20} />
                <span>Fortune 500 Manufacturing</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={20} />
                <span>12-Month Implementation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users size={20} />
                <span>5,000+ Employees</span>
              </div>
            </div>
          </motion.div>

          {/* Key Metrics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveMetric(index)}
                className={`bg-gradient-to-br ${metric.color} rounded-xl p-6 text-white cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  activeMetric === index ? 'ring-4 ring-white/30' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <metric.icon size={24} />
                  <span className="text-3xl font-bold">{metric.value}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
                <p className="text-sm opacity-90">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Company Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">About TechCorp Global</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  TechCorp Global is a leading manufacturer of industrial equipment with operations 
                  spanning 15 countries and serving over 50,000 customers worldwide. The company 
                  was facing increasing pressure to improve operational efficiency and reduce costs 
                  while maintaining high product quality standards.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building size={20} className="text-blue-600" />
                    <span className="text-gray-700">Manufacturing & Industrial Equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe size={20} className="text-blue-600" />
                    <span className="text-gray-700">15 countries, 50,000+ customers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users size={20} className="text-blue-600" />
                    <span className="text-gray-700">5,000+ employees worldwide</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <DollarSign size={20} className="text-blue-600" />
                    <span className="text-gray-700">$2.5B annual revenue</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Business Challenges</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <AlertTriangle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Manual processes causing delays and errors</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Inconsistent quality control across facilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Limited visibility into operational performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertTriangle size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">High operational costs and resource inefficiency</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Implementation Timeline */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Implementation Timeline</h2>
            <div className="space-y-6">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-6 relative">
                  <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {index + 1}
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                        <p className="text-gray-600 mb-3">{phase.description}</p>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          phase.status === 'completed' 
                            ? 'bg-green-100 text-green-700'
                            : 'bg-blue-100 text-blue-700'
                        }`}>
                          {phase.status === 'completed' ? '✓ Completed' : '🔄 In Progress'}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Key Deliverables:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-gray-700">
                            <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Used */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">AI Technologies Implemented</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center text-white`}>
                      <tech.icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                      <p className="text-gray-600 mb-3">{tech.description}</p>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        tech.impact === 'High' 
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {tech.impact} Impact
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Challenges & Solutions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Challenges & Solutions</h2>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{challenge.title}</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                      <p className="text-gray-600">{challenge.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Outcome</h4>
                      <p className="text-green-600 font-semibold">{challenge.outcome}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What Our Client Says</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-sm text-blue-600">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ROI Analysis */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-8 mb-12 text-white"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Return on Investment</h2>
              <p className="text-lg opacity-90">Comprehensive analysis of the AI transformation impact</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">300%</div>
                <div className="text-sm opacity-90">ROI Achieved</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">18</div>
                <div className="text-sm opacity-90">Months Payback</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">$2.3M</div>
                <div className="text-sm opacity-90">Annual Savings</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">47%</div>
                <div className="text-sm opacity-90">Revenue Growth</div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
            className="text-center bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you achieve similar results. Get a personalized consultation 
              and discover how AI can revolutionize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pages/AISolutionsCalculator" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Calculate Your ROI
              </a>
              <a 
                href="/contact" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIEnterpriseCaseStudy;