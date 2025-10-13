import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Monitor, 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Network, 
  Smartphone,
  Globe,
  Zap,
  ArrowRight,
  Star,
  CheckCircle,
  Sparkles,
  TrendingUp,
  Lock,
  RefreshCw,
  Headphones,
  Cpu,
  Server,
  HardDrive,
  Wifi,
  Settings,
  Users,
  BarChart3,
  Clock,
  Award
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ITServicesPage = () => {
  const itServices = [
    {
      category: "Cloud & Infrastructure",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        {
          name: "Cloud Migration & Management",
          description: "Complete cloud migration services with AWS, Azure, and Google Cloud. Optimize your infrastructure for scalability, security, and cost-effectiveness.",
          features: [
            "Multi-cloud migration",
            "Infrastructure optimization",
            "Cost optimization",
            "Security hardening",
            "Disaster recovery",
            "24/7 monitoring"
          ],
          pricing: {
            starter: { price: "$5,999", period: "month", features: "Up to 10 servers, basic monitoring" },
            professional: { price: "$12,999", period: "month", features: "Up to 50 servers, advanced monitoring" },
            enterprise: { price: "$24,999", period: "month", features: "Unlimited servers, full management" }
          },
          link: "/cloud-migration",
          popular: true,
          icon: <Cloud className="w-6 h-6" />
        },
        {
          name: "DevOps & CI/CD",
          description: "Streamline your development process with automated deployment, continuous integration, and infrastructure as code solutions.",
          features: [
            "CI/CD pipeline setup",
            "Infrastructure as code",
            "Container orchestration",
            "Automated testing",
            "Deployment automation",
            "Performance monitoring"
          ],
          pricing: {
            starter: { price: "$3,999", period: "month", features: "Basic CI/CD, 5 environments" },
            professional: { price: "$7,999", period: "month", features: "Advanced CI/CD, 15 environments" },
            enterprise: { price: "$15,999", period: "month", features: "Full automation, unlimited environments" }
          },
          link: "/devops",
          icon: <Code className="w-6 h-6" />
        },
        {
          name: "System Integration",
          description: "Seamlessly integrate your existing systems with modern APIs, microservices, and third-party applications.",
          features: [
            "API development",
            "Microservices architecture",
            "Legacy system integration",
            "Data synchronization",
            "Real-time processing",
            "Custom connectors"
          ],
          pricing: {
            starter: { price: "$4,999", period: "month", features: "Up to 5 integrations" },
            professional: { price: "$9,999", period: "month", features: "Up to 20 integrations" },
            enterprise: { price: "$19,999", period: "month", features: "Unlimited integrations" }
          },
          link: "/system-integration",
          icon: <Network className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Security & Compliance",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      services: [
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive cybersecurity services including threat assessment, security implementation, and ongoing monitoring.",
          features: [
            "Security assessment",
            "Threat detection",
            "Incident response",
            "Security training",
            "Compliance auditing",
            "Penetration testing"
          ],
          pricing: {
            starter: { price: "$7,999", period: "month", features: "Basic security, up to 100 users" },
            professional: { price: "$15,999", period: "month", features: "Advanced security, up to 500 users" },
            enterprise: { price: "$29,999", period: "month", features: "Full security suite, unlimited users" }
          },
          link: "/network-security",
          popular: true,
          icon: <Shield className="w-6 h-6" />
        },
        {
          name: "Compliance & Governance",
          description: "Ensure regulatory compliance with GDPR, HIPAA, SOX, and other industry standards with our compliance solutions.",
          features: [
            "Compliance assessment",
            "Policy development",
            "Audit preparation",
            "Risk management",
            "Training programs",
            "Ongoing monitoring"
          ],
          pricing: {
            starter: { price: "$4,999", period: "month", features: "Basic compliance, 1 standard" },
            professional: { price: "$9,999", period: "month", features: "Multi-standard compliance" },
            enterprise: { price: "$19,999", period: "month", features: "Full compliance suite" }
          },
          link: "/compliance",
          icon: <Lock className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Development & Custom Solutions",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      services: [
        {
          name: "Custom Software Development",
          description: "Tailored software solutions built to your exact specifications using modern technologies and best practices.",
          features: [
            "Custom application development",
            "Web application development",
            "Mobile app development",
            "API development",
            "Database design",
            "Quality assurance"
          ],
          pricing: {
            starter: { price: "$15,000", period: "project", features: "Small application, 2-3 months" },
            professional: { price: "$50,000", period: "project", features: "Medium application, 4-6 months" },
            enterprise: { price: "$150,000+", period: "project", features: "Large application, 6+ months" }
          },
          link: "/custom-software",
          popular: true,
          icon: <Code className="w-6 h-6" />
        },
        {
          name: "Web Development & Design",
          description: "Modern, responsive web applications with cutting-edge design and optimal user experience.",
          features: [
            "Responsive web design",
            "E-commerce solutions",
            "Content management systems",
            "SEO optimization",
            "Performance optimization",
            "Maintenance & support"
          ],
          pricing: {
            starter: { price: "$8,000", period: "project", features: "Basic website, 1-2 months" },
            professional: { price: "$25,000", period: "project", features: "Advanced website, 3-4 months" },
            enterprise: { price: "$75,000+", period: "project", features: "Complex web application, 6+ months" }
          },
          link: "/web-development",
          icon: <Globe className="w-6 h-6" />
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
          features: [
            "iOS app development",
            "Android app development",
            "Cross-platform solutions",
            "UI/UX design",
            "App store optimization",
            "Maintenance & updates"
          ],
          pricing: {
            starter: { price: "$20,000", period: "project", features: "Single platform, 2-3 months" },
            professional: { price: "$40,000", period: "project", features: "Both platforms, 4-6 months" },
            enterprise: { price: "$100,000+", period: "project", features: "Complex app, 6+ months" }
          },
          link: "/mobile-development",
          icon: <Smartphone className="w-6 h-6" />
        }
      ]
    },
    {
      category: "Consulting & Support",
      icon: <Users className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        {
          name: "IT Consulting",
          description: "Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.",
          features: [
            "Technology assessment",
            "Strategic planning",
            "Architecture design",
            "Technology selection",
            "Implementation guidance",
            "Ongoing advisory"
          ],
          pricing: {
            starter: { price: "$299", period: "hour", features: "Basic consulting, 20 hours/month" },
            professional: { price: "$399", period: "hour", features: "Advanced consulting, 40 hours/month" },
            enterprise: { price: "$499", period: "hour", features: "Executive consulting, 80+ hours/month" }
          },
          link: "/it-consulting",
          popular: true,
          icon: <Users className="w-6 h-6" />
        },
        {
          name: "Managed IT Services",
          description: "Comprehensive managed IT services including help desk, monitoring, maintenance, and support.",
          features: [
            "24/7 help desk",
            "Proactive monitoring",
            "Regular maintenance",
            "Security updates",
            "Backup management",
            "Performance optimization"
          ],
          pricing: {
            starter: { price: "$2,999", period: "month", features: "Up to 25 users, basic support" },
            professional: { price: "$5,999", period: "month", features: "Up to 100 users, advanced support" },
            enterprise: { price: "$11,999", period: "month", features: "Unlimited users, full support" }
          },
          link: "/managed-it",
          icon: <Headphones className="w-6 h-6" />
        },
        {
          name: "Database Services",
          description: "Database design, optimization, migration, and management services for all major database platforms.",
          features: [
            "Database design",
            "Performance optimization",
            "Data migration",
            "Backup & recovery",
            "Security hardening",
            "Monitoring & maintenance"
          ],
          pricing: {
            starter: { price: "$1,999", period: "month", features: "Up to 5 databases" },
            professional: { price: "$3,999", period: "month", features: "Up to 20 databases" },
            enterprise: { price: "$7,999", period: "month", features: "Unlimited databases" }
          },
          link: "/database-services",
          icon: <Database className="w-6 h-6" />
        }
      ]
    }
  ];

  const technologies = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud Platforms",
      description: "AWS, Azure, Google Cloud, DigitalOcean, and hybrid cloud solutions"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      description: "Python, JavaScript, Java, C#, Go, Rust, and modern frameworks"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases",
      description: "PostgreSQL, MySQL, MongoDB, Redis, Elasticsearch, and data warehouses"
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "DevOps Tools",
      description: "Docker, Kubernetes, Jenkins, GitLab, Terraform, and monitoring tools"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Tools",
      description: "SIEM, firewalls, IDS/IPS, vulnerability scanners, and compliance tools"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Technologies",
      description: "React Native, Flutter, Swift, Kotlin, and cross-platform solutions"
    }
  ];

  const testimonials = [
    {
      name: "David Johnson",
      company: "TechStart Inc.",
      role: "CTO",
      content: "Zion's cloud migration service saved us 40% on infrastructure costs while improving performance by 60%.",
      rating: 5,
      service: "Cloud Migration & Management"
    },
    {
      name: "Sarah Chen",
      company: "E-commerce Solutions",
      role: "IT Director",
      content: "Their cybersecurity solutions protected us from multiple attacks. The 24/7 monitoring gives us peace of mind.",
      rating: 5,
      service: "Cybersecurity Solutions"
    },
    {
      name: "Michael Rodriguez",
      company: "Digital Agency",
      role: "CEO",
      content: "The custom software development team delivered exactly what we needed, on time and within budget.",
      rating: 5,
      service: "Custom Software Development"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Discover our comprehensive IT services including cloud migration, cybersecurity, custom development, and managed IT services. Transform your technology infrastructure."
        keywords="IT services, cloud migration, cybersecurity, custom software, web development, managed IT, DevOps, system integration"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid-advanced particle-system" />
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text">
              IT Services
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your technology infrastructure with our comprehensive IT services. 
            From cloud migration to cybersecurity, we deliver solutions that drive business success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-cyber px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 flex items-center justify-center group"
            >
              <span>Get IT Consultation</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center group"
            >
              <Monitor className="w-5 h-5 mr-2" />
              <span>View Our Work</span>
            </Link>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver modern, scalable, and secure solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {tech.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* IT Services by Category */}
      {itServices.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-4">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  {category.category}
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {category.category === "Cloud & Infrastructure" && "Modernize your infrastructure with cloud solutions and DevOps practices."}
                {category.category === "Security & Compliance" && "Protect your business with comprehensive security and compliance solutions."}
                {category.category === "Development & Custom Solutions" && "Build custom software solutions tailored to your business needs."}
                {category.category === "Consulting & Support" && "Get expert guidance and ongoing support for your IT operations."}
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Pricing:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {Object.entries(service.pricing).map(([plan, details]) => (
                        <div key={plan} className="text-center p-3 bg-white/5 rounded-lg">
                          <div className="text-sm text-gray-400 capitalize mb-1">{plan}</div>
                          <div className="text-lg font-bold text-white mb-1">
                            {details.price}<span className="text-sm text-gray-400">/{details.period}</span>
                          </div>
                          <div className="text-xs text-gray-400">{details.features}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/contact"
                      className="flex-1 border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 text-center"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>
      ))}

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by IT Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what technology leaders say about our IT services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="mb-2">
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                </div>
                <div className="text-xs text-cyan-400 font-medium">{testimonial.service}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your IT?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Partner with us to modernize your technology infrastructure, enhance security, 
              and drive business growth with cutting-edge IT solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Start IT Transformation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300 flex items-center justify-center group"
              >
                <Monitor className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Link>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>Contact us: <span className="text-cyan-400">kleber@ziontechgroup.com</span> | <span className="text-cyan-400">+1 302 464 0950</span></p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default ITServicesPage;