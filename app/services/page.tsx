import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

<<<<<<< HEAD
export const metadata = {
  title: 'AI & IT Services | Zion Tech Group - 300% ROI Guaranteed',
  description: 'Comprehensive AI and IT services including data analytics, workflow automation, virtual assistants, cloud migration, DevOps, and cybersecurity. Achieve 300% ROI with our proven solutions.',
  keywords: 'AI services, IT services, data analytics, workflow automation, virtual assistants, cloud migration, DevOps, cybersecurity, AI consulting',
  openGraph: {
    title: 'AI & IT Services | Zion Tech Group',
    description: 'Comprehensive AI and IT services including data analytics, workflow automation, virtual assistants, cloud migration, DevOps, and cybersecurity.',
    type: 'website',
    url: 'https://ziontechgroup.com/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group AI & IT Services',
      },
    ],
  },
=======
export const metadata: Metadata = {
  title: 'AI Services & Solutions | Zion Tech Group - Transform Your Business',
  description: 'Comprehensive AI services including autonomous systems, workflow automation, data analytics, and enterprise transformation. Get 300% ROI with our proven AI solutions.',
  keywords: 'AI services, AI solutions, enterprise AI, AI automation, AI consulting, AI implementation',
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
};

export default function ServicesPage() {
  const services = [
    {
<<<<<<< HEAD
      id: 'ai-data-analytics',
      title: 'AI Data Analytics',
      description: 'Transform data into actionable insights with predictive modeling and real-time dashboards',
      price: '$199/month',
      features: ['Predictive Analytics', 'Real-time Dashboards', 'Data Integration', 'Custom Reporting'],
      benefits: ['90% faster insights', '60% cost reduction', '95% accuracy'],
      icon: '📊',
      popular: true
    },
    {
      id: 'ai-workflow-automation',
      title: 'AI Workflow Automation',
      description: 'Automate business processes with intelligent workflow design and smart triggers',
      price: '$149/month',
      features: ['Process Automation', 'Smart Triggers', 'Performance Monitoring', 'Custom Workflows'],
      benefits: ['75% process efficiency', '80% time savings', '99% accuracy'],
      icon: '⚙️',
      popular: false
    },
    {
      id: 'ai-virtual-assistant',
      title: 'AI Virtual Assistant',
      description: '24/7 intelligent customer support with natural language processing',
      price: '$99/month',
      features: ['24/7 Support', 'Multi-channel', 'Personalized Responses', 'Escalation Management'],
      benefits: ['80% faster response', '95% satisfaction', '60% cost reduction'],
      icon: '🤖',
      popular: false
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Seamless migration to cloud infrastructure with zero downtime',
      price: '$2,999',
      features: ['Zero Downtime', 'Security Compliance', 'Cost Optimization', 'Performance Monitoring'],
      benefits: ['99.9% uptime', '40% cost savings', '3x performance'],
      icon: '☁️',
      popular: false
    },
    {
      id: 'devops-automation',
      title: 'DevOps Automation',
      description: 'Automate CI/CD pipelines and infrastructure management',
      price: '$399/month',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Auto-scaling', 'Monitoring'],
      benefits: ['90% faster deployment', '70% fewer errors', '50% cost reduction'],
      icon: '🚀',
      popular: false
    },
    {
      id: 'cybersecurity-consulting',
      title: 'Cybersecurity Consulting',
      description: 'Advanced threat detection and zero-trust security architecture',
      price: '$599/month',
      features: ['Threat Detection', 'Zero-trust Architecture', 'Compliance', 'Incident Response'],
      benefits: ['99.7% threat detection', 'Zero breaches', 'Full compliance'],
      icon: '🛡️',
      popular: false
    },
    {
      id: 'ai-edge-computing',
      title: 'AI Edge Computing',
      description: 'Real-time AI processing at the edge with sub-50ms response times',
      price: '$799/month',
      features: ['Sub-50ms Latency', 'Edge Intelligence', 'Offline Capability', 'Real-time Processing'],
      benefits: ['50ms response time', '99.9% reliability', 'Offline operation'],
      icon: '⚡',
      popular: false
    },
    {
      id: 'ai-finance-automation',
      title: 'AI Finance Automation',
      description: 'Automate financial processes with 95% accuracy and $3M+ savings',
      price: '$1,299/month',
      features: ['95% Automation', 'Fraud Detection', 'Real-time Reporting', 'Compliance'],
      benefits: ['95% automation', '$3M+ savings', '99.9% accuracy'],
      icon: '💰',
      popular: false
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI & IT Services That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                {' '}Drive Results
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive AI and IT services. Achieve 300% ROI, 
              70% cost reduction, and 90% efficiency gains with our proven solutions.
=======
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI Services & Solutions
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Transform your business with our comprehensive AI services. From autonomous systems 
              to workflow automation, we deliver proven results with 300% ROI guarantee.
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
<<<<<<< HEAD
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Call +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">500+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">300%</div>
              <div className="text-gray-600">Average ROI</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">99.9%</div>
              <div className="text-gray-600">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Expert Support</div>
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
<<<<<<< HEAD
              Our AI & IT Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of AI and IT services designed to transform 
              your business operations and drive measurable results.
=======
              Our AI Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive suite of AI services designed to drive growth, 
              efficiency, and innovation in your organization.
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
            {services.map((service) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border-2 ${
                  service.popular 
                    ? 'border-blue-500 relative' 
                    : 'border-gray-200 hover:border-blue-300'
=======
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 ${
                  service.popular ? 'border-blue-500 relative' : 'border-gray-200'
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
<<<<<<< HEAD
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
=======
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
                      Most Popular
                    </span>
                  </div>
                )}
                
<<<<<<< HEAD
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{service.price}</div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-green-500 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Expected Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <span className="text-blue-500 mr-2">→</span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <Link
                    href={`/services/${service.id}`}
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                      service.popular
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Learn More
                  </Link>
                  <a
                    href="tel:+13024640950"
                    className="w-full block text-center py-3 px-6 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Get Quote
                  </a>
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Industry Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Industry-Specific Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored AI and IT solutions designed for specific industries and use cases
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Manufacturing</h3>
              <p className="text-gray-600 mb-4">
                Predictive maintenance, quality control, and supply chain optimization
              </p>
              <div className="text-sm text-gray-500">
                <div>• 60% downtime reduction</div>
                <div>• 40% quality improvement</div>
                <div>• 25% efficiency gain</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Healthcare</h3>
              <p className="text-gray-600 mb-4">
                Diagnostic AI, patient monitoring, and operational efficiency
              </p>
              <div className="text-sm text-gray-500">
                <div>• 80% faster diagnoses</div>
                <div>• 99.5% accuracy rate</div>
                <div>• 30% cost reduction</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial</h3>
              <p className="text-gray-600 mb-4">
                Fraud detection, risk assessment, and process automation
              </p>
              <div className="text-sm text-gray-500">
                <div>• 95% process automation</div>
                <div>• 99.7% fraud detection</div>
                <div>• 80% faster processing</div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail</h3>
              <p className="text-gray-600 mb-4">
                Customer analytics, inventory optimization, and personalized experiences
              </p>
              <div className="text-sm text-gray-500">
                <div>• 250% customer satisfaction</div>
                <div>• 60% inventory optimization</div>
                <div>• 35% sales increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
<<<<<<< HEAD
              We follow a systematic approach to ensure successful AI and IT implementation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Assessment</h3>
              <p className="text-gray-600">
                Comprehensive analysis of your current systems and AI readiness
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategy</h3>
              <p className="text-gray-600">
                Develop a customized AI strategy aligned with your business goals
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation</h3>
              <p className="text-gray-600">
                Deploy AI solutions with minimal disruption to your operations
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Optimization</h3>
              <p className="text-gray-600">
                Continuous monitoring and optimization for maximum ROI
=======
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
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how our AI and IT solutions can drive your success. 
            Get a free consultation and ROI projection for your specific needs.
=======
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and discover how AI can drive growth in your organization
>>>>>>> origin/cursor/create-and-deploy-new-content-4f0b
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