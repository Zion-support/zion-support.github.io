import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Network, 
  Cloud, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award,
  Shield,
  Zap,
  Globe,
  BarChart3,
  Smartphone,
  Laptop,
  Server,
  Cpu,
  Settings,
  Rocket,
  BookOpen,
  MessageSquare,
  Calendar,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Code,
  Database,
  Lock,
  Eye,
  Target,
  Heart,
  Lightbulb,
  Handshake,
  FileText,
  Share2,
  Bot
} from 'lucide-react';
import Layout from '../components/Layout';

const stats = [
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24/7', label: 'Support Available' },
  { number: '500+', label: 'Projects Completed' },
  { number: '50+', label: 'Expert Team Members' }
];

const microSaasServices = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Real-time business intelligence with predictive analytics and automated insights",
    icon: BarChart3,
    price: "$99/month",
    features: ["Real-time data visualization", "Predictive analytics", "Custom reports", "API integration"],
    href: "/micro-saas/analytics-dashboard"
  },
  {
    title: "Smart Document Processor",
    description: "Automated document processing with OCR, data extraction, and workflow automation",
    icon: FileText,
    price: "$149/month",
    features: ["OCR technology", "Data extraction", "Workflow automation", "Multi-format support"],
    href: "/micro-saas/document-processor"
  },
  {
    title: "Customer Support Automation",
    description: "AI-powered chatbot and ticket management system with multi-channel support",
    icon: MessageSquare,
    price: "$79/month",
    features: ["AI chatbot", "Ticket management", "Multi-channel support", "Analytics dashboard"],
    href: "/micro-saas/support-automation"
  },
  {
    title: "Social Media Scheduler",
    description: "Automated social media posting with AI content suggestions and analytics",
    icon: Share2,
    price: "$59/month",
    features: ["Multi-platform posting", "AI content suggestions", "Analytics", "Team collaboration"],
    href: "/micro-saas/social-scheduler"
  },
  {
    title: "Email Marketing Automation",
    description: "Advanced email campaigns with personalization, A/B testing, and analytics",
    icon: Mail,
    price: "$89/month",
    features: ["Email templates", "A/B testing", "Personalization", "Advanced analytics"],
    href: "/micro-saas/email-automation"
  },
  {
    title: "Project Management Suite",
    description: "Comprehensive project tracking with time management and team collaboration",
    icon: Calendar,
    price: "$129/month",
    features: ["Task management", "Time tracking", "Team collaboration", "Progress reports"],
    href: "/micro-saas/project-management"
  }
];

const aiServices = [
  {
    title: "Custom AI Model Development",
    description: "Tailored machine learning models for your specific business needs",
    icon: Brain,
    price: "Starting at $5,000",
    features: ["Custom model training", "Data preprocessing", "Model optimization", "Deployment support"],
    href: "/ai-services/custom-models"
  },
  {
    title: "Natural Language Processing",
    description: "Text analysis, sentiment analysis, and language understanding solutions",
    icon: MessageSquare,
    price: "Starting at $2,500",
    features: ["Sentiment analysis", "Text classification", "Language translation", "Chatbot development"],
    href: "/ai-services/nlp"
  },
  {
    title: "Computer Vision Solutions",
    description: "Image recognition, object detection, and visual analysis systems",
    icon: Eye,
    price: "Starting at $3,500",
    features: ["Object detection", "Image classification", "Facial recognition", "Quality inspection"],
    href: "/ai-services/computer-vision"
  },
  {
    title: "Predictive Analytics",
    description: "Forecasting and predictive modeling for business intelligence",
    icon: TrendingUp,
    price: "Starting at $4,000",
    features: ["Demand forecasting", "Risk assessment", "Customer behavior prediction", "Market analysis"],
    href: "/ai-services/predictive-analytics"
  },
  {
    title: "AI Chatbot Development",
    description: "Intelligent conversational agents for customer service and support",
    icon: Bot,
    price: "Starting at $1,500",
    features: ["Multi-language support", "Integration APIs", "Analytics dashboard", "Custom training"],
    href: "/ai-services/chatbot"
  },
  {
    title: "AI Process Automation",
    description: "Intelligent automation of business processes using AI and RPA",
    icon: Settings,
    price: "Starting at $3,000",
    features: ["Process analysis", "Automation design", "Implementation", "Monitoring"],
    href: "/ai-services/process-automation"
  }
];

const itServices = [
  {
    title: "Cloud Infrastructure Setup",
    description: "Complete cloud migration and infrastructure optimization",
    icon: Cloud,
    price: "Starting at $2,000",
    features: ["Cloud migration", "Infrastructure design", "Security setup", "Monitoring"],
    href: "/it-services/cloud-infrastructure"
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security assessment and protection implementation",
    icon: Shield,
    price: "Starting at $1,500",
    features: ["Security audit", "Threat protection", "Compliance", "24/7 monitoring"],
    href: "/it-services/cybersecurity"
  },
  {
    title: "DevOps & CI/CD",
    description: "Automated deployment pipelines and infrastructure management",
    icon: Settings,
    price: "Starting at $2,500",
    features: ["CI/CD setup", "Container orchestration", "Monitoring", "Automation"],
    href: "/it-services/devops"
  },
  {
    title: "Database Management",
    description: "Database design, optimization, and maintenance services",
    icon: Database,
    price: "Starting at $1,200",
    features: ["Database design", "Performance optimization", "Backup solutions", "Maintenance"],
    href: "/it-services/database"
  },
  {
    title: "API Development & Integration",
    description: "Custom API development and third-party integrations",
    icon: Code,
    price: "Starting at $1,800",
    features: ["RESTful APIs", "GraphQL", "Third-party integration", "Documentation"],
    href: "/it-services/api-development"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Technology strategy and digital transformation consulting",
    icon: Target,
    price: "Starting at $200/hour",
    features: ["Technology assessment", "Strategy planning", "Implementation guidance", "Training"],
    href: "/it-services/consulting"
  }
];

const features = [
  {
    icon: CheckCircle,
    title: 'Proven Expertise',
    description: 'Over 500 successful projects delivered across various industries'
  },
  {
    icon: Star,
    title: 'Quality Assurance',
    description: '99.9% uptime guarantee with enterprise-grade security'
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: '50+ certified professionals with cutting-edge expertise'
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Award-winning solutions and client satisfaction'
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Zion Tech Group - AI, IT & Micro SaaS Solutions</title>
        <meta name="description" content="Leading provider of AI services, IT solutions, and Micro SaaS products. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI services, IT solutions, Micro SaaS, technology consulting, cloud solutions" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Transform Your Business with{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Leading provider of AI services, IT solutions, and Micro SaaS products. 
                We help businesses innovate, scale, and succeed in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Started Today
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth
              </p>
            </motion.div>

            {/* Micro SaaS Services */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Micro SaaS Solutions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {microSaasServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-blue-400 mr-3" />
                      <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                AI Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {aiServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-purple-400 mr-3" />
                      <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-purple-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div className="mb-20">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                IT Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                  >
                    <div className="flex items-center mb-4">
                      <service.icon className="w-8 h-8 text-green-400 mr-3" />
                      <h4 className="text-xl font-semibold text-white">{service.title}</h4>
                    </div>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link 
                      href={service.href}
                      className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                    >
                      Learn More
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional results through innovation, expertise, and dedication
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Get in touch with our experts to discuss your project and discover how we can help you achieve your goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-400 mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us Now
                </Link>
                <Link 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Visit Our Website
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}