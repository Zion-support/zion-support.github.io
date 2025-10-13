import { ArrowRight, Map, Home, Users, Settings, BarChart3, Brain, Shield, Globe, Zap, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/", icon: <Home className="w-4 h-4" />, description: "Main homepage with company overview" },
    { name: "About", path: "/about", icon: <Users className="w-4 h-4" />, description: "Learn about our company and team" },
    { name: "Services", path: "/services", icon: <Settings className="w-4 h-4" />, description: "Our comprehensive service offerings" },
    { name: "Pricing", path: "/pricing", icon: <BarChart3 className="w-4 h-4" />, description: "Transparent pricing for all services" },
    { name: "Contact", path: "/contact", icon: <Mail className="w-4 h-4" />, description: "Get in touch with our team" },
    { name: "Blog", path: "/blog", icon: <Brain className="w-4 h-4" />, description: "Latest insights and industry news" },
    { name: "Case Studies", path: "/case-studies", icon: <BarChart3 className="w-4 h-4" />, description: "Success stories and client results" },
    { name: "Careers", path: "/careers", icon: <Users className="w-4 h-4" />, description: "Join our growing team" },
    { name: "Consultation", path: "/consultation", icon: <Phone className="w-4 h-4" />, description: "Free technology consultation" },
    { name: "Demo", path: "/demo", icon: <Globe className="w-4 h-4" />, description: "Live product demonstrations" },
    { name: "Support", path: "/support", icon: <Shield className="w-4 h-4" />, description: "Customer support and help center" },
    { name: "Tutorials", path: "/tutorials", icon: <Brain className="w-4 h-4" />, description: "Learning resources and guides" }
  ];

  const aiServices = [
    { name: "AI Services Overview", path: "/ai-services", description: "Comprehensive AI solutions" },
    { name: "AI Analytics", path: "/ai-analytics", description: "Advanced data analytics with AI" },
    { name: "AI Automation", path: "/ai-automation", description: "Intelligent process automation" },
    { name: "AI Business Intelligence", path: "/ai-business-intelligence", description: "AI-powered business insights" },
    { name: "AI Content Generation", path: "/ai-content-generation", description: "AI-powered content creation" },
    { name: "AI Customer Service", path: "/ai-customer-service", description: "Intelligent customer support" },
    { name: "AI Data Analytics", path: "/ai-data-analytics", description: "Advanced data processing" },
    { name: "AI Email Automation", path: "/ai-email-automation", description: "Smart email marketing" },
    { name: "AI Fraud Detection", path: "/ai-fraud-detection", description: "Advanced fraud prevention" },
    { name: "AI Healthcare", path: "/ai-healthcare", description: "Healthcare AI solutions" },
    { name: "AI Marketing", path: "/ai-marketing", description: "AI-driven marketing automation" },
    { name: "AI Predictive Analytics", path: "/ai-predictive-analytics", description: "Predictive modeling and forecasting" },
    { name: "AI Project Management", path: "/ai-project-management", description: "Intelligent project planning" },
    { name: "AI Recommendation Engine", path: "/ai-recommendation-engine", description: "Personalized recommendations" },
    { name: "AI Sales Automation", path: "/ai-sales-automation", description: "Automated sales processes" },
    { name: "AI Workflow Automation", path: "/ai-workflow-automation", description: "End-to-end workflow automation" }
  ];

  const itServices = [
    { name: "Cloud Infrastructure", path: "/cloud-infrastructure", description: "Scalable cloud solutions" },
    { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", description: "Advanced security services" },
    { name: "Web Development", path: "/web-development", description: "Modern web applications" },
    { name: "Mobile Development", path: "/mobile-development", description: "iOS and Android apps" },
    { name: "Database Management", path: "/database-management", description: "Database design and optimization" },
    { name: "Custom Software", path: "/custom-software", description: "Tailored software solutions" },
    { name: "Network Infrastructure", path: "/network-infrastructure", description: "Network design and management" },
    { name: "Data Analytics", path: "/data-analytics", description: "Business intelligence and reporting" },
    { name: "IoT Solutions", path: "/iot-solutions", description: "Internet of Things implementation" },
    { name: "DevOps Solutions", path: "/devops-solutions", description: "Development and operations automation" },
    { name: "Machine Learning", path: "/machine-learning", description: "ML model development and deployment" },
    { name: "Quantum Computing", path: "/quantum-computing", description: "Quantum computing solutions" },
    { name: "Robotics", path: "/robotics", description: "Robotic process automation" }
  ];

  const microSaas = [
    { name: "Zion Analytics Pro", path: "/zion-analytics-pro", description: "Advanced business intelligence platform" },
    { name: "Zion Security Shield", path: "/zion-security-shield", description: "Comprehensive cybersecurity protection" },
    { name: "Zion Cloud Vault", path: "/zion-cloud-vault", description: "Secure cloud storage solution" },
    { name: "Zion Content Studio", path: "/zion-content-studio", description: "AI-powered content creation suite" },
    { name: "Zion Data Sync", path: "/zion-data-sync", description: "Data synchronization and integration" },
    { name: "Zion Lead Magnet", path: "/zion-lead-magnet", description: "Lead generation and management" },
    { name: "Zion Project Master", path: "/zion-project-master", description: "Project management and collaboration" },
    { name: "Zion Email Automation", path: "/zion-email-automation", description: "Email marketing automation" },
    { name: "Zion Social Scheduler", path: "/zion-social-scheduler", description: "Social media management" },
    { name: "Zion Workflow Automation", path: "/zion-workflow-automation", description: "Business process automation" },
    { name: "Zion Invoice Genius", path: "/zion-invoice-genius", description: "Automated invoicing system" },
    { name: "Zion Inventory Smart", path: "/zion-inventory-smart", description: "Intelligent inventory management" },
    { name: "Zion Compliance Manager", path: "/zion-compliance-manager", description: "Regulatory compliance tracking" },
    { name: "Zion Performance Monitor", path: "/zion-performance-monitor", description: "System performance monitoring" }
  ];

  const fiveGServices = [
    { name: "5G Solutions Overview", path: "/5g-solutions", description: "Complete 5G implementation" },
    { name: "5G Data Analytics", path: "/5g-data-analytics", description: "High-speed data processing" },
    { name: "5G Edge Computing", path: "/5g-edge-computing", description: "Edge computing infrastructure" },
    { name: "5G Implementation", path: "/5g-implementation", description: "5G network deployment" },
    { name: "5G Mobile Applications", path: "/5g-mobile-applications", description: "5G-enabled mobile apps" },
    { name: "5G Network Infrastructure", path: "/5g-network-infrastructure", description: "5G network architecture" },
    { name: "5G Private Networks", path: "/5g-private-networks", description: "Private 5G network solutions" },
    { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", description: "Smart city 5G applications" }
  ];

  const legalPages = [
    { name: "Privacy Policy", path: "/privacy", description: "Data protection and privacy rights" },
    { name: "Terms of Service", path: "/terms", description: "Terms and conditions of use" },
    { name: "Cookie Policy", path: "/cookies", description: "Cookie usage and management" }
  ];

  return (
    <>
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Website Navigation</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all our AI services, IT solutions, micro SAAS products, and company information in one organized view."
        />
        <meta
          name="keywords"
          content="sitemap, website navigation, AI services, IT solutions, micro SAAS, Zion Tech Group, site structure"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Website
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Sitemap
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site map.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <Map className="w-4 h-4 mr-2 text-cyan-400" />
                Complete Navigation
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-cyan-400" />
                All Services Listed
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Main Pages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Home className="w-8 h-8 mr-3 text-cyan-400" />
                Main Pages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.path}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                  >
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        {page.icon}
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {page.name}
                      </h3>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Brain className="w-8 h-8 mr-3 text-cyan-400" />
                AI Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {aiServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-white font-medium group-hover:text-cyan-300 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* IT Services */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Settings className="w-8 h-8 mr-3 text-cyan-400" />
                IT Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {itServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-white font-medium group-hover:text-cyan-300 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Micro SAAS */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Zap className="w-8 h-8 mr-3 text-cyan-400" />
                Micro SAAS Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {microSaas.map((saas, index) => (
                  <Link
                    key={index}
                    to={saas.path}
                    className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-white font-medium group-hover:text-cyan-300 transition-colors mb-2">
                      {saas.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {saas.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* 5G Solutions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Globe className="w-8 h-8 mr-3 text-cyan-400" />
                5G Solutions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {fiveGServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-white font-medium group-hover:text-cyan-300 transition-colors mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {service.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal Pages */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                <Shield className="w-8 h-8 mr-3 text-cyan-400" />
                Legal & Policies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {legalPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.path}
                    className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  >
                    <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors mb-3">
                      {page.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {page.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-2xl font-bold text-white mb-4">
                Can't Find What You're Looking For?
              </h2>
              <p className="text-gray-300 mb-6">
                Our team is here to help you find the right solution for your business needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
