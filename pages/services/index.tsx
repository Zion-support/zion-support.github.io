import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

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
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group | AI, Cloud, Blockchain & IT Solutions</title>
        <meta name="description" content="Comprehensive technology services including AI development, cloud solutions, blockchain, IoT platforms, and micro SAAS solutions. Expert IT services for modern businesses." />
        <meta name="keywords" content="AI development services, cloud solutions, blockchain development, IoT platforms, micro SAAS, cybersecurity, web development, data analytics" />
      </Head>
      
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
  );
};

export default ServicesIndex;