import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cpu, 
  Eye, 
  Target, 
  Zap, 
  Shield, 
  Rocket, 
  Users, 
  Globe, 
  BarChart3, 
  Code, 
  Database, 
  Network, 
  Lock, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Lightbulb,
  Cog,
  Gauge,
  Layers,
  Activity,
  Monitor,
  Smartphone,
  Car,
  Plane,
  Ship,
  Robot,
  Microchip,
  CircuitBoard,
  Wifi,
  Bluetooth,
  Satellite,
  Radar,
  Camera,
  Sensor,
  Fingerprint,
  Key,
  Lock,
  Unlock,
  AlertTriangle,
  Info,
  Play,
  Pause,
  Stop,
  RotateCcw,
  Settings,
  Tool,
  Wrench,
  Hammer,
  Screwdriver
} from 'lucide-react';

export default function AIAutonomousSystems() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedUseCase, setSelectedUseCase] = useState(0);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: Eye },
    { id: 'services', label: 'Services', icon: Cog },
    { id: 'use-cases', label: 'Use Cases', icon: Target },
    { id: 'technologies', label: 'Technologies', icon: Microchip },
    { id: 'benefits', label: 'Benefits', icon: Star }
  ];

  const aiServices = [
    {
      icon: Brain,
      title: 'Machine Learning & AI',
      description: 'Advanced ML algorithms and AI models for predictive analytics, pattern recognition, and intelligent decision-making.',
      features: [
        'Deep Learning & Neural Networks',
        'Natural Language Processing',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Recommendation Systems',
        'Anomaly Detection'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cpu,
      title: 'Autonomous Systems',
      description: 'Self-driving vehicles, drones, robots, and intelligent systems that operate independently with minimal human intervention.',
      features: [
        'Autonomous Vehicles & Drones',
        'Industrial Robotics',
        'Smart Manufacturing Systems',
        'Autonomous Navigation',
        'Sensor Fusion & Processing',
        'Real-time Decision Making'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Advanced image and video processing systems for object detection, recognition, and analysis.',
      features: [
        'Object Detection & Tracking',
        'Facial Recognition',
        'Medical Image Analysis',
        'Quality Control Systems',
        'Augmented Reality',
        'Surveillance & Security'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Network,
      title: 'IoT & Edge Computing',
      description: 'Intelligent edge devices and IoT networks that process data locally for faster response times.',
      features: [
        'Edge AI Processing',
        'IoT Device Management',
        'Real-time Data Analytics',
        'Smart City Solutions',
        'Industrial IoT',
        'Connected Devices'
      ],
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const useCases = [
    {
      title: 'Autonomous Vehicles',
      description: 'Self-driving cars, trucks, and delivery vehicles with advanced safety systems and navigation.',
      icon: Car,
      applications: [
        'Ride-sharing & Transportation',
        'Logistics & Delivery',
        'Public Transportation',
        'Agricultural Vehicles',
        'Mining & Construction',
        'Emergency Response'
      ],
      benefits: [
        'Improved Safety & Reduced Accidents',
        '24/7 Operation Capability',
        'Optimized Route Planning',
        'Reduced Fuel Consumption',
        'Enhanced Accessibility',
        'Lower Operating Costs'
      ]
    },
    {
      title: 'Smart Manufacturing',
      description: 'Intelligent production lines with predictive maintenance, quality control, and automated optimization.',
      icon: Cog,
      applications: [
        'Predictive Maintenance',
        'Quality Control Systems',
        'Supply Chain Optimization',
        'Energy Management',
        'Worker Safety',
        'Production Planning'
      ],
      benefits: [
        'Increased Production Efficiency',
        'Reduced Downtime',
        'Higher Product Quality',
        'Lower Operational Costs',
        'Improved Worker Safety',
        'Sustainable Operations'
      ]
    },
    {
      title: 'Healthcare AI',
      description: 'Medical diagnosis, treatment planning, and patient monitoring using advanced AI algorithms.',
      icon: Activity,
      applications: [
        'Medical Image Analysis',
        'Drug Discovery',
        'Patient Monitoring',
        'Diagnostic Assistance',
        'Treatment Planning',
        'Healthcare Analytics'
      ],
      benefits: [
        'Faster Diagnosis',
        'Improved Treatment Accuracy',
        'Reduced Medical Errors',
        'Personalized Medicine',
        'Cost-effective Healthcare',
        'Better Patient Outcomes'
      ]
    },
    {
      title: 'Financial Services',
      description: 'Fraud detection, risk assessment, and automated trading systems powered by AI.',
      icon: BarChart3,
      applications: [
        'Fraud Detection',
        'Risk Assessment',
        'Algorithmic Trading',
        'Customer Service',
        'Credit Scoring',
        'Investment Analysis'
      ],
      benefits: [
        'Enhanced Security',
        'Reduced Financial Losses',
        'Improved Customer Experience',
        'Faster Transaction Processing',
        'Better Risk Management',
        'Increased Operational Efficiency'
      ]
    }
  ];

  const technologies = [
    {
      category: 'Machine Learning',
      items: [
        { name: 'TensorFlow', description: 'Open-source ML framework' },
        { name: 'PyTorch', description: 'Deep learning library' },
        { name: 'Scikit-learn', description: 'ML algorithms' },
        { name: 'Keras', description: 'Neural network API' }
      ]
    },
    {
      category: 'Computer Vision',
      items: [
        { name: 'OpenCV', description: 'Computer vision library' },
        { name: 'YOLO', description: 'Real-time object detection' },
        { name: 'TensorFlow Lite', description: 'Edge ML framework' },
        { name: 'MediaPipe', description: 'ML pipelines' }
      ]
    },
    {
      category: 'Autonomous Systems',
      items: [
        { name: 'ROS', description: 'Robot operating system' },
        { name: 'Gazebo', description: 'Robot simulation' },
        { name: 'PCL', description: 'Point cloud library' },
        { name: 'SLAM', description: 'Simultaneous localization' }
      ]
    },
    {
      category: 'Edge Computing',
      items: [
        { name: 'TensorRT', description: 'NVIDIA inference' },
        { name: 'OpenVINO', description: 'Intel optimization' },
        { name: 'ONNX Runtime', description: 'Model interoperability' },
        { name: 'Edge TPU', description: 'Google edge processing' }
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Increased Efficiency',
      description: 'Automate repetitive tasks and optimize processes for maximum productivity.',
      metrics: ['30-50% faster processing', '24/7 operation capability', 'Reduced manual errors']
    },
    {
      icon: Shield,
      title: 'Enhanced Safety',
      description: 'Improve safety standards with intelligent monitoring and predictive systems.',
      metrics: ['99.9% accuracy in detection', 'Real-time threat response', 'Predictive maintenance']
    },
    {
      icon: DollarSign,
      title: 'Cost Reduction',
      description: 'Lower operational costs through automation and optimization.',
      metrics: ['20-40% cost savings', 'Reduced downtime', 'Optimized resource usage']
    },
    {
      icon: Users,
      title: 'Better User Experience',
      description: 'Provide personalized and intelligent services to customers.',
      metrics: ['Personalized recommendations', 'Faster response times', 'Improved satisfaction']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Autonomous Systems</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transform your business with cutting-edge artificial intelligence and autonomous systems. 
            From machine learning algorithms to self-driving vehicles, we deliver the future of technology.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#services"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
            >
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[600px]">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    The Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Intelligence</span>
                  </h2>
                  <p className="text-lg text-gray-300 mb-6">
                    Our AI & Autonomous Systems division represents the cutting edge of technological innovation. 
                    We combine advanced machine learning algorithms with sophisticated autonomous capabilities to 
                    create systems that think, learn, and act independently.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">State-of-the-art machine learning algorithms</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Real-time autonomous decision making</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Advanced sensor fusion and processing</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-white">Scalable and secure AI infrastructure</span>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-2xl p-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Brain className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">AI Models</h3>
                        <p className="text-gray-400 text-sm">Advanced ML algorithms</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Eye className="w-12 h-12 text-blue-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">Computer Vision</h3>
                        <p className="text-gray-400 text-sm">Image & video processing</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Cpu className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">Autonomous Systems</h3>
                        <p className="text-gray-400 text-sm">Self-driving capabilities</p>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4 text-center">
                        <Network className="w-12 h-12 text-green-400 mx-auto mb-2" />
                        <h3 className="text-white font-semibold">IoT & Edge</h3>
                        <p className="text-gray-400 text-sm">Connected intelligence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Statistics */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">500+</h3>
                  <p className="text-gray-400">AI Models Deployed</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">100+</h3>
                  <p className="text-gray-400">Autonomous Systems</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">1M+</h3>
                  <p className="text-gray-400">Images Processed</p>
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">50+</h3>
                  <p className="text-gray-400">IoT Networks</p>
                </div>
              </div>
            </div>
          )}

          {/* Services Tab */}
          {activeTab === 'services' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Our AI & Autonomous Services</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Comprehensive solutions covering every aspect of artificial intelligence and autonomous systems
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {aiServices.map((service, idx) => {
                  const Icon = service.icon;
                  return (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300">
                      <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6">{service.description}</p>
                      <div className="space-y-3">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Use Cases Tab */}
          {activeTab === 'use-cases' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Real-World Applications</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Discover how our AI and autonomous systems are transforming industries worldwide
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {useCases.map((useCase, idx) => {
                  const Icon = useCase.icon;
                  return (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{useCase.title}</h3>
                          <p className="text-gray-300">{useCase.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Applications</h4>
                          <div className="space-y-2">
                            {useCase.applications.map((app, appIdx) => (
                              <div key={appIdx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">{app}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <div className="space-y-2">
                            {useCase.benefits.map((benefit, benefitIdx) => (
                              <div key={benefitIdx} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                <span className="text-gray-300 text-sm">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Technologies Tab */}
          {activeTab === 'technologies' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Cutting-Edge Technologies</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  We leverage the latest tools, frameworks, and platforms to deliver exceptional AI solutions
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {technologies.map((tech, idx) => (
                  <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                    <h3 className="text-2xl font-bold text-white mb-6">{tech.category}</h3>
                    <div className="space-y-4">
                      {tech.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center justify-between p-4 bg-gray-700/50 rounded-lg">
                          <div>
                            <h4 className="text-white font-medium">{item.name}</h4>
                            <p className="text-gray-400 text-sm">{item.description}</p>
                          </div>
                          <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Tech Stack */}
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Infrastructure & Deployment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Cloud className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Cloud Platforms</h4>
                    <p className="text-gray-300 text-sm">AWS, Azure, GCP, Kubernetes</p>
                  </div>
                  <div className="text-center">
                    <Database className="w-12 h-12 text-blue-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Data Management</h4>
                    <p className="text-gray-300 text-sm">PostgreSQL, MongoDB, Redis, Elasticsearch</p>
                  </div>
                  <div className="text-center">
                    <Lock className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <h4 className="text-white font-semibold mb-2">Security</h4>
                    <p className="text-gray-300 text-sm">Encryption, Authentication, Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Benefits Tab */}
          {activeTab === 'benefits' && (
            <div className="space-y-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Why Choose Our AI Solutions?</h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  Experience the transformative power of AI and autonomous systems in your business
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {benefits.map((benefit, idx) => {
                  const Icon = benefit.icon;
                  return (
                    <div key={idx} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{benefit.title}</h3>
                      <p className="text-gray-300 mb-6">{benefit.description}</p>
                      <div className="space-y-3">
                        {benefit.metrics.map((metric, metricIdx) => (
                          <div key={metricIdx} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ROI Section */}
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Return on Investment</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <h4 className="text-4xl font-bold text-green-400 mb-2">300%</h4>
                    <p className="text-gray-300">Average ROI within 18 months</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-blue-400 mb-2">40%</h4>
                    <p className="text-gray-300">Reduction in operational costs</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-purple-400 mb-2">60%</h4>
                    <p className="text-gray-300">Increase in productivity</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the future of intelligent automation. Our team of AI experts is ready to help you 
              implement cutting-edge solutions that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 font-medium rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}