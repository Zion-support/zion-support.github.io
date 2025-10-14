import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Cloud,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Globe,
  BarChart3
} from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CloudMigrationProPage = () => {
  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-400" />,
      title: "Seamless Migration",
      description: "Zero-downtime migration to your preferred cloud platform with minimal disruption to your business operations."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Security First",
      description: "Enterprise-grade security measures throughout the migration process to protect your data and applications."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: "Performance Optimization",
      description: "Optimize your applications for cloud-native performance and scalability during the migration process."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
      title: "Cost Analysis",
      description: "Comprehensive cost analysis and optimization recommendations to maximize your cloud investment ROI."
    }
  ];

  const migrationSteps = [
    {
      step: "01",
      title: "Assessment & Planning",
      description: "Comprehensive analysis of your current infrastructure and creation of a detailed migration roadmap."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Custom migration strategy tailored to your business needs, timeline, and budget constraints."
    },
    {
      step: "03",
      title: "Pilot Migration",
      description: "Small-scale pilot migration to validate the strategy and identify potential issues early."
    },
    {
      step: "04",
      title: "Full Migration",
      description: "Complete migration of your infrastructure with continuous monitoring and optimization."
    },
    {
      step: "05",
      title: "Post-Migration Support",
      description: "Ongoing support and optimization to ensure your cloud environment performs at its best."
    }
  ];

  const benefits = [
    "Reduced infrastructure costs by up to 50%",
    "Improved scalability and flexibility",
    "Enhanced security and compliance",
    "Better disaster recovery capabilities",
    "Increased operational efficiency",
    "Access to latest cloud technologies"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Migration Pro - Zion Tech Group</title>
        <meta name="description" content="Professional cloud migration services for AWS, Azure, and Google Cloud. Seamless, secure, and cost-effective migration solutions." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, Google Cloud migration, cloud consulting" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <ResponsiveContainer>
            <div className="text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                Cloud Migration Pro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Seamlessly migrate your infrastructure to the cloud with our professional migration services. 
                Minimize downtime, maximize performance, and reduce costs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Start Migration
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </Link>
                <Link to="/case-studies">
                  <FuturisticButton variant="outline" size="lg">
                    View Case Studies
                  </FuturisticButton>
                </Link>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our Migration Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our expert team ensures a smooth, secure, and cost-effective migration to your preferred cloud platform.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Migration Process */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Migration Process</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A proven 5-step process that ensures successful cloud migration with minimal risk and maximum value.
              </p>
            </div>
            <div className="space-y-8">
              {migrationSteps.map((step, index) => (
                <div key={index} className="flex items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Migration Benefits</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Experience the advantages of cloud migration with our comprehensive approach to infrastructure modernization.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Migration Statistics</h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average Cost Reduction</span>
                    <span className="text-2xl font-bold text-green-400">50%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Migration Success Rate</span>
                    <span className="text-2xl font-bold text-blue-400">99.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Average Downtime</span>
                    <span className="text-2xl font-bold text-purple-400">&lt; 2 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Client Satisfaction</span>
                    <span className="text-2xl font-bold text-yellow-400">98%</span>
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
              <h2 className="text-4xl font-bold text-white mb-4">Ready to Migrate to the Cloud?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let our experts guide you through a successful cloud migration. 
                Contact us today for a free consultation and migration assessment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <FuturisticButton size="lg">
                    Get Free Consultation
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
};

export default CloudMigrationProPage;