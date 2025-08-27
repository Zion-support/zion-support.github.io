import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
=======
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
import { Link } from 'react-router-dom';
import { Brain, Database, Zap, Shield, BarChart3, MessageSquare, Code, Globe, Server, Eye, FileText, CheckCircle, Users, Lock, Search } from 'lucide-react';
const AIServices = [
    {
        title: "AI Strategy Consulting",
        description: "Strategic guidance for implementing AI solutions in your business",
        price: "$2,500 - $15,000",
        features: ["AI readiness assessment", "ROI analysis", "Implementation roadmap", "Team training"],
        icon: <Brain className="h-8 w-8 text-zion-cyan"/>,
        category: "Strategy",
        badge: "Popular",
        link: "/request-quote?service=ai-strategy"
    },
    {
        title: "Custom AI Model Development",
        description: "Tailored machine learning models for your specific use case",
        price: "$5,000 - $50,000",
        features: ["Data preprocessing", "Model training", "Performance optimization", "Deployment support"],
        icon: <Server className="h-8 w-8 text-zion-purple"/>,
        category: "Development",
        badge: "Premium",
        link: "/request-quote?service=custom-ai-models"
    },
    {
        title: "Data Labeling & Annotation",
        description: "High-quality data preparation for machine learning projects",
        price: "$0.50 - $5.00 per item",
        features: ["Image annotation", "Text labeling", "Quality assurance", "Scalable workforce"],
        icon: <FileText className="h-8 w-8 text-zion-blue"/>,
        category: "Data",
        link: "/request-quote?service=data-labeling"
    },
    {
        title: "AI-Powered Analytics",
        description: "Advanced business intelligence with machine learning insights",
        price: "$1,500 - $8,000/month",
        features: ["Predictive analytics", "Real-time dashboards", "Custom reports", "API integration"],
        icon: <BarChart3 className="h-8 w-8 text-zion-cyan"/>,
        category: "Analytics",
        badge: "New",
        link: "/request-quote?service=ai-analytics"
    },
    {
        title: "Computer Vision Solutions",
        description: "Image and video analysis for automation and quality control",
        price: "$3,000 - $25,000",
        features: ["Object detection", "Image classification", "Video processing", "Edge deployment"],
        icon: <Eye className="h-8 w-8 text-zion-purple"/>,
        category: "Vision",
        link: "/request-quote?service=computer-vision"
    },
    {
        title: "Natural Language Processing",
        description: "Text analysis, chatbots, and language understanding systems",
        price: "$2,000 - $20,000",
        features: ["Sentiment analysis", "Text generation", "Language translation", "Chatbot development"],
        icon: <MessageSquare className="h-8 w-8 text-zion-blue"/>,
        category: "NLP",
        link: "/request-quote?service=nlp"
    },
    {
        title: "AI Ethics & Compliance",
        description: "Ensure your AI systems are fair, transparent, and compliant",
        price: "$1,500 - $10,000",
        features: ["Bias detection", "Explainability", "Privacy compliance", "Audit reports"],
        icon: <Shield className="h-8 w-8 text-zion-cyan"/>,
        category: "Compliance",
        link: "/request-quote?service=ai-ethics"
    },
    {
        title: "AI Model Optimization",
        description: "Improve performance and efficiency of existing AI models",
        price: "$1,000 - $15,000",
        features: ["Performance tuning", "Model compression", "Inference optimization", "Cost reduction"],
        icon: <Zap className="h-8 w-8 text-zion-purple"/>,
        category: "Optimization",
        link: "/request-quote?service=model-optimization"
    },
    {
        title: "AI Training & Workshops",
        description: "Custom training programs for your team on AI technologies",
        price: "$500 - $3,000 per person",
        features: ["Hands-on workshops", "Custom curriculum", "Certification", "Ongoing support"],
        icon: <Users className="h-8 w-8 text-zion-blue"/>,
        category: "Training",
        link: "/request-quote?service=ai-training"
    },
    {
        title: "AI Integration Services",
        description: "Seamlessly integrate AI solutions into existing systems",
        price: "$2,000 - $20,000",
        features: ["API development", "System integration", "Testing", "Maintenance"],
        icon: <Code className="h-8 w-8 text-zion-cyan"/>,
        category: "Integration",
        link: "/request-quote?service=ai-integration"
    },
    {
        title: "AI Security & Testing",
        description: "Comprehensive security testing for AI systems",
        price: "$1,500 - $12,000",
        features: ["Adversarial testing", "Vulnerability assessment", "Security hardening", "Compliance checks"],
        icon: <Lock className="h-8 w-8 text-zion-purple"/>,
        category: "Security",
        link: "/request-quote?service=ai-security"
    },
    {
        title: "AI Content Generation",
        description: "Automated content creation for marketing and communication",
        price: "$500 - $5,000/month",
        features: ["Blog posts", "Social media content", "Product descriptions", "Multilingual support"],
        icon: <FileText className="h-8 w-8 text-zion-blue"/>,
        category: "Content",
        link: "/request-quote?service=ai-content"
    }
];
const categories = [
<<<<<<< HEAD
const AIServicesPage: React.FC = () => {
  const aiServices = [
    {
      id: 1,
      title: 'Machine Learning Development',
      description: 'Custom ML models tailored to your business needs',
      icon: Brain,
      features: ['Predictive Analytics', 'Pattern Recognition', 'Automated Decision Making'],
      useCases: ['Customer Segmentation', 'Risk Assessment', 'Demand Forecasting'],
      pricing: 'Starting at $15,000'
    },
    {
      id: 2,
      title: 'Natural Language Processing',
      description: 'Advanced text and speech processing solutions',
      icon: MessageSquare,
      features: ['Text Analysis', 'Sentiment Analysis', 'Language Translation'],
      useCases: ['Chatbots', 'Document Processing', 'Content Moderation'],
      pricing: 'Starting at $12,000'
    },
    {
      id: 3,
      title: 'Computer Vision',
      description: 'Image and video analysis for automation',
      icon: Eye,
      features: ['Object Detection', 'Image Classification', 'Facial Recognition'],
      useCases: ['Quality Control', 'Security Systems', 'Medical Imaging'],
      pricing: 'Starting at $18,000'
    },
    {
      id: 4,
      title: 'Predictive Analytics',
      description: 'Data-driven insights for strategic decision making',
      icon: BarChart3,
      features: ['Trend Analysis', 'Risk Modeling', 'Performance Optimization'],
      useCases: ['Financial Planning', 'Inventory Management', 'Maintenance Scheduling'],
      pricing: 'Starting at $10,000'
    }
  ];

  const aiSolutions = [
    {
      title: 'AI-Powered Chatbots',
      description: 'Intelligent customer service automation',
      benefits: ['24/7 Availability', 'Multi-language Support', 'Seamless Integration']
    },
    {
      title: 'Intelligent Document Processing',
      description: 'Automated data extraction and analysis',
      benefits: ['Faster Processing', 'Reduced Errors', 'Cost Savings']
    },
    {
      title: 'Predictive Maintenance',
      description: 'Prevent equipment failures with AI insights',
      benefits: ['Reduced Downtime', 'Lower Costs', 'Improved Safety']
    },
    {
      title: 'AI-Driven Marketing',
      description: 'Personalized campaigns and customer insights',
      benefits: ['Higher Conversion', 'Better Targeting', 'ROI Optimization']
    }
  ];

  const caseStudies = [
    {
      company: 'TechCorp Industries',
      industry: 'Manufacturing',
      challenge: 'Quality control inefficiencies',
      solution: 'Computer vision system for defect detection',
      results: ['99.2% accuracy', '40% faster inspection', '30% cost reduction']
    },
    {
      company: 'Global Finance Ltd',
      industry: 'Financial Services',
      challenge: 'Fraud detection complexity',
      solution: 'ML-powered risk assessment',
      results: ['95% fraud detection rate', '60% faster processing', '25% false positive reduction']
    },
    {
      company: 'HealthTech Solutions',
      industry: 'Healthcare',
      challenge: 'Patient data analysis',
      solution: 'NLP for medical records',
      results: ['80% faster diagnosis', 'Improved accuracy', 'Better patient outcomes']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light">
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Brain className="w-20 h-20 text-zion-cyan mx-auto mb-8" />
              <h1 className="text-5xl md:text-7xl font-bold mb-8">
                AI <span className="bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                  Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto">
                Transform your business with cutting-edge artificial intelligence solutions. 
                From machine learning to computer vision, we bring the future of technology to your doorstep.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5 inline" />
                </Link>
                <button className="px-8 py-4 bg-zion-slate-dark/50 border border-zion-cyan/20 text-zion-cyan font-semibold rounded-xl hover:bg-zion-slate-dark/70 transition-all duration-300">
                  <Play className="w-5 h-5 inline mr-2" />
                  Watch Demo
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Services Grid */}
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
              Our <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">AI Solutions</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Comprehensive artificial intelligence services designed to drive innovation and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-zion-slate-light">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <CheckCircle className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Use Cases:</h4>
                    <ul className="space-y-1">
                      {service.useCases.map((useCase, useCaseIndex) => (
                        <li key={useCaseIndex} className="flex items-center gap-2 text-zion-slate-light">
                          <Target className="w-4 h-4 text-zion-purple" />
                          <span className="text-sm">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-zion-cyan font-semibold">{service.pricing}</span>
                  <Link 
                    to="/contact"
                    className="text-zion-cyan hover:text-zion-blue transition-colors font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 inline" />
                  </Link>
                </div>
              </motion.div>
            ))}
=======
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
    { name: "All", value: "all", icon: <Globe className="h-4 w-4"/> },
    { name: "Strategy", value: "strategy", icon: <CheckCircle className="h-4 w-4"/> },
    { name: "Development", value: "development", icon: <Code className="h-4 w-4"/> },
    { name: "Data", value: "data", icon: <Database className="h-4 w-4"/> },
    { name: "Analytics", value: "analytics", icon: <BarChart3 className="h-4 w-4"/> },
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
    const [selectedCategory, setSelectedCategory] = React.useState("all");
    const filteredServices = selectedCategory === "all"
        ? AIServices
        : AIServices.filter(service => service.category.toLowerCase() === selectedCategory);
    return (<div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-blue-dark to-zion-slate">
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
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center gap-2 text-zion-slate-light">
                        <CheckCircle className="w-4 h-4 text-zion-cyan" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
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
              Success <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Real-world examples of how our AI solutions transform businesses
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-zion-slate-dark/50 backdrop-blur-xl border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{study.company}</h3>
                  <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                    {study.industry}
                  </span>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (<Button key={category.value} variant={selectedCategory === category.value ? "default" : "outline"} onClick={() => setSelectedCategory(category.value)} className={`flex items-center gap-2 ${selectedCategory === category.value
                ? "bg-zion-purple text-white"
                : "border-zion-purple text-zion-purple hover:bg-zion-purple/10"}`}>
              {category.icon}
              {category.name}
            </Button>))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredServices.map((service, index) => (<Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-zion-purple/20 hover:border-zion-purple/50 bg-zion-blue-dark/50 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-3">
                  <div className="p-3 rounded-lg bg-zion-purple/10 group-hover:bg-zion-purple/20 transition-colors">
                    {service.icon}
                  </div>
                  {service.badge && (<Badge variant="secondary" className="bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30">
                      {service.badge}
                    </Badge>)}
                </div>

                {/* Service Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300">
                  {service.name}
                </h3>
                <p className="text-zion-slate-light mb-4 line-clamp-2">
                  {service.description}
<<<<<<< HEAD
                </p>

                {/* Pricing */}
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-zion-cyan">{service.price}</span>
                  <span className="text-zion-slate-light ml-1">{service.period}</span>
=======
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-4">
                  <p className="text-2xl font-bold text-zion-cyan mb-2">{service.price}</p>
                  <p className="text-sm text-zion-slate-light">Starting price</p>
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
                </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-center gap-2 text-zion-slate-light text-sm">
                          <Star className="w-3 h-3 text-zion-cyan" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our AI Services */}
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
              Why Choose <span className="bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">Our AI Services</span>
            </h2>
            <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
              Expertise, innovation, and proven results in artificial intelligence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Expert Team', description: 'Certified AI specialists with years of experience' },
              { icon: Rocket, title: 'Fast Implementation', description: 'Quick deployment and time-to-value' },
              { icon: Shield, title: 'Enterprise Security', description: 'Bank-level security and compliance' },
              { icon: TrendingUp, title: 'Proven Results', description: 'Track record of successful AI implementations' }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zion-slate-light">{feature.description}</p>
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
                  <Clock className="w-16 h-16 text-zion-cyan mx-auto mb-4" />
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
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center text-sm text-zion-slate-light">
                      <div className="w-2 h-2 bg-zion-cyan rounded-full mr-3"></div>
                      {feature}
                    </li>))}
                </ul>
              </CardContent>
              <div className="px-6 pb-6">
                <Button className="w-full bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white">
                  <Link to={service.link}>
                    Get Started
                  </Link>
                </Button>
              </div>
            </Card>))}
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
              <MessageSquare className="h-5 w-5 mr-2"/>
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10">
              <Code className="h-5 w-5 mr-2"/>
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>);
}
<<<<<<< HEAD

export default AIServicesPage;
=======
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
