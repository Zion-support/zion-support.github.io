import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge artificial intelligence solutions to transform your business",
      services: [
        {
          name: "Custom AI Model Development",
          description: "Tailored machine learning models for your specific business needs",
          features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "Recommendation Systems"],
          pricing: "$5,000 - $25,000",
          duration: "4-12 weeks",
          link: "/services/ai-model-development"
        },
        {
          name: "AI-Powered Chatbot Development",
          description: "Intelligent conversational AI for customer service and support",
          features: ["24/7 Customer Support", "Multi-language Support", "Integration with CRM", "Analytics Dashboard"],
          pricing: "$2,500 - $8,000",
          duration: "2-6 weeks",
          link: "/services/ai-chatbot-development"
        },
        {
          name: "Data Analytics & Business Intelligence",
          description: "Transform raw data into actionable business insights",
          features: ["Real-time Dashboards", "Predictive Modeling", "Data Visualization", "Automated Reporting"],
          pricing: "$3,000 - $15,000",
          duration: "3-8 weeks",
          link: "/services/business-intelligence"
        }
      ]
    },
    {
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and automated deployment solutions",
      services: [
        {
          name: "Cloud Migration Services",
          description: "Seamless migration to AWS, Azure, or Google Cloud Platform",
          features: ["Infrastructure Assessment", "Migration Planning", "Data Migration", "Performance Optimization"],
          pricing: "$10,000 - $50,000",
          duration: "6-16 weeks",
          link: "/services/cloud-migration"
        },
        {
          name: "DevOps Automation",
          description: "Streamline development and deployment with CI/CD pipelines",
          features: ["Automated Testing", "Continuous Integration", "Infrastructure as Code", "Monitoring & Alerting"],
          pricing: "$5,000 - $20,000",
          duration: "4-10 weeks",
          link: "/services/devops-automation"
        },
        {
          name: "Microservices Architecture",
          description: "Modern, scalable application architecture design and implementation",
          features: ["Service Discovery", "Load Balancing", "API Gateway", "Container Orchestration"],
          pricing: "$15,000 - $40,000",
          duration: "8-20 weeks",
          link: "/services/microservices"
        }
      ]
    },
    {
      title: "Web & Mobile Development",
      description: "Modern web applications and mobile apps for all platforms",
      services: [
        {
          name: "Full-Stack Web Development",
          description: "Complete web applications with modern frameworks and technologies",
          features: ["React/Next.js Frontend", "Node.js/Python Backend", "Database Design", "API Development"],
          pricing: "$8,000 - $35,000",
          duration: "6-16 weeks",
          link: "/services/web-development"
        },
        {
          name: "Mobile App Development",
          description: "Native and cross-platform mobile applications",
          features: ["iOS & Android Development", "React Native/Flutter", "App Store Optimization", "Push Notifications"],
          pricing: "$10,000 - $40,000",
          duration: "8-20 weeks",
          link: "/services/mobile-development"
        },
        {
          name: "E-commerce Solutions",
          description: "Complete online store development with payment integration",
          features: ["Shopping Cart", "Payment Gateway Integration", "Inventory Management", "Order Processing"],
          pricing: "$5,000 - $25,000",
          duration: "4-12 weeks",
          link: "/services/ecommerce"
        }
      ]
    },
    {
      title: "Cybersecurity & Compliance",
      description: "Protect your business with comprehensive security solutions",
      services: [
        {
          name: "Security Audit & Penetration Testing",
          description: "Comprehensive security assessment and vulnerability testing",
          features: ["Vulnerability Assessment", "Penetration Testing", "Security Report", "Remediation Guidance"],
          pricing: "$3,000 - $15,000",
          duration: "2-6 weeks",
          link: "/services/security-audit"
        },
        {
          name: "GDPR & Compliance Solutions",
          description: "Ensure your business meets regulatory requirements",
          features: ["Compliance Assessment", "Data Protection", "Privacy Policy", "Training Programs"],
          pricing: "$2,500 - $10,000",
          duration: "3-8 weeks",
          link: "/services/compliance"
        },
        {
          name: "Zero Trust Security Architecture",
          description: "Modern security framework for enterprise protection",
          features: ["Identity Verification", "Network Segmentation", "Continuous Monitoring", "Threat Detection"],
          pricing: "$8,000 - $30,000",
          duration: "6-16 weeks",
          link: "/services/zero-trust"
        }
      ]
    },
    {
      title: "IoT & Edge Computing",
      description: "Connected devices and edge computing solutions",
      services: [
        {
          name: "IoT Platform Development",
          description: "Complete IoT ecosystem for device management and data collection",
          features: ["Device Management", "Real-time Monitoring", "Data Analytics", "Cloud Integration"],
          pricing: "$15,000 - $50,000",
          duration: "10-24 weeks",
          link: "/services/iot-platform"
        },
        {
          name: "Edge Computing Solutions",
          description: "Process data closer to the source for improved performance",
          features: ["Edge Analytics", "Local Processing", "Cloud Sync", "Security"],
          pricing: "$10,000 - $35,000",
          duration: "8-18 weeks",
          link: "/services/edge-computing"
        },
        {
          name: "Smart City Solutions",
          description: "IoT solutions for urban infrastructure and management",
          features: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Energy Management"],
          pricing: "$25,000 - $100,000",
          duration: "16-32 weeks",
          link: "/services/smart-city"
        }
      ]
    },
    {
      title: "Blockchain & Web3 Solutions",
      description: "Decentralized applications and blockchain technology",
      services: [
        {
          name: "Smart Contract Development",
          description: "Secure, automated contracts on blockchain platforms",
          features: ["Ethereum/Solana Development", "Contract Auditing", "DeFi Integration", "Token Development"],
          pricing: "$5,000 - $25,000",
          duration: "4-12 weeks",
          link: "/services/smart-contracts"
        },
        {
          name: "NFT Marketplace Development",
          description: "Complete NFT trading platform with minting capabilities",
          features: ["NFT Minting", "Marketplace", "Wallet Integration", "Royalty System"],
          pricing: "$8,000 - $30,000",
          duration: "6-16 weeks",
          link: "/services/nft-marketplace"
        },
        {
          name: "DeFi Protocol Development",
          description: "Decentralized finance protocols and applications",
          features: ["Lending Protocols", "DEX Development", "Yield Farming", "Governance Tokens"],
          pricing: "$15,000 - $50,000",
          duration: "12-24 weeks",
          link: "/services/defi-protocols"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Our Services - Zion Tech Solutions | AI, Cloud, Web Development & More</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud solutions, web development, cybersecurity, IoT, and blockchain solutions. Transform your business with Zion Tech Solutions." />
        <meta name="keywords" content="AI development, cloud migration, web development, cybersecurity, IoT solutions, blockchain, machine learning, DevOps, mobile apps" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Technology Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            From AI-powered applications to blockchain solutions, we provide cutting-edge technology services 
            to help your business thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>

        {/* Services Categories */}
        <div className="space-y-16">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-blue-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm text-gray-500">Starting Price:</span>
                        <span className="font-semibold text-green-600">{service.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Duration:</span>
                        <span className="font-semibold text-blue-600">{service.duration}</span>
                      </div>
                      
                      <Link href={service.link} className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors block">
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mt-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals. 
            Get in touch with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Send Email
            </a>
          </div>
          <div className="mt-6 text-sm">
            <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>Visit us at: <a href="https://ziontechgroup.com" className="underline hover:no-underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;