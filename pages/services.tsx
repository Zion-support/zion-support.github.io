import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { 
  CpuChipIcon, 
  CloudIcon, 
  ChartBarIcon, 
  ShieldCheckIcon, 
  BoltIcon, 
  CogIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const Services: NextPage = () => {
  const services = [
    {
      icon: CpuChipIcon,
      title: "AI Development & Machine Learning",
      description: "Custom AI solutions, machine learning models, and intelligent automation systems tailored to your business needs.",
      features: ["Custom AI Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Integration"],
      color: "blue"
    },
    {
      icon: CloudIcon,
      title: "Cloud Solutions & Migration",
      description: "Scalable cloud infrastructure, migration services, and cloud-native application development.",
      features: ["AWS/Azure/GCP Migration", "Cloud Architecture", "DevOps & CI/CD", "Container Orchestration", "Serverless Solutions"],
      color: "green"
    },
    {
      icon: ChartBarIcon,
      title: "Data Analytics & Business Intelligence",
      description: "Transform your data into actionable insights with advanced analytics and visualization tools.",
      features: ["Data Warehousing", "Real-time Analytics", "Dashboard Development", "Predictive Modeling", "Data Visualization"],
      color: "purple"
    },
    {
      icon: ShieldCheckIcon,
      title: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions to protect your business from threats and ensure compliance.",
      features: ["Security Audits", "Penetration Testing", "Compliance Management", "Incident Response", "Security Training"],
      color: "red"
    },
    {
      icon: BoltIcon,
      title: "Process Automation",
      description: "Streamline your operations with intelligent automation solutions that reduce costs and improve efficiency.",
      features: ["Workflow Automation", "RPA Implementation", "API Integration", "Process Optimization", "Digital Transformation"],
      color: "yellow"
    },
    {
      icon: CogIcon,
      title: "Custom Software Development",
      description: "Bespoke software solutions designed to meet your unique business requirements and challenges.",
      features: ["Web Applications", "Mobile Apps", "API Development", "System Integration", "Legacy Modernization"],
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-50 text-blue-600",
      green: "from-green-500 to-green-600 bg-green-50 text-green-600",
      purple: "from-purple-500 to-purple-600 bg-purple-50 text-purple-600",
      red: "from-red-500 to-red-600 bg-red-50 text-red-600",
      yellow: "from-yellow-500 to-yellow-600 bg-yellow-50 text-yellow-600",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-50 text-indigo-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Our Services - Zion Tech Group | AI & Technology Solutions</title>
        <meta name="description" content="Comprehensive AI development, cloud solutions, data analytics, cybersecurity, and custom software development services for modern businesses." />
        <meta name="keywords" content="AI development, cloud solutions, data analytics, cybersecurity, automation, custom software development" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Transform your business with our comprehensive AI and technology services." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://ziontechgroup.com/services" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/AIServices"
                className="inline-flex items-center px-8 py-4 border-2 border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Explore AI Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              const colorClasses = getColorClasses(service.color);
              
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 p-8">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} flex items-center justify-center mb-6`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link
                    href="/contact"
                    className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r ${colorClasses.split(' ')[0]} ${colorClasses.split(' ')[1]} hover:opacity-90 transition-all duration-200`}
                  >
                    Learn More
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We deliver exceptional results through innovative technology and expert implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <StarIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">
                Our team of certified professionals brings years of experience in cutting-edge technologies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful implementations and measurable business outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Rapid deployment and integration with minimal disruption to your operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals. 
            <span className="font-semibold"> Get started with a free consultation.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-lg text-blue-600 bg-white hover:bg-gray-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Schedule Consultation
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/MicroSAAS"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
            >
              View Micro SaaS Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;