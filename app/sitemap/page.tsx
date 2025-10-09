'use client';
import React from 'react';
import { Map, ExternalLink, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import PerformanceOptimizer from '../components/PerformanceOptimizer';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SecurityEnhancer from '../components/SecurityEnhancer';
import Analytics from '../components/Analytics';

const SitemapPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = [
    'All',
    'Main Pages',
    'AI Services',
    'IT Services',
    'Micro SAAS',
    'Company',
    'Legal'
  ];

  const mainPages = [
    { name: 'Home', url: '/', description: 'Main landing page with company overview' },
    { name: 'About Us', url: '/about', description: 'Company information, team, and mission' },
    { name: 'Services', url: '/services', description: 'Overview of all our services' },
    { name: 'Pricing', url: '/pricing', description: 'Service pricing and plans' },
    { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
    { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
    { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' }
  ];

  const aiServices = [
    { name: 'AI Services Overview', url: '/ai-services', description: 'Comprehensive AI solutions' },
    { name: 'Machine Learning', url: '/machine-learning', description: 'Custom ML models and solutions' },
    { name: 'Natural Language Processing', url: '/nlp', description: 'NLP and language AI solutions' },
    { name: 'Computer Vision', url: '/computer-vision', description: 'Image and video analysis' },
    { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
    { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'AI-powered BI solutions' },
    { name: 'AI Analytics', url: '/ai-analytics', description: 'Advanced data analytics' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Interactive data dashboards' },
    { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D model and content creation' },
    { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Video Generation', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content creation' },
    { name: 'AI Content Writer', url: '/ai-content-writer', description: 'AI writing assistance' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media automation' },
    { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email campaign automation' },
    { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: 'Intelligent chatbots' },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Custom chatbot creation' },
    { name: 'AI Project Manager', url: '/ai-project-manager', description: 'AI project management tools' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Business process automation' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales process optimization' },
    { name: 'AI CRM', url: '/ai-crm', description: 'AI-powered CRM solutions' },
    { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
    { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Intelligent scheduling system' },
    { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO optimization tools' },
    { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Automated lead generation' },
    { name: 'AI Code Generation', url: '/ai-code-generation', description: 'AI code assistance' },
    { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile app development' },
    { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document automation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analysis' },
    { name: 'AI Fashion Design', url: '/ai-fashion-design', description: 'AI fashion design tools' },
    { name: 'AI Music Composition', url: '/ai-music-composition', description: 'AI music creation' },
    { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personalized fitness coaching' },
    { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI solutions' },
    { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial analysis tools' },
    { name: 'AI Fintech', url: '/ai-fintech', description: 'Fintech AI solutions' },
    { name: 'AI Real Estate', url: '/ai-real-estate', description: 'Real estate AI tools' },
    { name: 'AI Manufacturing', url: '/ai-manufacturing', description: 'Manufacturing AI solutions' },
    { name: 'AI Transportation', url: '/ai-transportation', description: 'Transportation AI systems' },
    { name: 'AI Energy', url: '/ai-energy', description: 'Energy management AI' },
    { name: 'AI Education', url: '/ai-education', description: 'Educational AI solutions' },
    { name: 'AI HR', url: '/ai-hr', description: 'HR AI automation' },
    { name: 'AI Legal', url: '/ai-legal', description: 'Legal AI assistance' },
    { name: 'AI Insurance', url: '/ai-insurance', description: 'Insurance AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', description: 'Marketing AI tools' },
    { name: 'AI Quality Assurance', url: '/ai-quality-assurance', description: 'QA automation' },
    { name: 'AI Supply Chain', url: '/ai-supply-chain', description: 'Supply chain optimization' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
    { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Fraud prevention AI' }
  ];

  const itServices = [
    { name: 'IT Services Overview', url: '/it-services', description: 'Comprehensive IT solutions' },
    { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration and management' },
    { name: 'Cloud Migration', url: '/cloud-migration', description: 'Seamless cloud transitions' },
    { name: 'Cloud Security', url: '/cloud-security', description: 'Cloud security solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', description: 'Advanced security solutions' },
    { name: 'Enterprise Security', url: '/enterprise-security', description: 'Enterprise-grade security' },
    { name: 'DevOps & CI/CD', url: '/devops', description: 'Development and deployment automation' },
    { name: 'Database Services', url: '/database-services', description: 'Database management and optimization' },
    { name: 'IT Consulting', url: '/it-consulting', description: 'Strategic IT consulting' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Infrastructure design and management' },
    { name: 'Data Center', url: '/data-center', description: 'Data center solutions' },
    { name: 'Network Infrastructure', url: '/network-infrastructure', description: 'Network design and security' },
    { name: 'IT Support', url: '/it-support', description: '24/7 IT support services' },
    { name: 'Managed IT', url: '/managed-it', description: 'Comprehensive IT management' },
    { name: 'IT Asset Management', url: '/it-asset-management', description: 'Asset tracking and management' },
    { name: 'IT Performance', url: '/it-performance', description: 'Performance optimization' },
    { name: 'IT Training', url: '/it-training', description: 'IT skills training and certification' },
    { name: 'Backup & Recovery', url: '/backup-recovery', description: 'Data backup and disaster recovery' },
    { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance solutions' },
    { name: 'Developer Tools', url: '/developer-tools', description: 'Development tools and platforms' },
    { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing technology solutions' },
    { name: 'Business Intelligence', url: '/business-intelligence', description: 'BI and analytics solutions' },
    { name: 'Analytics Tools', url: '/analytics-tools', description: 'Advanced analytics platforms' },
    { name: 'Business Apps', url: '/business-apps', description: 'Custom business applications' },
    { name: 'Enterprise', url: '/enterprise', description: 'Enterprise solutions and consulting' },
    { name: 'Blockchain', url: '/blockchain', description: 'Blockchain development and solutions' },
    { name: 'IoT Edge', url: '/iot-edge', description: 'IoT and edge computing solutions' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Autonomous system development' },
    { name: 'Expense Tracker', url: '/expense-tracker', description: 'Expense tracking and management' }
  ];

  const microSaas = [
    { name: 'AI Project Manager Pro', url: '/ai-project-manager', description: 'Intelligent project planning' },
    { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Automated social media management' },
    { name: 'AI Analytics Dashboard', url: '/ai-analytics', description: 'Data insights and analytics' },
    { name: 'AI Email Marketing Suite', url: '/ai-email-marketing', description: 'Email campaign automation' },
    { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: '24/7 AI support' },
    { name: 'AI Code Review Assistant', url: '/ai-code-generation', description: 'Automated code analysis' },
    { name: 'AI Video Generator Pro', url: '/ai-video-generation', description: 'AI-powered video creation' },
    { name: 'AI Voice Cloning Studio', url: '/ai-voice-cloning', description: 'Realistic voice synthesis' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Process automation' },
    { name: 'AI Fashion Design Studio', url: '/ai-fashion-design', description: 'AI fashion design tools' },
    { name: 'AI Music Composition Suite', url: '/ai-music-composition', description: 'AI-generated music' },
    { name: 'AI Fitness Coach Pro', url: '/ai-fitness-coach', description: 'Personalized fitness coaching' },
    { name: 'AI Sales Automation Hub', url: '/ai-sales-automation', description: 'Sales optimization' },
    { name: 'AI Data Visualization Pro', url: '/ai-data-visualization', description: 'Interactive dashboards' },
    { name: 'AI 3D Generation Studio', url: '/ai-3d-generation', description: '3D content creation' },
    { name: 'AI Customer Support Pro', url: '/ai-customer-support', description: 'Advanced customer service' },
    { name: 'AI Content Writer Pro', url: '/ai-content-writer', description: 'AI writing assistance' }
  ];

  const companyPages = [
    { name: 'About Us', url: '/about', description: 'Company information and team' },
    { name: 'Contact', url: '/contact', description: 'Get in touch with us' },
    { name: 'Blog', url: '/blog', description: 'Latest insights and articles' },
    { name: 'Case Studies', url: '/case-studies', description: 'Client success stories' },
    { name: 'Pricing', url: '/pricing', description: 'Service pricing and plans' }
  ];

  const legalPages = [
    { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy policy' },
    { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions of use' },
    { name: 'Sitemap', url: '/sitemap', description: 'Complete site navigation' }
  ];

  const allPages = [
    ...mainPages.map(p => ({ ...p, category: 'Main Pages' })),
    ...aiServices.map(p => ({ ...p, category: 'AI Services' })),
    ...itServices.map(p => ({ ...p, category: 'IT Services' })),
    ...microSaas.map(p => ({ ...p, category: 'Micro SAAS' })),
    ...companyPages.map(p => ({ ...p, category: 'Company' })),
    ...legalPages.map(p => ({ ...p, category: 'Legal' }))
  ];

  const filteredPages = allPages.filter(page => {
    const matchesSearch = page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         page.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || page.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getPagesByCategory = (category: string) => {
    return allPages.filter(page => page.category === category);
  };

  return (
    <>
      <SEOOptimizer
        title="Sitemap - Zion Tech Group"
        description="Complete sitemap of Zion Tech Group's website. Find all our AI services, IT solutions, and company pages in one place."
        keywords={['sitemap', 'site map', 'navigation', 'pages', 'AI services', 'IT services', 'company pages']}
        canonicalUrl="https://ziontechgroup.com/sitemap"
      />
      <PerformanceOptimizer
        enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePreloading={true}
      />
      <AccessibilityEnhancer
        enableKeyboardNavigation={true}
        enableScreenReaderSupport={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      />
      <SecurityEnhancer
        enableCSP={true}
        enableHTTPSRedirect={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="Sitemap">
              Sitemap
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium">
              Complete Site Navigation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
              Find all our AI services, IT solutions, and company pages in one organized location. 
              Use the search and filter options to quickly find what you're looking for.
            </p>
          </section>

          {/* Search and Filter */}
          <section className="mb-12">
            <div className="cyber-card p-6 max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{mainPages.length}</div>
                <div className="text-gray-300">Main Pages</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">{aiServices.length}</div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{itServices.length}</div>
                <div className="text-gray-300">IT Services</div>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{microSaas.length}</div>
                <div className="text-gray-300">Micro SAAS</div>
              </div>
            </div>
          </section>

          {/* Search Results */}
          {searchTerm && (
            <section className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
                Search Results ({filteredPages.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPages.map((page, index) => (
                  <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-white">{page.name}</h3>
                      <span className="text-xs text-cyan-400 bg-cyan-400/20 px-2 py-1 rounded">
                        {page.category}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                    <a
                      href={page.url}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      Visit Page
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Category Sections */}
          {!searchTerm && (
            <div className="space-y-16">
              {/* Main Pages */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Main Pages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mainPages.map((page, index) => (
                    <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{page.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                      <a
                        href={page.url}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* AI Services */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">AI Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiServices.slice(0, 12).map((page, index) => (
                    <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{page.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                      <a
                        href={page.url}
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium transition-colors"
                      >
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
                {aiServices.length > 12 && (
                  <div className="text-center mt-8">
                    <p className="text-gray-400">
                      Showing 12 of {aiServices.length} AI services. 
                      <a href="/ai-services" className="text-cyan-400 hover:text-cyan-300 ml-2">
                        View all AI services →
                      </a>
                    </p>
                  </div>
                )}
              </section>

              {/* IT Services */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">IT Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itServices.slice(0, 12).map((page, index) => (
                    <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{page.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                      <a
                        href={page.url}
                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium transition-colors"
                      >
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
                {itServices.length > 12 && (
                  <div className="text-center mt-8">
                    <p className="text-gray-400">
                      Showing 12 of {itServices.length} IT services. 
                      <a href="/it-services" className="text-cyan-400 hover:text-cyan-300 ml-2">
                        View all IT services →
                      </a>
                    </p>
                  </div>
                )}
              </section>

              {/* Micro SAAS */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Micro SAAS Solutions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {microSaas.slice(0, 12).map((page, index) => (
                    <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{page.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                      <a
                        href={page.url}
                        className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium transition-colors"
                      >
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
                {microSaas.length > 12 && (
                  <div className="text-center mt-8">
                    <p className="text-gray-400">
                      Showing 12 of {microSaas.length} Micro SAAS solutions. 
                      <a href="/services" className="text-cyan-400 hover:text-cyan-300 ml-2">
                        View all Micro SAAS →
                      </a>
                    </p>
                  </div>
                )}
              </section>

              {/* Company Pages */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Company Pages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {companyPages.map((page, index) => (
                    <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{page.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                      <a
                        href={page.url}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>

              {/* Legal Pages */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Legal Pages</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {legalPages.map((page, index) => (
                    <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                      <h3 className="text-lg font-semibold text-white mb-3">{page.name}</h3>
                      <p className="text-gray-300 text-sm mb-4">{page.description}</p>
                      <a
                        href={page.url}
                        className="inline-flex items-center text-gray-400 hover:text-gray-300 font-medium transition-colors"
                      >
                        Visit Page
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* Contact CTA */}
          <section className="text-center mt-16">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Our team is here to help you find the right solution for your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Contact Us
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default SitemapPage;
