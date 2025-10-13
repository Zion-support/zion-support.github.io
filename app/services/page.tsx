import { ArrowRight, Brain, Shield, Zap, Globe, Cloud, Database, Code, Smartphone, Lock, Server, Cpu, BarChart3, Users, Settings, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI Services & Solutions",
      description: "Cutting-edge artificial intelligence solutions to transform your business",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Analytics Dashboard Pro", price: "$299/month", link: "/ai-analytics-dashboard-pro" },
        { name: "AI Content Generation Pro", price: "$199/month", link: "/ai-content-generation-pro" },
        { name: "AI Cybersecurity Suite Pro", price: "$499/month", link: "/ai-cybersecurity-suite-pro" },
        { name: "AI Business Intelligence Pro", price: "$399/month", link: "/ai-business-intelligence-pro" },
        { name: "AI Code Assistant Pro", price: "$149/month", link: "/ai-code-assistant-pro" },
        { name: "AI Customer Support Chatbot", price: "$249/month", link: "/ai-customer-support-chatbot" },
        { name: "AI Document Intelligence", price: "$179/month", link: "/ai-document-intelligence" },
        { name: "AI Climate Solutions Pro", price: "$599/month", link: "/ai-climate-solutions-pro" },
        { name: "AI Agricultural Intelligence Pro", price: "$449/month", link: "/ai-agricultural-intelligence-pro" },
        { name: "AI 3D Generation", price: "$349/month", link: "/ai-3d-generation" }
      ]
    },
    {
      title: "IT Services & Solutions",
      description: "Comprehensive technology infrastructure and development services",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Infrastructure", price: "From $1,200/month", link: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", price: "From $800/month", link: "/cybersecurity-solutions" },
        { name: "Web Development", price: "From $2,500/project", link: "/web-development" },
        { name: "Mobile Development", price: "From $3,500/project", link: "/mobile-development" },
        { name: "Database Management", price: "From $600/month", link: "/database-management" },
        { name: "Custom Software", price: "From $5,000/project", link: "/custom-software" },
        { name: "Network Infrastructure", price: "From $1,000/month", link: "/network-infrastructure" },
        { name: "Cloud Native Development", price: "From $4,000/project", link: "/cloud-native-development" },
        { name: "Blockchain Development", price: "From $8,000/project", link: "/blockchain-development" },
        { name: "E-Commerce Development", price: "From $3,000/project", link: "/e-commerce-development" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-deploy software solutions for immediate business impact",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Zion Analytics Pro", price: "$199/month", link: "/zion-analytics-pro" },
        { name: "Zion Security Shield", price: "$299/month", link: "/zion-security-shield" },
        { name: "Zion Cloud Vault", price: "$149/month", link: "/zion-cloud-vault" },
        { name: "Zion Content Studio", price: "$179/month", link: "/zion-content-studio" },
        { name: "Zion Data Sync", price: "$129/month", link: "/zion-data-sync" },
        { name: "Zion Lead Magnet", price: "$99/month", link: "/zion-lead-magnet" },
        { name: "Zion Project Master", price: "$249/month", link: "/zion-project-master" },
        { name: "Zion Email Automation", price: "$159/month", link: "/zion-email-automation" },
        { name: "Zion Social Scheduler", price: "$119/month", link: "/zion-social-scheduler" },
        { name: "Zion Workflow Automation", price: "$189/month", link: "/zion-workflow-automation" },
        { name: "Zion Invoice Genius", price: "$139/month", link: "/zion-invoice-genius" },
        { name: "Zion Inventory Smart", price: "$169/month", link: "/zion-inventory-smart" }
      ]
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "5G Data Analytics", price: "From $2,500/month", link: "/5g-data-analytics" },
        { name: "5G Edge Computing", price: "From $3,000/month", link: "/5g-edge-computing" },
        { name: "5G Implementation", price: "From $15,000/project", link: "/5g-implementation" },
        { name: "5G Mobile Applications", price: "From $5,000/project", link: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", price: "From $10,000/project", link: "/5g-network-infrastructure" },
        { name: "5G Private Networks", price: "From $8,000/project", link: "/5g-private-networks" },
        { name: "5G Smart City Solutions", price: "From $25,000/project", link: "/5g-smart-city-solutions" }
      ]
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored solutions to meet your specific business needs"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive analytics and reporting for all services"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "Certified professionals with years of industry experience"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Micro SAAS Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, and micro SAAS products. From cloud infrastructure to AI-powered analytics, we provide cutting-edge technology solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, cloud infrastructure, cybersecurity, web development, 5G solutions, business automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered analytics to cloud infrastructure, we provide everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-20">
                <div className="text-center mb-12">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {category.title}
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                    >
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-2xl font-bold text-cyan-400 mb-4">
                        {service.price}
                      </p>
                      <Link
                        to={service.link}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through innovative solutions, expert support, and proven results.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact us today to discuss your project and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
