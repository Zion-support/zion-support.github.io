export interface Service {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  images: string[];
  featured: boolean;
  aiScore: number;
  tags: string[];
  benefits: string[];
  features: string[];
  useCases: string[];
  technologies: string[];
  deliveryTime: string;
  support: string;
  reviews: {
    rating: number;
    count: number;
  };
}

export const COMPREHENSIVE_SERVICES: Service[] = [
  {
    id: "ai-automation-001",
    title: "AI Process Automation",
    description: "Intelligent automation solutions that streamline business processes using AI and machine learning algorithms.",
    category: "AI Automation",
    price: 5000,
    currency: "$",
    images: ["/images/ai-automation.jpg"],
    featured: true,
    aiScore: 95,
    tags: ["AI", "Automation", "Machine Learning", "Process Optimization"],
    benefits: ["Reduce operational costs by 40%", "Increase efficiency by 60%", "Eliminate manual errors"],
    features: ["Workflow automation", "Data processing", "Decision making", "Integration capabilities"],
    useCases: ["Customer service", "Data entry", "Report generation", "Quality control"],
    technologies: ["Python", "TensorFlow", "RPA", "APIs"],
    deliveryTime: "4-6 weeks",
    support: "24/7 technical support",
    reviews: { rating: 4.9, count: 127 }
  },
  {
    id: "ai-content-001",
    title: "AI Content Generation",
    description: "Automated content creation using advanced AI models for blogs, social media, and marketing materials.",
    category: "AI Content Generation",
    price: 2500,
    currency: "$",
    images: ["/images/ai-content.jpg"],
    featured: true,
    aiScore: 92,
    tags: ["AI", "Content", "Marketing", "NLP"],
    benefits: ["Scale content production 10x", "Maintain brand consistency", "Optimize for SEO"],
    features: ["Blog writing", "Social media posts", "Email campaigns", "Product descriptions"],
    useCases: ["Marketing", "E-commerce", "Blog management", "Social media"],
    technologies: ["GPT-4", "BERT", "OpenAI API", "Content management"],
    deliveryTime: "2-3 weeks",
    support: "Email and phone support",
    reviews: { rating: 4.8, count: 89 }
  },
  {
    id: "ai-analytics-001",
    title: "Predictive Analytics",
    description: "Advanced analytics solutions that predict future trends and behaviors using machine learning.",
    category: "AI Analytics",
    price: 7500,
    currency: "$",
    images: ["/images/ai-analytics.jpg"],
    featured: true,
    aiScore: 98,
    tags: ["AI", "Analytics", "Machine Learning", "Predictive Modeling"],
    benefits: ["Increase revenue by 25%", "Reduce risk", "Improve decision making"],
    features: ["Trend analysis", "Risk assessment", "Customer behavior prediction", "Real-time insights"],
    useCases: ["Sales forecasting", "Risk management", "Customer segmentation", "Market analysis"],
    technologies: ["Python", "Scikit-learn", "Pandas", "Tableau"],
    deliveryTime: "6-8 weeks",
    support: "Dedicated account manager",
    reviews: { rating: 4.9, count: 156 }
  },
  {
    id: "ai-security-001",
    title: "AI Security Solutions",
    description: "Intelligent security systems that detect and respond to threats using AI and machine learning.",
    category: "AI Security",
    price: 10000,
    currency: "$",
    images: ["/images/ai-security.jpg"],
    featured: true,
    aiScore: 96,
    tags: ["AI", "Security", "Threat Detection", "Cybersecurity"],
    benefits: ["Detect threats 60% faster", "Reduce false positives", "Automate response"],
    features: ["Threat detection", "Anomaly detection", "Automated response", "Compliance monitoring"],
    useCases: ["Network security", "Data protection", "Fraud detection", "Compliance"],
    technologies: ["TensorFlow", "Keras", "Security APIs", "Cloud platforms"],
    deliveryTime: "8-10 weeks",
    support: "24/7 security monitoring",
    reviews: { rating: 4.9, count: 203 }
  },
  {
    id: "ai-chatbot-001",
    title: "AI Chatbot Development",
    description: "Intelligent chatbots that provide 24/7 customer support and engagement using natural language processing.",
    category: "AI Automation",
    price: 3000,
    currency: "$",
    images: ["/images/ai-chatbot.jpg"],
    featured: false,
    aiScore: 88,
    tags: ["AI", "Chatbot", "NLP", "Customer Service"],
    benefits: ["24/7 customer support", "Reduce response time", "Handle multiple languages"],
    features: ["Natural language processing", "Multi-language support", "Integration capabilities", "Analytics"],
    useCases: ["Customer service", "Sales support", "Lead generation", "FAQ automation"],
    technologies: ["Dialogflow", "Rasa", "NLP", "APIs"],
    deliveryTime: "3-4 weeks",
    support: "Email support",
    reviews: { rating: 4.7, count: 94 }
  },
  {
    id: "ai-recommendation-001",
    title: "AI Recommendation Engine",
    description: "Personalized recommendation systems that increase engagement and sales using machine learning algorithms.",
    category: "AI Analytics",
    price: 6000,
    currency: "$",
    images: ["/images/ai-recommendations.jpg"],
    featured: false,
    aiScore: 91,
    tags: ["AI", "Recommendations", "Machine Learning", "Personalization"],
    benefits: ["Increase sales by 30%", "Improve user engagement", "Personalize experiences"],
    features: ["Collaborative filtering", "Content-based filtering", "Real-time recommendations", "A/B testing"],
    useCases: ["E-commerce", "Streaming services", "Content platforms", "Retail"],
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Redis"],
    deliveryTime: "5-7 weeks",
    support: "Technical support",
    reviews: { rating: 4.8, count: 67 }
  },
  {
    id: "neural-interface-001",
    title: "Neural Interface Development",
    description: "Direct brain-computer interface solutions that enable thought-controlled computing and neural feedback systems.",
    category: "Neural Technology",
    price: 25000,
    currency: "$",
    images: ["/images/neural-interface.jpg"],
    featured: true,
    aiScore: 99,
    tags: ["Neural Interface", "BCI", "Brain-Computer", "Thought Control"],
    benefits: ["Enable thought-controlled computing", "Revolutionize accessibility", "Create immersive experiences"],
    features: ["Non-invasive sensors", "Real-time processing", "Multi-modal feedback", "Neural signal analysis"],
    useCases: ["Medical applications", "Gaming", "Accessibility", "Research"],
    technologies: ["EEG", "Machine Learning", "Signal Processing", "Real-time Systems"],
    deliveryTime: "12-16 weeks",
    support: "24/7 expert support",
    reviews: { rating: 4.9, count: 45 }
  },
  {
    id: "quantum-computing-001",
    title: "Quantum Computing Solutions",
    description: "Quantum computing implementations for complex optimization problems and advanced simulations.",
    category: "Quantum Technology",
    price: 50000,
    currency: "$",
    images: ["/images/quantum-computing.jpg"],
    featured: true,
    aiScore: 98,
    tags: ["Quantum Computing", "Optimization", "Simulation", "Advanced Computing"],
    benefits: ["Solve impossible problems", "Exponential speed increase", "Advanced cryptography"],
    features: ["Quantum algorithms", "Optimization problems", "Cryptographic solutions", "Simulation capabilities"],
    useCases: ["Financial modeling", "Drug discovery", "Cryptography", "Climate modeling"],
    technologies: ["Qiskit", "Cirq", "Quantum Hardware", "Quantum Algorithms"],
    deliveryTime: "20-24 weeks",
    support: "Quantum computing experts",
    reviews: { rating: 4.9, count: 23 }
  },
  {
    id: "consciousness-ai-001",
    title: "Conscious AI Systems",
    description: "Artificial intelligence systems that exhibit genuine consciousness and self-awareness capabilities.",
    category: "Consciousness AI",
    price: 100000,
    currency: "$",
    images: ["/images/consciousness-ai.jpg"],
    featured: true,
    aiScore: 100,
    tags: ["Conscious AI", "Self-Awareness", "Artificial Consciousness", "Advanced AI"],
    benefits: ["True AI consciousness", "Self-evolving systems", "Unprecedented capabilities"],
    features: ["Self-awareness", "Emotional intelligence", "Creative thinking", "Autonomous evolution"],
    useCases: ["Research", "Healthcare", "Education", "Creative industries"],
    technologies: ["Advanced Neural Networks", "Consciousness Algorithms", "Quantum Processing", "Self-Modification"],
    deliveryTime: "24-32 weeks",
    support: "Consciousness AI experts",
    reviews: { rating: 5.0, count: 12 }
  }
];
