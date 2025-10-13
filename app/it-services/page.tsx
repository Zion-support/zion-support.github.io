import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Code, Smartphone, Database, Settings, BarChart3, Globe, Cpu, Users, CheckCircle, ArrowRight, Star, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, disaster recovery, and multi-cloud support for enterprise-grade reliability.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $999/month",
      features: ["Multi-cloud Support", "Auto-scaling", "Disaster Recovery", "24/7 Monitoring", "Security Compliance", "Cost Optimization"],
      category: "Cloud Services",
      popular: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, penetration testing, and compliance management.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "Starting at $1,499/month",
      features: ["Threat Detection", "Vulnerability Assessment", "Penetration Testing", "Compliance Management", "Security Training", "Incident Response"],
      category: "Security",
      popular: true
    },
    {
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies, responsive design, and optimal performance for all devices.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "Starting at $2,999/project",
      features: ["Responsive Design", "Performance Optimization", "SEO Optimization", "Security Implementation", "CMS Integration", "Maintenance Support"],
      category: "Development"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experience and robust functionality.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $4,999/project",
      features: ["Native Development", "Cross-platform", "App Store Optimization", "Push Notifications", "Offline Support", "Analytics Integration"],
      category: "Development"
    },
    {
      title: "Database Management",
      description: "Expert database design, optimization, migration, and maintenance services for improved performance and data integrity.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $799/month",
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup & Recovery", "Security Hardening", "Monitoring & Maintenance"],
      category: "Data Services"
    },
    {
      title: "Custom Software Development",
      description: "Tailored software solutions designed to meet your specific business requirements with scalable architecture and modern technologies.",
      icon: <Settings className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-orange-500 to-red-500",
      price: "Starting at $5,999/project",
      features: ["Custom Architecture", "API Development", "Integration Services", "Testing & QA", "Documentation", "Training & Support"],
      category: "Development"
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics, business intelligence, and data visualization solutions.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $1,299/month",
      features: ["Data Visualization", "Predictive Analytics", "Real-time Dashboards", "ETL Processes", "Machine Learning", "Custom Reports"],
      category: "Analytics"
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things solutions connecting devices, collecting data, and providing intelligent automation for smart operations.",
      icon: <Globe className="w-8 h-8" />,
      path: "/iot-solutions",
      color: "from-emerald-500 to-green-500",
      price: "Starting at $2,499/project",
      features: ["Device Integration", "Data Collection", "Real-time Monitoring", "Automation", "Security", "Scalability"],
      category: "IoT"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Comprehensive Technology Solutions | Zion Tech Group</title>
        <meta name="description" content="Expert IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and data analytics. Transform your business with our technology solutions." />
        <link rel="canonical" href="https://ziontechgroup.com/it-services" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Comprehensive IT Services
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our expert IT solutions. From cloud infrastructure to cybersecurity, 
              we provide end-to-end technology services that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                View Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to meet your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br from-slate-800/50 to-slate-700/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 ${
                  service.popular ? 'ring-2 ring-purple-500/30' : ''
                }`}
              >
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {service.title}
                    {service.popular && <Star className="w-4 h-4 inline ml-2 text-yellow-400" />}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-purple-400 mb-2">{service.price}</div>
                  <div className="text-sm text-gray-400 mb-4">{service.category}</div>
                </div>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.path}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block"
                >
                  Learn More
                  <ArrowRight className="inline ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our expert team help you build a robust, scalable, and secure technology foundation 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-purple-400 hover:text-purple-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}