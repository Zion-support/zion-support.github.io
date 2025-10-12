import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About Us' },
    { path: '/services', title: 'Services' },
    { path: '/ai-services', title: 'AI Services' },
    { path: '/it-services', title: 'IT Services' },
    { path: '/micro-saas', title: 'Micro SaaS' },
    { path: '/pricing', title: 'Pricing' },
    { path: '/contact', title: 'Contact' },
    { path: '/blog', title: 'Blog' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/careers', title: 'Careers' },
    { path: '/team', title: 'Team' },
    { path: '/partners', title: 'Partners' },
    { path: '/status', title: 'Status' }
  ];

  const aiServices = [
    { path: '/ai-analytics', title: 'AI Analytics' },
    { path: '/ai-automation', title: 'AI Automation' },
    { path: '/ai-chatbot-builder', title: 'AI Chatbot Builder' },
    { path: '/ai-cybersecurity', title: 'AI Cybersecurity' },
    { path: '/ai-crm', title: 'AI CRM' },
    { path: '/ai-data-analytics', title: 'AI Data Analytics' },
    { path: '/ai-healthcare', title: 'AI Healthcare' },
    { path: '/ai-financial-services', title: 'AI Financial Services' },
    { path: '/ai-computer-vision', title: 'AI Computer Vision' },
    { path: '/ai-voice-solutions', title: 'AI Voice Solutions' },
    { path: '/ai-ecommerce-solutions', title: 'AI E-commerce Solutions' },
    { path: '/ai-hr-solutions', title: 'AI HR Solutions' },
    { path: '/ai-content-generation', title: 'AI Content Generation' },
    { path: '/ai-workflow-automation', title: 'AI Workflow Automation' },
    { path: '/ai-document-processing', title: 'AI Document Processing' }
  ];

  const itServices = [
    { path: '/cloud-infrastructure', title: 'Cloud Infrastructure' },
    { path: '/cybersecurity-solutions', title: 'Cybersecurity Solutions' },
    { path: '/web-development', title: 'Web Development' },
    { path: '/mobile-development', title: 'Mobile Development' },
    { path: '/api-development', title: 'API Development' },
    { path: '/database-management', title: 'Database Management' },
    { path: '/devops-cicd', title: 'DevOps & CI/CD' },
    { path: '/it-support', title: 'IT Support' },
    { path: '/data-analytics-bi', title: 'Data Analytics & BI' },
    { path: '/custom-software', title: 'Custom Software' },
    { path: '/network-infrastructure', title: 'Network Infrastructure' },
    { path: '/it-asset-management', title: 'IT Asset Management' }
  ];

  const supportPages = [
    { path: '/docs', title: 'Documentation' },
    { path: '/api-docs', title: 'API Documentation' },
    { path: '/support', title: 'Support' },
    { path: '/tutorials', title: 'Tutorials' },
    { path: '/demo', title: 'Demo' },
    { path: '/consultation', title: 'Consultation' },
    { path: '/faq', title: 'FAQ' },
    { path: '/community', title: 'Community' },
    { path: '/compliance', title: 'Compliance' }
  ];

  const legalPages = [
    { path: '/privacy', title: 'Privacy Policy' },
    { path: '/terms', title: 'Terms of Service' },
    { path: '/cookies', title: 'Cookie Policy' }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of all pages and services available on Zion Tech Group website." />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Site Map
            </h1>
            <p className="text-xl text-gray-300 mb-12 text-center">
              Navigate through all our pages and services
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Main Pages */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Main Pages</h2>
                <ul className="space-y-2">
                  {mainPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AI Services */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">AI Services</h2>
                <ul className="space-y-2">
                  {aiServices.map((service) => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* IT Services */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">IT Services</h2>
                <ul className="space-y-2">
                  {itServices.map((service) => (
                    <li key={service.path}>
                      <Link
                        to={service.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support & Legal */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Support & Legal</h2>
                <ul className="space-y-2">
                  {supportPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                  {legalPages.map((page) => (
                    <li key={page.path}>
                      <Link
                        to={page.path}
                        className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 block py-1"
                      >
                        {page.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;