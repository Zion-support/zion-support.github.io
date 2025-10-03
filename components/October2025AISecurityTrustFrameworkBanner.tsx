import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Zap, ArrowRight, Eye, CheckCircle } from 'lucide-react';

const October2025AISecurityTrustFrameworkBanner: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-900 to-zinc-900 text-white">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff), linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 75%, #ffffff 75%, #ffffff)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* NEW Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-6 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg animate-pulse">
            <Shield className="w-5 h-5 mr-2" />
            🔒 JUST PUBLISHED: October 1, 2025 - Enterprise AI Security Framework! 🔒
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Message */}
          <div>
            <h2 className="text-5xl font-extrabold mb-6 leading-tight">
              Enterprise AI Security & Trust Framework
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mt-2">
                Protect $847B in Enterprise Value
              </span>
            </h2>

            <p className="text-xl text-gray-200 mb-6 leading-relaxed">
              Build secure, compliant, and trustworthy AI systems at scale. Battle-tested across <span className="font-bold text-red-400">180+ Fortune 500 implementations</span> with <span className="font-bold text-red-400">99.97% threat prevention</span> and <span className="font-bold text-red-400">100% regulatory compliance</span>.
            </p>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-red-500/30">
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-red-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Threat Prevention</span>
                </div>
                <div className="text-3xl font-bold text-white">99.97%</div>
                <div className="text-xs text-gray-400 mt-1">Detection Rate</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-green-500/30">
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Compliance</span>
                </div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-xs text-gray-400 mt-1">Regulatory Success</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/30">
                <div className="flex items-center mb-2">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Response Time</span>
                </div>
                <div className="text-3xl font-bold text-white">&lt;2s</div>
                <div className="text-xs text-gray-400 mt-1">Threat Detection</div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-blue-500/30">
                <div className="flex items-center mb-2">
                  <Lock className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm font-semibold text-gray-300">Breaches</span>
                </div>
                <div className="text-3xl font-bold text-white">Zero</div>
                <div className="text-xs text-gray-400 mt-1">In Production</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/blog/ai-2025-oct-01-enterprise-ai-security-trust-framework"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-lg hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-red-500/50 transform hover:scale-105"
              >
                Read Full Framework
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 border-2 border-white/30 hover:border-white/50"
              >
                Schedule Security Assessment
                <Shield className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Right Column - Feature Highlights */}
          <div className="space-y-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-red-500/30 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Shield className="w-8 h-8 text-red-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Zero-Trust AI Architecture</h3>
                  <p className="text-gray-300">
                    Defense-in-depth strategy with 5 security layers, quantum-safe encryption, and continuous verification
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Eye className="w-8 h-8 text-green-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Privacy-Preserving AI</h3>
                  <p className="text-gray-300">
                    Differential privacy, homomorphic encryption, federated learning with complete data protection
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Lock className="w-8 h-8 text-blue-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Model Security & Robustness</h3>
                  <p className="text-gray-300">
                    Adversarial defense, model integrity verification, attack detection with 99.97% accuracy
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:bg-white/15 transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-8 h-8 text-purple-400" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">Automated Compliance Engine</h3>
                  <p className="text-gray-300">
                    EU AI Act, NIST AI RMF, GDPR, HIPAA - 180+ regulatory frameworks with automated reporting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-red-400">12M+</div>
              <div className="text-sm text-gray-300 mt-1">Threats Blocked Daily</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">$847B</div>
              <div className="text-sm text-gray-300 mt-1">Value Protected</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">99.99%</div>
              <div className="text-sm text-gray-300 mt-1">System Availability</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-400">87%</div>
              <div className="text-sm text-gray-300 mt-1">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default October2025AISecurityTrustFrameworkBanner;
