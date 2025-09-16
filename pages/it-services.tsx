import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { Cloud, Shield, Database, Smartphone, Globe, Code, Server, BarChart3, Link as LinkIcon, Cpu, TestTube, BookOpen, Wrench, Brain } from 'lucide-react';

export default function ITServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const itServices = [
    {
      icon: Cloud,
      name: 'Cloud DevOps & SRE',
      description: 'Complete cloud infrastructure management with CI/CD pipelines, infrastructure as code, and site reliability engineering.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring, logging, and alerting systems',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup strategies'
      ],
      pricing: '$120 – $220/hour',
      projectPricing: '$6,000 – $30,000/project',
      timeline: '2–8 weeks',
      benefits: [
        '99.9% uptime guarantee',
        'Automated deployment processes',
        'Reduced infrastructure costs',
        'Improved system reliability'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $8,000/month managed',
      timeline: '4–12 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced security incidents',
        'Compliance with regulations',
        '24/7 security monitoring'
      ],
      category: 'Security'
    },
    {
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud Platform expertise.",
      icon: Cloud,
      features: [
        "Multi-cloud architecture design",
        "Serverless computing setup",
        "Container orchestration (Kubernetes)",
        "Auto-scaling configuration",
        "Cost optimization strategies",
        "Disaster recovery planning",
        "Cloud security implementation",
        "24/7 monitoring & support"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability by 300%",
        "Enhance security posture",
        "Increase system reliability to 99.9%"
      ],
      price: "$2,500 - $8,000/month",
      marketPrice: "$4,000 - $12,000/month",
      category: "Cloud Computing",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including zero-trust architecture, threat detection, and compliance management.",
      icon: Shield,
      features: [
        "Security assessment & auditing",
        "Penetration testing",
        "Zero-trust architecture implementation",
        "Threat detection & response",
        "Identity & access management",
        "Compliance management (SOC 2, ISO 27001)",
        "Security training & awareness",
        "Incident response planning"
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Achieve compliance certification",
        "Protect against advanced threats",
        "Improve security posture by 200%"
      ],
      price: "$3,000 - $10,000/month",
      marketPrice: "$5,000 - $15,000/month",
      category: "Security",
      popular: true,
      setupTime: "3-6 weeks"
    },
    {
      name: "Network Infrastructure & Management",
      description: "Enterprise-grade network design, implementation, and management with advanced monitoring and optimization.",
      icon: Network,
      features: [
        "Network design & architecture",
        "Wireless network deployment",
        "Network security implementation",
        "Performance monitoring & optimization",
        "Load balancing configuration",
        "VPN setup & management",
        "Network automation",
        "24/7 network monitoring"
      ],
      benefits: [
        "Improve network performance by 150%",
        "Reduce downtime by 95%",
        "Enhance security posture",
        "Optimize network costs by 30%"
      ],
      price: "$1,800 - $6,000/month",
      marketPrice: "$3,000 - $9,000/month",
      category: "Networking",
      popular: true,
      setupTime: "2-3 weeks"
    },
    {
      name: "Database Solutions & Management",
      description: "Advanced database design, optimization, and management with real-time monitoring and backup solutions.",
      icon: Database,
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Data migration services",
        "Backup & disaster recovery",
        "Real-time monitoring",
        "Security implementation",
        "Scalability planning",
        "Database automation"
      ],
      benefits: [
        "Improve database performance by 200%",
        "Reduce data loss risk by 99%",
        "Optimize query performance",
        "Ensure data integrity & security"
      ],
      price: "$2,200 - $7,500/month",
      marketPrice: "$4,000 - $11,000/month",
      category: "Database",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "DevOps & Automation",
      description: "Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment strategies.",
      icon: GitBranch,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Automated testing & deployment",
        "Monitoring & logging",
        "Configuration management",
        "Release management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve code quality by 150%",
        "Increase deployment frequency by 500%",
        "Reduce manual errors by 95%"
      ],
      price: "$2,800 - $9,000/month",
      marketPrice: "$4,500 - $13,000/month",
      category: "DevOps",
      popular: true,
      setupTime: "3-5 weeks"
    },
    {
      name: "IT Support & Help Desk",
      description: "Comprehensive IT support services with 24/7 monitoring, remote assistance, and proactive maintenance.",
      icon: Headphones,
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Proactive system monitoring",
        "Hardware & software maintenance",
        "User training & onboarding",
        "Incident management",
        "Change management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce IT downtime by 90%",
        "Improve user satisfaction by 200%",
        "Lower IT support costs by 50%",
        "Proactive issue resolution"
      ],
      price: "$1,500 - $5,000/month",
      marketPrice: "$2,500 - $7,500/month",
      category: "Support",
      popular: true,
      setupTime: "1-2 weeks"
    },
    {
      name: "System Integration & APIs",
      description: "Seamless integration of disparate systems with custom APIs, middleware, and data synchronization solutions.",
      icon: Layers,
      features: [
        "Custom API development",
        "System integration planning",
        "Data synchronization",
        "Middleware implementation",
        "Legacy system modernization",
        "Real-time data processing",
        "Error handling & monitoring",
        "Documentation & testing"
      ],
      benefits: [
        "Improve system efficiency by 180%",
        "Reduce manual data entry by 95%",
        "Enhance data accuracy by 99%",
        "Streamline business processes"
      ],
      price: "$2,000 - $8,000/month",
      marketPrice: "$3,500 - $12,000/month",
      category: "Integration",
      popular: true,
      setupTime: "3-6 weeks"
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics platform with real-time dashboards, predictive analytics, and business intelligence solutions.",
      icon: BarChart3,
      features: [
        "Data warehouse design",
        "ETL/ELT processes",
        "Real-time dashboards",
        "Predictive analytics",
        "Machine learning integration",
        "Data visualization",
        "Report automation",
        "Data governance"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify trends 5x faster",
        "Improve business performance by 40%",
        "Reduce reporting time by 85%"
      ],
      price: "$3,500 - $12,000/month",
      marketPrice: "$6,000 - $18,000/month",
      category: "Analytics",
      popular: true,
      setupTime: "4-8 weeks"
    },
    {
      name: "Mobile & Web Development",
      description: "Full-stack development services for web applications, mobile apps, and progressive web applications with modern technologies.",
      icon: Smartphone,
      features: [
        "Web application development",
        "Mobile app development (iOS/Android)",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "UI/UX design",
        "Performance optimization",
        "Security implementation",
        "Testing & quality assurance"
      ],
      benefits: [
        "Modern, responsive applications",
        "Cross-platform compatibility",
        "Enhanced user experience",
        "Scalable architecture"
      ],
      price: "$4,000 - $15,000/month",
      marketPrice: "$7,000 - $25,000/month",
      category: "Development",
      popular: true,
      setupTime: "6-12 weeks"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting services including technology roadmaps, digital transformation, and IT governance.",
      icon: Users,
      features: [
        "Technology roadmap planning",
        "Digital transformation strategy",
        "IT governance & compliance",
        "Technology assessment",
        "Vendor management",
        "Cost optimization",
        "Risk assessment",
        "Change management"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology costs by 30%",
        "Improve IT efficiency by 150%",
        "Strategic technology planning"
      ],
      price: "$2,000 - $8,000/month",
      marketPrice: "$3,500 - $12,000/month",
      category: "Consulting",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity and data protection.",
      icon: HardDrive,
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data replication",
        "Recovery testing",
        "Compliance reporting",
        "Cloud backup solutions",
        "Offsite storage management",
        "Recovery time optimization"
      ],
      benefits: [
        "Protect against data loss",
        "Minimize downtime during disasters",
        "Ensure business continuity",
        "Comply with regulations"
      ],
      price: "$1,200 - $4,500/month",
      marketPrice: "$2,000 - $6,500/month",
      category: "Data Protection",
      popular: true,
      setupTime: "1-3 weeks"
    },
    {
      name: "IT Security Monitoring",
      description: "24/7 security monitoring and threat detection with advanced SIEM solutions and incident response capabilities.",
      icon: Eye,
      features: [
        "24/7 security monitoring",
        "Threat detection & analysis",
        "SIEM implementation",
        "Incident response",
        "Vulnerability scanning",
        "Security reporting",
        "Compliance monitoring",
        "Threat intelligence"
      ],
      benefits: [
        "Detect threats in real-time",
        "Reduce security incidents by 85%",
        "Improve response time by 90%",
        "Maintain compliance standards"
      ],
      price: "$2,500 - $7,500/month",
      marketPrice: "$4,000 - $11,000/month",
      category: "Security Monitoring",
      popular: true,
      setupTime: "2-4 weeks"
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Head>
        <title>IT & Cloud Services — Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud migration, cybersecurity, enterprise architecture, and development solutions. Expert IT consulting and implementation." />
        <link rel="canonical" href={`${contact.site}/it-services`} />
      </Head>

      <header className="py-20 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          IT & Cloud Services
        </h1>
        <p className="mt-4 text-slate-300 max-w-3xl mx-auto text-lg">
          Comprehensive IT solutions from cloud migration to cybersecurity. Our expert team delivers 
          enterprise-grade infrastructure, development, and consulting services with proven results.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-5 py-2 rounded bg-blue-600 hover:bg-blue-700">Call {contact.phone}</a>
          <a href={`mailto:${contact.email}`} className="px-5 py-2 rounded bg-purple-600 hover:bg-purple-700">Email {contact.email}</a>
          <Link href="/contact" className="px-5 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10">Get Quote</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 pb-24">
        {/* Category Filter */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Browse by Category</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8">
          {itServices.map((service, index) => (
            <div key={index} className="rounded-xl border border-white/10 bg-slate-900/60 p-8 hover:border-blue-500/40 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{service.name}</h2>
                    <span className="px-2 py-1 rounded bg-slate-800/70 border border-white/10 text-xs font-medium">
                      {service.category}
                    </span>
                  </div>
                  <p className="text-slate-300 text-lg">{service.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">Key Features</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-green-400">Business Benefits</h3>
                  <ul className="space-y-2 text-slate-300">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Hourly Rate:</span>
                    <span className="font-semibold text-blue-400">{service.pricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Project:</span>
                    <span className="font-semibold text-purple-400">{service.projectPricing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Timeline:</span>
                    <span className="font-semibold text-green-400">{service.timeline}</span>
                  </div>
                  <div className="ml-auto flex gap-3">
                    <Link href="/contact" className="px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-sm font-semibold">
                      Request Quote
                    </Link>
                    <Link href="/contact" className="px-4 py-2 rounded bg-slate-800 hover:bg-slate-700 border border-white/10 text-sm font-semibold">
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Our IT experts are ready to help you modernize your infrastructure, enhance security, 
              and optimize performance. Contact us today for a free consultation.
            </p>
            <div className="mb-8">
              <p className="text-lg text-blue-100 mb-2">
                📞 <strong>Call us:</strong> +1 302 464 0950
              </p>
              <p className="text-lg text-blue-100 mb-2">
                📧 <strong>Email us:</strong> kleber@ziontechgroup.com
              </p>
              <p className="text-lg text-blue-100">
                📍 <strong>Visit us:</strong> 364 E Main St STE 1008, Middletown DE 19709
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`tel:${contact.phone.replace(/[^\d+]/g,'')}`} className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Call {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Email {contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}