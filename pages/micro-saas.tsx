import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Heart, 
  Building, 
  Cloud,
  Zap,
  Shield,
  Bot,
  Database,
  Sprout,
  FileText,
  Image,
  Video,
  Mail,
  MessageSquare,
  Search,
  BarChart3,
  Users,
  Globe,
  Lock,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Lightbulb,
  Target,
  Award,
  Clock,
  DollarSign,
  Trash2,
  Camera,
  HardDrive,
  Droplets,
  Calendar
} from 'lucide-react';
import Layout from '../components/Layout';

const microSaasServices = [
  {
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
    icon: Bot,
    features: ['AI-powered content creation', 'Multiple content formats', 'Brand voice customization', 'SEO optimization'],
    pricing: '$29/month',
    category: 'Content & Marketing',
    benefits: ['Save 80% time on content creation', 'Consistent brand voice', 'SEO-optimized output'],
    marketPrice: '$50-200/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Social Media Scheduler',
    description: 'Schedule and manage all your social media posts across multiple platforms from one dashboard.',
    icon: Calendar,
    features: ['Multi-platform posting', 'Optimal timing suggestions', 'Content calendar', 'Analytics dashboard'],
    pricing: '$19/month',
    category: 'Social Media',
    benefits: ['Increase engagement by 40%', 'Save 5 hours per week', 'Better content planning'],
    marketPrice: '$15-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Email Marketing Automation',
    description: 'Create, send, and track email campaigns with advanced automation and personalization.',
    icon: Mail,
    features: ['Drag-and-drop editor', 'Advanced segmentation', 'A/B testing', 'Detailed analytics'],
    pricing: '$39/month',
    category: 'Email Marketing',
    benefits: ['Increase open rates by 25%', 'Automate customer journeys', 'Better ROI tracking'],
    marketPrice: '$20-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Project Management Tool',
    description: 'Streamline project workflows with task management, team collaboration, and progress tracking.',
    icon: Target,
    features: ['Kanban boards', 'Gantt charts', 'Team collaboration', 'Time tracking'],
    pricing: '$25/month',
    category: 'Productivity',
    benefits: ['Improve team efficiency by 30%', 'Better project visibility', 'Reduced missed deadlines'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: true
  },
  {
    title: 'Customer Support Chat',
    description: 'Provide instant customer support with AI-powered chatbots and live chat integration.',
    icon: MessageSquare,
    features: ['AI chatbot', 'Live chat widget', 'Knowledge base', 'Ticket management'],
    pricing: '$35/month',
    category: 'Customer Service',
    benefits: ['24/7 customer support', 'Reduce response time by 90%', 'Improve customer satisfaction'],
    marketPrice: '$20-80/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for your business metrics and KPIs.',
    icon: BarChart3,
    features: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Automated insights'],
    pricing: '$45/month',
    category: 'Analytics',
    benefits: ['Make data-driven decisions', 'Identify growth opportunities', 'Track performance metrics'],
    marketPrice: '$30-150/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Invoice Generator',
    description: 'Create professional invoices, track payments, and manage billing with ease.',
    icon: FileText,
    features: ['Professional templates', 'Payment tracking', 'Automated reminders', 'Tax calculations'],
    pricing: '$15/month',
    category: 'Finance',
    benefits: ['Get paid 30% faster', 'Reduce billing errors', 'Professional appearance'],
    marketPrice: '$10-40/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Password Manager',
    description: 'Secure password storage and management for individuals and teams.',
    icon: Lock,
    features: ['Secure encryption', 'Password generation', 'Team sharing', 'Breach monitoring'],
    pricing: '$12/month',
    category: 'Security',
    benefits: ['Enhanced security', 'Easy password management', 'Team collaboration'],
    marketPrice: '$5-20/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'File Storage & Sharing',
    description: 'Secure cloud storage with advanced sharing and collaboration features.',
    icon: Cloud,
    features: ['Secure cloud storage', 'File sharing', 'Version control', 'Team collaboration'],
    pricing: '$20/month',
    category: 'Storage',
    benefits: ['Access files anywhere', 'Secure sharing', 'Version history'],
    marketPrice: '$10-50/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Time Tracking Tool',
    description: 'Track time spent on projects and tasks with detailed reporting and insights.',
    icon: Clock,
    features: ['Time tracking', 'Project management', 'Detailed reports', 'Team insights'],
    pricing: '$18/month',
    category: 'Productivity',
    benefits: ['Better time management', 'Accurate billing', 'Productivity insights'],
    marketPrice: '$10-30/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'Website Builder',
    description: 'Create professional websites with drag-and-drop builder and responsive templates.',
    icon: Globe,
    features: ['Drag-and-drop builder', 'Responsive templates', 'SEO tools', 'E-commerce integration'],
    pricing: '$35/month',
    category: 'Web Development',
    benefits: ['No coding required', 'Professional results', 'SEO optimized'],
    marketPrice: '$15-100/month',
    link: '/contact',
    popular: false
  },
  {
    title: 'CRM System',
    description: 'Manage customer relationships with comprehensive CRM features and automation.',
    icon: Users,
    features: ['Contact management', 'Sales pipeline', 'Automation', 'Reporting'],
    pricing: '$50/month',
    category: 'CRM',
    benefits: ['Improve sales by 25%', 'Better customer relationships', 'Automated workflows'],
    marketPrice: '$25-150/month',
    link: '/contact',
    popular: true
  }
];

const categories = [
  'All',
  'Content & Marketing',
  'Social Media',
  'Email Marketing',
  'Productivity',
  'Customer Service',
  'Analytics',
  'Finance',
  'Security',
  'Storage',
  'Web Development',
  'CRM'
];

export default function MicroSaasPage() {
  return (
    <Layout
      title="Micro SaaS Services - Zion Tech Group"
      description="Discover our comprehensive collection of micro SaaS services designed to streamline your business operations and boost productivity."
      keywords="micro saas, software as a service, business tools, productivity software, automation tools"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">SaaS</span> Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Powerful, focused software solutions designed to solve specific business problems. 
                Choose from our curated collection of micro SaaS tools.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className="px-6 py-3 rounded-full border border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-colors duration-200"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      {service.popular && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Popular
                        </span>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Category:</span>
                      <span className="ml-2 text-sm font-medium text-blue-600">{service.category}</span>
                    </div>
                    
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl font-bold text-gray-900">{service.pricing}</span>
                        <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-gray-600">
                            <Star className="w-4 h-4 text-yellow-500 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      href={service.link}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Analysis Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Market Analysis & Competitive Advantages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our micro SaaS services are priced competitively and offer superior value compared to market alternatives.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">Our services are priced 20-40% below market rates while offering superior features and support.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Premium Quality</h3>
                <p className="text-gray-600">Enterprise-grade features and reliability at small business prices.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation Focus</h3>
                <p className="text-gray-600">Cutting-edge technology and regular updates to keep you ahead of the competition.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-lg text-gray-600 mb-6">
                Contact us today to discuss your specific needs and get a customized solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold inline-flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Call: +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email: kleber@ziontechgroup.com
                </a>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                364 E Main St STE 1008, Middletown, DE 19709
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}