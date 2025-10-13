import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Cloud, Shield, Globe, Database, Code, Smartphone, Brain, Cpu, Lock, BarChart3, Wifi, Users, Settings } from "lucide-react";

export default function Services() {
  const serviceCategories = [
    {
      title: "AI & Machine Learning",
      description: "Transform your business with cutting-edge artificial intelligence solutions",
      icon: <Brain className="w-12 h-12 text-cyan-400" />,
      color: "from-cyan-500 to-blue-500",
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
      description: "Scalable, secure, and reliable cloud solutions for modern businesses",
      icon: <Cloud className="w-12 h-12 text-blue-400" />,
      color: "from-blue-500 to-indigo-500",
      services: [
        "Cloud Migration",
        "Multi-Cloud Strategy",
        "Container Orchestration",
        "Serverless Architecture",
        "Cloud Security",
        "Cost Optimization"
      ],
      link: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Protect your business with enterprise-grade security measures",
      icon: <Shield className="w-12 h-12 text-green-400" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "Security Assessment",
        "Penetration Testing",
        "Incident Response",
        "Compliance Management",
        "Security Monitoring",
        "Employee Training"
      ],
      link: "/cybersecurity-solutions"
    },
    {
      title: "5G Implementation",
      description: "Next-generation connectivity solutions for the future",
      icon: <Wifi className="w-12 h-12 text-purple-400" />,
      color: "from-purple-500 to-pink-500",
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
      description: "Turn your data into actionable insights and competitive advantage",
      icon: <BarChart3 className="w-12 h-12 text-orange-400" />,
      color: "from-orange-500 to-red-500",
      services: [
        "Data Strategy",
        "Business Intelligence",
        "Real-time Analytics",
        "Data Visualization",
        "Predictive Modeling",
        "Data Governance"
      ],
      link: "/data-analytics"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions built specifically for your needs",
      icon: <Code className="w-12 h-12 text-yellow-400" />,
      color: "from-yellow-500 to-orange-500",
      services: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "Database Design",
        "System Integration",
        "Legacy Modernization"
      ],
      link: "/custom-software"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We start by understanding your business goals, challenges, and requirements through comprehensive analysis and stakeholder interviews."
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Our experts develop a tailored strategy and detailed project plan that aligns with your objectives and timeline."
    },
    {
      step: "03",
      title: "Design & Development",
      description: "We build your solution using cutting-edge technologies and best practices, with regular updates and feedback sessions."
    },
    {
      step: "04",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures your solution meets the highest standards of quality, security, and performance."
    },
    {
      step: "05",
      title: "Deployment & Launch",
      description: "We handle the complete deployment process and ensure a smooth launch with minimal disruption to your operations."
    },
    {
      step: "06",
      title: "Support & Maintenance",
      description: "Ongoing support and maintenance ensure your solution continues to perform optimally and evolves with your business."
    }
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "Kubernetes", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "Redis", category: "Database" },
    { name: "GraphQL", category: "API" },
    { name: "TypeScript", category: "Frontend" },
    { name: "MongoDB", category: "Database" }
  ];

  return (
    <>
      <Helmet>
        <title>Services - Zion Tech Group | AI, Cloud, Cybersecurity & More</title>
        <meta
          name="description"
          content="Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, 5G implementation, data analytics, and custom development. Transform your business with our expertise."
        />
        <meta
          name="keywords"
          content="AI services, cloud infrastructure, cybersecurity solutions, 5G implementation, data analytics, custom development, technology consulting, digital transformation"
        />
        <meta property="og:title" content="Services - Zion Tech Group | AI, Cloud, Cybersecurity & More" />
        <meta property="og:description" content="Transform your business with our comprehensive technology services including AI, cloud, cybersecurity, and custom development solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Technology Services",
            "description": "Comprehensive technology services including AI solutions, cloud infrastructure, cybersecurity, and custom development",
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group"
            },
            "serviceType": "Technology Consulting",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Technology Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI & Machine Learning Solutions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cloud Infrastructure Services"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Cybersecurity Solutions"
                  }
                }
              ]
            }
          })}
        </script>
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
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation. From AI to cloud infrastructure, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What We Do
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer a comprehensive range of technology services to help your business 
                thrive in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {category.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{service}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={category.link}
                    className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${category.color} text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300`}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
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
                and maximum value for your investment.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mr-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Technologies We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage the latest technologies and frameworks to build 
                robust, scalable, and future-proof solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-white font-semibold mb-1">
                    {tech.name}
                  </div>
                  <div className="text-cyan-400 text-sm">
                    {tech.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-12 border border-cyan-400/30">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your project and create a custom solution that drives real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
