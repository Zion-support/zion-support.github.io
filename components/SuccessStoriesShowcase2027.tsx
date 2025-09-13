import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  Award, 
  Target,
  ArrowRight,
  Star,
  CheckCircle,
  BarChart3,
  Globe,
  Zap,
  Brain,
  Shield,
  Database
} from 'lucide-react';

const SuccessStoriesShowcase2027: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedStory, setSelectedStory] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('success-stories');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const successStories = [
    {
      id: 1,
      company: "Global Financial Corp",
      industry: "Banking & Finance",
      logo: "/images/logo-financial-corp.png",
      challenge: "Real-time fraud detection across 50+ countries with 99.9% accuracy requirement",
      solution: "Quantum-AI Fusion Security Platform",
      timeline: "6 months",
      investment: "$2.5M",
      results: {
        roi: "15,000%",
        accuracy: "99.97%",
        savings: "$2.3B annually",
        processingTime: "< 1ms",
        countries: "50+",
        transactions: "100M+ daily"
      },
      metrics: [
        { label: "Fraud Detection Accuracy", value: "99.97%", improvement: "+0.07%" },
        { label: "Processing Speed", value: "< 1ms", improvement: "10,000x faster" },
        { label: "Annual Savings", value: "$2.3B", improvement: "+$2.1B" },
        { label: "Global Coverage", value: "50+ countries", improvement: "+30 countries" }
      ],
      testimonial: {
        text: "The quantum-AI fusion platform has revolutionized our fraud detection capabilities. We've achieved unprecedented accuracy while processing transactions in real-time.",
        author: "Sarah Chen",
        title: "CTO, Global Financial Corp",
        rating: 5
      },
      technologies: ["Quantum Computing", "Neural Networks", "Real-time Analytics", "Blockchain"]
    },
    {
      id: 2,
      company: "MedTech Innovations",
      industry: "Healthcare",
      logo: "/images/logo-medtech.png",
      challenge: "Early disease prediction and personalized treatment optimization for 2.5M patients",
      solution: "AI-Powered Predictive Healthcare Analytics",
      timeline: "8 months",
      investment: "$1.8M",
      results: {
        roi: "12,000%",
        accuracy: "95%",
        savings: "$500M annually",
        processingTime: "Real-time",
        countries: "25+",
        transactions: "2.5M patients"
      },
      metrics: [
        { label: "Early Detection Rate", value: "95%", improvement: "+40%" },
        { label: "Treatment Cost Reduction", value: "40%", improvement: "-$200M" },
        { label: "Patient Outcomes", value: "98% success", improvement: "+25%" },
        { label: "Processing Speed", value: "Real-time", improvement: "Instant" }
      ],
      testimonial: {
        text: "Our AI system has transformed patient care by predicting diseases months before symptoms appear. This is the future of healthcare.",
        author: "Dr. Michael Rodriguez",
        title: "Chief Medical Officer, MedTech Innovations",
        rating: 5
      },
      technologies: ["Machine Learning", "Predictive Analytics", "Medical Imaging AI", "IoT Sensors"]
    },
    {
      id: 3,
      company: "Manufacturing Excellence Inc",
      industry: "Manufacturing",
      logo: "/images/logo-manufacturing.png",
      challenge: "Predictive maintenance and quality control across 15 global facilities",
      solution: "Autonomous AI Manufacturing System",
      timeline: "10 months",
      investment: "$3.2M",
      results: {
        roi: "18,000%",
        accuracy: "99.5%",
        savings: "$800M annually",
        processingTime: "Continuous",
        countries: "15+",
        transactions: "50M+ products"
      },
      metrics: [
        { label: "Downtime Reduction", value: "80%", improvement: "-$400M" },
        { label: "Quality Consistency", value: "99.5%", improvement: "+15%" },
        { label: "Energy Efficiency", value: "60%", improvement: "+35%" },
        { label: "Production Speed", value: "3x faster", improvement: "+200%" }
      ],
      testimonial: {
        text: "The autonomous AI system has made our manufacturing process incredibly efficient. We've reduced downtime by 80% while maintaining perfect quality.",
        author: "Jennifer Park",
        title: "VP of Operations, Manufacturing Excellence Inc",
        rating: 5
      },
      technologies: ["Industrial IoT", "Computer Vision", "Predictive Maintenance", "Robotic Process Automation"]
    }
  ];

  const overallStats = [
    { label: "Total ROI", value: "15,000%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
    { label: "Companies Served", value: "500+", icon: Users, color: "from-blue-500 to-cyan-500" },
    { label: "Total Savings", value: "$3.6B", icon: DollarSign, color: "from-yellow-500 to-orange-500" },
    { label: "Average Accuracy", value: "98.2%", icon: Target, color: "from-purple-500 to-pink-500" },
    { label: "Implementation Time", value: "8 months", icon: Clock, color: "from-indigo-500 to-blue-500" },
    { label: "Success Rate", value: "99.7%", icon: Award, color: "from-red-500 to-pink-500" }
  ];

  return (
    <motion.section
      id="success-stories"
      className="py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-sm font-semibold mb-6"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          >
            <Award className="w-4 h-4 mr-2" />
            Proven Success Stories
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Transform Your Business Like These Industry Leaders
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Discover how leading companies achieved unprecedented results with our revolutionary AI and quantum computing solutions.
          </motion.p>
        </div>

        {/* Overall Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          {overallStats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.6 + 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Success Stories Navigation */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <div className="bg-gray-800 rounded-lg p-1 flex space-x-1">
            {successStories.map((story, index) => (
              <button
                key={story.id}
                onClick={() => setSelectedStory(index)}
                className={`px-6 py-3 rounded-md transition-all duration-300 ${
                  selectedStory === index
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {story.company}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Success Story Detail */}
        <motion.div
          key={selectedStory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Story Info */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {successStories[selectedStory].company.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {successStories[selectedStory].company}
                  </h3>
                  <p className="text-gray-400">
                    {successStories[selectedStory].industry}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">
                    {successStories[selectedStory].challenge}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300">
                    {successStories[selectedStory].solution}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Timeline</h4>
                    <p className="text-white font-semibold">{successStories[selectedStory].timeline}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-400 mb-1">Investment</h4>
                    <p className="text-white font-semibold">{successStories[selectedStory].investment}</p>
                  </div>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {successStories[selectedStory].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-green-600/20 text-green-400 text-sm rounded-full border border-green-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-700/50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(successStories[selectedStory].testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4">
                  "{successStories[selectedStory].testimonial.text}"
                </p>
                <div>
                  <p className="text-white font-semibold">
                    {successStories[selectedStory].testimonial.author}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {successStories[selectedStory].testimonial.title}
                  </p>
                </div>
              </div>
            </div>

            {/* Results & Metrics */}
            <div>
              <h4 className="text-2xl font-bold text-white mb-6">Results & Impact</h4>
              
              {/* Key Results */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-4 border border-green-500/30">
                  <div className="text-2xl font-bold text-green-400 mb-1">
                    {successStories[selectedStory].results.roi}
                  </div>
                  <div className="text-gray-300 text-sm">ROI</div>
                </div>
                <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-2xl font-bold text-blue-400 mb-1">
                    {successStories[selectedStory].results.accuracy}
                  </div>
                  <div className="text-gray-300 text-sm">Accuracy</div>
                </div>
                <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-lg p-4 border border-yellow-500/30">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">
                    {successStories[selectedStory].results.savings}
                  </div>
                  <div className="text-gray-300 text-sm">Annual Savings</div>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
                  <div className="text-2xl font-bold text-purple-400 mb-1">
                    {successStories[selectedStory].results.processingTime}
                  </div>
                  <div className="text-gray-300 text-sm">Processing Time</div>
                </div>
              </div>

              {/* Detailed Metrics */}
              <div>
                <h5 className="text-lg font-semibold text-white mb-4">Key Performance Indicators</h5>
                <div className="space-y-3">
                  {successStories[selectedStory].metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                      <div>
                        <div className="text-white font-medium">{metric.label}</div>
                        <div className="text-gray-400 text-sm">{metric.improvement}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold">{metric.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-2xl p-8 border border-green-500/30">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your business with the same revolutionary technology that helped these industry leaders achieve unprecedented results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold transition-all hover:from-green-600 hover:to-emerald-600 flex items-center justify-center group"
              >
                Start Your Success Story
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors border border-gray-600"
              >
                View All Case Studies
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SuccessStoriesShowcase2027;