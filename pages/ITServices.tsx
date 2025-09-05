import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Shield, 
  Settings, 
  Database, 
  Code, 
  Target, 
  CheckCircle, 
  Star, 
  ArrowRight,
  Zap,
  Globe,
  Users,
  Phone,
  Mail as MailIcon,
  MapPin,
  Server,
  Cpu,
  Network,
  Lock,
  BarChart3,
  Smartphone,
  Laptop,
  Wrench,
  Monitor,
  HardDrive
} from 'lucide-react';
import Layout from '../components/Layout';

const itServices = [
  {
    title: "Cloud Infrastructure Setup & Migration",
    description: "Complete cloud transformation services including migration, optimization, and management of your infrastructure on AWS, Azure, or Google Cloud.",
    icon: Cloud,
    price: "Starting at $2,000",
    features: [
      "Cloud migration strategy & planning",
      "Infrastructure design & architecture",
      "Security configuration & compliance",
      "Performance optimization",
      "24/7 monitoring & support",
      "Cost optimization & management"
    ],
    benefits: [
      "Reduce infrastructure costs by 40%",
      "Improve scalability and flexibility",
      "Enhance security and compliance",
      "Increase system reliability"
    ],
    href: "/contact?service=cloud-infrastructure"
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security services including threat assessment, protection implementation, and ongoing monitoring to keep your business safe.",
    icon: Shield,
    price: "Starting at $1,500",
    features: [
      "Security audit & vulnerability assessment",
      "Firewall & network security setup",
      "Endpoint protection & antivirus",
      "Email security & phishing protection",
      "Security awareness training",
      "Incident response & recovery"
    ],
    benefits: [
      "Protect against 99.9% of cyber threats",
      "Ensure regulatory compliance",
      "Reduce security incidents by 90%",
      "Minimize business downtime"
    ],
    href: "/contact?service=cybersecurity"
  },
  {
    title: "DevOps & CI/CD Implementation",
    description: "Streamline your development and deployment processes with automated pipelines, container orchestration, and infrastructure as code.",
    icon: Settings,
    price: "Starting at $2,500",
    features: [
      "CI/CD pipeline setup & optimization",
      "Container orchestration (Docker, Kubernetes)",
      "Infrastructure as Code (IaC)",
      "Automated testing & deployment",
      "Monitoring & logging setup",
      "Performance optimization"
    ],
    benefits: [
      "Deploy 10x faster with confidence",
      "Reduce deployment errors by 95%",
      "Improve team productivity by 50%",
      "Enable continuous delivery"
    ],
    href: "/contact?service=devops"
  },
  {
    title: "Database Management & Optimization",
    description: "Expert database services including design, optimization, migration, and maintenance for SQL and NoSQL databases.",
    icon: Database,
    price: "Starting at $1,200",
    features: [
      "Database design & architecture",
      "Performance tuning & optimization",
      "Data migration & synchronization",
      "Backup & disaster recovery",
      "Security hardening",
      "Monitoring & maintenance"
    ],
    benefits: [
      "Improve query performance by 80%",
      "Reduce database downtime to near zero",
      "Ensure data integrity and security",
      "Optimize storage and costs"
    ],
    href: "/contact?service=database-management"
  },
  {
    title: "API Development & Integration",
    description: "Custom API development and third-party integrations to connect your systems and enable seamless data flow.",
    icon: Code,
    price: "Starting at $1,800",
    features: [
      "RESTful API design & development",
      "GraphQL API implementation",
      "Third-party API integrations",
      "API documentation & testing",
      "Rate limiting & security",
      "Performance monitoring"
    ],
    benefits: [
      "Enable seamless system integration",
      "Improve data accessibility",
      "Reduce development time by 60%",
      "Enhance system scalability"
    ],
    href: "/contact?service=api-development"
  },
  {
    title: "IT Consulting & Strategy",
    description: "Strategic technology consulting to help you make informed decisions about your IT infrastructure and digital transformation.",
    icon: Target,
    price: "Starting at $200/hour",
    features: [
      "Technology assessment & audit",
      "Digital transformation strategy",
      "IT roadmap development",
      "Vendor evaluation & selection",
      "Implementation guidance",
      "Team training & knowledge transfer"
    ],
    benefits: [
      "Align technology with business goals",
      "Reduce IT costs by 30%",
      "Improve operational efficiency",
      "Make informed technology decisions"
    ],
    href: "/contact?service=it-consulting"
  },
  {
    title: "Network Infrastructure & Security",
    description: "Complete network design, implementation, and security services for wired and wireless networks of any size.",
    icon: Network,
    price: "Starting at $1,000",
    features: [
      "Network design & architecture",
      "Wireless network setup & optimization",
      "VPN & remote access solutions",
      "Network security & monitoring",
      "Bandwidth optimization",
      "Troubleshooting & maintenance"
    ],
    benefits: [
      "Improve network performance by 70%",
      "Enhance security and reliability",
      "Support remote work capabilities",
      "Reduce network downtime"
    ],
    href: "/contact?service=network-infrastructure"
  },
  {
    title: "IT Support & Help Desk",
    description: "Comprehensive IT support services including help desk, technical support, and system maintenance for your organization.",
    icon: Wrench,
    price: "Starting at $500/month",
    features: [
      "24/7 help desk support",
      "Remote and on-site technical support",
      "Hardware & software maintenance",
      "User training & onboarding",
      "System updates & patches",
      "Performance monitoring"
    ],
    benefits: [
      "Reduce IT support costs by 50%",
      "Improve user productivity",
      "Minimize system downtime",
      "Ensure consistent IT service quality"
    ],
    href: "/contact?service=it-support"
  }
];

const itTechnologies = [
  {
    name: "Cloud Platforms",
    description: "AWS, Azure, Google Cloud Platform",
    icon: Cloud
  },
  {
    name: "Security Solutions",
    description: "Firewalls, antivirus, encryption, compliance",
    icon: Shield
  },
  {
    name: "DevOps Tools",
    description: "Docker, Kubernetes, Jenkins, GitLab",
    icon: Settings
  },
  {
    name: "Databases",
    description: "MySQL, PostgreSQL, MongoDB, Redis",
    icon: Database
  },
  {
    name: "Programming Languages",
    description: "Python, JavaScript, Java, C#, Go",
    icon: Code
  },
  {
    name: "Monitoring Tools",
    description: "Prometheus, Grafana, ELK Stack",
    icon: Monitor
  }
];

const pricingTiers = [
  {
    name: "Basic Support",
    price: "$500",
    period: "per month",
    description: "Essential IT support for small businesses",
    features: [
      "Email & phone support",
      "Basic troubleshooting",
      "Software updates",
      "Security monitoring",
      "Monthly reports"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$1,500",
    period: "per month",
    description: "Comprehensive IT services for growing businesses",
    features: [
      "24/7 support & monitoring",
      "Proactive maintenance",
      "Security management",
      "Backup & recovery",
      "Network optimization",
      "Priority response"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Full IT transformation and management",
    features: [
      "Dedicated IT team",
      "Custom solutions",
      "Strategic consulting",
      "Full infrastructure management",
      "Compliance & security",
      "Unlimited support"
    ],
    popular: false
  }
];

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709",
  website: "https://ziontechgroup.com"
};

export default function ITServices() {
  return (
    <Layout 
      title="IT Services - Zion Tech Group" 
      description="Comprehensive IT services and solutions for businesses of all sizes. Cloud infrastructure, cybersecurity, DevOps, and IT consulting."
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Services
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive IT solutions to modernize your infrastructure, enhance security, 
                and accelerate your digital transformation journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Get Started Today
                </Link>
                <Link 
                  href="#services" 
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Explore IT Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage cutting-edge technologies to deliver robust IT solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itTechnologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-6 text-center hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                >
                  <tech.icon className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300">{tech.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end IT solutions designed to modernize and secure your business infrastructure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300 border border-slate-700"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-green-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-2xl font-bold text-green-400 mb-4">{service.price}</div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-green-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link 
                    href={service.href}
                    className="w-full bg-gradient-to-r from-green-500 to-teal-600 text-white py-2 px-4 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold text-center block"
                  >
                    Learn More
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                IT Service Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit your IT needs and budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-slate-800/50 rounded-lg p-8 ${
                    tier.popular ? 'ring-2 ring-green-500 scale-105' : ''
                  } border border-slate-700`}
                >
                  {tier.popular && (
                    <div className="bg-green-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                  <p className="text-gray-300 mb-4">{tier.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">{tier.price}</span>
                    <span className="text-gray-300 ml-2">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-all duration-300 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:shadow-lg'
                        : 'border-2 border-white text-white hover:bg-white hover:text-gray-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our IT experts help you build a robust, secure, and scalable technology foundation for your business.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-400 mr-3" />
                  <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-green-400 transition-colors">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MailIcon className="w-6 h-6 text-green-400 mr-3" />
                  <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-green-400 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-green-400 mr-3" />
                  <span className="text-white">{contactInfo.address}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="px-8 py-4 bg-gradient-to-r from-green-500 to-teal-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Start Your IT Transformation
                </Link>
                <Link 
                  href={contactInfo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
                >
                  Visit Our Website
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
}