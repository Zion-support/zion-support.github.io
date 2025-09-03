import React from "react"
import Head from "next/head"
import Link from "next/link"
import { 
  ArrowRight, 
  Award, 
  BarChart3, 
  Bot, 
  Brain, 
  CheckCircle, 
  Eye, 
  MessageSquare, 
  Shield, 
  Zap,
  Cpu,
  Database,
  Network,
  Settings,
  Users,
  Globe,
  Lock,
  TrendingUp,
  Target,
  Clock,
  Star,
  Phone,
  Mail,
  MapPin
} from "lucide-react"
import Navigation from "../src/components/Navigation"
import Footer from "../src/components/Footer"

export default function AIServices() {
  const aiServices = [
    {
      title: "AI Content Creation & Generation",
      description: "Revolutionary AI-powered content creation platform for blogs, social media, and marketing materials",
      icon: Brain,
      features: [
        "Automated blog post generation with SEO optimization",
        "Social media content creation and scheduling",
        "Brand voice consistency across all content",
        "Multi-language content generation",
        "Content performance analytics and optimization",
        "Integration with popular CMS platforms"
      ],
      pricing: "$2,500 - $8,000/month",
      delivery: "3-5 weeks",
      category: "Content AI",
      marketPrice: "$3,500/month average",
      benefits: "Reduce content creation time by 80%, increase engagement by 45%"
    },
    {
      title: "AI Email Automation & Response",
      description: "Intelligent email management system with automated responses and smart categorization",
      icon: MessageSquare,
      features: [
        "AI-powered email response generation",
        "Smart email categorization and prioritization",
        "Sentiment analysis and escalation alerts",
        "Multi-language support and translation",
        "Integration with CRM and helpdesk systems",
        "Custom response templates and workflows"
      ],
      pricing: "$1,500 - $5,000/month",
      delivery: "2-4 weeks",
      category: "Communication AI",
      marketPrice: "$2,800/month average",
      benefits: "Reduce response time by 70%, improve customer satisfaction by 60%"
    },
    {
      title: "AI-Powered SEO Optimization",
      description: "Intelligent SEO analysis and optimization platform with content recommendations",
      icon: TrendingUp,
      features: [
        "Automated SEO audits and recommendations",
        "AI-powered content optimization suggestions",
        "Keyword research and competitor analysis",
        "Technical SEO monitoring and alerts",
        "Content gap analysis and planning",
        "Performance tracking and reporting"
      ],
      pricing: "$2,000 - $6,000/month",
      delivery: "3-4 weeks",
      category: "SEO AI",
      marketPrice: "$3,000/month average",
      benefits: "Increase organic traffic by 120%, improve rankings by 65%"
    },
    {
      title: "AI Customer Support & Chatbots",
      description: "Advanced AI chatbot system with natural language processing and multi-channel support",
      icon: Bot,
      features: [
        "Natural language understanding and processing",
        "Multi-channel support (web, mobile, social)",
        "Context-aware conversations and memory",
        "Integration with knowledge bases and CRM",
        "Sentiment analysis and escalation",
        "Custom training and continuous learning"
      ],
      pricing: "$3,000 - $10,000/month",
      delivery: "4-6 weeks",
      category: "Support AI",
      marketPrice: "$5,500/month average",
      benefits: "Reduce support costs by 60%, improve response time by 90%"
    },
    {
      title: "AI Document Processing & Analysis",
      description: "Intelligent document analysis and processing for business automation",
      icon: Database,
      features: [
        "Automated data extraction from documents",
        "Document classification and routing",
        "OCR with 99%+ accuracy",
        "Contract analysis and risk assessment",
        "Compliance monitoring and alerts",
        "Workflow automation and integration"
      ],
      pricing: "$3,500 - $12,000/month",
      delivery: "4-6 weeks",
      category: "Document AI",
      marketPrice: "$5,200/month average",
      benefits: "Reduce document processing time by 85%, improve accuracy by 95%"
    },
    {
      title: "AI Talent Matching & Recruitment",
      description: "Intelligent recruitment system with automated screening and bias-free matching",
      icon: Users,
      features: [
        "AI-powered resume parsing and skill extraction",
        "Automated candidate screening and ranking",
        "Bias detection and elimination algorithms",
        "Interview scheduling and management",
        "Cultural fit assessment and matching",
        "Comprehensive analytics and reporting"
      ],
      pricing: "$4,000 - $15,000/month",
      delivery: "5-8 weeks",
      category: "HR AI",
      marketPrice: "$6,500/month average",
      benefits: "Reduce hiring time by 60%, improve candidate quality by 40%"
    },
    {
      title: "AI Business Intelligence & Analytics",
      description: "Advanced AI-powered analytics platform with predictive insights and real-time reporting",
      icon: BarChart3,
      features: [
        "Predictive analytics and forecasting",
        "Real-time data visualization and dashboards",
        "Automated report generation",
        "Anomaly detection and alerting",
        "Natural language query interface",
        "Integration with multiple data sources"
      ],
      pricing: "$5,000 - $20,000/month",
      delivery: "6-10 weeks",
      category: "Analytics AI",
      marketPrice: "$8,500/month average",
      benefits: "Improve decision-making speed by 75%, increase revenue by 25%"
    },
    {
      title: "AI Cybersecurity & Threat Detection",
      description: "Intelligent security system with advanced threat detection and automated response",
      icon: Shield,
      features: [
        "Real-time threat detection and analysis",
        "Behavioral anomaly detection",
        "Automated incident response",
        "Predictive security analytics",
        "Zero-trust security implementation",
        "Compliance monitoring and reporting"
      ],
      pricing: "$4,000 - $15,000/month",
      delivery: "5-8 weeks",
      category: "Security AI",
      marketPrice: "$7,200/month average",
      benefits: "Reduce security incidents by 80%, improve response time by 95%"
    },
    {
      title: "AI Computer Vision & Image Analysis",
      description: "Advanced computer vision solutions for image recognition, analysis, and automation",
      icon: Eye,
      features: [
        "Object detection and recognition",
        "Facial recognition and analysis",
        "Quality control and inspection",
        "Medical image analysis",
        "Automated visual content moderation",
        "Real-time video analytics"
      ],
      pricing: "$3,500 - $12,000/month",
      delivery: "4-7 weeks",
      category: "Vision AI",
      marketPrice: "$6,000/month average",
      benefits: "Improve accuracy by 90%, reduce manual inspection by 85%"
    },
    {
      title: "AI Process Automation & RPA",
      description: "Intelligent process automation with AI-powered decision making and workflow optimization",
      icon: Settings,
      features: [
        "Intelligent process discovery and mapping",
        "AI-powered decision making in workflows",
        "Automated task execution and scheduling",
        "Exception handling and escalation",
        "Process optimization recommendations",
        "Integration with existing systems"
      ],
      pricing: "$2,500 - $8,000/month",
      delivery: "3-6 weeks",
      category: "Automation AI",
      marketPrice: "$4,200/month average",
      benefits: "Reduce process time by 70%, eliminate errors by 95%"
    }
  ]

  return (
    <>
      <Head>
        <title>AI Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI services including machine learning, natural language processing, computer vision, and autonomous systems." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-services" />
      </Head>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              AI-Powered Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge artificial intelligence services. 
              From machine learning to autonomous systems, we deliver intelligent solutions that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services"
                className="inline-flex items-center px-8 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition-colors"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>

        {/* AI Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our AI Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive suite of AI services, each designed to address specific business needs with cutting-edge artificial intelligence technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {aiServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Pricing:</span>
                      <span className="font-semibold text-green-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Delivery:</span>
                      <span className="text-sm text-gray-700">{service.delivery}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price:</span>
                      <span className="text-sm text-blue-600">{service.marketPrice}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-4">{service.benefits}</p>
                    
                    <div className="flex gap-2">
                      <Link href="/contact" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Get Quote
                      </Link>
                      <Link href="/demo" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                        Demo
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Why Choose Our AI Services?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Team</h3>
                <p className="text-gray-600">
                  Our AI specialists have years of experience in cutting-edge technologies and proven track records.
                </p>
              </div>
              <div className="text-center">
                <Zap className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Delivery</h3>
                <p className="text-gray-600">
                  We deliver AI solutions quickly without compromising on quality or performance.
                </p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
                <p className="text-gray-600">
                  Our AI implementations have delivered measurable business value and ROI for clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-blue-900 text-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your AI needs. Our team of experts is ready to help you choose the perfect AI solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                Call: +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors">
                Email: kleber@ziontechgroup.com
              </a>
            </div>
            <p className="mt-6 text-sm">
              364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}