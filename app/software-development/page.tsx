import React from 'react';
<<<<<<< HEAD
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
=======
import { Link } from 'react-router-dom';
import { Code, Smartphone, Globe, Database, ArrowRight, CheckCircle, Clock, Award, Users, Zap, Shield, BarChart3, Star } from 'lucide-react';

const SoftwareDevelopmentPage: React.FC = () => {
  const services = [
    {
//       title: "Web Application Development",
      description: "Custom web applications built with modern frameworks and technologies for optimal performance.",
      icon: <Globe className="w-6 h-6" />
    },
    {
//       title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android devices.",
      icon: <Smartphone className="w-6 h-6" />
    },
    {
//       title: "API Development",
//       description: "RESTful and GraphQL APIs with comprehensive documentation and testing.",
      icon: <Code className="w-6 h-6" />
    },
    {
//       title: "Database Design",
//       description: "Scalable database architectures with optimization and security best practices.",
      icon: <Database className="w-6 h-6" />
    },
    {
//       title: "Cloud Integration",
      description: "Seamless integration with cloud platforms and microservices architecture.",
      icon: <Globe className="w-6 h-6" />
    },
    {
//       title: "Quality Assurance",
//       description: "Comprehensive testing strategies including unit, integration, and end-to-end testing.",
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
//       title: "Modern Technologies",
//       description: "We use the latest frameworks and tools to build cutting-edge applications.",
      icon: <Code className="w-8 h-8" />
    },
    {
//       title: "Scalable Solutions",
//       description: "Architectures designed to grow with your business and handle increasing loads.",
      icon: <BarChart3 className="w-8 h-8" />
    },
    {
//       title: "Fast Delivery",
//       description: "Agile development methodologies ensure rapid and reliable software delivery.",
      icon: <Zap className="w-8 h-8" />
    },
    {
//       title: "Ongoing Support",
//       description: "Continuous maintenance and support to keep your applications running smoothly.",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
//             Software Development
</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your ideas into powerful software solutions. From web applications to mobile apps, 
//             we deliver high-quality software that drives business growth.
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
//             >
//               Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
</Link>
//             <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
//             >
//               View Demo
</Link>
</div>
</div>
//       </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//               Our Development Services
</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               We specialize in creating custom software solutions that meet your unique business requirements.
</p>
</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
</div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
</h3>
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
</p>
</div>
            ))}
</div>
</div>
//       </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
//               Why Choose Our Development Services?
</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver software solutions that are not just functional, but also scalable, secure, and user-friendly.
</p>
</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
//       </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
//             Ready to Build Your Software Solution?
</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our development team bring your vision to life with cutting-edge software solutions.
</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
//             >
//               Start Your Project
</Link>
//             <Link
              to="/consultation"
              className="border border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
//             >
//               Free Consultation
</Link>
</div>
</div>
//       </section>
</div>
  );
};

export default SoftwareDevelopmentPage;
>>>>>>> cursor/fix-errors-and-merge-to-main-ff9f
