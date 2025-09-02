import React from &apos;react&apos;;
import Head from &apos;next/head&apos;;
import Link from &apos;next/link&apos;;
import {
  Server,
  Cloud,
  Shield,
  Database,
  Network,
  Monitor,
  Smartphone,
  Globe,
  Lock,
  Settings,
  Zap,
  Users,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Clock,
  Award,
  Star,
  Cpu,
  HardDrive,
  Wifi,
  Code,
  Terminal,
  FileText,
  Mail,
  Phone,
  MapPin,
  TrendingUp
} from &apos;lucide-react&apos;;
import PageTransition from &apos;../src/components/PageTransition&apos;;

export default function ITServices() {
  const title = &apos;IT Services — Zion Tech Group&apos;;
  const description = &apos;Comprehensive IT services including cloud infrastructure, cybersecurity, network management, and digital transformation solutions.&apos;;

  const itServices = [
    {
      title: &apos;Cloud Infrastructure & Migration&apos;,
      description: &apos;Complete cloud transformation with AWS, Azure, and Google Cloud Platform&apos;,
      icon: Cloud,
      features: [
        &apos;Multi-cloud architecture design and implementation&apos;,
        &apos;Legacy system migration and modernization&apos;,
        &apos;Serverless computing and containerization&apos;,
        &apos;Auto-scaling and load balancing&apos;,
        &apos;Cost optimization and FinOps practices&apos;,
        &apos;Disaster recovery and backup solutions&apos;
      ],
      pricing: &apos;$5,000 - $50,000/month&apos;,
      delivery: &apos;4-12 weeks&apos;,
      category: &apos;Cloud Services&apos;
    },
    {
      title: &apos;Cybersecurity & Compliance&apos;,
      description: &apos;Enterprise-grade security solutions and compliance management&apos;,
      icon: Shield,
      features: [
        &apos;Zero-trust security architecture&apos;,
        &apos;SOC 2, GDPR, HIPAA compliance automation&apos;,
        &apos;Penetration testing and vulnerability assessments&apos;,
        &apos;Security monitoring and incident response&apos;,
        &apos;Identity and access management (IAM)&apos;,
        &apos;Data encryption and privacy protection&apos;
      ],
      pricing: &apos;$3,000 - $25,000/month&apos;,
      delivery: &apos;3-8 weeks&apos;,
      category: &apos;Security Services&apos;
    },
    {
      title: &apos;Network Infrastructure&apos;,
      description: &apos;Design, implementation, and management of enterprise networks&apos;,
      icon: Network,
      features: [
        &apos;SD-WAN and hybrid network solutions&apos;,
        &apos;Network security and firewall management&apos;,
        &apos;Wireless network design and optimization&apos;,
        &apos;Network monitoring and performance tuning&apos;,
        &apos;VoIP and unified communications&apos;,
        &apos;Network documentation and training&apos;
      ],
      pricing: &apos;$2,000 - $15,000/month&apos;,
      delivery: &apos;2-6 weeks&apos;,
      category: &apos;Network Services&apos;
    },
    {
      title: &apos;IT Support & Helpdesk&apos;,
      description: &apos;24/7 technical support and helpdesk services&apos;,
      icon: Users,
      features: [
        &apos;24/7/365 technical support coverage&apos;,
        &apos;Remote desktop and troubleshooting&apos;,
        &apos;Software installation and updates&apos;,
        &apos;Hardware procurement and management&apos;,
        &apos;User training and documentation&apos;,
        &apos;SLA-based response times&apos;
      ],
      pricing: &apos;$1,500 - $8,000/month&apos;,
      delivery: &apos;1-2 weeks&apos;,
      category: &apos;Support Services&apos;
    },
    {
      title: &apos;Data Management & Analytics&apos;,
      description: &apos;Data warehousing, analytics, and business intelligence solutions&apos;,
      icon: Database,
      features: [
        &apos;Data warehouse design and implementation&apos;,
        &apos;ETL/ELT pipeline development&apos;,
        &apos;Business intelligence dashboards&apos;,
        &apos;Data governance and quality management&apos;,
        &apos;Real-time analytics and reporting&apos;,
        &apos;Machine learning data preparation&apos;
      ],
      pricing: &apos;$4,000 - $30,000/month&apos;,
      delivery: &apos;6-16 weeks&apos;,
      category: &apos;Data Services&apos;
    },
    {
      title: &apos;DevOps & CI/CD&apos;,
      description: &apos;Automated deployment pipelines and infrastructure as code&apos;,
      icon: Settings,
      features: [
        &apos;CI/CD pipeline setup and optimization&apos;,
        &apos;Infrastructure as Code (IaC) implementation&apos;,
        &apos;Container orchestration with Kubernetes&apos;,
        &apos;Monitoring and logging solutions&apos;,
        &apos;Automated testing and quality gates&apos;,
        &apos;DevSecOps and security integration&apos;
      ],
      pricing: &apos;$3,500 - $20,000/month&apos;,
      delivery: &apos;4-10 weeks&apos;,
      category: &apos;DevOps Services&apos;
    },
    {
      title: &apos;Digital Transformation&apos;,
      description: &apos;End-to-end digital transformation consulting and implementation&apos;,
      icon: Zap,
      features: [
        &apos;Digital strategy and roadmap development&apos;,
        &apos;Process automation and optimization&apos;,
        &apos;Legacy system modernization&apos;,
        &apos;Change management and training&apos;,
        &apos;Technology stack evaluation&apos;,
        &apos;ROI measurement and optimization&apos;
      ],
      pricing: &apos;$10,000 - $100,000/month&apos;,
      delivery: &apos;12-24 weeks&apos;,
      category: &apos;Consulting Services&apos;
    },
    {
      title: &apos;Managed IT Services&apos;,
      description: &apos;Comprehensive IT management and monitoring services&apos;,
      icon: Monitor,
      features: [
        &apos;Proactive monitoring and maintenance&apos;,
        &apos;Patch management and updates&apos;,
        &apos;Performance optimization&apos;,
        &apos;Capacity planning and scaling&apos;,
        &apos;Vendor management and procurement&apos;,
        &apos;IT strategy and planning&apos;
      ],
      pricing: &apos;$2,500 - $15,000/month&apos;,
      delivery: &apos;2-4 weeks&apos;,
      category: &apos;Managed Services&apos;
    },
    {
      title: &apos;Blockchain & Web3 Solutions&apos;,
      description: &apos;Blockchain development, smart contracts, and decentralized applications&apos;,
      icon: Network,
      features: [
        &apos;Smart contract development and auditing&apos;,
        &apos;DeFi and NFT platform development&apos;,
        &apos;Blockchain integration and consulting&apos;,
        &apos;Cryptocurrency wallet development&apos;,
        &apos;Tokenomics and governance design&apos;,
        &apos;Cross-chain interoperability solutions&apos;
      ],
      pricing: &apos;$8,000 - $50,000/month&apos;,
      delivery: &apos;8-20 weeks&apos;,
      category: &apos;Blockchain Services&apos;
    },
    {
      title: &apos;IoT & Edge Computing&apos;,
      description: &apos;Internet of Things solutions and edge computing infrastructure&apos;,
      icon: Cpu,
      features: [
        &apos;IoT device development and integration&apos;,
        &apos;Edge computing platform setup&apos;,
        &apos;Real-time data processing and analytics&apos;,
        &apos;IoT security and device management&apos;,
        &apos;Sensor network design and deployment&apos;,
        &apos;Edge AI and machine learning integration&apos;
      ],
      pricing: &apos;$5,000 - $30,000/month&apos;,
      delivery: &apos;6-16 weeks&apos;,
      category: &apos;IoT Services&apos;
    },
    {
      title: &apos;Quantum Computing Consulting&apos;,
      description: &apos;Quantum computing strategy, algorithm development, and implementation&apos;,
      icon: Cpu,
      features: [
        &apos;Quantum algorithm development&apos;,
        &apos;Quantum computing strategy consulting&apos;,
        &apos;Hybrid classical-quantum solutions&apos;,
        &apos;Quantum security and cryptography&apos;,
        &apos;Quantum machine learning applications&apos;,
        &apos;Quantum hardware evaluation and selection&apos;
      ],
      pricing: &apos;$15,000 - $100,000/month&apos;,
      delivery: &apos;12-24 weeks&apos;,
      category: &apos;Quantum Services&apos;
    },
    {
      title: &apos;5G & Network Modernization&apos;,
      description: &apos;5G network implementation and legacy network modernization&apos;,
      icon: Wifi,
      features: [
        &apos;5G network planning and deployment&apos;,
        &apos;Network slicing and optimization&apos;,
        &apos;Legacy network migration&apos;,
        &apos;Private 5G network setup&apos;,
        &apos;Network performance monitoring&apos;,
        &apos;Edge computing integration&apos;
      ],
      pricing: &apos;$10,000 - $75,000/month&apos;,
      delivery: &apos;8-20 weeks&apos;,
      category: &apos;Network Services&apos;
    },
    {
      title: &apos;AR/VR Development & Implementation&apos;,
      description: &apos;Augmented and virtual reality solutions for business applications&apos;,
      icon: Monitor,
      features: [
        &apos;AR/VR application development&apos;,
        &apos;3D modeling and animation&apos;,
        &apos;Immersive training and simulation&apos;,
        &apos;Virtual showroom and retail solutions&apos;,
        &apos;AR/VR hardware integration&apos;,
        &apos;Performance optimization and testing&apos;
      ],
      pricing: &apos;$6,000 - $40,000/month&apos;,
      delivery: &apos;8-16 weeks&apos;,
      category: &apos;AR/VR Services&apos;
    },
    {
      title: &apos;API Management & Integration&apos;,
      description: &apos;Comprehensive API strategy, development, and management platform&apos;,
      icon: Code,
      features: [
        &apos;API design and development&apos;,
        &apos;API gateway setup and management&apos;,
        &apos;Third-party API integration&apos;,
        &apos;API security and authentication&apos;,
        &apos;API analytics and monitoring&apos;,
        &apos;Microservices architecture design&apos;
      ],
      pricing: &apos;$3,000 - $20,000/month&apos;,
      delivery: &apos;4-12 weeks&apos;,
      category: &apos;API Services&apos;
    },
    {
      title: &apos;Disaster Recovery & Business Continuity&apos;,
      description: &apos;Comprehensive disaster recovery planning and implementation&apos;,
      icon: Shield,
      features: [
        &apos;Disaster recovery strategy development&apos;,
        &apos;Backup and replication solutions&apos;,
        &apos;Business continuity planning&apos;,
        &apos;Recovery time objective optimization&apos;,
        &apos;Testing and validation services&apos;,
        &apos;Compliance and audit support&apos;
      ],
      pricing: &apos;$5,000 - $35,000/month&apos;,
      delivery: &apos;6-16 weeks&apos;,
      category: &apos;Recovery Services&apos;
    },
    {
      title: &apos;Green IT & Sustainability Solutions&apos;,
      description: &apos;Sustainable IT practices and carbon footprint reduction&apos;,
      icon: Globe,
      features: [
        &apos;Energy-efficient infrastructure design&apos;,
        &apos;Carbon footprint assessment and reduction&apos;,
        &apos;Sustainable cloud migration&apos;,
        &apos;Green data center optimization&apos;,
        &apos;E-waste management and recycling&apos;,
        &apos;Sustainability reporting and compliance&apos;
      ],
      pricing: &apos;$4,000 - $25,000/month&apos;,
      delivery: &apos;6-14 weeks&apos;,
      category: &apos;Sustainability Services&apos;
    },
    {
      title: &apos;FinTech & Payment Solutions&apos;,
      description: &apos;Financial technology solutions and payment system integration&apos;,
      icon: Database,
      features: [
        &apos;Payment gateway integration&apos;,
        &apos;Financial API development&apos;,
        &apos;Compliance and regulatory solutions&apos;,
        &apos;Fraud detection and prevention&apos;,
        &apos;Digital banking solutions&apos;,
        &apos;Cryptocurrency integration&apos;
      ],
      pricing: &apos;$8,000 - $60,000/month&apos;,
      delivery: &apos;10-24 weeks&apos;,
      category: &apos;FinTech Services&apos;
    }
  ];

  const technologies = [
    { name: &apos;Cloud Platforms&apos;, icon: Cloud, description: &apos;AWS, Azure, GCP, DigitalOcean&apos; },
    { name: &apos;Containerization&apos;, icon: Server, description: &apos;Docker, Kubernetes, OpenShift&apos; },
    { name: &apos;Security Tools&apos;, icon: Shield, description: &apos;SIEM, WAF, IAM, Encryption&apos; },
    { name: &apos;Monitoring&apos;, icon: BarChart3, description: &apos;Prometheus, Grafana, ELK Stack&apos; },
    { name: &apos;Databases&apos;, icon: Database, description: &apos;PostgreSQL, MongoDB, Redis&apos; },
    { name: &apos;Networking&apos;, icon: Network, description: &apos;Cisco, Fortinet, SD-WAN&apos; }
  ];

  const benefits = [
    {
      title: &apos;Reduced Downtime&apos;,
      description: &apos;Proactive monitoring and maintenance&apos;,
      icon: Clock,
      stat: &apos;99.9%&apos;
    },
    {
      title: &apos;Cost Savings&apos;,
      description: &apos;Optimized infrastructure and processes&apos;,
      icon: Zap,
      stat: &apos;40%&apos;
    },
    {
      title: &apos;Enhanced Security&apos;,
      description: &apos;Enterprise-grade protection&apos;,
      icon: Shield,
      stat: &apos;100%&apos;
    },
    {
      title: &apos;Scalability&apos;,
      description: &apos;Flexible and scalable solutions&apos;,
      icon: TrendingUp,
      stat: &apos;Unlimited&apos;
    }
  ];

  return (
    <PageTransition>
      <Head>
        <title>{title}</title>
        <meta name=&quot;description&quot; content={description} />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;canonical&quot; href=&quot;https://ziontechgroup.com/it-services&quot; />
      </Head>

      {/* Hero Section */}
      <section className=&quot;bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-20 sm:py-32&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-3xl text-center&quot;>
            <div className=&quot;flex items-center justify-center mb-6&quot;>
              <Server className=&quot;h-12 w-12 text-green-600 mr-4&quot; />
              <Award className=&quot;h-6 w-6 text-green-600 mr-2&quot; />
              <span className=&quot;text-base font-semibold leading-7 text-green-600&quot;>IT Services</span>
            </div>
            <h1 className=&quot;text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl&quot;>
              Information Technology Solutions
            </h1>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Comprehensive IT services that keep your business running smoothly. From cloud infrastructure 
              to cybersecurity, we provide end-to-end technology solutions.
            </p>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600&quot;
              >
                Get Started
                <ArrowRight className=&quot;ml-2 h-4 w-4 inline&quot; />
              </Link>
              <Link
                href=&quot;/pricing-guide&quot;
                className=&quot;text-sm font-semibold leading-6 text-gray-900 hover:text-green-600&quot;
              >
                View Pricing <span aria-hidden=&quot;true&quot;>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className=&quot;py-24 sm:py-32 bg-white&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Why Choose Our IT Services?
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Proven expertise and measurable results for your technology infrastructure
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4&quot;>
            {benefits.map((benefit, index) => (
              <div key={index} className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mx-auto mb-4&quot;>
                  <benefit.icon className=&quot;h-8 w-8 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-2xl font-bold text-gray-900 mb-2&quot;>{benefit.stat}</h3>
                <h4 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>{benefit.title}</h4>
                <p className=&quot;text-gray-600&quot;>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className=&quot;py-24 sm:py-32 bg-gray-50&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Technologies We Master
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Cutting-edge technologies powering modern IT infrastructure
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3&quot;>
            {technologies.map((tech, index) => (
              <div key={index} className=&quot;bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow&quot;>
                <div className=&quot;flex items-center mb-4&quot;>
                  <div className=&quot;flex h-12 w-12 items-center justify-center rounded-lg bg-green-100&quot;>
                    <tech.icon className=&quot;h-6 w-6 text-green-600&quot; />
                  </div>
                  <h3 className=&quot;text-lg font-semibold text-gray-900 ml-4&quot;>{tech.name}</h3>
                </div>
                <p className=&quot;text-gray-600&quot;>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section className=&quot;py-24 sm:py-32 bg-white&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center mb-16&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Our IT Service Portfolio
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Comprehensive IT solutions tailored to your business needs. All services include implementation, 
              training, and ongoing support. Contact us at{&apos; &apos;}
              <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-green-600 hover:text-green-500&quot;>
                kleber@ziontechgroup.com
              </Link>{&apos; &apos;}
              or call{&apos; &apos;}
              <a href=&quot;tel:+13024640950&quot; className=&quot;text-green-600 hover:text-green-500&quot;>
                +1 302 464 0950
              </Link>{&apos; &apos;}
              for custom pricing.
            </p>
          </div>
          <div className=&quot;grid grid-cols-1 gap-8 lg:grid-cols-2&quot;>
            {itServices.map((service, index) => (
              <div key={index} className=&quot;group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300&quot;>
                <div className=&quot;flex items-center gap-x-3 mb-6&quot;>
                  <div className=&quot;flex h-12 w-12 items-center justify-center rounded-lg bg-green-600 group-hover:bg-green-700 transition-colors&quot;>
                    <service.icon className=&quot;h-7 w-7 text-white&quot; />
                  </div>
                  <div>
                    <h3 className=&quot;text-xl font-semibold text-gray-900&quot;>{service.title}</h3>
                    <p className=&quot;text-sm text-green-600 font-medium&quot;>{service.category}</p>
                  </div>
                </div>
                <p className=&quot;text-gray-600 mb-6&quot;>{service.description}</p>
                <ul className=&quot;space-y-3 mb-6&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center gap-x-3&quot;>
                      <CheckCircle className=&quot;h-4 w-4 text-green-600 flex-shrink-0&quot; />
                      <span className=&quot;text-sm text-gray-700&quot;>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className=&quot;flex items-center justify-between&quot;>
                  <div className=&quot;flex items-center space-x-4 text-sm text-gray-500&quot;>
                    <div className=&quot;flex items-center space-x-1&quot;>
                      <Clock className=&quot;h-4 w-4&quot; />
                      <span>{service.delivery}</span>
                    </div>
                    <div className=&quot;font-semibold text-green-600&quot;>{service.pricing}</div>
                  </div>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;inline-flex items-center text-sm font-semibold text-green-600 hover:text-green-500 transition-colors group&quot;
                  >
                    Get Started
                    <ArrowRight className=&quot;ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform&quot; />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className=&quot;bg-gray-50 py-16 sm:py-24&quot;>
        <div className=&quot;mx-auto max-w-7xl px-6 lg:px-8&quot;>
          <div className=&quot;mx-auto max-w-2xl text-center&quot;>
            <h2 className=&quot;text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl&quot;>
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className=&quot;mt-6 text-lg leading-8 text-gray-600&quot;>
              Let&apos;s discuss how our IT services can optimize your technology infrastructure. 
              Get a free consultation and custom proposal.
            </p>
            <div className=&quot;mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3&quot;>
              <div className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4&quot;>
                  <Phone className=&quot;h-6 w-6 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Call Us</h3>
                <a href=&quot;tel:+13024640950&quot; className=&quot;text-green-600 hover:text-green-500&quot;>
                  +1 302 464 0950
                </Link>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4&quot;>
                  <Mail className=&quot;h-6 w-6 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Email Us</h3>
                <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-green-600 hover:text-green-500&quot;>
                  kleber@ziontechgroup.com
                </Link>
              </div>
              <div className=&quot;text-center&quot;>
                <div className=&quot;flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mx-auto mb-4&quot;>
                  <MapPin className=&quot;h-6 w-6 text-green-600&quot; />
                </div>
                <h3 className=&quot;text-lg font-semibold text-gray-900 mb-2&quot;>Visit Us</h3>
                <p className=&quot;text-gray-600&quot;>364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            <div className=&quot;mt-10 flex items-center justify-center gap-x-6&quot;>
              <Link
                href=&quot;/contact&quot;
                className=&quot;rounded-md bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600&quot;
              >
                Schedule Consultation
              </Link>
              <a
                href=&quot;tel:+13024640950&quot;
                className=&quot;text-sm font-semibold leading-6 text-gray-900 hover:text-green-600&quot;
              >
                Call Now <span aria-hidden=&quot;true&quot;>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}