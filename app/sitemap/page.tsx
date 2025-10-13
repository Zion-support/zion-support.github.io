<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Map, ArrowRight, ExternalLink, Calendar, Users, Code, Shield, Cloud, Brain, Zap } from 'lucide-react'
const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0]
  
  const pageCategories = [
    {
      title: 'Main Pages',
      icon: Map,
      pages: [,
        { name: 'Home', url: '/', description: 'Main landing page' ,},
        {name: 'About', url: '/about', description: 'About Zion Tech Group' ,},
        {name: 'Services', url: '/services', description: 'Our service offerings' ,},
        {name: 'Pricing', url: '/pricing', description: 'Service pricing plans' ,},
        {name: 'Contact', url: '/contact', description: 'Contact information' ,}]
    },
    {title: 'AI Services',
      icon: Brain,
      pages: [,
        { name: 'AI Services Overview', url: '/ai-services', description: 'Complete AI services catalog' ,},
        {name: 'AI Analytics', url: '/ai-analytics', description: 'AI-powered data analytics' ,},
        {name: 'AI Automation', url: '/ai-automation', description: 'Process automation solutions' ,},
        {name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Build intelligent chatbots' ,},
        {name: 'AI CRM', url: '/ai-crm', description: 'AI-powered customer relationship management' ,},
        {name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-driven security solutions' ,},
        {name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analytics' ,},
        {name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI solutions' ,},
        {name: 'AI Fintech', url: '/ai-fintech', description: 'Financial technology AI' ,}]
    },
    {title: 'IT Services',
      icon: Cloud,
      pages: [,
        { name: 'IT Services Overview', url: '/it-services', description: 'Complete IT services catalog' ,},
        {name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'Cloud infrastructure solutions' ,},
        {name: 'API Management', url: '/ai-api-management', description: 'API development and management' ,},
        {name: 'Cybersecurity Suite', url: '/ai-cybersecurity-suite', description: 'Comprehensive security solutions' ,},
        {name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android app development' ,},
        {name: 'Web Development', url: '/web-development', description: 'Modern web application development' ,}]
    },
    {title: 'Micro SaaS',
      icon: Zap,
      pages: [,
        { name: 'Micro SaaS Overview', url: '/micro-saas', description: 'Complete Micro SaaS catalog' ,},
        {name: 'AI Content Writer', url: '/ai-content-writer', description: 'Automated content creation' ,},
        {name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' ,},
        {name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Financial tracking solution' ,},
        {name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' ,},
        {name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Prospect identification' ,},
        {name: 'AI Project Manager', url: '/ai-project-manager', description: 'Project coordination tool' ,}]
    },
    {title: 'Emerging Technologies',
      icon: Code,
      pages: [,
        { name: '5G Implementation', url: '/5g-implementation', description: 'Next-generation connectivity' ,},
        {name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content creation' ,},
        {name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: 'Immersive work environments' ,},
        {name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Self-operating systems' ,},
        {name: 'AI Blockchain Solutions', url: '/ai-blockchain-solutions', description: 'Decentralized AI solutions' ,},
        {name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed processing' ,}]
    },
    {title: 'Resources',
      icon: Users,
      pages: [,
        { name: 'Blog', url: '/blog', description: 'Latest news and insights' ,},
        {name: 'Case Studies', url: '/case-studies', description: 'Success stories and case studies' ,},
        {name: 'Careers', url: '/careers', description: 'Job opportunities' ,},
        {name: 'Partners', url: '/partners', description: 'Partnership information' ,},
        {name: 'Support', url: '/support', description: 'Technical support' ,},
        {name: 'FAQ', url: '/faq', description: 'Frequently asked questions' ,},
        {name: 'Demo', url: '/demo', description: 'Request a demo' ,},
        {name: 'Consultation', url: '/consultation', description: 'Free consultation' ,}]
    },
    {title: 'Documentation',
      icon: Code,
      pages: [,
        { name: 'Documentation', url: '/docs', description: 'Complete documentation' ,},
        {name: 'API Reference', url: '/api', description: 'API documentation' ,},
        {name: 'Tutorials', url: '/tutorials', description: 'Learning resources' ,},
        {name: 'Community', url: '/community', description: 'Developer community' ,}]
    },
    {title: 'Legal',
      icon: Shield,
      pages: [,
        { name: 'Privacy Policy', url: '/privacy', description: 'Privacy policy and data protection' ,},
        {name: 'Terms of Service', url: '/terms', description: 'Terms and conditions' ,},
        {name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage information' ,},
        {name: 'Sitemap', url: '/sitemap', description: 'Complete site map' ,}]
    }
  ]

  const totalPages = pageCategories.reduce((total, category) => total + category.pages.length, 0)
  return (
    <>
  <Helmet />
        <title>Sitemap - Zion Tech Group</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all pages, services, and resources in one place." />
        <meta name="keywords" content="sitemap, website map, navigation, pages, services, resources" />
        <link rel="canonical" href="https: //ziontechgroup.com/sitemap" />,
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16 pt-24">{/* Header */</div>} <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                <Map className="w-8 h-8 text-white" />
=======
import React from 'react';
;
const SitemapPage: React.FC = () => {
const pages = [
];
};
    { path: '/', title: 'Home', description: 'Zion Tech Group - Advanced AI and IT Solutions' },
    { path: '/about', title: 'About Us', description: 'Learn about our mission and expertise' },
    { path: '/services', title: 'All Services', description: 'Comprehensive AI, IT, and micro SAAS solutions' },
    { path: '/micro-saas', title: 'Micro SAAS Solutions', description: 'Affordable, powerful AI-driven tools for modern businesses' },
    { path: '/ai-services', title: 'AI Services', description: 'Advanced artificial intelligence solutions' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'Revolutionary AI-powered marketing automation' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Intelligent automation of business processes' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'Cutting-edge AI solutions for medical applications' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'Revolutionary AI-powered financial services' },
    { path: '/it-services', title: 'IT Services', description: 'Comprehensive IT solutions and infrastructure' },
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-generation quantum computing capabilities' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing and self-optimizing systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data-driven insights and analytics' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized applications and smart contracts' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Connected devices and edge analytics' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Advanced security services and threat detection' },
    { path: '/services-advertising', title: 'AI Advertising', description: 'AI-powered advertising and marketing solutions' },
    { path: '/case-studies', title: 'Case Studies', description: 'Success stories and client implementations' },
    { path: '/enterprise', title: 'Enterprise Solutions', description: 'Advanced AI and IT solutions for large organizations' },
    { path: '/team', title: 'Our Team', description: 'Meet the experts behind our innovative solutions' },
    { path: '/contact', title: 'Contact Us', description: 'Get in touch with our team of experts' },
    { path: '/blog', title: 'Blog & Insights', description: 'Latest insights and trends in AI and technology' },
    { path: '/guides', title: 'Technical Guides', description: 'Comprehensive guides and documentation' },
    { path: '/privacy', title: 'Privacy Policy', description: 'Our privacy policy and data protection practices' },
    { path: '/terms', title: 'Terms of Service', description: 'Terms and conditions for our services' }];
  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4"></h1>
            Sitemap</h1>
          </h1>
          <p className="text-xl text-gray-600"></p>
            Navigate through all pages on our website
          </p>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
            {pages.map((page, index) => (</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2"></h3>
                  <a 
                    href={page.path};
                    className="text-blue-600 hover:text-blue-700 transition-colors"
                  ></a>
                    {page.title};
                  </a>
                </h3>
                <p className="text-sm text-gray-600 mb-2"></p>
                  {page.description};
                </p>
                <p className="text-xs text-gray-500"></p>
                  {page.path};
                </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
              </div>
              <h1 className="text-4xl md: text-5xl font-bold text-white neon-text-enhanced">,</h1>
                Sitemap;
              </h1>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">Complete overview of all pages and resources available on our website.</p>
              Find what you're looking for quickly and easily.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
              <Calendar className="w-4 h-4" />
              <span>Last updated: {lastUpdated,</span>}</span>
              <Users className="w-4 h-4" />
              <span>{totalPages</span>}pages</span>
            </div>
          </div>
<<<<<<< HEAD

          {/* Quick Stats */} <div className="grid grid-cols-1 md: grid-cols-4 gap-6 mb-16">,</div>
            <div className="cyber-card-enhanced p-6 text-center">
              <Map className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">{totalPages</div>}</div>
              <div className="text-gray-300">Total Pages</div>
            </div>
            <div className="cyber-card-enhanced p-6 text-center">
              <Brain className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">AI Services</div>
            </div>
            <div className="cyber-card-enhanced p-6 text-center">
              <Cloud className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">20+</div>
              <div className="text-gray-300">IT Services</div>
            </div>
            <div className="cyber-card-enhanced p-6 text-center">
              <Zap className="w-8 h-8 text-orange-400 mx-auto mb-4" />
              <div className="text-2xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Micro SaaS</div>
            </div>
          </div>

          {/* Page Categories */} <div className="space-y-12">{pageCategories.map((category, categoryIndex) => (</div>
              <div key={categoryIndex}className="cyber-card-enhanced p-8">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h2 className="text-2xl font-bold text-white">{category.title</h2>}</h2>
                  <span className="ml-4 px-3 py-1 bg-slate-700 text-cyan-400 text-sm font-semibold rounded">{category.pages.length</span>}pages;
                  </span>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-4">,</div>
                  {category.pages.map((page, pageIndex) => (
                    <div key={pageIndex}className="bg-slate-800 rounded-lg p-4 hover: bg-slate-700 transition-colors duration-300">,</div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white group-hover: text-cyan-400 transition-colors">,
                          {page.name} </h3>
                        <a;
                          href={page.url}className="text-cyan-400 hover: text-cyan-300 transition-colors",
                          aria-label={`Visit ${page.name}`}
                        >
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{page.description</p>}</p>
                      <a;
                        href={page.url}className="text-cyan-400 hover: text-cyan-300 text-sm font-medium flex items-center",
                      >
                        Visit Page;
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Search Functionality */} <div className="cyber-card-enhanced p-8 mt-16">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Can't Find What You're Looking For?</h2>
            <p className="text-gray-300 text-center mb-8">Use our search functionality or contact our support team for assistance.</p>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a;
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover: from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300",
              >
                Contact Support;
              </a>
              <a;
                href="/search"
                className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover: bg-cyan-400 hover:text-slate-900 transition-all duration-300",
              >
                Search Site;
              </a>
              <a;
                href="/"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover: bg-white hover:text-slate-900 transition-all duration-300",
              >
                Go Home;
              </a>
            </div>
          </div>

          {/* XML Sitemap Link */} <div className="cyber-card-enhanced p-6 mt-8 text-center">
            <h3 className="text-lg font-semibold text-white mb-2">For Developers</h3>
            <p className="text-gray-300 mb-4">Access our XML sitemap for search engines and automated tools.</p>
            </p>
            <a;
              href="/sitemap.xml"
              className="text-cyan-400 hover: text-cyan-300 font-medium flex items-center justify-center",
            >
              <Code className="w-4 h-4 mr-2" />
              View XML Sitemap;
              <ExternalLink className="w-4 h-4 ml-2" />
=======
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4"></h2>
            Need Help Finding Something?
          </h2>
          <p className="text-gray-600 mb-6"></p>
            If you can't find what you're looking for, feel free to contact us directly.
          </p>
          <div>
            <a 
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            ></a>
              Contact Us
            </a>
            <a 
              href="tel:+13024640950"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-center"
            ></a>
              Call Us: (302) 464-0950
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
            </a>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </>
<<<<<<< HEAD
  );
};

export default SitemapPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
=======
  )
}

export default SitemapPage
=======
    </div>
)]
    };
export default SitemapPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
