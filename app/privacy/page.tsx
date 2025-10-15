import React from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Lock, Eye, FileText, CheckCircle, ArrowRight } from "lucide-react"; const PrivacyPage: React.FC = () => { const privacySections = [ { icon: <Shield className="w-6 h-6" />, title: "Information We Collect", content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide." }, { icon: <Eye className="w-6 h-6" />, title: "How We Use Your Information", content: "We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers." }, { icon: <Lock className="w-6 h-6" />, title: "Information Sharing", content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with trusted third parties who assist us in operating our website and conducting our business." }, { icon: <FileText className="w-6 h-6" />, title: "Data Security", content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure." } ]; const rights = [ "Access your personal information", "Correct inaccurate data", "Request deletion of your data", "Object to processing of your data", "Data portability", "Withdraw consent at any time" ]; return ( <> <Helmet> <title>Privacy Policy - Zion Tech Group | Data Protection & Privacy</title> <meta name="description" content="Learn about Zion Tech Group's privacy policy, data protection practices, and how we handle your personal information." /> <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" /> <meta property="og:title" content="Privacy Policy - Zion Tech Group" /> <meta property="og:description" content="Our commitment to protecting your privacy and personal information." /> <meta property="og:type" content="website" /> </Helmet> <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        { /* Hero Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Policy</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
              </p>
              <div className="text-sm text-gray-400">
                Last updated: { new Date().toLocaleDateString() }
              </div>
            </div>
          </div>
        </section>
        { /* Privacy Sections */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              { privacySections.map((section, index) => (
                <div key={index } className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-white">{ section.icon }</div>
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white mb-4">{ section.title }</h2>
                      <p className="text-gray-300 leading-relaxed">{ section.content }</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        { /* Your Rights Section */ }
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Your Rights</h2>
                <p className="text-xl text-gray-300">
                  You have certain rights regarding your personal information under applicable data protection laws.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                { rights.map((right, index) => (
                  <div key={index } className="flex items-center space-x-3 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-4 rounded-lg border border-cyan-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{ right }</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        { /* Contact Section */ }
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Questions About Privacy?</h2>
              <p className="text-xl text-gray-300 mb-8">
                If you have any questions about this privacy policy or our data practices, please contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 mr-2" />
                  Contact Privacy Team
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default PrivacyPage;