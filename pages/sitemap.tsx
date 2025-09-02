import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
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

export default function SitemapPage() {
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
    { name: "Micro SaaS", url: "/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud }
  ];

  const contentPages = [
    { name: "Pricing Guide", url: "/pricing-guide", description: "Comprehensive pricing information", icon: DollarSign },
    { name: "Services Overview", url: "/services-overview", description: "Overview of all our services", icon: Briefcase }
  ];

  const categories = [
    { name: "Main Pages", pages: mainPages, color: "from-blue-500 to-cyan-500" },
    { name: "Services", pages: servicePages, color: "from-purple-500 to-pink-500" },
    { name: "Content", pages: contentPages, color: "from-green-500 to-emerald-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website" />
      </Head>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Site Map
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Navigate through all pages and sections of our website
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${category.color} mr-3`}></div>
                {category.name}
              </h2>
              <div className="space-y-3">
                {category.pages.map((page, pageIndex) => (
                  <Link
                    key={pageIndex}
                    href={page.url}
                    className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <page.icon className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300 transition-colors" />
                        <div>
                          <h3 className="text-white font-semibold group-hover:text-blue-300 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-gray-400 text-sm">
                            {page.description}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-300 transition-colors" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}