import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Star, 
  Zap, 
  BarChart3, 
  Database, 
  Mail, 
  Calendar, 
  FileText, 
  Users, 
  Shield, 
  Globe,
  Smartphone,
  CreditCard,
  Search,
  MessageSquare,
  Image,
  Video,
  Cpu,
  Cloud,
  CheckCircle,
  ArrowRight,
  Phone,
  MapPin,
  Mail as MailIcon
} from 'lucide-react';

const microSaasServices = [
  {
    title: 'AI-Powered Email Automation',
    description: 'Intelligent email marketing and customer communication platform with advanced AI features.',
    icon: Mail,
    features: [
      'AI-generated email content',
      'Smart segmentation',
      'Automated follow-ups',
      'A/B testing',
      'Analytics dashboard',
      'CRM integration'
    ],
    pricing: '$199 - $1,499/month',
    category: 'Marketing Automation',
    popular: true,
    marketPrice: '$299 - $2,000/month',
    benefits: [
      'Increase email open rates by 40%',
      'Reduce manual work by 80%',
      'Personalized customer journeys',
      'Advanced analytics and reporting'
    ]
  },
  {
    title: 'Business Process Automation Suite',
    description: 'Complete workflow automation platform for small to medium businesses.',
    icon: Zap,
    features: [
      'Visual workflow builder',
      '500+ app integrations',
      'Custom triggers and actions',
      'Team collaboration tools',
      'Advanced analytics',
      'API access'
    ],
    pricing: '$99 - $399/month',
    category: 'Workflow Automation',
    popular: true,
    marketPrice: '$150 - $500/month',
    benefits: [
      'Save 20+ hours per week',
      'Reduce human errors by 95%',
      'Scale operations efficiently',
      'Real-time process monitoring'
    ]
  },
  {
    title: 'Advanced Analytics Dashboard',
    description: 'Comprehensive business intelligence and data visualization platform.',
    icon: BarChart3,
    features: [
      'Real-time data visualization',
      'Custom KPI tracking',
      'Automated reporting',
      'Data source integration',
      'Mobile-responsive design',
      'White-label options'
    ],
    pricing: '$149 - $799/month',
    category: 'Business Intelligence',
    popular: true,
    marketPrice: '$200 - $1,200/month',
    benefits: [
      'Make data-driven decisions',
      'Reduce reporting time by 90%',
      'Customizable dashboards',
      'Advanced forecasting'
    ]
  },
  {
    title: 'Customer Support Automation',
    description: 'AI-powered customer service platform with intelligent ticket routing and response.',
    icon: MessageSquare,
    features: [
      'AI chatbot integration',
      'Smart ticket routing',
      'Knowledge base management',
      'Multi-channel support',
      'Performance analytics',
      'Team collaboration tools'
    ],
    pricing: '$79 - $299/month',
    category: 'Customer Service',
    popular: true,
    marketPrice: '$120 - $500/month',
    benefits: [
      'Reduce response time by 70%',
      'Improve customer satisfaction',
      '24/7 automated support',
      'Comprehensive reporting'
    ]
  },
  {
    title: 'Social Media Management Suite',
    description: 'Complete social media automation and analytics platform.',
    icon: Globe,
    features: [
      'Multi-platform posting',
      'Content scheduling',
      'Engagement tracking',
      'Hashtag optimization',
      'Competitor analysis',
      'ROI measurement'
    ],
    pricing: '$49 - $199/month',
    category: 'Social Media',
    popular: true,
    marketPrice: '$80 - $300/month',
    benefits: [
      'Increase social engagement by 60%',
      'Save 15+ hours per week',
      'Data-driven content strategy',
      'Automated posting schedule'
    ]
  },
  {
    title: 'Invoice & Payment Processing',
    description: 'Automated invoicing and payment collection system for businesses.',
    icon: CreditCard,
    features: [
      'Automated invoice generation',
      'Multiple payment gateways',
      'Recurring billing',
      'Tax calculation',
      'Client portal',
      'Financial reporting'
    ],
    pricing: '$29 - $149/month',
    category: 'Financial Tools',
    popular: true,
    marketPrice: '$50 - $200/month',
    benefits: [
      'Reduce payment delays by 50%',
      'Automate recurring billing',
      'Professional invoice templates',
      'Real-time payment tracking'
    ]
  },
  {
    title: 'Project Management & Collaboration',
    description: 'Advanced project management platform with team collaboration features.',
    icon: Users,
    features: [
      'Task and project tracking',
      'Team collaboration tools',
      'Time tracking',
      'Resource management',
      'Gantt charts',
      'Mobile app'
    ],
    pricing: '$39 - $199/month',
    category: 'Project Management',
    popular: true,
    marketPrice: '$60 - $300/month',
    benefits: [
      'Increase team productivity by 40%',
      'Better project visibility',
      'Streamlined communication',
      'Advanced reporting'
    ]
  },
  {
    title: 'SEO & Content Optimization',
    description: 'AI-powered SEO tools and content optimization platform.',
    icon: Search,
    features: [
      'Keyword research',
      'Content optimization',
      'Rank tracking',
      'Technical SEO audits',
      'Competitor analysis',
      'Content planning'
    ],
    pricing: '$79 - $299/month',
    category: 'SEO & Marketing',
    popular: true,
    marketPrice: '$120 - $500/month',
    benefits: [
      'Improve search rankings',
      'Increase organic traffic by 80%',
      'AI-powered content suggestions',
      'Comprehensive SEO analysis'
    ]
  },
  {
    title: 'HR & Employee Management',
    description: 'Complete human resources management system for small to medium businesses.',
    icon: Users,
    features: [
      'Employee database',
      'Time and attendance',
      'Performance tracking',
      'Payroll integration',
      'Document management',
      'Compliance reporting'
    ],
    pricing: '$59 - $249/month',
    category: 'Human Resources',
    popular: true,
    marketPrice: '$100 - $400/month',
    benefits: [
      'Streamline HR processes',
      'Reduce administrative work',
      'Better employee engagement',
      'Compliance automation'
    ]
  },
  {
    title: 'E-commerce Analytics & Optimization',
    description: 'Advanced analytics platform for online stores with conversion optimization.',
    icon: BarChart3,
    features: [
      'Sales analytics',
      'Customer behavior tracking',
      'Conversion optimization',
      'A/B testing tools',
      'Inventory management',
      'Revenue forecasting'
    ],
    pricing: '$99 - $399/month',
    category: 'E-commerce',
    popular: true,
    marketPrice: '$150 - $600/month',
    benefits: [
      'Increase conversion rates by 35%',
      'Optimize product performance',
      'Reduce cart abandonment',
      'Data-driven decisions'
    ]
  },
  {
    title: 'Document Management & Automation',
    description: 'Intelligent document processing and management system with AI capabilities.',
    icon: FileText,
    features: [
      'Document digitization',
      'AI-powered extraction',
      'Workflow automation',
      'Version control',
      'Collaboration tools',
      'Compliance management'
    ],
    pricing: '$49 - $199/month',
    category: 'Document Management',
    popular: true,
    marketPrice: '$80 - $300/month',
    benefits: [
      'Reduce paper-based processes',
      'Improve document accuracy',
      'Streamline approvals',
      'Better compliance tracking'
    ]
  },
  {
    title: 'Lead Generation & CRM',
    description: 'Automated lead generation and customer relationship management platform.',
    icon: Users,
    features: [
      'Lead scoring',
      'Automated follow-ups',
      'Email sequences',
      'CRM integration',
      'Lead tracking',
      'Conversion analytics'
    ],
    pricing: '$69 - $299/month',
    category: 'Sales & CRM',
    popular: true,
    marketPrice: '$100 - $500/month',
    benefits: [
      'Increase lead quality by 50%',
      'Automate sales processes',
      'Better lead nurturing',
      'Improved conversion rates'
    ]
  }
];

const categories = [...new Set(microSaasServices.map(service => service.category))];

export default function MicroSAAS() {
  return (
    <>
      <Head>
        <title>Micro SaaS Solutions - Zion Tech Group | 85+ Innovative Business Tools</title>
        <meta name="description" content="Discover 85+ cutting-edge micro SaaS solutions for modern businesses. AI-powered automation, analytics, CRM, and workflow tools with competitive pricing starting at $29/month." />
        <meta name="keywords" content="micro SaaS, business automation, AI tools, workflow automation, CRM, analytics, marketing automation, project management, Zion Tech Group" />
      </Head>

      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              85+ Micro SaaS Solutions
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Innovative micro SaaS solutions designed to streamline your business operations and boost productivity.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </motion.div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <p className="text-lg text-gray-300 mb-4">Contact Information</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-2" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Micro SaaS Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Choose from 85+ innovative micro SaaS solutions across multiple categories, all designed to streamline your business operations and drive growth.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  {service.popular && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Popular
                    </span>
                  )}
                </div>
                
                <div className="mb-4">
                  <span className="text-sm text-blue-600 font-medium">{service.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-sm text-gray-500 ml-7">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-sm text-gray-600">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t pt-4 mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Our Pricing:</span>
                    <span className="text-lg font-bold text-blue-600">{service.pricing}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">Market Average:</span>
                    <span className="text-sm text-gray-400 line-through">{service.marketPrice}</span>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Link href="/contact" className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium text-center transition-colors">
                    Get Started
                  </Link>
                  <Link href="/quote" className="flex-1 border border-blue-600 text-blue-600 hover:bg-blue-50 px-4 py-3 rounded-lg font-medium text-center transition-colors">
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Micro SaaS Solutions?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive micro SaaS solutions that are cost-effective, scalable, and designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Deployment</h3>
              <p className="text-gray-600">Get your micro SaaS solution up and running in days, not months.</p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
              <p className="text-gray-600">Bank-level security with end-to-end encryption and compliance.</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Analytics</h3>
              <p className="text-gray-600">Comprehensive insights and reporting for data-driven decisions.</p>
            </div>

            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock support to ensure your systems run smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Contact us today for a free consultation and discover how our micro SaaS solutions can streamline your operations and boost productivity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">+1 302 464 0950</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MailIcon className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">kleber@ziontechgroup.com</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                      <div>
                        <p className="font-semibold text-gray-900">Address</p>
                        <p className="text-gray-600">364 E Main St STE 1008<br />Middletown DE 19709</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link href="/contact" className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Request Free Consultation
                    </Link>
                    <Link href="/quote" className="block w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Get Custom Quote
                    </Link>
                    <a href="tel:+13024640950" className="block w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                      Call Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}