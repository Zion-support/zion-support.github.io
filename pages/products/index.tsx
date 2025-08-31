import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsPage: NextPage = () => {
  const productCategories = [
    {
      title: "AI-Powered SaaS Products",
      description: "Ready-to-use AI solutions for immediate business impact",
      products: [
        {
          name: "ZionAI Analytics Platform",
          description: "Comprehensive business intelligence platform with AI-powered insights",
          features: ["Real-time Data Visualization", "Predictive Analytics", "Custom Dashboards", "Automated Reporting", "Multi-source Integration"],
          pricing: "$299/month",
          setup: "$1,500",
          link: "/products/zion-ai-analytics",
          category: "Analytics"
        },
        {
          name: "SmartCRM Pro",
          description: "AI-enhanced customer relationship management system",
          features: ["Lead Scoring", "Email Automation", "Sales Forecasting", "Customer Segmentation", "Integration APIs"],
          pricing: "$199/month",
          setup: "$800",
          link: "/products/smart-crm",
          category: "CRM"
        },
        {
          name: "ContentAI Generator",
          description: "AI-powered content creation and optimization platform",
          features: ["Blog Post Generation", "SEO Optimization", "Social Media Content", "Email Campaigns", "Brand Voice Customization"],
          pricing: "$149/month",
          setup: "$500",
          link: "/products/content-ai",
          category: "Content"
        }
      ]
    },
    {
      title: "Cloud & Infrastructure Solutions",
      description: "Scalable cloud products for modern businesses",
      products: [
        {
          name: "ZionCloud Manager",
          description: "Multi-cloud management and optimization platform",
          features: ["Cost Optimization", "Resource Monitoring", "Auto-scaling", "Security Compliance", "Backup Management"],
          pricing: "$399/month",
          setup: "$2,000",
          link: "/products/zion-cloud-manager",
          category: "Cloud"
        },
        {
          name: "DevOps Pipeline Pro",
          description: "Complete CI/CD automation platform",
          features: ["Automated Testing", "Deployment Automation", "Code Quality Checks", "Performance Monitoring", "Team Collaboration"],
          pricing: "$249/month",
          setup: "$1,200",
          link: "/products/devops-pipeline",
          category: "DevOps"
        },
        {
          name: "API Gateway Enterprise",
          description: "Secure API management and gateway solution",
          features: ["Rate Limiting", "Authentication", "API Documentation", "Analytics", "Developer Portal"],
          pricing: "$179/month",
          setup: "$900",
          link: "/products/api-gateway",
          category: "API"
        }
      ]
    },
    {
      title: "Security & Compliance Tools",
      description: "Enterprise-grade security solutions",
      products: [
        {
          name: "ZionShield Security Suite",
          description: "Comprehensive cybersecurity platform for businesses",
          features: ["Threat Detection", "Vulnerability Scanning", "Incident Response", "Compliance Reporting", "Security Training"],
          pricing: "$349/month",
          setup: "$1,800",
          link: "/products/zion-shield",
          category: "Security"
        },
        {
          name: "GDPR Compliance Manager",
          description: "Automated GDPR compliance and data protection tool",
          features: ["Data Mapping", "Consent Management", "Privacy Impact Assessment", "Breach Notification", "Audit Trails"],
          pricing: "$199/month",
          setup: "$1,000",
          link: "/products/gdpr-manager",
          category: "Compliance"
        },
        {
          name: "Zero Trust Access",
          description: "Modern zero trust network access solution",
          features: ["Identity Verification", "Device Trust", "Application Access", "Network Segmentation", "Continuous Monitoring"],
          pricing: "$279/month",
          setup: "$1,400",
          link: "/products/zero-trust-access",
          category: "Security"
        }
      ]
    },
    {
      title: "E-commerce & Digital Commerce",
      description: "Complete digital commerce solutions",
      products: [
        {
          name: "ZionStore Platform",
          description: "All-in-one e-commerce platform with AI recommendations",
          features: ["Product Management", "Payment Processing", "Inventory Control", "AI Recommendations", "Multi-channel Sales"],
          pricing: "$399/month",
          setup: "$2,500",
          link: "/products/zion-store",
          category: "E-commerce"
        },
        {
          name: "Marketplace Builder",
          description: "Create and manage multi-vendor marketplaces",
          features: ["Vendor Management", "Commission System", "Escrow Services", "Dispute Resolution", "Analytics Dashboard"],
          pricing: "$599/month",
          setup: "$3,000",
          link: "/products/marketplace-builder",
          category: "Marketplace"
        },
        {
          name: "Subscription Management Pro",
          description: "Complete subscription billing and management system",
          features: ["Recurring Billing", "Usage-based Pricing", "Dunning Management", "Customer Portal", "Revenue Analytics"],
          pricing: "$249/month",
          setup: "$1,500",
          link: "/products/subscription-pro",
          category: "Billing"
        }
      ]
    },
    {
      title: "IoT & Smart Solutions",
      description: "Connected device management and smart city solutions",
      products: [
        {
          name: "ZionIoT Hub",
          description: "Centralized IoT device management platform",
          features: ["Device Provisioning", "Real-time Monitoring", "Data Analytics", "Alert Management", "Firmware Updates"],
          pricing: "$199/month",
          setup: "$1,200",
          link: "/products/zion-iot-hub",
          category: "IoT"
        },
        {
          name: "Smart City Platform",
          description: "Comprehensive smart city infrastructure management",
          features: ["Traffic Management", "Environmental Monitoring", "Public Safety", "Energy Management", "Citizen Portal"],
          pricing: "$1,999/month",
          setup: "$15,000",
          link: "/products/smart-city-platform",
          category: "Smart City"
        },
        {
          name: "Edge Computing Suite",
          description: "Edge computing platform for distributed applications",
          features: ["Edge Analytics", "Local Processing", "Cloud Sync", "Security", "Device Management"],
          pricing: "$299/month",
          setup: "$2,000",
          link: "/products/edge-computing-suite",
          category: "Edge Computing"
        }
      ]
    },
    {
      title: "Blockchain & Web3 Products",
      description: "Decentralized applications and blockchain solutions",
      products: [
        {
          name: "ZionChain Platform",
          description: "Enterprise blockchain platform for business applications",
          features: ["Smart Contract Deployment", "Token Management", "Consensus Mechanisms", "API Integration", "Analytics"],
          pricing: "$499/month",
          setup: "$3,000",
          link: "/products/zion-chain",
          category: "Blockchain"
        },
        {
          name: "NFT Marketplace Engine",
          description: "Complete NFT marketplace solution",
          features: ["NFT Minting", "Marketplace", "Wallet Integration", "Royalty System", "Auction System"],
          pricing: "$399/month",
          setup: "$2,500",
          link: "/products/nft-marketplace-engine",
          category: "NFT"
        },
        {
          name: "DeFi Protocol Suite",
          description: "Complete DeFi protocol development and management",
          features: ["Lending Protocols", "DEX Development", "Yield Farming", "Governance", "Security Auditing"],
          pricing: "$799/month",
          setup: "$5,000",
          link: "/products/defi-protocol-suite",
          category: "DeFi"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      <Head>
        <title>Our Products - Zion Tech Solutions | SaaS, AI Tools & Enterprise Solutions</title>
        <meta name="description" content="Discover our comprehensive suite of SaaS products, AI tools, cloud solutions, and enterprise software. Transform your business with Zion Tech Solutions' innovative products." />
        <meta name="keywords" content="SaaS products, AI tools, cloud solutions, enterprise software, e-commerce platform, security suite, IoT platform, blockchain solutions" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Innovative SaaS Products & Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Ready-to-use SaaS products, AI tools, and enterprise solutions designed to accelerate 
            your business growth and digital transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call Now: +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
            </a>
          </div>
        </div>

        {/* Products Categories */}
        <div className="space-y-16">
          {productCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{category.title}</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                            <span className="text-green-500 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-gray-500">Monthly Price:</span>
                        <span className="font-semibold text-green-600">{product.pricing}</span>
                      </div>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-sm text-gray-500">Setup Fee:</span>
                        <span className="font-semibold text-blue-600">{product.setup}</span>
                      </div>
                      
                      <Link href={product.link} className="w-full bg-green-600 hover:bg-green-700 text-white text-center py-2 px-4 rounded-lg font-semibold transition-colors block">
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Pricing Plans</h2>
            <p className="text-lg text-gray-600">Choose the perfect plan for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starter</h3>
              <div className="text-3xl font-bold text-blue-600 mb-6">$299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Basic Features</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Email Support</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>5 Users</li>
                <li className="flex items-center"><span className="text-blue-500 mr-2">✓</span>Basic Analytics</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border-2 border-purple-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional</h3>
              <div className="text-3xl font-bold text-purple-600 mb-6">$599<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>All Starter Features</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>Priority Support</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>25 Users</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>Advanced Analytics</li>
                <li className="flex items-center"><span className="text-purple-500 mr-2">✓</span>API Access</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-green-50 rounded-lg p-6 border-2 border-green-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Enterprise</h3>
              <div className="text-3xl font-bold text-green-600 mb-6">$1,299<span className="text-lg text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>All Professional Features</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>24/7 Support</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Unlimited Users</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom Integrations</li>
                <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Dedicated Account Manager</li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 mt-16 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a demo or consultation to see how our products can transform your business. 
            Our team is ready to help you choose the perfect solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950" 
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Call +1 302 464 0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Demo
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

export default ProductsPage;