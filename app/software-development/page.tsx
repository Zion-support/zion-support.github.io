import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Code, Clock, Award, ArrowRight, CheckCircle, BarChart3, Users, Settings, Zap, Globe, Smartphone, Monitor } from 'lucide-react';

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
      title: "API Development",
      description: "Design and build secure, scalable APIs that enable seamless integration between different systems and services.",
      icon: <Code className="w-6 h-6" />,
      features: ["RESTful APIs", "GraphQL endpoints", "API documentation", "Rate limiting"]
    },
    {
      title: "Cloud-Native Applications",
      description: "Build applications designed for the cloud with microservices architecture, containerization, and serverless computing.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Microservices", "Containerization", "Serverless functions", "Cloud deployment"]
    },
    {
      title: "AI-Powered Solutions",
      description: "Integrate artificial intelligence and machine learning capabilities into your applications for enhanced functionality.",
      icon: <BarChart3 className="w-6 h-6" />,
      features: ["Machine learning models", "AI integration", "Data analytics", "Predictive features"]
    }
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Node.js/Express", category: "Backend" },
    { name: "TypeScript", category: "Language" },
    { name: "PostgreSQL/MongoDB", category: "Database" },
    { name: "AWS/Azure", category: "Cloud" },
    { name: "Docker/Kubernetes", category: "DevOps" },
    { name: "Python/Django", category: "Backend" },
    { name: "React Native", category: "Mobile" }
  ];

  const benefits = [
    {
      title: "Faster Time to Market",
      description: "Accelerate development with agile methodologies and modern tools",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "High Quality Code",
      description: "Deliver robust, maintainable code with comprehensive testing and code reviews",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Scalable Solutions",
      description: "Build applications that grow with your business needs",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Ongoing Support",
      description: "Get continuous support and maintenance for your applications",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Software Development
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, 
            we deliver custom software that drives business growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-green-500 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We specialize in creating custom software solutions that meet your unique business requirements and exceed expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
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
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build modern, scalable applications.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform">
                  <Code className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">{tech.name}</h3>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Our Development Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business understanding to deliver software solutions that drive real value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-blue-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Build Your Next Software Solution?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experienced development team bring your ideas to life with cutting-edge technology and proven methodologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/consultation"
              className="border border-green-500 text-green-400 px-8 py-3 rounded-lg font-semibold hover:bg-green-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

=======
import { Helmet } from 'react-helmet-async';

export default function SoftwareDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Software Development - Zion Tech Group</title>
        <meta name="description" content="Software Development solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Software Development</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive software development solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b119
