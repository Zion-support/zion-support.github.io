import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Home, Brain, Shield, Cloud, Zap, Globe, Users, FileText, Mail } from "lucide-react";

const SitemapPage = () => {
  const mainPages = [
    { name: 'Home', path: '/', icon: <Home className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Users className="w-4 h-4" /> },
    { name: 'Services', path: '/services', icon: <Shield className="w-4 h-4" /> },
    { name: 'Pricing', path: '/pricing', icon: <FileText className="w-4 h-4" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <FileText className="w-4 h-4" /> },
    { name: 'Blog', path: '/blog', icon: <FileText className="w-4 h-4" /> },
    { name: 'Contact', path: '/contact', icon: <Mail className="w-4 h-4" /> }
  ];

  const aiServices = [
    { name: 'AI Services', path: '/ai-services' },
    { name: 'AI Analytics', path: '/ai-analytics' },
    { name: 'AI Automation', path: '/ai-automation' },
    { name: 'AI Business Intelligence', path: '/ai-business-intelligence' },
    { name: 'AI Content Generation', path: '/ai-content-generation' },
    { name: 'AI Customer Service', path: '/ai-customer-service' },
    { name: 'AI Data Analytics', path: '/ai-data-analytics' },
    { name: 'AI Email Automation', path: '/ai-email-automation' },
    { name: 'AI Fraud Detection', path: '/ai-fraud-detection' },
    { name: 'AI Healthcare', path: '/ai-healthcare' },
    { name: 'AI Marketing', path: '/ai-marketing' },
    { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics' },
    { name: 'AI Project Management', path: '/ai-project-management' },
    { name: 'AI Recommendation Engine', path: '/ai-recommendation-engine' },
    { name: 'AI Sales Automation', path: '/ai-sales-automation' },
    { name: 'AI Workflow Automation', path: '/ai-workflow-automation' }
  ];

  const itServices = [
    { name: 'Cloud Services', path: '/cloud-services' },
    { name: 'Cybersecurity', path: '/cybersecurity' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Custom Development', path: '/custom-development' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Custom Software', path: '/custom-software' },
    { name: 'Network Infrastructure', path: '/network-infrastructure' },
    { name: 'Cloud Native Development', path: '/cloud-native-development' },
    { name: 'Blockchain Development', path: '/blockchain-development' },
    { name: 'E-commerce Development', path: '/e-commerce-development' },
    { name: 'Data Engineering', path: '/data-engineering' },
    { name: 'Machine Learning', path: '/machine-learning' },
    { name: 'Quantum Computing', path: '/quantum-computing' },
    { name: 'Robotics', path: '/robotics' }
  ];

  const microSaas = [
    { name: 'Zion Analytics Pro', path: '/zion-analytics-pro' },
    { name: 'Zion Security Shield', path: '/zion-security-shield' },
    { name: 'Zion Cloud Vault', path: '/zion-cloud-vault' },
    { name: 'Zion Content Studio', path: '/zion-content-studio' },
    { name: 'Zion Data Sync', path: '/zion-data-sync' },
    { name: 'Zion Lead Magnet', path: '/zion-lead-magnet' },
    { name: 'Zion Project Master', path: '/zion-project-master' },
    { name: 'Zion Email Automation', path: '/zion-email-automation' },
    { name: 'Zion Social Scheduler', path: '/zion-social-scheduler' },
    { name: 'Zion Workflow Automation', path: '/zion-workflow-automation' },
    { name: 'Zion Invoice Genius', path: '/zion-invoice-genius' },
    { name: 'Zion Inventory Smart', path: '/zion-inventory-smart' },
    { name: 'Zion Compliance Manager', path: '/zion-compliance-manager' },
    { name: 'Zion Performance Monitor', path: '/zion-performance-monitor' }
  ];

  const fiveGSolutions = [
    { name: '5G Solutions', path: '/5g-solutions' },
    { name: '5G Data Analytics', path: '/5g-data-analytics' },
    { name: '5G Edge Computing', path: '/5g-edge-computing' },
    { name: '5G Implementation', path: '/5g-implementation' },
    { name: '5G Mobile Applications', path: '/5g-mobile-applications' },
    { name: '5G Network Infrastructure', path: '/5g-network-infrastructure' },
    { name: '5G Private Networks', path: '/5g-private-networks' },
    { name: '5G Smart City Solutions', path: '/5g-smart-city-solutions' }
  ];

  const supportPages = [
    { name: 'Tutorials', path: '/tutorials' },
    { name: 'Consultation', path: '/consultation' },
    { name: 'Demo', path: '/demo' },
    { name: 'Support', path: '/support' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Sitemap | Zion Tech Group</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, micro SAAS products, and 5G solutions."
        />
        <meta name="keywords" content="sitemap, website navigation, AI services, IT solutions, micro SAAS, 5G solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/sitemap" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive sitemap.
          </p>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Home className="w-6 h-6 mr-3 text-cyan-400" />
            Main Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                  {page.icon}
                </div>
                <span className="text-white group-hover:text-cyan-400 transition-colors font-medium">
                  {page.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-purple-400" />
            AI Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <span className="text-white group-hover:text-purple-400 transition-colors font-medium">
                  {service.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300 float-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-green-400" />
            IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <span className="text-white group-hover:text-green-400 transition-colors font-medium">
                  {service.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 float-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Zap className="w-6 h-6 mr-3 text-yellow-400" />
            Micro SAAS Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {microSaas.map((saas, index) => (
              <Link
                key={index}
                to={saas.path}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <span className="text-white group-hover:text-yellow-400 transition-colors font-medium">
                  {saas.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all duration-300 float-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5G Solutions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Globe className="w-6 h-6 mr-3 text-orange-400" />
            5G Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fiveGSolutions.map((solution, index) => (
              <Link
                key={index}
                to={solution.path}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <span className="text-white group-hover:text-orange-400 transition-colors font-medium">
                  {solution.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 group-hover:translate-x-1 transition-all duration-300 float-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Support Pages */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-400" />
            Support & Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {supportPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <span className="text-white group-hover:text-blue-400 transition-colors font-medium">
                  {page.name}
                </span>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 float-right" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our team for personalized assistance and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;