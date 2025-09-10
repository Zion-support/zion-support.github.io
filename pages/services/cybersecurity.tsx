import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { 
  Shield, 
  Lock, 
  Eye, 
  Zap, 
  Users, 
  Globe,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Network,
  Server,
  Smartphone,
  ArrowRight
} from 'lucide-react';

const Cybersecurity = () => {
  const features = [
    {
      icon: Shield,
      title: "Advanced Threat Protection",
      description: "Multi-layered security with AI-powered threat detection and real-time response"
    },
    {
      icon: Lock,
      title: "Zero Trust Architecture",
      description: "Implement comprehensive security model that verifies every user and device"
    },
    {
      icon: Eye,
      title: "24/7 Security Monitoring",
      description: "Continuous surveillance with automated alerts and incident response"
    },
    {
      icon: Zap,
      title: "Rapid Incident Response",
      description: "Expert team ready to respond to security threats within minutes"
    },
    {
      icon: Users,
      title: "Security Training",
      description: "Comprehensive cybersecurity awareness training for your team"
    },
    {
      icon: Globe,
      title: "Global Compliance",
      description: "Meet international security standards and regulatory requirements"
    }
  ];

  const services = [
    {
      name: "Penetration Testing",
      price: "$5,000 - $25,000",
      description: "Comprehensive security assessment and vulnerability testing"
    },
    {
      name: "Security Audits",
      price: "$3,000 - $15,000",
      description: "Detailed security review and compliance assessment"
    },
    {
      name: "Incident Response",
      price: "$2,000 - $10,000",
      description: "Emergency security incident handling and recovery"
    },
    {
      name: "Security Training",
      price: "$1,500 - $8,000",
      description: "Employee cybersecurity awareness and training programs"
    }
  ];

  const securityStats = [
    { metric: "99.9%", label: "Threat Detection Rate" },
    { metric: "<5 min", label: "Response Time" },
    { metric: "24/7", label: "Security Monitoring" },
    { metric: "100%", label: "Compliance Success" }
  ];

  const industries = [
    {
      name: "Healthcare",
      challenges: ["HIPAA compliance", "Patient data protection", "Medical device security"],
      solutions: ["HIPAA-compliant security", "Data encryption", "Device monitoring"]
    },
    {
      name: "Finance",
      challenges: ["PCI DSS compliance", "Fraud prevention", "Transaction security"],
      solutions: ["PCI DSS implementation", "AI fraud detection", "Secure APIs"]
    },
    {
      name: "Manufacturing",
      challenges: ["OT security", "Supply chain protection", "IP protection"],
      solutions: ["OT security framework", "Supply chain monitoring", "IP security"]
    },
    {
      name: "Government",
      challenges: ["FISMA compliance", "National security", "Public data protection"],
      solutions: ["FISMA implementation", "Classified systems", "Public data security"]
    }
  ];

  const testimonials = [
    {
      name: "David Martinez",
      role: "CISO, HealthTech Solutions",
      content: "Zion Tech Group's cybersecurity services helped us achieve HIPAA compliance and protect sensitive patient data. Their expertise is unmatched.",
      rating: 5
    },
    {
      name: "Jennifer Kim",
      role: "Security Director, FinCorp Bank",
      content: "The penetration testing revealed critical vulnerabilities we missed. Their incident response team is incredibly fast and professional.",
      rating: 5
    },
    {
      name: "Robert Thompson",
      role: "IT Security Manager, Global Manufacturing",
      content: "Their OT security framework transformed our manufacturing security. We now have complete visibility and control over our industrial systems.",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Cybersecurity Services | Zion Tech Group</title>
        <meta name="description" content="Protect your business with Zion Tech Group's comprehensive cybersecurity services. Advanced threat protection, compliance, and 24/7 security monitoring." />
        <meta name="keywords" content="cybersecurity, security services, threat protection, compliance, penetration testing, security audits" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-orange-600/20"></div>
          <div className="relative container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Cybersecurity
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                  Excellence
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Protect your business from evolving cyber threats with our comprehensive security solutions. 
                Advanced protection, compliance, and 24/7 monitoring to keep you safe.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Secure Your Business
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 Call +1 (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Comprehensive Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our advanced cybersecurity solutions provide multi-layered protection for your digital assets
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Stats Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proven Security Performance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our track record speaks for itself - delivering exceptional security results for businesses worldwide
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-2">
                    {stat.metric}
                  </div>
                  <p className="text-xl text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Security Services & Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transparent pricing for comprehensive cybersecurity solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{service.name}</h3>
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-4">
                    {service.price}
                  </div>
                  <p className="text-gray-300 leading-relaxed mb-6">{service.description}</p>
                  <Link 
                    href="/contact"
                    className="inline-flex items-center text-red-400 hover:text-red-300 font-semibold"
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Solutions Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Industry-Specific Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored cybersecurity solutions for your industry's unique challenges
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-semibold text-white mb-6">{industry.name}</h3>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-red-400 mb-3">Challenges</h4>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <AlertTriangle className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-green-400 mb-3">Our Solutions</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Client Success Stories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real feedback from businesses that trust us with their security
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Don't wait until it's too late. Our cybersecurity experts are ready to protect your business 
                from the latest threats and ensure compliance with industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Security Assessment
                </Link>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/10"
                >
                  📞 +1 (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
                <p>✉️ kleber@ziontechgroup.com</p>
                <p>🌐 https://ziontechgroup.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cybersecurity;