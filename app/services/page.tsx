import { ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge AI solutions",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "AI Strategy & Consulting",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI Chatbots & Virtual Assistants"
      ],
      link: "/ai-services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "Cloud Migration",
        "Infrastructure as Code",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security",
        "Cost Optimization"
      ],
      link: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with comprehensive security solutions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      services: [
        "Security Assessment",
        "Penetration Testing",
        "Incident Response",
        "Compliance Management",
        "Security Monitoring",
        "Threat Intelligence"
      ],
      link: "/cybersecurity-solutions"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      services: [
        "5G Network Design",
        "Edge Computing",
        "IoT Integration",
        "Smart City Solutions",
        "Private Networks",
        "Mobile Applications"
      ],
      link: "/5g-solutions"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      services: [
        "Data Strategy",
        "Business Intelligence",
        "Real-time Analytics",
        "Data Visualization",
        "Data Engineering",
        "Predictive Modeling"
      ],
      link: "/data-analytics"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions for your unique business needs",
      icon: <Code className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      services: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration",
        "Legacy Modernization",
        "Microservices Architecture"
      ],
      link: "/custom-software"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      services: [
        "iOS Development",
        "Android Development",
        "React Native",
        "Flutter Apps",
        "Progressive Web Apps",
        "Mobile Strategy"
      ],
      link: "/mobile-development"
    },
    {
      title: "Micro SAAS Solutions",
      description: "Ready-to-deploy software solutions for immediate impact",
      icon: <Zap className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      services: [
        "Analytics Tools",
        "Security Suites",
        "Content Management",
        "Workflow Automation",
        "Project Management",
        "Customer Support Tools"
      ],
      link: "/micro-saas"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive AI and IT services including cloud infrastructure, cybersecurity, 5G solutions, data analytics, and custom development."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation. From AI and machine learning
              to cloud infrastructure and cybersecurity, we provide end-to-end support.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 text-white`}
                  >
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.services.slice(0, 3).map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        {service}
                      </li>
                    ))}
                    {category.services.length > 3 && (
                      <li className="text-gray-400 text-sm">
                        +{category.services.length - 3} more services
                      </li>
                    )}
                  </ul>
                  <Link
                    to={category.link}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
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
                Our Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful project delivery
                and maximum value for your business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your requirements and business objectives" },
                { step: "02", title: "Strategy", description: "We develop a comprehensive solution strategy" },
                { step: "03", title: "Implementation", description: "We build and deploy your solution with precision" },
                { step: "04", title: "Support", description: "We provide ongoing support and optimization" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your project and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
