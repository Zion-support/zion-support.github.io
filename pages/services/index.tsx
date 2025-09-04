import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Globe, Smartphone, Shield, Database, Cpu, Zap } from 'lucide-react';

const Services: NextPage = () => {
  const services = [
    {
      title: 'AI Development',
      description: 'Custom artificial intelligence solutions and machine learning models tailored to your business needs.',
      icon: Brain,
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Recommendation Systems'
      ],
      href: '/services/ai-development',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern applications and businesses.',
      icon: Cloud,
      features: [
        'Cloud Migration',
        'Infrastructure as Code',
        'Serverless Architecture',
        'Multi-cloud Strategy',
        'Cloud Security',
        'Performance Optimization'
      ],
      href: '/services/cloud-solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      icon: Globe,
      features: [
        'Frontend Development',
        'Backend Development',
        'E-commerce Solutions',
        'Progressive Web Apps',
        'API Development',
        'Performance Optimization'
      ],
      href: '/services/web-development',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      icon: Smartphone,
      features: [
        'iOS Development',
        'Android Development',
        'Cross-platform Apps',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Mobile Testing'
      ],
      href: '/services/mobile-development',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Blockchain Solutions',
      description: 'Decentralized applications and smart contract development for the future of business.',
      icon: Shield,
      features: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Development',
        'Blockchain Integration',
        'Cryptocurrency Wallets',
        'DApp Development'
      ],
      href: '/services/blockchain',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'IoT Platforms',
      description: 'Internet of Things solutions to connect and manage your devices and data.',
      icon: Cpu,
      features: [
        'IoT Device Development',
        'Sensor Integration',
        'Data Collection',
        'Real-time Monitoring',
        'IoT Analytics',
        'Device Management'
      ],
      href: '/services/iot-platforms',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and business intelligence solutions for informed decision-making.',
      icon: Database,
      features: [
        'Data Warehousing',
        'Business Intelligence',
        'Data Visualization',
        'Predictive Analytics',
        'Big Data Processing',
        'Data Governance'
      ],
      href: '/services/data-analytics',
      color: 'from-teal-500 to-blue-500'
    },
    {
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and infrastructure.',
      icon: Shield,
      features: [
        'Security Audits',
        'Penetration Testing',
        'Security Monitoring',
        'Incident Response',
        'Compliance Management',
        'Security Training'
      ],
      href: '/services/cybersecurity',
      color: 'from-gray-500 to-slate-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and technical requirements.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team creates detailed technical specifications and system architecture.'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'We build your solution using agile methodologies with continuous testing.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
    }
  ];

  return (
    <MainLayout
      title="Our Services - Zion Tech Group"
      description="Explore our comprehensive range of technology services including AI development, cloud solutions, web development, mobile apps, and more."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business 
              and drive digital innovation across all industries.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technology Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From AI and cloud computing to web development and cybersecurity, 
              we provide end-to-end technology solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className={`h-32 bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                  <service.icon className="h-16 w-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and exceed your expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step) => (
              <div key={step.step} className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Zap className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Cutting-Edge Technology
                    </h3>
                    <p className="text-gray-600">
                      We stay ahead of the curve with the latest technologies and 
                      industry best practices to deliver innovative solutions.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Security First
                    </h3>
                    <p className="text-gray-600">
                      Security is built into every solution we develop, ensuring 
                      your data and applications are protected.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 mt-1">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Expert Team
                    </h3>
                    <p className="text-gray-600">
                      Our experienced developers and consultants bring deep expertise 
                      across multiple technologies and industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6">
                Let's discuss your project requirements and how we can help you 
                achieve your business goals with our technology solutions.
              </p>
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/about"
                  className="block w-full bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 px-6 rounded-lg font-semibold text-center transition-colors"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join hundreds of businesses that have already transformed their operations 
            with our innovative technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/case-studies"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;