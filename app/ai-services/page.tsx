
<<<<<<< HEAD
const AiServicesPage: React.FC = () => {
  const services = [{
      icon: Brain,''
      title: 'AI Consulting',''
      description: 'Strategic AI consulting to help you identify opportunities and develop AI roadmaps.',''
      color: 'from-purple-500 to-pink-500';}''
    },
    {
      icon: BarChart3,''
      title: 'AI Analytics',''
      description: 'Advanced analytics solutions powered by machine learning and AI algorithms.',''
      color: 'from-blue-500 to-cyan-500';}''
    },
    {
      icon: Zap,''
      title: 'AI Automation',''
      description: 'Intelligent automation solutions to streamline your business processes.',''
      color: 'from-green-500 to-emerald-500';}''
    },
    {
      icon: FileText,''
      title: 'AI Content Generation',''
      description: 'AI-powered content creation for marketing, documentation, and communication.',''
      color: 'from-orange-500 to-red-500';}''
    },
    {
      icon: MessageSquare,''
      title: 'AI Customer Service',''
      description: 'Intelligent chatbots and customer service solutions powered by AI.',''
      color: 'from-indigo-500 to-purple-500';}''
    },
    {
    }
  ];
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",""
      company: "MedTech Solutions",""
      role: "CTO",""
      content: "Zion's AI healthcare solutions have revolutionized our diagnostic capabilities. We've seen a 40% improvement in accuracy.",'"'"'"'"'"
      rating: 5
    },
    {
      name: "Michael Chen",""
      company: "E-commerce Plus",""
      role: "CEO",""
      content: "The AI automation tools have transformed our operations. We've reduced manual work by 80% and increased productivity significantly.",'"'"'"'"'"
      rating: 5
    },
    {
      name: "Emily Rodriguez",""
      company: "FinanceFlow",""
      role: "Head of Analytics",""
      content: "Their AI analytics platform has given us insights we never had before. Our decision-making process is now data-driven and highly effective.",""
      rating: 5
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">""
      <Helmet>
        <title>AI Services - Comprehensive AI Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive AI services including analytics, automation, content generation, customer service, marketing, and healthcare solutions." />""
        <meta name="keywords" content="AI services, artificial intelligence, machine learning, AI analytics, AI automation, AI content generation, AI customer service, AI marketing, AI healthcare" />""
        <meta name="canonical" content="https://ziontechgroup.com/ai-services" />""
      </Helmet>
      <FuturisticBackground>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">;""
          {/* Hero Section */}
          <section className="relative py-20 px-4">;""
            <div className="max-w-7xl mx-auto text-center">;""
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">;""
                AI;
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;""
                  Services;
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">;""
                Transform your business with our comprehensive AI services.;
                From analytics to automation, we provide cutting-edge AI solutions.;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                  Get Started;
                  <Right className="w-5 h-5 ml-2 inline" />;""
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                  Learn More;
                </button>
              </div>
            </div>
          </section>
          {/* Services Grid */}
          <section className="py-20 px-4">;""
            <div className="max-w-7xl mx-auto">;""
              <h2 className="text-4xl font-bold text-white text-center mb-16">;""
                Our AI Services;
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;""
                {services.map((service, _index) => (}
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group">;""
                    <div className={`w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      aria-hidden="true";""
                    >;
                      <service.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />;""
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 text-center">{service.title}</h3>;""
                    <p className="text-gray-300 text-sm text-center">{service.description}</p>;""
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Testimonials Section */}
          <section className="py-20 px-4 bg-slate-800/30">;""
            <div className="max-w-7xl mx-auto">;""
              <h2 className="text-4xl font-bold text-white text-center mb-16">;""
                What Our Clients Say;
              </h2>
              <div className="grid md:grid-cols-3 gap-8">;""
                {testimonials.map((testimonial, _index) => (}
                  <div key={_index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">;""
                    <div className="flex items-center mb-4">;""
                      {[...Array(testimonial.rating)].map((_, i) => (}
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />;""
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>;""
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>;""
                      <p className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</p>;""
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* CTA Section */}
          <section className="py-20 px-4">;""
            <div className="max-w-4xl mx-auto text-center">;""
              <h2 className="text-4xl font-bold text-white mb-6">;""
                Ready to Transform Your Business with AI?;
              </h2>
              <p className="text-xl text-gray-300 mb-8">;""
                Join hundreds of companies already using our AI services to drive innovation and growth.;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;""
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25">;""
                  Start Your AI Journey;
                  <Right className="w-5 h-5 ml-2 inline" />;""
                </button>
                <button className="px-8 py-4 border border-cyan-500/30 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-500/10 transition-all duration-300">;""
                  Schedule Consultation;
                </button>
              </div>
            </div>
          </section>
        </div>
      </FuturisticBackground>
    </>
  );
};
const page = React.lazy(() => import('./page'));''
export default page;
=======
import React from "react",
      import { Helmet } from "react-helmet-async",
      export default function AIServices() {}
  const aiServices = [
    {}
      id: "ai-analytics-dashboard-pro",
      name: "AI Analytics Dashboard Pro",
      description: "Advanced AI-powered business intelligence platform with predictive analytics, real-time insights, and automated reporting",
      price: "From $2,500/month",
      icon: <className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: [
        "Real-time predictive analytics",
        "Machine learning insights",
        "Automated report generation",
        "Custom dashboard creation",
        "Data visualization tools",
        "API integration"
      ],
      benefits: [
        "Increase decision-making speed by 300%",
        "Reduce manual reporting by 90%",
        "Improve data accuracy by 95%",
        "Real-time business insights"
      ]
    },
    {}
      id: "ai-customer-service-pro",
      name: "AI Customer Service Pro",
      description: "Intelligent customer support system with natural language processing, automated responses, and 24/7 availability",
      price: "From $1,800/month",
      icon: <MessageSquare className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Automated ticket routing",
        "Sentiment analysis",
        "Knowledge base integration",
        "Human handoff capability"
      ],
      benefits: [
        "Reduce response time by 80%",
        "Handle 10x more inquiries",
        "Improve customer satisfaction by 40%",
        "24/7 availability"
      ]
    },
    {}
      id: "ai-content-generator-pro",
      name: "AI Content Generator Pro",
      description: "Advanced content creation platform with AI writing, image generation, and multi-format output capabilities",
      price: "From $2,200/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-powered writing",
        "Image generation",
        "Content optimization",
        "SEO integration",
        "Multi-format output",
        "Brand voice customization"
      ],
      benefits: [
        "Increase content production by 500%",
        "Reduce content costs by 70%",
        "Improve SEO performance by 60%",
        "Maintain consistent brand voice"
      ]
    }
  ],
      return ()
    <>{}</>
      <Helmet>
        <title>AI Services - Zion Tech Group | Advanced AI Solutions</title>
        <metaname="description">
          content="Transform your business with our comprehensive AI services. From machine learning to natural language processing, we deliver cutting-edge AI solutions."
        />
        <metaname="keywords">
          content="AI services, artificial intelligence, machine learning, NLP, computer vision, AI consulting, AI development"
        />
      </Helmet>

<<<<<<< HEAD
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                  AI Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to transform your business. 
                From machine learning to natural language processing, we provide cutting-edge AI solutions.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">35+ AI services</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">20,000+ models trained</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">99.9% accuracy rate</span>
                </div>
                <div className="flex items-center text-green-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span className="text-sm">24/7 AI monitoring</span>
                </div>
              </div>
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Users, Award } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import ResponsiveGrid from '../components/ResponsiveGrid';

const AIServicesPage = () => {
  const services = [
    {
      id: "ai-analytics",
      name: "AI Analytics",
      description: "Advanced data analytics powered by artificial intelligence for deeper insights and better decision making",
      features: [
        "Predictive analytics",
        "Real-time data processing",
        "Automated reporting",
        "Custom dashboards"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      href: "/ai-analytics",
      featured: true
    },
    {
      id: "ai-automation",
      name: "AI Automation",
      description: "Intelligent automation solutions that streamline workflows and reduce manual tasks",
      features: [
        "Process automation",
        "Workflow optimization",
        "Task scheduling",
        "Error reduction"
      ],
      icon: <Zap className="w-8 h-8" />,
      href: "/ai-automation",
      featured: true
    },
    {
      id: "ai-business-intelligence",
      name: "AI Business Intelligence",
      description: "Transform raw data into actionable business insights with AI-powered analytics",
      features: [
        "Data visualization",
        "Trend analysis",
        "Performance metrics",
        "Strategic planning"
      ],
      icon: <Brain className="w-8 h-8" />,
      href: "/ai-business-intelligence",
      featured: true
    },
    {
      id: "ai-content-generation",
      name: "AI Content Generation",
      description: "Create high-quality content at scale with AI-powered content generation tools",
      features: [
        "Automated content creation",
        "SEO optimization",
        "Multi-language support",
        "Brand consistency"
      ],
      icon: <Users className="w-8 h-8" />,
      href: "/ai-content-generation",
      featured: false
    },
    {
      id: "ai-customer-service",
      name: "AI Customer Service",
      description: "Enhance customer experience with intelligent chatbots and automated support systems",
      features: [
        "24/7 customer support",
        "Natural language processing",
        "Sentiment analysis",
        "Escalation management"
      ],
      icon: <Award className="w-8 h-8" />,
      href: "/ai-customer-service",
      featured: false
    },
    {
      id: "ai-cybersecurity",
      name: "AI Cybersecurity",
      description: "Advanced threat detection and prevention using artificial intelligence",
      features: [
        "Threat detection",
        "Anomaly detection",
        "Automated response",
        "Security monitoring"
      ],
      icon: <Shield className="w-8 h-8" />,
      href: "/ai-cybersecurity",
      featured: true
    }
  ];

  const stats = [
    { label: "AI Solutions Deployed", value: "500+", icon: <Brain className="w-6 h-6" /> },
    { label: "Client Satisfaction", value: "98%", icon: <Star className="w-6 h-6" /> },
    { label: "Process Automation", value: "85%", icon: <Zap className="w-6 h-6" /> },
    { label: "Cost Reduction", value: "40%", icon: <BarChart3 className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="AI Services - Zion Tech Group | Artificial Intelligence Solutions"
        description="Comprehensive AI services including analytics, automation, business intelligence, and cybersecurity. Transform your business with cutting-edge artificial intelligence solutions."
        keywords="AI services, artificial intelligence, machine learning, automation, analytics, business intelligence, cybersecurity, AI solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
=======
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
>>>>>>> main
              AI Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your business with our comprehensive AI services. From machine learning to 
              natural language processing, we deliver cutting-edge AI solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {aiServices.map((service) => ()}
              <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                  {service.icon}
                </div>
<<<<<<< HEAD
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.href}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </FuturisticCard>
            ))}
          </ResponsiveGrid>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <FuturisticCard className="text-center p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let our AI experts help you identify opportunities and implement solutions that drive real results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </FuturisticButton>
              <FuturisticButton
                href="/demo"
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
              >
                Schedule a Demo
              </FuturisticButton>
            </div>
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart3, Cloud, Code, Database, Mail, Users, Clock, DollarSign, Globe, Monitor } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
          </FuturisticCard>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

const AIServicesPage = () => {
  const services = [
    {
      id: 'ai-neural-interface',
      title: 'AI Neural Interface',
      description: 'Revolutionary brain-computer interface for thought-to-text conversion and mind control with 99.7% accuracy.',
      icon: Brain,
      features: ['Thought-to-Text Conversion', 'Mind Control Interface', 'Neural Pattern Recognition', 'Real-time Processing'],
      price: 'Starting at $199/month',
      category: 'Neural AI',
      rating: 4.9,
      reviews: 1247,
      featured: true
    },
    {
      id: 'ai-quantum-computing',
      title: 'AI Quantum Computing',
      description: 'Quantum-powered AI solutions for complex problem solving and optimization with exponential speed improvements.',
      icon: Zap,
      features: ['Quantum Algorithms', 'Exponential Speed', 'Complex Optimization', 'Quantum Machine Learning'],
      price: 'Starting at $999/month',
      category: 'Quantum AI',
      rating: 4.9,
      reviews: 423,
      featured: true
    },
    {
      id: 'ai-holographic-workspace',
      title: 'AI Holographic Workspace',
      description: '3D holographic interface for immersive remote collaboration and data visualization.',
      icon: Monitor,
      features: ['3D Holographic Display', 'Remote Collaboration', 'Data Visualization', 'Gesture Control'],
      price: 'Starting at $399/month',
      category: 'Immersive AI',
      rating: 4.8,
      reviews: 743,
      featured: true
    },
    {
      id: 'ai-climate-prediction',
      title: 'AI Climate Prediction Engine',
      description: 'Advanced climate modeling with 98.5% accuracy for weather and environmental forecasting.',
      icon: Globe,
      features: ['Climate Modeling', 'Weather Prediction', 'Environmental Analysis', 'Long-term Forecasting'],
      price: 'Starting at $299/month',
      category: 'Environmental AI',
      rating: 4.7,
      reviews: 234,
      featured: true
    },
    {
      id: 'ai-drug-discovery',
      title: 'AI Drug Discovery Pro',
      description: 'Accelerated pharmaceutical research with AI-powered molecular analysis and drug design.',
      icon: BarChart3,
      features: ['Molecular Analysis', 'Drug Design', 'Clinical Trial Optimization', 'Side Effect Prediction'],
      price: 'Starting at $999/month',
      category: 'Pharmaceutical AI',
      rating: 4.9,
      reviews: 156,
      featured: true
    },
    {
      id: 'ai-space-optimization',
      title: 'AI Space Mission Optimizer',
      description: 'Advanced space mission optimization with 99.9% trajectory accuracy for aerospace companies.',
      icon: Globe,
      features: ['Trajectory Optimization', 'Mission Planning', 'Risk Analysis', 'Fuel Efficiency'],
      price: 'Starting at $499/month',
      category: 'Aerospace AI',
      rating: 4.9,
      reviews: 423,
      featured: true
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Pro',
      description: 'Advanced analytics powered by artificial intelligence for data-driven insights and predictions.',
      icon: BarChart3,
      features: ['Predictive Analytics', 'Real-time Insights', 'Custom Dashboards', 'Machine Learning Models'],
      price: 'Starting at $299/month',
      category: 'Business AI',
      rating: 4.8,
      reviews: 1156,
      featured: false
    },
    {
      id: 'ai-content-generation',
      title: 'AI Content Generation Studio',
      description: 'Automated content creation using cutting-edge AI technology for all media types.',
      icon: Code,
      features: ['Blog Posts', 'Social Media', 'Marketing Copy', 'Video Scripts'],
      price: 'Starting at $199/month',
      category: 'Content AI',
      rating: 4.7,
      reviews: 892,
      featured: false
    },
    {
      id: 'ai-customer-support',
      title: 'AI Customer Support Pro',
      description: 'Intelligent chatbots and automated customer service solutions with human-like interactions.',
      icon: Users,
      features: ['24/7 Support', 'Multi-language', 'Smart Routing', 'Emotion Recognition'],
      price: 'Starting at $399/month',
      category: 'Customer AI',
      rating: 4.8,
      reviews: 1247,
      featured: false
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'AI-powered security solutions to protect your digital assets with advanced threat detection.',
      icon: Shield,
      features: ['Threat Detection', 'Automated Response', 'Risk Assessment', 'Behavioral Analysis'],
      price: 'Starting at $599/month',
      category: 'Security AI',
      rating: 4.9,
      reviews: 1156,
      featured: false
    },
    {
      id: 'ai-data-analytics',
      title: 'AI Data Analytics Pro',
      description: 'Transform raw data into actionable business intelligence with advanced AI algorithms.',
      icon: Database,
      features: ['Data Mining', 'Pattern Recognition', 'Trend Analysis', 'Predictive Modeling'],
      price: 'Starting at $349/month',
      category: 'Data AI',
      rating: 4.8,
      reviews: 743,
      featured: false
    },
    {
      id: 'ai-document-processing',
      title: 'AI Document Intelligence',
      description: 'Automated document analysis and processing solutions with advanced OCR and NLP.',
      icon: Mail,
      features: ['OCR Technology', 'Data Extraction', 'Automated Workflows', 'Document Classification'],
      price: 'Starting at $249/month',
      category: 'Document AI',
      rating: 4.7,
      reviews: 567,
      featured: false
    }
  ];

  return (
    <div className="min-h-screen">
      <EnhancedSEO 
        title="AI Services - Zion Tech Group"
        description="Comprehensive AI services including analytics, content generation, customer support, cybersecurity, and data processing solutions."
        keywords="AI services, artificial intelligence, machine learning, analytics, automation, cybersecurity, data processing"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Harness the power of artificial intelligence to transform your business operations and drive innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo" 
              className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-blue-500 transition-colors p-6">
                <div className="flex items-center justify-between mb-4">
                  <IconComponent className="w-12 h-12 text-blue-400" />
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
=======
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{service.name}</h3>
>>>>>>> main
                <p className="text-gray-300 mb-4">{service.description}</p>
                <p className="text-lg font-semibold text-green-400 mb-4">{service.price}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Features:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.features.map((feature, index) => ()}
                      <li key={index}>• {feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-2">Benefits:</h4>
                  <ul className="text-sm text-gray-400 space-y-1">
                    {service.benefits.map((benefit, index) => ()}
                      <li key={index}>• {benefit}</li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
                  Learn More
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <buttonclassName="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300">

import React from 'react';;';
import SEOHead from './components/SEOHead';
;
const AiServicesPage: React.FC = () => {
  return (
    <>;
      <SEOHead;
        title="Ai Services - Zion Tech Group"";
        description="Professional ai services solutions for modern businesses";
      />";
      <div className ="min-h-screen bg-slate-900 text-white flex items-center justify-center">";
        <div className ="text-center">";
          <h1 className ="text-4xl font-bold mb-4">Ai Services</h1>";
          <p className ="text-gray-300">Professional solutions coming soon...</p>;";
        </div>;
      </div>;
    </>;
  ),
};
;
export default AiServicesPage;'";'";

>>>>>>> main
