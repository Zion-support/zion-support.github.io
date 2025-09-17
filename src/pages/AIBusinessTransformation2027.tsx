import React from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  ArrowLeft, 
  Share2, 
  Bookmark,
  TrendingUp,
  Brain,
  Zap,
  Shield,
  Target,
  CheckCircle
} from 'lucide-react';

const AIBusinessTransformation2027: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

  const sections = [
    {
      id: 'assessment',
      title: 'Assessment & Strategy',
      icon: <Target className="w-6 h-6" />,
      content: [
        'Current state analysis',
        'AI readiness evaluation',
        'Strategic roadmap development',
        'ROI projections and metrics'
      ]
    },
    {
      id: 'data',
      title: 'Data Foundation',
      icon: <Brain className="w-6 h-6" />,
      content: [
        'Data quality assessment',
        'Infrastructure modernization',
        'Privacy and security implementation',
        'Governance framework establishment'
      ]
    },
    {
      id: 'technology',
      title: 'Technology Implementation',
      icon: <Zap className="w-6 h-6" />,
      content: [
        'AI model development',
        'Integration with existing systems',
        'Performance optimization',
        'Scalability planning'
      ]
    },
    {
      id: 'organization',
      title: 'Organizational Change',
      icon: <TrendingUp className="w-6 h-6" />,
      content: [
        'Workforce training and reskilling',
        'Process redesign',
        'Culture transformation',
        'Change management'
      ]
    },
    {
      id: 'innovation',
      title: 'Continuous Innovation',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Performance monitoring',
        'Model refinement',
        'Emerging technology adoption',
        'Strategic evolution'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 mb-8"
        >
          <div className="flex items-center space-x-4 mb-6">
            <button
              onClick={() => window.history.back()}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex-1">
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 17, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>Dr. Alexandra Thompson</span>
                </div>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                AI-Powered Business Transformation: The Complete 2027 Guide
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how artificial intelligence is revolutionizing business operations, 
                from automated decision-making to predictive analytics and beyond.
              </p>
            </div>
            <div className="flex space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Bookmark className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              AI Strategy
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
              Business Transformation
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              Machine Learning
            </span>
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
              Digital Innovation
            </span>
          </div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  The business landscape has been fundamentally transformed by artificial intelligence, 
                  and 2027 represents the pinnacle of this revolution. Companies worldwide are leveraging 
                  AI to achieve unprecedented levels of efficiency, innovation, and competitive advantage.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  The AI Transformation Framework
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Our comprehensive AI transformation framework consists of five critical phases that 
                  guide organizations through successful AI adoption and implementation.
                </p>

                {/* Framework Sections */}
                <div className="space-y-8">
                  {sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200"
                    >
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="bg-blue-600 text-white p-2 rounded-lg">
                          {section.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {index + 1}. {section.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {section.content.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-3 text-gray-700">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Key AI Technologies Driving Transformation
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      title: "Machine Learning & Deep Learning",
                      description: "Advanced algorithms that learn from data to make predictions, classify information, and automate complex decision-making processes."
                    },
                    {
                      title: "Natural Language Processing",
                      description: "Enables machines to understand, interpret, and generate human language, revolutionizing customer service and content creation."
                    },
                    {
                      title: "Computer Vision",
                      description: "Allows systems to interpret and analyze visual information, transforming industries from healthcare to manufacturing."
                    },
                    {
                      title: "Predictive Analytics",
                      description: "Uses historical data and machine learning to forecast future trends, helping businesses make proactive decisions."
                    }
                  ].map((tech, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{tech.title}</h4>
                      <p className="text-gray-700">{tech.description}</p>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Industry Applications
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { industry: "Healthcare", applications: ["Diagnostic imaging analysis", "Drug discovery acceleration", "Personalized treatment plans"] },
                    { industry: "Finance", applications: ["Fraud detection", "Algorithmic trading", "Credit risk assessment"] },
                    { industry: "Manufacturing", applications: ["Predictive maintenance", "Quality control", "Supply chain optimization"] },
                    { industry: "Retail", applications: ["Personalized experiences", "Inventory optimization", "Demand forecasting"] }
                  ].map((sector, index) => (
                    <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-4">{sector.industry}</h4>
                      <ul className="space-y-2">
                        {sector.applications.map((app, appIndex) => (
                          <li key={appIndex} className="text-gray-700 text-sm flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                            <span>{app}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
                  Measuring Success
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Key performance indicators for AI transformation include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Operational efficiency improvements",
                    "Cost reduction metrics",
                    "Revenue growth from new AI-enabled products",
                    "Customer satisfaction scores",
                    "Employee productivity gains",
                    "Time-to-market acceleration"
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{metric}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white mt-12">
                  <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Transformation?</h3>
                  <p className="text-blue-100 mb-6">
                    Our expert team can help you develop and implement a comprehensive AI strategy 
                    tailored to your organization's unique needs and goals.
                  </p>
                  <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </motion.article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              {/* Author Card */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    AT
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Dr. Alexandra Thompson</h4>
                    <p className="text-gray-600 text-sm">Chief AI Strategist</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Leading AI transformation expert with over 15 years of experience helping 
                  Fortune 500 companies implement cutting-edge artificial intelligence solutions.
                </p>
              </div>

              {/* Related Articles */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Related Articles</h3>
                <div className="space-y-4">
                  {[
                    { title: "Quantum Computing Revolution: Executive Guide", readTime: "18 min" },
                    { title: "Cybersecurity in the AI Era", readTime: "20 min" },
                    { title: "Machine Learning Implementation Best Practices", readTime: "12 min" }
                  ].map((article, index) => (
                    <a key={index} href="#" className="block p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <h5 className="font-semibold text-gray-900 text-sm mb-1">{article.title}</h5>
                      <p className="text-gray-600 text-xs">{article.readTime} read</p>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBusinessTransformation2027;