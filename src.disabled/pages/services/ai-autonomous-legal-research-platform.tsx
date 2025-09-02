import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Search, 
  FileText, 
  Scale, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  BookOpen,
  Gavel,
  Library,
  Target,
  BarChart3,
  Clock,
  DollarSign,
  Star,
  Award,
  Globe,
  Lock,
  Database,
  Cloud,
  Smartphone,
  Monitor,
  Server,
  Network,
  Cpu,
  Workflow,
  MessageCircle,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AIAutonomousLegalResearchPlatform() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Helmet>
        <title>AI Autonomous Legal Research Platform | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered legal research platform that autonomously analyzes case law, statutes, and legal documents with unprecedented accuracy and speed." />
        <meta name="keywords" content="AI legal research, autonomous legal analysis, legal AI platform, case law analysis, legal document review, AI law firm solutions" />
        <link rel="canonical" href="https://ziontechgroup.com/services/ai-autonomous-legal-research-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                <Gavel className="w-12 h-12 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Autonomous Legal Research Platform
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Revolutionizing legal research with autonomous AI that analyzes case law, statutes, and legal documents with unprecedented accuracy and speed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                View Pricing
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Revolutionary Legal Research Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI platform transforms legal research from hours to minutes, providing comprehensive analysis and insights.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Search className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Autonomous Case Analysis</h3>
              <p className="text-gray-300">
                AI autonomously analyzes case law, identifies relevant precedents, and extracts key legal principles with 99.7% accuracy.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Brain className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Intelligent Document Review</h3>
              <p className="text-gray-300">
                Advanced NLP algorithms review legal documents, contracts, and agreements, highlighting potential issues and risks.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Predictive Legal Insights</h3>
              <p className="text-gray-300">
                Machine learning models predict case outcomes, settlement probabilities, and legal strategy recommendations.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                <Database className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Comprehensive Legal Database</h3>
              <p className="text-gray-300">
                Access to millions of cases, statutes, regulations, and legal documents from federal and state jurisdictions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Compliance Monitoring</h3>
              <p className="text-gray-300">
                Real-time monitoring of regulatory changes and compliance requirements across multiple jurisdictions.
              </p>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                <Workflow className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Automated Workflow</h3>
              <p className="text-gray-300">
                Streamlined legal research workflows with automated citation checking, document generation, and report creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our AI Legal Research Platform?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform your legal practice with cutting-edge AI technology that delivers unprecedented efficiency and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-green-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">90% Time Savings</h3>
                    <p className="text-gray-300">Reduce legal research time from hours to minutes with autonomous AI analysis.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">99.7% Accuracy Rate</h3>
                    <p className="text-gray-300">Industry-leading accuracy in legal document analysis and case law interpretation.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">24/7 Availability</h3>
                    <p className="text-gray-300">Access legal research capabilities anytime, anywhere with cloud-based platform.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cost Reduction</h3>
                    <p className="text-gray-300">Significantly reduce legal research costs while improving quality and efficiency.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Platform Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">10M+</div>
                  <div className="text-gray-300">Legal Documents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">50+</div>
                  <div className="text-gray-300">Jurisdictions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">99.7%</div>
                  <div className="text-gray-300">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">90%</div>
                  <div className="text-gray-300">Time Savings</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Transparent Pricing Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your legal practice needs and scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$299</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 100 research queries/month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Basic case law analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Document review (up to 50 pages)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Email support</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Professional Plan */}
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 p-8 rounded-xl border-2 border-blue-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">$799</div>
                <div className="text-gray-400">per month</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Up to 1,000 research queries/month</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Advanced case law analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Unlimited document review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Predictive legal insights</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">API access</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Get Started
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600 hover:border-blue-500 transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-blue-400 mb-2">Custom</div>
                <div className="text-gray-400">contact us</div>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Unlimited research queries</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Full platform access</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom integrations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Dedicated support team</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">On-premise deployment</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-gray-300">Custom training</span>
                </li>
              </ul>

              <button className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ideal for Various Legal Practice Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From solo practitioners to large law firms, our platform adapts to your specific legal needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-blue-500/20 rounded-lg w-fit mb-4">
                <Scale className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Litigation</h3>
              <p className="text-gray-300">
                Comprehensive case research, precedent analysis, and strategy development for litigation matters.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-green-500/20 rounded-lg w-fit mb-4">
                <FileText className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Contract Law</h3>
              <p className="text-gray-300">
                Automated contract review, risk assessment, and compliance checking for various contract types.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4">
                <Target className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Corporate Law</h3>
              <p className="text-gray-300">
                Regulatory compliance monitoring, corporate governance analysis, and legal risk assessment.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-orange-500/20 rounded-lg w-fit mb-4">
                <Shield className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Compliance</h3>
              <p className="text-gray-300">
                Real-time regulatory updates, compliance monitoring, and automated reporting capabilities.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-red-500/20 rounded-lg w-fit mb-4">
                <Users className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Employment Law</h3>
              <p className="text-gray-300">
                Employment case analysis, policy review, and compliance monitoring for HR departments.
              </p>
            </div>

            <div className="bg-slate-700/50 p-6 rounded-xl border border-slate-600">
              <div className="p-3 bg-cyan-500/20 rounded-lg w-fit mb-4">
                <Globe className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">International Law</h3>
              <p className="text-gray-300">
                Multi-jurisdictional research, international treaty analysis, and cross-border legal compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Legal Practice?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Schedule a demo today and discover how AI can revolutionize your legal research and document review processes.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <Phone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Phone</div>
                    <div className="text-gray-300">+1 302 464 0950</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Email</div>
                    <div className="text-gray-300">kleber@ziontechgroup.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700/50 p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Request Demo</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-white font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Company</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    placeholder="Tell us about your legal research needs"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                >
                  Request Demo
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Start Your AI-Powered Legal Research Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of legal professionals who have already transformed their practice with our AI platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started Now
            </a>
            <a 
              href="https://ziontechgroup.com" 
              className="px-8 py-4 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}