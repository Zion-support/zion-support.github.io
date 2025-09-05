import React from 'react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  const solutions = [
    {
      category: "Enterprise Solutions",
      description: "Comprehensive technology solutions for large organizations",
      solutions: [
        {
          name: "Digital Transformation",
          description: "Complete digital transformation strategy and implementation",
          price: "$5,999/project",
          features: ["Process automation", "Legacy modernization", "Change management", "ROI tracking"]
        },
        {
          name: "Cloud Migration",
          description: "Secure and efficient cloud infrastructure migration",
          price: "$2,999/project",
          features: ["Zero-downtime migration", "Security hardening", "Performance optimization", "24/7 support"]
        },
        {
          name: "AI Business Intelligence",
          description: "Advanced analytics and business intelligence platform",
          price: "$499/month",
          features: ["Real-time dashboards", "Predictive analytics", "Custom reports", "Data visualization"]
        },
        {
          name: "Cybersecurity Solutions",
          description: "Comprehensive cybersecurity platform with advanced threat detection",
          price: "$799/month",
          features: ["24/7 threat monitoring", "Vulnerability scanning", "Incident response", "Compliance management"]
        }
      ]
    },
    {
      category: "SMB Solutions",
      description: "Tailored solutions for small and medium-sized businesses",
      solutions: [
        {
          name: "AI Content Creation",
          description: "Automated content generation for marketing and communications",
          price: "$299/month",
          features: ["Blog post generation", "Social media content", "Email campaigns", "SEO optimization"]
        },
        {
          name: "Customer Support Platform",
          description: "AI-powered customer support and helpdesk solution",
          price: "$299/month",
          features: ["AI chatbots", "Ticket management", "Knowledge base", "Multi-channel support"]
        },
        {
          name: "Project Management AI",
          description: "Intelligent project management and team collaboration",
          price: "$199/month",
          features: ["Smart task assignment", "Progress tracking", "Resource optimization", "Team collaboration"]
        },
        {
          name: "IT Infrastructure Management",
          description: "Complete IT infrastructure management and optimization",
          price: "$1,299/month",
          features: ["Network setup", "Server maintenance", "Backup solutions", "Performance monitoring"]
        }
      ]
    },
    {
      category: "Micro SAAS Solutions",
      description: "Affordable, AI-powered micro SAAS tools for immediate productivity gains",
      solutions: [
        {
          name: "AI Invoice Generator",
          description: "Intelligent invoice creation and payment tracking platform",
          price: "$29/month",
          features: ["AI-powered generation", "Payment tracking", "Client management", "Multi-currency support"]
        },
        {
          name: "Smart Meeting Scheduler",
          description: "AI-powered meeting scheduling that eliminates back-and-forth emails",
          price: "$19/month",
          features: ["Time optimization", "Calendar integration", "Automatic reminders", "Time zone handling"]
        },
        {
          name: "Social Media Scheduler",
          description: "AI-powered social media management with content suggestions",
          price: "$39/month",
          features: ["AI content suggestions", "Multi-platform posting", "Hashtag optimization", "Engagement analytics"]
        },
        {
          name: "Smart Password Manager",
          description: "Enterprise-grade password management with AI security recommendations",
          price: "$15/month",
          features: ["AI security tips", "Team sharing", "Breach monitoring", "Multi-factor auth"]
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      description: "Specialized solutions for different industries",
      solutions: [
        {
          name: "E-commerce Solutions",
          description: "Complete e-commerce technology stack and management",
          price: "$1,899/month",
          features: ["Custom platform", "Payment integration", "Inventory management", "Analytics"]
        },
        {
          name: "Healthcare IT",
          description: "HIPAA-compliant healthcare technology solutions",
          price: "$799/month",
          features: ["Patient management", "Compliance monitoring", "Data security", "Integration support"]
        },
        {
          name: "Financial Services",
          description: "Secure financial technology and analytics solutions",
          price: "$699/month",
          features: ["Financial analytics", "Risk assessment", "Compliance reporting", "Fraud detection"]
        },
        {
          name: "Legal Document Analysis",
          description: "AI-powered legal document analysis and contract review",
          price: "$599/month",
          features: ["Contract analysis", "Compliance monitoring", "Risk assessment", "Legal research"]
        }
      ]
    },
    {
      category: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence solutions for modern businesses",
      solutions: [
        {
          name: "AI Customer Experience Platform",
          description: "Comprehensive AI platform for personalized customer experiences across all touchpoints",
          price: "$1,299/month",
          features: ["Personalized recommendations", "Predictive analytics", "Omnichannel support", "Real-time insights"]
        },
        {
          name: "AI Process Automation Suite",
          description: "End-to-end business process automation with AI-powered decision making",
          price: "$899/month",
          features: ["Workflow automation", "Document processing", "Decision automation", "Performance monitoring"]
        },
        {
          name: "AI Data Intelligence Hub",
          description: "Advanced data analytics and intelligence platform with AI-powered insights",
          price: "$1,499/month",
          features: ["Data integration", "Predictive modeling", "Real-time analytics", "Automated reporting"]
        },
        {
          name: "AI Security & Compliance",
          description: "AI-powered security monitoring and compliance management system",
          price: "$1,199/month",
          features: ["Threat detection", "Compliance monitoring", "Risk assessment", "Automated responses"]
        }
      ]
    },
    {
      category: "Cloud & Infrastructure Solutions",
      description: "Scalable cloud and infrastructure solutions for any business size",
      solutions: [
        {
          name: "Multi-Cloud Management Platform",
          description: "Unified management platform for AWS, Azure, and Google Cloud environments",
          price: "$1,799/month",
          features: ["Multi-cloud orchestration", "Cost optimization", "Security management", "Performance monitoring"]
        },
        {
          name: "Hybrid Cloud Infrastructure",
          description: "Seamless integration between on-premises and cloud environments",
          price: "$2,299/month",
          features: ["Hybrid connectivity", "Data synchronization", "Workload portability", "Unified management"]
        },
        {
          name: "Edge Computing Solutions",
          description: "Edge computing infrastructure for low-latency applications and IoT",
          price: "$1,599/month",
          features: ["Edge deployment", "IoT integration", "Real-time processing", "Distributed management"]
        },
        {
          name: "Container & Microservices Platform",
          description: "Complete container orchestration and microservices management platform",
          price: "$1,399/month",
          features: ["Kubernetes management", "Service mesh", "CI/CD pipelines", "Monitoring & logging"]
        }
      ]
    },
    {
      category: "Digital Transformation Solutions",
      description: "Complete digital transformation services for modern businesses",
      solutions: [
        {
          name: "Legacy System Modernization",
          description: "Modernize legacy systems with cloud-native architectures and microservices",
          price: "$4,999/project",
          features: ["System assessment", "Architecture redesign", "Data migration", "Performance optimization"]
        },
        {
          name: "API-First Integration Platform",
          description: "Comprehensive API management and integration platform for digital ecosystems",
          price: "$1,299/month",
          features: ["API gateway", "Integration services", "Developer portal", "Analytics & monitoring"]
        },
        {
          name: "Mobile-First Solutions",
          description: "Cross-platform mobile applications with native performance and cloud backend",
          price: "$2,999/project",
          features: ["Native mobile apps", "Cross-platform development", "Cloud backend", "Push notifications"]
        },
        {
          name: "E-commerce & Digital Commerce",
          description: "Complete e-commerce platform with AI-powered personalization and analytics",
          price: "$1,899/month",
          features: ["Online storefront", "Payment processing", "Inventory management", "Customer analytics"]
        }
      ]
    },
    {
      category: "Security & Compliance Solutions",
      description: "Comprehensive security and compliance solutions for enterprise protection",
      solutions: [
        {
          name: "Zero Trust Security Architecture",
          description: "Complete zero trust security implementation with identity and access management",
          price: "$1,599/month",
          features: ["Identity verification", "Access controls", "Network segmentation", "Continuous monitoring"]
        },
        {
          name: "Data Privacy & GDPR Compliance",
          description: "Comprehensive data privacy management and GDPR compliance platform",
          price: "$1,299/month",
          features: ["Data mapping", "Consent management", "Privacy controls", "Compliance reporting"]
        },
        {
          name: "Advanced Threat Protection",
          description: "AI-powered threat detection and response platform with 24/7 monitoring",
          price: "$1,799/month",
          features: ["Threat hunting", "Incident response", "Forensic analysis", "Threat intelligence"]
        },
        {
          name: "Security Operations Center (SOC)",
          description: "Managed security operations center with expert analysts and advanced tools",
          price: "$2,499/month",
          features: ["24/7 monitoring", "Expert analysts", "Incident response", "Threat hunting"]
        }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      description: "Specialized solutions tailored for specific industries and use cases",
      solutions: [
        {
          name: "Healthcare IT Solutions",
          description: "HIPAA-compliant healthcare technology solutions with patient data management",
          price: "$2,199/month",
          features: ["EHR integration", "Patient portals", "Telemedicine", "Compliance management"]
        },
        {
          name: "Financial Services Platform",
          description: "Secure financial services platform with fraud detection and compliance",
          price: "$2,999/month",
          features: ["Payment processing", "Fraud detection", "Regulatory compliance", "Risk management"]
        },
        {
          name: "Manufacturing IoT Solutions",
          description: "Industrial IoT platform for smart manufacturing and predictive maintenance",
          price: "$1,899/month",
          features: ["Sensor integration", "Predictive maintenance", "Quality control", "Supply chain optimization"]
        },
        {
          name: "Retail & E-commerce Solutions",
          description: "Complete retail technology stack with omnichannel capabilities",
          price: "$1,599/month",
          features: ["Inventory management", "Customer analytics", "Omnichannel retail", "Personalization"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs and industry requirements
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {solutions.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  {category.category}
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {category.description}
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {category.solutions.map((solution, solutionIndex) => (
                  <div key={solutionIndex} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                      {solution.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-green-400">{solution.price}</span>
                    </div>
                    <ul className="text-gray-300 mb-6 space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-cyan-400 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/contact"
                      className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-block"
                    >
                      Learn More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Need a Custom Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us to discuss your specific requirements and get a tailored solution
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-gray-300 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Phone</h3>
              <p>+1 302 464 0950</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Email</h3>
              <p>kleber@ziontechgroup.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Address</h3>
              <p>364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/request-quote"
              className="bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}