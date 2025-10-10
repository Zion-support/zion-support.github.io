'use client';
import React from 'react';
import { Cloud, Shield, Settings, Database, Globe, Smartphone, BarChart, Users, Zap, Lock, CheckCircle, ArrowRight, Star, TrendingUp, Cpu, Target } from 'lucide-react';
import SEOOptimizer from '../components/SEOOptimizer';

const ITServicesPage: React.FC = () => {
  const itServiceCategories = [
    {
      category: "Cloud Services & Infrastructure",
      description: "Comprehensive cloud solutions and infrastructure management",
      services: [
        {
          name: "Cloud Migration Services",
          description: "Seamless migration to AWS, Azure, and GCP with 99.9% uptime guarantee and 24/7 expert support.",
          features: ["Multi-cloud migration", "Zero downtime", "Data security", "Cost optimization"],
          pricing: "Starting at $1,299/month",
          icon: Cloud,
          color: "text-blue-400",
          popular: true
        },
        {
          name: "Cloud Infrastructure Management",
          description: "Complete cloud infrastructure setup, monitoring, and optimization with automated scaling and security.",
          features: ["Infrastructure setup", "Auto scaling", "Performance monitoring", "Security management"],
          pricing: "Starting at $899/month",
          icon: Cpu,
          color: "text-cyan-400"
        },
        {
          name: "Hybrid Cloud Solutions",
          description: "Seamless integration between on-premises and cloud environments with unified management.",
          features: ["Hybrid integration", "Unified management", "Data synchronization", "Security compliance"],
          pricing: "Starting at $1,499/month",
          icon: Cloud,
          color: "text-indigo-400"
        },
        {
          name: "Cloud Security Suite",
          description: "Comprehensive cloud security with threat detection, vulnerability assessment, and compliance monitoring.",
          features: ["Threat detection", "Vulnerability scanning", "Compliance monitoring", "Incident response"],
          pricing: "Starting at $599/month",
          icon: Shield,
          color: "text-red-400"
        }
      ]
    },
    {
      category: "Cybersecurity & Compliance",
      description: "Advanced security solutions to protect your digital assets",
      services: [
        {
          name: "Cybersecurity Suite",
          description: "Comprehensive security solutions with threat detection, vulnerability assessment, and automated response.",
          features: ["24/7 monitoring", "Threat detection", "Vulnerability assessment", "Auto response"],
          pricing: "Starting at $799/month",
          icon: Shield,
          color: "text-red-400",
          popular: true
        },
        {
          name: "Penetration Testing",
          description: "Regular security assessments and penetration testing to identify and fix vulnerabilities.",
          features: ["Regular assessments", "Vulnerability testing", "Security reports", "Remediation guidance"],
          pricing: "Starting at $2,999/assessment",
          icon: Lock,
          color: "text-orange-400"
        },
        {
          name: "Compliance Management",
          description: "Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements.",
          features: ["Regulatory compliance", "Audit preparation", "Policy management", "Risk assessment"],
          pricing: "Starting at $1,199/month",
          icon: CheckCircle,
          color: "text-green-400"
        },
        {
          name: "Security Monitoring & SOC",
          description: "24/7 Security Operations Center with real-time threat monitoring and incident response.",
          features: ["24/7 SOC", "Real-time monitoring", "Incident response", "Threat intelligence"],
          pricing: "Starting at $1,999/month",
          icon: Shield,
          color: "text-purple-400"
        }
      ]
    },
    {
      category: "DevOps & Development",
      description: "Streamline development workflows and deployment processes",
      services: [
        {
          name: "DevOps & CI/CD",
          description: "Streamline development workflows with automated testing, deployment, and monitoring solutions.",
          features: ["CI/CD pipelines", "Automated testing", "Deployment automation", "Performance monitoring"],
          pricing: "Starting at $599/month",
          icon: Settings,
          color: "text-green-400",
          popular: true
        },
        {
          name: "API Development & Management",
          description: "Build, deploy, and manage APIs with comprehensive documentation, testing, and monitoring.",
          features: ["API development", "Documentation", "Testing suite", "Performance monitoring"],
          pricing: "Starting at $699/month",
          icon: Globe,
          color: "text-blue-400"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications with modern UX design and AI integration.",
          features: ["Native development", "Cross-platform", "AI integration", "Modern UX"],
          pricing: "Starting at $1,999/month",
          icon: Smartphone,
          color: "text-purple-400"
        },
        {
          name: "Web Development",
          description: "Modern web applications with responsive design, performance optimization, and security features.",
          features: ["Responsive design", "Performance optimization", "Security features", "SEO optimization"],
          pricing: "Starting at $1,299/month",
          icon: Globe,
          color: "text-cyan-400"
        }
      ]
    },
    {
      category: "Data & Analytics",
      description: "Data management and business intelligence solutions",
      services: [
        {
          name: "Database Management",
          description: "Database design, optimization, migration, and management with AI-powered performance tuning.",
          features: ["Database design", "Performance tuning", "Migration services", "Backup & recovery"],
          pricing: "Starting at $399/month",
          icon: Database,
          color: "text-teal-400",
          popular: true
        },
        {
          name: "Data Analytics & BI",
          description: "Transform data into actionable insights with advanced analytics, reporting, and visualization.",
          features: ["Data visualization", "Advanced analytics", "Automated reporting", "Predictive modeling"],
          pricing: "Starting at $799/month",
          icon: BarChart,
          color: "text-yellow-400"
        },
        {
          name: "Data Migration Services",
          description: "Seamless data migration between systems with zero data loss and minimal downtime.",
          features: ["Zero data loss", "Minimal downtime", "Data validation", "Rollback capability"],
          pricing: "Starting at $1,499/project",
          icon: Database,
          color: "text-indigo-400"
        },
        {
          name: "Data Backup & Recovery",
          description: "Comprehensive backup solutions with automated recovery and disaster recovery planning.",
          features: ["Automated backups", "Disaster recovery", "Data encryption", "Recovery testing"],
          pricing: "Starting at $299/month",
          icon: Shield,
          color: "text-green-400"
        }
      ]
    },
    {
      category: "IT Support & Management",
      description: "Comprehensive IT support and infrastructure management",
      services: [
        {
          name: "Managed IT Services",
          description: "Complete IT management with 24/7 support, monitoring, and proactive maintenance.",
          features: ["24/7 support", "Proactive monitoring", "Preventive maintenance", "Help desk"],
          pricing: "Starting at $499/month",
          icon: Users,
          color: "text-blue-400",
          popular: true
        },
        {
          name: "IT Consulting",
          description: "Strategic IT planning, technology assessment, and digital transformation consulting.",
          features: ["Strategic planning", "Technology assessment", "Digital transformation", "ROI analysis"],
          pricing: "$299/hour",
          icon: Target,
          color: "text-purple-400"
        },
        {
          name: "Network Solutions",
          description: "Enterprise networking, VPN setup, load balancing, and network security with 24/7 monitoring.",
          features: ["Network design", "VPN setup", "Load balancing", "Security monitoring"],
          pricing: "Starting at $699/month",
          icon: Globe,
          color: "text-cyan-400"
        },
        {
          name: "IT Asset Management",
          description: "Complete IT asset lifecycle management with inventory tracking and optimization.",
          features: ["Asset tracking", "Lifecycle management", "Cost optimization", "Compliance reporting"],
          pricing: "Starting at $199/month",
          icon: Settings,
          color: "text-orange-400"
        }
      ]
    }
  ];

  const benefits = [
    {
      title: "24/7 Expert Support",
      description: "Round-the-clock support from certified IT professionals",
      icon: Users,
      color: "text-blue-400"
    },
    {
      title: "99.9% Uptime Guarantee",
      description: "Reliable infrastructure with guaranteed availability",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Scalable Solutions",
      description: "Solutions that grow with your business needs",
      icon: TrendingUp,
      color: "text-purple-400"
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance standards",
      icon: Lock,
      color: "text-red-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Certified Experts" }
  ];

  return (
    <>
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive IT Solutions & Support"
        description="Professional IT services including cloud migration, cybersecurity, DevOps, data management, and 24/7 support. Transform your technology infrastructure with our expert IT solutions."
        keywords={['IT services', 'cloud migration', 'cybersecurity', 'DevOps', 'IT support', 'data management', 'IT consulting', 'managed IT']}
        canonicalUrl="https://ziontechgroup.com/it-services"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 neural-network-bg">
        <div className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="IT Services">
              IT Services
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Comprehensive IT Solutions & Support
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transform your technology infrastructure with our comprehensive IT services. From cloud migration 
              to cybersecurity, we provide end-to-end IT solutions with 24/7 expert support and guaranteed uptime.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Services by Category */}
          {itServiceCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                  {category.category}
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className={`quantum-card p-8 ${service.popular ? 'border-2 border-cyan-400' : ''}`}>
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    <div className="flex items-center mb-6">
                      <service.icon className={`w-8 h-8 ${service.color} mr-4`} />
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-cyan-400">{service.pricing}</div>
                      <button className="cyber-button">
                        Learn More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Choose Our IT Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <benefit.icon className={`w-12 h-12 ${benefit.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our IT Service Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
                <p className="text-gray-300">Comprehensive analysis of your current IT infrastructure and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
                <p className="text-gray-300">Strategic planning and solution design tailored to your business needs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
                <p className="text-gray-300">Professional implementation with minimal disruption to your operations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-slate-900">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Support</h3>
                <p className="text-gray-300">Ongoing support, monitoring, and optimization for continuous improvement</p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Get a free IT assessment and discover how we can optimize your technology infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Email Us
                </a>
                <a href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                  Get Free Assessment
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ITServicesPage;