import { ArrowRight, Brain, Shield, Zap, Globe, Database, Code, Smartphone, Cloud, Lock, BarChart3, Users, Settings, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Analytics Dashboard", price: "$299/month", path: "/ai-analytics-dashboard" },
        { name: "AI Content Generation", price: "$199/month", path: "/ai-content-generation" },
        { name: "AI Customer Support", price: "$399/month", path: "/ai-customer-support" },
        { name: "AI Cybersecurity Monitor", price: "$599/month", path: "/ai-cybersecurity-monitor" },
        { name: "AI Business Intelligence", price: "$499/month", path: "/ai-business-intelligence" }
      ]
    },
    {
      title: "IT Services & Solutions",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Infrastructure", price: "$799/month", path: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", price: "$999/month", path: "/cybersecurity-solutions" },
        { name: "Web Development", price: "$2,500/project", path: "/web-development" },
        { name: "Mobile Development", price: "$3,500/project", path: "/mobile-development" },
        { name: "Database Management", price: "$399/month", path: "/database-management" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Zion Analytics Pro", price: "$149/month", path: "/zion-analytics-pro" },
        { name: "Zion Security Shield", price: "$199/month", path: "/zion-security-shield" },
        { name: "Zion Cloud Vault", price: "$99/month", path: "/zion-cloud-vault" },
        { name: "Zion Content Studio", price: "$79/month", path: "/zion-content-studio" },
        { name: "Zion Project Master", price: "$129/month", path: "/zion-project-master" }
      ]
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "5G Data Analytics", price: "$1,299/month", path: "/5g-data-analytics" },
        { name: "5G Edge Computing", price: "$1,599/month", path: "/5g-edge-computing" },
        { name: "5G Smart City Solutions", price: "$2,999/month", path: "/5g-smart-city-solutions" },
        { name: "5G Private Networks", price: "$1,899/month", path: "/5g-private-networks" },
        { name: "5G IoT Solutions", price: "$1,199/month", path: "/5g-iot-solutions" }
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
      title: "Custom Integration",
      description: "Seamless integration with your existing systems"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-time Analytics",
      description: "Comprehensive insights and performance metrics"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, IT & Digital Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI solutions, IT services, micro SAAS, and 5G solutions. Transform your business with cutting-edge technology. Contact us at +1 302 464 0950"
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, 5G solutions, cloud computing, cybersecurity, digital transformation"
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
              From AI-powered analytics to 5G infrastructure, we provide everything you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
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
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of technology solutions tailored to your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4`}
                    >
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">
                        {category.title}
                      </h3>
                      <p className="text-gray-300">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      >
                        <span className="text-white group-hover:text-cyan-400 transition-colors">
                          {service.name}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-cyan-400 font-semibold">
                            {service.price}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
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
                We deliver exceptional value through cutting-edge technology, expert support, and proven results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
              Contact us today to discuss your project requirements and get a personalized quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Contact Us Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
            
            {/* Contact Information */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
