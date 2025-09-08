import React from 'react';
import Layout from '../../components/Layout';

const ITServicesPage: React.FC = () => {
  const services = [
    {
      title: 'Cloud DevOps & SRE',
      description: 'Comprehensive DevOps and Site Reliability Engineering services to ensure your applications run smoothly and scale efficiently.',
      features: ['CI/CD Pipeline Setup', 'Infrastructure as Code', 'Monitoring & Alerting', 'Auto-scaling'],
      pricing: '$120–$220/hour or $6k–$30k/project',
      icon: '☁️'
    },
    {
      title: 'Cybersecurity Hardening & SOC',
      description: 'Protect your digital assets with comprehensive security solutions, including Zero Trust architecture and SOC services.',
      features: ['Security Audits', 'Penetration Testing', 'Zero Trust Implementation', 'SOC Services'],
      pricing: '$5k–$40k project, $2k–$8k/month managed',
      icon: '🔒'
    },
    {
      title: 'Cloud Migration & Modernization',
      description: 'Seamlessly migrate your infrastructure to the cloud and modernize legacy systems for better performance and scalability.',
      features: ['Cloud Migration', 'Legacy Modernization', 'Containerization', 'Serverless Architecture'],
      pricing: '$10k–$150k project',
      icon: '🚀'
    },
    {
      title: 'Network Infrastructure',
      description: 'Design, implement, and maintain robust network infrastructure solutions for optimal performance and security.',
      features: ['Network Design', 'VPN Setup', 'Load Balancing', 'Network Monitoring'],
      pricing: '$3k–$20k project',
      icon: '🌐'
    },
    {
      title: 'Database Management',
      description: 'Optimize your database performance, implement backup strategies, and ensure data integrity and security.',
      features: ['Database Optimization', 'Backup & Recovery', 'Data Migration', 'Performance Tuning'],
      pricing: '$2k–$15k project',
      icon: '🗄️'
    },
    {
      title: 'IT Support & Maintenance',
      description: 'Comprehensive IT support services to keep your systems running smoothly with proactive monitoring and maintenance.',
      features: ['24/7 Support', 'Proactive Monitoring', 'System Maintenance', 'Troubleshooting'],
      pricing: '$1k–$5k/month',
      icon: '🛠️'
    },
    {
      title: 'Cloud Architecture & Design',
      description: 'Expert cloud architecture design and implementation for scalable, secure, and cost-effective cloud solutions.',
      features: ['Cloud Strategy', 'Architecture Design', 'Cost Optimization', 'Security Implementation'],
      pricing: '$8k–$50k project',
      icon: '🏗️'
    },
    {
      title: 'Disaster Recovery & Backup',
      description: 'Comprehensive disaster recovery and backup solutions to protect your data and ensure business continuity.',
      features: ['Backup Strategy', 'Disaster Recovery Planning', 'Data Replication', 'Recovery Testing'],
      pricing: '$5k–$25k setup, $500–$2k/month',
      icon: '💾'
    },
    {
      title: 'API Development & Integration',
      description: 'Custom API development and third-party integrations to connect your systems and streamline operations.',
      features: ['RESTful APIs', 'GraphQL APIs', 'Third-party Integrations', 'API Documentation'],
      pricing: '$3k–$20k project',
      icon: '🔌'
    },
    {
      title: 'Performance Optimization',
      description: 'System and application performance optimization to improve speed, efficiency, and user experience.',
      features: ['Performance Analysis', 'Code Optimization', 'Database Tuning', 'Caching Strategies'],
      pricing: '$2k–$15k project',
      icon: '⚡'
    },
    {
      title: 'Compliance & Governance',
      description: 'IT compliance and governance services to ensure your systems meet regulatory requirements and industry standards.',
      features: ['Compliance Audits', 'Policy Development', 'Risk Assessment', 'Regulatory Reporting'],
      pricing: '$5k–$30k project',
      icon: '📋'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile application development for iOS and Android with modern frameworks.',
      features: ['Native Development', 'Cross-platform Apps', 'UI/UX Design', 'App Store Deployment'],
      pricing: '$10k–$100k project',
      icon: '📱'
    },
    {
      title: 'Web Application Development',
      description: 'Custom web application development with modern frameworks, responsive design, and scalable architecture.',
      features: ['Custom Development', 'Responsive Design', 'Scalable Architecture', 'Performance Optimization'],
      pricing: '$8k–$80k project',
      icon: '🌐'
    },
    {
      title: 'Data Analytics & Business Intelligence',
      description: 'Data analytics and business intelligence solutions to transform raw data into actionable insights.',
      features: ['Data Warehousing', 'ETL Processes', 'Dashboard Development', 'Predictive Analytics'],
      pricing: '$5k–$40k project',
      icon: '📊'
    },
    {
      title: 'IoT Solutions & Integration',
      description: 'Internet of Things solutions and device integration to connect and manage smart devices and sensors.',
      features: ['IoT Architecture', 'Device Integration', 'Data Collection', 'Real-time Monitoring'],
      pricing: '$10k–$60k project',
      icon: '🌐'
    }
  ];

  const technologies = [
    { name: 'AWS', logo: '☁️' },
    { name: 'Azure', logo: '🔵' },
    { name: 'Google Cloud', logo: '🔷' },
    { name: 'Docker', logo: '🐳' },
    { name: 'Kubernetes', logo: '⚙️' },
    { name: 'Terraform', logo: '🏗️' },
    { name: 'Jenkins', logo: '🔧' },
    { name: 'GitLab CI', logo: '🦊' },
    { name: 'Prometheus', logo: '📊' },
    { name: 'Grafana', logo: '📈' }
  ];

  return (
    <Layout 
      title="IT Services - Zion Tech Group" 
      description="Comprehensive IT services including cloud DevOps, cybersecurity, infrastructure management, and technical support for modern businesses."
    >
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">IT Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive IT services to keep your business running smoothly. From cloud infrastructure to cybersecurity, we provide the technical expertise you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get IT Consultation
              </a>
              <a 
                href="/pricing" 
                className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View Pricing
              </a>
            </div>
          </div>

          {/* Services Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our IT Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600">{service.pricing}</span>
                    <a 
                      href="/contact" 
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Technologies We Work With</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:bg-gray-100 transition-colors">
                  <div className="text-3xl mb-2">{tech.logo}</div>
                  <div className="font-semibold text-gray-900">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our IT Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
                <p className="text-gray-600">24/7 support with rapid response times to keep your systems running smoothly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security measures to protect your data and infrastructure.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">Infrastructure that grows with your business needs and requirements.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Optimize Your IT Infrastructure?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Let our expert team help you build, secure, and maintain a robust IT infrastructure that supports your business growth.
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServicesPage;