import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Package, 
  Zap, 
  Shield, 
  BarChart3, 
  Cloud, 
  FileText,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced analytics dashboard with AI-powered insights",
      icon: BarChart3,
      href: "/zion-analytics-pro",
      features: ["Real-time analytics", "AI predictions", "Custom dashboards"],
      price: "$29/month"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive security monitoring and threat detection",
      icon: Shield,
      href: "/zion-security-shield",
      features: ["24/7 monitoring", "Threat detection", "Automated responses"],
      price: "$49/month"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage with advanced encryption",
      icon: Cloud,
      href: "/zion-cloud-vault",
      features: ["End-to-end encryption", "File sharing", "Backup automation"],
      price: "$19/month"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management platform",
      icon: FileText,
      href: "/zion-content-studio",
      features: ["AI writing", "Content planning", "SEO optimization"],
      price: "$39/month"
    }
  ];

  const features = [
    "No setup fees or long-term contracts",
    "Scalable pricing based on usage",
    "24/7 customer support",
    "Regular updates and new features",
    "API access for integrations",
    "White-label options available"
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions | Zion Tech Group</title>
        <meta 
          name="description" 
          content="Discover our innovative micro SAAS solutions designed for modern businesses. Analytics, security, cloud storage, and content creation tools." 
        />
        <meta 
          name="keywords" 
          content="micro saas, software as a service, business tools, analytics, security, cloud storage, content creation" 
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-cyan-500/10 rounded-2xl">
                <Package className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Solutions
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Powerful, focused software solutions designed for modern businesses. 
              Get started with our micro SAAS tools and scale as you grow.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-200"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Choose from our range of specialized tools designed to solve specific business challenges
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {microSaasServices.map((service, index) => (
                <div
                  key={service.name}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors duration-200">
                      <service.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-white">{service.name}</h3>
                      <p className="text-cyan-400 font-medium">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Built for modern businesses with flexibility and scalability in mind
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose any of our micro SAAS solutions and start transforming your business today
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-lg transition-colors duration-200"
              >
                Contact Sales
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-colors duration-200"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
