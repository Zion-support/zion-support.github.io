import React from 'react';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';
import EnhancedSEO from '../components/EnhancedSEO';

const SoftwareDevelopmentPage = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Scalable web applications built with modern technologies and best practices",
      icon: <Globe className="w-8 h-8" />,
      features: ["React/Next.js", "Node.js/Express", "PostgreSQL/MongoDB", "AWS/Azure deployment"],
      price: "From $15,000"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android",
      icon: <Smartphone className="w-8 h-8" />,
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store optimization"],
      price: "From $25,000"
    },
    {
      title: "Enterprise Software",
      description: "Custom enterprise solutions for complex business requirements",
      icon: <Database className="w-8 h-8" />,
      features: ["Microservices architecture", "API development", "Database design", "Integration services"],
      price: "From $50,000"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment integration and inventory management",
      icon: <BarChart3 className="w-8 h-8" />,
      features: ["Shopify/WooCommerce", "Custom platforms", "Payment gateways", "Analytics integration"],
      price: "From $20,000"
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless data integration",
      icon: <Zap className="w-8 h-8" />,
      features: ["RESTful APIs", "GraphQL", "Authentication", "Rate limiting"],
      price: "From $8,000"
    },
    {
      title: "Legacy System Modernization",
      description: "Update and modernize existing systems for better performance and security",
      icon: <Cpu className="w-8 h-8" />,
      features: ["Code refactoring", "Database migration", "UI/UX updates", "Performance optimization"],
      price: "From $30,000"
    }
  ];

  const technologies = [
    { name: "Frontend", items: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"] },
    { name: "Backend", items: ["Node.js", "Python", "Java", "C#", "Go"] },
    { name: "Mobile", items: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { name: "Database", items: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
    { name: "Cloud", items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] }
  ];

  const process = [
    {
      step: "1",
      title: "Discovery",
      description: "Understand your requirements and define project scope"
    },
    {
      step: "2", 
      title: "Planning",
      description: "Create detailed project plan and technical architecture"
    },
    {
      step: "3",
      title: "Development",
      description: "Agile development with regular updates and testing"
    },
    {
      step: "4",
      title: "Testing",
      description: "Comprehensive testing including unit, integration, and user testing"
    },
    {
      step: "5",
      title: "Deployment",
      description: "Deploy to production with monitoring and support"
    }
  ];

  const benefits = [
    {
      title: "Custom Solutions",
      description: "Tailored software that meets your specific business needs",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Scalable Architecture",
      description: "Built to grow with your business and handle increased load",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Modern Technologies",
      description: "Latest tools and frameworks for optimal performance",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Ongoing Support",
      description: "24/7 support and maintenance for your applications",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Software Development Services - Zion Tech Group | Custom Web & Mobile Apps"
        description="Professional software development services including custom web applications, mobile apps, _enterprise software, and API development. Modern technologies and agile methodology."
        keywords="software development, _custom web applications, _mobile app development, _enterprise software, _API development, _React, Node.js"
        canonical="https://ziontechgroup.com/software-development"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Software Development
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, we build custom software that drives business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/consultation"
              variant="outline"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              Free Consultation
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive software development solutions tailored to your business needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (<FuturisticCard key={index} className="h-full">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-cyan-400 font-semibold mb-4">{service.price}</div>
                </div>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Get Quote
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Modern, proven technologies for building robust and scalable applications.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {technologies.map((tech, index) => (<div key={index} className="text-center">
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">{tech.name}</h3>
                <ul className="space-y-2">
                  {tech.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              A proven methodology to deliver high-quality software on time and within budget.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the difference of working with a dedicated development team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <ResponsiveContainer className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Software Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Let our experienced developers bring your vision to life with cutting-edge technology and best practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Start Your Project
            </FuturisticButton>
            <FuturisticButton
              href="/consultation"
              variant="outline"
              size="lg"
              icon={<Users className="w-5 h-5" />}
            >
              Schedule Consultation
            </FuturisticButton>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;
