import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Cloud,
  Shield,
  TrendingUp,
  Server,
  Zap,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Globe
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function CloudInfrastructureManagement() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: "Multi-Cloud Management",
      description: "Seamlessly manage infrastructure across AWS, Azure, Google Cloud, and private clouds",
    },
    {
      icon: <Shield className="w-6 h-6 text-purple-400" />,
      title: "Security & Compliance",
      description: "Enterprise-grade security with automated compliance monitoring and threat detection",
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-yellow-400" />,
      title: "Cost Optimization",
      description: "Reduce cloud costs by up to 40% with intelligent resource optimization and right-sizing",
    },
    {
      icon: <Server className="w-6 h-6 text-green-400" />,
      title: "24/7 Monitoring",
      description: "Proactive monitoring with automated scaling, performance optimization, and incident response",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "Auto-Scaling",
      description: "Automatically scale resources based on demand to ensure optimal performance and cost efficiency",
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
      title: "Analytics & Insights",
      description: "Advanced analytics to optimize infrastructure performance and make data-driven decisions",
    },
  ];

  const managementFeatures = [
    "Infrastructure as Code (IaC)",
    "Automated provisioning and deployment",
    "Real-time monitoring and alerting",
    "Disaster recovery and backup solutions",
    "Performance optimization",
    "Security hardening and compliance",
    "Cost management and optimization",
    "Multi-cloud orchestration"
  ];

  const stats = [
    { label: "Uptime", value: "99.9%" },
    { label: "Cost Savings", value: "40%" },
    { label: "Deployment Speed", value: "5x faster" },
    { label: "Security Incidents", value: "90% reduction" }
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Management - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud infrastructure management services for AWS, Azure, and Google Cloud. Optimize costs, security, and performance." />
        <meta name="keywords" content="cloud management, AWS, Azure, Google Cloud, infrastructure, DevOps, cloud optimization" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Cloud Infrastructure Management
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Optimize your cloud infrastructure with our comprehensive management services. 
                Reduce costs, improve security, and enhance performance across all major cloud platforms.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Comprehensive Cloud Management</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our cloud infrastructure management services cover all aspects of your cloud environment, 
                from security to cost optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Management Features */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">What We Manage</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our team handles every aspect of your cloud infrastructure, ensuring optimal performance, 
                  security, and cost efficiency.
                </p>
                <ul className="space-y-4">
                  {managementFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Why Choose Us?</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-blue-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">24/7 Support</h4>
                      <p className="text-gray-300">Round-the-clock monitoring and support for your infrastructure.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Users className="w-6 h-6 text-purple-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Expert Team</h4>
                      <p className="text-gray-300">Certified cloud architects and engineers with years of experience.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Multi-Cloud Expertise</h4>
                      <p className="text-gray-300">Experience across AWS, Azure, Google Cloud, and hybrid environments.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/20">
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Optimize Your Cloud?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our experts help you optimize your cloud infrastructure for better performance, 
                security, and cost efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/services">
                  <FuturisticButton variant="outline" size="lg">
                    View All Services
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
}