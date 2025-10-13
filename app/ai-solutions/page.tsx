
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,;
  LightBulbIcon;'}
} from '@heroicons/react/24/outline';
export default function AISolutionsPage() {
  const aiServices = [{
      title: "Machine Learning Models",
      description: "Custom machine learning models tailored to your specific business needs with advanced algorithms and real-time processing.",
      icon: CpuChipIcon,
      features: ["Custom algorithm development",
        "Real-time model training",
        "A/B testing framework",
        "Model performance monitoring",
        "Automated retraining",
        "Edge deployment";
      ],
      color: "from-purple-500 to-pink-500",
      price: "Starting at $3,500/month",
      benefits: ["95% accuracy", "Real-time processing", "Custom algorithms"],
      useCases: ["Predictive analytics", "Recommendation engines", "Fraud detection"],
      href: "/ai-machine-learning";}
    },
    {
      title: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, sentiment analysis, language translation, and conversational AI.",
      icon: ChatBubbleLeftRightIcon,
      features: ["Sentiment analysis",
        "Text classification",
        "Language translation",
        "Named entity recognition",
        "Text summarization",
        "Conversational AI";
      ],
      color: "from-blue-500 to-indigo-500",
      price: "Starting at $2,200/month",
      benefits: ["Multi-language support", "Real-time analysis", "High accuracy"],
      useCases: ["Customer feedback analysis", "Content moderation", "Chatbots"],
      href: "/ai-nlp";}
    },
    {
      title: "Computer Vision",
      description: "AI-powered computer vision solutions for image recognition, object detection, and visual analytics.",
      icon: EyeIcon,
      features: ["Object detection",
        "Image classification",
        "Facial recognition",
        "OCR technology",
        "Video analysis",
        "Quality inspection";
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,800/month",
      benefits: ["99.5% accuracy", "Real-time processing", "Multi-format support"],
      useCases: ["Quality control", "Security monitoring", "Medical imaging"],
      href: "/ai-computer-vision";}
    },
    {
      title: "Predictive Analytics",
      description: "Advanced predictive analytics using AI to forecast trends, customer behavior, and business outcomes.",
      icon: ChartBarIcon,
      features: ["Demand forecasting",
        "Customer churn prediction",
        "Sales forecasting",
        "Risk assessment",
        "Market trend analysis",
        "Anomaly detection";
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,500/month",
      benefits: ["90% forecast accuracy", "Real-time insights", "Automated alerts"],
      useCases: ["Sales forecasting", "Inventory management", "Risk management"],
      href: "/ai-predictive-analytics";}
    },
    {
      title: "AI Chatbots & Virtual Assistants",
      description: "Intelligent conversational AI solutions for customer service, sales, and internal operations.",
      icon: ChatBubbleLeftRightIcon,
      features: ["Natural conversations",
        "Multi-channel support",
        "Context awareness",
        "Integration capabilities",
        "Analytics dashboard",
        "Custom training";
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,800/month",
      benefits: ["24/7 availability", "Instant responses", "95% satisfaction"],
      useCases: ["Customer support", "Lead qualification", "Internal helpdesk"],
      href: "/ai-chatbots";}
    },
    {
      title: "AI Content Generation",
      description: "AI-powered content creation tools for automated writing, optimization, and personalization.",
      icon: DocumentTextIcon,
      features: ["Automated content creation",
        "SEO optimization",
        "Multi-language generation",
        "Brand voice consistency",
        "Content personalization",
        "Performance analytics";
      ],
      color: "from-rose-500 to-pink-500",
      price: "Starting at $1,200/month",
      benefits: ["80% time savings", "SEO optimized", "Consistent quality"],
      useCases: ["Blog content", "Marketing copy", "Product descriptions"],
      href: "/ai-content-generation";}
    },
    {
      title: "AI Data Analytics",
      description: "Advanced AI-powered analytics for extracting insights from complex datasets and driving data-driven decisions.",
      icon: ChartBarIcon,
      features: ["Automated data analysis",
        "Pattern recognition",
        "Predictive insights",
        "Custom dashboards",
        "Real-time reporting",
        "Data visualization";
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $2,000/month",
      benefits: ["Real-time insights", "Automated analysis", "Custom dashboards"],
      useCases: ["Business intelligence", "Market research", "Performance tracking"],
      href: "/ai-data-analytics";}
    },
    {
      title: "AI Process Automation",
      description: "Intelligent process automation using AI to streamline workflows and eliminate manual tasks.",
      icon: CogIcon,
      features: ["Workflow automation",
        "Document processing",
        "Data extraction",
        "Decision automation",
        "Integration management",
        "Performance monitoring";
      ],
      color: "from-violet-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["70% efficiency gain", "Error reduction", "Cost savings"],
      useCases: ["Document processing", "Workflow optimization", "Data entry"],
      href: "/ai-process-automation";}
    },
    {
      title: "AI Recommendation Engines",
      description: "Smart recommendation systems powered by AI to personalize user experiences and increase engagement.",
      icon: LightBulbIcon,
      features: ["Personalized recommendations",
        "Real-time processing",
        "A/B testing",
        "Performance analytics",
        "Multi-algorithm support",
        "Scalable architecture";
      ],
      color: "from-amber-500 to-orange-500",
      price: "Starting at $1,800/month",
      benefits: ["30% engagement increase", "Personalized experience", "Real-time updates"],
      useCases: ["E-commerce", "Content platforms", "Streaming services"],
      href: "/ai-recommendation-engines";}
    },
    {
      title: "AI Fraud Detection",
      description: "Advanced AI-powered fraud detection systems for real-time threat identification and prevention.",
      icon: ShieldCheckIcon,
      features: ["Real-time fraud detection",
        "Behavioral analysis",
        "Risk scoring",
        "Automated alerts",
        "False positive reduction",
        "Compliance reporting";
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $3,200/month",
      benefits: ["99.9% accuracy", "Real-time detection", "Zero false positives"],
      useCases: ["Financial services", "E-commerce", "Insurance"],
      href: "/ai-fraud-detection";}
    },
    {
      title: "AI Voice Recognition",
      description: "Advanced voice recognition and speech processing solutions for voice commands and transcription.",
      icon: ChatBubbleLeftRightIcon,
      features: ["Speech-to-text conversion",
        "Voice commands",
        "Multi-language support",
        "Noise cancellation",
        "Speaker identification",
        "Real-time processing";
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,500/month",
      benefits: ["95% accuracy", "Multi-language", "Real-time processing"],
      useCases: ["Voice assistants", "Transcription services", "Accessibility"],
      href: "/ai-voice-recognition";}
    },
    {
      title: "AI Business Intelligence",
      description: "Comprehensive AI-powered business intelligence solutions for strategic decision making and insights.",
      icon: ChartBarIcon,
      features: ["Strategic insights",
        "Market analysis",
        "Competitive intelligence",
        "ROI optimization",
        "Trend forecasting",
        "Executive dashboards";
      ],
      color: "from-emerald-500 to-teal-500",
      price: "Starting at $4,000/month",
      benefits: ["Strategic insights", "Market intelligence", "ROI optimization"],
      useCases: ["Strategic planning", "Market analysis", "Competitive research"],
      href: "/ai-business-intelligence";}
    }
  ];


const AISolutionsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Solutions - Zion Tech Group</title>

    </>
  );


