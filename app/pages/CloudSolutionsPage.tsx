import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CloudIcon,
  ServerIcon,
  CogIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowUpIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const cloudServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration of your applications and data to the cloud with minimal downtime.",
      icon: ArrowUpIcon,
      features: ["Zero-Downtime Migration", "Data Integrity", "Performance Optimization", "Cost Reduction"]
    },
    {
      title: "Infrastructure as Code",
      description: "Automated infrastructure provisioning and management using modern IaC practices.",
      icon: CogIcon,
      features: ["Terraform", "Ansible", "Automated Deployments", "Version Control"]
    },
    {
      title: "Auto-scaling",
      description: "Dynamic scaling solutions that automatically adjust resources based on demand.",
      icon: ChartBarIcon,
      features: ["Horizontal Scaling", "Vertical Scaling", "Load Balancing", "Cost Optimization"]
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions to ensure business continuity.",
      icon: ShieldCheckIcon,
      features: ["Automated Backups", "RTO/RPO Optimization", "Multi-Region Setup", "Testing & Validation"]
    },
    {
      title: "Cost Optimization",
      description: "Cloud cost management and optimization to reduce expenses while maintaining performance.",
      icon: ChartBarIcon,
      features: ["Resource Right-sizing", "Reserved Instances", "Spot Instances", "Cost Monitoring"]
    },
    {
      title: "Multi-cloud Strategy",
      description: "Hybrid and multi-cloud solutions to avoid vendor lock-in and optimize performance.",
      icon: CloudIcon,
      features: ["Vendor Neutrality", "Best-of-Breed Solutions", "Risk Mitigation", "Flexibility"]
    }
  ];

  const cloudProviders = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "IBM Cloud",
    "Oracle Cloud",
    "DigitalOcean"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cloud solutions including migration, infrastructure as code, auto-scaling, and disaster recovery." />
        <meta name="keywords" content="cloud solutions, cloud migration, infrastructure as code, auto-scaling, disaster recovery, AWS, Azure, GCP" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cloud Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Scalable, secure, and cost-effective cloud infrastructure for modern businesses
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              Our cloud solutions help businesses leverage the power of cloud computing to improve 
              performance, reduce costs, and scale efficiently while maintaining security and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Cloud Services Grid */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cloud Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              End-to-end cloud solutions designed to optimize your infrastructure and operations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cloudServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.title}
                  className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold group-hover:gap-3 transition-all"
                  >
                    Get Started <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cloud Providers Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cloud Providers We Work With
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're certified experts in all major cloud platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {cloudProviders.map((provider, index) => (
              <div 
                key={provider}
                className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 rounded-lg border border-slate-600 text-center hover:border-green-500 transition-all duration-300"
              >
                <CloudIcon className="w-8 h-8 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white">{provider}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Cloud Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A proven methodology for successful cloud transformation
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Assessment</h3>
              <p className="text-gray-300">
                We analyze your current infrastructure and identify cloud migration opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Planning</h3>
              <p className="text-gray-300">
                We develop a comprehensive cloud strategy and migration roadmap.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Migration</h3>
              <p className="text-gray-300">
                We execute the migration with minimal downtime and maximum data integrity.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Optimization</h3>
              <p className="text-gray-300">
                We continuously optimize your cloud infrastructure for performance and cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-green-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Let us help you leverage the power of cloud computing to transform your business
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Start Cloud Journey
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                to="/demo" 
                className="border-2 border-green-400 text-green-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Demo
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-green-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-green-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}