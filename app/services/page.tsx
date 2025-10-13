import { ArrowRight, Brain, Shield, Zap, Globe, Database, Code, Smartphone, Cloud, CheckCircle, Star } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge artificial intelligence solutions to transform your business",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Content Generation", price: "$299/month", path: "/ai-content-generation" },
        { name: "AI Cybersecurity Suite", price: "$499/month", path: "/ai-cybersecurity" },
        { name: "AI Business Intelligence", price: "$399/month", path: "/ai-business-intelligence" },
        { name: "AI Customer Support Bot", price: "$199/month", path: "/ai-customer-support-bot" },
        { name: "AI Data Analytics", price: "$349/month", path: "/ai-data-analytics" },
        { name: "AI Code Assistant Pro", price: "$249/month", path: "/ai-code-assistant-pro" }
      ]
    },
    {
      title: "IT Infrastructure & Cloud Solutions",
      description: "Comprehensive technology infrastructure for modern businesses",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Infrastructure", price: "$799/month", path: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", price: "$599/month", path: "/cybersecurity-solutions" },
        { name: "Web Development", price: "$2,500/project", path: "/web-development" },
        { name: "Mobile Development", price: "$3,500/project", path: "/mobile-development" },
        { name: "Database Management", price: "$399/month", path: "/database-management" },
        { name: "Network Infrastructure", price: "$1,200/month", path: "/network-infrastructure" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-deploy software solutions for immediate business impact",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Zion Analytics Pro", price: "$149/month", path: "/zion-analytics-pro" },
        { name: "Zion Security Shield", price: "$199/month", path: "/zion-security-shield" },
        { name: "Zion Cloud Vault", price: "$99/month", path: "/zion-cloud-vault" },
        { name: "Zion Content Studio", price: "$179/month", path: "/zion-content-studio" },
        { name: "Zion Data Sync", price: "$129/month", path: "/zion-data-sync" },
        { name: "Zion Lead Magnet", price: "$159/month", path: "/zion-lead-magnet" }
      ]
    },
    {
      title: "5G & Next-Gen Solutions",
      description: "Advanced connectivity and infrastructure for the future",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "5G Implementation", price: "$5,000/project", path: "/5g-implementation" },
        { name: "5G Data Analytics", price: "$699/month", path: "/5g-data-analytics" },
        { name: "5G Edge Computing", price: "$899/month", path: "/5g-edge-computing" },
        { name: "5G Smart City Solutions", price: "$2,500/month", path: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", price: "$1,500/month", path: "/5g-private-networks" },
        { name: "5G Mobile Applications", price: "$3,000/project", path: "/5g-mobile-applications" }
      ]
    }
  ];

  const features = [
    "24/7 Technical Support",
    "99.9% Uptime Guarantee",
    "Scalable Solutions",
    "Enterprise-Grade Security",
    "Custom Integration",
    "Free Consultation"
  ];

  return (
    <>
      <Helmet>
        <title>Professional Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI, IT, and digital transformation services. Expert solutions for modern businesses with competitive pricing and 24/7 support."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, cloud computing, cybersecurity, micro SAAS, 5G solutions, business automation"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered automation to enterprise infrastructure, we deliver results that matter.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-white text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="flex items-center justify-between p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group"
                      >
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 mr-3" />
                          <div>
                            <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                              {service.name}
                            </h4>
                            <p className="text-gray-400 text-sm">Starting at {service.price}</p>
                          </div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
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
              Get a free consultation and discover how our solutions can drive your success.
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Detailed Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
