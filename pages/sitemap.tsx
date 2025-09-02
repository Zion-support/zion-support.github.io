import React from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  Map, ArrowRight,
  ExternalLink, Home,
  Users, Briefcase,
  Phone, DollarSign,
  FileText, BookOpen,
  Award, Shield,
  Globe, Search,
  Filter, Calendar,
  Star, TrendingUp,
  Brain, Cloud,
  Database, Network,
  Zap, Target,
  CheckCircle
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];

  const mainPages = [
    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },
    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },
    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },
    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },
    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },
    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },
    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },
    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },
    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },
    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },
    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },
    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },
    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }
  ];

  const servicePages = [
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain },
    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network },
    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },
    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield },
    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users },
    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain },
    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap },
    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database },
    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target },
    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }
  ];

  const contentPages = [
    { name: "Documentation", url: "/documentation", description: "Technical documentation and guides", icon: FileText },
    { name: "FAQ", url: "/faq", description: "Frequently asked questions", icon: Search },
    { name: "Help Center", url: "/help", description: "Support and help resources", icon: Globe },
    { name: "Status Page", url: "/status", description: "Service status and uptime", icon: CheckCircle }
  ];

  return (
    <>
      <SEO
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources in one place."
        keywords="sitemap, navigation, website structure, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="container mx-auto px-4 py-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Map className="w-8 h-8 text-blue-600" />
                <h1 className="text-4xl font-bold text-gray-900">Website Sitemap</h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate through all our pages, services, and resources. Last updated: {lastUpdated}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Pages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Home className="w-6 h-6 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Main Pages</h2>
                  </div>
                  <div className="space-y-3">
                    {mainPages.map((page, index) => (
                      <motion.div
                        key={page.url}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                        className="group"
                      >
                        <a
                          href={page.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <page.icon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors mt-0.5" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Service Pages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <Briefcase className="w-6 h-6 text-green-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                  </div>
                  <div className="space-y-3">
                    {servicePages.map((page, index) => (
                      <motion.div
                        key={page.url}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                        className="group"
                      >
                        <a
                          href={page.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <page.icon className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors mt-0.5" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Content Pages */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="h-full">
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-6">
                    <FileText className="w-6 h-6 text-purple-600" />
                    <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
                  </div>
                  <div className="space-y-3">
                    {contentPages.map((page, index) => (
                      <motion.div
                        key={page.url}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.05 }}
                        className="group"
                      >
                        <a
                          href={page.url}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <page.icon className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors mt-0.5" />
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                              {page.name}
                            </h3>
                            <p className="text-sm text-gray-600">{page.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 transition-colors" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12"
          >
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Site Statistics</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">{mainPages.length}</div>
                    <div className="text-sm text-gray-600">Main Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">{servicePages.length}</div>
                    <div className="text-sm text-gray-600">Services</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600">{contentPages.length}</div>
                    <div className="text-sm text-gray-600">Resources</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600">{mainPages.length + servicePages.length + contentPages.length}</div>
                    <div className="text-sm text-gray-600">Total Pages</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;