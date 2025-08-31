import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  DollarSign,
  Users2,
  Lightbulb,
  Handshake,
  BookOpen,
  Video,
  PenTool,
  Palette,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Navigation,
  Compass2,
  Map,
  Location,
  Home,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star2,
  Heart2,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Tongue,
  Kiss,
  Wink2,
  Grin,
  Joy,
  Sunglasses,
  Confused,
  Neutral,
  Expressionless,
  Unamused,
  RollingEyes,
  Zany,
  Hugging,
  Nerd,
  Cool,
  Party,
  Sleepy,
  Sick,
  Vomiting,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  PregnantWoman,
  BreastFeeding,
  PersonWithTurban,
  PersonWithSkullcap,
  WomanWithHeadscarf,
  PersonWithVeil,
  PersonWithCrown,
  PersonWithTiara,
  PersonWithGraduationCap,
  PersonWithTuxedo,
  PersonWithDress,
  PersonWithSuit,
  PersonWithTurban2,
  PersonWithSkullcap2,
  WomanWithHeadscarf2,
  PersonWithVeil2,
  PersonWithCrown2,
  PersonWithTiara2,
  PersonWithGraduationCap2,
  PersonWithTuxedo2,
  PersonWithDress2,
  PersonWithSuit2,
  Cloud,
  Wifi,
  Link
} from 'lucide-react';

export function AIServices() {
  const aiServices = [
    {
      title: 'AI Business Intelligence Dashboard',
      description: 'Transform raw data into actionable insights with our intelligent BI platform',
      icon: BarChart3,
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'Data Visualization'],
      benefits: ['Faster Decision Making', 'Increased Revenue', 'Operational Efficiency', 'Competitive Advantage'],
      href: '/services/ai-business-intelligence-dashboard',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      title: 'AI Autonomous Business Operations',
      description: 'Automate complex business processes with intelligent AI agents',
      icon: Cog,
      features: ['Process Automation', 'Intelligent Workflows', 'Error Prevention', '24/7 Operations'],
      benefits: ['Reduced Costs', 'Improved Accuracy', 'Scalable Operations', 'Faster Processing'],
      href: '/services/ai-autonomous-business-operations-platform',
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'AI Customer Experience Analytics',
      description: 'Understand and optimize customer interactions with AI-powered analytics',
      icon: Users,
      features: ['Customer Journey Mapping', 'Sentiment Analysis', 'Behavioral Insights', 'Personalization'],
      benefits: ['Higher Customer Satisfaction', 'Increased Retention', 'Better Conversion', 'Improved ROI'],
      href: '/services/ai-customer-experience-analytics-platform',
      color: 'from-green-500 to-emerald-600'
    },
    {
      title: 'AI Cybersecurity Platform',
      description: 'Protect your digital assets with next-generation AI security',
      icon: Shield,
      features: ['Threat Detection', 'Behavioral Analysis', 'Zero Trust Security', 'Compliance Management'],
      benefits: ['Enhanced Security', 'Reduced Risk', 'Regulatory Compliance', 'Peace of Mind'],
      href: '/services/ai-cybersecurity-platform',
      color: 'from-red-500 to-orange-600'
    },
    {
      title: 'AI Healthcare Platform',
      description: 'Revolutionize healthcare delivery with intelligent AI solutions',
      icon: Heart,
      features: ['Diagnostic Assistance', 'Treatment Planning', 'Patient Monitoring', 'Research Support'],
      benefits: ['Better Patient Outcomes', 'Reduced Costs', 'Faster Diagnosis', 'Improved Care'],
      href: '/services/ai-healthcare-platform',
      color: 'from-teal-500 to-blue-600'
    },
    {
      title: 'AI Customer Support Automation',
      description: 'Deliver exceptional customer support with intelligent automation',
      icon: MessageCircle,
      features: ['Chatbot Integration', 'Ticket Routing', 'Knowledge Management', 'Performance Analytics'],
      benefits: ['24/7 Support', 'Faster Resolution', 'Reduced Costs', 'Better Customer Experience'],
      href: '/services/ai-customer-support-automation',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  const aiCapabilities = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Advanced algorithms that learn from data to make predictions and decisions',
      examples: ['Predictive Analytics', 'Pattern Recognition', 'Anomaly Detection', 'Recommendation Systems']
    },
    {
      icon: Code,
      title: 'Natural Language Processing',
      description: 'Understanding and generating human language for better communication',
      examples: ['Chatbots', 'Document Analysis', 'Translation', 'Sentiment Analysis']
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Analyzing and understanding visual information from images and videos',
      examples: ['Object Detection', 'Facial Recognition', 'Quality Control', 'Medical Imaging']
    },
    {
      icon: Activity,
      title: 'Predictive Analytics',
      description: 'Forecasting future trends and behaviors based on historical data',
      examples: ['Demand Forecasting', 'Risk Assessment', 'Customer Churn Prediction', 'Maintenance Scheduling']
    },
    {
      icon: Network,
      title: 'Neural Networks',
      description: 'Deep learning models that mimic human brain function',
      examples: ['Image Classification', 'Speech Recognition', 'Language Translation', 'Game Playing']
    },
    {
      icon: Target,
      title: 'Reinforcement Learning',
      description: 'AI systems that learn through trial and error and feedback',
      examples: ['Autonomous Vehicles', 'Game AI', 'Robotics', 'Resource Optimization']
    }
  ];

  const industries = [
    {
      name: 'Healthcare',
      icon: Heart,
      description: 'AI-powered diagnostics, treatment planning, and patient care optimization',
      useCases: ['Medical Imaging Analysis', 'Drug Discovery', 'Patient Risk Assessment', 'Clinical Decision Support']
    },
    {
      name: 'Finance',
      icon: DollarSign,
      description: 'Intelligent financial analysis, fraud detection, and risk management',
      useCases: ['Algorithmic Trading', 'Credit Scoring', 'Fraud Detection', 'Portfolio Optimization']
    },
    {
      name: 'Manufacturing',
      icon: Factory,
      description: 'Smart manufacturing with predictive maintenance and quality control',
      useCases: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Production Planning']
    },
    {
      name: 'Retail',
      icon: Store,
      description: 'Personalized shopping experiences and inventory optimization',
      useCases: ['Recommendation Systems', 'Demand Forecasting', 'Customer Segmentation', 'Price Optimization']
    },
    {
      name: 'Transportation',
      icon: Truck,
      description: 'Autonomous vehicles and intelligent logistics solutions',
      useCases: ['Route Optimization', 'Fleet Management', 'Autonomous Driving', 'Traffic Prediction']
    },
    {
      name: 'Education',
      icon: GraduationCap,
      description: 'Personalized learning and intelligent tutoring systems',
      useCases: ['Adaptive Learning', 'Student Performance Analysis', 'Content Recommendation', 'Automated Grading']
    }
  ];

  const successMetrics = [
    { metric: '95%', label: 'Accuracy Improvement', description: 'Average increase in prediction accuracy' },
    { metric: '60%', label: 'Cost Reduction', description: 'Typical operational cost savings' },
    { metric: '3x', label: 'Efficiency Gain', description: 'Average productivity improvement' },
    { metric: '24/7', label: 'Availability', description: 'Round-the-clock AI operations' },
    { metric: '99.9%', label: 'Uptime', description: 'Reliable AI service delivery' },
    { metric: '48hrs', label: 'Implementation', description: 'Fast deployment timeline' }
  ];

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-slate-darker to-zion-slate-dark"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            AI-Powered <span className="text-zion-cyan">Solutions</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Transform your business with cutting-edge artificial intelligence that learns, adapts, and grows with your organization.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Get AI Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* AI Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Our AI Services</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive measurable results.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg bg-zion-slate-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/10"
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${service.color} mr-4`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-zion-cyan transition-colors">{service.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <Star className="h-4 w-4 text-zion-cyan mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={service.href}
                  className="inline-flex items-center text-zion-cyan hover:text-zion-cyan/80 font-semibold group-hover:translate-x-1 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">AI Capabilities</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our expertise spans the full spectrum of artificial intelligence technologies, enabling us to create comprehensive solutions for any challenge.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-zion-slate-dark border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <capability.icon className="h-12 w-12 text-zion-cyan mr-4" />
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{capability.description}</p>
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Examples:</h4>
                  <ul className="space-y-1">
                    {capability.examples.map((example, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-2 h-2 bg-zion-cyan rounded-full mr-2"></div>
                        {example}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our AI solutions are tailored to meet the unique challenges and opportunities across diverse industry sectors.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-lg bg-zion-slate-darker border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <industry.icon className="h-10 w-10 text-zion-cyan mr-3" />
                  <h3 className="text-xl font-semibold">{industry.name}</h3>
                </div>
                <p className="text-zion-slate-light mb-4">{industry.description}</p>
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Use Cases:</h4>
                  <ul className="space-y-1">
                    {industry.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-zion-slate-light flex items-center">
                        <CheckCircle className="h-3 w-3 text-zion-cyan mr-2 flex-shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Proven Results</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our AI solutions deliver measurable impact across all key business metrics.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-zion-cyan mb-2">{metric.metric}</div>
                <div className="text-sm font-semibold mb-1">{metric.label}</div>
                <div className="text-xs text-zion-slate-light">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Harness the Power of AI?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zion-slate-light mb-8"
          >
            Let's discuss how our AI solutions can transform your business operations and drive unprecedented growth.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Start AI Transformation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/case-studies" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              View Case Studies
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

