import type { NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../../components/layout/MainLayout';
import { 
  Brain, 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  BarChart3, 
  Palette, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

const ServicesIndex: NextPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Development',
      description: 'Custom AI solutions and machine learning models tailored to your business needs.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      href: '/services/ai-model-development-chat',
      color: 'blue'
    },
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive web applications built with cutting-edge technologies.',
      features: ['React/Next.js Applications', 'E-commerce Solutions', 'Progressive Web Apps', 'API Development'],
      href: '/services/web-application-development-chat',
      color: 'green'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      href: '/services/mobile-app-development-chat',
      color: 'purple'
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for modern applications.',
      features: ['AWS/Azure/GCP', 'Cloud Migration', 'DevOps & CI/CD', 'Container Orchestration'],
      href: '/services/cloud-migration-services-chat',
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
      href: '/services/network-security-chat',
      color: 'red'
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with advanced analytics.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics'],
      href: '/services/business-intelligence-chat',
      color: 'indigo'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that enhance user experience and engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      href: '/services/ui-ux-design-chat',
      color: 'pink'
    },
    {
      icon: CheckCircle,
      title: 'Quality Assurance',
      description: 'Comprehensive testing services to ensure your applications perform flawlessly.',
      features: ['Automated Testing', 'Performance Testing', 'Security Testing', 'User Acceptance Testing'],
      href: '/services/quality-assurance-testing-chat',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      red: 'bg-red-100 text-red-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      pink: 'bg-pink-100 text-pink-600',
      teal: 'bg-teal-100 text-teal-600'
    };
    return colorMap[color] || 'bg-gray-100 text-gray-600';
  };

  return (
    <MainLayout 
      title="Our Services - Zion Tech Group"
      description="Comprehensive technology services including AI development, web development, mobile apps, cloud solutions, cybersecurity, and more."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(service.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">We understand your business goals and technical requirements.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Planning</h3>
              <p className="text-gray-600">We create a detailed project plan and timeline.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Development</h3>
              <p className="text-gray-600">We build your solution using agile methodologies.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Deployment</h3>
              <p className="text-gray-600">We deploy and provide ongoing support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your project requirements and how we can help you achieve your technology goals.
          </p>
          <Link href="/contact" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center">
            Start Your Project
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesIndex;