import React from 'react';
import Head from 'next/head';
import { 
  Brain, 
  Cpu, 
  Database, 
  Eye, 
  MessageSquare, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Target,
  Clock
} from 'lucide-react';
import Layout from '../../components/Layout';

const aiImplementationPhases = [
  {
    phase: 'Discovery',
    title: 'AI Readiness Assessment',
    description: 'Evaluate your data, infrastructure, and business processes for AI readiness.',
    duration: '2-3 weeks',
    deliverables: ['Data Audit', 'Infrastructure Review', 'Use Case Identification', 'ROI Analysis']
  },
  {
    phase: 'Strategy',
    title: 'AI Strategy Development',
    description: 'Create a comprehensive AI strategy aligned with your business objectives.',
    duration: '3-4 weeks',
    deliverables: ['AI Roadmap', 'Technology Selection', 'Implementation Plan', 'Success Metrics']
  },
  {
    phase: 'Development',
    title: 'AI Model Development',
    description: 'Build, train, and validate AI models for your specific use cases.',
    duration: '8-16 weeks',
    deliverables: ['AI Models', 'Training Data', 'Validation Results', 'Performance Metrics']
  },
  {
    phase: 'Deployment',
    title: 'Production Deployment',
    description: 'Deploy AI solutions into production with monitoring and maintenance.',
    duration: '4-8 weeks',
    deliverables: ['Production System', 'Monitoring Dashboard', 'User Training', 'Documentation']
  }
];

const aiSolutions = [
  {
    icon: Brain,
    title: 'Machine Learning Models',
    description: 'Custom ML models for predictive analytics, classification, and pattern recognition.',
    applications: ['Predictive Analytics', 'Customer Segmentation', 'Risk Assessment', 'Demand Forecasting']
  },
  {
    icon: Eye,
    title: 'Computer Vision',
    description: 'AI-powered image and video analysis for automation and quality control.',
    applications: ['Object Detection', 'Quality Inspection', 'Facial Recognition', 'Medical Imaging']
  },
  {
    icon: MessageSquare,
    title: 'Natural Language Processing',
    description: 'AI solutions for text analysis, chatbots, and language understanding.',
    applications: ['Chatbots', 'Sentiment Analysis', 'Document Processing', 'Language Translation']
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics',
    description: 'Advanced analytics for forecasting and data-driven decision making.',
    applications: ['Sales Forecasting', 'Inventory Optimization', 'Churn Prediction', 'Market Analysis']
  }
];

const aiBenefits = [
  {
    icon: TrendingUp,
    title: 'Increased Efficiency',
    description: 'Automate repetitive tasks and optimize business processes.',
    improvement: '50%'
  },
  {
    icon: Target,
    title: 'Better Accuracy',
    description: 'Improve decision-making with data-driven insights and predictions.',
    improvement: '75%'
  },
  {
    icon: Clock,
    title: 'Faster Processing',
    description: 'Accelerate data processing and analysis with AI-powered automation.',
    improvement: '60%'
  },
  {
    icon: Users,
    title: 'Enhanced Customer Experience',
    description: 'Deliver personalized experiences and improved customer service.',
    improvement: '40%'
  }
];

const aiStats = [
  { number: '90%', label: 'Implementation Success Rate' },
  { number: '50%', label: 'Average Efficiency Gain' },
  { number: '75%', label: 'Accuracy Improvement' },
  { number: '60%', label: 'Cost Reduction' }
];

const aiTechnologies = [
  {
    name: 'Machine Learning Frameworks',
    description: 'TensorFlow, PyTorch, Scikit-learn for building and training ML models.',
    capabilities: ['Model Training', 'Feature Engineering', 'Model Validation', 'Hyperparameter Tuning']
  },
  {
    name: 'Deep Learning',
    description: 'Neural networks for complex pattern recognition and decision making.',
    capabilities: ['Image Recognition', 'Natural Language Processing', 'Speech Recognition', 'Recommendation Systems']
  },
  {
    name: 'Cloud AI Services',
    description: 'AWS, Azure, Google Cloud AI services for scalable AI solutions.',
    capabilities: ['Pre-trained Models', 'AutoML', 'MLOps', 'Scalable Infrastructure']
  },
  {
    name: 'Edge AI',
    description: 'AI processing at the edge for real-time applications and reduced latency.',
    capabilities: ['Real-time Processing', 'Offline Capability', 'Reduced Latency', 'Privacy Protection']
  }
];

const aiUseCases = [
  {
    industry: 'Healthcare',
    applications: ['Medical Diagnosis', 'Drug Discovery', 'Patient Monitoring', 'Treatment Optimization'],
    icon: Shield
  },
  {
    industry: 'Finance',
    applications: ['Fraud Detection', 'Risk Assessment', 'Algorithmic Trading', 'Credit Scoring'],
    icon: BarChart3
  },
  {
    industry: 'Manufacturing',
    applications: ['Quality Control', 'Predictive Maintenance', 'Supply Chain Optimization', 'Process Automation'],
    icon: Cpu
  },
  {
    industry: 'Retail',
    applications: ['Recommendation Engines', 'Inventory Management', 'Customer Analytics', 'Price Optimization'],
    icon: Users
  }
];

export default function AIImplementation() {
  return (
    <Layout>
      <Head>
        <title>AI Implementation Solutions - Zion Tech Group</title>
        <meta name="description" content="Implement AI solutions in your business with Zion Tech Group's comprehensive AI implementation services. Machine learning, computer vision, and NLP solutions." />
        <meta name="keywords" content="AI implementation, machine learning, artificial intelligence, computer vision, NLP, AI consulting, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/solutions/ai-implementation" />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl font-bold mb-6">AI Implementation Solutions</h1>
              <p className="text-xl text-indigo-100 mb-8">
                Transform your business with intelligent AI solutions. From strategy to deployment, we help you harness the power of artificial intelligence.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start AI Implementation
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View AI Use Cases
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* AI Implementation Phases */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A structured approach to AI implementation that ensures success and maximizes business value.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiImplementationPhases.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-indigo-600">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                    <h4 className="text-xl font-bold text-indigo-600 mb-2">{phase.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>
                  <div className="text-sm text-indigo-600 font-medium mb-3">Duration: {phase.duration}</div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-700 mb-2">Deliverables:</h5>
                    <ul className="space-y-1">
                      {phase.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI solutions tailored to your specific business needs and use cases.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-8 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center mb-4">
                    <solution.icon className="w-12 h-12 text-indigo-600 mr-4" />
                    <h3 className="text-2xl font-semibold text-gray-900">{solution.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{solution.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Applications:</h4>
                    <ul className="space-y-2">
                      {solution.applications.map((app, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-indigo-500 mr-2" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Benefits */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Implementation Benefits</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable improvements that drive business growth and competitive advantage.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg text-center"
                >
                  <benefit.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 mb-4">{benefit.description}</p>
                  <div className="text-3xl font-bold text-indigo-600">{benefit.improvement}</div>
                  <div className="text-sm text-gray-500">Average Improvement</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Stats */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-6">Proven AI Results</h2>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                Our AI implementations deliver measurable business value and competitive advantage.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {aiStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-indigo-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Use Cases by Industry */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Use Cases by Industry</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how AI can transform your industry with proven applications and solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {aiUseCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors"
                >
                  <useCase.icon className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{useCase.industry}</h3>
                  <ul className="space-y-2">
                    {useCase.applications.map((app, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                        {app}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">AI Technologies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Cutting-edge AI technologies and frameworks that power our solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {aiTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{tech.name}</h3>
                  <p className="text-gray-600 mb-4">{tech.description}</p>
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Capabilities:</h4>
                    <ul className="space-y-1">
                      {tech.capabilities.map((capability, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-indigo-500 mr-2" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-6">Ready to Implement AI in Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join industry leaders who have successfully implemented AI solutions with Zion Tech Group.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <button className="bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Get AI Assessment
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Download AI Guide
                </button>
              </div>
              
              {/* Contact Information */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 mr-2" />
                  <span>ai@ziontechgroup.com</span>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}