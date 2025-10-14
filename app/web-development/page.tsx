import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Smartphone, ShoppingCart, Zap, Phone } from "lucide-react";

const WebDevelopmentPage = () => {
  const webServices = [
    {
      title: "Frontend Development",
      description: "Modern, responsive user interfaces built with cutting-edge technologies",
      icon: Code,
      price: "$1,500/month",
      features: ["React/Next.js", "Vue.js/Angular", "TypeScript", "Tailwind CSS"],
      color: "text-blue-400"
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      icon: Globe,
      price: "$2,000/month",
      features: ["Node.js/Python", "Express.js/Django", "PostgreSQL/MongoDB", "Redis"],
      color: "text-purple-400"
    },
    {
      title: "Full-Stack Development",
      description: "Complete web applications from frontend to backend",
      icon: Zap,
      price: "$3,000/month",
      features: ["End-to-End Development", "Database Design", "API Integration", "Deployment"],
      color: "text-green-400"
    },
    {
      title: "E-commerce Solutions",
      description: "Online stores and marketplace platforms",
      icon: ShoppingCart,
      price: "$2,500/month",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Analytics"],
      color: "text-orange-400"
    },
    {
      title: "Mobile-First Design",
      description: "Responsive designs optimized for all devices",
      icon: Smartphone,
      price: "$1,200/month",
      features: ["Responsive Design", "Progressive Web Apps", "Mobile Optimization", "Touch Interfaces"],
      color: "text-cyan-400"
    },
    {
      title: "Performance Optimization",
      description: "Fast, efficient web applications",
      icon: Zap,
      price: "$1,000/month",
      features: ["Speed Optimization", "SEO Enhancement", "CDN Setup", "Caching Strategies"],
      color: "text-yellow-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack, e-commerce, web applications" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Web Development
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Modern, Scalable Web Applications
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Build powerful, responsive web applications with our expert development team. 
            From simple websites to complex enterprise applications, we deliver solutions that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Our Web Development Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className={`text-lg font-bold mb-2 ${service.color}`}>
                    {service.price}
                  </div>
                  <Link 
                    to="/contact"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Get Started
                  </Link>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>React/Next.js</li>
                  <li>Vue.js/Angular</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Node.js/Python</li>
                  <li>Express.js/Django</li>
                  <li>PostgreSQL/MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Cloud & DevOps</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>AWS/Azure/GCP</li>
                  <li>Docker/Kubernetes</li>
                  <li>CDN Services</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Tools & Testing</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Git/GitHub</li>
                  <li>Jest/Cypress</li>
                  <li>Webpack/Vite</li>
                  <li>Figma/Sketch</li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>React/Next.js</li>
                  <li>Vue.js/Angular</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-purple-400 mb-3">Backend</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Node.js/Python</li>
                  <li>Express.js/Django</li>
                  <li>PostgreSQL/MongoDB</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-green-400 mb-3">Cloud & DevOps</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>AWS/Azure/GCP</li>
                  <li>Docker/Kubernetes</li>
                  <li>CDN Services</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold text-orange-400 mb-3">Tools & Testing</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>Git/GitHub</li>
                  <li>Jest/Cypress</li>
                  <li>Webpack/Vite</li>
                  <li>Figma/Sketch</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our expert development team bring your vision to life with modern, 
            scalable web applications that deliver exceptional user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
