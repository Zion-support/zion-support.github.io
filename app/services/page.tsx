import { ArrowRight, Brain, Cloud, Shield, Globe, Database, Code, Smartphone, Zap, Target, Users, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI Solutions",
      description: "Cutting-edge artificial intelligence services to transform your business operations",
      icon: <Brain className="w-12 h-12" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "AI Chatbots & Virtual Assistants",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Solutions",
        "Predictive Analytics",
        "AI Automation"
      ],
      link: "/ai-services"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud solutions for modern businesses",
      icon: <Cloud className="w-12 h-12" />,
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
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets",
      icon: <Shield className="w-12 h-12" />,
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
      icon: <Globe className="w-12 h-12" />,
      color: "from-orange-500 to-yellow-500",
      services: [
        "5G Network Design",
        "Edge Computing",
        "IoT Integration",
        "Smart City Solutions",
        "Mobile Applications",
        "Private Networks"
      ],
      link: "/5g-solutions"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable business insights",
      icon: <Database className="w-12 h-12" />,
      color: "from-purple-500 to-indigo-500",
      services: [
        "Business Intelligence",
        "Data Visualization",
        "Real-time Analytics",
        "Data Warehousing",
        "ETL Processes",
        "Reporting Dashboards"
      ],
      link: "/data-analytics"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your needs",
      icon: <Code className="w-12 h-12" />,
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
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered", icon: <Target className="w-8 h-8" /> },
    { number: "100+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Award className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Zap className="w-8 h-8" /> },
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI & IT Solutions</title>
        <meta
          name="description"
          content="Comprehensive AI solutions, cloud infrastructure, cybersecurity, 5G implementation, and custom development services. Transform your business with Zion Tech Group."
        />
        <meta
          name="keywords"
          content="AI services, cloud infrastructure, cybersecurity, 5G solutions, data analytics, custom development, IT consulting"
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
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation. 
              From AI-powered automation to secure cloud infrastructure, we deliver results that matter.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4 text-cyan-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-center">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-center">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 flex-shrink-0"></div>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={category.link}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2" />
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
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your requirements and understand your business goals." },
                { step: "02", title: "Strategy", description: "We develop a comprehensive plan tailored to your specific needs." },
                { step: "03", title: "Implementation", description: "Our expert team builds and deploys your solution with precision." },
                { step: "04", title: "Support", description: "We provide ongoing maintenance and support to ensure optimal performance." }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-300">
                    {item.description}
                  </p>
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
              Let's discuss your project requirements and find the perfect solution for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
