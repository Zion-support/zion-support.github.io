import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Map, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const SitemapPage: React.FC = () => {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        { name: 'Home', path: '/', description: 'Main landing page' },
        { name: 'About Us', path: '/about', description: 'Company information and team' },
        { name: 'Contact', path: '/contact', description: 'Get in touch with us' },
        { name: 'Team', path: '/team', description: 'Meet our team members' },
        { name: 'Enterprise', path: '/enterprise', description: 'Enterprise solutions' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and case studies' }
      ]
    },
    {
      category: 'AI Services',
      pages: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing tools' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Business process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Healthcare AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial technology AI' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Data analysis and insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI-powered security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' }
      ]
    },
    {
      category: 'IT Services',
      pages: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT solutions' },
        { name: 'Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'Cloud computing services' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security and protection services' },
        { name: 'E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'Online business solutions' },
        { name: 'Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile application development' }
      ]
    },
    {
      category: 'Micro SAAS',
      pages: [
        { name: 'Micro SAAS', path: '/micro-saas', description: 'Small business software solutions' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'Development and coding tools' },
        { name: 'Business Apps', path: '/business-apps', description: 'Business application suite' },
        { name: 'Productivity Tools', path: '/productivity', description: 'Productivity enhancement tools' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation tools' }
      ]
    },
    {
      category: 'Specialized Services',
      pages: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing solutions' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Blockchain technology solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Internet of Things solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data intelligence and analytics' }
      ]
    },
    {
      category: 'Resources',
      pages: [
        { name: 'Blog & Insights', path: '/blog', description: 'Latest articles and insights' },
        { name: 'Technical Guides', path: '/guides', description: 'Technical documentation and guides' },
        { name: 'Documentation', path: '/docs', description: 'Complete technical documentation' },
        { name: 'API Reference', path: '/api', description: 'Developer API documentation' },
        { name: 'Privacy Policy', path: '/privacy', description: 'Privacy and data protection policy' },
        { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Sitemap
          </h1>
          <p className="text-lg sm:text-xl text-cyan-400 mb-8 font-medium">
            Complete Site Navigation
          </p>
          <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Explore all pages and sections of our website. Find exactly what you're looking for 
            with our comprehensive site structure and navigation guide.
          </p>
        </section>

        {/* Site Structure */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
            Site Structure
          </h2>
          <div className="space-y-8">
            {siteStructure.map((category, categoryIndex) => (
              <div key={categoryIndex} className="cyber-card hologram-card p-6">
                <div className="flex items-center mb-6">
                  <Map className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.pages.map((page, pageIndex) => (
                    <a
                      key={pageIndex}
                      href={page.path}
                      className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      <div>
                        <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                          {page.name}
                        </div>
                        <div className="text-sm text-gray-400">
                          {page.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Site Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">66+</div>
                <div className="text-gray-300">Total Pages</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">8</div>
                <div className="text-gray-300">Service Categories</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">29</div>
                <div className="text-gray-300">Blog Articles</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-400 mb-2">100%</div>
                <div className="text-gray-300">Mobile Responsive</div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Tips */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Search Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Use the Search Bar</h3>
                  <p className="text-gray-300">Search for specific topics, services, or keywords using our site search.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Browse by Category</h3>
                  <p className="text-gray-300">Navigate through our organized service categories to find what you need.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Check the Footer</h3>
                  <p className="text-gray-300">Quick access to important pages and resources in our footer.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Contact Us</h3>
                  <p className="text-gray-300">Can't find what you're looking for? Our team is here to help.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 cyber-card">
          <h2 className="text-3xl font-bold text-white mb-4 neon-text">
            Need Help Finding Something?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is here to help you navigate our services and find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SitemapPage;
