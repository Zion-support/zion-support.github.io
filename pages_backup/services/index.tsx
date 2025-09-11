import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
    }
  ];
  const itServices = [
    {
      name: "Cloud Migration & Architecture",
      description: "Complete cloud transformation with AWS, Azure, and Google Cloud expertise",
      features: ["Multi-cloud strategy", "Security implementation", "Cost optimization", "24/7 monitoring"],
      pricing: "Starting at $5,000/project",
      link: "/services/cloud-migration"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing protection",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      pricing: "Starting at $3,000/month",
      link: "/services/cybersecurity-solutions"
    },
    {
      name: "DevOps & CI/CD Implementation",
      description: "Automated deployment pipelines and infrastructure as code solutions",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring setup", "Performance optimization"],
      pricing: "Starting at $4,000/month",
      link: "/services/devops-implementation"
    },
    {
      name: "Database Design & Optimization",
      description: "High-performance database architecture and optimization services",
      features: ["Database design", "Performance tuning", "Backup strategies", "Scalability planning"],
      pricing: "Starting at $2,500/project",
      link: "/services/database-optimization"
    },
    {
      name: "API Development & Integration",
      description: "Custom API development and third-party system integration",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Documentation"],
      pricing: "Starting at $3,500/project",
      link: "/services/api-development"
    }
  ];
  const aiServices = [
    {
      name: "Custom AI Model Development",
      description: "Tailored machine learning models for your specific business needs",
      features: ["Custom model training", "Data preprocessing", "Model deployment", "Performance monitoring"],
      pricing: "Starting at $8,000/project",
      link: "/services/custom-ai-models"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and content generation",
      features: ["Text analysis", "Chatbot development", "Content generation", "Sentiment analysis"],
      pricing: "Starting at $4,500/project",
      link: "/services/nlp-solutions"
    },
    {
      name: "Computer Vision Solutions",
      description: "Image and video analysis with object detection and recognition capabilities",
      features: ["Object detection", "Image classification", "Video analysis", "Real-time processing"],
      pricing: "Starting at $6,000/project",
      link: "/services/computer-vision"
    },
    {
      name: "Predictive Analytics Platform",
      description: "Advanced forecasting and predictive modeling for business intelligence",
      features: ["Time series forecasting", "Risk assessment", "Trend analysis", "Automated insights"],
      pricing: "Starting at $5,500/month",
      link: "/services/predictive-analytics"
    },
    {
      name: "AI-Powered Automation",
      description: "Intelligent process automation to streamline business operations",
      features: ["Process mapping", "Workflow automation", "Decision trees", "Integration capabilities"],
      pricing: "Starting at $3,000/month",
      link: "/services/ai-automation"
    }
  ];
origin/cursor/integrate-build-improve-and-re-verify-c7b5
import { motion } from 'framer-motion';
import { Brain, Network, Cloud, Shield, Zap, Target, Users, BarChart3, ArrowRight, CheckCircle, Star, Award, Clock, Globe } from 'lucide-react';

export default function ServicesIndex() {
ursor/fix-syntax-push-and-merge-to-main-40de

const ServicesIndex: NextPage = () => {
  const services = [
    {
      id: 'ai-development',
      title: 'AI Development & Machine Learning',
      description: 'Custom AI solutions, machine learning models, and intelligent automation systems tailored to your business needs.',
      features: [
        'Natural Language Processing (NLP)',
        'Computer Vision & Image Recognition',
        'Predictive Analytics & Forecasting',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'Fraud Detection & Risk Assessment'
      ],
      pricing: 'Starting at $2,500/month',
      icon: '🧠',
      link: '/services/ai-development'
    },
    {
      id: 'cloud-solutions',
      title: 'Cloud Solutions & Infrastructure',
      description: 'Scalable cloud infrastructure, migration services, and DevOps automation for modern applications.',
      features: [
        'AWS, Azure, GCP Migration',
        'Container Orchestration (Kubernetes)',
        'Serverless Architecture',
        'Cloud Security & Compliance',
        'Auto-scaling & Load Balancing',
        'Disaster Recovery & Backup'
      ],
      pricing: 'Starting at $1,800/month',
      icon: '☁️',
      link: '/services/cloud-solutions'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Cryptocurrency Solutions',
      description: 'Secure blockchain development, smart contracts, and DeFi applications for the decentralized future.',
      features: [
        'Smart Contract Development',
        'DeFi Applications & Protocols',
        'NFT Marketplaces & Platforms',
        'Cryptocurrency Integration',
        'Token Development & ICOs',
        'Blockchain Security Audits'
      ],
      pricing: 'Starting at $3,500/month',
      icon: '🔗',
      link: '/services/blockchain'
    },
    {
      id: 'iot-platforms',
      title: 'IoT Platforms & Connected Solutions',
      description: 'Connected device solutions, sensor networks, and real-time data processing for smart environments.',
      features: [
        'Device Management & Monitoring',
        'Real-time Analytics & Dashboards',
        'Edge Computing Solutions',
        'Industrial IoT (IIoT)',
        'Sensor Data Processing',
        'Remote Device Control'
      ],
      pricing: 'Starting at $2,200/month',
      icon: '🌐',
      link: '/services/iot-platforms'
    },
    {
      id: 'micro-saas',
      title: 'Micro SAAS Solutions',
      description: 'Custom micro SAAS platforms and automation tools designed to streamline business processes.',
      features: [
        'Workflow Automation Tools',
        'Data Processing & Analytics',
        'API Integration Services',
        'Custom Dashboard Solutions',
        'Business Process Optimization',
        'Third-party Integrations'
      ],
      pricing: 'Starting at $1,500/month',
      icon: '⚡',
      link: '/products/micro-saas'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions and compliance services to protect your digital assets.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Compliance Management (GDPR, HIPAA)',
        'Incident Response & Recovery',
        'Security Training & Awareness',
        'Vulnerability Management'
      ],
      pricing: 'Starting at $2,000/month',
      icon: '🔒',
      link: '/services/cybersecurity'
    },
    {
      id: 'web-development',
      title: 'Web & Mobile Development',
      description: 'Modern web applications, mobile apps, and progressive web apps built with cutting-edge technologies.',
      features: [
        'React, Vue.js, Angular Development',
        'Native & Cross-platform Mobile Apps',
        'Progressive Web Apps (PWA)',
        'E-commerce Solutions',
        'API Development & Integration',
        'Performance Optimization'
      ],
      pricing: 'Starting at $1,200/month',
      icon: '💻',
      link: '/services/web-development'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics and business intelligence solutions.',
      features: [
        'Data Warehousing & ETL',
        'Business Intelligence Dashboards',
        'Real-time Data Processing',
        'Machine Learning Analytics',
        'Data Visualization',
        'Custom Reporting Solutions'
      ],
      pricing: 'Starting at $1,800/month',
      icon: '📊',
      link: '/services/data-analytics'
  const microSaasServices = [
    {
      name: "AI-Powered Analytics Dashboard",
      description: "Real-time business intelligence with predictive analytics and automated reporting",
      features: ["Custom dashboards", "Predictive modeling", "Automated alerts", "Multi-platform integration"],
      pricing: "Starting at $299/month",
      link: "/services/ai-analytics-dashboard"
    },
    {
      name: "Smart Document Processor",
      description: "Automated document processing with OCR, classification, and data extraction",
      features: ["OCR technology", "Document classification", "Data extraction", "API integration"],
      pricing: "Starting at $199/month",
      link: "/services/smart-document-processor"
    },
    {
      name: "Customer Experience Optimizer",
      description: "AI-driven customer journey mapping and optimization platform",
      features: ["Journey mapping", "Sentiment analysis", "A/B testing", "ROI tracking"],
      pricing: "Starting at $399/month",
      link: "/services/customer-experience-optimizer"
    },
    {
      name: "Automated Social Media Manager",
      description: "AI-powered social media scheduling, content creation, and engagement tracking",
      features: ["Content generation", "Optimal timing", "Engagement tracking", "Multi-platform support"],
      pricing: "Starting at $149/month",
      link: "/services/automated-social-media-manager"
    },
    {
      name: "Intelligent Inventory Manager",
      description: "Smart inventory optimization with demand forecasting and automated reordering",
      features: ["Demand forecasting", "Automated reordering", "Cost optimization", "Multi-location support"],
      pricing: "Starting at $249/month",
      link: "/services/intelligent-inventory-manager"
    }
  ];
  const itServices = [
    {
      name: "Cloud Migration & Architecture",
      description: "Complete cloud transformation with AWS, Azure, and Google Cloud expertise",
      features: ["Multi-cloud strategy", "Security implementation", "Cost optimization", "24/7 monitoring"],
      pricing: "Starting at $5,000/project",
      link: "/services/cloud-migration"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security assessment, implementation, and ongoing protection",
      features: ["Security audits", "Penetration testing", "Compliance management", "Incident response"],
      pricing: "Starting at $3,000/month",
      link: "/services/cybersecurity-solutions"
    },
    {
      name: "DevOps & CI/CD Implementation",
      description: "Automated deployment pipelines and infrastructure as code solutions",
      features: ["CI/CD pipelines", "Infrastructure automation", "Monitoring setup", "Performance optimization"],
      pricing: "Starting at $4,000/month",
      link: "/services/devops-implementation"
    },
    {
      name: "Database Design & Optimization",
      description: "High-performance database architecture and optimization services",
      features: ["Database design", "Performance tuning", "Backup strategies", "Scalability planning"],
      pricing: "Starting at $2,500/project",
      link: "/services/database-optimization"
    },
    {
      name: "API Development & Integration",
      description: "Custom API development and third-party system integration",
      features: ["RESTful APIs", "GraphQL", "Microservices", "Documentation"],
      pricing: "Starting at $3,500/project",
      link: "/services/api-development"
    }
  ];
  const aiServices = [
    {
      name: "Custom AI Model Development",
      description: "Tailored machine learning models for your specific business needs",
      features: ["Custom model training", "Data preprocessing", "Model deployment", "Performance monitoring"],
      pricing: "Starting at $8,000/project",
      link: "/services/custom-ai-models"
    },
    {
      name: "Natural Language Processing",
      description: "Advanced NLP solutions for text analysis, chatbots, and content generation",
      features: ["Text analysis", "Chatbot development", "Content generation", "Sentiment analysis"],
      pricing: "Starting at $4,500/project",
      link: "/services/nlp-solutions"
    },
    {
      name: "Computer Vision Solutions",
      description: "Image and video analysis with object detection and recognition capabilities",
      features: ["Object detection", "Image classification", "Video analysis", "Real-time processing"],
      pricing: "Starting at $6,000/project",
      link: "/services/computer-vision"
    },
    {
      name: "Predictive Analytics Platform",
      description: "Advanced forecasting and predictive modeling for business intelligence",
      features: ["Time series forecasting", "Risk assessment", "Trend analysis", "Automated insights"],
      pricing: "Starting at $5,500/month",
      link: "/services/predictive-analytics"
    },
    {
      name: "AI-Powered Automation",
      description: "Intelligent process automation to streamline business operations",
      features: ["Process mapping", "Workflow automation", "Decision trees", "Integration capabilities"],
      pricing: "Starting at $3,000/month",
      link: "/services/ai-automation"
    }
  ];

  return (
    <>
      <Head>
        <title>Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud services, cybersecurity, and data analytics solutions." />
      </Head>


        {/* Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6"
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link
                    href={service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
ursor/fix-syntax-push-and-merge-to-main-40de
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Technology Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              From AI development to cloud solutions, we provide end-to-end technology services 
              that drive innovation and accelerate your business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Get Free Consultation
              </Link>
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services, each designed to address 
              specific business challenges and drive digital transformation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.pricing}</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={service.link} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Learn More
                  </Link>
                  <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">
                    Get Quote
                  </Link>
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Services - Zion Tech Group | Technology Solutions & AI Services</title>
        <meta name="description" content="Comprehensive technology services including micro SAAS solutions, IT services, and AI development. Expert solutions for modern businesses." />
        <meta name="keywords" content="technology services, micro SAAS, AI development, cloud solutions, cybersecurity, software development" />
      </Head>
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Technology Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth. 
            From innovative micro SAAS platforms to enterprise AI solutions.
          </p>
        </div>
        {/* Micro SAAS Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">
            Micro SAAS Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and maximum value for your investment.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-gray-600">We analyze your requirements, define project scope, and create a detailed roadmap.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Design & Architecture</h3>
              <p className="text-gray-600">We design the solution architecture and create detailed technical specifications.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>
              <p className="text-gray-600">We build your solution using agile methodologies with continuous testing and feedback.</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>
              <p className="text-gray-600">We deploy your solution and provide ongoing support and maintenance services.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and discover how our technology services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Start Your Project
            </Link>
            <a href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </>
        </section>
        {/* IT Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">
            IT Services & Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* AI Services */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
            AI & Machine Learning Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="text-sm text-gray-500 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-green-600">{service.pricing}</span>
                  <Link href={service.link} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de

                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our technology solutions can accelerate your growth</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </section>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8">Let's discuss how our technology solutions can accelerate your growth</p>
          <div className="flex justify-center gap-4">
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Today
            </Link>
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Learn More About Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};
export default ServicesIndex;
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
        <div className="container mx-auto px-4">;
          <div className="text-center max-w-4xl mx-auto">;
            <h1 className="text-4xl md:text-5xl font-bold mb-6">;
              Comprehensive Technology Services;
            </h1>;
            <p className="text-xl md:text-2xl mb-8 text-blue-100">;
              From AI development to cloud solutions, we provide end-to-end technology services ;
              that drive innovation and accelerate your business growth.;
            </p>;
            <div className="flex flex-col sm:flex-row justify-center gap-4">;
              <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
                Get Free Consultation;
              </Link>;
              <a href="tel:+13024640950" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
                Call +1 302 464 0950;
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Services Grid */}
      <section className="py-20 bg-gray-50">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Portfolio</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              Choose from our comprehensive range of technology services, each designed to address ;
              specific business challenges and drive digital transformation.;
            </p>;
          </div>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {services && services.map((service) => (;
              <div key={service && service.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">;
                <div className="text-4xl mb-4">{service && service.icon}</div>;
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.title}</h3>;
                <p className="text-gray-600 mb-6">{service && service.description}</p>;
                <ul className="text-sm text-gray-500 space-y-2 mb-6">;
                  {service && service.features.map((feature, index) => (;
                    <li key={index} className="flex items-center">;
                      <svg className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">;
                        <path fillRule="evenodd" d="M16 && M16.707 5 && 5.293a1 1 0 010 1 && 1.414l-8 8a1 1 0 01-1 && 1.414 0l-4-4a1 1 0 011 && 011.414-1 && 1.414L8 12 && 12.586l7.293-7 && 7.293a1 1 0 011 && 011.414 0z" clipRule="evenodd" />;
                      </svg>;
                      {feature}
                    </li>;
                  ))}
                </ul>;
                <div className="mb-6">;
                  <span className="text-2xl font-bold text-blue-600">{service && service.pricing}</span>;
                </div>;
                <div className="flex flex-col sm:flex-row gap-3">;
                  <Link href={service && service.link} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;
                    Learn More;
                  </Link>;
                  <Link href="/contact" className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center">;
                    Get Quote;
                  </Link>;
    <div className="min-h-screen bg-gray-50">;
      <Head>;
        <title>Services - Zion Tech Group | Technology Solutions & AI Services</title>;
        <meta name="description" content="Comprehensive technology services including micro SAAS solutions, IT services, and AI development. Expert solutions for modern businesses." />;
        <meta name="keywords" content="technology services, micro SAAS, AI development, cloud solutions, cybersecurity, software development" />;
      </Head>;
      <main className="container mx-auto px-4 py-16">;
        <div className="text-center mb-16">;
          <h1 className="text-5xl font-bold text-gray-900 mb-6">;
            Our Technology Services;
          </h1>;
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
            Comprehensive technology solutions designed to accelerate your business growth. ;
            From innovative micro SAAS platforms to enterprise AI solutions.;
          </p>;
        </div>;
        {/* Micro SAAS Services */}
        <section className="mb-20">;
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-600">;
            Micro SAAS Solutions;
          </h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {microSaasServices && microSaasServices.map((service, index) => (;
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;
                <p className="text-gray-600 mb-4">{service && service.description}</p>;
                <ul className="text-sm text-gray-500 mb-4">;
                  {service && service.features.map((feature, idx) => (;
                    <li key={idx} className="mb-1">• {feature}</li>;
                  ))}
                </ul>;
                <div className="flex justify-between items-center">;
                  <span className="text-lg font-semibold text-green-600">{service && service.pricing}</span>;
                  <Link href={service && service.link} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">;
                    Learn More;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </div>;
      </section>;
      {/* Process Section */}
      <section className="py-20 bg-white">;
        <div className="container mx-auto px-4">;
          <div className="text-center mb-16">;
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>;
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">;
              We follow a proven methodology to ensure successful project delivery and maximum value for your investment.;
            </p>;
          </div>;
          <div className="grid md:grid-cols-4 gap-8">;
            <div className="text-center">;
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl font-bold text-blue-600">1</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Discovery & Planning</h3>;
              <p className="text-gray-600">We analyze your requirements, define project scope, and create a detailed roadmap.</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl font-bold text-blue-600">2</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Design & Architecture</h3>;
              <p className="text-gray-600">We design the solution architecture and create detailed technical specifications.</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl font-bold text-blue-600">3</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Development & Testing</h3>;
              <p className="text-gray-600">We build your solution using agile methodologies with continuous testing and feedback.</p>;
            </div>;
            <div className="text-center">;
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">;
                <span className="text-2xl font-bold text-blue-600">4</span>;
              </div>;
              <h3 className="text-xl font-semibold mb-2">Deployment & Support</h3>;
              <p className="text-gray-600">We deploy your solution and provide ongoing support and maintenance services.</p>;
            </div>;
          </div>;
        </div>;
      </section>;
      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">;
        <div className="container mx-auto px-4 text-center">;
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>;
          <p className="text-xl mb-8 max-w-2xl mx-auto">;
            Let's discuss your project requirements and discover how our technology services can help you achieve your business goals.;
          </p>;
          <div className="flex flex-col sm:flex-row justify-center gap-4">;
            <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
              Start Your Project;
            </Link>;
            <a href="mailto:kleber@ziontechgroup && ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">;
              Email Us;
            </a>;
          </div>;
        </div>;
      </section>;
    </>;
        </section>;
        {/* IT Services */}
        <section className="mb-20">;
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-600">;
            IT Services & Solutions;
          </h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {itServices && itServices.map((service, index) => (;
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;
                <p className="text-gray-600 mb-4">{service && service.description}</p>;
                <ul className="text-sm text-gray-500 mb-4">;
                  {service && service.features.map((feature, idx) => (;
                    <li key={idx} className="mb-1">• {feature}</li>;
                  ))}
                </ul>;
                <div className="flex justify-between items-center">;
                  <span className="text-lg font-semibold text-green-600">{service && service.pricing}</span>;
                  <Link href={service && service.link} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">;
                    Learn More;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </section>;
        {/* AI Services */}
        <section className="mb-20">;
          <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">;
            AI & Machine Learning Services;
          </h2>;
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {aiServices && aiServices.map((service, index) => (;
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">;
                <h3 className="text-xl font-semibold mb-4 text-gray-900">{service && service.name}</h3>;
                <p className="text-gray-600 mb-4">{service && service.description}</p>;
                <ul className="text-sm text-gray-500 mb-4">;
                  {service && service.features.map((feature, idx) => (;
                    <li key={idx} className="mb-1">• {feature}</li>;
                  ))}
                </ul>;
                <div className="flex justify-between items-center">;
                  <span className="text-lg font-semibold text-green-600">{service && service.pricing}</span>;
                  <Link href={service && service.link} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">;

      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;
          <div className="max-w-7xl mx-auto px-4">;
            <motion&& motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              className="text-center">;
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>;
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;
                Comprehensive technology solutions designed to transform your business ;
                with AI, cloud services, cybersecurity, and data analytics.;
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;

        {/* Services Grid */}
        <section className="py-16 px-4">;
          <div className="max-w-7xl mx-auto">;
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">;
              {services && services.map((service, index) => (;
                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: index * 0 && 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6">;
                  <div className="text-center mb-6">;
                    <div className="text-4xl mb-4">{service && service.icon}</div>;
                    <h3 className="text-xl font-semibold mb-2">{service && service.title}</h3>;
                    <p className="text-gray-600 mb-4">{service && service.description}</p>;
                    <div className="text-lg font-semibold text-blue-600 mb-4">{service && service.pricing}</div>;
                  </div>;
                  <div className="space-y-2 mb-6">;
                    {service && service.features.map((feature, featureIndex) => (;
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">;
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />;
                        {feature}
                      </div>;
                    ))}
                  </div>;
                  <Link
                    href={service && service.link}
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">;
                    Learn More;
                  </Link>;
                </div>;
              </div>;
            ))}
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">;
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>;
          <p className="text-xl mb-8">Let's discuss how our technology solutions can accelerate your growth</p>;
          <div className="flex justify-center gap-4">;
            <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover: bg-gray-100 transition-colors">;
              Get Started Today;
            </Link>;
            <Link href="/about" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">;
              Learn More About Us;
            </Link>;
          </div>;
        </section>;
      </div>;
    </>;  );
}
ursor/fix-syntax-push-and-merge-to-main-40de
      </main>
    </div>
  );
}
      </main>;
    </div>;
  ),;
};
export default ServicesIndex;
export default ServicesIndex;
ursor/add-new-services-and-deploy-updates-0462
ursor/fix-syntax-push-and-merge-to-main-40de
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

export default ServicesIndex;
      </div>;
    </>;
  );

}
      </div>;
    </>;

export default ServicesIndex;
      </div>
    </>
  );

      </div>
    </>
  );
origin/cursor/integrate-build-improve-and-re-verify-c7b5
