import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star,
  Brain,
  Database,
  Server,
  Key,
  Activity,
  Target,
  Award,
  Clock,
  Smartphone,
  Monitor,
  Users,
  FileText,
  Settings,
  Search,
  Bug,
  Network
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CybersecuritySolutions = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Threat Detection",
      description: "Advanced machine learning algorithms detect and prevent cyber threats in real-time with 99.9% accuracy",
      color: "from-red-500 to-orange-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Multi-Layer Security",
      description: "Comprehensive security architecture with firewall, antivirus, intrusion detection, and data encryption",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock security monitoring with instant alerts and automated incident response",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero Trust Architecture",
      description: "Implement zero trust security model with continuous verification and least privilege access",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const securityServices = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Vulnerability Assessment",
      description: "Comprehensive security scans to identify and prioritize vulnerabilities in your systems",
      price: "From $2,500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Penetration Testing",
      description: "Simulated cyber attacks to test your security defenses and identify weaknesses",
      price: "From $5,000"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Protection",
      description: "Advanced encryption and data loss prevention for sensitive information",
      price: "From $3,000"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Identity Management",
      description: "Multi-factor authentication and identity verification systems",
      price: "From $2,000"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Infrastructure Security",
      description: "Secure your servers, networks, and cloud infrastructure",
      price: "From $4,000"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Compliance Management",
      description: "GDPR, HIPAA, SOX, and other regulatory compliance solutions",
      price: "From $5,000"
    }
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$1,999",
      period: "per month",
      description: "Basic security protection for small businesses",
      features: [
        "Real-time threat monitoring",
        "Basic firewall protection",
        "Email security scanning",
        "Weekly security reports",
        "Email support",
        "Up to 25 users"
      ],
      popular: false,
      color: "from-gray-500 to-gray-600"
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "per month",
      description: "Advanced security for growing businesses",
      features: [
        "AI-powered threat detection",
        "Advanced firewall & IPS",
        "Multi-factor authentication",
        "Daily security reports",
        "Priority support",
        "Up to 100 users",
        "Compliance monitoring",
        "Incident response"
      ],
      popular: true,
      color: "from-cyan-500 to-purple-500"
    },
    {
      name: "Enterprise",
      price: "$9,999",
      period: "per month",
      description: "Complete security solution for large organizations",
      features: [
        "Advanced AI threat detection",
        "Zero trust architecture",
        "Custom security policies",
        "Real-time monitoring",
        "24/7 dedicated support",
        "Unlimited users",
        "Full compliance suite",
        "Dedicated security team",
        "Custom integrations"
      ],
      popular: false,
      color: "from-purple-500 to-pink-500"
    }
  ];

  const threatTypes = [
    {
      icon: <Bug className="w-6 h-6" />,
      title: "Malware Protection",
      description: "Advanced malware detection and removal for all types of malicious software",
      status: "Protected"
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: "Network Security",
      description: "Comprehensive network protection against intrusions and unauthorized access",
      status: "Protected"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Phishing Prevention",
      description: "AI-powered email filtering and phishing detection to protect your users",
      status: "Protected"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Breach Prevention",
      description: "Advanced data protection and breach prevention measures",
      status: "Protected"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Insider Threat Detection",
      description: "Monitor and prevent threats from within your organization",
      status: "Protected"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "DDoS Protection",
      description: "Distributed denial of service attack prevention and mitigation",
      status: "Protected"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Threat Detection Rate", icon: <Shield className="w-6 h-6" /> },
    { number: "< 1s", label: "Response Time", icon: <Zap className="w-6 h-6" /> },
    { number: "24/7", label: "Security Monitoring", icon: <Activity className="w-6 h-6" /> },
    { number: "0", label: "Successful Breaches", icon: <Lock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Jennifer Walsh",
      company: "Financial Services Inc.",
      role: "CISO",
      content: "Zion Tech Group's cybersecurity solutions prevented 5 major attacks in the last year. Their AI detection is incredibly accurate.",
      rating: 5,
      avatar: "JW"
    },
    {
      name: "Mark Thompson",
      company: "Healthcare Solutions",
      role: "IT Director",
      content: "The compliance management helped us pass our HIPAA audit with flying colors. Highly recommended for healthcare organizations.",
      rating: 5,
      avatar: "MT"
    },
    {
      name: "Sarah Kim",
      company: "E-commerce Platform",
      role: "Security Manager",
      content: "The real-time monitoring saved us from a potential data breach. Their response time is incredible and their team is top-notch.",
      rating: 5,
      avatar: "SK"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <EnhancedSEO
        title="Cybersecurity Solutions - Advanced Security Protection | Zion Tech Group"
        description="Comprehensive cybersecurity solutions including threat detection, data protection, compliance management, and 24/7 security monitoring. Protect your business from cyber threats."
        keywords="cybersecurity, threat detection, data protection, security monitoring, compliance, penetration testing, vulnerability assessment, cyber defense"
        canonical="https://ziontechgroup.com/cybersecurity-solutions"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">Advanced Cybersecurity Protection</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Cybersecurity Solutions
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive cybersecurity solutions including threat detection, data protection, compliance management, 
            and 24/7 security monitoring. Protect your business from evolving cyber threats.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <FuturisticButton
              href="/contact"
              variant="primary"
              size="lg"
              icon={<Shield className="w-5 h-5" />}
            >
              Get Security Assessment
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              Security Demo
            </FuturisticButton>
          </div>
          
          {/* Security Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive cybersecurity protection powered by artificial intelligence and advanced threat detection.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {feature.description}
                </p>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Security Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Complete cybersecurity solutions tailored to your business needs and industry requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="text-red-400 font-semibold">{service.price}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Threat Protection Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Threat Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Protect your business from all types of cyber threats with our advanced security solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {threatTypes.map((threat, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {threat.icon}
                </div>
                <h3 className="text-white font-semibold mb-2">{threat.title}</h3>
                <p className="text-gray-300 mb-3 text-sm">{threat.description}</p>
                <span className="text-green-400 text-sm font-medium">{threat.status}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-800/50 to-orange-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Security Protection Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business size and requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                  plan.popular 
                    ? 'border-red-500/50 ring-2 ring-red-500/20' 
                    : 'border-white/20'
                } hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <FuturisticButton
                  href="/contact"
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Get Protected
                </FuturisticButton>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security experts say about our cybersecurity solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Don't wait for a cyber attack. Protect your business with our advanced cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<Shield className="w-5 h-5" />}
              >
                Get Security Assessment
              </FuturisticButton>
              <FuturisticButton
                href="tel:+13024640950"
                variant="outline"
                size="lg"
                icon={<Smartphone className="w-5 h-5" />}
              >
                Call +1 302 464 0950
              </FuturisticButton>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>Email: <a href="mailto:kleber@ziontechgroup.com" className="text-red-400 hover:text-red-300">kleber@ziontechgroup.com</a></p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default CybersecuritySolutions;