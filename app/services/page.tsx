import { ArrowRight, Brain, Shield, Zap, Globe, Cloud, Database, Code, Smartphone, Lock, BarChart3, Users, Settings, Target, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI Services",
      description: "Cutting-edge artificial intelligence solutions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/20",
      services: [
        { name: "AI Analytics Dashboard Pro", price: "$299/month", link: "/ai-analytics-dashboard-pro" },
        { name: "AI Content Generation Pro", price: "$199/month", link: "/ai-content-generation-pro" },
        { name: "AI Cybersecurity Suite Pro", price: "$399/month", link: "/ai-cybersecurity-suite-pro" },
        { name: "AI Business Intelligence Pro", price: "$349/month", link: "/ai-business-intelligence-pro" },
        { name: "AI Customer Support Chatbot", price: "$149/month", link: "/ai-customer-support-chatbot" },
        { name: "AI Code Assistant Pro", price: "$249/month", link: "/ai-code-assistant-pro" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/20",
      services: [
        { name: "Zion Analytics Pro", price: "$199/month", link: "/zion-analytics-pro" },
        { name: "Zion Security Shield", price: "$299/month", link: "/zion-security-shield" },
        { name: "Zion Cloud Vault", price: "$149/month", link: "/zion-cloud-vault" },
        { name: "Zion Content Studio", price: "$179/month", link: "/zion-content-studio" },
        { name: "Zion Project Master", price: "$229/month", link: "/zion-project-master" },
        { name: "Zion Email Automation", price: "$99/month", link: "/zion-email-automation" }
      ]
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/20",
      services: [
        { name: "Cloud Infrastructure", price: "From $2,999/month", link: "/cloud-infrastructure" },
        { name: "Cybersecurity Solutions", price: "From $1,999/month", link: "/cybersecurity-solutions" },
        { name: "Web Development", price: "From $4,999/project", link: "/web-development" },
        { name: "Mobile Development", price: "From $8,999/project", link: "/mobile-development" },
        { name: "Database Management", price: "From $1,499/month", link: "/database-management" },
        { name: "Custom Software", price: "From $9,999/project", link: "/custom-software" }
      ]
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/20",
      services: [
        { name: "5G Data Analytics", price: "From $3,999/month", link: "/5g-data-analytics" },
        { name: "5G Edge Computing", price: "From $4,999/month", link: "/5g-edge-computing" },
        { name: "5G Implementation", price: "From $19,999/project", link: "/5g-implementation" },
        { name: "5G Mobile Applications", price: "From $12,999/project", link: "/5g-mobile-applications" },
        { name: "5G Network Infrastructure", price: "From $29,999/project", link: "/5g-network-infrastructure" },
        { name: "5G Smart City Solutions", price: "From $49,999/project", link: "/5g-smart-city-solutions" }
      ]
    }
  ];

  const features = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock technical support and maintenance"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Integration",
      description: "Seamless integration with your existing systems"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Scalable Solutions",
      description: "Grow with your business needs and requirements"
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
        <title>Services - Zion Tech Group | AI, IT, Micro SAAS & 5G Solutions</title>
        <meta
          name="description"
          content="Comprehensive technology services including AI solutions, micro SAAS platforms, IT services, and 5G solutions. Professional services for modern businesses."
        />
        <meta
          name="keywords"
          content="AI services, micro SAAS, IT solutions, 5G technology, cloud infrastructure, cybersecurity, web development, mobile apps"
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
                Choose from our comprehensive range of technology services designed to meet every business need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className={`${category.bgColor} ${category.borderColor} backdrop-blur-sm rounded-xl p-8 border hover:bg-white/20 transition-all duration-300`}
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
                      <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-white/10 last:border-b-0">
                        <Link
                          to={service.link}
                          className="text-cyan-400 hover:text-cyan-300 transition-colors flex-1 text-left"
                        >
                          {service.name}
                        </Link>
                        <span className="text-white font-semibold">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Link
                      to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      View All {category.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
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
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
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
              Join thousands of businesses already using our solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Journey
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
