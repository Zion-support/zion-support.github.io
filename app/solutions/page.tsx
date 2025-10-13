import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Shield, Cloud, Zap, Globe, Database, Code, BarChart3, Users, Award, Clock, Star } from 'lucide-react';

export default function Solutions() {
  const solutionCategories = [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge artificial intelligence",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      solutions: [
        {
          name: "AI Business Intelligence",
          description: "Advanced analytics and insights for data-driven decisions",
          features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
          link: "/ai-business-intelligence"
        },
        {
          name: "AI Customer Support",
          description: "Intelligent chatbots and automated customer service",
          features: ["24/7 Support", "Natural Language Processing", "Multi-language", "Sentiment Analysis"],
          link: "/ai-customer-support"
        },
        {
          name: "AI Content Generation",
          description: "Automated content creation and marketing materials",
          features: ["Blog Posts", "Social Media", "Email Campaigns", "SEO Optimization"],
          link: "/ai-content-generation"
        },
        {
          name: "AI Cybersecurity",
          description: "Advanced threat detection and security automation",
          features: ["Threat Detection", "Automated Response", "Risk Assessment", "Compliance Monitoring"],
          link: "/ai-cybersecurity"
        }
      ]
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      solutions: [
        {
          name: "Cloud Migration",
          description: "Seamless transition to cloud infrastructure",
          features: ["Zero Downtime", "Data Security", "Cost Optimization", "Performance Monitoring"],
          link: "/cloud-migration"
        },
        {
          name: "Multi-Cloud Management",
          description: "Unified management across multiple cloud providers",
          features: ["Single Dashboard", "Cost Control", "Security Compliance", "Auto-scaling"],
          link: "/cloud-services"
        },
        {
          name: "Cloud Security",
          description: "Comprehensive security for cloud environments",
          features: ["Identity Management", "Data Encryption", "Threat Protection", "Compliance"],
          link: "/cloud-security"
        }
      ]
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business from evolving cyber threats",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      solutions: [
        {
          name: "Advanced Threat Protection",
          description: "Next-generation security against sophisticated attacks",
          features: ["AI Detection", "Real-time Monitoring", "Automated Response", "Forensic Analysis"],
          link: "/cybersecurity"
        },
        {
          name: "Compliance Management",
          description: "Ensure regulatory compliance and data protection",
          features: ["GDPR Compliance", "HIPAA Support", "SOX Compliance", "Audit Trails"],
          link: "/compliance"
        },
        {
          name: "Security Monitoring",
          description: "24/7 security monitoring and incident response",
          features: ["Real-time Alerts", "Incident Response", "Vulnerability Scanning", "Penetration Testing"],
          link: "/security-monitoring"
        }
      ]
    },
    {
      title: "5G & IoT Solutions",
      description: "Next-generation connectivity and smart device integration",
      icon: <Globe className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      solutions: [
        {
          name: "5G Implementation",
          description: "Deploy ultra-fast 5G networks for your business",
          features: ["Ultra-low Latency", "Massive IoT Support", "Edge Computing", "Network Slicing"],
          link: "/5g-solutions"
        },
        {
          name: "IoT Platform",
          description: "Connect and manage smart devices and sensors",
          features: ["Device Management", "Data Analytics", "Remote Monitoring", "Predictive Maintenance"],
          link: "/iot-solutions"
        },
        {
          name: "Smart City Solutions",
          description: "Transform urban infrastructure with smart technology",
          features: ["Traffic Management", "Energy Optimization", "Public Safety", "Environmental Monitoring"],
          link: "/5g-smart-city-solutions"
        }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      solutions: [
        {
          name: "Zion Analytics Pro",
          description: "AI-powered business intelligence platform",
          features: ["Real-time Analytics", "Custom Dashboards", "Predictive Insights", "Data Integration"],
          link: "/zion-analytics-pro"
        },
        {
          name: "Zion Security Shield",
          description: "Advanced cybersecurity protection suite",
          features: ["Threat Detection", "Vulnerability Scanning", "Compliance Monitoring", "Incident Response"],
          link: "/zion-security-shield"
        },
        {
          name: "Zion Cloud Vault",
          description: "Secure cloud storage and backup solution",
          features: ["Encrypted Storage", "Automated Backups", "Version Control", "Access Management"],
          link: "/zion-cloud-vault"
        }
      ]
    },
    {
      title: "Development Services",
      description: "Custom software development and digital transformation",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      solutions: [
        {
          name: "Web Development",
          description: "Modern, responsive web applications",
          features: ["React/Next.js", "Mobile Responsive", "SEO Optimized", "Performance Tuned"],
          link: "/web-development"
        },
        {
          name: "Mobile Development",
          description: "Native and cross-platform mobile apps",
          features: ["iOS & Android", "Cross-platform", "Push Notifications", "Offline Support"],
          link: "/mobile-development"
        },
        {
          name: "Custom Software",
          description: "Tailored solutions for unique business needs",
          features: ["Custom Architecture", "API Development", "Database Design", "Integration Services"],
          link: "/custom-development"
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Countries Served", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", solutions: ["AI Diagnostics", "Patient Management", "HIPAA Compliance"] },
    { name: "Finance", icon: "💰", solutions: ["Fraud Detection", "Risk Assessment", "Regulatory Compliance"] },
    { name: "Manufacturing", icon: "🏭", solutions: ["IoT Integration", "Predictive Maintenance", "Quality Control"] },
    { name: "Retail", icon: "🛒", solutions: ["E-commerce Platforms", "Inventory Management", "Customer Analytics"] },
    { name: "Education", icon: "🎓", solutions: ["Learning Management", "Student Analytics", "Virtual Classrooms"] },
    { name: "Government", icon: "🏛️", solutions: ["Digital Services", "Citizen Portals", "Data Security"] }
  ];

  return (
    <>
      <Helmet>
        <title>Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions for modern businesses. AI, cloud, cybersecurity, 5G, and custom development services." />
        <meta name="keywords" content="technology solutions, AI solutions, cloud services, cybersecurity, 5G, IoT, custom development, digital transformation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Technology Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth across all industries.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solution Categories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Solution Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive technology solutions across multiple domains to meet all your business needs.
              </p>
            </div>
            
            <div className="space-y-16">
              {solutionCategories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center mb-8">
                    <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-6`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.solutions.map((solution, solutionIndex) => (
                      <div key={solutionIndex} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                          {solution.name}
                        </h4>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <Link
                          to={solution.link}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:gap-2 transition-all"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Industry Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored technology solutions for specific industries and use cases.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">{industry.icon}</span>
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {industry.name}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {industry.solutions.map((solution, solutionIndex) => (
                      <li key={solutionIndex} className="flex items-center text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let our experts help you choose the right solutions for your business needs and implement them successfully.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View Case Studies
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
