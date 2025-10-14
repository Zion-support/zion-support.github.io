import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const itSolutions = [
    {
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure setup, maintenance, and optimization for maximum performance.",
      icon: CpuChipIcon,
      features: [
        "Server Configuration",
        "Network Setup",
        "Hardware Maintenance",
        "Performance Monitoring"
      ],
      pricing: "Starting at $2,500/month",
      benefits: ["99.9% uptime", "Scalable infrastructure", "Cost optimization"],
      useCases: ["Enterprise", "SMB", "Startups"],
      href: "/infrastructure-management"
    },
    {
      title: "Cloud Solutions",
      description: "Migrate to the cloud and optimize your cloud infrastructure for scalability and cost-effectiveness.",
      icon: CloudIcon,
      features: [
        "Cloud Migration",
        "Multi-cloud Strategy",
        "Cost Optimization",
        "Disaster Recovery"
      ],
      pricing: "Starting at $1,800/month",
      benefits: ["Scalability", "Cost savings", "Global reach"],
      useCases: ["E-commerce", "SaaS", "Enterprise"],
      href: "/cloud-solutions"
    },
    {
      title: "Cybersecurity Services",
      description: "Protect your business with comprehensive security solutions and threat monitoring.",
      icon: ShieldCheckIcon,
      features: [
        "Security Audits",
        "Threat Detection",
        "Incident Response",
        "Compliance Management"
      ],
      pricing: "Starting at $3,200/month",
      benefits: ["Advanced protection", "24/7 monitoring", "Compliance ready"],
      useCases: ["Financial", "Healthcare", "E-commerce"],
      href: "/cybersecurity"
    },
    {
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and reporting.",
      icon: ChartBarIcon,
      features: [
        "Data Analysis",
        "Business Intelligence",
        "Predictive Analytics",
        "Custom Dashboards"
      ],
      pricing: "Starting at $2,200/month",
      benefits: ["Data-driven decisions", "Real-time insights", "Competitive advantage"],
      useCases: ["Retail", "Manufacturing", "Services"],
      href: "/data-analytics"
    },
    {
      title: "IT Support & Maintenance",
      description: "24/7 technical support and maintenance services to keep your systems running smoothly.",
      icon: RocketLaunchIcon,
      features: [
        "Remote Support",
        "On-site Service",
        "Preventive Maintenance",
        "Emergency Response"
      ],
      pricing: "Starting at $1,500/month",
      benefits: ["Minimal downtime", "Expert support", "Proactive maintenance"],
      useCases: ["All industries", "Remote teams", "Growing businesses"],
      href: "/it-support"
    },
    {
      title: "IT Compliance",
      description: "Ensure your IT systems meet industry standards and regulatory requirements.",
      icon: GlobeAltIcon,
      features: [
        "Compliance Audits",
        "Policy Development",
        "Risk Assessment",
        "Training Programs"
      ],
      pricing: "Starting at $2,800/month",
      benefits: ["Full compliance", "Risk mitigation", "Audit readiness"],
      useCases: ["SOX compliance", "GDPR compliance", "HIPAA compliance"],
      href: "/it-compliance"
    }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure management, cloud services, cybersecurity, and technical support for businesses of all sizes." />
        <meta name="keywords" content="IT solutions, infrastructure management, cloud services, cybersecurity, IT support, data analytics" />
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT services to keep your business running smoothly and securely
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From infrastructure management to cybersecurity, our expert IT team provides 
                the support and solutions your business needs to thrive in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {itSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div 
                    key={solution.title}
                    className="group bg-slate-800/50 p-8 rounded-xl hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-blue-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{solution.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Features:</h4>
                      <ul className="space-y-1">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-sm text-gray-300 flex items-center">
                            <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <div className="text-2xl font-bold text-green-400 mb-2">{solution.pricing}</div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-400 mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <span key={benefitIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        to={solution.href}
                        className="flex-1 inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-semibold group-hover:gap-3 transition-all border border-current px-4 py-2 rounded-lg"
                      >
                        Learn More <ArrowRightIcon className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-700 hover:to-cyan-700 font-semibold px-4 py-2 rounded-lg transition-all"
                      >
                        Get Started
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-blue-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Ready to Optimize Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Let our expert IT team help you build a robust, secure, and scalable technology foundation
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get IT Consultation
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}