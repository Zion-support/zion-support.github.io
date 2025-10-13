<<<<<<< HEAD
import { ArrowRight, BarChart3, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Database, HardDrive, Target, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const AssetManagement = () => {
  const features = [
    {
      title: "IT Asset Tracking",
      description: "Comprehensive tracking and management of all IT assets",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lifecycle Management",
      description: "Track assets from procurement to disposal with full lifecycle visibility",
      icon: <Clock className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Automated Discovery",
      description: "Automatically discover and catalog assets across your network",
      icon: <Zap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance Reporting",
      description: "Generate compliance reports and audit trails automatically",
      icon: <Shield className="w-6 h-6" />,
    "Complete asset visibility",
    "Automated discovery",
    "Lifecycle tracking",
    "Compliance reporting",
    "Cost optimization",
    "Risk management"
        title="Asset Management - IT Asset Lifecycle Solutions | Zion Tech Group"
        description="Streamline your IT asset management with comprehensive tracking, lifecycle management, and automated discovery solutions."
        keywords="asset management, IT asset tracking, lifecycle management, compliance reporting, asset discovery, IT inventory"
            <BarChart3 className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Asset Lifecycle Management</span>
            Streamline your IT asset management with comprehensive tracking and lifecycle management. 
            Get complete visibility and control over all your technology assets.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<BarChart3 className="w-5 h-5" />}
            >
              View Demo
              Comprehensive Asset Management
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to manage your IT assets efficiently and cost-effectively.
              <FuturisticCard
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Asset Management?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience efficient asset management that saves time and reduces costs.
              <div key={index} className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-12">"
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your Assets?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our asset management solutions to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project;
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing;
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
export default AssetManagement;
=======
'use client';
import React from 'react';

export default function AssetManagementPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Asset Management</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-1a0a
