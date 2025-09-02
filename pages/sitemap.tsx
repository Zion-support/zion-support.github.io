import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  Mail, 
  FileText, 
  Star, 
  TrendingUp,
  Brain, 
  Cloud,
  Database, 
  Zap,
  Lock, 
  Code,
  Smartphone, 
  Monitor,
  Server, 
  Network
} from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      title: 'Main Pages',
      pages: [
        { name: 'Home', url: '/', icon: Home },
        { name: 'Services', url: '/services', icon: Briefcase },
        { name: 'About', url: '/about', icon: Users },
        { name: 'Contact', url: '/contact', icon: Phone },
      ]
    },
    {
      title: 'Services',
      pages: [
        { name: 'AI Services', url: '/services#ai', icon: Brain },
        { name: 'IT Services', url: '/services#it', icon: Network },
        { name: 'Micro SaaS', url: '/services#saas', icon: Cloud },
        { name: 'Cybersecurity', url: '/services#cybersecurity', icon: Lock },
        { name: 'Customer Support', url: '/services#customer-support', icon: Phone },
        { name: 'E-Commerce Tools', url: '/services#ecommerce-returns', icon: Code },
        { name: 'AI Content Creation', url: '/services#content-creation', icon: FileText },
        { name: 'AI Email Responder', url: '/services#email-automation', icon: Mail },
        { name: 'AI Talent Matching', url: '/services#talent-matching', icon: Users },
        { name: 'Data Analytics', url: '/services#data-analytics', icon: Database },
      ]
    },
    {
      title: 'Resources',
      pages: [
        { name: 'Pricing Guide', url: '/pricing-guide', icon: Star },
        { name: 'Blog', url: '/blog', icon: FileText },
        { name: 'Case Studies', url: '/case-studies', icon: TrendingUp },
        { name: 'White Papers', url: '/white-papers', icon: FileText },
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our services, pages, and resources." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Site Map
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all our services, pages, and resources. Find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, sectionIndex) => (
              <div key={sectionIndex} className="bg-white rounded-xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                    {sectionIndex === 0 && <Home className="w-5 h-5 text-blue-600" />}
                    {sectionIndex === 1 && <Briefcase className="w-5 h-5 text-blue-600" />}
                    {sectionIndex === 2 && <FileText className="w-5 h-5 text-blue-600" />}
                  </div>
                  {section.title}
                </h2>
                
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <Link 
                        href={page.url}
                        className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                      >
                        <page.icon className="w-5 h-5 text-gray-400 mr-3 group-hover:text-blue-600 transition-colors" />
                        <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
                          {page.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div>+1 302 464 0950</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div>kleber@ziontechgroup.com</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Home className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-semibold">Address</div>
                    <div>364 E Main St STE 1008<br />Middletown, DE 19709</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SitemapPage;