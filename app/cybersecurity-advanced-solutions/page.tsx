import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Server,
  Database,
  Globe,
  Smartphone,
  Laptop,
  Cloud,
  Zap,
  Target,
  Activity,
  Settings
} from "lucide-react";

const CybersecurityAdvancedSolutions = () => {
  const services = [
    {
      title: "Advanced Threat Detection",
      description: "AI-powered threat detection and response system that identifies and neutralizes cyber threats in real-time",
      icon: <Shield className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      features: ["Real-time monitoring", "AI threat analysis", "Automated response", "24/7 surveillance"]
    },
    {
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      icon: <Lock className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["Identity verification", "Micro-segmentation", "Continuous monitoring", "Risk assessment"]
    },
    {
      title: "Cloud Security Management",
      description: "Comprehensive cloud security solutions for AWS, Azure, and Google Cloud platforms",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Cloud compliance", "Data encryption", "Access controls", "Security monitoring"]
    },
    {
      title: "Incident Response & Recovery",
      description: "Rapid incident response and disaster recovery services to minimize business impact",
      icon: <AlertTriangle className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: ["24/7 response team", "Forensic analysis", "Recovery planning", "Business continuity"]
    }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", threats: "HIPAA compliance, patient data protection" },
    { name: "Finance", icon: "🏦", threats: "PCI DSS, financial fraud prevention" },
    { name: "E-commerce", icon: "🛒", threats: "Payment security, customer data protection" },
    { name: "Government", icon: "🏛️", threats: "FISMA compliance, national security" },
    { name: "Education", icon: "🎓", threats: "FERPA compliance, student data protection" },
    { name: "Manufacturing", icon: "🏭", threats: "Industrial control systems, supply chain security" }
  ];

  const pricingPlans = [
    {
      name: "Essential Security",
      price: "$2,999",
      period: "/month",
      description: "Basic security for small businesses",
      features: [
        "Basic threat monitoring",
        "Firewall management",
        "Email security",
        "Monthly security reports",
        "Phone support"
      ],
      popular: false
    },
    {
      name: "Professional Security",
      price: "$7,999",
      period: "/month",
      description: "Advanced security for growing companies",
      features: [
        "Advanced threat detection",
        "Zero trust implementation",
        "Cloud security management",
        "Real-time monitoring",
        "Priority support",
        "Compliance assistance"
      ],
      popular: true
    },
    {
      name: "Enterprise Security",
      price: "$19,999",
      period: "/month",
      description: "Comprehensive security for large organizations",
      features: [
        "Full security suite",
        "Custom security policies",
        "24/7 dedicated team",
        "Incident response",
        "Compliance management",
        "Security training"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Williams",
      role: "CISO",
      company: "MedTech Solutions",
      content: "Zion's cybersecurity solutions helped us achieve HIPAA compliance and prevented 3 major security incidents. Their 24/7 monitoring gives us peace of mind.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "IT Director",
      company: "Financial Services Inc.",
      content: "The zero trust architecture implementation was seamless. We've seen a 90% reduction in security incidents and improved our compliance posture significantly.",
      rating: 5
    },
    {
      name: "Jennifer Chen",
      role: "CEO",
      company: "E-commerce Plus",
      content: "Their incident response team saved us from a potential data breach that could have cost millions. The recovery time was incredible - only 2 hours.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Advanced Cybersecurity Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive cybersecurity solutions including threat detection, zero trust architecture, cloud security, and incident response for enterprise protection."
        />
        <meta
          name="keywords"
          content="cybersecurity, threat detection, zero trust, cloud security, incident response, enterprise security"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Shield className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Advanced Cybersecurity Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Protect Your Business with
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              {" "}Advanced Security
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions that protect your business from evolving threats. 
            From threat detection to incident response, we provide enterprise-grade security services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Threat Detection Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Security Monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">2hr</div>
              <div className="text-gray-300">Average Response Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
              <div className="text-gray-300">Secured Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business with our advanced cybersecurity solutions designed for modern threats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Specific Security Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tailored cybersecurity solutions for different industries and compliance requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4">{industry.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{industry.name}</h3>
                  <p className="text-gray-300 text-sm">{industry.threats}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Security Packages
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security package that fits your organization's size and requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 relative`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                      : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our clients say about our cybersecurity solutions and services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-cyan-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Secure Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a security breach. Get a comprehensive security assessment and protect your business today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CybersecurityAdvancedSolutions;