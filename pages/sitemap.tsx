import React from 'react';
import Link from 'next/link';
import MainLayout from '../components/layout/MainLayout';
import { motion } from 'framer-motion';
import { 
  Home, 
  Users, 
  Briefcase, 
  Brain, 
  Network, 
  Cloud, 
  FileText, 
  Phone, 
  Shield, 
  Settings,
  HelpCircle,
  BookOpen,
  Target,
  Zap,
  Globe,
  ChevronRight
} from 'lucide-react';

const sitemapSections = [
  {
    title: 'Main Pages',
    icon: Home,
    pages: [
      { name: 'Home', href: '/', description: 'Main landing page' },
      { name: 'About Us', href: '/about', description: 'Learn about our company' },
      { name: 'Contact', href: '/contact', description: 'Get in touch with us' },
      { name: 'Blog', href: '/blog', description: 'Latest news and insights' }
    ]
  },
  {
    title: 'Services',
    icon: Briefcase,
    pages: [
      { name: 'All Services', href: '/services', description: 'Overview of all services' },
      { name: 'AI Services', href: '/ai-services', description: 'Artificial Intelligence solutions' },
      { name: 'IT Services', href: '/it-services', description: 'Information Technology services' },
      { name: 'Micro SaaS', href: '/micro-saas', description: 'Software as a Service solutions' },
      { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security and protection services' },
      { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Cloud infrastructure and services' },
      { name: 'Quantum Computing', href: '/quantum-computing', description: 'Next-generation computing' }
    ]
  },
  {
    title: 'Solutions',
    icon: Target,
    pages: [
      { name: 'Digital Transformation', href: '/digital-transformation', description: 'Transform your business digitally' },
      { name: 'AI Automation', href: '/ai-automation', description: 'Automate with artificial intelligence' },
      { name: 'Data Analytics', href: '/data-analytics', description: 'Insights from your data' },
      { name: 'IoT Solutions', href: '/iot-solutions', description: 'Internet of Things implementation' },
      { name: 'Blockchain', href: '/blockchain', description: 'Blockchain technology solutions' },
      { name: 'AR/VR', href: '/ar-vr', description: 'Augmented and Virtual Reality' }
    ]
  },
  {
    title: 'Resources',
    icon: BookOpen,
    pages: [
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories and examples' },
      { name: 'White Papers', href: '/white-papers', description: 'In-depth technical documents' },
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Learning resources' },
      { name: 'API Reference', href: '/api', description: 'API documentation' },
      { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' }
    ]
  },
  {
    title: 'Support',
    icon: HelpCircle,
    pages: [
      { name: 'Help Center', href: '/help', description: 'Get help and support' },
      { name: 'Support Ticket', href: '/support', description: 'Submit a support request' },
      { name: 'Live Chat', href: '/chat', description: 'Chat with our team' },
      { name: 'Training', href: '/training', description: 'Professional training programs' },
      { name: 'Status', href: '/status', description: 'Service status and uptime' }
    ]
  },
  {
    title: 'Company',
    icon: Users,
    pages: [
      { name: 'Our Team', href: '/team', description: 'Meet our team members' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'Press', href: '/press', description: 'Press releases and media' },
      { name: 'Partners', href: '/partners', description: 'Our partners and alliances' },
      { name: 'Investors', href: '/investors', description: 'Investor information' }
    ]
  },
  {
    title: 'Legal',
    icon: Shield,
    pages: [
      { name: 'Privacy Policy', href: '/privacy', description: 'How we protect your data' },
      { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
      { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage information' },
      { name: 'GDPR', href: '/gdpr', description: 'GDPR compliance information' },
      { name: 'Compliance', href: '/compliance', description: 'Regulatory compliance' },
      { name: 'Security', href: '/security', description: 'Security measures and policies' }
    ]
  }
];

export default function SitemapPage() {
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        
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
                Site{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Map
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Navigate through all our pages and discover the comprehensive range of services and resources we offer.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Sitemap Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sitemapSections.map((section, sectionIndex) => {
                const IconComponent = section.icon;
                return (
                  <motion.div
                    key={section.title}
                    className="bg-white rounded-lg shadow-lg p-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: sectionIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                    </div>
                    
                    <div className="space-y-3">
                      {section.pages.map((page, pageIndex) => (
                        <motion.div
                          key={page.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: pageIndex * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <Link
                            href={page.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                          >
                            <div>
                              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {page.name}
                              </h3>
                              <p className="text-sm text-gray-600">{page.description}</p>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold"
                >
                  View All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}