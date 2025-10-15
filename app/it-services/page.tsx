import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Cloud, 
  Shield, 
  Server, 
  Smartphone, 
  Globe, 
  Database, 
  CheckCircle, 
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  Cpu,
  Lock,
  Zap
} from 'lucide-react';

const ItServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 1,
      name: "Cloud Migration & Management Pro",
      description: "Complete cloud transformation with AWS, Azure, and GCP migration, optimization, and 24/7 management.",
      features: ["Multi-cloud migration strategy", "Cloud architecture design", "Cost optimization (up to 40% savings)", "24/7 monitoring & support", "Disaster recovery setup", "Security compliance"],
      icon: <Cloud className="w-8 h-8" />,
      category: "Cloud",
      price: "From $4,999/month",
      marketPrice: "$9,999/month",
      savings: "50%",
      popular: true
    },
    {
      id: 2,
      name: "Enterprise Cybersecurity Suite",
      description: "Comprehensive security solutions with advanced threat detection, compliance management, and incident response.",
      features: ["Security audits & assessments", "Penetration testing", "24/7 SOC monitoring", "Incident response", "Compliance management (SOC2, GDPR)", "Security training"],
      icon: <Shield className="w-8 h-8" />,
      category: "Security",
      price: "From $3,999/month",
      marketPrice: "$7,999/month",
      savings: "50%",
      popular: false
    },
    {
      id: 3,
      name: "DevOps & CI/CD Automation",
      description: "Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous monitoring.",
      features: ["CI/CD pipeline setup", "Infrastructure as code", "Automated testing & deployment", "Performance monitoring", "Container orchestration", "GitOps workflows"],
      icon: <Zap className="w-8 h-8" />,
      category: "DevOps",
      price: "From $2,999/month",
      marketPrice: "$5,999/month",
      savings: "50%",
      popular: false
    },
    {
      id: 4,
      name: "Full-Stack Web Development",
      description: "Modern, scalable web applications with React, Next.js, Node.js, and advanced performance optimization.",
      features: ["React/Next.js development", "Backend API development", "Database design & optimization", "Performance optimization", "SEO & accessibility", "Maintenance & support"],
      icon: <Globe className="w-8 h-8" />,
      category: "Development",
      price: "From $2,499/month",
      marketPrice: "$4,999/month",
      savings: "50%",
      popular: false
    },
    {
      id: 5,
      name: "Mobile App Development Suite",
      description: "Native and cross-platform mobile applications with advanced features and app store optimization.",
      features: ["Native iOS/Android development", "React Native & Flutter", "App store deployment", "Push notifications", "Analytics integration", "Maintenance & updates"],
      icon: <Smartphone className="w-8 h-8" />,
      category: "Mobile",
      price: "From $3,499/month",
      marketPrice: "$6,999/month",
      savings: "50%",
      popular: false
    },
    {
      id: 6,
      name: "Database Solutions & Management",
      description: "Comprehensive database services with design, optimization, migration, and 24/7 monitoring.",
      features: ["Database design & architecture", "Performance tuning", "Data migration", "Backup & recovery", "24/7 monitoring", "Security hardening"],
      icon: <Database className="w-8 h-8" />,
      category: "Database",
      price: "From $1,999/month",
      marketPrice: "$3,999/month",
      savings: "50%",
      popular: false
    },
    {
      id: 7,
      name: "IT Infrastructure Management",
      description: "Complete IT infrastructure setup, management, and optimization for enterprise environments.",
      features: ["Server setup & configuration", "Network design & security", "Hardware procurement", "System administration", "Backup & disaster recovery", "24/7 support"],
      icon: <Server className="w-8 h-8" />,
      category: "Infrastructure",
      price: "From $2,799/month",
      marketPrice: "$5,599/month",
      savings: "50%",
      popular: false
    },
    {
      id: 8,
      name: "API Development & Management",
      description: "RESTful and GraphQL API development with comprehensive management and monitoring capabilities.",
      features: ["RESTful API development", "GraphQL implementation", "API documentation", "Rate limiting & security", "API monitoring", "Version management"],
      icon: <Cpu className="w-8 h-8" />,
      category: "API Services",
      price: "From $1,499/month",
      marketPrice: "$2,999/month",
      savings: "50%",
      popular: false
    },
    {
      id: 9,
      name: "Digital Transformation Consulting",
      description: "Strategic digital transformation with technology assessment, planning, and implementation guidance.",
      features: ["Technology assessment", "Digital strategy planning", "Change management", "Process optimization", "Training & support", "ROI measurement"],
      icon: <TrendingUp className="w-8 h-8" />,
      category: "Consulting",
      price: "From $3,999/month",
      marketPrice: "$7,999/month",
      savings: "50%",
      popular: false
    }
  ];

  const technologies = [
    {
      name: "Cloud Platforms",
      technologies: ["AWS", "Azure", "Google Cloud", "DigitalOcean"],
      icon: <Cloud className="w-6 h-6" />
    },
    {
      name: "Programming Languages",
      technologies: ["JavaScript", "TypeScript", "Python", "Java", "C#"],
      icon: <Cpu className="w-6 h-6" />
    },
    {
      name: "Frameworks",
      technologies: ["React", "Next.js", "Node.js", "Express", "Django"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Security Tools",
      technologies: ["OWASP", "Nessus", "Burp Suite", "Wireshark"],
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "We analyze your current IT infrastructure and create a comprehensive improvement plan."
    },
    {
      step: "02",
      title: "Solution Design",
      description: "Custom solution architecture designed to meet your specific business requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Professional implementation with minimal downtime and maximum efficiency."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing to ensure reliability, security, and performance standards."
    },
    {
      step: "05",
      title: "Deployment & Support",
      description: "Smooth deployment with ongoing support and maintenance services."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Expert Engineers" }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Professional IT services including cloud migration, cybersecurity, DevOps, web development, and mobile app development. Transform your technology infrastructure." />
        <meta name="keywords" content="IT services, cloud migration, cybersecurity, DevOps, web development, mobile development, database solutions" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT services to transform your technology infrastructure" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive technology solutions to modernize, secure, and optimize your IT infrastructure.
                From cloud migration to cybersecurity, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get IT Assessment
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Our Work
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end technology solutions for modern businesses
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {itServices.map((service) => (
                <div key={service.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border transition-all duration-300 hover:border-cyan-500/40 hover:scale-105 ${
                  service.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                }`}>
                  {service.popular && (
                    <div className="flex items-center justify-center mb-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-cyan-400">
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs font-semibold">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.name}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-xs text-cyan-400 ml-5">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="text-center mb-4">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="text-lg font-bold text-white">
                        {service.price}
                      </div>
                      <div className="text-sm text-gray-400 line-through">
                        {service.marketPrice}
                      </div>
                    </div>
                    <div className="text-xs text-green-400 font-semibold">
                      Save {service.savings}
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    service.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
                  }`}>
                    Get Quote
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge technologies and industry best practices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{tech.name}</h3>
                  <div className="flex flex-wrap justify-center gap-2">
                    {tech.technologies.map((technology, techIndex) => (
                      <span key={techIndex} className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Development Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A systematic approach to delivering high-quality IT solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your IT Infrastructure?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's discuss how our IT services can modernize your technology stack and drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Get Free IT Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Download IT Guide
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPage;