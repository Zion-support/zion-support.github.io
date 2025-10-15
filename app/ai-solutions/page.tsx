import React from 'react';
import SEOHead from '../components/SEOHead';
import {
  CpuChipIcon,
  BrainIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ChartBarIcon,
  CogIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CodeBracketIcon,
  CloudIcon,
  SignalIcon,
  RocketLaunchIcon,
  LightBulbIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  ShoppingCartIcon,
  PresentationChartLineIcon,
  ClipboardDocumentListIcon,
  CalendarIcon,
  MegaphoneIcon,
  BanknotesIcon,
  WrenchScrewdriverIcon,
  ChartPieIcon,
  UserIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HeartIcon,
  CameraIcon,
  VideoCameraIcon,
  MicrophoneIcon,
  PaintBrushIcon,
  CubeIcon,
  PuzzlePieceIcon,
  CommandLineIcon,
  ServerIcon,
  DatabaseIcon,
  KeyIcon,
  LockClosedIcon,
  BellIcon,
  ChatBubbleOvalLeftIcon,
  PaperAirplaneIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  ArchiveBoxIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsHorizontalIcon,
  Bars3Icon,
  XMarkIcon,
  PlusIcon,
  MinusIcon,
  PencilIcon,
  TrashIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  PlayIcon,
  PauseIcon,
  StopIcon,
  ForwardIcon,
  BackwardIcon,
  VolumeUpIcon,
  VolumeOffIcon,
  WifiIcon,
  Battery100Icon,
  SunIcon,
  MoonIcon,
  FireIcon,
  BoltIcon,
  ZapIcon,
  BeakerIcon,
  FlaskConicalIcon,
  TestTubeIcon,
  BookOpenIcon,
  NewspaperIcon,
  RssIcon,
  LinkIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  FlagIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
  XCircleIcon,
  ExclamationCircleIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

const AISolutionsPage: React.FC = () => {
  const aiSolutions = [
    {
      category: 'AI Development & Integration',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      icon: CpuChipIcon,
      solutions: [
        {
          name: 'AI Strategy Consulting',
          price: '$2,500/month',
          description: 'Comprehensive AI strategy development and implementation planning for your business transformation',
          features: ['AI Roadmap Development', 'Technology Assessment', 'ROI Analysis', 'Implementation Planning', 'Team Training', 'Change Management'],
          benefits: ['40% Efficiency Increase', 'Cost Reduction', 'Competitive Advantage', 'Future-Proof Technology'],
          marketPrice: '$4,000/month',
          savings: '38%'
        },
        {
          name: 'Custom AI Model Development',
          price: '$3,500/month',
          description: 'Tailored machine learning models designed specifically for your business needs and data',
          features: ['Custom Model Training', 'Data Preprocessing', 'Model Optimization', 'Performance Monitoring', 'Continuous Learning', 'API Integration'],
          benefits: ['Higher Accuracy', 'Business-Specific Solutions', 'Scalable Architecture', 'Real-time Processing'],
          marketPrice: '$6,000/month',
          savings: '42%'
        },
        {
          name: 'AI API Integration',
          price: '$1,200/month',
          description: 'Seamless integration of AI capabilities into your existing systems and applications',
          features: ['API Development', 'System Integration', 'Data Pipeline Setup', 'Error Handling', 'Documentation', 'Support'],
          benefits: ['Easy Integration', 'Reduced Development Time', 'Scalable Solutions', 'Maintenance Support'],
          marketPrice: '$2,000/month',
          savings: '40%'
        }
      ]
    },
    {
      category: 'Natural Language Processing',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      icon: ChatBubbleLeftRightIcon,
      solutions: [
        {
          name: 'AI Chatbot Development',
          price: '$1,800/month',
          description: 'Intelligent conversational AI chatbots for customer service and support with advanced NLP',
          features: ['Multi-language Support', 'Context Understanding', 'Integration APIs', 'Analytics Dashboard', '24/7 Availability', 'Voice Support'],
          benefits: ['Improved Customer Service', 'Reduced Support Costs', 'Faster Response Times', 'Consistent Quality'],
          marketPrice: '$3,000/month',
          savings: '40%'
        },
        {
          name: 'Text Analysis & Sentiment',
          price: '$1,500/month',
          description: 'Advanced text analysis and sentiment analysis for customer feedback and content optimization',
          features: ['Sentiment Analysis', 'Text Classification', 'Entity Recognition', 'Language Detection', 'Real-time Processing', 'Custom Models'],
          benefits: ['Better Customer Insights', 'Content Optimization', 'Risk Detection', 'Market Intelligence'],
          marketPrice: '$2,500/month',
          savings: '40%'
        },
        {
          name: 'Language Translation AI',
          price: '$2,000/month',
          description: 'Real-time language translation and localization services powered by advanced AI',
          features: ['Multi-language Support', 'Context-Aware Translation', 'Custom Terminology', 'Batch Processing', 'API Integration', 'Quality Assurance'],
          benefits: ['Global Reach', 'Accurate Translations', 'Cost Effective', 'Scalable Solutions'],
          marketPrice: '$3,500/month',
          savings: '43%'
        }
      ]
    },
    {
      category: 'Computer Vision & Image Processing',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: EyeIcon,
      solutions: [
        {
          name: 'Object Detection & Recognition',
          price: '$2,200/month',
          description: 'Advanced computer vision solutions for object detection and recognition in various industries',
          features: ['Real-time Detection', 'Custom Object Training', 'Multi-class Classification', 'Batch Processing', 'API Integration', 'Edge Deployment'],
          benefits: ['Automated Quality Control', 'Security Enhancement', 'Process Automation', 'Cost Reduction'],
          marketPrice: '$3,800/month',
          savings: '42%'
        },
        {
          name: 'Facial Recognition System',
          price: '$2,800/month',
          description: 'Secure facial recognition and identity verification systems with privacy protection',
          features: ['Real-time Recognition', 'High Accuracy', 'Privacy Protection', 'Integration APIs', 'Analytics Dashboard', 'Compliance Tools'],
          benefits: ['Enhanced Security', 'Access Control', 'User Authentication', 'Fraud Prevention'],
          marketPrice: '$4,500/month',
          savings: '38%'
        },
        {
          name: 'Image Classification AI',
          price: '$1,600/month',
          description: 'Automated image classification and content analysis for various business applications',
          features: ['Custom Categories', 'Batch Processing', 'High Accuracy', 'API Integration', 'Real-time Analysis', 'Custom Training'],
          benefits: ['Content Moderation', 'Quality Control', 'Process Automation', 'Data Organization'],
          marketPrice: '$2,800/month',
          savings: '43%'
        }
      ]
    },
    {
      category: 'AI Automation & Workflow',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      icon: CogIcon,
      solutions: [
        {
          name: 'Process Automation AI',
          price: '$2,500/month',
          description: 'Intelligent process automation with decision-making capabilities and exception handling',
          features: ['Workflow Automation', 'Decision Trees', 'Exception Handling', 'Performance Monitoring', 'Custom Rules', 'Integration APIs'],
          benefits: ['Increased Efficiency', 'Reduced Errors', 'Cost Savings', 'Scalable Operations'],
          marketPrice: '$4,200/month',
          savings: '40%'
        },
        {
          name: 'AI Content Generation',
          price: '$1,400/month',
          description: 'Automated content creation for marketing, documentation, and communication with AI',
          features: ['Multi-format Support', 'Brand Consistency', 'SEO Optimization', 'Quality Control', 'Bulk Generation', 'Custom Templates'],
          benefits: ['Time Savings', 'Consistent Quality', 'Cost Reduction', 'Scalable Content'],
          marketPrice: '$2,400/month',
          savings: '42%'
        },
        {
          name: 'AI Data Analytics',
          price: '$2,000/month',
          description: 'Advanced analytics and insights powered by artificial intelligence and machine learning',
          features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Reporting', 'Real-time Insights', 'Custom Dashboards', 'API Access'],
          benefits: ['Better Decision Making', 'Predictive Insights', 'Competitive Advantage', 'Data-Driven Growth'],
          marketPrice: '$3,500/month',
          savings: '43%'
        }
      ]
    },
    {
      category: 'AI Security & Compliance',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: ShieldCheckIcon,
      solutions: [
        {
          name: 'AI Security Monitoring',
          price: '$2,200/month',
          description: 'Advanced AI-powered security monitoring and threat detection with real-time response',
          features: ['Real-time Monitoring', 'Threat Detection', 'Anomaly Detection', 'Automated Response', 'Compliance Reporting', 'Incident Management'],
          benefits: ['Enhanced Security', 'Proactive Protection', 'Compliance Assurance', 'Reduced Risk'],
          marketPrice: '$3,800/month',
          savings: '42%'
        },
        {
          name: 'AI Fraud Detection',
          price: '$1,800/month',
          description: 'Intelligent fraud detection and prevention systems with machine learning algorithms',
          features: ['Real-time Analysis', 'Pattern Recognition', 'Risk Scoring', 'Automated Alerts', 'Machine Learning', 'Integration APIs'],
          benefits: ['Fraud Prevention', 'Cost Reduction', 'Customer Protection', 'Regulatory Compliance'],
          marketPrice: '$3,200/month',
          savings: '44%'
        },
        {
          name: 'AI Compliance Assistant',
          price: '$1,500/month',
          description: 'AI-powered compliance monitoring and reporting for various regulations and standards',
          features: ['Regulation Tracking', 'Automated Reporting', 'Risk Assessment', 'Documentation', 'Audit Support', 'Alerts'],
          benefits: ['Compliance Assurance', 'Reduced Manual Work', 'Risk Mitigation', 'Audit Readiness'],
          marketPrice: '$2,600/month',
          savings: '42%'
        }
      ]
    },
    {
      category: 'AI Business Intelligence',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      icon: ChartBarIcon,
      solutions: [
        {
          name: 'AI Predictive Analytics',
          price: '$2,800/month',
          description: 'Advanced predictive analytics powered by AI for business forecasting and planning',
          features: ['Predictive Modeling', 'Forecasting', 'Trend Analysis', 'Risk Assessment', 'Scenario Planning', 'Real-time Updates'],
          benefits: ['Better Forecasting', 'Risk Mitigation', 'Strategic Planning', 'Competitive Advantage'],
          marketPrice: '$4,500/month',
          savings: '38%'
        },
        {
          name: 'AI Customer Insights',
          price: '$2,200/month',
          description: 'AI-powered customer behavior analysis and insights for better business decisions',
          features: ['Customer Segmentation', 'Behavior Analysis', 'Churn Prediction', 'Personalization', 'Recommendation Engine', 'Analytics Dashboard'],
          benefits: ['Better Customer Understanding', 'Increased Retention', 'Personalized Experiences', 'Higher Revenue'],
          marketPrice: '$3,800/month',
          savings: '42%'
        },
        {
          name: 'AI Market Intelligence',
          price: '$1,900/month',
          description: 'AI-driven market analysis and competitive intelligence for strategic decision making',
          features: ['Market Analysis', 'Competitor Tracking', 'Trend Identification', 'Opportunity Detection', 'Risk Assessment', 'Reporting'],
          benefits: ['Market Insights', 'Competitive Advantage', 'Opportunity Identification', 'Strategic Planning'],
          marketPrice: '$3,200/month',
          savings: '41%'
        }
      ]
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Solutions - Zion Tech Group"
        description="Comprehensive AI solutions including machine learning, natural language processing, computer vision, and automation. Transform your business with cutting-edge artificial intelligence."
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-600 rounded-full mb-6">
                <BrainIcon className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI Solutions & Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. From machine learning to computer vision, we deliver intelligent automation that drives growth and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#solutions"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  Explore AI Solutions
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/contact"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Get AI Consultation
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Solutions Grid */}
        <div id="solutions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {aiSolutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-20">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 ${category.bgColor} rounded-full mb-4`}>
                  <category.icon className={`w-8 h-8 ${category.color}`} />
                </div>
                <h2 className={`text-3xl font-bold ${category.color} mb-4`}>
                  {category.category}
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Professional {category.category.toLowerCase()} solutions powered by advanced AI technology
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {solution.name}
                      </h3>
                      <div className="flex items-center text-yellow-500">
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                        <StarIcon className="w-5 h-5 fill-current" />
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center text-2xl font-bold text-gray-900">
                          <CurrencyDollarIcon className="w-6 h-6 text-green-600 mr-1" />
                          {solution.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          <span className="line-through text-gray-400">{solution.marketPrice}</span>
                          <span className="ml-2 text-green-600 font-semibold">Save {solution.savings}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        Monthly subscription
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Business Benefits:</h4>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <SparklesIcon className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="/contact"
                        className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        Get Started
                      </a>
                      <a
                        href="/pricing"
                        className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 text-center py-2 px-4 rounded-lg font-semibold transition-colors"
                      >
                        View Pricing
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* AI Technologies Section */}
        <div className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                AI Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We leverage cutting-edge AI technologies and frameworks to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'Scikit-learn', 'Keras',
                'NLTK', 'spaCy', 'OpenCV', 'YOLO', 'BERT', 'Transformers',
                'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Plotly', 'Streamlit',
                'FastAPI', 'Flask', 'Django', 'React', 'Vue.js', 'Angular'
              ].map((tech, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-800 rounded-lg p-4 mb-2">
                    <CodeBracketIcon className="w-8 h-8 text-blue-400 mx-auto" />
                  </div>
                  <div className="text-sm font-medium">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Implement AI in Your Business?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Contact our AI experts today to discuss your requirements and get a customized AI solution
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <PhoneIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-purple-100">+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <EnvelopeIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-purple-100">kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPinIcon className="w-6 h-6 text-purple-200 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div className="text-purple-100">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Start AI Project
                </a>
                <a
                  href="/pricing"
                  className="border border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  View AI Pricing
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AISolutionsPage;
