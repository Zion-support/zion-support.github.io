import React from 'react';
import { 
  Brain, 
  Zap, 
  Shield, 
  TrendingUp, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Cpu,
  Target,
  BarChart3,
  Globe,
  Lock,
  Database,
  Cloud,
  Smartphone,
  Code,
  Image,
  Video,
  Mic,
  Camera,
  FileText,
  Search,
  Filter,
  Settings,
  Monitor,
  Laptop,
  Headphones,
  Eye,
  Lightbulb,
  Sparkles,
  Wand2,
  Layers,
  Workflow,
  GitBranch,
  Terminal,
  Palette,
  BookOpen,
  GraduationCap,
  Briefcase,
  Home,
  ShoppingCart,
  Package,
  Truck,
  MapPin,
  Navigation,
  Compass,
  Globe2,
  Wifi,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  RotateCcw,
  Save,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Paperclip,
  Link,
  ExternalLink,
  Maximize,
  Minimize,
  X,
  Plus,
  Minus,
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  MicOff,
  VideoOff,
  EyeOff,
  Unlock,
  Key,
  Fingerprint,
  Shield as ShieldIcon,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckCircle2,
  XCircle,
  AlertCircle,
  Zap as ZapIcon,
  Flash,
  Thunder,
  Sun,
  Moon,
  Cloud as CloudIcon,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch,
  Calendar as CalendarIcon,
  Clock as ClockIcon,
  History,
  Archive,
  Folder,
  FolderOpen,
  File,
  FileText as FileTextIcon,
  Image as ImageIcon,
  Video as VideoIcon,
  Music,
  Headphones as HeadphonesIcon,
  Mic as MicIcon,
  Camera as CameraIcon,
  Smartphone as SmartphoneIcon,
  MessageCircle,
  Heart,
  DollarSign,
  Tablet,
  Laptop as LaptopIcon,
  Monitor as MonitorIcon,
  Tv,
  Radio,
  Speaker,
  Volume1,
  Volume2 as Volume2Icon,
  VolumeX as VolumeXIcon,
  Play as PlayIcon,
  Pause as PauseIcon,
  Stop as StopIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  RotateCcw as RotateCcwIcon,
  RotateCw,
  Repeat,
  Shuffle,
  Repeat1,
  Shuffle as ShuffleIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle2,
  Repeat2,
  Repeat3,
  Shuffle3,
  Repeat4,
  Shuffle4,
  Repeat5,
  Shuffle5,
  Repeat6,
  Shuffle6,
  Repeat7,
  Shuffle7,
  Repeat8,
  Shuffle8,
  Repeat9,
  Shuffle9,
  Repeat10,
  Shuffle10
} from 'lucide-react';

const AIServices: React.FC = () => {
  const aiServices = [
    {
      title: "Custom AI Model Development",
      description: "Build tailored AI models for your specific business needs, data, and industry requirements.",
      features: [
        "Custom model training & fine-tuning",
        "Data preprocessing & augmentation",
        "Model optimization & performance tuning",
        "Production deployment & scaling",
        "Continuous learning & updates",
        "API integration & documentation",
        "Performance monitoring & analytics",
        "24/7 technical support"
      ],
      icon: Brain,
      price: "Starting at $15,000",
      category: "AI Development",
      popular: true,
      timeline: "4-8 weeks",
      complexity: "High"
    },
    {
      title: "AI-Powered Process Automation",
      description: "Automate complex business processes using intelligent AI solutions that learn and adapt.",
      features: [
        "Workflow automation & optimization",
        "Document processing & extraction",
        "Decision automation & routing",
        "ROI tracking & analytics",
        "Integration with existing systems",
        "Custom rule configuration",
        "Exception handling & alerts",
        "Scalable cloud infrastructure"
      ],
      icon: Zap,
      price: "Starting at $8,500",
      category: "Automation",
      popular: true,
      timeline: "2-4 weeks",
      complexity: "Medium"
    },
    {
      title: "Computer Vision Solutions",
      description: "Implement advanced visual recognition and image analysis for various business applications.",
      features: [
        "Object detection & classification",
        "Quality control & inspection",
        "Security monitoring & surveillance",
        "Medical imaging analysis",
        "Facial recognition & authentication",
        "OCR & text extraction",
        "Real-time video processing",
        "Custom model training"
      ],
      icon: Eye,
      price: "Starting at $12,000",
      category: "Computer Vision",
      popular: false,
      timeline: "6-10 weeks",
      complexity: "High"
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and language understanding.",
      features: [
        "Intelligent chatbot development",
        "Sentiment analysis & monitoring",
        "Text classification & categorization",
        "Language translation & localization",
        "Named entity recognition",
        "Text summarization & extraction",
        "Voice recognition & synthesis",
        "Multi-language support"
      ],
      icon: MessageCircle,
      price: "Starting at $6,000",
      category: "NLP",
      popular: true,
      timeline: "3-6 weeks",
      complexity: "Medium"
    },
    {
      title: "Predictive Analytics & Forecasting",
      description: "AI-powered predictive models for business forecasting, risk assessment, and decision support.",
      features: [
        "Demand forecasting & planning",
        "Risk assessment & mitigation",
        "Customer behavior prediction",
        "Financial modeling & analysis",
        "Market trend analysis",
        "Anomaly detection & alerts",
        "Scenario planning & simulation",
        "Real-time dashboard integration"
      ],
      icon: TrendingUp,
      price: "Starting at $10,000",
      category: "Analytics",
      popular: false,
      timeline: "4-8 weeks",
      complexity: "High"
    },
    {
      title: "AI-Powered Recommendation Engine",
      description: "Intelligent recommendation systems to personalize user experiences and increase engagement.",
      features: [
        "Personalized content recommendations",
        "Product recommendation engine",
        "Collaborative filtering algorithms",
        "Real-time personalization",
        "A/B testing & optimization",
        "Multi-channel recommendations",
        "Performance analytics & insights",
        "Scalable cloud architecture"
      ],
      icon: Target,
      price: "Starting at $7,500",
      category: "Recommendation Systems",
      popular: true,
      timeline: "3-5 weeks",
      complexity: "Medium"
    },
    {
      title: "AI Chatbot & Virtual Assistant",
      description: "Intelligent conversational AI that handles customer inquiries and provides 24/7 support.",
      features: [
        "Natural conversation flow",
        "Multi-language support (50+ languages)",
        "Integration with CRM & databases",
        "Human handoff capabilities",
        "Sentiment analysis & response",
        "Voice & text interactions",
        "Custom training & knowledge base",
        "Analytics & performance tracking"
      ],
      icon: Users,
      price: "Starting at $5,000",
      category: "Conversational AI",
      popular: true,
      timeline: "2-4 weeks",
      complexity: "Medium"
    },
    {
      title: "AI-Powered Content Generation",
      description: "Automated content creation using AI for blogs, social media, marketing materials, and more.",
      features: [
        "SEO-optimized content generation",
        "Multiple content formats & styles",
        "Brand voice customization",
        "Plagiarism detection & removal",
        "Multi-language content creation",
        "Content calendar integration",
        "Performance analytics & optimization",
        "Team collaboration tools"
      ],
      icon: FileText,
      price: "Starting at $4,500",
      category: "Content AI",
      popular: false,
      timeline: "2-3 weeks",
      complexity: "Low"
    },
    {
      title: "AI-Powered Data Analysis",
      description: "Intelligent data analysis and insights generation using machine learning and AI algorithms.",
      features: [
        "Automated data processing & cleaning",
        "Pattern recognition & analysis",
        "Anomaly detection & alerts",
        "Predictive modeling & forecasting",
        "Custom dashboard creation",
        "Real-time data visualization",
        "Statistical analysis & reporting",
        "Integration with BI tools"
      ],
      icon: BarChart3,
      price: "Starting at $9,000",
      category: "Data Analytics",
      popular: false,
      timeline: "4-6 weeks",
      complexity: "High"
    },
    {
      title: "AI-Powered Security Solutions",
      description: "Advanced AI security systems for threat detection, fraud prevention, and cybersecurity.",
      features: [
        "Threat detection & prevention",
        "Fraud detection & analysis",
        "Behavioral analysis & monitoring",
        "Real-time security alerts",
        "Automated incident response",
        "Compliance monitoring & reporting",
        "Network security analysis",
        "Custom security rules & policies"
      ],
      icon: Shield,
      price: "Starting at $11,000",
      category: "AI Security",
      popular: true,
      timeline: "6-8 weeks",
      complexity: "High"
    },
    {
      title: "AI-Powered Voice & Audio Processing",
      description: "Advanced voice recognition, synthesis, and audio processing solutions for various applications.",
      features: [
        "Voice recognition & transcription",
        "Text-to-speech synthesis",
        "Audio noise reduction & enhancement",
        "Speaker identification & verification",
        "Voice emotion analysis",
        "Real-time audio processing",
        "Multi-language voice support",
        "Custom voice model training"
      ],
      icon: Mic,
      price: "Starting at $6,500",
      category: "Voice AI",
      popular: false,
      timeline: "3-5 weeks",
      complexity: "Medium"
    },
    {
      title: "AI Integration & Consulting",
      description: "Comprehensive AI strategy, integration, and ongoing support services for your business.",
      features: [
        "AI strategy & roadmap development",
        "System integration & deployment",
        "API development & documentation",
        "Performance monitoring & optimization",
        "Team training & knowledge transfer",
        "Ongoing support & maintenance",
        "Scalability planning & implementation",
        "Compliance & security auditing"
      ],
      icon: Settings,
      price: "Starting at $3,000/month",
      category: "AI Consulting",
      popular: true,
      timeline: "Ongoing",
      complexity: "Variable"
    }
  ];

  const industries = [
    { name: "Healthcare", description: "HIPAA-compliant AI solutions for medical diagnosis, treatment planning, and patient care", icon: Heart },
    { name: "Finance", description: "AI-powered fraud detection, risk assessment, and automated trading systems", icon: DollarSign },
    { name: "Manufacturing", description: "Predictive maintenance, quality control, and process optimization using AI", icon: Package },
    { name: "Retail", description: "Personalized recommendations, inventory optimization, and customer experience AI", icon: ShoppingCart },
    { name: "Education", description: "Personalized learning, automated grading, and intelligent tutoring systems", icon: GraduationCap },
    { name: "Government", description: "Secure, compliant AI solutions for public services and citizen engagement", icon: Shield },
    { name: "Transportation", description: "Autonomous vehicle systems, route optimization, and traffic management AI", icon: Truck },
    { name: "Energy", description: "Smart grid management, predictive maintenance, and energy optimization AI", icon: Battery }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Discovery & Analysis",
      description: "We analyze your business needs, data, and requirements to identify AI opportunities.",
      icon: Search
    },
    {
      step: "2",
      title: "Strategy & Planning",
      description: "Develop a comprehensive AI strategy and implementation roadmap tailored to your goals.",
      icon: Target
    },
    {
      step: "3",
      title: "Development & Training",
      description: "Build and train custom AI models using your data and business requirements.",
      icon: Code
    },
    {
      step: "4",
      title: "Integration & Deployment",
      description: "Seamlessly integrate AI solutions into your existing systems and workflows.",
      icon: Settings
    },
    {
      step: "5",
      title: "Optimization & Support",
      description: "Continuously monitor, optimize, and provide ongoing support for maximum performance.",
      icon: TrendingUp
    }
  ];

  const stats = [
    { label: "AI Models Deployed", value: "100+" },
    { label: "Client Satisfaction", value: "99.2%" },
    { label: "Average ROI", value: "340%" },
    { label: "Implementation Success", value: "98%" },
    { label: "Years of AI Experience", value: "8+" },
    { label: "Certified AI Engineers", value: "25+" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-2xl md:text-3xl mb-8 text-blue-100">
              Transform Your Business with Cutting-Edge Artificial Intelligence
            </p>
            <p className="text-lg md:text-xl mb-12 text-blue-200 max-w-4xl mx-auto">
              From custom AI model development to intelligent automation, we provide comprehensive AI solutions 
              that drive innovation, efficiency, and competitive advantage for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg">
                Get AI Assessment
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors text-lg">
                View AI Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Services Grid */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Comprehensive AI solutions designed to address your specific business challenges and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 ${service.popular ? 'ring-2 ring-blue-500 relative' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{service.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm">
                  <span className="text-gray-500">Timeline: {service.timeline}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    service.complexity === 'High' ? 'bg-red-100 text-red-800' :
                    service.complexity === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {service.complexity} Complexity
                  </span>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  {service.features.length > 4 && (
                    <li className="text-sm text-blue-600 font-medium">
                      +{service.features.length - 4} more features
                    </li>
                  )}
                </ul>

                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{service.price}</span>
                  <button className="flex items-center text-blue-600 hover:text-blue-800 font-medium">
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Section */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              We have deep experience across multiple industries, understanding the unique challenges 
              and requirements of each sector.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <industry.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{industry.name}</h3>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our AI Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A systematic approach to delivering AI solutions that meet your specific business requirements and drive real value.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Let our AI experts help you identify opportunities and implement solutions that deliver measurable results. 
            Get started with a free AI assessment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg">
              Schedule AI Assessment
            </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors text-lg">
              Download AI Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIServices;