import type { NextPage } from 'next';
import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import { Brain, Cloud, Code, Shield, Smartphone, Database, Zap, Globe, Lock, BarChart3, Settings, Users } from 'lucide-react';

const Services: NextPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom artificial intelligence solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'AI Chatbots', 'Automation Systems'],
      color: 'blue'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services to optimize your operations and reduce costs.',
      features: ['Cloud Migration', 'Infrastructure Design', 'DevOps Automation', 'Serverless Architecture', 'Multi-Cloud Strategy', 'Performance Optimization'],
      color: 'purple'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies and best practices.',
      features: ['Frontend Development', 'Backend Systems', 'API Development', 'E-commerce Solutions', 'Progressive Web Apps', 'Performance Optimization'],
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.',
      features: ['iOS Development', 'Android Development', 'Cross-Platform Apps', 'App Store Optimization', 'Mobile UI/UX', 'App Maintenance'],
      color: 'indigo'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response', 'Security Training', 'Threat Monitoring'],
      color: 'red'
    },
    {
      icon: Database,
      title: 'Blockchain Solutions',
      description: 'Innovative blockchain technology solutions for secure, transparent, and decentralized applications.',
      features: ['Smart Contracts', 'DeFi Applications', 'NFT Platforms', 'Supply Chain Solutions', 'Cryptocurrency Integration', 'Blockchain Consulting'],
      color: 'yellow'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation services to modernize your business processes and technology stack.',
      features: ['Process Automation', 'Legacy System Migration', 'Digital Strategy', 'Change Management', 'Technology Assessment', 'Implementation Support'],
      color: 'pink'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Advanced data analytics and business intelligence solutions to drive informed decision-making.',
      features: ['Data Warehousing', 'Business Intelligence', 'Real-time Analytics', 'Data Visualization', 'Predictive Modeling', 'Data Governance'],
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      purple: 'bg-purple-50 border-purple-200 text-purple-600',
      green: 'bg-green-50 border-green-200 text-green-600',
      indigo: 'bg-indigo-50 border-indigo-200 text-indigo-600',
      red: 'bg-red-50 border-red-200 text-red-600',
      yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
      pink: 'bg-pink-50 border-pink-200 text-pink-600',
      teal: 'bg-teal-50 border-teal-200 text-teal-600'
    };
    return colorMap[color] || 'bg-gray-50 border-gray-200 text-gray-600';
  };

  const getIconColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-600',
      purple: 'bg-purple-600',
      green: 'bg-green-600',
      indigo: 'bg-indigo-600',
      red: 'bg-red-600',
      yellow: 'bg-yellow-600',
      pink: 'bg-pink-600',
      teal: 'bg-teal-600'
    };
    return colorMap[color] || 'bg-gray-600';
  };

  return (
    <MainLayout 
      title="Our Services - Zion Tech Group"
      description="Explore Zion Tech Group's comprehensive technology services including AI development, cloud solutions, web development, mobile apps, cybersecurity, and digital transformation."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl text-gray-200">
              Comprehensive technology solutions designed to transform your business and drive innovation across all digital touchpoints.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Solutions That Drive Growth</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to deployment, we provide end-to-end technology services that help businesses innovate, scale, and succeed in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className={`w-16 h-16 ${getIconColorClasses(service.color)} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className={`w-2 h-2 ${getIconColorClasses(service.color)} rounded-full mr-3`}></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <Link href="/contact">
                      <span className={`inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white ${getIconColorClasses(service.color)} hover:opacity-90 transition-opacity cursor-pointer`}>
                        Get Started
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful project delivery and maximum value for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business needs, goals, and technical requirements through comprehensive consultation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Planning</h3>
              <p className="text-gray-600">
                Our team creates detailed project plans, architecture designs, and development roadmaps tailored to your objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Development</h3>
              <p className="text-gray-600">
                We build your solution using agile methodologies, ensuring quality, security, and performance at every stage.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Deployment</h3>
              <p className="text-gray-600">
                We deploy your solution with comprehensive testing, monitoring, and ongoing support to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to deliver robust, scalable, and future-proof solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Frontend</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>React.js</p>
                <p>Vue.js</p>
                <p>Angular</p>
                <p>Next.js</p>
                <p>TypeScript</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Backend</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Node.js</p>
                <p>Python</p>
                <p>Java</p>
                <p>.NET</p>
                <p>Go</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cloud & DevOps</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>AWS</p>
                <p>Azure</p>
                <p>Google Cloud</p>
                <p>Docker</p>
                <p>Kubernetes</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">AI & ML</h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p>TensorFlow</p>
                <p>PyTorch</p>
                <p>OpenAI</p>
                <p>Hugging Face</p>
                <p>Scikit-learn</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver solutions that drive real results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our team consists of experienced developers, designers, and consultants with deep expertise in their respective domains.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Process</h3>
              <p className="text-gray-600">
                We follow industry best practices and proven methodologies to ensure successful project delivery and client satisfaction.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Perspective</h3>
              <p className="text-gray-600">
                We bring international best practices and diverse perspectives to every project, ensuring solutions that work globally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and how our services can help you achieve your technology goals.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                Start Your Project
              </span>
            </Link>
            <Link href="/about">
              <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                Learn More About Us
              </span>
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Services;
