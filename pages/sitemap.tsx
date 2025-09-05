import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Home, 
  Users, 
  Briefcase, 
  Phone, 
  FileText, 
  HelpCircle, 
  DollarSign,
  Shield,
  Cookie,
  Scale,
  MapPin,
  Mail,
  Phone as PhoneIcon,
  Globe,
  ArrowRight
} from 'lucide-react';

const sitemapData = {
  main: [
    { path: "/", label: "Home", description: "Welcome to Zion Tech Group" },
    { path: "/about", label: "About Us", description: "Learn about our company and mission" },
    { path: "/contact", label: "Contact", description: "Get in touch with our team" },
    { path: "/careers", label: "Careers", description: "Join our innovative team" },
    { path: "/blog", label: "Blog", description: "Latest insights and technology trends" }
  ],
  services: [
    { path: "/services", label: "All Services", description: "Complete overview of our services" },
    { path: "/ai-services", label: "AI Solutions", description: "Artificial Intelligence & Machine Learning" },
    { path: "/it-services", label: "IT Services", description: "Information Technology Solutions" },
    { path: "/micro-saas", label: "Micro SaaS", description: "Software as a Service Solutions" },
    { path: "/services/cloud-devops", label: "Cloud & DevOps", description: "Cloud Infrastructure & DevOps Automation" },
    { path: "/services/cybersecurity", label: "Cybersecurity", description: "Advanced Security Solutions" },
    { path: "/services/data-analytics", label: "Data Analytics", description: "Business Intelligence & Analytics" },
    { path: "/services/quantum-computing", label: "Quantum Computing", description: "Next-generation computing solutions" }
  ],
  solutions: [
    { path: "/solutions", label: "Solutions", description: "Industry-specific solutions" },
    { path: "/solutions/enterprise", label: "Enterprise", description: "Large-scale enterprise solutions" },
    { path: "/solutions/healthcare", label: "Healthcare", description: "Healthcare technology solutions" },
    { path: "/solutions/finance", label: "Finance", description: "Financial technology solutions" },
    { path: "/solutions/retail", label: "Retail", description: "Retail technology solutions" }
  ],
  resources: [
    { path: "/blog", label: "Blog", description: "Technology insights and news" },
    { path: "/case-studies", label: "Case Studies", description: "Success stories and client results" },
    { path: "/white-papers", label: "White Papers", description: "In-depth technical documentation" },
    { path: "/webinars", label: "Webinars", description: "Educational webinars and events" },
    { path: "/faq", label: "FAQ", description: "Frequently asked questions" },
    { path: "/help", label: "Help Center", description: "Support and documentation" }
  ],
  company: [
    { path: "/about", label: "About Us", description: "Our story, mission, and values" },
    { path: "/team", label: "Our Team", description: "Meet our expert team members" },
    { path: "/careers", label: "Careers", description: "Job opportunities and benefits" },
    { path: "/news", label: "News", description: "Company news and announcements" },
    { path: "/contact", label: "Contact", description: "Get in touch with us" }
  ],
  legal: [
    { path: "/privacy", label: "Privacy Policy", description: "How we protect your data" },
    { path: "/terms", label: "Terms of Service", description: "Terms and conditions" },
    { path: "/cookies", label: "Cookie Policy", description: "Our cookie usage policy" },
    { path: "/compliance", label: "Compliance", description: "Regulatory compliance information" }
  ],
  support: [
    { path: "/support", label: "Support", description: "Technical support and assistance" },
    { path: "/help", label: "Help Center", description: "Self-service help and documentation" },
    { path: "/training", label: "Training", description: "Training programs and resources" },
    { path: "/helpdesk", label: "Helpdesk", description: "Submit support tickets" }
  ]
};

const contactInfo = {
  email: "contact@ziontechgroup.com",
  phone: "+1 (555) 123-4567",
  address: "123 Technology Drive, Innovation City, IC 12345",
  website: "https://ziontechgroup.com"
};

export default function SitemapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages and resources easily." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl font-bold mb-6">
              Site Map
            </h1>
            <p className="text-xl text-blue-100">
              Navigate our website easily with our comprehensive site map
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Main Pages */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Home className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Main Pages</h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.main.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Services */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.services.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Solutions</h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.solutions.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Resources */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.resources.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Company */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Company</h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.company.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>

              {/* Legal */}
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Scale className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Legal</h2>
                </div>
                <div className="space-y-3">
                  {sitemapData.legal.map((item, index) => (
                    <Link
                      key={index}
                      href={item.path}
                      className="block p-3 rounded-lg hover:bg-blue-50 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">
                            {item.label}
                          </h3>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Information */}
            <motion.div
              className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-blue-100">{contactInfo.email}</p>
                </div>
                <div className="text-center">
                  <PhoneIcon className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-blue-100">{contactInfo.phone}</p>
                </div>
                <div className="text-center">
                  <MapPin className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-blue-100">{contactInfo.address}</p>
                </div>
                <div className="text-center">
                  <Globe className="w-8 h-8 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Website</h3>
                  <p className="text-blue-100">{contactInfo.website}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}