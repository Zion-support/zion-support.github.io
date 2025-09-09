import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      icon: '🌐',
      features: [
        'Custom Web Applications',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development & Integration',
        'Performance Optimization',
        'SEO & Analytics'
      ],
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: '📱',
      features: [
        'iOS & Android Apps',
        'React Native Development',
        'Flutter Applications',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Expo']
    },
    {
      title: 'AI Integration',
      description: 'Leverage artificial intelligence to automate processes and gain insights.',
      icon: '🤖',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'Chatbots & Virtual Assistants',
        'Data Mining & Analysis'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'AWS AI']
    },
    {
      title: 'Cloud Services',
      description: 'Scalable and secure cloud infrastructure solutions.',
      icon: '☁️',
      features: [
        'AWS/Azure/GCP Migration',
        'DevOps & CI/CD',
        'Containerization',
        'Microservices Architecture',
        'Auto-scaling Solutions',
        'Disaster Recovery'
      ],
      technologies: ['AWS', 'Azure', 'GCP', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      icon: '📊',
      features: [
        'Business Intelligence',
        'Data Visualization',
        'ETL Pipelines',
        'Real-time Analytics',
        'Dashboard Development',
        'Data Warehousing'
      ],
      technologies: ['Python', 'R', 'Tableau', 'Power BI', 'Apache Spark', 'Elasticsearch']
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions.',
      icon: '🔒',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Management',
        'Incident Response',
        'Security Monitoring',
        'Vulnerability Assessment'
      ],
      technologies: ['SIEM', 'WAF', 'IDS/IPS', 'OWASP', 'NIST', 'ISO 27001']
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive technology solutions including web development, mobile apps, AI integration, cloud services, data analytics, and cybersecurity." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative container mx-auto px-4 py-20 lg:py-32">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight">
                Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation. From web development to AI integration, we've got you covered.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {services.map((service, index) => (
                <div key={index} className="card group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 text-lg leading-relaxed">{service.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-400 flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-3 py-1 bg-slate-700 text-gray-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our <span className="gradient-text">Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  1
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Discovery</h3>
                <p className="text-gray-300">
                  We start by understanding your business goals, requirements, and challenges to create a tailored solution.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  2
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Planning</h3>
                <p className="text-gray-300">
                  We create a detailed project plan with timelines, milestones, and deliverables to ensure smooth execution.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  3
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Development</h3>
                <p className="text-gray-300">
                  Our expert team builds your solution using agile methodologies with regular updates and feedback.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                  4
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Launch</h3>
                <p className="text-gray-300">
                  We deploy your solution and provide ongoing support to ensure optimal performance and user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Industries We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have experience working across various industries, delivering tailored solutions for each sector.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[
                { name: 'Healthcare', icon: '🏥' },
                { name: 'Finance', icon: '💰' },
                { name: 'E-commerce', icon: '🛒' },
                { name: 'Education', icon: '🎓' },
                { name: 'Manufacturing', icon: '🏭' },
                { name: 'Real Estate', icon: '🏠' }
              ].map((industry, index) => (
                <div key={index} className="card text-center group hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{industry.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Let's discuss how our services can help transform your business. 
              Contact us today for a free consultation and project estimate.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact" className="btn-primary">
                Get Free Consultation
              </Link>
              <Link href="/pricing" className="btn-secondary">
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}