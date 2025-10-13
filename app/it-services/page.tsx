import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Smartphone, 
  Globe, 
  Server, 
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Users,
  BarChart3,
  Settings,
  Headphones
} from "lucide-react";

const ITServicesPage = () => {
  const serviceCategories = [
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services to protect your business from evolving threats",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      services: [
        "Security Audits & Assessments",
        "Penetration Testing",
        "Incident Response",
        "Security Training",
        "Compliance Management",
        "24/7 Security Monitoring"
      ],
      link: "/cybersecurity-solutions"
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions for modern business needs",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      services: [
        "Cloud Migration",
        "Multi-Cloud Strategy",
        "Cloud Security",
        "Cost Optimization",
        "Disaster Recovery",
        "Cloud Monitoring"
      ],
      link: "/cloud-infrastructure"
    },
    {
      title: "Data Management",
      description: "Advanced data solutions for storage, analysis, and insights",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      services: [
        "Database Design & Optimization",
        "Data Warehousing",
        "Business Intelligence",
        "Data Analytics",
        "Data Migration",
        "Data Governance"
      ],
      link: "/data-management"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions for your specific business requirements",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      services: [
        "Web Applications",
        "Mobile Apps",
        "API Development",
        "System Integration",
        "Legacy Modernization",
        "Microservices Architecture"
      ],
      link: "/custom-development"
    },
    {
      title: "Mobile Solutions",
      description: "Native and cross-platform mobile applications",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      services: [
        "iOS Development",
        "Android Development",
        "Cross-Platform Apps",
        "Mobile Security",
        "App Store Optimization",
        "Mobile Analytics"
      ],
      link: "/mobile-development"
    },
    {
      title: "Network Infrastructure",
      description: "Robust network solutions for reliable connectivity",
      icon: <Globe className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      services: [
        "Network Design",
        "Wireless Solutions",
        "VPN Implementation",
        "Load Balancing",
        "Network Security",
        "Performance Optimization"
      ],
      link: "/network-infrastructure"
    }
  ];

  const itSolutions = [
    {
      title: "IT Consulting",
      description: "Strategic technology consulting to align IT with business goals",
      features: [
        "Technology Roadmap Planning",
        "Digital Transformation Strategy",
        "IT Architecture Review",
        "Cost-Benefit Analysis",
        "Vendor Selection",
        "Implementation Planning"
      ],
      pricing: "$150/hour",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Managed IT Services",
      description: "Complete IT management and support for your business",
      features: [
        "24/7 Help Desk Support",
        "Proactive Monitoring",
        "Patch Management",
        "Backup & Recovery",
        "Security Management",
        "Performance Optimization"
      ],
      pricing: "From $99/month",
      icon: <Settings className="w-6 h-6" />
    },
    {
      title: "IT Support & Maintenance",
      description: "Ongoing support and maintenance for your IT infrastructure",
      features: [
        "Hardware Support",
        "Software Updates",
        "System Maintenance",
        "Troubleshooting",
        "User Training",
        "Documentation"
      ],
      pricing: "$75/hour",
      icon: <Headphones className="w-6 h-6" />
    },
    {
      title: "IT Security Services",
      description: "Comprehensive security services to protect your business",
      features: [
        "Security Assessments",
        "Threat Monitoring",
        "Incident Response",
        "Security Training",
        "Compliance Audits",
        "Security Policies"
      ],
      pricing: "From $199/month",
      icon: <Lock className="w-6 h-6" />
    }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations",
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      title: "Cost Effective",
      description: "Competitive pricing with transparent costs",
      icon: <CheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT services including cybersecurity, cloud infrastructure, custom development, and managed IT services. Expert solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="IT services, cybersecurity, cloud infrastructure, custom development, managed IT, network solutions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            IT Services &
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Solutions
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services and solutions designed to keep your business secure, 
            efficient, and competitive in today's digital landscape.
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

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT solutions with a focus on security, efficiency, and innovation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto">
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

      {/* Service Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our IT Service Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions covering all aspects of modern business technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {service}
                    </li>
                  ))}
                </ul>
                <Link
                  to={category.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Solutions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Core IT Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Essential IT services to keep your business running smoothly and securely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itSolutions.map((solution, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {solution.title}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {solution.description}
                    </p>
                    <div className="text-lg font-bold text-cyan-400 mb-4">
                      {solution.pricing}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
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

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our IT experts for a free consultation and customized solution.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-cyan-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-cyan-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-3">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-cyan-400">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
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
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;