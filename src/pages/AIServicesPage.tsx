import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Database, 
  Zap, 
  Shield, 
  BarChart3, 
  MessageSquare, 
  Code, 
  Globe,
  Server,
  Eye,
  FileText,
  CheckCircle,
  TrendingUp,
  Users,
  Lock,
  Mic,
  Video,
  Search
} from 'lucide-react';

const AIServices = [
  {
    title: "AI Strategy Consulting",
    description: "Strategic guidance for implementing AI solutions in your business",
    price: "$2,500 - $15,000",
    features: ["AI readiness assessment", "ROI analysis", "Implementation roadmap", "Team training"],
    icon: <Brain className="h-8 w-8 text-zion-cyan" />,
    category: "Strategy",
    badge: "Popular",
    link: "/request-quote?service=ai-strategy"
  },
  {
    title: "Custom AI Model Development",
    description: "Tailored machine learning models for your specific use case",
    price: "$5,000 - $50,000",
    features: ["Data preprocessing", "Model training", "Performance optimization", "Deployment support"],
          icon: <Server className="h-8 w-8 text-zion-purple" />,
    category: "Development",
    badge: "Premium",
    link: "/request-quote?service=custom-ai-models"
  },
  {
    title: "Data Labeling & Annotation",
    description: "High-quality data preparation for machine learning projects",
    price: "$0.50 - $5.00 per item",
    features: ["Image annotation", "Text labeling", "Quality assurance", "Scalable workforce"],
    icon: <FileText className="h-8 w-8 text-zion-blue" />,
    category: "Data",
    link: "/request-quote?service=data-labeling"
  },
  {
    title: "AI-Powered Analytics",
    description: "Advanced business intelligence with machine learning insights",
    price: "$1,500 - $8,000/month",
    features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "API integration"],
    icon: <BarChart3 className="h-8 w-8 text-zion-cyan" />,
    category: "Analytics",
    badge: "New",
    link: "/request-quote?service=ai-analytics"
  },
  {
    title: "Computer Vision Solutions",
    description: "Image and video analysis for automation and quality control",
    price: "$3,000 - $25,000",
    features: ["Object detection", "Image classification", "Video processing", "Edge deployment"],
    icon: <Eye className="h-8 w-8 text-zion-purple" />,
    category: "Vision",
    link: "/request-quote?service=computer-vision"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, and language understanding systems",
    price: "$2,000 - $20,000",
    features: ["Sentiment analysis", "Text generation", "Language translation", "Chatbot development"],
    icon: <MessageSquare className="h-8 w-8 text-zion-blue" />,
    category: "NLP",
    link: "/request-quote?service=nlp"
  },
  {
    title: "AI Ethics & Compliance",
    description: "Ensure your AI systems are fair, transparent, and compliant",
    price: "$1,500 - $10,000",
    features: ["Bias detection", "Explainability", "Privacy compliance", "Audit reports"],
    icon: <Shield className="h-8 w-8 text-zion-cyan" />,
    category: "Compliance",
    link: "/request-quote?service=ai-ethics"
  },
  {
    title: "AI Model Optimization",
    description: "Improve performance and efficiency of existing AI models",
    price: "$1,000 - $15,000",
    features: ["Performance tuning", "Model compression", "Inference optimization", "Cost reduction"],
    icon: <Zap className="h-8 w-8 text-zion-purple" />,
    category: "Optimization",
    link: "/request-quote?service=model-optimization"
  },
  {
    title: "AI Training & Workshops",
    description: "Custom training programs for your team on AI technologies",
    price: "$500 - $3,000 per person",
    features: ["Hands-on workshops", "Custom curriculum", "Certification", "Ongoing support"],
    icon: <Users className="h-8 w-8 text-zion-blue" />,
    category: "Training",
    link: "/request-quote?service=ai-training"
  },
  {
    title: "AI Integration Services",
    description: "Seamlessly integrate AI solutions into existing systems",
    price: "$2,000 - $20,000",
    features: ["API development", "System integration", "Testing", "Maintenance"],
    icon: <Code className="h-8 w-8 text-zion-cyan" />,
    category: "Integration",
    link: "/request-quote?service=ai-integration"
  },
  {
    title: "AI Security & Testing",
    description: "Comprehensive security testing for AI systems",
    price: "$1,500 - $12,000",
    features: ["Adversarial testing", "Vulnerability assessment", "Security hardening", "Compliance checks"],
    icon: <Lock className="h-8 w-8 text-zion-purple" />,
    category: "Security",
    link: "/request-quote?service=ai-security"
  },
  {
    title: "AI Content Generation",
    description: "Automated content creation for marketing and communication",
    price: "$500 - $5,000/month",
    features: ["Blog posts", "Social media content", "Product descriptions", "Multilingual support"],
    icon: <FileText className="h-8 w-8 text-zion-blue" />,
    category: "Content",
    link: "/request-quote?service=ai-content"
  }
];

const categories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4" /> },
  { name: "Strategy", value: "strategy", icon: <CheckCircle className="h-4 w-4" /> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4" /> },
  { name: "Data", value: "data", icon: <Database className="h-4 w-4" /> },
  { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4" /> },
  { name: "Vision", value: "vision", icon: <Eye className="h-4 w-4" /> },
  { name: "NLP", value: "nlp", icon: <MessageSquare className="h-4 w-4" /> },
  { name: "Compliance", value: "compliance", icon: <Shield className="h-4 w-4" /> },
  { name: "Optimization", value: "optimization", icon: <Zap className="h-4 w-4" /> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4" /> },
  { name: "Integration", value: "integration", icon: <Code className="h-4 w-4" /> },
  { name: "Security", value: "security", icon: <Lock className="h-4 w-4" /> },
  { name: "Content", value: "content", icon: <FileText className="h-4 w-4" /> }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("all");

  const filteredServices = selectedCategory === "all" 
    ? AIServices 
    : AIServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Services & Solutions
          </h1>
          <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
            Transform your business with cutting-edge artificial intelligence services. 
            From strategy to implementation, we've got you covered.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2" />
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Get Consultation
  Bot, 
  MessageSquare, 
  Image, 
  Video, 
  Code, 
  Database, 
  Shield,
  Zap,
  TrendingUp,
  Globe,
  Users,
  FileText,
  BarChart3,
  Mic,
  Eye,
  Network,
  Lock,
  Phone
} from 'lucide-react';

export default function AIServicesPage() {
  const aiServices = [
    {
      id: "ai-chatbot",
      title: "AI Chatbot Development",
      description: "Custom AI-powered chatbots for customer service, sales, and support with natural language processing capabilities.",
      features: [
        "Multi-language support",
        "Integration with CRM systems",
        "Analytics dashboard",
        "24/7 availability",
        "Custom training on your data"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$2,499/month"
      },
      icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
      category: "Conversational AI",
      badge: "Popular",
      link: "https://ziontechgroup.com/ai-chatbot",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-image-generation",
      title: "AI Image Generation Service",
      description: "Professional AI image generation for marketing, design, and content creation with advanced customization options.",
      features: [
        "Multiple AI models (DALL-E, Midjourney, Stable Diffusion)",
        "Custom style training",
        "Bulk generation",
        "Commercial usage rights",
        "API access for developers"
      ],
      pricing: {
        starter: "$99/month",
        professional: "$299/month",
        enterprise: "$999/month"
      },
      icon: <Image className="h-8 w-8 text-purple-500" />,
      category: "Creative AI",
      badge: "New",
      link: "https://ziontechgroup.com/ai-images",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-video-editing",
      title: "AI Video Editing & Enhancement",
      description: "Automated video editing, enhancement, and generation using cutting-edge AI technology for content creators.",
      features: [
        "Auto-caption generation",
        "Background removal",
        "Video upscaling",
        "Content-aware editing",
        "Multi-format export"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$499/month",
        enterprise: "$1,499/month"
      },
      icon: <Video className="h-8 w-8 text-red-500" />,
      category: "Video AI",
      badge: "Featured",
      link: "https://ziontechgroup.com/ai-video",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-code-assistant",
      title: "AI Code Assistant & Generator",
      description: "Intelligent code generation, debugging, and optimization for developers with support for multiple programming languages.",
      features: [
        "Code generation from natural language",
        "Bug detection and fixes",
        "Code optimization suggestions",
        "Multi-language support",
        "IDE integration plugins"
      ],
      pricing: {
        starter: "$49/month",
        professional: "$149/month",
        enterprise: "$399/month"
      },
      icon: <Code className="h-8 w-8 text-green-500" />,
      category: "Development AI",
      badge: "Hot",
      link: "https://ziontechgroup.com/ai-code",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-data-analytics",
      title: "AI-Powered Data Analytics",
      description: "Advanced data analysis and insights using machine learning algorithms for business intelligence and decision making.",
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Custom dashboard creation",
        "Automated reporting",
        "Data visualization tools"
      ],
      pricing: {
        starter: "$399/month",
        professional: "$899/month",
        enterprise: "$2,999/month"
      },
      icon: <BarChart3 className="h-8 w-8 text-orange-500" />,
      category: "Analytics AI",
      badge: "Premium",
      link: "https://ziontechgroup.com/ai-analytics",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-voice-synthesis",
      title: "AI Voice Synthesis & Cloning",
      description: "High-quality voice synthesis and cloning services for content creation, accessibility, and personalized experiences.",
      features: [
        "Natural-sounding voices",
        "Voice cloning technology",
        "Multiple language support",
        "Emotion and tone control",
        "Real-time synthesis"
      ],
      pricing: {
        starter: "$149/month",
        professional: "$399/month",
        enterprise: "$1,199/month"
      },
      icon: <Mic className="h-8 w-8 text-indigo-500" />,
      category: "Voice AI",
      badge: "Advanced",
      link: "https://ziontechgroup.com/ai-voice",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-document-processing",
      title: "AI Document Processing & OCR",
      description: "Intelligent document processing, OCR, and data extraction for businesses with high-volume document workflows.",
      features: [
        "Advanced OCR technology",
        "Data extraction from forms",
        "Document classification",
        "Multi-language support",
        "API integration"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$599/month",
        enterprise: "$1,999/month"
      },
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      category: "Document AI",
      badge: "Enterprise",
      link: "https://ziontechgroup.com/ai-documents",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-security-monitoring",
      title: "AI Security Monitoring & Threat Detection",
      description: "Intelligent security monitoring and threat detection using AI to protect your digital assets and infrastructure.",
      features: [
        "Real-time threat detection",
        "Behavioral analysis",
        "Automated incident response",
        "Compliance reporting",
        "24/7 monitoring"
      ],
      pricing: {
        starter: "$299/month",
        professional: "$799/month",
        enterprise: "$2,499/month"
      },
      icon: <Shield className="h-8 w-8 text-red-600" />,
      category: "Security AI",
      badge: "Critical",
      link: "https://ziontechgroup.com/ai-security",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-process-automation",
      title: "AI Process Automation & RPA",
      description: "Intelligent process automation using AI and RPA to streamline business operations and reduce manual work.",
      features: [
        "Workflow automation",
        "Process optimization",
        "Integration with existing systems",
        "Analytics and reporting",
        "Custom automation scripts"
      ],
      pricing: {
        starter: "$399/month",
        professional: "$999/month",
        enterprise: "$3,999/month"
      },
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      category: "Automation AI",
      badge: "Efficient",
      link: "https://ziontechgroup.com/ai-automation",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-customer-insights",
      title: "AI Customer Insights & Sentiment Analysis",
      description: "Deep customer insights and sentiment analysis using AI to understand customer behavior and improve satisfaction.",
      features: [
        "Sentiment analysis",
        "Customer behavior prediction",
        "Personalization recommendations",
        "Churn prediction",
        "Real-time insights"
      ],
      pricing: {
        starter: "$249/month",
        professional: "$649/month",
        enterprise: "$1,999/month"
      },
      icon: <Users className="h-8 w-8 text-pink-500" />,
      category: "Customer AI",
      badge: "Insightful",
      link: "https://ziontechgroup.com/ai-insights",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-supply-chain",
      title: "AI Supply Chain Optimization",
      description: "Intelligent supply chain optimization using AI to reduce costs, improve efficiency, and predict demand patterns.",
      features: [
        "Demand forecasting",
        "Inventory optimization",
        "Route optimization",
        "Supplier risk assessment",
        "Real-time tracking"
      ],
      pricing: {
        starter: "$599/month",
        professional: "$1,499/month",
        enterprise: "$4,999/month"
      },
      icon: <Network className="h-8 w-8 text-blue-600" />,
      category: "Supply Chain AI",
      badge: "Strategic",
      link: "https://ziontechgroup.com/ai-supply-chain",
      contact: "kleber@ziontechgroup.com"
    },
    {
      id: "ai-quality-assurance",
      title: "AI Quality Assurance & Testing",
      description: "Automated quality assurance and testing using AI to ensure software quality and reduce testing time.",
      features: [
        "Automated test generation",
        "Visual regression testing",
        "Performance testing",
        "Bug prediction",
        "Test coverage analysis"
      ],
      pricing: {
        starter: "$199/month",
        professional: "$499/month",
        enterprise: "$1,499/month"
      },
      icon: <Eye className="h-8 w-8 text-cyan-500" />,
      category: "Testing AI",
      badge: "Reliable",
      link: "https://ziontechgroup.com/ai-testing",
      contact: "kleber@ziontechgroup.com"
    }
  ];

  const categories = [
    "All Services",
    "Conversational AI",
    "Creative AI", 
    "Video AI",
    "Development AI",
    "Analytics AI",
    "Voice AI",
    "Document AI",
    "Security AI",
    "Automation AI",
    "Customer AI",
    "Supply Chain AI",
    "Testing AI"
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All Services");

  const filteredServices = selectedCategory === "All Services" 
    ? aiServices 
    : aiServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue-dark">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent">
            AI Services Hub
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">
            Discover cutting-edge AI solutions designed to transform your business. 
            From chatbots to data analytics, we offer enterprise-grade AI services with transparent pricing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <Brain className="h-5 w-5 mr-2" />
              Explore AI Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2" />
              Contact Sales
            </Button>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.value}
              variant={selectedCategory === category.value ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.value)}
              className={`flex items-center gap-2 ${
                selectedCategory === category.value 
                  ? "bg-zion-purple text-white" 
                  : "border-zion-purple text-zion-purple hover:bg-zion-purple/10"
              }`}
            >
              {category.icon}
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`${
                selectedCategory === category 
                  ? 'bg-zion-purple text-white' 
                  : 'border-zion-purple text-zion-purple hover:bg-zion-purple/10'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} className="group overflow-hidden border-zion-purple/20 bg-zion-slate/50 backdrop-blur-sm hover:border-zion-purple/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/20">
              <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 rounded-lg bg-zion-slate/30 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (
                    <Badge className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white border-0">
                      {service.badge}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl text-white group-hover:text-zion-cyan transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
              
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="text-sm text-zion-slate-light flex items-center">
                        <div className="w-1.5 h-1.5 bg-zion-purple rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-zion-cyan mb-2">Pricing:</h4>
                  <div className="space-y-1">
                    <div className="text-sm text-zion-slate-light">
                      <span className="font-medium">Starter:</span> {service.pricing.starter}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      <span className="font-medium">Professional:</span> {service.pricing.professional}
                    </div>
                    <div className="text-sm text-zion-slate-light">
                      <span className="font-medium">Enterprise:</span> {service.pricing.enterprise}
                    </div>
                  </div>
                </div>
              </CardContent>
              
              <div className="p-6 pt-0 space-y-3">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
                  <Globe className="h-4 w-4 mr-2" />
                  Learn More
                </Button>
                <Button variant="outline" className="w-full border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Contact Sales
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center py-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need a Custom AI Solution?
          </h2>
          <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our expert team can design and implement custom AI solutions tailored to your specific business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-zion-purple hover:bg-zion-purple-light text-white">
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
            Our AI experts are ready to help you implement the perfect AI solution for your business needs. 
            Get in touch today for a personalized consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white">
              <MessageSquare className="h-5 w-5 mr-2" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Code className="h-5 w-5 mr-2" />
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
              <Phone className="h-5 w-5 mr-2" />
              Call +1 302 464 0950
            </Button>
          </div>
          <div className="mt-8 text-zion-slate-light">
            <p>Email: kleber@ziontechgroup.com</p>
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
          </div>
        </div>
      </div>
    </div>
  );
}