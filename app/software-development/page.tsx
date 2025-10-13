import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Smartphone, Monitor, Database, Shield, Code } from 'lucide-react';

const SoftwareDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Build scalable, modern web applications using the latest technologies and best practices for optimal performance and user experience.",
      icon: <Globe className="w-6 h-6" />,
      features: ["React/Next.js development", "Node.js backends", "Database design", "API development"]
    },
    {
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android devices.",
      icon: <Smartphone className="w-6 h-6" />,
      features: ["React Native apps", "Native iOS/Android", "Cross-platform solutions", "App store deployment"]
    },
    {
      title: "Enterprise Software",
      description: "Develop robust enterprise software solutions that integrate seamlessly with your existing systems and workflows.",
      icon: <Monitor className="w-6 h-6" />,
      features: ["System integration", "Legacy modernization", "Workflow automation", "Data migration"]
    },
    {
      title: "Database Solutions",
      description: "Design and implement efficient database systems that handle large-scale data with optimal performance and security.",
      icon: <Database className="w-6 h-6" />,
      features: ["Database design", "Query optimization", "Data modeling", "Performance tuning"]
    },
    {
      title: "Security & Compliance",
      description: "Implement comprehensive security measures and ensure compliance with industry standards and regulations.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security audits", "Penetration testing", "Compliance implementation", "Data protection"]
    },
    {
      title: "Code Review & Optimization",
      description: "Review and optimize existing codebases to improve performance, maintainability, and scalability.",
      icon: <Code className="w-6 h-6" />,
      features: ["Code quality analysis", "Performance optimization", "Refactoring", "Best practices implementation"]
    }
  ];

  const technologies = [
    "React & Next.js", "Node.js & Express", "TypeScript", "Python & Django", 
    "Java & Spring", "C# & .NET", "PHP & Laravel", "React Native", 
    "Flutter", "Swift & Kotlin", "PostgreSQL", "MongoDB", 
    "Redis", "Docker", "Kubernetes", "AWS & Azure"
  ];

  const benefits = [
    "Scalable and maintainable code",
    "Modern development practices",
    "Comprehensive testing",
    "Security-first approach",
    "Performance optimization",
    "Ongoing support and maintenance"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Professional software development services for modern applications." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Software Development
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your ideas into powerful, scalable software solutions. 
              We build custom applications that drive business growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From web applications to mobile apps, we provide comprehensive software development 
              solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We stay up-to-date with the latest technologies and frameworks to deliver 
              cutting-edge solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors">
                <span className="text-sm font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our Development Services?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the benefits of professional software development with our expert team and proven methodologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Next Project?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your software development needs and create a solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Your Project
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SoftwareDevelopmentPage;