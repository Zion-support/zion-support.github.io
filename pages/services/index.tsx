import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesIndex: NextPage = () => {
  const services = [
    {
      category: "AI & Machine Learning",
      services: [
        {
          name: "AI Development & Custom Models",
          description: "Custom AI solutions including machine learning models, natural language processing, computer vision, and predictive analytics tailored to your business needs.",
          features: ["Custom ML model development", "AI integration consulting", "Data preprocessing & training", "Model deployment & scaling"],
          pricing: "$5,000 - $50,000+",
          link: "/services/ai-development"
        },
        {
          name: "AI-Powered Business Intelligence",
          description: "Intelligent data analysis and business insights powered by advanced AI algorithms and machine learning.",
          features: ["Predictive analytics", "Real-time dashboards", "Automated reporting", "Data visualization"],
          pricing: "$3,000 - $25,000",
          link: "/services/business-intelligence"
        },
        {
          name: "AI Content Generation & Marketing",
          description: "Automated content creation, SEO optimization, and marketing campaign management using cutting-edge AI technology.",
          features: ["AI content writing", "SEO optimization", "Social media automation", "Performance analytics"],
          pricing: "$500 - $5,000/month",
          link: "/services/ai-content-generation"
        }
      ]
    },
    {
      category: "Cloud & Infrastructure",
      services: [
        {
          name: "Cloud Migration & Architecture",
          description: "Seamless cloud migration services with scalable architecture design for modern applications and businesses.",
          features: ["Multi-cloud strategy", "Cost optimization", "Security implementation", "Performance monitoring"],
          pricing: "$10,000 - $100,000+",
          link: "/services/cloud-migration"
        },
        {
          name: "DevOps & CI/CD Automation",
          description: "Streamlined development workflows with automated testing, deployment, and infrastructure management.",
          features: ["CI/CD pipeline setup", "Infrastructure as Code", "Monitoring & alerting", "Security automation"],
          pricing: "$5,000 - $40,000",
          link: "/services/devops-automation"
        },
        {
          name: "Microservices Architecture",
          description: "Scalable microservices design and implementation for modern, distributed applications.",
          features: ["Service decomposition", "API design", "Load balancing", "Service mesh implementation"],
          pricing: "$15,000 - $75,000",
          link: "/services/microservices"
        }
      ]
    },
    {
      category: "Web & Mobile Development",
      services: [
        {
          name: "Web Application Development",
          description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
          features: ["Full-stack development", "Progressive Web Apps", "API integration", "Performance optimization"],
          pricing: "$8,000 - $60,000",
          link: "/services/web-development"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
          features: ["Cross-platform development", "Native app development", "App store optimization", "Push notifications"],
          pricing: "$10,000 - $80,000",
          link: "/services/mobile-development"
        },
        {
          name: "UI/UX Design & Prototyping",
          description: "User-centered design solutions with interactive prototypes and usability testing.",
          features: ["User research", "Wireframing & prototyping", "Design systems", "Usability testing"],
          pricing: "$3,000 - $25,000",
          link: "/services/ui-ux-design"
        }
      ]
    },
    {
      category: "Data & Analytics",
      services: [
        {
          name: "Data Pipeline Engineering",
          description: "Robust data infrastructure for collecting, processing, and analyzing large-scale data sets.",
          features: ["ETL pipeline design", "Real-time streaming", "Data warehousing", "Quality assurance"],
          pricing: "$8,000 - $50,000",
          link: "/services/data-pipeline"
        },
        {
          name: "Database Design & Optimization",
          description: "Efficient database architecture design with performance optimization and scalability planning.",
          features: ["Database design", "Performance tuning", "Backup & recovery", "Security implementation"],
          pricing: "$5,000 - $35,000",
          link: "/services/database-design"
        },
        {
          name: "Data Analytics & Visualization",
          description: "Comprehensive data analysis with interactive dashboards and actionable business insights.",
          features: ["Statistical analysis", "Interactive dashboards", "Custom reporting", "Data storytelling"],
          pricing: "$4,000 - $30,000",
          link: "/services/data-analytics"
        }
      ]
    },
    {
      category: "Security & Compliance",
      services: [
        {
          name: "Cybersecurity & Penetration Testing",
          description: "Comprehensive security assessments and vulnerability testing to protect your digital assets.",
          features: ["Penetration testing", "Security audits", "Vulnerability assessment", "Incident response"],
          pricing: "$5,000 - $40,000",
          link: "/services/cybersecurity"
        },
        {
          name: "Network Security & Infrastructure",
          description: "Secure network architecture design with advanced threat detection and prevention systems.",
          features: ["Network design", "Firewall configuration", "Intrusion detection", "VPN setup"],
          pricing: "$8,000 - $50,000",
          link: "/services/network-security"
        },
        {
          name: "Compliance & Risk Management",
          description: "Regulatory compliance solutions for GDPR, HIPAA, SOC 2, and other industry standards.",
          features: ["Compliance audits", "Risk assessment", "Policy development", "Training programs"],
          pricing: "$3,000 - $25,000",
          link: "/services/compliance"
        }
      ]
    },
    {
      category: "Innovation & Emerging Tech",
      services: [
        {
          name: "Blockchain & Web3 Solutions",
          description: "Decentralized applications, smart contracts, and blockchain infrastructure development.",
          features: ["Smart contract development", "DApp development", "Blockchain integration", "DeFi solutions"],
          pricing: "$15,000 - $100,000+",
          link: "/services/blockchain"
        },
        {
          name: "IoT Platform Development",
          description: "Internet of Things solutions with device management, data collection, and analytics.",
          features: ["IoT architecture", "Device management", "Data collection", "Real-time monitoring"],
          pricing: "$20,000 - $150,000+",
          link: "/services/iot-platforms"
        },
        {
          name: "AR/VR & Metaverse Solutions",
          description: "Immersive technology solutions for training, entertainment, and business applications.",
          features: ["3D modeling", "Interactive experiences", "Multi-platform support", "Performance optimization"],
          pricing: "$25,000 - $200,000+",
          link: "/services/ar-vr"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Services - Zion Tech Group | Innovative Technology Solutions</title>
        <meta name="description" content="Explore Zion Tech Group's comprehensive range of innovative technology services including AI development, cloud solutions, cybersecurity, and emerging technologies. Get expert consultation and custom solutions for your business needs." />
        <meta name="keywords" content="AI development, cloud migration, cybersecurity, blockchain, IoT, web development, mobile apps, data analytics, Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Our Comprehensive Technology Services
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Zion Tech Group delivers cutting-edge technology solutions that drive innovation, 
            efficiency, and growth for modern businesses. From AI-powered applications to 
            secure cloud infrastructure, we provide end-to-end technology services.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Ready to Transform Your Business?</h3>
            <p className="mb-4">Get in touch for a free consultation and custom quote</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {services.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {service.name}
                    </h3>
                    <p className="text-gray-300 mb-4 text-sm">
                      {service.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="text-blue-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <span className="text-green-400 font-semibold">Starting at {service.pricing}</span>
                    </div>
                    <Link href={service.link} className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded-lg font-semibold transition-colors">
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">🚀 Innovation First</h3>
                <p className="text-gray-300">Cutting-edge technology solutions that keep you ahead of the competition</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">💼 Business Focused</h3>
                <p className="text-gray-300">Solutions designed to drive real business value and measurable ROI</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">🔒 Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security standards and compliance with industry regulations</p>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">Contact us today for a free consultation and custom solution design</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  📞 Call +1 (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  ✉️ Schedule Consultation
                </a>
              </div>
              <p className="text-sm text-gray-400 mt-4">
                Address: 364 E Main St STE 1008, Middletown DE 19709<br />
                Website: <a href="https://ziontechgroup.com" className="text-blue-400 hover:underline">https://ziontechgroup.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesIndex;