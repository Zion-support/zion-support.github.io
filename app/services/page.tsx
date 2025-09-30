import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Services & Solutions | Zion Tech Group - Transform Your Business',
  description: 'Comprehensive AI services including autonomous systems, workflow automation, data analytics, and enterprise transformation. Get 300% ROI with our proven AI solutions.',
  keywords: 'AI services, AI solutions, enterprise AI, AI automation, AI consulting, AI implementation',
};

export default function ServicesPage() {
  const services = [
    {
      title: "AI Autonomous Systems",
      description: "Self-learning AI systems that make complex decisions and operate independently across your organization.",
      features: [
        "400% average ROI in first year",
        "85% reduction in manual processes",
        "Self-improving algorithms",
        "Cross-domain integration"
      ],
      price: "Starting at $5,000/month",
      popular: true,
      href: "/blog/ai-autonomous-systems-2026"
    },
    {
      title: "AI Data Analytics",
      description: "Transform data into actionable insights with predictive modeling and real-time dashboards.",
      features: [
        "Predictive analytics with 95% accuracy",
        "Real-time dashboards",
        "Automated reporting",
        "Advanced visualization"
      ],
      price: "$199/month",
      popular: false,
      href: "/services/ai-data-analytics"
    },
    {
      title: "AI Workflow Automation",
      description: "Automate business processes with intelligent workflow design and smart triggers.",
      features: [
        "Process automation",
        "Smart triggers",
        "Performance monitoring",
        "90% efficiency improvement"
      ],
      price: "$149/month",
      popular: false,
      href: "/services/ai-workflow-automation"
    },
    {
      title: "AI Virtual Assistant",
      description: "24/7 intelligent customer support with natural language processing.",
      features: [
        "24/7 support",
        "Multi-channel",
        "Personalized responses",
        "95% customer satisfaction"
      ],
      price: "$99/month",
      popular: false,
      href: "/services/ai-virtual-assistant"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure with zero downtime.",
      features: [
        "Zero downtime",
        "Security compliance",
        "Cost optimization",
        "Auto-scaling"
      ],
      price: "$2,999",
      popular: false,
      href: "/services/cloud-migration"
    },
    {
      title: "DevOps Automation",
      description: "Automate CI/CD pipelines and infrastructure management.",
      features: [
        "CI/CD Pipelines",
        "Infrastructure as Code",
        "Auto-scaling",
        "Continuous monitoring"
      ],
      price: "$399/month",
      popular: false,
      href: "/services/devops-automation"
    },
    {
      title: "Cybersecurity Consulting",
      description: "Advanced threat detection and zero-trust security architecture.",
      features: [
        "Threat detection",
        "Zero-trust architecture",
        "Compliance",
        "99.7% accuracy"
      ],
      price: "$599/month",
      popular: false,
      href: "/services/cybersecurity-consulting"
    },
    {
      title: "AI Edge Computing",
      description: "Real-time AI processing at the edge with sub-50ms response times.",
      features: [
        "Sub-50ms latency",
        "Edge intelligence",
        "Offline capability",
        "Real-time processing"
      ],
      price: "$799/month",
      popular: false,
      href: "/services/ai-edge-computing"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your business with our comprehensive AI services. From autonomous systems 
              to workflow automation, we deliver proven results with 300% ROI guarantee.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Call +1 302 464 0950
              </a>
              <Link
                href="/case-studies/ai-retail-transformation-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to drive growth, 
              efficiency, and innovation in your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 ${
                  service.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <span className="text-green-500 font-bold">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="border-t pt-6">
                    <div className="text-3xl font-bold text-gray-900 mb-4">
                      {service.price}
                    </div>
                    
                    <div className="space-y-3">
                      <Link
                        href={service.href}
                        className={`w-full py-3 px-6 rounded-lg font-semibold text-center block transition-colors ${
                          service.popular
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                        }`}
                      >
                        Learn More
                      </Link>
                      
                      <a
                        href="tel:+13024640950"
                        className="w-full py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold text-center block hover:bg-blue-600 hover:text-white transition-colors"
                      >
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Real Results: RetailMax Success Story
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                See how RetailMax achieved 200% revenue growth and 85% cost reduction 
                with our AI transformation services.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">200%</div>
                  <div className="text-gray-600">Revenue Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">85%</div>
                  <div className="text-gray-600">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                  <div className="text-gray-600">Months to Results</div>
                </div>
              </div>
              
              <Link
                href="/case-studies/ai-retail-transformation-2026"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                View Full Case Study →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "The AI transformation with Zion Tech Group has been nothing short of revolutionary. 
                We've not only survived the retail apocalypse but thrived in it."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Michael Rodriguez</div>
                  <div className="text-gray-600">CEO, RetailMax</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic approach to ensure your AI transformation delivers maximum results
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your current processes and AI opportunities
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Custom AI transformation roadmap tailored to your business goals
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Rapid deployment with continuous monitoring and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Continuous improvement and scaling for maximum ROI
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and discover how AI can drive growth in your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Consultation
            </a>
          </div>
          <div className="mt-8 text-sm opacity-75">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
          </div>
        </div>
      </section>
    </div>
  );
}