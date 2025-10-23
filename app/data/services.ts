"use client";
export interface Service {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  category:
    | "ai"
    | "it"
    | "saas"
    | "blockchain"
    | "iot"
    | "devops"
    | "data"
    | "security"
    | "cloud"
    | "mobile"
    | "web";
  pricing: {
    basic: number;
    pro: number;
    enterprise: number;
    currency: string;
  };
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  demoUrl?: string;
  documentationUrl?: string;
  apiUrl?: string;
  status: "active" | "beta" | "coming-soon";
  launchDate: string;
  lastUpdated: string;
  icon: string;
  gradient: string;
  glow: string;
  route: string;
}

export const services: Service[] = [
  // AI Services
  {
    id: "ai-chatbot-builder",
    name: "AI Chatbot Builder",
    description:
      "Build intelligent conversational AI chatbots with natural language processing, multi-language support, and seamless integration capabilities.",
    shortDescription:
      "Create intelligent chatbots with advanced NLP capabilities",
    category: "ai",
    pricing: {
      basic: 29,
      pro: 99,
      enterprise: 299,
      currency: "USD",
    },
    features: [
      "Natural Language Processing",
      "Multi-language Support",
      "Custom Training Models",
      "API Integration",
      "Analytics Dashboard",
      "Voice Recognition",
      "Sentiment Analysis",
      "Conversation Flow Builder",
    ],
    benefits: [
      "24/7 Customer Support",
      "Reduced Response Time",
      "Cost-effective Solution",
      "Scalable Architecture",
      "Easy Integration",
      "Real-time Analytics",
    ],
    useCases: [
      "Customer Support Automation",
      "Lead Qualification",
      "FAQ Automation",
      "E-commerce Assistance",
      "Booking Systems",
      "Technical Support",
    ],
    technologies: [
      "OpenAI GPT-4",
      "TensorFlow",
      "React",
      "Node.js",
      "MongoDB",
      "WebSocket",
    ],
    demoUrl: "https://ziontechgroup.com/ai-chatbot-builder/demo",
    documentationUrl: "https://docs.ziontechgroup.com/ai-chatbot-builder",
    apiUrl: "https://api.ziontechgroup.com/v1/chatbot",
    status: "active",
    launchDate: "2024-01-15",
    lastUpdated: "2024-10-15",
    icon: "ChatBubbleLeftRightIcon",
    gradient: "from-purple-500 to-pink-500",
    glow: "shadow-purple-500/25",
    route: "/ai-chatbot-builder",
  },
  {
    id: "ai-document-processor",
    name: "AI Document Processor",
    description:
      "Automatically extract, analyze, and process documents with advanced OCR, data extraction, and intelligent classification capabilities.",
    shortDescription: "Intelligent document processing and data extraction",
    category: "ai",
    pricing: {
      basic: 49,
      pro: 149,
      enterprise: 399,
      currency: "USD",
    },
    features: [
      "OCR Technology",
      "Data Extraction",
      "Document Classification",
      "Batch Processing",
      "API Integration",
      "Cloud Storage",
      "Security Encryption",
      "Custom Templates",
    ],
    benefits: [
      "Automated Data Entry",
      "Error Reduction",
      "Time Savings",
      "Cost Efficiency",
      "Scalable Processing",
      "Secure Handling",
    ],
    useCases: [
      "Invoice Processing",
      "Contract Analysis",
      "Form Data Extraction",
      "Legal Document Review",
      "Medical Records Processing",
      "Financial Document Analysis",
    ],
    technologies: [
      "Tesseract OCR",
      "AWS Textract",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
    ],
    demoUrl: "https://ziontechgroup.com/ai-document-processor/demo",
    documentationUrl: "https://docs.ziontechgroup.com/ai-document-processor",
    apiUrl: "https://api.ziontechgroup.com/v1/document-processor",
    status: "active",
    launchDate: "2024-02-01",
    lastUpdated: "2024-10-15",
    icon: "DocumentTextIcon",
    gradient: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/25",
    route: "/ai-document-processor",
  },
  {
    id: "ai-form-builder",
    name: "AI Form Builder",
    description:
      "Create intelligent forms with smart validation, conditional logic, and automated responses using AI-powered form generation.",
    shortDescription: "Build smart forms with AI-powered validation and logic",
    category: "ai",
    pricing: {
      basic: 19,
      pro: 79,
      enterprise: 199,
      currency: "USD",
    },
    features: [
      "Drag & Drop Builder",
      "Smart Validation",
      "Conditional Logic",
      "Auto-Responses",
      "Analytics Dashboard",
      "Multi-step Forms",
      "Payment Integration",
      "Custom Styling",
    ],
    benefits: [
      "Faster Form Creation",
      "Better User Experience",
      "Reduced Abandonment",
      "Data Quality Improvement",
      "Easy Customization",
      "Real-time Analytics",
    ],
    useCases: [
      "Lead Generation",
      "Customer Feedback",
      "Event Registration",
      "Survey Collection",
      "Order Forms",
      "Contact Forms",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Stripe",
      "SendGrid",
    ],
    demoUrl: "https://ziontechgroup.com/ai-form-builder/demo",
    documentationUrl: "https://docs.ziontechgroup.com/ai-form-builder",
    apiUrl: "https://api.ziontechgroup.com/v1/form-builder",
    status: "active",
    launchDate: "2024-01-20",
    lastUpdated: "2024-10-15",
    icon: "ClipboardDocumentListIcon",
    gradient: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/25",
    route: "/ai-form-builder",
  },
  {
    id: "ai-voice-assistant",
    name: "AI Voice Assistant",
    description:
      "Deploy intelligent voice assistants with speech recognition, natural language understanding, and multi-platform integration.",
    shortDescription: "Intelligent voice assistants with speech recognition",
    category: "ai",
    pricing: {
      basic: 39,
      pro: 129,
      enterprise: 349,
      currency: "USD",
    },
    features: [
      "Speech Recognition",
      "Natural Language Understanding",
      "Voice Synthesis",
      "Multi-platform Support",
      "Custom Commands",
      "Integration APIs",
      "Analytics Dashboard",
      "Offline Capabilities",
    ],
    benefits: [
      "Hands-free Operation",
      "Accessibility Improvement",
      "Enhanced User Experience",
      "Multi-language Support",
      "Easy Integration",
      "Scalable Architecture",
    ],
    useCases: [
      "Smart Home Control",
      "Customer Service",
      "Accessibility Tools",
      "Mobile Apps",
      "IoT Devices",
      "Automotive Systems",
    ],
    technologies: [
      "Google Speech API",
      "Amazon Polly",
      "WebRTC",
      "Node.js",
      "WebSocket",
      "TensorFlow",
    ],
    demoUrl: "https://ziontechgroup.com/ai-voice-assistant/demo",
    documentationUrl: "https://docs.ziontechgroup.com/ai-voice-assistant",
    apiUrl: "https://api.ziontechgroup.com/v1/voice-assistant",
    status: "active",
    launchDate: "2024-02-15",
    lastUpdated: "2024-10-15",
    icon: "MicrophoneIcon",
    gradient: "from-orange-500 to-red-500",
    glow: "shadow-orange-500/25",
    route: "/ai-voice-assistant",
  },
  {
    id: "ai-fraud-detection",
    name: "AI Fraud Detection",
    description:
      "Advanced fraud detection system using machine learning algorithms to identify and prevent fraudulent activities in real-time.",
    shortDescription: "Real-time fraud detection with ML algorithms",
    category: "ai",
    pricing: {
      basic: 99,
      pro: 299,
      enterprise: 799,
      currency: "USD",
    },
    features: [
      "Real-time Detection",
      "Machine Learning Models",
      "Pattern Recognition",
      "Risk Scoring",
      "API Integration",
      "Dashboard Analytics",
      "Custom Rules",
      "Alert System",
    ],
    benefits: [
      "Fraud Prevention",
      "Cost Reduction",
      "Risk Mitigation",
      "Real-time Monitoring",
      "Scalable Solution",
      "Easy Integration",
    ],
    useCases: [
      "Payment Fraud",
      "Identity Theft",
      "Account Takeover",
      "Transaction Monitoring",
      "Credit Card Fraud",
      "Insurance Fraud",
    ],
    technologies: [
      "TensorFlow",
      "Scikit-learn",
      "Python",
      "FastAPI",
      "Redis",
      "PostgreSQL",
    ],
    demoUrl: "https://ziontechgroup.com/ai-fraud-detection/demo",
    documentationUrl: "https://docs.ziontechgroup.com/ai-fraud-detection",
    apiUrl: "https://api.ziontechgroup.com/v1/fraud-detection",
    status: "active",
    launchDate: "2024-01-10",
    lastUpdated: "2024-10-15",
    icon: "ShieldCheckIcon",
    gradient: "from-red-500 to-pink-500",
    glow: "shadow-red-500/25",
    route: "/ai-fraud-detection",
  },
  {
    id: "ai-image-recognition",
    name: "AI Image Recognition",
    description:
      "Advanced image recognition and computer vision services for object detection, classification, and analysis.",
    shortDescription: "Computer vision and image analysis services",
    category: "ai",
    pricing: {
      basic: 59,
      pro: 179,
      enterprise: 499,
      currency: "USD",
    },
    features: [
      "Object Detection",
      "Image Classification",
      "Face Recognition",
      "OCR Integration",
      "Batch Processing",
      "API Endpoints",
      "Custom Models",
      "Real-time Analysis",
    ],
    benefits: [
      "Automated Analysis",
      "High Accuracy",
      "Scalable Processing",
      "Easy Integration",
      "Cost Effective",
      "Real-time Results",
    ],
    useCases: [
      "Quality Control",
      "Security Systems",
      "Medical Imaging",
      "E-commerce",
      "Social Media",
      "Automotive",
    ],
    technologies: [
      "OpenCV",
      "TensorFlow",
      "PyTorch",
      "Python",
      "FastAPI",
      "AWS S3",
    ],
    demoUrl: "https://ziontechgroup.com/ai-image-recognition/demo",
    documentationUrl: "https://docs.ziontechgroup.com/ai-image-recognition",
    apiUrl: "https://api.ziontechgroup.com/v1/image-recognition",
    status: "active",
    launchDate: "2024-01-25",
    lastUpdated: "2024-10-15",
    icon: "EyeIcon",
    gradient: "from-indigo-500 to-purple-500",
    glow: "shadow-indigo-500/25",
    route: "/ai-image-recognition",
  },
];

export const getServiceById = (id: string): Service | undefined => {
  return services.find((service) => service.id === id);
};

export const getServicesByCategory = (category: string): Service[] => {
  return services.filter((service) => service.category === category);
};

export const getFeaturedServices = (): Service[] => {
  return services.filter((service) => service.status === "active").slice(0, 6);
};

export const getPricingTiers = () => {
  return {
    basic: "Basic",
    pro: "Professional",
    enterprise: "Enterprise",
  };
};
