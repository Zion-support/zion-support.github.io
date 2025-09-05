import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Star, 
  DollarSign, 
  Award, 
  Globe, 
  Lock, 
  Cpu, 
  Bot, 
  FileText, 
  Video, 
  Mic, 
  Code, 
  Settings, 
  Monitor, 
  Smartphone, 
  Server, 
  Network, 
  Car, 
  Rocket, 
  Heart, 
  Building, 
  Sprout, 
  Mail, 
  MessageSquare, 
  Search, 
  Eye, 
  Target, 
  TrendingUp, 
  Package, 
  Calendar, 
  BookOpen, 
  ShoppingCart, 
  Home, 
  Trash2, 
  Camera, 
  HardDrive 
} from 'lucide-react';

const microSaasServices = [
  {
    title: 'AI Content Generator',
    description: 'Generate high-quality content for blogs, social media, and marketing materials using AI',
    icon: FileText,
    features: ['AI-powered content creation', 'Multiple content types', 'SEO optimization', 'Brand voice consistency'],
    pricing: '$29 - $99/month',
    category: 'Content & Marketing',
    popular: true,
    benefits: ['Save time on content creation', 'Improve content quality', 'Scale content production', 'Maintain brand consistency'],
    marketPrice: '$49/month',
    link: '/contact'
  },
  {
    title: 'Social Media Scheduler',
    description: 'Schedule and manage your social media posts across multiple platforms',
    icon: Calendar,
    features: ['Multi-platform posting', 'Content calendar', 'Analytics dashboard', 'Team collaboration'],
    pricing: '$19 - $79/month',
    category: 'Social Media',
    popular: true,
    benefits: ['Save time on posting', 'Improve engagement', 'Better content planning', 'Team coordination'],
    marketPrice: '$39/month',
    link: '/contact'
  },
  {
    title: 'Email Marketing Automation',
    description: 'Automate your email marketing campaigns with personalized messages',
    icon: Mail,
    features: ['Email templates', 'Automation workflows', 'A/B testing', 'Analytics'],
    pricing: '$39 - $149/month',
    category: 'Email Marketing',
    popular: true,
    benefits: ['Increase email engagement', 'Save time on campaigns', 'Improve conversion rates', 'Better customer segmentation'],
    marketPrice: '$79/month',
    link: '/contact'
  },
  {
    title: 'Project Management Tool',
    description: 'Streamline your project management with task tracking and team collaboration',
    icon: Target,
    features: ['Task management', 'Team collaboration', 'Progress tracking', 'File sharing'],
    pricing: '$9 - $29/user/month',
    category: 'Productivity',
    popular: false,
    benefits: ['Improve team productivity', 'Better project visibility', 'Streamlined workflows', 'Enhanced collaboration'],
    marketPrice: '$19/user/month',
    link: '/contact'
  },
  {
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics and reporting for your business metrics',
    icon: BarChart3,
    features: ['Real-time analytics', 'Custom reports', 'Data visualization', 'Export capabilities'],
    pricing: '$49 - $199/month',
    category: 'Analytics',
    popular: true,
    benefits: ['Better business insights', 'Data-driven decisions', 'Improved performance tracking', 'Custom reporting'],
    marketPrice: '$99/month',
    link: '/contact'
  },
  {
    title: 'Customer Support Chat',
    description: 'Live chat widget for customer support with AI-powered responses',
    icon: MessageSquare,
    features: ['Live chat widget', 'AI responses', 'Ticket management', 'Multi-language support'],
    pricing: '$29 - $99/month',
    category: 'Customer Support',
    popular: false,
    benefits: ['Improve customer satisfaction', 'Reduce support workload', 'Faster response times', 'Better customer experience'],
    marketPrice: '$59/month',
    link: '/contact'
  },
  {
    title: 'Invoice Generator',
    description: 'Create and manage professional invoices for your business',
    icon: FileText,
    features: ['Invoice templates', 'Payment tracking', 'Automated reminders', 'Tax calculations'],
    pricing: '$19 - $59/month',
    category: 'Finance',
    popular: false,
    benefits: ['Professional invoicing', 'Faster payment processing', 'Better financial tracking', 'Reduced admin work'],
    marketPrice: '$39/month',
    link: '/contact'
  },
  {
    title: 'Password Manager',
    description: 'Secure password management for individuals and teams',
    icon: Lock,
    features: ['Secure storage', 'Password generation', 'Team sharing', 'Two-factor authentication'],
    pricing: '$3 - $12/user/month',
    category: 'Security',
    popular: true,
    benefits: ['Enhanced security', 'Convenient access', 'Team collaboration', 'Reduced password fatigue'],
    marketPrice: '$6/user/month',
    link: '/contact'
  },
  {
    title: 'Time Tracking Tool',
    description: 'Track time spent on projects and tasks for better productivity',
    icon: Clock,
    features: ['Time tracking', 'Project categorization', 'Reporting', 'Team management'],
    pricing: '$7 - $25/user/month',
    category: 'Productivity',
    popular: false,
    benefits: ['Better time management', 'Accurate billing', 'Productivity insights', 'Project optimization'],
    marketPrice: '$15/user/month',
    link: '/contact'
  },
  {
    title: 'Form Builder',
    description: 'Create custom forms and surveys with advanced features',
    icon: Settings,
    features: ['Drag-and-drop builder', 'Custom fields', 'Conditional logic', 'Data export'],
    pricing: '$29 - $99/month',
    category: 'Forms & Surveys',
    popular: false,
    benefits: ['Easy form creation', 'Better data collection', 'Customized workflows', 'Improved user experience'],
    marketPrice: '$59/month',
    link: '/contact'
  },
  {
    title: 'Video Conferencing',
    description: 'High-quality video conferencing with screen sharing and recording',
    icon: Video,
    features: ['HD video calls', 'Screen sharing', 'Recording', 'Virtual backgrounds'],
    pricing: '$14 - $49/user/month',
    category: 'Communication',
    popular: true,
    benefits: ['Better remote collaboration', 'Professional meetings', 'Easy screen sharing', 'Meeting recordings'],
    marketPrice: '$29/user/month',
    link: '/contact'
  },
  {
    title: 'File Storage & Sharing',
    description: 'Secure cloud storage with advanced sharing and collaboration features',
    icon: Cloud,
    features: ['Cloud storage', 'File sharing', 'Version control', 'Team collaboration'],
    pricing: '$5 - $20/user/month',
    category: 'Storage',
    popular: true,
    benefits: ['Secure file storage', 'Easy sharing', 'Version control', 'Team collaboration'],
    marketPrice: '$12/user/month',
    link: '/contact'
  },
  {
    title: 'CRM System',
    description: 'Customer relationship management with sales pipeline and contact management',
    icon: Users,
    features: ['Contact management', 'Sales pipeline', 'Email integration', 'Reporting'],
    pricing: '$25 - $100/user/month',
    category: 'CRM',
    popular: true,
    benefits: ['Better customer relationships', 'Improved sales tracking', 'Enhanced communication', 'Data organization'],
    marketPrice: '$50/user/month',
    link: '/contact'
  },
  {
    title: 'Website Builder',
    description: 'Drag-and-drop website builder with templates and hosting',
    icon: Globe,
    features: ['Drag-and-drop builder', 'Templates', 'Hosting included', 'SEO tools'],
    pricing: '$12 - $49/month',
    category: 'Web Development',
    popular: false,
    benefits: ['Easy website creation', 'Professional templates', 'No coding required', 'Built-in hosting'],
    marketPrice: '$29/month',
    link: '/contact'
  },
  {
    title: 'E-commerce Platform',
    description: 'Complete e-commerce solution with payment processing and inventory management',
    icon: ShoppingCart,
    features: ['Product management', 'Payment processing', 'Inventory tracking', 'Order management'],
    pricing: '$29 - $299/month',
    category: 'E-commerce',
    popular: true,
    benefits: ['Easy online selling', 'Payment processing', 'Inventory management', 'Order tracking'],
    marketPrice: '$79/month',
    link: '/contact'
  },
  {
    title: 'Learning Management System',
    description: 'Create and manage online courses with student tracking and assessments',
    icon: BookOpen,
    features: ['Course creation', 'Student management', 'Assessments', 'Progress tracking'],
    pricing: '$39 - $199/month',
    category: 'Education',
    popular: false,
    benefits: ['Easy course creation', 'Student engagement', 'Progress tracking', 'Assessment tools'],
    marketPrice: '$99/month',
    link: '/contact'
  },
  {
    title: 'Appointment Scheduler',
    description: 'Online booking system for appointments with calendar integration',
    icon: Calendar,
    features: ['Online booking', 'Calendar sync', 'Automated reminders', 'Payment processing'],
    pricing: '$19 - $79/month',
    category: 'Scheduling',
    popular: false,
    benefits: ['Reduce no-shows', 'Automated scheduling', 'Payment integration', 'Better customer experience'],
    marketPrice: '$39/month',
    link: '/contact'
  },
  {
    title: 'Survey & Feedback Tool',
    description: 'Create surveys and collect feedback with advanced analytics',
    icon: Target,
    features: ['Survey builder', 'Response analytics', 'Custom branding', 'Data export'],
    pricing: '$25 - $99/month',
    category: 'Feedback',
    popular: false,
    benefits: ['Better customer insights', 'Easy survey creation', 'Advanced analytics', 'Custom branding'],
    marketPrice: '$59/month',
    link: '/contact'
  },
  {
    title: 'Team Communication',
    description: 'Internal communication platform with channels and file sharing',
    icon: MessageSquare,
    features: ['Team channels', 'File sharing', 'Video calls', 'Integration'],
    pricing: '$6 - $15/user/month',
    category: 'Communication',
    popular: true,
    benefits: ['Better team communication', 'Centralized information', 'Easy file sharing', 'Integration options'],
    marketPrice: '$10/user/month',
    link: '/contact'
  },
  {
    title: 'API Management',
    description: 'Manage and monitor your APIs with rate limiting and analytics',
    icon: Code,
    features: ['API monitoring', 'Rate limiting', 'Analytics', 'Documentation'],
    pricing: '$99 - $499/month',
    category: 'Development',
    popular: false,
    benefits: ['Better API performance', 'Usage monitoring', 'Rate limiting', 'Developer experience'],
    marketPrice: '$299/month',
    link: '/contact'
  },
  {
    title: 'Database Management',
    description: 'Cloud database service with automatic backups and scaling',
    icon: Database,
    features: ['Cloud database', 'Automatic backups', 'Auto-scaling', 'Monitoring'],
    pricing: '$25 - $200/month',
    category: 'Database',
    popular: false,
    benefits: ['Reliable data storage', 'Automatic backups', 'Easy scaling', 'Performance monitoring'],
    marketPrice: '$99/month',
    link: '/contact'
  }
];

const categories = [
  { name: 'Content & Marketing', icon: FileText, count: 3 },
  { name: 'Productivity', icon: Target, count: 4 },
  { name: 'Communication', icon: MessageSquare, count: 3 },
  { name: 'Analytics', icon: BarChart3, count: 2 },
  { name: 'E-commerce', icon: ShoppingCart, count: 2 },
  { name: 'Security', icon: Lock, count: 1 }
];

export default function MicroSaas() {
  return (
    <>
      <Head>
        <title>Micro SaaS Services - Zion Tech Group</title>
        <meta name="description" content="Discover our innovative micro SaaS solutions designed to solve specific business problems. From content generation to project management, we have the tools you need." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Micro <span className="text-blue-600">SaaS</span> Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Powerful, focused tools that solve specific business problems. 
                Our micro SaaS solutions are designed to be simple, effective, and affordable.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/it-services"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View IT Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Categories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explore our micro SaaS solutions organized by category.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <category.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count} services available</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    {service.popular && (
                      <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                        Popular
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-500">Starting at</span>
                      <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm text-gray-500">Market Price</span>
                      <span className="text-sm text-gray-600">{service.marketPrice}</span>
                    </div>
                    <Link
                      href={service.link}
                      className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your needs and start transforming your business today.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <Link
                  href="/ai-services"
                  className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
                >
                  View AI Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}