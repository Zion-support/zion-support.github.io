import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Globe, Database, Shield, Zap, Users } from "lucide-react";

export default function CustomDevelopment() {
  const services = [
    {
      title: "Web Applications",
      description: "Custom web applications built with modern technologies and best practices.",
      icon: <Globe className="w-8 h-8" />,
      path: "/web-development",
      features: ["React/Next.js", "Node.js", "TypeScript", "Responsive Design"]
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"]
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions designed specifically for your business needs.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      features: ["Business Logic", "API Development", "Database Design", "Integration"]
    },
    {
      title: "E-commerce Solutions",
      description: "Complete e-commerce platforms with payment processing and inventory management.",
      icon: <Zap className="w-8 h-8" />,
      path: "/e-commerce-development",
      features: ["Payment Gateway", "Inventory Management", "Order Processing", "Analytics"]
    }
  ];

  const technologies = [
    "React", "Next.js", "Node.js", "TypeScript", "Python", "Java", "C#", "PHP",
    "React Native", "Flutter", "Swift", "Kotlin", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "GraphQL", "REST APIs"
  ];

  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta
          name="description"
          content="Custom software development services including web applications, mobile apps, and enterprise solutions."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Custom Development
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your ideas into powerful software solutions. 
                We build custom applications that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/consultation"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Development Services
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Full-stack development solutions tailored to your specific requirements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-400 flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.path}
                  className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center space-x-2 group-hover:translate-x-1 transition-all duration-300"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Section */}
        <div className="bg-slate-800/30 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-slate-700/50 text-gray-300 px-4 py-2 rounded-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your requirements and goals" },
              { step: "02", title: "Design", description: "Creating wireframes and technical architecture" },
              { step: "03", title: "Development", description: "Building your solution with regular updates" },
              { step: "04", title: "Deployment", description: "Launching and maintaining your application" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-300">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-t border-cyan-500/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Build Your Next Project?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create something amazing together.
              </p>
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 inline-flex items-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}