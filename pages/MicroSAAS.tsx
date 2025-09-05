import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  FileText, 
  MessageSquare, 
  Share2, 
  Mail, 
  Calendar, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Users,
  Target,
  Phone,
  Mail as MailIcon,
  MapPin
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasServices = [
  {
    title: "AI-Powered Analytics Dashboard",
    description: "Transform your data into actionable insights with our intelligent analytics platform. Get real-time business intelligence, predictive analytics, and automated reporting.",
    icon: BarChart3,
    price: "$99/month",
    features: [
      "Real-time data visualization",
      "Predictive analytics & forecasting",
      "Custom report generation",
      "API integration with 100+ tools",
      "Mobile-responsive dashboard",
      "White-label options available"
    ],
    benefits: [
      "Increase decision-making speed by 40%",
      "Reduce manual reporting time by 80%",
      "Identify trends before competitors",
      "Customizable for any industry"
    ],
    href: "/contact?service=analytics-dashboard"
  },
  {
    title: "Smart Document Processor",
    description: "Automate your document workflow with AI-powered OCR, data extraction, and intelligent routing. Process invoices, contracts, and forms automatically.",
    icon: FileText,
    price: "$149/month",
    features: [
      "Advanced OCR technology (99.5% accuracy)",
      "Intelligent data extraction",
      "Workflow automation",
      "Multi-format support (PDF, images, scans)",
      "Integration with major business tools",
      "Compliance & audit trails"
    ],
    benefits: [
      "Process 1000+ documents per hour",
      "Reduce data entry errors by 95%",
      "Save 20+ hours per week",
      "Ensure compliance automatically"
    ],
    href: "/contact?service=document-processor"
  },
  {
    title: "Customer Support Automation",
    description: "Revolutionize customer service with AI-powered chatbots, intelligent ticket routing, and comprehensive support analytics.",
    icon: MessageSquare,
    price: "$79/month",
    features: [
      "AI chatbot with natural language processing",
      "Intelligent ticket routing",
      "Multi-channel support (email, chat, social)",
      "Real-time analytics dashboard",
      "Integration with CRM systems",
      "24/7 automated responses"
    ],
    benefits: [
      "Reduce response time by 70%",
      "Handle 80% of inquiries automatically",
      "Improve customer satisfaction scores",
      "Scale support without hiring"
    ],
    href: "/contact?service=support-automation"
  },
  {
    title: "Social Media Scheduler Pro",
    description: "Master social media marketing with AI-powered content suggestions, optimal posting times, and comprehensive analytics.",
    icon: Share2,
    price: "$59/month",
    features: [
      "Multi-platform posting (Facebook, Twitter, LinkedIn, Instagram)",
      "AI content suggestions based on trends",
      "Optimal posting time recommendations",
      "Advanced analytics & ROI tracking",
      "Team collaboration tools",
      "Content calendar management"
    ],
    benefits: [
      "Increase engagement by 60%",
      "Save 15+ hours per week",
      "Improve content performance",
      "Grow followers organically"
    ],
    href: "/contact?service=social-scheduler"
  },
  {
    title: "Email Marketing Automation Suite",
    description: "Create, send, and track high-converting email campaigns with advanced personalization, A/B testing, and behavioral triggers.",
    icon: Mail,
    price: "$89/month",
    features: [
      "Drag-and-drop email builder",
      "Advanced personalization engine",
      "A/B testing & optimization",
      "Behavioral trigger automation",
      "Advanced segmentation",
      "Detailed analytics & reporting"
    ],
    benefits: [
      "Increase open rates by 45%",
      "Boost click-through rates by 60%",
      "Automate follow-up sequences",
      "Generate 3x more leads"
    ],
    href: "/contact?service=email-automation"
  },
  {
    title: "Project Management Suite",
    description: "Streamline project execution with comprehensive task management, time tracking, team collaboration, and progress monitoring.",
    icon: Calendar,
    price: "$129/month",
    features: [
      "Advanced task & project management",
      "Time tracking & productivity analytics",
      "Team collaboration & communication",
      "Resource planning & allocation",
      "Progress tracking & reporting",
      "Integration with 50+ business tools"
    ],
    benefits: [
      "Increase team productivity by 35%",
      "Reduce project delays by 50%",
      "Improve resource utilization",
      "Deliver projects on time"
    ],
    href: "/contact?service=project-management"
  },
  {
    title: "AI Content Generator",
    description: "Create high-quality content at scale with AI-powered writing tools for blogs, social media, marketing copy, and more.",
    icon: FileText,
    price: "$69/month",
    features: [
      "AI-powered content generation",
      "Multiple content types (blogs, social, ads)",
      "SEO optimization suggestions",
      "Brand voice customization",
      "Plagiarism detection",
      "Content calendar integration"
    ],
    benefits: [
      "Create 10x more content",
      "Maintain consistent brand voice",
      "Improve SEO rankings",
      "Save 25+ hours per week"
    ],
    href: "/contact?service=content-generator"
  },
  {
    title: "Lead Generation & CRM",
    description: "Capture, nurture, and convert leads with our all-in-one CRM system featuring automated lead scoring and follow-up sequences.",
    icon: Target,
    price: "$119/month",
    features: [
      "Automated lead capture forms",
      "Lead scoring & qualification",
      "Automated follow-up sequences",
      "Pipeline management",
      "Email & SMS marketing",
      "Advanced reporting & analytics"
    ],
    benefits: [
      "Increase lead conversion by 50%",
      "Automate 80% of follow-up tasks",
      "Improve sales team efficiency",
      "Track ROI on marketing spend"
    ],
    href: "/contact?service=lead-generation"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "per month",
    description: "Perfect for small businesses getting started",
    features: [
      "Up to 3 team members",
      "Basic analytics",
      "Email support",
      "5GB storage",
      "Standard integrations"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Ideal for growing businesses",
    features: [
      "Up to 10 team members",
      "Advanced analytics",
      "Priority support",
      "50GB storage",
      "Premium integrations",
      "Custom branding"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$199",
    period: "per month",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited storage",
      "All integrations",
      "White-label solution",
      "Custom development"
    ],
    popular: false
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export default function MicroSAAS() {
  return (
    <Layout 
      title="Micro SaaS Solutions - Zion Tech Group" 
      description="Comprehensive Micro SaaS solutions for businesses of all sizes. AI-powered tools, automation, and analytics to accelerate growth."
    >
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
                Micro SaaS Solutions
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Powerful, affordable software solutions designed to automate, optimize, and accelerate your business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
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
                Our Micro SaaS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of business automation and optimization tools
              </p>
            </motion.div>

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
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={service.href}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your business needs. All plans include 30-day free trial.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 rounded-lg p-8 ${
                    tier.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  } border border-slate-700`}
                >
                  {tier.popular && (
                    <div className="bg-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:shadow-lg'
                        : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    Start Free Trial
                  </Link>
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
                Get in touch with our experts to discuss your needs and discover how our Micro SaaS solutions can accelerate your growth.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-400 mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-blue-400 mr-3" />
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