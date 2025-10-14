import React from "react";
import { Helmet } from "react-helmet-async";
import { 
  CodeBracketIcon, 
  ServerIcon, 
  GlobeAltIcon, 
  ShoppingCartIcon,
  ChartBarIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";

const webServices = [
  {
    title: 'Frontend Development',
    description: 'Modern, responsive user interfaces built with the latest technologies',
    icon: CodeBracketIcon,
    color: 'text-blue-400',
    features: ['React/Next.js', 'Vue.js/Angular', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend Development',
    description: 'Scalable server-side applications and APIs for robust performance',
    icon: ServerIcon,
    color: 'text-green-400',
    features: ['Node.js/Python', 'Express.js/Django', 'PostgreSQL/MongoDB', 'Redis']
  },
  {
    title: 'Full-Stack Solutions',
    description: 'Complete web applications from frontend to backend integration',
    icon: GlobeAltIcon,
    color: 'text-purple-400',
    features: ['End-to-End Development', 'API Integration', 'Database Design', 'Deployment']
  },
  {
    title: 'E-commerce Platforms',
    description: 'Custom online stores with advanced features and payment integration',
    icon: ShoppingCartIcon,
    color: 'text-orange-400',
    features: ['Payment Processing', 'Inventory Management', 'Order Tracking', 'Analytics']
  },
  {
    title: 'Performance Optimization',
    description: 'Speed and efficiency improvements for better user experience',
    icon: ChartBarIcon,
    color: 'text-cyan-400',
    features: ['Code Splitting', 'Image Optimization', 'Caching Strategies', 'CDN Setup']
  }
];

const WebDevelopmentPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Web Development Services - Zion Tech Group</title>
        <meta name="description" content="Professional web development services including frontend, backend, full-stack, e-commerce, and performance optimization. Build modern, scalable web applications." />
        <meta name="keywords" content="web development, frontend development, backend development, full-stack, e-commerce, web applications" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Web Development
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Modern, Scalable Web Applications
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Build powerful, responsive web applications with our expert development team. 
            From simple websites to complex enterprise applications, we deliver solutions that drive results.
          </p>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {webServices.map((service, index) => (
              <article key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300">
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
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
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
                    Starting at $1,500/month
                  </div>
                  <a 
                    href="/contact"
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${service.color} border border-current hover:bg-current hover:text-slate-900`}
                  >
                    Get Started
                  </a>
                </div>
              </article>
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
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Let our expert development team bring your vision to life with modern, 
              scalable web applications that deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Start Your Project
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;