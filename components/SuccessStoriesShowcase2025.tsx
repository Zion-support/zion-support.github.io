import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Users, 
  Award, 
  Star, 
  ArrowRight,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  PieChart,
  Activity,
  Globe,
  Building,
  Zap,
  Cpu,
  Database,
  Shield,
  Lightbulb,
  Rocket,
  Play,
  Download,
  ExternalLink,
  Quote
} from 'lucide-react';

const SuccessStoriesShowcase2025: React.FC = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const successStories = [
    {
      id: 1,
      company: 'TechCorp Global',
      industry: 'Technology',
      logo: '/api/placeholder/100/100',
      title: 'AI-Powered Process Automation Revolution',
      description: 'How TechCorp Global achieved 2,500% ROI with our AI automation solutions, transforming their entire business operations.',
      challenge: 'Manual processes causing 40% efficiency loss and $2M annual costs',
      solution: 'Implemented comprehensive AI automation across all business functions',
      results: {
        roi: '2,500%',
        efficiency: '300%',
        costSavings: '$2.5M',
        timeReduction: '80%'
      },
      metrics: [
        { label: 'Process Efficiency', value: '300%', improvement: '+200%' },
        { label: 'Cost Savings', value: '$2.5M', improvement: 'Annually' },
        { label: 'Time Reduction', value: '80%', improvement: '+80%' },
        { label: 'Error Reduction', value: '95%', improvement: '-95%' }
      ],
      testimonial: {
        quote: 'Zion Tech Group\'s AI solutions transformed our business completely. We never imagined such dramatic improvements were possible.',
        author: 'Sarah Johnson',
        position: 'CEO, TechCorp Global',
        avatar: '/api/placeholder/60/60'
      },
      technologies: ['AI Automation', 'Machine Learning', 'Process Optimization'],
      duration: '6 months',
      teamSize: '50+ employees',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      company: 'Quantum Finance',
      industry: 'Financial Services',
      logo: '/api/placeholder/100/100',
      title: 'Quantum Computing for Financial Optimization',
      description: 'Quantum Finance leveraged our quantum computing solutions to achieve unprecedented portfolio optimization and risk management.',
      challenge: 'Complex portfolio optimization taking weeks to compute with traditional methods',
      solution: 'Deployed quantum computing algorithms for real-time financial optimization',
      results: {
        roi: '1,800%',
        efficiency: '10,000x',
        costSavings: '$5.2M',
        timeReduction: '99%'
      },
      metrics: [
        { label: 'Processing Speed', value: '10,000x', improvement: 'Faster' },
        { label: 'Portfolio Returns', value: '45%', improvement: '+25%' },
        { label: 'Risk Reduction', value: '60%', improvement: '-60%' },
        { label: 'Cost Savings', value: '$5.2M', improvement: 'Annually' }
      ],
      testimonial: {
        quote: 'The quantum computing solution revolutionized our financial modeling. We can now optimize portfolios in real-time.',
        author: 'Michael Chen',
        position: 'CTO, Quantum Finance',
        avatar: '/api/placeholder/60/60'
      },
      technologies: ['Quantum Computing', 'Financial AI', 'Portfolio Optimization'],
      duration: '4 months',
      teamSize: '25+ employees',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      company: 'HealthTech Innovations',
      industry: 'Healthcare',
      logo: '/api/placeholder/100/100',
      title: 'AI-Driven Drug Discovery Breakthrough',
      description: 'HealthTech Innovations used our AI solutions to accelerate drug discovery by 10x, reducing time-to-market significantly.',
      challenge: 'Drug discovery process taking 10+ years with traditional methods',
      solution: 'Implemented AI-powered molecular simulation and drug discovery platform',
      results: {
        roi: '3,200%',
        efficiency: '1,000%',
        costSavings: '$15M',
        timeReduction: '90%'
      },
      metrics: [
        { label: 'Discovery Speed', value: '10x', improvement: 'Faster' },
        { label: 'Success Rate', value: '85%', improvement: '+65%' },
        { label: 'Cost Reduction', value: '70%', improvement: '-70%' },
        { label: 'Time to Market', value: '90%', improvement: '-90%' }
      ],
      testimonial: {
        quote: 'Our AI-powered drug discovery platform has revolutionized our research capabilities. We\'re discovering breakthrough treatments faster than ever.',
        author: 'Dr. Elena Rodriguez',
        position: 'Head of Research, HealthTech Innovations',
        avatar: '/api/placeholder/60/60'
      },
      technologies: ['AI Drug Discovery', 'Molecular Simulation', 'Machine Learning'],
      duration: '8 months',
      teamSize: '100+ employees',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      company: 'Manufacturing Plus',
      industry: 'Manufacturing',
      logo: '/api/placeholder/100/100',
      title: 'Predictive Maintenance AI Implementation',
      description: 'Manufacturing Plus achieved 99.9% uptime and massive cost savings with our predictive maintenance AI solutions.',
      challenge: 'Unexpected equipment failures causing $3M annual losses and production delays',
      solution: 'Deployed AI-powered predictive maintenance system across all manufacturing equipment',
      results: {
        roi: '2,100%',
        efficiency: '250%',
        costSavings: '$3.8M',
        timeReduction: '85%'
      },
      metrics: [
        { label: 'Equipment Uptime', value: '99.9%', improvement: '+15%' },
        { label: 'Maintenance Costs', value: '60%', improvement: '-60%' },
        { label: 'Production Efficiency', value: '250%', improvement: '+150%' },
        { label: 'Cost Savings', value: '$3.8M', improvement: 'Annually' }
      ],
      testimonial: {
        quote: 'The predictive maintenance AI has been a game-changer. We\'ve virtually eliminated unexpected downtime.',
        author: 'James Wilson',
        position: 'Operations Director, Manufacturing Plus',
        avatar: '/api/placeholder/60/60'
      },
      technologies: ['Predictive AI', 'IoT Integration', 'Maintenance Optimization'],
      duration: '5 months',
      teamSize: '75+ employees',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const currentStory = successStories[activeStory];

  if (!isVisible) return null;

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-purple-600/10"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
            <Award className="w-4 h-4" />
            SUCCESS STORIES & CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Real Results from Real Companies
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Discover how leading companies achieved unprecedented success with our solutions
          </p>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From Fortune 500 companies to innovative startups, see the transformative impact of our AI and quantum computing solutions
          </p>
        </motion.div>

        {/* Story Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {successStories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setActiveStory(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeStory === index
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <Building className="w-5 h-5" />
              {story.company}
            </button>
          ))}
        </motion.div>

        {/* Main Story Display */}
        <motion.div
          key={activeStory}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16"
        >
          {/* Story Content */}
          <div>
            {/* Company Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center">
                <Building className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{currentStory.company}</h3>
                <p className="text-gray-400">{currentStory.industry} • {currentStory.duration} • {currentStory.teamSize}</p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 text-indigo-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Target className="w-4 h-4" />
              {currentStory.title}
            </div>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              {currentStory.description}
            </p>

            {/* Challenge & Solution */}
            <div className="space-y-4 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                <p className="text-gray-300 text-sm">{currentStory.challenge}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                <p className="text-gray-300 text-sm">{currentStory.solution}</p>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {currentStory.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/case-studies/${currentStory.id}`}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Read Full Case Study
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button className="inline-flex items-center gap-2 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>

          {/* Results & Metrics */}
          <div className="space-y-6">
            {/* Key Results */}
            <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Key Results</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-indigo-400 mb-1">
                    {currentStory.results.roi}
                  </div>
                  <div className="text-sm text-gray-300">ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-1">
                    {currentStory.results.efficiency}
                  </div>
                  <div className="text-sm text-gray-300">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    {currentStory.results.costSavings}
                  </div>
                  <div className="text-sm text-gray-300">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-1">
                    {currentStory.results.timeReduction}
                  </div>
                  <div className="text-sm text-gray-300">Time Reduction</div>
                </div>
              </div>
            </div>

            {/* Detailed Metrics */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Detailed Metrics</h4>
              <div className="space-y-3">
                {currentStory.metrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-300 text-sm">{metric.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-semibold">{metric.value}</span>
                      <span className="text-green-400 text-xs">{metric.improvement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <Quote className="w-8 h-8 text-indigo-400 mb-4" />
              <p className="text-gray-300 mb-4 italic">
                "{currentStory.testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold">{currentStory.testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{currentStory.testimonial.position}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* All Success Stories Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              More Success Stories
            </h3>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Explore more case studies and success stories from companies across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successStories.map((story, index) => {
              const isActive = index === activeStory;
              return (
                <motion.div
                  key={story.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => setActiveStory(index)}
                  className={`relative cursor-pointer group ${
                    isActive ? 'ring-2 ring-indigo-500' : ''
                  }`}
                >
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 group-hover:shadow-2xl group-hover:shadow-indigo-500/20">
                    {/* Company Logo */}
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Building className="w-6 h-6 text-white" />
                    </div>

                    {/* Company Info */}
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                      {story.company}
                    </h4>
                    <p className="text-gray-400 text-sm mb-3">{story.industry}</p>

                    {/* Key Metric */}
                    <div className="text-2xl font-bold text-indigo-400 mb-2">
                      {story.results.roi}
                    </div>
                    <div className="text-gray-300 text-sm">ROI Achieved</div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/0 to-purple-600/0 group-hover:from-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-300"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-8 text-lg">
              Join hundreds of companies already experiencing unprecedented success with our solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
              >
                Start Your Journey
                <Rocket className="w-5 h-5" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                View All Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStoriesShowcase2025;