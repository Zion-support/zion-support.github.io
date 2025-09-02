import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { 
  Map, 
  Home, 
  Users, 
  Briefcase, 
  FileText, 
  Mail, 
  ArrowRight,
  ExternalLink,
  Globe,
  Search
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', href: '/', description: 'Welcome to Zion Tech Group' },
    { name: 'About Us', href: '/about', description: 'Learn about our mission and team' },
    { name: 'Services', href: '/services', description: 'Our comprehensive technology services' },
    { name: 'Contact', href: '/contact', description: 'Get in touch with our team' },
    { name: 'Blog', href: '/blog', description: 'Latest insights and technology trends' },
    { name: 'Careers', href: '/careers', description: 'Join our growing team' },
    { name: 'Team', href: '/team', description: 'Meet our talented professionals' }
  ];

  const servicePages = [
    { name: 'AI Services', href: '/ai-services', description: 'Artificial intelligence solutions' },
    { name: 'IT Services', href: '/it-services', description: 'Information technology services' },
    { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' },
    { name: 'Cloud Solutions', href: '/cloud-solutions', description: 'Cloud computing and infrastructure' },
    { name: 'Web Development', href: '/web-development', description: 'Custom web applications' },
    { name: 'Mobile Development', href: '/mobile-development', description: 'iOS and Android apps' },
    { name: 'Data Analytics', href: '/data-analytics', description: 'Business intelligence solutions' },
    { name: 'Cybersecurity', href: '/cybersecurity', description: 'Security and protection services' }
  ];

  const solutionPages = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', description: 'Large-scale business solutions' },
    { name: 'Small Business', href: '/solutions/small-business', description: 'Solutions for growing businesses' },
    { name: 'Startup Solutions', href: '/solutions/startups', description: 'Technology for startups' },
    { name: 'Healthcare', href: '/solutions/healthcare', description: 'Healthcare technology solutions' },
    { name: 'Finance', href: '/solutions/finance', description: 'Financial technology services' },
    { name: 'E-commerce', href: '/solutions/ecommerce', description: 'Online business solutions' }
  ];

  const resourcePages = [
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories and project examples' },
    { name: 'White Papers', href: '/white-papers', description: 'In-depth technical documentation' },
    { name: 'Webinars', href: '/webinars', description: 'Educational webinars and events' },
    { name: 'Documentation', href: '/docs', description: 'Technical documentation and guides' },
    { name: 'API Reference', href: '/api', description: 'API documentation and examples' },
    { name: 'Support', href: '/support', description: 'Help and support resources' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', href: '/privacy', description: 'How we protect your privacy' },
    { name: 'Terms of Service', href: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', href: '/cookies', description: 'Cookie usage and preferences' },
    { name: 'GDPR Compliance', href: '/gdpr', description: 'Data protection compliance' }
  ];

  const utilityPages = [
    { name: 'Sitemap', href: '/sitemap', description: 'Complete site navigation' },
    { name: 'Search', href: '/search', description: 'Search our website' },
    { name: '404 Error', href: '/404', description: 'Page not found' },
    { name: 'RSS Feed', href: '/rss', description: 'RSS feed for updates' }
  ];

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...solutionPages,
    ...resourcePages,
    ...legalPages,
    ...utilityPages
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 w-fit mx-auto mb-6">
                <Map className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Site Map
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Navigate our entire website with ease. Find all pages, services, and resources organized for your convenience.
              </p>
              
              {/* Quick Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Navigation */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Main Pages */}
              <div>
                <div className="flex items-center mb-6">
                  <Home className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Main Pages</h2>
                </div>
                <div className="space-y-3">
                  {mainPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Services</h2>
                </div>
                <div className="space-y-3">
                  {servicePages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions and Resources */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Solutions */}
              <div>
                <div className="flex items-center mb-6">
                  <Globe className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Solutions</h2>
                </div>
                <div className="space-y-3">
                  {solutionPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors group shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
                </div>
                <div className="space-y-3">
                  {resourcePages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="block p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors group shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal and Utility Pages */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Legal Pages */}
              <div>
                <div className="flex items-center mb-6">
                  <FileText className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Legal & Policies</h2>
                </div>
                <div className="space-y-3">
                  {legalPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Utility Pages */}
              <div>
                <div className="flex items-center mb-6">
                  <Map className="w-6 h-6 text-blue-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Utility Pages</h2>
                </div>
                <div className="space-y-3">
                  {utilityPages.map((page, index) => (
                    <Link
                      key={index}
                      href={page.href}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-600">{page.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Complete List */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Complete Page List</h2>
              <p className="text-lg text-gray-600">
                All {allPages.length} pages on our website
              </p>
            </div>
            
            <Card className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {allPages.map((page, index) => (
                  <Link
                    key={index}
                    href={page.href}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors group"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400 mr-3 group-hover:text-blue-600 transition-colors" />
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                        {page.name}
                      </div>
                      <div className="text-sm text-gray-500">
                        {page.href}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Use our search function or contact us directly for assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button className="bg-white text-blue-600 hover:bg-gray-100">
                  Search Website
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default SitemapPage;