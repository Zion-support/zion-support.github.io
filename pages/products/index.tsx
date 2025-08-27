import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ProductsIndex: NextPage = () => {
  const products = [
    {
      category: "AI-Powered SaaS Solutions",
      products: [
        {
          name: "ZionAI Content Studio",
          description: "AI-powered content creation platform that generates high-quality articles, social media posts, and marketing copy in seconds.",
          features: [
            "AI content generation with 40+ templates",
            "SEO optimization and keyword research",
            "Multi-language support (25+ languages)",
            "Brand voice customization",
            "Content calendar and scheduling",
            "Performance analytics and A/B testing"
          ],
          pricing: "$99/month",
          pricingDetails: "Free 14-day trial, Enterprise plans available",
          targetAudience: "Marketing teams, content creators, agencies",
          link: "/products/zionai-content-studio"
        },
        {
          name: "SmartLead Pro",
          description: "Intelligent lead generation and qualification platform that uses AI to identify, score, and nurture high-quality prospects.",
          features: [
            "AI-powered lead scoring and qualification",
            "Automated outreach sequences",
            "CRM integration (Salesforce, HubSpot)",
            "Real-time lead tracking and analytics",
            "Multi-channel lead capture",
            "Predictive lead behavior analysis"
          ],
          pricing: "$149/month",
          pricingDetails: "Starter: $49/month, Enterprise: Custom pricing",
          targetAudience: "Sales teams, B2B companies, agencies",
          link: "/products/smartlead-pro"
        },
        {
          name: "DataViz AI",
          description: "Automated data visualization and business intelligence platform that transforms raw data into actionable insights.",
          features: [
            "AI-powered chart and graph generation",
            "Natural language query interface",
            "Real-time data integration",
            "Custom dashboard creation",
            "Automated reporting and alerts",
            "Mobile-responsive visualizations"
          ],
          pricing: "$199/month",
          pricingDetails: "Professional: $99/month, Enterprise: Custom",
          targetAudience: "Data analysts, business intelligence teams",
          link: "/products/dataviz-ai"
        }
      ]
    },
    {
      category: "Developer Tools & Platforms",
      products: [
        {
          name: "CodeGenius AI",
          description: "AI-powered code generation and review platform that helps developers write better code faster with intelligent suggestions.",
          features: [
            "AI code completion and generation",
            "Automated code review and optimization",
            "Multi-language support (Python, JavaScript, Java, C++)",
            "Security vulnerability detection",
            "Code documentation generation",
            "Git integration and version control"
          ],
          pricing: "$79/month",
          pricingDetails: "Developer: $39/month, Team: $199/month",
          targetAudience: "Software developers, engineering teams",
          link: "/products/codegenius-ai"
        },
        {
          name: "DevOps Flow",
          description: "Streamlined DevOps automation platform that simplifies CI/CD pipelines, infrastructure management, and deployment workflows.",
          features: [
            "Visual pipeline builder",
            "Multi-cloud deployment support",
            "Automated testing and quality gates",
            "Infrastructure as Code templates",
            "Real-time monitoring and alerting",
            "Security and compliance automation"
          ],
          pricing: "$299/month",
          pricingDetails: "Starter: $99/month, Enterprise: Custom",
          targetAudience: "DevOps engineers, IT operations teams",
          link: "/products/devops-flow"
        },
        {
          name: "API Gateway Pro",
          description: "Enterprise-grade API management platform with advanced security, monitoring, and developer portal capabilities.",
          features: [
            "API gateway and load balancing",
            "Rate limiting and throttling",
            "OAuth 2.0 and JWT authentication",
            "API analytics and usage tracking",
            "Developer portal and documentation",
            "GraphQL and REST API support"
          ],
          pricing: "$399/month",
          pricingDetails: "Professional: $199/month, Enterprise: Custom",
          targetAudience: "API developers, enterprise IT teams",
          link: "/products/api-gateway-pro"
        }
      ]
    },
    {
      category: "Business & Productivity Tools",
      products: [
        {
          name: "TaskMaster AI",
          description: "Intelligent project management platform that uses AI to optimize task allocation, timelines, and resource management.",
          features: [
            "AI-powered task prioritization",
            "Smart resource allocation",
            "Automated project scheduling",
            "Real-time collaboration tools",
            "Progress tracking and reporting",
            "Integration with popular tools (Slack, Teams)"
          ],
          pricing: "$89/month",
          pricingDetails: "Team: $29/month per user, Enterprise: Custom",
          targetAudience: "Project managers, teams, small businesses",
          link: "/products/taskmaster-ai"
        },
        {
          name: "InvoiceFlow",
          description: "Automated invoicing and payment processing platform with AI-powered expense categorization and financial insights.",
          features: [
            "Automated invoice generation",
            "Expense categorization with AI",
            "Payment processing integration",
            "Financial reporting and analytics",
            "Multi-currency support",
            "Tax calculation and compliance"
          ],
          pricing: "$49/month",
          pricingDetails: "Starter: $19/month, Business: $99/month",
          targetAudience: "Small businesses, freelancers, accountants",
          link: "/products/invoiceflow"
        },
        {
          name: "CustomerSuccess AI",
          description: "AI-driven customer success platform that predicts churn, automates onboarding, and improves customer satisfaction.",
          features: [
            "Churn prediction and prevention",
            "Automated onboarding workflows",
            "Customer health scoring",
            "Personalized engagement campaigns",
            "Success metrics tracking",
            "Integration with CRM systems"
          ],
          pricing: "$199/month",
          pricingDetails: "Growth: $99/month, Enterprise: Custom",
          targetAudience: "Customer success teams, SaaS companies",
          link: "/products/customersuccess-ai"
        }
      ]
    },
    {
      category: "Security & Compliance Solutions",
      products: [
        {
          name: "SecureShield Pro",
          description: "Comprehensive cybersecurity platform with threat detection, vulnerability assessment, and compliance monitoring.",
          features: [
            "Real-time threat detection",
            "Automated vulnerability scanning",
            "Compliance monitoring (GDPR, HIPAA, SOC 2)",
            "Incident response automation",
            "Security awareness training",
            "24/7 security operations center"
          ],
          pricing: "$399/month",
          pricingDetails: "Professional: $199/month, Enterprise: Custom",
          targetAudience: "IT security teams, compliance officers",
          link: "/products/secureshield-pro"
        },
        {
          name: "PrivacyGuard",
          description: "Data privacy and compliance automation platform that helps organizations meet regulatory requirements and protect user data.",
          features: [
            "Data discovery and classification",
            "Privacy impact assessments",
            "Consent management automation",
            "Data subject rights fulfillment",
            "Compliance reporting and auditing",
            "Multi-regulation support"
          ],
          pricing: "$299/month",
          pricingDetails: "Compliance: $149/month, Enterprise: Custom",
          targetAudience: "Legal teams, compliance officers, DPOs",
          link: "/products/privacyguard"
        },
        {
          name: "IdentitySecure",
          description: "Zero-trust identity and access management platform with advanced authentication and authorization capabilities.",
          features: [
            "Multi-factor authentication (MFA)",
            "Single sign-on (SSO) integration",
            "Role-based access control (RBAC)",
            "Privileged access management",
            "Identity governance and administration",
            "Compliance and audit reporting"
          ],
          pricing: "$249/month",
          pricingDetails: "Professional: $129/month, Enterprise: Custom",
          targetAudience: "IT administrators, security teams",
          link: "/products/identitysecure"
        }
      ]
    },
    {
      category: "Emerging Technology Solutions",
      products: [
        {
          name: "BlockchainForge",
          description: "Enterprise blockchain development platform for building decentralized applications, smart contracts, and DeFi solutions.",
          features: [
            "Smart contract development tools",
            "Multi-blockchain support",
            "DeFi protocol templates",
            "NFT marketplace builder",
            "Blockchain analytics and monitoring",
            "Regulatory compliance tools"
          ],
          pricing: "$599/month",
          pricingDetails: "Developer: $299/month, Enterprise: Custom",
          targetAudience: "Blockchain developers, fintech companies",
          link: "/products/blockchainforge"
        },
        {
          name: "IoT Connect Hub",
          description: "Internet of Things platform for device management, data collection, and real-time monitoring of connected devices.",
          features: [
            "Device onboarding and management",
            "Real-time data collection",
            "Edge computing capabilities",
            "Predictive maintenance alerts",
            "Custom dashboard creation",
            "API integration and webhooks"
          ],
          pricing: "$399/month",
          pricingDetails: "Starter: $199/month, Enterprise: Custom",
          targetAudience: "IoT developers, manufacturing companies",
          link: "/products/iot-connect-hub"
        },
        {
          name: "Metaverse Studio",
          description: "3D world building and virtual reality platform for creating immersive experiences, virtual events, and digital twins.",
          features: [
            "3D world builder and editor",
            "VR/AR content creation tools",
            "Multi-user collaboration",
            "Asset library and marketplace",
            "Analytics and user tracking",
            "Integration with popular VR headsets"
          ],
          pricing: "$499/month",
          pricingDetails: "Creator: $249/month, Enterprise: Custom",
          targetAudience: "VR developers, event planners, educators",
          link: "/products/metaverse-studio"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
      <Head>
        <title>Our Products - Zion Tech Group | Innovative SaaS Solutions</title>
        <meta name="description" content="Discover Zion Tech Group's cutting-edge SaaS products and solutions. From AI-powered tools to blockchain platforms, we offer innovative technology solutions for modern businesses." />
        <meta name="keywords" content="SaaS products, AI tools, developer tools, business software, cybersecurity, blockchain, IoT, Zion Tech Group" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center text-white mb-16">
          <h1 className="text-5xl font-bold mb-6">
            Innovative SaaS Products & Solutions
          </h1>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            Zion Tech Group delivers cutting-edge SaaS products that transform how businesses operate, 
            collaborate, and grow. Our AI-powered solutions automate complex tasks and provide 
            actionable insights for better decision-making.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold mb-3">Ready to Transform Your Business?</h3>
            <p className="mb-4">Start your free trial today or contact us for a custom demo</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                📞 Call +1 (302) 464-0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-lg font-semibold transition-colors">
                ✉️ Request Demo
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white/5 backdrop-blur-sm rounded-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                {category.category}
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {category.products.map((product, productIndex) => (
                  <div key={productIndex} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-all duration-300">
                    <h3 className="text-2xl font-semibold text-white mb-3">
                      {product.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {product.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className="text-white font-semibold mb-2">Key Features:</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="text-blue-400 mr-2">✓</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-4">
                      <div className="text-green-400 font-bold text-xl mb-1">{product.pricing}</div>
                      <div className="text-gray-400 text-sm">{product.pricingDetails}</div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="text-blue-400 font-semibold">Perfect for: {product.targetAudience}</span>
                    </div>
                    
                    <Link href={product.link} className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 rounded-lg font-semibold transition-colors">
                      Learn More & Start Trial
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center text-white">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Why Choose Zion Tech Group Products?</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">🚀 Cutting-Edge Technology</h3>
                <p className="text-gray-300">Built with the latest AI, machine learning, and emerging technologies</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-green-400">💡 User-Centric Design</h3>
                <p className="text-gray-300">Intuitive interfaces designed for maximum productivity and user adoption</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-purple-400">🔒 Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with SOC 2 compliance and enterprise-grade reliability</p>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6">Contact us today for a personalized demo and free trial</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  📞 Call +1 (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                  ✉️ Schedule Demo
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

export default ProductsIndex;