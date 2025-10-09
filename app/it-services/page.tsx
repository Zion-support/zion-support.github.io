'use client';
import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud migration services with AWS, Azure, and Google Cloud. Optimize costs, improve scalability, and enhance security.",
      price: "$2,000/month",
      features: ["Cloud strategy planning", "Migration execution", "Cost optimization", "Security hardening", "24/7 monitoring"],
      icon: "☁️",
      category: "Cloud Services",
      technologies: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "Terraform"],
      benefits: ["50% cost reduction", "99.9% uptime", "Auto-scaling", "Global deployment"]
    },
    {
      id: 2,
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat detection, vulnerability assessment, penetration testing, and incident response.",
      price: "$1,800/month",
      features: ["Security audits", "Penetration testing", "Threat monitoring", "Incident response", "Compliance management"],
      icon: "🔒",
      category: "Security",
      technologies: ["SIEM", "EDR", "Firewalls", "VPN", "Zero Trust", "SOC 2"],
      benefits: ["Zero breaches", "24/7 monitoring", "Compliance ready", "Risk reduction"]
    },
    {
      id: 3,
      name: "DevOps & CI/CD",
      description: "Streamline development workflows with automated testing, deployment pipelines, and infrastructure as code.",
      price: "$1,500/month",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Automated testing", "Deployment automation", "Monitoring setup"],
      icon: "🛠️",
      category: "DevOps",
      technologies: ["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Chef", "Puppet"],
      benefits: ["90% faster deployments", "Zero downtime", "Automated testing", "Consistent environments"]
    },
    {
      id: 4,
      name: "Database Management",
      description: "Database design, optimization, migration, and management services. Support for SQL, NoSQL, and NewSQL databases.",
      price: "$1,200/month",
      features: ["Database design", "Performance tuning", "Migration services", "Backup & recovery", "Security hardening"],
      icon: "🗄️",
      category: "Database",
      technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Cassandra"],
      benefits: ["3x performance boost", "Zero data loss", "Automated backups", "Query optimization"]
    },
    {
      id: 5,
      name: "Network Infrastructure",
      description: "Design, implement, and manage enterprise networks with high availability, security, and performance optimization.",
      price: "$1,600/month",
      features: ["Network design", "Router configuration", "Switch management", "Wireless setup", "VPN implementation"],
      icon: "🌐",
      category: "Networking",
      technologies: ["Cisco", "Juniper", "Fortinet", "Aruba", "SD-WAN", "MPLS"],
      benefits: ["99.9% uptime", "High bandwidth", "Secure connectivity", "Global reach"]
    },
    {
      id: 6,
      name: "IT Support & Helpdesk",
      description: "24/7 technical support for end users, system administration, and IT troubleshooting. Remote and on-site support available.",
      price: "$800/month",
      features: ["24/7 support", "Remote assistance", "System administration", "User training", "Issue tracking"],
      icon: "🆘",
      category: "Support",
      technologies: ["ServiceNow", "Jira", "Remote Desktop", "Active Directory", "Office 365", "G Suite"],
      benefits: ["Instant response", "Proactive monitoring", "User satisfaction", "Reduced downtime"]
    },
    {
      id: 7,
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications with modern UI/UX design and backend integration.",
      price: "$3,500/month",
      features: ["iOS development", "Android development", "Cross-platform", "UI/UX design", "Backend integration"],
      icon: "📱",
      category: "Development",
      technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin", "Ionic"],
      benefits: ["Native performance", "Cross-platform", "Modern UI", "App store ready"]
    },
    {
      id: 8,
      name: "Web Development",
      description: "Modern web applications with responsive design, performance optimization, and security best practices.",
      price: "$2,500/month",
      features: ["Frontend development", "Backend development", "API development", "Performance optimization", "Security implementation"],
      icon: "💻",
      category: "Development",
      technologies: ["React", "Vue.js", "Angular", "Node.js", "Python", "PHP"],
      benefits: ["Fast loading", "Mobile responsive", "SEO optimized", "Secure"]
    },
    {
      id: 9,
      name: "Data Analytics & BI",
      description: "Business intelligence solutions with data warehousing, ETL processes, and interactive dashboards.",
      price: "$2,200/month",
      features: ["Data warehousing", "ETL processes", "Dashboard creation", "Report automation", "Data visualization"],
      icon: "📊",
      category: "Analytics",
      technologies: ["Tableau", "Power BI", "Looker", "Snowflake", "Apache Spark", "Python"],
      benefits: ["Data insights", "Automated reports", "Real-time dashboards", "Better decisions"]
    },
    {
      id: 10,
      name: "IT Consulting",
      description: "Strategic IT consulting to optimize technology investments, digital transformation, and technology roadmaps.",
      price: "$250/hour",
      features: ["Technology assessment", "Digital transformation", "IT strategy", "Vendor selection", "Implementation planning"],
      icon: "💡",
      category: "Consulting",
      technologies: ["Strategic frameworks", "Best practices", "Industry standards", "Methodologies"],
      benefits: ["Cost optimization", "Risk reduction", "Technology alignment", "Competitive advantage"]
    }
  ];

  const categories = ["All", "Cloud Services", "Security", "DevOps", "Database", "Networking", "Support", "Development", "Analytics", "Consulting"];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(itServices);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(itServices);
    } else {
      setFilteredServices(itServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive Technology Solutions for Modern Businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From cloud migration to cybersecurity, we provide end-to-end IT services that keep your business 
            running smoothly, securely, and efficiently. Trusted by 500+ companies worldwide.
          </p>
          
          {/* Contact Info */}
          <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Transform Your IT Infrastructure?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="cyber-button w-full sm:w-auto text-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                ✉️ Email Us
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              Address: 364 E Main St STE 1008, Middletown DE 19709
            </p>
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-cyan-500 text-white cyber-glow'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className={`cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${service.id * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="text-5xl cyber-scan-line">{service.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-cyan-400 neon-text">{service.price}</div>
                    <div className="text-sm text-gray-400">{service.category}</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 neon-text">{service.name}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, index) => (
                      <span key={index} className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <a
                    href="/contact"
                    className="cyber-button w-full text-center block"
                  >
                    Get Started
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Service Capabilities */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our IT Service Capabilities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-3">Rapid Deployment</h3>
              <p className="text-gray-300 text-sm">Quick implementation with minimal downtime and maximum efficiency.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock technical support and monitoring for your systems.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold text-white mb-3">Scalable Solutions</h3>
              <p className="text-gray-300 text-sm">Infrastructure that grows with your business needs and requirements.</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300 text-sm">Bank-level security with compliance and regulatory adherence.</p>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Proven Track Record
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
              <p className="text-gray-300">Clients Served</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <p className="text-gray-300">Uptime Guarantee</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
              <p className="text-gray-300">Average Cost Reduction</p>
            </div>
            <div className="cyber-card hologram-card p-6 text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
              <p className="text-gray-300">Support Available</p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            IT Service Plans
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Basic IT</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,200/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ 1 IT service</li>
                <li>✓ Business hours support</li>
                <li>✓ Basic monitoring</li>
                <li>✓ Monthly reports</li>
                <li>✓ Email support</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="quantum-card energy-pulse p-8 text-center relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional IT</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$2,500/month</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ 3 IT services</li>
                <li>✓ 24/7 support</li>
                <li>✓ Advanced monitoring</li>
                <li>✓ Weekly reports</li>
                <li>✓ Phone support</li>
                <li>✓ Priority response</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Get Started
              </a>
            </div>

            <div className="cyber-card hologram-card p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise IT</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom</div>
              <ul className="text-gray-300 mb-8 space-y-2">
                <li>✓ All IT services</li>
                <li>✓ Dedicated support team</li>
                <li>✓ Real-time monitoring</li>
                <li>✓ Daily reports</li>
                <li>✓ On-site support</li>
                <li>✓ Custom solutions</li>
                <li>✓ SLA guarantees</li>
              </ul>
              <a href="/contact" className="cyber-button w-full text-center block">
                Contact Sales
              </a>
            </div>
          </div>
        </section>

        {/* Technology Partners */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Technology Partners
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['AWS', 'Microsoft', 'Google', 'Cisco', 'VMware', 'Dell'].map((partner, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="text-2xl font-bold text-white">{partner}</div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ITServicesPage;