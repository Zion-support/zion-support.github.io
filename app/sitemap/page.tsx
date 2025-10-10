'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, Brain, Cloud, Users, FileText, DollarSign, Briefcase, BookOpen, Phone, MapPin } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const sitemapSections = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Services', url: '/services' },
        { name: 'Pricing', url: '/pricing' },
        { name: 'Case Studies', url: '/case-studies' },
        { name: 'Blog', url: '/blog' },
        { name: 'Tutorials', url: '/tutorials' },
        { name: 'Careers', url: '/careers' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Analytics', url: '/ai-analytics' },
        { name: 'AI Automation', url: '/ai-automation' },
        { name: 'AI Chatbot', url: '/ai-chatbot-builder' },
        { name: 'AI CRM', url: '/ai-crm' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics' },
        { name: 'AI Healthcare', url: '/ai-healthcare' },
        { name: 'AI Financial Services', url: '/ai-financial-services' },
        { name: 'AI Computer Vision', url: '/ai-computer-vision' },
        { name: 'AI Voice Solutions', url: '/ai-voice-solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure' },
        { name: 'API Development', url: '/api-development' },
        { name: 'Cybersecurity', url: '/cybersecurity-solutions' },
        { name: 'Database Management', url: '/database-management' },
        { name: 'Mobile Development', url: '/mobile-development' },
        { name: 'Web Development', url: '/web-development' },
        { name: 'DevOps & CI/CD', url: '/devops-cicd' },
        { name: 'IT Support', url: '/it-support' },
        { name: 'Data Analytics & BI', url: '/data-analytics-bi' },
        { name: 'Custom Software', url: '/custom-software' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Users,
      pages: [
        { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder' },
        { name: 'AI Email Marketing', url: '/ai-email-marketing' },
        { name: 'Social Media AI', url: '/social-media-ai' },
        { name: 'AI Project Management', url: '/ai-project-management' },
        { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer' },
        { name: 'AI Sales CRM', url: '/ai-sales-crm' },
        { name: 'AI Design Studio', url: '/ai-design-studio' },
        { name: 'AI Inventory Manager', url: '/ai-inventory-manager' },
        { name: 'AI Invoice Generator', url: '/ai-invoice-generator' }
      ]
    },
    {
      title: 'Legal & Support',
      icon: FileText,
      pages: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Cookie Policy', url: '/cookies' },
        { name: 'Support', url: '/support' },
        { name: 'FAQ', url: '/faq' }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our pages, services, and resources." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete directory of all pages and services available on our website
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sitemapSections.map((section, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl font-bold text-white">{section.title}</h2>
                </div>
                
                <ul className="space-y-3">
                  {section.pages.map((page, pageIndex) => (
                    <li key={pageIndex}>
                      <a
                        href={page.url}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></span>
                        {page.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">(302) 464-0950</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;