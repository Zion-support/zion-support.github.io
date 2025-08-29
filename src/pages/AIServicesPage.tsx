import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  MessageSquare, 
  ArrowRight, 
  CheckCircle, 
  Code, 
  Database, 
  BarChart3, 
  Eye, 
  Shield, 
  Zap, 
  Users, 
  Lock, 
  FileText,
  Globe,
  Brain,
  Target,
  TrendingUp,
  Rocket,
  Cpu,
  Network,
  Cloud,
  Server,
  Monitor,
  Smartphone,
  Tablet,
  Laptop,
  Settings,
  HardDrive,
  BarChart3 as BarChart3Icon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SEO } from '@/components/SEO';

// AI Services Data
const AIServices = [
  {
    id: 1,
    title: "AI Strategy Consulting",
    description: "Develop comprehensive AI roadmaps aligned with business objectives",
    category: "strategy",
    icon: Brain,
    features: ["Business Impact Analysis", "Technology Assessment", "Implementation Roadmap", "ROI Projections"],
    pricing: "$5,000 - $25,000",
    duration: "2-8 weeks"
  },
  {
    id: 2,
    title: "AI Development & Integration",
    description: "Custom AI solution development and seamless system integration",
    category: "development",
    icon: Code,
    features: ["Custom AI Models", "API Development", "System Integration", "Testing & Deployment"],
    pricing: "$15,000 - $100,000+",
    duration: "8-24 weeks"
  },
  {
    id: 3,
    title: "Data Engineering & Analytics",
    description: "Build robust data pipelines and advanced analytics solutions",
    category: "data",
    icon: Database,
    features: ["Data Pipeline Design", "ETL Development", "Data Warehousing", "Real-time Analytics"],
    pricing: "$10,000 - $75,000",
    duration: "6-20 weeks"
  },
  {
    id: 4,
    title: "Predictive Analytics",
    description: "Transform data into actionable insights with predictive modeling",
    category: "analytics",
    icon: BarChart3Icon,
    features: ["Statistical Modeling", "Machine Learning", "Forecasting", "Business Intelligence"],
    pricing: "$8,000 - $50,000",
    duration: "4-16 weeks"
  },
  {
    id: 5,
    title: "Computer Vision Solutions",
    description: "Advanced image and video analysis for automation and insights",
    category: "vision",
    icon: Eye,
    features: ["Object Detection", "Image Classification", "Video Analysis", "Quality Control"],
    pricing: "$12,000 - $80,000",
    duration: "6-20 weeks"
  },
  {
    id: 6,
    title: "Natural Language Processing",
    description: "Text analysis, chatbots, and language understanding systems",
    category: "nlp",
    icon: MessageSquare,
    features: ["Text Analysis", "Chatbot Development", "Sentiment Analysis", "Language Models"],
    pricing: "$8,000 - $60,000",
    duration: "4-18 weeks"
  },
  {
    id: 7,
    title: "AI Compliance & Governance",
    description: "Ensure AI systems meet regulatory and ethical requirements",
    category: "compliance",
    icon: Shield,
    features: ["Regulatory Compliance", "Ethical AI Guidelines", "Risk Assessment", "Audit Trails"],
    pricing: "$6,000 - $40,000",
    duration: "3-12 weeks"
  },
  {
    id: 8,
    title: "AI Performance Optimization",
    description: "Optimize existing AI systems for better performance and efficiency",
    category: "optimization",
    icon: Zap,
    features: ["Performance Tuning", "Model Optimization", "Scalability", "Cost Reduction"],
    pricing: "$5,000 - $35,000",
    duration: "2-10 weeks"
  },
  {
    id: 9,
    title: "AI Training & Workshops",
    description: "Empower your team with AI knowledge and practical skills",
    category: "training",
    icon: Users,
    features: ["Custom Training Programs", "Hands-on Workshops", "Best Practices", "Ongoing Support"],
    pricing: "$3,000 - $20,000",
    duration: "1-5 days"
  },
  {
    id: 10,
    title: "AI System Integration",
    description: "Seamlessly integrate AI capabilities into existing workflows",
    category: "integration",
    icon: Network,
    features: ["API Integration", "Workflow Automation", "Legacy System Support", "Real-time Processing"],
    pricing: "$10,000 - $60,000",
    duration: "4-16 weeks"
  },
  {
    id: 11,
    title: "AI Security & Privacy",
    description: "Protect AI systems and data with enterprise-grade security",
    category: "security",
    icon: Lock,
    features: ["Data Encryption", "Access Control", "Threat Detection", "Privacy Protection"],
    pricing: "$8,000 - $50,000",
    duration: "4-14 weeks"
  },
  {
    id: 12,
    title: "AI Content Generation",
    description: "Automate content creation with intelligent AI systems",
    category: "content",
    icon: FileText,
    features: ["Text Generation", "Content Optimization", "Multilingual Support", "Brand Consistency"],
    pricing: "$6,000 - $40,000",
    duration: "3-12 weeks"
  }
];

// AI Solutions Data
const aiSolutions = [
  {
    title: "Predictive Analytics Platform",
    description: "Advanced analytics platform that predicts trends and identifies opportunities",
    benefits: ["30% improvement in decision accuracy", "Real-time insights", "Automated reporting", "Scalable architecture"]
  },
  {
    title: "Intelligent Process Automation",
    description: "AI-powered automation that streamlines business processes",
    benefits: ["50% reduction in manual tasks", "Improved efficiency", "Error reduction", "Cost savings"]
  },
  {
    title: "Customer Intelligence System",
    description: "Comprehensive customer analytics and personalization platform",
    benefits: ["Enhanced customer experience", "Increased retention", "Personalized marketing", "Data-driven insights"]
  },
  {
    title: "AI-Powered Quality Control",
    description: "Computer vision system for automated quality inspection",
    benefits: ["99.9% detection accuracy", "24/7 operation", "Cost reduction", "Quality improvement"]
  }
];

// Case Studies Data
const caseStudies = [
  {
    title: "Manufacturing Efficiency",
    description: "AI-powered predictive maintenance reduced downtime by 40%",
    industry: "Manufacturing",
    results: ["40% downtime reduction", "25% cost savings", "Improved safety"]
  },
  {
    title: "Retail Optimization",
    description: "Machine learning algorithms optimized inventory management",
    industry: "Retail",
    results: ["30% inventory reduction", "15% sales increase", "Better customer satisfaction"]
  },
  {
    title: "Healthcare Diagnostics",
    description: "AI diagnostic tools improved accuracy by 35%",
    industry: "Healthcare",
    results: ["35% accuracy improvement", "Faster diagnosis", "Reduced costs"]
  }
];

// Filter categories
const filterCategories = [
  { name: "All", value: "all", icon: <Globe className="h-4 w-4"/> },
  { name: "Strategy", value: "strategy", icon: <CheckCircle className="h-4 w-4"/> },
  { name: "Development", value: "development", icon: <Code className="h-4 w-4"/> },
  { name: "Data", value: "data", icon: <Database className="h-4 w-4"/> },
  { name: "Analytics", value: "analytics", icon: <BarChart3Icon className="h-4 w-4"/> },
  { name: "Vision", value: "vision", icon: <Eye className="h-4 w-4"/> },
  { name: "NLP", value: "nlp", icon: <MessageSquare className="h-4 w-4"/> },
  { name: "Compliance", value: "compliance", icon: <Shield className="h-4 w-4"/> },
  { name: "Optimization", value: "optimization", icon: <Zap className="h-4 w-4"/> },
  { name: "Training", value: "training", icon: <Users className="h-4 w-4"/> },
  { name: "Integration", value: "integration", icon: <Code className="h-4 w-4"/> },
  { name: "Security", value: "security", icon: <Lock className="h-4 w-4"/> },
  { name: "Content", value: "content", icon: <FileText className="h-4 w-4"/> }
];

export default function AIServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const filteredServices = selectedCategory === "all"
    ? AIServices
    : AIServices.filter(service => service.category.toLowerCase() === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
      <SEO 
        title="AI Services & Solutions - Zion Tech Group"
        description="Transform your business with cutting-edge artificial intelligence services. From strategy to implementation, we've got you covered."
        keywords={['AI services', 'artificial intelligence', 'machine learning', 'AI consulting', 'AI development', 'AI integration']}
      />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-zion-purple-dark via-zion-purple to-zion-cyan py-20">
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
              <Search className="h-5 w-5 mr-2"/>
              Explore Services
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <MessageSquare className="h-5 w-5 mr-2"/>
              Get Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filterCategories.map((category) => (
              <Button
                key={category.value}
                variant={selectedCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.value)}
                className="flex items-center gap-2"
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Ready-to-deploy AI solutions that deliver immediate business value
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zion-slate-light mb-6">{solution.description}</p>
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {solution.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-zion-slate-dark/30">
        <div className="container mx-auto px-4">
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
              Comprehensive AI services to accelerate your digital transformation
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-zion-slate-dark/50 border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan">
                        {service.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-zion-slate-light">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-white mb-2">Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                              <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center pt-4 border-t border-zion-slate-light/20">
                        <div className="text-sm text-zion-slate-light">
                          <div className="font-semibold">{service.pricing}</div>
                          <div>{service.duration}</div>
                        </div>
                        <Button size="sm" className="bg-zion-cyan hover:bg-zion-cyan-light">
                          Learn More
                          <ArrowRight className="ml-1 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Success <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real-world results from our AI implementations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <Badge variant="outline" className="border-zion-cyan/30 text-zion-cyan mb-3">
                    {study.industry}
                  </Badge>
                  <h3 className="text-2xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-zion-slate-light">{study.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center text-sm text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mr-2" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-zion-purple-dark to-zion-cyan-dark">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-zion-cyan-light max-w-3xl mx-auto mb-8">
              Let's discuss how artificial intelligence can drive growth, efficiency, and innovation in your organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-slate font-semibold">
                <MessageSquare className="h-5 w-5 mr-2"/>
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
                <Search className="h-5 w-5 mr-2"/>
                Explore More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
