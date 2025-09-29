import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const ServicesIndex: NextPage = () => {
  const services = [
    {
      id: 'ai-development',
      title: 'AI Development & Machine Learning',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: [
        'Custom AI model development',
        'Machine learning pipeline creation',
        'Natural language processing',
        'Computer vision solutions',
        'Predictive analytics',
        'AI strategy consulting'
      ],
      icon: '🤖',
      category: 'Artificial Intelligence'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Architecture & Migration',
      description: 'Scalable cloud solutions and seamless migration services for modern applications.',
      features: [
        'Cloud-native application design',
        'AWS, Azure, and GCP expertise',
        'Container orchestration',
        'Serverless architecture',
        'Cloud security implementation',
        'Cost optimization strategies'
      ],
      icon: '☁️',
      category: 'Cloud Computing'
    },
    {
      id: 'web-development',
      title: 'Web Application Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: [
        'React, Next.js, and Vue.js development',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'API development and integration',
        'Performance optimization',
        'SEO and accessibility compliance'
      ],
      icon: '🌐',
      category: 'Web Development'
    },
    {
      id: 'mobile-development',
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: [
        'iOS and Android native development',
        'React Native and Flutter apps',
        'Cross-platform solutions',
        'App store optimization',
        'Push notification systems',
        'Mobile app security'
      ],
      icon: '📱',
      category: 'Mobile Development'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics & Business Intelligence',
      description: 'Transform your data into actionable insights with advanced analytics solutions.',
      features: [
        'Data warehouse design',
        'ETL/ELT pipeline development',
        'Business intelligence dashboards',
        'Real-time analytics',
        'Data visualization',
        'Predictive modeling'
      ],
      icon: '📊',
      category: 'Data & Analytics'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Compliance consulting (GDPR, HIPAA, SOX)',
        'Identity and access management',
        'Security monitoring and incident response',
        'Security training and awareness'
      ],
      icon: '🔒',
      category: 'Security'
    },
    {
      id: 'blockchain',
      title: 'Blockchain & Web3 Solutions',
      description: 'Innovative blockchain solutions and Web3 applications for the decentralized future.',
      features: [
        'Smart contract development',
        'DeFi applications',
        'NFT marketplace development',
        'Blockchain consulting',
        'Cryptocurrency integration',
        'Web3 application development'
      ],
      icon: '⛓️',
      category: 'Blockchain'
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      description: 'Streamline your development workflow with comprehensive DevOps and automation solutions.',
      features: [
        'CI/CD pipeline setup',
        'Infrastructure as Code',
        'Container orchestration',
        'Monitoring and logging',
        'Automated testing',
        'Deployment automation'
      ],
      icon: '⚙️',
      category: 'DevOps'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Services - Zion Tech Solutions | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive technology services including AI development, cloud architecture, web development, cybersecurity, and more. Expert solutions for modern businesses." />
        <meta name="keywords" content="technology services, AI development, cloud computing, web development, mobile apps, cybersecurity, blockchain, DevOps" />
      </Head>
      
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Our Technology Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age. 
            From AI development to cybersecurity, our expert team delivers cutting-edge solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{service.icon}</span>
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-2">
                      {service.category}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <ul className="text-sm text-gray-700 mb-6 space-y-1">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={`/services/${service.id}`}
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center mb-16">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Our team of expert developers, architects, and consultants is ready to help you implement 
            cutting-edge technology solutions that drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              href="/about" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn About Our Team
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              Rigorous testing and quality control processes ensure reliable, high-performance solutions.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Agile development methodologies ensure timely delivery without compromising on quality.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Round-the-clock support and maintenance to keep your systems running smoothly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesIndex;