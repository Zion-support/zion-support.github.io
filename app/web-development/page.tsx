import { ArrowRight, Code, Globe, Smartphone, Zap, Shield, CheckCircle, Star, Users, Clock, Database, Palette } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function WebDevelopmentZionTechGroup() {
  const webServices = [
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built with modern technologies",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "Node.js backend", "Database integration", "API development"],
      pricing: "Starting at $5,000",
      timeline: "4-8 weeks"
    },
    {
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing and inventory management",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Payment integration", "Inventory management", "Order tracking", "Admin dashboard"],
      pricing: "Starting at $8,000",
      timeline: "6-10 weeks"
    },
    {
      title: "Responsive Web Design",
      description: "Mobile-first designs that work perfectly on all devices",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Mobile-first design", "Cross-browser compatibility", "Fast loading", "SEO optimized"],
      pricing: "Starting at $3,000",
      timeline: "2-4 weeks"
    },
    {
      title: "Progressive Web Apps",
      description: "Web applications that work like native mobile apps",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      features: ["Offline functionality", "Push notifications", "App-like experience", "Installable"],
      pricing: "Starting at $6,000",
      timeline: "5-8 weeks"
    },
    {
      title: "Web Security Solutions",
      description: "Comprehensive security implementation and monitoring",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: ["SSL certificates", "Security audits", "Penetration testing", "Monitoring"],
      pricing: "Starting at $2,000",
      timeline: "1-2 weeks"
    },
    {
      title: "Database Integration",
      description: "Efficient database design and integration for web applications",
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Database design", "Query optimization", "Data migration", "Backup solutions"],
      pricing: "Starting at $3,500",
      timeline: "2-4 weeks"
    }
  ];

  const technologies = [
    { name: "React/Next.js", category: "Frontend" },
    { name: "Vue.js/Nuxt", category: "Frontend" },
    { name: "Node.js/Express", category: "Backend" },
    { name: "Python/Django", category: "Backend" },
    { name: "PostgreSQL", category: "Database" },
    { name: "MongoDB", category: "Database" },
    { name: "AWS/Google Cloud", category: "Cloud" },
    { name: "Docker/Kubernetes", category: "DevOps" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "We analyze your requirements and create a detailed project plan"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Create wireframes and interactive prototypes for your approval"
    },
    {
      step: "03",
      title: "Development",
      description: "Build your web application using the latest technologies"
    },
    {
      step: "04",
      title: "Testing & Launch",
      description: "Thorough testing and deployment with ongoing support"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Web Development Services - Zion Tech Group | Custom Web Solutions</title>
        <meta
          name="description"
          content="Professional web development services including custom web applications, e-commerce solutions, and responsive design. Starting at $3,000."
        />
        <meta
          name="keywords"
          content="web development, custom web applications, e-commerce, responsive design, web design, web programming"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your ideas into powerful web applications with our expert development team. 
              From custom web apps to e-commerce solutions, we deliver cutting-edge web experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* Web Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Web Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive web development solutions tailored to your business needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {webServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-center mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-cyan-400 font-semibold text-lg">{service.pricing}</div>
                    <div className="text-gray-400 text-sm">Timeline: {service.timeline}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest and most reliable technologies to build your web applications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20"
                >
                  <div className="text-white font-semibold mb-1">{tech.name}</div>
                  <div className="text-gray-400 text-sm">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">200+</div>
                <div className="text-gray-300">Websites Built</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-300">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">5+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Next Web Application?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/consultation"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
