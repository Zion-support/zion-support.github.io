import { ArrowRight, FileText, Scale, Shield, AlertTriangle, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Terms() {
  const lastUpdated = "December 8, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "By accessing and using Zion Tech Group's services, you accept and agree to be bound by these terms",
        "If you do not agree to these terms, please do not use our services",
        "We reserve the right to modify these terms at any time with notice",
        "Continued use of our services after changes constitutes acceptance of new terms"
      ]
    },
    {
      title: "Service Description",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "We provide AI-powered solutions, IT services, and digital transformation consulting",
        "Services include but are not limited to: business intelligence, customer support automation, content generation, cybersecurity, and 5G solutions",
        "All services are provided on a professional basis with industry-standard practices",
        "Service availability may vary based on technical requirements and client needs"
      ]
    },
    {
      title: "Client Responsibilities",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Provide accurate and complete information for service delivery",
        "Maintain confidentiality of any proprietary information shared",
        "Comply with all applicable laws and regulations",
        "Pay all fees and charges as agreed in service contracts"
      ]
    },
    {
      title: "Intellectual Property",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "All intellectual property rights in our services remain with Zion Tech Group",
        "Clients retain rights to their own data and business processes",
        "Any custom solutions developed remain the property of the client",
        "We respect third-party intellectual property rights and expect the same from clients"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Our liability is limited to the amount paid for services in the 12 months preceding the claim",
        "We are not liable for indirect, incidental, or consequential damages",
        "Force majeure events are excluded from our liability",
        "Clients are responsible for backing up their data and systems"
      ]
    },
    {
      title: "Termination",
      icon: <Scale className="w-6 h-6" />,
      content: [
        "Either party may terminate services with 30 days written notice",
        "Immediate termination may occur for material breach of terms",
        "Upon termination, all outstanding fees become immediately due",
        "Confidentiality obligations survive termination of services"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta
          name="description"
          content="Terms of service for Zion Tech Group. Read our legal terms and conditions for AI and IT services."
        />
        <meta
          name="keywords"
          content="terms of service, legal terms, conditions, Zion Tech Group terms, service agreement"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Terms of
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Service
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              These terms and conditions govern your use of Zion Tech Group's AI and IT services. 
              Please read them carefully before engaging with our services.
            </p>
            <div className="text-sm text-gray-400 mb-8">
              Last updated: {lastUpdated}
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="space-y-12">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                        {section.title}
                      </span>
                    </h2>
                  </div>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Questions About Our Terms?
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about these terms of service, please contact our legal team.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
