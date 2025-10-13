import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Cloud, Shield, Zap, ArrowRight, CheckCircle, Star, Users, Award, BarChart3 } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AiPoweredDevOpsPage = () => {
  return (
    <>
      <Helmet>
        <title>AI-Powered DevOps Solutions | Zion Tech Group</title>
        <meta name="description" content="Transform your DevOps with AI-powered automation, intelligent monitoring, and predictive analytics. Accelerate deployment cycles and improve system reliability." />
        <meta name="keywords" content="AI DevOps, automated deployment, intelligent monitoring, predictive analytics, CI/CD automation, infrastructure as code" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI-Powered <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">DevOps</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Transform your DevOps pipeline with intelligent automation, predictive analytics, and self-healing infrastructure
              </p>
              <FuturisticButton className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                Get Started Today
                <ArrowRight className="ml-2" />
              </FuturisticButton>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FuturisticCard className="p-6">
                <Code className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Intelligent CI/CD</h3>
                <p className="text-gray-300">
                  AI-driven continuous integration and deployment with automatic testing, code analysis, and deployment optimization.
                </p>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <Cloud className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Predictive Scaling</h3>
                <p className="text-gray-300">
                  Automatically scale your infrastructure based on AI predictions of traffic patterns and resource requirements.
                </p>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <Shield className="w-12 h-12 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Security Automation</h3>
                <p className="text-gray-300">
                  AI-powered security scanning, vulnerability detection, and automated remediation in your DevOps pipeline.
                </p>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Self-Healing Systems</h3>
                <p className="text-gray-300">
                  Automatically detect and resolve issues before they impact users with intelligent monitoring and remediation.
                </p>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <BarChart3 className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Performance Analytics</h3>
                <p className="text-gray-300">
                  Deep insights into system performance with AI-driven recommendations for optimization and improvement.
                </p>
              </FuturisticCard>

              <FuturisticCard className="p-6">
                <Users className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Team Collaboration</h3>
                <p className="text-gray-300">
                  Enhanced team productivity with AI-powered collaboration tools and intelligent workflow management.
                </p>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <ResponsiveContainer>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join leading organizations using AI to revolutionize their development and operations processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                  Start Free Trial
                </FuturisticButton>
                <FuturisticButton variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                  Schedule Demo
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default AiPoweredDevOpsPage;