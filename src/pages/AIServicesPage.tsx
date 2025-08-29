import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Brain, Database, Zap, Shield, BarChart3, MessageSquare, 
  Code, Globe, Server, Eye, FileText, CheckCircle, Users, 
  Lock, Search, MessageSquare as MessageSquareIcon 
} from 'lucide-react';
import SEO from '@/components/SEO';

const AIServices = [
  {
    title: "AI Strategy Consulting",
    description: "Strategic guidance for implementing AI solutions in your business",
    price: "$2,500 - $15,000",
    features: ["AI readiness assessment", "ROI analysis", "Implementation roadmap", "Team training"],
    category: "Strategy",
    badge: "Popular",
    link: "/request-quote?service=ai-strategy"
  },
  {
    title: "Custom AI Model Development",
    description: "Tailored machine learning models for your specific use case",
    price: "$5,000 - $50,000",
    features: ["Data preprocessing", "Model training", "Performance optimization", "Deployment support"],
    category: "Development",
    badge: "Premium",
    link: "/request-quote?service=custom-ai-models"
  },
  {
    title: "Data Labeling & Annotation",
    description: "High-quality data preparation for machine learning projects",
    price: "$0.50 - $5.00 per item",
    features: ["Image annotation", "Text labeling", "Quality assurance", "Scalable workforce"],
    category: "Data",
    link: "/request-quote?service=data-labeling"
  },
  {
    title: "AI-Powered Analytics",
    description: "Advanced business intelligence with machine learning insights",
    price: "$1,500 - $8,000/month",
    features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "API integration"],
    category: "Analytics",
    badge: "New",
    link: "/request-quote?service=ai-analytics"
  },
  {
    title: "Computer Vision Solutions",
    description: "Image and video analysis for automation and quality control",
    price: "$3,000 - $25,000",
    features: ["Object detection", "Image classification", "Video processing", "Edge deployment"],
    category: "Vision",
    link: "/request-quote?service=computer-vision"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, and language understanding systems",
    price: "$2,000 - $20,000",
    features: ["Sentiment analysis", "Text generation", "Language translation", "Chatbot development"],
    category: "NLP",
    link: "/request-quote?service=nlp"
  },
  {
    title: "AI Ethics & Compliance",
    description: "Ensure your AI systems are fair, transparent, and compliant",
    price: "$1,500 - $10,000",
    features: ["Bias detection", "Explainability", "Privacy compliance", "Audit reports"],
    category: "Compliance",
    link: "/request-quote?service=ai-ethics"
  },
  {
    title: "AI Model Optimization",
    description: "Improve performance and efficiency of existing AI models",
    price: "$1,000 - $15,000",
    features: ["Performance tuning", "Model compression", "Inference optimization", "Cost reduction"],
    category: "Optimization",
    link: "/request-quote?service=model-optimization"
  },
  {
    title: "AI Training & Workshops",
    description: "Custom training programs for your team on AI technologies",
    price: "$500 - $3,000 per person",
    features: ["Hands-on workshops", "Custom curriculum", "Certification", "Ongoing support"],
    category: "Training",
    link: "/request-quote?service=ai-training"
  },
  {
    title: "AI Integration Services",
    description: "Seamlessly integrate AI solutions into existing systems",
    price: "$2,000 - $20,000",
    features: ["API development", "System integration", "Testing", "Maintenance"],
    category: "Integration",
    link: "/request-quote?service=ai-integration"
  },
  {
    title: "AI Security & Testing",
    description: "Comprehensive security assessment and testing for AI systems",
    price: "$1,500 - $12,000",
    features: ["Adversarial testing", "Privacy assessment", "Security auditing", "Compliance verification"],
    category: "Security",
    link: "/request-quote?service=ai-security"
  },
  {
    title: "AI Content Creation",
    description: "Automated content generation and optimization tools",
    price: "$500 - $5,000/month",
    features: ["Text generation", "Content optimization", "SEO enhancement", "Brand consistency"],
    category: "Content",
    link: "/request-quote?service=ai-content"
  }
];

const AIServicesPage: React.FC = () => {
  const categories = [
    { name: "All", value: "all", icon: "Globe" },
    { name: "Strategy", value: "strategy", icon: "CheckCircle" },
    { name: "Development", value: "development", icon: "Code" },
    { name: "Data", value: "data", icon: "Database" },
    { name: "Analytics", value: "analytics", icon: "BarChart3" },
    { name: "Vision", value: "vision", icon: "Eye" },
    { name: "NLP", value: "nlp", icon: "MessageSquare" },
    { name: "Compliance", value: "compliance", icon: "Shield" },
    { name: "Optimization", value: "optimization", icon: "Zap" },
    { name: "Training", value: "training", icon: "Users" },
    { name: "Integration", value: "integration", icon: "Code" },
    { name: "Security", value: "security", icon: "Lock" },
    { name: "Content", value: "content", icon: "FileText" }
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("all");
  
  const filteredServices = selectedCategory === "all" 
    ? AIServices 
    : AIServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      <SEO 
        title="AI Services & Solutions | Zion Tech Group"
        description="Transform your business with cutting-edge artificial intelligence services. From strategy to implementation, we've got you covered."
        keywords="AI services, artificial intelligence, machine learning, AI consulting, AI development"
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            AI Services & Solutions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8"
          >
            Transform your business with cutting-edge artificial intelligence services. 
            From strategy to implementation, we've got you covered.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
              <Search className="h-5 w-5 mr-2"/>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquareIcon className="h-5 w-5 mr-2"/>
              Get Consultation
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive AI services tailored to your business needs
            </p>
          </motion.div>
          
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.value)}
                className={`${
                  selectedCategory === category.value
                    ? "bg-zion-cyan text-white"
                    : "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      {service.badge && (
                        <span className="px-3 py-1 bg-zion-purple text-white text-xs font-semibold rounded-full">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </CardTitle>
                    <p className="text-zion-slate-light text-sm mb-4">
                      {service.description}
                    </p>
                    <div className="text-zion-cyan font-semibold text-lg">
                      {service.price}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                            <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                      <Link to={service.link}>
                        Get Started
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-zion-slate-light mb-8">
              Let's discuss how AI can revolutionize your operations and drive growth
            </p>
            <div className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <Users className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Free Consultation</h3>
                  <p className="text-zion-slate-light mb-4">
                    Schedule a free AI strategy session with our experts
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    Book Consultation
                  </Link>
                </div>
                <div className="text-center">
                  <Code className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-3">Quick Start</h3>
                  <p className="text-zion-slate-light mb-4">
                    Get started with AI in as little as 2 weeks
                  </p>
                  <Link 
                    to="/contact"
                    className="inline-block px-6 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300"
                  >
                    Start Project
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIServicesPage;
