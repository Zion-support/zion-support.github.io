import { ArrowRight, Brain, Shield, Zap, Globe, Database, Code, Smartphone, Cloud, Lock, BarChart3, Cpu, Wifi, Users, Target, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Transform your business with cutting-edge AI solutions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: "AI Analytics Dashboard", path: "/ai-analytics-dashboard", price: "Starting at $2,999/month" },
        { name: "AI Content Generation", path: "/ai-content-generation", price: "Starting at $1,499/month" },
        { name: "AI Customer Support", path: "/ai-customer-support", price: "Starting at $2,499/month" },
        { name: "AI Cybersecurity Suite", path: "/ai-cybersecurity-suite", price: "Starting at $3,999/month" },
        { name: "AI Business Intelligence", path: "/ai-business-intelligence", price: "Starting at $2,999/month" },
        { name: "AI Automation", path: "/ai-automation", price: "Starting at $1,999/month" }
      ]
    },
    {
      title: "IT Infrastructure & Cloud Solutions",
      description: "Scalable, secure, and reliable technology infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: "Cloud Infrastructure", path: "/cloud-infrastructure", price: "Starting at $999/month" },
        { name: "Cybersecurity Solutions", path: "/cybersecurity-solutions", price: "Starting at $1,999/month" },
        { name: "Web Development", path: "/web-development", price: "Starting at $2,499/project" },
        { name: "Mobile Development", path: "/mobile-development", price: "Starting at $3,999/project" },
        { name: "Database Management", path: "/database-management", price: "Starting at $1,499/month" },
        { name: "Custom Software", path: "/custom-software", price: "Starting at $4,999/project" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-deploy software solutions for immediate business impact",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: "Zion Analytics Pro", path: "/zion-analytics-pro", price: "$299/month" },
        { name: "Zion Security Shield", path: "/zion-security-shield", price: "$199/month" },
        { name: "Zion Content Studio", path: "/zion-content-studio", price: "$149/month" },
        { name: "Zion Project Master", path: "/zion-project-master", price: "$249/month" },
        { name: "Zion Email Automation", path: "/zion-email-automation", price: "$99/month" },
        { name: "Zion Workflow Automation", path: "/zion-workflow-automation", price: "$179/month" }
      ]
    },
    {
      title: "5G & Next-Gen Solutions",
      description: "Leverage the power of 5G for ultra-fast connectivity and innovation",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      services: [
        { name: "5G Implementation", path: "/5g-implementation", price: "Starting at $9,999/project" },
        { name: "5G Edge Computing", path: "/5g-edge-computing", price: "Starting at $4,999/month" },
        { name: "5G Data Analytics", path: "/5g-data-analytics", price: "Starting at $2,999/month" },
        { name: "5G Smart City Solutions", path: "/5g-smart-city-solutions", price: "Starting at $19,999/project" },
        { name: "5G Private Networks", path: "/5g-private-networks", price: "Starting at $7,999/project" },
        { name: "5G Mobile Applications", path: "/5g-mobile-applications", price: "Starting at $5,999/project" }
      ]
    }
  ];

  const benefits = [
    { icon: <Target className="w-6 h-6" />, title: "Custom Solutions", description: "Tailored to your specific business needs" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Proven Results", description: "Track record of successful implementations" },
    { icon: <Lock className="w-6 h-6" />, title: "Enterprise Security", description: "Bank-level security and compliance" },
    { icon: <Users className="w-6 h-6" />, title: "Expert Support", description: "24/7 technical support and consultation" }
  ];

  return (
    <>
      <Helmet>
        <title>Professional Services - Zion Tech Group | AI, IT & 5G Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI services, IT solutions, micro SAAS products, and 5G implementation services. Transform your business with cutting-edge technology from Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI services, IT solutions, micro SAAS, 5G implementation, cloud infrastructure, cybersecurity, business automation, digital transformation"
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
              From AI-powered analytics to 5G implementation, we deliver results that matter.
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
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive range of technology services designed to meet every business need.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {serviceCategories.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
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
                      <div
                        key={serviceIndex}
                        className="flex justify-between items-center p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      >
                        <Link
                          to={service.path}
                          className="text-white hover:text-cyan-400 transition-colors font-medium"
                        >
                          {service.name}
                        </Link>
                        <span className="text-cyan-400 font-semibold text-sm">
                          {service.price}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver exceptional value through our expertise, innovation, and commitment to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
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
              Contact us today for a free consultation and discover how our services can drive your success.
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
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
