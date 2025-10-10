'use client';
import React, { useState } from 'react';
import { Search, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<string[]>(['main', 'services', 'ai-services', 'it-services']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const sitemapData = [
    {
      id: 'main',
      title: 'Main Pages',
      icon: '🏠',
      pages: [
        { name: 'Home', url: '/', description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', url: '/about', description: 'Learn about our company and mission' },
        { name: 'Contact', url: '/contact', description: 'Get in touch with our team' },
        { name: 'Pricing', url: '/pricing', description: 'View our service pricing plans' },
        { name: 'Blog', url: '/blog', description: 'Latest insights and industry news' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client results' },
        { name: 'Enterprise', url: '/enterprise', description: 'Enterprise solutions and services' },
        { name: 'Privacy Policy', url: '/privacy', description: 'Our privacy policy and data practices' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions for our services' },
        { name: 'Sitemap', url: '/sitemap', description: 'Complete site navigation guide' }
      ]
    },
    {
      id: 'services',
      title: 'Services Overview',
      icon: '⚙️',
      pages: [
        { name: 'All Services', url: '/services', description: 'Complete list of our services' },
        { name: 'AI Services', url: '/ai-services', description: 'Artificial Intelligence solutions' },
        { name: 'IT Services', url: '/it-services', description: 'Information Technology services' },
        { name: 'Specialized Services', url: '/specialized-services', description: 'Advanced technology solutions' }
      ]
    },
    {
      id: 'ai-services',
      title: 'AI & Machine Learning',
      icon: '🤖',
      pages: [
        { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Intelligent project management' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content creation' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analysis' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-enhanced security solutions' },
        { name: 'AI Business Intelligence', url: '/ai-business-intelligence', description: 'Smart business insights' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Process automation solutions' },
        { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-driven marketing strategies' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Healthcare AI solutions' },
        { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial technology AI' },
        { name: 'AI E-commerce', url: '/ai-ecommerce-solutions', description: 'E-commerce AI optimization' },
        { name: 'AI HR Solutions', url: '/ai-hr', description: 'Human resources AI tools' },
        { name: 'AI Legal Assistant', url: '/ai-legal', description: 'Legal AI assistance' },
        { name: 'AI Real Estate', url: '/ai-real-estate', description: 'Real estate AI analytics' },
        { name: 'AI Manufacturing', url: '/ai-manufacturing', description: 'Manufacturing AI solutions' },
        { name: 'AI Transportation', url: '/ai-transportation', description: 'Transportation AI systems' },
        { name: 'AI Education', url: '/ai-education', description: 'Educational AI platforms' },
        { name: 'AI Energy', url: '/ai-energy', description: 'Energy sector AI solutions' },
        { name: 'AI Insurance', url: '/ai-insurance', description: 'Insurance AI applications' },
        { name: 'AI Video Generation', url: '/ai-video-generation', description: 'AI video creation tools' },
        { name: 'AI Voice Cloning', url: '/ai-voice-cloning', description: 'Voice synthesis technology' },
        { name: 'AI Music Composition', url: '/ai-music-composition', description: 'AI music generation' },
        { name: 'AI Fashion Design', url: '/ai-fashion-design', description: 'Fashion design AI' },
        { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content AI creation' },
        { name: 'AI Writing Assistant', url: '/ai-writing-assistant', description: 'AI writing support' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Scheduler', url: '/ai-scheduler', description: 'Intelligent scheduling system' },
        { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI SEO Optimizer', url: '/ai-seo-optimizer', description: 'SEO optimization AI' },
        { name: 'AI Social Media Manager', url: '/ai-social-media-manager', description: 'Social media AI management' },
        { name: 'AI Email Marketing', url: '/ai-email-marketing', description: 'Email marketing AI' },
        { name: 'AI CRM', url: '/ai-crm', description: 'Customer relationship AI' },
        { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Email management AI' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'Chatbot creation platform' },
        { name: 'AI Customer Support Bot', url: '/ai-customer-support-bot', description: 'Customer support automation' },
        { name: 'AI Code Generation', url: '/ai-code-generation', description: 'AI-powered coding assistance' },
        { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile app AI development' },
        { name: 'AI Document Processing', url: '/ai-document-processing', description: 'Document AI processing' },
        { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'Data visualization AI' },
        { name: 'AI Quality Assurance', url: '/ai-quality-assurance', description: 'Quality assurance AI' },
        { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales process automation' },
        { name: 'AI Financial Analyzer', url: '/ai-financial-analyzer', description: 'Financial analysis AI' },
        { name: 'AI Inventory Manager', url: '/ai-inventory-manager', description: 'Inventory management AI' },
        { name: 'AI Fraud Detection', url: '/ai-fraud-detection', description: 'Fraud detection AI' },
        { name: 'AI Fitness Coach', url: '/ai-fitness-coach', description: 'Personal fitness AI' },
        { name: 'AI Legal Assistant', url: '/ai-legal-assistant', description: 'Legal assistance AI' },
        { name: 'AI HR Assistant', url: '/ai-hr-assistant', description: 'HR management AI' }
      ]
    },
    {
      id: 'it-services',
      title: 'IT & Infrastructure',
      icon: '💻',
      pages: [
        { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud computing solutions' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security and protection services' },
        { name: 'DevOps', url: '/devops', description: 'Development and operations' },
        { name: 'Database Services', url: '/database-services', description: 'Database management' },
        { name: 'Cloud Migration', url: '/cloud-migration', description: 'Cloud migration services' },
        { name: 'Cloud Security', url: '/cloud-security', description: 'Cloud security solutions' },
        { name: 'Enterprise Security', url: '/enterprise-security', description: 'Enterprise security solutions' },
        { name: 'Data Center', url: '/data-center', description: 'Data center services' },
        { name: 'Backup Recovery', url: '/backup-recovery', description: 'Backup and disaster recovery' },
        { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance services' },
        { name: 'Developer Tools', url: '/developer-tools', description: 'Development tools and platforms' },
        { name: 'Business Intelligence', url: '/business-intelligence', description: 'Business intelligence solutions' },
        { name: 'Analytics Tools', url: '/analytics-tools', description: 'Data analytics platforms' },
        { name: 'Business Apps', url: '/business-apps', description: 'Business application development' },
        { name: 'Expense Tracker', url: '/expense-tracker', description: 'Expense tracking application' }
      ]
    },
    {
      id: 'specialized',
      title: 'Specialized Solutions',
      icon: '🚀',
      pages: [
        { name: 'Quantum Computing', url: '/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Autonomous system development' },
        { name: 'Blockchain', url: '/blockchain', description: 'Blockchain technology solutions' },
        { name: 'IoT Edge', url: '/iot-edge', description: 'IoT and edge computing' },
        { name: 'Computer Vision', url: '/computer-vision', description: 'Computer vision solutions' },
        { name: 'Machine Learning', url: '/machine-learning', description: 'ML model development' },
        { name: 'Natural Language Processing', url: '/ai-nlp', description: 'NLP solutions' }
      ]
    }
  ];

  const filteredSitemap = sitemapData.map(section => ({
    ...section,
    pages: section.pages.filter(page => 
      page.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      page.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.pages.length > 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Sitemap
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Navigate through all our pages and services. Use the search to quickly find what you're looking for.
          </p>
        </section>

        {/* Search */}
        <section className="mb-12">
          <div className="cyber-card p-6 max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search pages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300"
              />
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="space-y-8">
          {filteredSitemap.map((section) => (
            <div key={section.id} className="cyber-card p-6">
              <button
                onClick={() => toggleSection(section.id)}
                className="flex items-center justify-between w-full text-left mb-4"
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{section.icon}</span>
                  <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2>
                  <span className="ml-4 text-sm text-gray-400">({section.pages.length} pages)</span>
                </div>
                {expandedSections.includes(section.id) ? (
                  <ChevronDown className="w-6 h-6 text-cyan-400" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-cyan-400" />
                )}
              </button>

              {expandedSections.includes(section.id) && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {section.pages.map((page, index) => (
                    <a
                      key={index}
                      href={page.url}
                      className="group p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                            {page.name}
                          </h3>
                          <p className="text-sm text-gray-300 mb-3">{page.description}</p>
                          <div className="text-xs text-cyan-400 font-mono">{page.url}</div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors ml-2 flex-shrink-0" />
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Quick Stats */}
        <section className="mt-16">
          <div className="cyber-card p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Site Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {sitemapData.reduce((total, section) => total + section.pages.length, 0)}
                </div>
                <div className="text-gray-300">Total Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  {sitemapData.length}
                </div>
                <div className="text-gray-300">Main Sections</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">
                  {sitemapData.find(s => s.id === 'ai-services')?.pages.length || 0}
                </div>
                <div className="text-gray-300">AI Services</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">
                  {sitemapData.find(s => s.id === 'it-services')?.pages.length || 0}
                </div>
                <div className="text-gray-300">IT Services</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SitemapPage;