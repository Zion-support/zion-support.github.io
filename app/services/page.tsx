import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-helmet-async';
const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: <Zap className="w-8 h-8 text-blue-500" />,
      title: 'AI & Machine Learning',
      description: 'Transform your business with cutting-edge AI solutions and machine learning algorithms.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Automated Decision Making']
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      title: 'Cloud Solutions',
      description: 'Scalable and secure cloud infrastructure to power your digital transformation.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster Recovery']
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response']
    },
    {
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      title: '5G Implementation',
      description: 'Next-generation connectivity solutions for ultra-fast and reliable networks.',
      features: ['Network Design', 'IoT Integration', 'Edge Computing', 'Performance Optimization']
    },
    {
      icon: <Database className="w-8 h-8 text-yellow-500" />,
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with advanced analytics and visualization.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization']
    },
    {
      icon: <Code className="w-8 h-8 text-indigo-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business requirements.',
      features: ['Web Applications', 'API Development', 'Microservices', 'Legacy Modernization']
    },
    {
      icon: <Smartphone className="w-8 h-8 text-pink-500" />,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Optimization']
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'We analyze your business needs and technical requirements to create a tailored solution.'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Our team develops a comprehensive strategy and project roadmap for implementation.'
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'We build and deploy your solution using industry best practices and cutting-edge technology.'
    },
    {
      step: '04',
      title: 'Testing & Optimization',
      description: 'Rigorous testing ensures quality and performance optimization for maximum efficiency.'
    },
    {
      step: '05',
      title: 'Launch & Support',
      description: 'We launch your solution and provide ongoing support and maintenance services.'
    }
  ];

  return (
    <div>

    <div>
  
      <Helmet>
  
        <title>Our Services - Zion Tech Group</title>
        <meta>
  
        <meta>
  
      </Helmet>
      
      <main>
  
        <div>
  
          {/* Hero Section */}
          <div>
  
            <h1>
  
              Our Services
            </h1>
            <p>
  
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>

          {/* Services Grid */}
          <div>
  
            {services.map((service, index) => (
              <div>
  
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul>
  
                  {service.features.map((feature, featureIndex) => (
                    <li>
  
                      <CheckCircle>
  
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div>
  
            <div>
  
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
              <p>
  
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>
            
            <div>
  
              {processSteps.map((step, index) => (
                <div>
  
                  <div>
  
                    <span className="text-white font-bold text-lg">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div>
  
            <div>
  
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p>
  
                Let's discuss how our services can help you achieve your goals and drive innovation.
              </p>
              <div>
  
                <Link>
  
                  Get Started Today
                </Link>
                <Link>
  
                  Explore AI Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;