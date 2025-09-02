import React from 'react';
<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';
import { 
  Home, Users, Briefcase, Phone, Award, DollarSign, BookOpen, 
  TrendingUp, FileText, Calendar, Shield, Star,
  Brain, Cloud, Database, Network, Zap, Target, CheckCircle,
  Building, Rocket, Code, HelpCircle
} from 'lucide-react';

const Sitemap: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];
  
  const mainPages = [
    { name: "Home", url: "/", description: "Welcome to Zion Tech Group", icon: Home },
    { name: "About", url: "/about", description: "Learn about our company and mission", icon: Users },
    { name: "Services", url: "/services", description: "Our AI and technology solutions", icon: Briefcase },
    { name: "Solutions", url: "/solutions", description: "Tailored solutions for your business", icon: Target },
    { name: "Contact", url: "/contact", description: "Get in touch with our team", icon: Phone },
    { name: "Careers", url: "/careers", description: "Join our team of experts", icon: Users },
    { name: "Team", url: "/team", description: "Meet our leadership and experts", icon: Award },
    { name: "Pricing", url: "/pricing", description: "Transparent pricing for our services", icon: DollarSign },
    { name: "Request Quote", url: "/request-quote", description: "Get a custom quote for your project", icon: DollarSign },
    { name: "Blog", url: "/blog", description: "Latest insights and technology trends", icon: BookOpen },
    { name: "Case Studies", url: "/case-studies", description: "Success stories from our clients", icon: TrendingUp },
    { name: "White Papers", url: "/white-papers", description: "Research and insights", icon: FileText },
    { name: "Webinars", url: "/webinars", description: "Expert-led educational sessions", icon: Calendar },
    { name: "Privacy Policy", url: "/privacy", description: "How we protect your data", icon: Shield },
    { name: "Terms of Service", url: "/terms", description: "Terms and conditions", icon: FileText }
  ];

  const servicePages = [
    { name: "AI Services", url: "/services/ai-services", description: "Artificial Intelligence solutions", icon: Brain },
    { name: "IT Services", url: "/services/it-services", description: "Information Technology services", icon: Network },
    { name: "Micro SaaS", url: "/services/micro-saas", description: "Micro Software as a Service solutions", icon: Cloud },
    { name: "AI Content Generator", url: "/services/ai-content-generator", description: "AI-powered content creation", icon: Brain }
  ];

  const solutionPages = [
    { name: "Enterprise Solutions", url: "/solutions/enterprise", description: "Enterprise-grade technology solutions", icon: Building },
    { name: "Startup Solutions", url: "/solutions/startups", description: "Technology solutions for startups", icon: Rocket },
    { name: "Small Business Solutions", url: "/solutions/small-business", description: "Affordable solutions for small businesses", icon: Users },
    { name: "Digital Transformation", url: "/solutions/digital-transformation", description: "Complete digital transformation services", icon: Zap },
    { name: "Custom Development", url: "/solutions/custom-development", description: "Custom software development", icon: Code }
  ];

  const resourcePages = [
    { name: "Documentation", url: "/documentation", description: "Technical documentation and guides", icon: BookOpen },
    { name: "FAQ", url: "/faq", description: "Frequently asked questions", icon: HelpCircle },
    { name: "Help Center", url: "/help", description: "Get help and support", icon: HelpCircle },
    { name: "API Reference", url: "/api", description: "API documentation and reference", icon: Code },
    { name: "Status", url: "/status", description: "Service status and uptime", icon: CheckCircle }
  ];

  return (
    <>
      <Head>
        <title>Sitemap | Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages and resources." />
        <meta name="robots" content="index, follow" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sitemap</h1>
            <p className="text-lg text-gray-600">
              Find all pages and resources on the Zion Tech Group website
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Main Pages */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Home className="w-6 h-6 mr-2 text-blue-600" />
                Main Pages
              </h2>
              <div className="grid gap-3">
                {mainPages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={index}
                      href={page.url}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-blue-600" />
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-blue-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {page.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Services */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-green-600" />
                Services
              </h2>
              <div className="grid gap-3">
                {servicePages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={index}
                      href={page.url}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-green-600" />
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-green-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {page.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Solutions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-6 h-6 mr-2 text-purple-600" />
                Solutions
              </h2>
              <div className="grid gap-3">
                {solutionPages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={index}
                      href={page.url}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-purple-600" />
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-purple-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {page.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Resources */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <BookOpen className="w-6 h-6 mr-2 text-orange-600" />
                Resources
              </h2>
              <div className="grid gap-3">
                {resourcePages.map((page, index) => {
                  const Icon = page.icon;
                  return (
                    <Link
                      key={index}
                      href={page.url}
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                    >
                      <Icon className="w-5 h-5 mr-3 text-gray-400 group-hover:text-orange-600" />
                      <div>
                        <div className="font-medium text-gray-900 group-hover:text-orange-600">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {page.description}
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Can't find what you're looking for?
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
=======

const Sitemap: React.FC = () => {
  const links = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Services', url: '/services' },
    { name: 'AI Services', url: '/services/ai-services' },
    { name: 'IT Services', url: '/services/it-services' },
    { name: 'Micro SaaS', url: '/services/micro-saas' },
    { name: 'Solutions', url: '/solutions' },
    { name: 'Enterprise', url: '/solutions/enterprise' },
    { name: 'Small Business', url: '/solutions/small-business' },
    { name: 'Startups', url: '/solutions/startups' },
    { name: 'Products', url: '/products' },
    { name: 'Contact', url: '/contact' },
    { name: 'Careers', url: '/careers' },
    { name: 'Privacy', url: '/privacy' },
    { name: 'Terms', url: '/terms' },
  ];

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Sitemap</h1>
      <p className="text-gray-600 mb-8">Quick links to primary pages and sections.</p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {links.map((l) => (
          <li key={l.url}>
            <a className="text-blue-600 hover:underline" href={l.url}>
              {l.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
>>>>>>> origin/main
  );
};

export default Sitemap;