import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const mainPages = [
    { name: 'Home', url: '/', description: 'Main homepage with company overview' },
    { name: 'About Us', url: '/about', description: 'Learn about Zion Tech Group and our mission' },
    { name: 'Our Team', url: '/team', description: 'Meet our expert team of AI and IT professionals' },
    { name: 'Contact Us', url: '/contact', description: 'Get in touch with our team' },
    { name: 'Services', url: '/services', description: 'Overview of all our services' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client case studies' },
    { name: 'Enterprise Solutions', url: '/enterprise', description: 'Enterprise-grade AI and IT solutions' },
    { name: 'Blog', url: '/blog', description: 'Latest insights and articles on AI and technology' },
    { name: 'Technical Guides', url: '/guides', description: 'Comprehensive technical guides and documentation' },
    { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy and data protection practices' },
    { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions for our services' }
  ];

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', description: 'Comprehensive AI solutions and consulting' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation and optimization' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent business process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'AI solutions for healthcare and medical applications' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'AI-powered financial technology solutions' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced AI-powered data analytics platform' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security solutions and threat detection' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Intelligent workflow automation platform' },
    { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'AI-powered cloud services and infrastructure' },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'AI-powered e-commerce platform solutions' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'AI-integrated mobile application development' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', description: 'Comprehensive IT solutions and support' },
    { name: 'Micro SAAS', url: '/micro-saas', description: 'Affordable AI-driven tools for small businesses' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced cybersecurity solutions and services' }
  ];

  const technologies = [
    { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-generation quantum computing solutions' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing and self-optimizing systems' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights and analytics solutions' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized applications and Web3 solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices and edge computing solutions' },
    { name: 'Robotics', url: '/robotics', description: 'Intelligent robots and automation solutions' }
  ];

  const blogPosts = [
    { name: 'AI Enterprise Transformation 2025', url: '/blog/ai-enterprise-transformation-2025' },
    { name: 'AI Trends 2026: Future Enterprise Transformation', url: '/blog/ai-trends-2026-future-enterprise-transformation' },
    { name: 'AI Cost Optimization Breakthrough 2026', url: '/blog/ai-cost-optimization-breakthrough-2026' },
    { name: 'AI Autonomous Business Systems 2026', url: '/blog/ai-autonomous-business-systems-2026' },
    { name: 'AI Innovation Labs Product Development 2025', url: '/blog/ai-innovation-labs-product-development-2025' }
  ];

  const guides = [
    { name: 'AI 2026 Implementation Roadmap', url: '/guides/ai-2026-implementation-roadmap' },
    { name: 'AI 2027 Implementation Roadmap', url: '/guides/ai-2027-implementation-roadmap' },
    { name: 'Autonomous Business Processes Implementation Guide 2026', url: '/guides/autonomous-business-processes-implementation-guide-2026' }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, blog posts, and resources." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Navigate through all our pages, services, and resources. Find everything you need about Zion Tech Group's AI and IT solutions.
            </p>
          </div>

          {/* Main Pages */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-blue-600" />
                Main Pages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {mainPages.map((page, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={page.url}
                      className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                    >
                      {page.name}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{page.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Services */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-purple-600" />
                AI Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={service.url}
                      className="text-purple-600 hover:text-purple-800 font-semibold flex items-center group"
                    >
                      {service.name}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* IT Services */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-green-600" />
                IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itServices.map((service, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={service.url}
                      className="text-green-600 hover:text-green-800 font-semibold flex items-center group"
                    >
                      {service.name}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-orange-600" />
                Technologies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={tech.url}
                      className="text-orange-600 hover:text-orange-800 font-semibold flex items-center group"
                    >
                      {tech.name}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <p className="text-sm text-gray-600 mt-1">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Blog Posts */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-indigo-600" />
                Latest Blog Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {blogPosts.map((post, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={post.url}
                      className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center group"
                    >
                      {post.name}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link 
                  to="/blog"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                >
                  View All Blog Posts
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Technical Guides */}
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <ArrowRight className="w-6 h-6 mr-2 text-teal-600" />
                Technical Guides
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {guides.map((guide, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <Link 
                      to={guide.url}
                      className="text-teal-600 hover:text-teal-800 font-semibold flex items-center group"
                    >
                      {guide.name}
                      <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link 
                  to="/guides"
                  className="text-blue-600 hover:text-blue-800 font-semibold flex items-center group"
                >
                  View All Technical Guides
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Need Help Finding Something?</h2>
              <p className="text-blue-100 mb-6">
                Can't find what you're looking for? Our team is here to help you navigate our services and find the perfect solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
                >
                  📞 Call Us: (302) 464-0950
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center"
                >
                  ✉️ Email Us
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SitemapPage;