import { ArrowRight, FileText, Scale, Shield, AlertTriangle, Users, Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Zion Tech Group | Legal Terms & Conditions</title>
        <meta
          name="description"
          content="Zion Tech Group's terms of service and legal conditions. Understand your rights and obligations when using our AI and IT services."
        />
        <meta
          name="keywords"
          content="terms of service, legal terms, conditions, user agreement, service terms, Zion Tech Group, AI services terms"
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
              Please read these terms carefully before using our services. By accessing or using our website and services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
              <div className="flex items-center">
                <FileText className="w-4 h-4 mr-2 text-cyan-400" />
                Last Updated: January 15, 2024
              </div>
              <div className="flex items-center">
                <Scale className="w-4 h-4 mr-2 text-cyan-400" />
                Legally Binding
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              
              {/* Introduction */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <FileText className="w-6 h-6 mr-3 text-cyan-400" />
                  Agreement to Terms
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  These Terms of Service ("Terms") govern your use of Zion Tech Group's website, services, and products 
                  (collectively, the "Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  If you do not agree to these Terms, please do not use our Services. We reserve the right to modify 
                  these Terms at any time, and your continued use of our Services constitutes acceptance of any changes.
                </p>
              </div>

              {/* Services Description */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-cyan-400" />
                  Description of Services
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Zion Tech Group provides AI-powered solutions, IT services, and technology consulting including:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Artificial Intelligence and Machine Learning solutions</li>
                  <li>Cloud infrastructure and migration services</li>
                  <li>Cybersecurity and data protection services</li>
                  <li>Web and mobile application development</li>
                  <li>Data analytics and business intelligence</li>
                  <li>5G network implementation and management</li>
                  <li>Micro SAAS solutions and software products</li>
                  <li>Technology consulting and advisory services</li>
                </ul>
              </div>

              {/* User Responsibilities */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-cyan-400" />
                  User Responsibilities
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  When using our Services, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Provide accurate and complete information when required</li>
                  <li>Use our Services only for lawful purposes</li>
                  <li>Respect intellectual property rights</li>
                  <li>Not attempt to gain unauthorized access to our systems</li>
                  <li>Not use our Services to transmit harmful or malicious content</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any security breaches</li>
                </ul>
              </div>

              {/* Payment Terms */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Payment Terms</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Fees and Billing</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                      <li>Service fees are as specified in your service agreement</li>
                      <li>All fees are non-refundable unless otherwise specified</li>
                      <li>Payment is due according to the terms specified in your agreement</li>
                      <li>Late payments may result in service suspension</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Price Changes</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We reserve the right to modify our pricing with 30 days' notice. 
                      Continued use of our Services after price changes constitutes acceptance of the new pricing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Intellectual Property</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Our Rights</h3>
                    <p className="text-gray-300 leading-relaxed">
                      All content, software, and materials provided through our Services are owned by Zion Tech Group 
                      or our licensors and are protected by intellectual property laws.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Your Rights</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You retain ownership of your data and content. By using our Services, you grant us a limited, 
                      non-exclusive license to use your data solely for the purpose of providing our Services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Level Agreement */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Service Level Agreement</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Uptime Guarantee</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We strive to maintain 99.9% uptime for our Services. Service credits may be available 
                      for qualifying downtime as specified in your service agreement.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Support</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Support is provided according to the terms specified in your service agreement. 
                      Emergency support is available 24/7 for critical issues.
                    </p>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3 text-cyan-400" />
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  To the maximum extent permitted by law, Zion Tech Group shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                  <li>Loss of profits, data, or business opportunities</li>
                  <li>Service interruptions or downtime</li>
                  <li>Third-party actions or content</li>
                  <li>Security breaches or data loss</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Our total liability shall not exceed the amount paid by you for the Services in the 12 months 
                  preceding the claim.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Termination</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Termination by You</h3>
                    <p className="text-gray-300 leading-relaxed">
                      You may terminate your use of our Services at any time by providing 30 days' written notice. 
                      Upon termination, your access to our Services will be discontinued.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">Termination by Us</h3>
                    <p className="text-gray-300 leading-relaxed">
                      We may terminate or suspend your access to our Services immediately if you breach these Terms 
                      or for any other reason at our sole discretion.
                    </p>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, 
                  United States, without regard to conflict of law principles. Any disputes arising from these Terms 
                  shall be resolved in the courts of Delaware.
                </p>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-white/10">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Contact Us About Terms
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
