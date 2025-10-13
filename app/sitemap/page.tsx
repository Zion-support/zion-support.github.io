import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Brain, Shield, Zap, BarChart3, Code, Cloud, Database, Users, FileText, Mail, Phone, MapPin } from "lucide-react";

export default function Sitemap() {
  const mainPages = [
    { name: "Home", path: "/", description: "Welcome to Zion Tech Group" },
    { name: "About", path: "/about", description: "Learn about our company and mission" },
    { name: "Services", path: "/services", description: "Our comprehensive technology services" },
    { name: "Pricing", path: "/pricing", description: "Transparent pricing for all services" },
    { name: "Contact", path: "/contact", description: "Get in touch with our team" },
    { name: "Consultation", path: "/consultation", description: "Free technology consultation" },
    { name: "Demo", path: "/demo", description: "Live demos of our solutions" },
    { name: "Support", path: "/support", description: "Customer support and help" },
    { name: "Blog", path: "/blog", description: "Latest insights and updates" },
    { name: "Careers", path: "/careers", description: "Join our growing team" },
    { name: "Case Studies", path: "/case-studies", description: "Success stories and projects" },
    { name: "Team", path: "/team", description: "Meet our expert team" }
  ];

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-5 h-5" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Analytics", path: "/ai-analytics", description: "Advanced AI-powered data analytics" },
        { name: "AI Automation", path: "/ai-automation", description: "Intelligent process automation" },
        { name: "AI Content Generation", path: "/ai-content-generation", description: "AI-powered content creation" },
        { name: "AI Customer Service", path: "/ai-customer-service", description: "Intelligent customer support" },
        { name: "AI Marketing", path: "/ai-marketing", description: "AI-driven marketing solutions" },
        { name: "AI Services Overview", path: "/ai-services", description: "Complete AI solutions portfolio" }
      ]
    },
    {
      title: "IT Services",
      icon: <Shield className="w-5 h-5" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Services", path: "/cloud-services", description: "Comprehensive cloud solutions" },
        { name: "Cybersecurity", path: "/cybersecurity", description: "Advanced security protection" },
        { name: "Web Development", path: "/web-development", description: "Modern web applications" },
        { name: "Custom Development", path: "/custom-development", description: "Tailored software solutions" },
        { name: "Data Analytics", path: "/data-analytics", description: "Business intelligence and insights" }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Zap className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "5G Implementation", path: "/5g-implementation", description: "Complete 5G deployment" },
        { name: "5G Edge Computing", path: "/5g-edge-computing", description: "Edge computing solutions" },
        { name: "5G IoT Solutions", path: "/5g-iot-solutions", description: "Internet of Things integration" },
        { name: "5G Smart Cities", path: "/5g-smart-city-solutions", description: "Smart city technologies" },
        { name: "5G Private Networks", path: "/5g-private-networks", description: "Private 5G infrastructure" },
        { name: "5G Data Analytics", path: "/5g-data-analytics", description: "5G-powered analytics" },
        { name: "5G Solutions Overview", path: "/5g-solutions", description: "Complete 5G solutions" }
      ]
    },
    {
      title: "Micro SAAS",
      icon: <BarChart3 className="w-5 h-5" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "Zion Analytics Pro", path: "/zion-analytics-pro", description: "AI-powered business intelligence" },
        { name: "Zion Security Shield", path: "/zion-security-shield", description: "Advanced cybersecurity protection" },
        { name: "Zion Cloud Vault", path: "/zion-cloud-vault", description: "Secure cloud storage solution" },
        { name: "Zion Content Studio", path: "/zion-content-studio", description: "AI content creation platform" },
        { name: "Zion Data Sync", path: "/zion-data-sync", description: "Data synchronization tools" },
        { name: "Micro SAAS Overview", path: "/micro-saas", description: "Complete micro SAAS portfolio" }
      ]
    }
  ];

  const resourcePages = [
    { name: "Tutorials", path: "/tutorials", description: "Learning resources and guides" },
    { name: "Privacy Policy", path: "/privacy", description: "Our privacy and data protection policy" },
    { name: "Terms of Service", path: "/terms", description: "Terms and conditions of use" },
    { name: "Cookie Policy", path: "/cookies", description: "Cookie usage and preferences" }
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, label: "Email", value: "kleber@ziontechgroup.com" },
    { icon: <Phone className="w-5 h-5" />, label: "Phone", value: "+1 302 464 0950" },
    { icon: <MapPin className="w-5 h-5" />, label: "Address", value: "364 E Main St STE 1008, Middletown DE 19709" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Sitemap - Zion Tech Group | Complete Site Navigation</title>
        <meta
          name="description"
          content="Complete sitemap of Zion Tech Group website. Find all our services, pages, and resources in one organized location."
        />
        <meta
          name="keywords"
          content="sitemap, navigation, site map, Zion Tech Group, AI services, IT services, 5G solutions, micro SAAS"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Globe className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Complete Site Navigation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              Sitemap
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Navigate through all our services, solutions, and resources. Find exactly what you're looking for with our comprehensive site map.
          </p>
        </div>
      </section>

      {/* Main Pages */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Main Pages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential pages for navigating our website and learning about our services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mainPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions organized by category for easy navigation.
            </p>
          </div>
          
          <div className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.services.map((service, serviceIndex) => (
                    <Link
                      key={serviceIndex}
                      to={service.path}
                      className="group bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </h4>
                        <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-gray-300 text-sm">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Resources & Legal
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Additional resources, legal documents, and helpful information.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resourcePages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {page.name}
                  </h3>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {page.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{info.label}</h3>
                <p className="text-cyan-400 text-sm">{info.value}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/consultation"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}