import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BarChart3, 
  TrendingUp, 
  Target, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Users,
  Award,
  Globe,
  Lock,
  Activity,
  Clock,
  Eye,
  Database,
  Smartphone,
  Monitor,
  Code,
  FileText,
  PieChart,
  LineChart
} from 'lucide-react';

const aiAnalyticsSolutions = [
  {
    id: 1,
    title: "Predictive Analytics Platform",
    description: "AI-powered platform that predicts future trends and outcomes based on historical data.",
    icon: TrendingUp,
    features: [
      "Machine learning algorithms",
      "Real-time predictions",
      "Custom forecasting models",
      "Performance monitoring"
    ],
    price: "From $25,000",
    timeline: "12-20 weeks",
    category: "Predictive Analytics",
    integrations: ["Python", "TensorFlow", "PyTorch", "Cloud Platforms"]
  },
  {
    id: 2,
    title: "Business Intelligence Dashboard",
    description: "Intelligent dashboards that provide actionable insights from complex data sets.",
    icon: BarChart3,
    features: [
      "Interactive visualizations",
      "Real-time data updates",
      "Custom reporting",
      "Mobile responsiveness"
    ],
    price: "From $20,000",
    timeline: "10-16 weeks",
    category: "Business Intelligence",
    integrations: ["Tableau", "Power BI", "D3.js", "React"]
  },
  {
    id: 3,
    title: "Customer Behavior Analytics",
    description: "AI-driven analysis of customer behavior patterns and preferences.",
    icon: Users,
    features: [
      "Behavioral segmentation",
      "Predictive modeling",
      "Personalization engines",
      "ROI optimization"
    ],
    price: "From $30,000",
    timeline: "14-22 weeks",
    category: "Customer Analytics",
    integrations: ["Google Analytics", "Facebook Pixel", "CRM Systems", "Marketing Tools"]
  },
  {
    id: 4,
    title: "Real-Time Data Processing",
    description: "Streaming analytics platform for processing and analyzing data in real-time.",
    icon: Activity,
    features: [
      "Stream processing",
      "Real-time alerts",
      "Scalable architecture",
      "Low latency"
    ],
    price: "From $35,000",
    timeline: "16-24 weeks",
    category: "Real-Time Analytics",
    integrations: ["Apache Kafka", "Apache Spark", "Redis", "Elasticsearch"]
  },
  {
    id: 5,
    title: "Natural Language Processing",
    description: "AI-powered text and speech analysis for extracting insights from unstructured data.",
    icon: Brain,
    features: [
      "Text analysis",
      "Sentiment analysis",
      "Entity extraction",
      "Language translation"
    ],
    price: "From $40,000",
    timeline: "18-26 weeks",
    category: "NLP Analytics",
    integrations: ["OpenAI", "Hugging Face", "SpaCy", "NLTK"]
  },
  {
    id: 6,
    title: "Anomaly Detection System",
    description: "Intelligent system that identifies unusual patterns and potential issues in data.",
    icon: Target,
    features: [
      "Pattern recognition",
      "Alert systems",
      "False positive reduction",
      "Learning algorithms"
    ],
    price: "From $28,000",
    timeline: "12-18 weeks",
    category: "Anomaly Detection",
    integrations: ["Python", "Scikit-learn", "TensorFlow", "Custom APIs"]
  }
];

const aiCapabilities = [
  {
    title: "Machine Learning",
    description: "Advanced algorithms that learn from data and improve over time",
    icon: Brain,
    impact: "High"
  },
  {
    title: "Deep Learning",
    description: "Neural networks for complex pattern recognition and analysis",
    icon: Code,
    impact: "High"
  },
  {
    title: "Natural Language Processing",
    description: "Understanding and processing human language for insights",
    icon: FileText,
    impact: "Critical"
  },
  {
    title: "Computer Vision",
    description: "Image and video analysis for visual data insights",
    icon: Eye,
    impact: "High"
  }
];

const successStories = [
  {
    id: 1,
    company: "E-commerce Giant",
    industry: "Retail",
    challenge: "Needed predictive analytics for inventory management",
    solution: "Built AI-powered forecasting system with 95% accuracy",
    results: "30% reduction in stockouts, 25% cost savings, improved customer satisfaction",
    logo: "EG"
  },
  {
    id: 2,
    company: "Financial Services Corp",
    industry: "Finance",
    challenge: "Required real-time fraud detection system",
    solution: "Implemented AI-powered anomaly detection with machine learning",
    results: "90% fraud detection rate, 60% reduction in false positives, $2M saved",
    logo: "FS"
  },
  {
    id: 3,
    company: "Healthcare Network",
    industry: "Healthcare",
    challenge: "Needed patient behavior analytics for better care",
    solution: "Developed AI-driven patient insights platform",
    results: "40% improvement in patient outcomes, 35% reduction in readmissions",
    logo: "HN"
  }
];

const processSteps = [
  {
    step: 1,
    title: "Data Assessment",
    description: "Evaluate data quality, sources, and requirements for AI implementation",
    icon: Database,
    duration: "1-2 weeks"
  },
  {
    step: 2,
    title: "AI Model Design",
    description: "Design and select appropriate AI/ML models for the use case",
    icon: Brain,
    duration: "2-3 weeks"
  },
  {
    step: 3,
    title: "Development & Training",
    description: "Build AI models and train them with relevant data",
    icon: Code,
    duration: "8-20 weeks"
  },
  {
    step: 4,
    title: "Deployment & Optimization",
    description: "Deploy models and continuously optimize performance",
    icon: Zap,
    duration: "2-4 weeks"
  }
];

export default function AIAnalytics() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSolution, setSelectedSolution] = useState(null);

  const categories = ['All', 'Predictive Analytics', 'Business Intelligence', 'Customer Analytics', 'Real-Time Analytics', 'NLP Analytics', 'Anomaly Detection'];
  
  const filteredSolutions = selectedCategory === 'All' 
    ? aiAnalyticsSolutions 
    : aiAnalyticsSolutions.filter(solution => solution.category === selectedCategory);

  return (
    <div className="min-h-screen bg-futuristic">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/20 via-zion-purple/20 to-zion-blue/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-zion-cyan/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-zion-purple/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl mb-8"
            >
              <Brain className="w-10 h-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-gradient block">Analytics</span>
            </h1>
            
            <p className="text-xl text-zion-slate-light leading-relaxed mb-8">
              Transform your data into actionable insights with cutting-edge AI and machine learning. 
              From predictive analytics to real-time processing, we help businesses make data-driven decisions.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-zion-cyan">
                <Brain className="w-4 h-4" />
                <span>Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-zion-purple">
                <BarChart3 className="w-4 h-4" />
                <span>Data Insights</span>
              </div>
              <div className="flex items-center gap-2 text-zion-blue">
                <TrendingUp className="w-4 h-4" />
                <span>Predictive Power</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Capabilities</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Advanced artificial intelligence technologies that power our analytics solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 text-center hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <capability.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{capability.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{capability.description}</p>
                
                <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                  capability.impact === 'Critical' 
                    ? 'bg-red-500/20 text-red-400 border border-red-500/30'
                    : capability.impact === 'High'
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-green-500/20 text-green-400 border border-green-500/30'
                }`}>
                  {capability.impact} Impact
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our AI Development Process</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              A proven methodology that ensures successful AI analytics implementation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mx-auto">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {step.step}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-zion-slate-light mb-4 leading-relaxed">{step.description}</p>
                <span className="inline-block px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full border border-zion-cyan/30">
                  {step.duration}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-zion-blue-dark/50">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">AI Analytics Solutions</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI-powered analytics solutions designed for modern businesses
            </p>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                    : 'bg-zion-blue-dark/30 text-zion-slate-light border border-zion-cyan/20 hover:border-zion-cyan/40'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedSolution(solution)}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-6">
                  <solution.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6 leading-relaxed">{solution.description}</p>
                
                <div className="space-y-3 mb-6">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0" />
                      <span className="text-zion-slate-light text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {solution.integrations.slice(0, 2).map((integration, intIndex) => (
                    <span
                      key={intIndex}
                      className="px-2 py-1 bg-zion-purple/20 text-zion-purple text-xs rounded border border-zion-purple/30"
                    >
                      {integration}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-zion-cyan font-semibold">{solution.price}</span>
                  <span className="text-zion-slate-light text-sm">{solution.timeline}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                    {solution.category}
                  </span>
                  <button className="inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Organizations that have transformed their business with AI-powered analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-dark/30 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {story.logo}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.company}</h3>
                    <p className="text-zion-slate-light text-sm">{story.industry}</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-zion-cyan font-semibold mb-2">Results</h4>
                    <p className="text-zion-slate-light text-sm">{story.results}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-zion-slate-light text-sm ml-2">5.0 Rating</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-cyan/10 via-zion-purple/10 to-zion-blue/10">
        <div className="container-responsive">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Harness AI Analytics?</h2>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Let's discuss how our AI-powered analytics solutions can transform your data 
              into actionable insights and drive business growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-zion-cyan text-zion-cyan font-semibold rounded-xl hover:bg-zion-cyan hover:text-white transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}