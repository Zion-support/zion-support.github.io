import React from "react";"
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Code, Globe, Smartphone, ShoppingCart, Zap } from "lucide-react";

const WebDevelopmentPage = () => {
  const webServices = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with React, Vue, and Angular",
      icon: <Code className="w-8 h-8" />,
      price: "$1,500/month",
      features: ["React Development", "Vue.js Applications", "Angular Projects", "Responsive Design"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs using Node.js, Python, and more",
      icon: <Zap className="w-8 h-8" />,
      price: "$2,000/month",
      features: ["Node.js APIs", "Python Backends", "Database Design", "API Development"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend with database integration",
      icon: <Globe className="w-8 h-8" />,
      price: "$3,000/month",
      features: ["End-to-End Development", "Database Integration", "Deployment", "Maintenance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Solutions",
      description: "Custom e-commerce platforms with payment integration and inventory management",
      icon: <ShoppingCart className="w-8 h-8" />,
      price: "$2,500/month",
      features: ["Online Store", "Payment Gateway", "Inventory Management", "Order Processing"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive web applications optimized for mobile devices and tablets",
      icon: <Smartphone className="w-8 h-8" />,
      price: "$1,200/month",
      features: ["Mobile Optimization", "Touch Interfaces", "Progressive Web Apps", "Cross-Platform"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Performance Optimization",
      description: "Speed optimization and SEO improvements for better user experience",
      icon: <Zap className="w-8 h-8" />,
      price: "$800/month",
      features: ["Speed Optimization", "SEO Enhancement", "Image Optimization", "Caching"],
      color: "from-yellow-500 to-orange-500"
    }
  ];
  return (
    <>
      <SEOOptimizer title="Web Development Services - Zion Tech Group"
        description="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications."
        keywords={['web development', 'frontend development', 'backend development', 'full-stack', 'e-commerce', 'web applications'
        canonicalUrl="https://ziontechgroup.com/web-development"
      />
      <PerformanceOptimizer enableImageOptimization={true}
        enableLazyLoading={true}
        enableCodeSplitting={true}
        enablePrefetching={true}
      />
      <AccessibilityEnhancer enableKeyboardNavigation={true}
        enableScreenReader={true}
        enableHighContrast={true}
        enableFocusManagement={true}
      >
        <div></div>
      </AccessibilityEnhancer>
      <SecurityEnhancer enableCSP={true}
        enableHSTS={true}
        enableXSSProtection={true}
        enableClickjackingProtection={true}
      />
      <Analytics />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        <Navigation />
        <main className="container mx-auto px-4 py-16 pt-24"
          {/* Hero Section */}
          <section className="text-center mb-16"
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse"
              Web Development;
            </h1>
            <p className="text-xl text-cyan-400 mb-8 font-medium"
              Modern, Scalable Web Applications;
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8"
              Build powerful, responsive web applications with our expert development team. 
              From simple websites to complex enterprise applications, we deliver solutions that drive results.
            </p>
          </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text"
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed"
                    {service.description}
                  </p>
                  
                  <div className="mb-4"
                    <h4 className="text-sm font-semibold text-blue-400 mb-2"
                    <ul className="space-y-1"
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300"
                          <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="text-center"
                    <div className={`text-lg font-bold mb-2 neon-text ${service.color}`
                    <a ;
                      href="/contact"
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`
                    >
                      Get Started;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Technology Stack */}
          <section className="mb-16"
            <div className="cyber-card p-8"
              <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"
                Our Technology Stack;
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6"
                <div className="text-center"
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3"
                  <ul className="space-y-2 text-sm text-gray-300"
                    <li>React/Next.js</li>
                    <li>Vue.js/Angular</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                  <Link to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

          {/* CTA Section */}
          <section className="text-center"
            <div className="cyber-card p-8 max-w-4xl mx-auto"
              <h2 className="text-3xl font-bold text-white mb-4 neon-text"
                Ready to Build Your Next Web Application?
              </h2>
              <p className="text-gray-300 mb-6 text-lg"
                Let our expert development team bring your vision to life with modern, 
                scalable web applications that deliver exceptional user experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"
                <a;
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your Project;
                </a>
                <a;
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5"
                  +1 302 464 0950;
                </a>
              </div>
            </div>
          </section>
        </main>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert developers bring your vision to life with cutting-edge web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
export default WebDevelopmentPage;
}}}
