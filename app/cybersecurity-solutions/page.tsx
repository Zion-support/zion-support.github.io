import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Lock, Eye, AlertTriangle, CheckCircle, Star, Users, Clock, Zap } from "lucide-react";

export default function CybersecuritySolutions() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Threat Protection",
      description: "AI-powered threat detection and prevention with real-time monitoring and response"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture with identity verification and access controls"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "24/7 Security Monitoring",
      description: "Round-the-clock monitoring with Security Operations Center (SOC) services"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Incident Response",
      description: "Rapid response to security incidents with forensic analysis and recovery"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Security Training",
      description: "Comprehensive security awareness training for your team"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Compliance Management",
      description: "Ensure compliance with GDPR, HIPAA, SOX, and other regulatory requirements"
    }
  ];

  const benefits = [
    "Reduce security incidents by 95%",
    "Achieve 99.9% security uptime",
    "Comply with industry regulations",
    "Protect against advanced threats",
    "Reduce security costs by 40%",
    "Improve incident response time by 80%"
  ];

  const pricing = {
    basic: "From $800/month",
    professional: "From $1,500/month",
    enterprise: "Custom pricing"
  };

  const services = [
    "Security Assessment & Audit",
    "Penetration Testing",
    "Vulnerability Management",
    "Security Operations Center (SOC)",
    "Incident Response & Forensics",
    "Compliance Consulting",
    "Security Training & Awareness",
    "Managed Security Services"
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Solutions - Zion Tech Group | Enterprise Security Services</title>
        <meta
          name="description"
          content="Protect your business with our comprehensive cybersecurity solutions. Advanced threat protection, compliance management, and 24/7 monitoring. Starting from $800/month."
        />
        <meta
          name="keywords"
          content="cybersecurity, security solutions, threat protection, compliance, SOC, incident response, security audit"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-6 h-6 text-red-400" />
                  <span className="text-red-400 font-semibold">Cybersecurity Solutions</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Protect Your Business
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                    {" "}From Threats
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Comprehensive cybersecurity solutions that protect your business from evolving threats. 
                  Our expert team provides advanced security services with 24/7 monitoring and rapid response.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Security Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-6 flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free security assessment</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>24/7 SOC monitoring</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">From $800</div>
                    <div className="text-gray-300">per month</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Threat Protection</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">24/7 Monitoring</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Incident Response</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Compliance Support</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Security Training</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Security Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your business with our multi-layered security approach and advanced threat intelligence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Security Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cybersecurity services designed to protect your business from all angles.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-white font-semibold">{service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our Security Solutions?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our cybersecurity services deliver measurable results and help you maintain a strong security posture.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">95%</div>
                  <div className="text-gray-300">Threat Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Security Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">40%</div>
                  <div className="text-gray-300">Cost Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">80%</div>
                  <div className="text-gray-300">Faster Response</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't wait for a security breach. Let our experts help you build a robust security posture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Security Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}