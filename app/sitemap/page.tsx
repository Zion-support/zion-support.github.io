import { ArrowRight, Home, Users, Briefcase, Brain, FileText, MessageCircle, DollarSign, BookOpen, UserCheck, Shield, Globe, Database, Code, Smartphone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Sitemap() {
  const mainPages = [
    { name: 'Home', path: '/', icon: <Home className="w-5 h-5" /> },
    { name: 'About Us', path: '/about', icon: <Users className="w-5 h-5" /> },
    { name: 'Our Team', path: '/team', icon: <Users className="w-5 h-5" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="w-5 h-5" /> },
    { name: 'AI Services', path: '/ai-services', icon: <Brain className="w-5 h-5" /> },
    { name: 'Case Studies', path: '/case-studies', icon: <FileText className="w-5 h-5" /> },
    { name: 'Blog', path: '/blog', icon: <BookOpen className="w-5 h-5" /> },
    { name: 'Careers', path: '/careers', icon: <UserCheck className="w-5 h-5" /> },
    { name: 'Contact', path: '/contact', icon: <MessageCircle className="w-5 h-5" /> },
    { name: 'Pricing', path: '/pricing', icon: <DollarSign className="w-5 h-5" /> },
    { name: 'Support', path: '/support', icon: <Shield className="w-5 h-5" /> },
    { name: 'Consultation', path: '/consultation', icon: <MessageCircle className="w-5 h-5" /> },
    { name: 'Demo', path: '/demo', icon: <Globe className="w-5 h-5" /> },
    { name: 'Tutorials', path: '/tutorials', icon: <BookOpen className="w-5 h-5" /> }
  ];

  const aiSolutions = [
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
    { name: 'Cloud Infrastructure', path: '/cloud-infrastructure' },
    { name: 'Cybersecurity Solutions', path: '/cybersecurity-solutions' },
    { name: 'Web Development', path: '/web-development' },
    { name: 'Mobile Development', path: '/mobile-development' },
    { name: 'Database Management', path: '/database-management' },
    { name: 'Custom Software', path: '/custom-software' },
    { name: 'Network Infrastructure', path: '/network-infrastructure' },
    { name: 'Cloud Native Development', path: '/cloud-native-development' },
    { name: 'Blockchain Development', path: '/blockchain-development' },
    { name: 'E-Commerce Development', path: '/e-commerce-development' },
    { name: 'Data Engineering', path: '/data-engineering' },
    { name: 'Data Analytics', path: '/data-analytics' },
    { name: 'IoT Solutions', path: '/iot-solutions' },
    { name: 'DevOps Solutions', path: '/devops-solutions' },
    { name: 'Machine Learning', path: '/machine-learning' },
    { name: 'Quantum Computing', path: '/quantum-computing' },
    { name: 'Robotics', path: '/robotics' }
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

  const legalPages = [
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Terms of Service', path: '/terms' },
    { name: 'Cookie Policy', path: '/cookies' }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website - find all our services, solutions, and pages"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Website
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Sitemap
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Navigate through all our services, solutions, and pages. Find exactly what you're looking for.
            </p>
          </div>
        </section>

        {/* Main Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Main Pages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mainPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {page.icon}
                  <span className="text-white font-medium">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AI Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              AI Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {aiSolutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.path}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <span className="text-white font-medium">{solution.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {itServices.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <span className="text-white font-medium">{service.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5G Solutions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              5G Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {fiveGSolutions.map((solution, index) => (
                <Link
                  key={index}
                  to={solution.path}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <span className="text-white font-medium">{solution.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Legal & Policies
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {legalPages.map((page, index) => (
                <Link
                  key={index}
                  to={page.path}
                  className="p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <span className="text-white font-medium">{page.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us and we'll help you find the right solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
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
    </>
  );
}
