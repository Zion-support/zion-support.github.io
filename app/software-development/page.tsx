import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Monitor, Smartphone, Database, Cloud, Shield, Zap, Users, BarChart3, CheckCircle, ArrowRight, Settings, Cpu, Globe, Target, Calendar, Award, Clock, Star, Brain, Rocket, Layers, Box } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const SoftwareDevelopmentPage = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices",
      icon: <Monitor className="w-8 h-8" />,
      features: ["React/Next.js development", "Responsive design", "SEO optimization", "Performance tuning"],
      price: "From $5,999/project"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["iOS & Android apps", "Cross-platform solutions", "App store optimization", "Push notifications"],
      price: "From $8,999/project"
    },
    {
      title: "Backend Development",
      description: "Scalable backend systems with robust APIs and database management",
      icon: <Database className="w-8 h-8" />,
      features: ["RESTful APIs", "GraphQL endpoints", "Database design", "Microservices architecture"],
      price: "From $4,999/project"
    },
    {
      title: "Cloud Solutions",
      description: "Cloud-native applications and infrastructure for scalable, reliable systems",
      icon: <Cloud className="w-8 h-8" />,
      features: ["AWS/Azure/GCP", "Serverless architecture", "Auto-scaling", "Cost optimization"],
      price: "From $6,999/project"
    },
    {
      title: "Enterprise Software",
      description: "Large-scale enterprise applications with complex business logic and integrations",
      icon: <Layers className="w-8 h-8" />,
      features: ["ERP systems", "CRM solutions", "Workflow automation", "Third-party integrations"],
      price: "From $15,999/project"
    },
    {
      title: "AI-Powered Applications",
      description: "Intelligent applications leveraging machine learning and artificial intelligence",
      icon: <Brain className="w-8 h-8" />,
      features: ["Machine learning models", "Natural language processing", "Computer vision", "Predictive analytics"],
      price: "From $12,999/project"
    }
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js/Express", category: "Backend" },
    { name: "Python/Django", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" }
  ];

  const benefits = [
    {
      title: "Agile Development",
      description: "Iterative development process with regular feedback and continuous improvement",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and code review processes ensure high-quality deliverables",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions designed to grow with your business needs",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "Ongoing Support",
      description: "24/7 maintenance and support to keep your applications running smoothly",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "200+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "99%", label: "Client Satisfaction", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Technologies Used", icon: <Layers className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="Software Development Services - Zion Tech Group | Custom Web & Mobile Apps"
        description="Professional software development services including custom web applications, mobile apps, backend systems, and enterprise solutions. Expert developers using modern technologies."
        keywords="software development, custom web applications, mobile app development, backend development, enterprise software, AI applications, cloud solutions"
        canonical="https://ziontechgroup.com/software-development"
      />
      <FuturisticBackground />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Code className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Professional Software Development</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Custom Software Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, 
            we deliver cutting-edge software that drives business growth and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Get Free Consultation
              <Settings className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive software development solutions tailored to your specific business needs and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="text-cyan-400 font-semibold text-lg">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with the latest and most reliable technologies to build robust, scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center group"
              >
                <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  {tech.category}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the benefits of professional software development with our proven methodology and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Build Your Software Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let our expert developers bring your vision to life with custom software solutions that drive results. 
            Contact us today for a free consultation and project estimate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View All Services
              <Code className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;