import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Brain, Shield, Zap, Database, Code, BarChart3, Users, BookOpen, Phone, Star } from 'lucide-react';

const SitemapPage = () => {
  const mainPages = [
    { name: 'Home', path: '/', description: 'Zion Tech Group homepage' },
    { name: 'About Us', path: '/about', description: 'Learn about our company and mission' },
    { name: 'Services', path: '/services', description: 'Our comprehensive service offerings' },
    { name: 'Pricing', path: '/pricing', description: 'Transparent pricing for all services' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories and client results' },
    { name: 'Blog', path: '/blog', description: 'Latest insights and technology trends' },
    { name: 'Contact', path: '/contact', description: 'Get in touch with our team' },
    { name: 'Consultation', path: '/consultation', description: 'Free consultation with our experts' }
  ];

  const aiServices = [
    { name: 'AI Analytics', path: '/ai-analytics', description: 'Business intelligence with AI' },
    { name: 'AI Automation', path: '/ai-automation', description: 'Process automation solutions' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence', description: 'Smart business insights' },
    { name: 'AI Content Generation', path: '/ai-content-generation', description: 'Automated content creation' },
    { name: 'AI Customer Service', path: '/ai-customer-service', description: 'Intelligent customer support' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data analysis' },
    { name: 'AI Email Automation', path: '/ai-email-automation', description: 'Email marketing automation' },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection', description: 'AI-powered fraud prevention' },
    { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Healthcare AI solutions' },
    { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing tools' },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Predictive modeling and forecasting' },
    { name: 'AI Project Management', path: '/ai-project-management', description: 'AI-driven project management' },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine', description: 'Personalized recommendation systems' },
    { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales process automation' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'End-to-end workflow automation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions', description: 'Comprehensive security services' },
    { name: 'Web Development', path: '/web-development', description: 'Modern web applications' },
    { name: 'Mobile Development', path: '/mobile-development', description: 'iOS and Android applications' },
    { name: 'Database Management', path: '/database-management', description: 'Data management solutions' },
    { name: 'Custom Software', path: '/custom-software', description: 'Tailored software solutions' },
    { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network design and implementation' },
    { name: 'Cloud Native Development', path: '/cloud-native-development', description: 'Cloud-native applications' },
    { name: 'Blockchain Development', path: '/blockchain-development', description: 'Blockchain solutions' },
    { name: 'E-commerce Development', path: '/e-commerce-development', description: 'Online store solutions' },
    { name: 'Data Engineering', path: '/data-engineering', description: 'Data pipeline and processing' },
    { name: 'Machine Learning Ops', path: '/machine-learning-ops', description: 'ML model deployment and management' },
    { name: 'Enterprise Integration', path: '/enterprise-integration', description: 'System integration services' },
    { name: 'Performance Optimization', path: '/performance-optimization', description: 'Application performance tuning' },
    { name: 'Disaster Recovery', path: '/disaster-recovery-advanced', description: 'Business continuity solutions' }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro', featured: true, description: 'Business intelligence platform' },
    { name: 'Zion Security Shield', path: '/zion-security-shield', featured: true, description: 'Advanced security monitoring' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault', featured: true, description: 'Secure cloud storage' },
    { name: 'Zion Content Studio', path: '/zion-content-studio', description: 'Content creation tools' },
    { name: 'Zion Data Sync', path: '/zion-data-sync', description: 'Data synchronization platform' },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet', description: 'Lead generation tools' },
    { name: 'Zion Project Master', path: '/zion-project-master', description: 'Project management suite' },
    { name: 'Zion Email Automation', path: '/zion-email-automation', description: 'Email marketing automation' },
    { name: 'Zion Social Scheduler', path: '/zion-social-scheduler', description: 'Social media management' },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation', description: 'Workflow automation tools' },
    { name: 'Zion Invoice Genius', path: '/zion-invoice-genius', description: 'Invoice generation and management' },
    { name: 'Zion Inventory Smart', path: '/zion-inventory-smart', description: 'Inventory management system' },
    { name: 'Zion Compliance Manager', path: '/zion-compliance-manager', description: 'Compliance tracking and management' },
    { name: 'Zion Performance Monitor', path: '/zion-performance-monitor', description: 'Application performance monitoring' }
  ];

  const solutions = [
    { name: 'AI Solutions', path: '/ai-services', description: 'Comprehensive AI services' },
    { name: '5G Solutions', path: '/5g-solutions', description: 'Next-generation connectivity' },
    { name: 'Data Analytics', path: '/data-analytics', description: 'Business intelligence and analytics' },
    { name: 'IoT Solutions', path: '/iot-solutions', description: 'Internet of Things implementation' },
    { name: 'DevOps Solutions', path: '/devops-solutions', description: 'Development and operations' },
    { name: 'Machine Learning', path: '/machine-learning', description: 'ML model development' },
    { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum computing solutions' },
    { name: 'Robotics', path: '/robotics', description: 'Robotic process automation' }
  ];

  const resources = [
    { name: 'Tutorials', path: '/tutorials', description: 'Learning resources and guides' },
    { name: 'Demo', path: '/demo', description: 'Product demonstrations' },
    { name: 'Support', path: '/support', description: 'Help and support center' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
    { name: 'Press', path: '/press', description: 'Press releases and media' },
    { name: 'Partners', path: '/partners', description: 'Partnership opportunities' }
  ];

  const legal = [
    { name: 'Privacy Policy', path: '/privacy', description: 'Data privacy and protection' },
    { name: 'Terms of Service', path: '/terms', description: 'Terms and conditions' },
    { name: 'Cookie Policy', path: '/cookies', description: 'Cookie usage information' },
    { name: 'GDPR Compliance', path: '/gdpr', description: 'GDPR compliance information' },
    { name: 'Security', path: '/security', description: 'Security practices and policies' }
  ];

  const sections = [
    {
      title: 'Main Pages',
      icon: <Globe className="w-5 h-5" />,
      items: mainPages,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Services',
      icon: <Brain className="w-5 h-5" />,
      items: aiServices,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'IT Services',
      icon: <Shield className="w-5 h-5" />,
      items: itServices,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Micro SAAS',
      icon: <Zap className="w-5 h-5" />,
      items: microSaas,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Solutions',
      icon: <Database className="w-5 h-5" />,
      items: solutions,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Resources',
      icon: <BookOpen className="w-5 h-5" />,
      items: resources,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Legal',
      icon: <Code className="w-5 h-5" />,
      items: legal,
      color: 'from-gray-500 to-slate-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta name="description" content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, Micro SAAS products, and resources in one place." />
        <meta name="keywords" content="sitemap, navigation, AI services, IT solutions, Micro SAAS, website structure" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Site <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Navigation</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site map.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
                <Phone className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Sitemap Sections */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {sections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center mr-4`}>
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {section.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <div className="flex-1">
                          <div className="flex items-center">
                            <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                              {item.name}
                            </h3>
                            {item.featured && (
                              <Star className="w-4 h-4 text-yellow-400 fill-current ml-2" />
                            )}
                          </div>
                          <p className="text-gray-400 text-sm mt-1">{item.description}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-3xl p-12 border border-white/20">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Site Overview</h2>
                <p className="text-gray-300">Comprehensive coverage of AI, IT, and technology solutions</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">150+</div>
                  <div className="text-gray-300 text-sm">AI Services</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-gray-300 text-sm">IT Solutions</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">25+</div>
                  <div className="text-gray-300 text-sm">Micro SAAS</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-gray-300 text-sm">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our team is here to help you find the perfect solution for your business needs. 
              Contact us for a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Our Team
                <Phone className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SitemapPage;