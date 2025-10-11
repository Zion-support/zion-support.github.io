'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, ArrowRight, Home, Users, Settings, Brain, Cloud, Code, FileText, Mail, Phone, Calendar, Shield, BarChart, Target, Globe, Database, Zap, Eye, Mic, Heart, DollarSign, Box, Cpu, Link, Server, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Package, Monitor, Search, Video, Headphones, Scale, Cookie } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SitemapPage: React.FC = () => {
  const lastUpdated = new Date().toISOString().split('T')[0];
  ;
  const pageCategories = [
    {
      title: 'Main Pages',
      icon: Home,
      pages: [
        { name: 'Home', url: '/', description: 'Landing page with company overview and services' },
        { name: 'About Us', url: '/about', description: 'Company information, team, and mission' },
        { name: 'Contact', url: '/contact', description: 'Contact information and inquiry form' },
        { name: 'Services', url: '/services', description: 'Overview of all our services' },
        { name: 'Pricing', url: '/pricing', description: 'Service pricing and packages' },
        { name: 'Blog', url: '/blog', description: 'Latest news, insights, and articles' },
        { name: 'Case Studies', url: '/case-studies', description: 'Success stories and client projects' },
        { name: 'Careers', url: '/careers', description: 'Job opportunities and company culture' }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      pages: [
        { name: 'AI Services Overview', url: '/ai-services', description: 'Comprehensive AI solutions and capabilities' },
        { name: 'AI Analytics Dashboard', url: '/ai-analytics-dashboard', description: 'Real-time business intelligence platform' },
        { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', description: 'No-code chatbot creation platform' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'Automated content creation tools' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data analysis and insights' },
        { name: 'AI Computer Vision', url: '/ai-computer-vision', description: 'Image and video analysis solutions' },
        { name: 'AI Voice Solutions', url: '/ai-voice-solutions', description: 'Speech recognition and synthesis' },
        { name: 'AI Workflow Automation', url: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI and diagnostic tools' },
        { name: 'AI Financial Services', url: '/ai-financial-services', description: 'Fintech AI solutions' },
        { name: 'AI HR Solutions', url: '/ai-hr-solutions', description: 'Human resources AI tools' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      pages: [
        { name: 'IT Services Overview', url: '/it-services', description: 'Complete IT infrastructure solutions' },
        { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', description: 'AWS, Azure, and GCP solutions' },
        { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', description: 'Comprehensive security services' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web application development' },
        { name: 'Mobile Development', url: '/mobile-development', description: 'iOS and Android app development' },
        { name: 'Web Development', url: '/web-development', description: 'Modern web application development' }
  ]
    },
    {
      title: 'Micro SaaS',
      icon: Zap,
      pages: [
        { name: 'Micro SaaS Overview', url: '/micro-saas', description: 'Complete Micro SaaS catalog' },
        { name: 'AI Content Writer', url: '/ai-content-writer', description: 'Automated content creation' },
        { name: 'AI Email Assistant', url: '/ai-email-assistant', description: 'Smart email management' },
        { name: 'AI Expense Tracker', url: '/ai-expense-tracker', description: 'Financial tracking solution' },
        { name: 'AI Invoice Generator', url: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Generation', url: '/ai-lead-generation', description: 'Prospect identification' },
        { name: 'AI Project Manager', url: '/ai-project-manager', description: 'Project coordination tool' }
  ]
    },
    {
      title: 'Emerging Technologies',
      icon: Code,
      pages: [
        { name: '5G Implementation', url: '/5g-implementation', description: 'Next-generation connectivity' },
        { name: 'AI 3D Generation', url: '/ai-3d-generation', description: '3D content creation' },
        { name: 'AI Holographic Workspace', url: '/ai-holographic-workspace', description: 'Immersive work environments' },
        { name: 'AI Autonomous Systems', url: '/ai-autonomous-systems', description: 'Self-operating systems' },
        { name: 'AI Blockchain Solutions', url: '/ai-blockchain-solutions', description: 'Decentralized AI solutions' },
        { name: 'AI Edge Computing', url: '/ai-edge-computing', description: 'Distributed processing' }
  ]
    },
    {
      title: 'Resources',
      icon: FileText,
      pages: [
        { name: 'Tutorials', url: '/tutorials', description: 'Step-by-step guides and tutorials' },
        { name: 'Documentation', url: '/docs', description: 'Technical documentation and APIs' },
        { name: 'FAQ', url: '/faq', description: 'Frequently asked questions' },
        { name: 'Support', url: '/support', description: 'Technical support and help center' },
        { name: 'Community', url: '/community', description: 'User community and forums' },
        { name: 'Demo', url: '/demo', description: 'Request a product demonstration' },
        { name: 'Consultation', url: '/consultation', description: 'Free business consultation' },
        { name: 'Status', url: '/status', description: 'Service status and uptime' }
      ]
    },
    {
      title: 'Legal & Compliance',
      icon: Shield,
      pages: [
        { name: 'Privacy Policy', url: '/privacy', description: 'Data protection and privacy practices' },
        { name: 'Terms of Service', url: '/terms', description: 'Terms and conditions of use' },
        { name: 'Cookie Policy', url: '/cookies', description: 'Cookie usage and management' },
        { name: 'Compliance', url: '/compliance', description: 'Regulatory compliance information' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Started', url: '/contact', icon: ArrowRight },
    { name: 'Free Consultation', url: '/consultation', icon: Calendar },
    { name: 'Request Demo', url: '/demo', icon: Video },
    { name: 'Support Center', url: '/support', icon: Headphones },
    { name: 'Pricing', url: '/pricing', icon: DollarSign },;
    { name: 'Blog', url: '/blog', icon: FileText };
  ];

  return() {quickLinks.map((link, index) => ()
                ))}
              </div>
            </div>

            {/* Sitemap Sections */}
            <div className="space-y-12" /></div>
              {sitemapSections.map((section, sectionIndex) => ()
                    {section.pages.map((page, pageIndex) => ()
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Search Box */}
            <div className="mt-16 text-center" /></div>
              <div className="bg-slate-800/50 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Can't Find What You're Looking For?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Use our search functionality or contact us directly for assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto" /></div>
                  <div className="flex-1 relative" /></div>
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" / /></Search>
                    <input type="text"
                      placeholder="Search our website..."
                      className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    / /></input>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300" /></button>
                    Search
                  </button>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="mt-12 text-center" /></div>
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-lg p-8" /></div>
                <h2 className="text-2xl font-bold text-white mb-4" /></h2>
                  Need Help Finding Something?
                </h2>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto" /></p>
                  Our team is here to help you find exactly what you need. Contact us for personalized assistance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center" /></div>
                  <a href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    Contact Us
                  </a>
                  <a href="tel:+13024640950"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300" /></a>
                    Call: (302) 464-0950
                  </a>
                </div>
        </section>
      </main>
      <Footer />
    </>
  );
      </main>
      
      <Footer /></Footer>
    </>
  );
};

export default SitemapPage;
