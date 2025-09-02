<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';

export default function Sitemap() {
  const pages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/services', title: 'Services' },
    { path: '/services/ai-services', title: 'AI Services' },
    { path: '/services/micro-saas', title: 'Micro SAAS' },
    { path: '/services/it-services', title: 'IT Services' },
    { path: '/solutions', title: 'Solutions' },
    { path: '/solutions/enterprise', title: 'Enterprise Solutions' },
    { path: '/solutions/small-business', title: 'Small Business Solutions' },
    { path: '/solutions/startups', title: 'Startup Solutions' },
    { path: '/solutions/custom-development', title: 'Custom Development' },
    { path: '/solutions/digital-transformation', title: 'Digital Transformation' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/team', title: 'Our Team' },
    { path: '/careers', title: 'Careers' },
    { path: '/contact', title: 'Contact' },
    { path: '/blog', title: 'Blog' },
    { path: '/white-papers', title: 'White Papers' },
    { path: '/webinars', title: 'Webinars' },
    { path: '/documentation', title: 'Documentation' },
    { path: '/faq', title: 'FAQ' },
    { path: '/help', title: 'Help Center' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/pricing-guide', title: 'Pricing Guide' },
    { path: '/partners', title: 'Partners' },
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
    { path: '/cookies', title: 'Cookie Policy' },
    { path: '/request-quote', title: 'Request Quote' },
    { path: '/demo', title: 'Book Demo' },
    { path: '/brochure', title: 'Download Brochure' },
    { path: '/login', title: 'Sign In' },
    { path: '/register', title: 'Register' },
    { path: '/dashboard', title: 'Dashboard' }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-lg text-gray-600">
              Find all pages and services on our website
            </p>
          </div>
=======
React from,
  react';
import { motion } from
  'framer-motion';'{ SEO } from
  '../components/SEO';
import { Card } from
  '../components/ui/Card';'{ Badge } from
  '../components/ui/Badge';
import { ;'  Map, ArrowRight,
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
} from
  'lucide-react';'
  'const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T
  ')[0];'  const mainPages = [;
    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },"    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },"    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },"    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },"    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },"    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },"    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },"    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },"    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },"    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },"    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },"    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },"    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }"  ];"
  const servicePages = [;
    { name: "AI Services", url: "/ai-services", description: "Artificial Intelligence solutions", icon: Brain },"    { name: "IT Services", url: "/it-services", description: "Information Technology services", icon: Network },"    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },"    { name: "AI Cybersecurity Platform", url: "/services/ai-autonomous-cybersecurity-platform", description: "AI-powered security solutions", icon: Shield },"    { name: "AI Customer Experience", url: "/services/ai-customer-experience-platform", description: "AI-driven customer experience", icon: Users },"    { name: "AI Healthcare Diagnostics", url: "/services/ai-healthcare-diagnostics", description: "AI medical diagnostic tools", icon: Brain },"    { name: "AI Enterprise Orchestrator", url: "/services/ai-enterprise-orchestrator", description: "Enterprise AI orchestration", icon: Zap },"    { name: "AI Healthcare Analytics", url: "/services/ai-healthcare-analytics-platform", description: "Healthcare data analytics", icon: Database },"    { name: "AI Supply Chain", url: "/services/ai-autonomous-supply-chain", description: "Supply chain optimization", icon: Target },"    { name: "AI Financial Planning", url: "/services/ai-financial-planning", description: "AI financial planning tools", icon: DollarSign }"  ];"
  const contentPages = [;
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign },"    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }"  ];"
  const categories = [;
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" }, { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" },"    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }"  ];"
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">"      <SEO "        title="Sitemap - Zion Tech Group" "        description="Navigate through all pages and content on the Zion Tech Group website. Find what you&apos;re looking for quickly and easily."'
  '      />'      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">"        <div className="max-w-7xl mx-auto text-center">"          <motion.div"            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">"              <Map className="w-4 h-4 mr-2" />"              Site Navigation"            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">"              Sitemap"            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">"              Find all pages and content on our website. Navigate through our services, resources, and information easily."            </p>
            <div className="flex items-center justify-center text-gray-400">"              <Calendar className="w-4 h-4 mr-2" />"              Last updated: {new Date(lastUpdated).toLocaleDateString()}"            </div></motion.div>
        </div>
      </section>
>>>>>>> origin/main

          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pages.map((page, index) => (
                <a
                  key={index}
                  href={page.path}
                  className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900">{page.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{page.path}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}