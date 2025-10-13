import { ArrowRight, Server, Brain, Shield, Zap, Globe, Star, Users, Award, CheckCircle, TrendingUp, Clock, Database, HardDrive, Target, Settings } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import ResponsiveContainer from '../components/ResponsiveContainer';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const DataCenterServices = () => {
  const features = [
    {
      title: "Infrastructure Management",
      description: "Complete data center infrastructure setup and management",
      icon: <Server className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Migration",
      description: "Seamless migration to cloud infrastructure and hybrid solutions",
      icon: <Globe className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring and maintenance of your systems",
      icon: <Clock className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions",
      icon: <Shield className="w-6 h-6" />,
    "99.9% uptime guarantee",
    "24/7 expert support",
    "Scalable infrastructure",
    "Advanced security",
    "Cost optimization",
    "Compliance assurance"
        title="Data Center Services - Enterprise Infrastructure Solutions | Zion Tech Group"
        description="Reliable data center services for your business. Infrastructure management, cloud migration, monitoring, and disaster recovery solutions."
        keywords="data center services, infrastructure management, cloud migration, server management, disaster recovery, enterprise hosting"
            <Server className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise Infrastructure</span>
            Reliable data center services for your business. 
            Infrastructure management, cloud migration, and 24/7 monitoring for maximum uptime.
              icon={<ArrowRight className="w-5 h-5" />}
            >
              Get Started Today
              icon={<Server className="w-5 h-5" />}
            >
              View Solutions
              Comprehensive Data Center Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to run your business infrastructure reliably and efficiently.
              <FuturisticCard
import React from 'react';

export default function PagePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Page</h1>
        <p className="text-gray-300 text-lg">
          This page is under development.
        </p>
      </div>
    </div>
  );
}
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm md:text-base">
                  {feature.description}
                </p>
              </FuturisticCard>
        <ResponsiveContainer>
          <div className="text-center mb-16">"
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Data Center Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience reliable infrastructure that keeps your business running smoothly.
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
              Ready to Optimize Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join leading companies using our data center services to power their business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Start Your Project.
              </FuturisticButton>
              <FuturisticButton
                href="/pricing"
                variant="outline"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                View Pricing.
              </FuturisticButton>
            </div>
          </div>
        </ResponsiveContainer>
export default DataCenterServices;
