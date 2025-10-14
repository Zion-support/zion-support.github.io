import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Globe, Smartphone, ShoppingCart, Zap, CheckCircle, Users, Clock, Shield } from "lucide-react";

const WebDevelopmentPage = () => {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Modern, responsive user interfaces built with the latest technologies',
      icon: <Code className="w-12 h-12 text-cyan-400" />,
      features: ['React & Next.js', 'TypeScript', 'Tailwind CSS', 'Responsive Design', 'Performance Optimization', 'SEO Optimization']
    },
    {
      title: 'Backend Development',
      description: 'Scalable server-side applications and APIs',
      icon: <Globe className="w-12 h-12 text-cyan-400" />,
      features: ['Node.js & Express', 'Python & Django', 'Database Design', 'API Development', 'Authentication', 'Security Implementation']
    },
    {
      title: 'Full-Stack Development',
      description: 'Complete web applications from frontend to backend',
      icon: <Zap className="w-12 h-12 text-cyan-400" />,
      features: ['End-to-End Solutions', 'Database Integration', 'Cloud Deployment', 'CI/CD Pipeline', 'Testing & QA', 'Maintenance & Support']
    },
    {
      title: 'E-commerce Development',
      description: 'Online stores and marketplace solutions',
      icon: <ShoppingCart className="w-12 h-12 text-cyan-400" />,
      features: ['Payment Integration', 'Inventory Management', 'Order Processing', 'User Accounts', 'Admin Dashboard', 'Analytics & Reporting']
    },
    {
      title: 'Mobile-First Development',
      description: 'Progressive web apps and mobile-optimized solutions',
      icon: <Smartphone className="w-12 h-12 text-cyan-400" />,
      features: ['PWA Development', 'Mobile Optimization', 'Touch Interactions', 'Offline Support', 'Push Notifications', 'App Store Deployment']
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-cyan-400" />, value: "200+", label: "Projects Completed" },
    { icon: <Clock className="w-8 h-8 text-cyan-400" />, value: "50%", label: "Faster Development" },
    { icon: <Shield className="w-8 h-8 text-cyan-400" />, value: "100%", label: "Secure Solutions" },
    { icon: <Zap className="w-8 h-8 text-cyan-400" />, value: "99.9%", label: "Uptime Guarantee" }
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
            Web Development Services
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build modern, scalable web applications with our expert development team. 
            From frontend to backend, we deliver solutions that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/portfolio"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Web Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive web development solutions tailored to your business needs and goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery & Planning', description: 'Understanding your requirements and creating a detailed project plan' },
              { step: '02', title: 'Design & Prototyping', description: 'Creating wireframes, mockups, and interactive prototypes' },
              { step: '03', title: 'Development & Testing', description: 'Building your application with rigorous testing and quality assurance' },
              { step: '04', title: 'Deployment & Support', description: 'Launching your project and providing ongoing maintenance and support' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-300">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Next Web Application?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your project requirements and create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopmentPage;
