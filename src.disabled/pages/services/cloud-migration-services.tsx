import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Cloud, 
  ArrowRight, 
  Shield, 
  Zap, 
  CheckCircle, 
  Star, 
  Play,
  DollarSign,
  Clock,
  Target,
  Globe,
  Users,
  BarChart3,
  Settings
} from 'lucide-react';

export default function CloudMigrationServices() {
  return (
    <>
      <Helmet>
        <title>Cloud Migration Services - Zion Tech Group</title>
        <meta name="description" content="Expert cloud migration services for AWS, Azure, and GCP. Seamless migration with zero downtime and 50% cost reduction. 24/7 support included." />
        <meta name="keywords" content="cloud migration, AWS migration, Azure migration, GCP migration, cloud consulting, infrastructure migration, cloud services" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-600/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
                <Cloud className="w-4 h-4 mr-2" />
                Cloud Migration Services
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Expert Cloud
                <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"> Migration</span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Seamlessly migrate your infrastructure to AWS, Azure, or GCP with zero downtime. 
                Our certified experts ensure 50% cost reduction and improved performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Free Assessment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200">
                  <Play className="mr-2 w-5 h-5" />
                  Watch Case Study
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Migration Solutions
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Our cloud migration services cover every aspect of your infrastructure transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Cloud,
                  title: "AWS Migration",
                  description: "Complete migration to Amazon Web Services with optimization and cost management.",
                  price: "From $5,000"
                },
                {
                  icon: Shield,
                  title: "Azure Migration",
                  description: "Microsoft Azure migration with enterprise security and compliance.",
                  price: "From $4,500"
                },
                {
                  icon: Zap,
                  title: "GCP Migration",
                  description: "Google Cloud Platform migration with AI and ML optimization.",
                  price: "From $4,000"
                },
                {
                  icon: Settings,
                  title: "Hybrid Cloud Setup",
                  description: "Multi-cloud and hybrid cloud architecture design and implementation.",
                  price: "From $7,500"
                },
                {
                  icon: BarChart3,
                  title: "Cost Optimization",
                  description: "Cloud cost analysis and optimization to reduce expenses by 50%.",
                  price: "From $2,500"
                },
                {
                  icon: Globe,
                  title: "Global Deployment",
                  description: "Multi-region cloud deployment with CDN and edge computing.",
                  price: "From $6,000"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-300 mb-3">{feature.description}</p>
                  <div className="text-blue-400 font-semibold">{feature.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Migration Process
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                A proven 6-step process that ensures successful cloud migration with minimal risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Planning",
                  description: "Comprehensive analysis of your current infrastructure and migration requirements."
                },
                {
                  step: "02",
                  title: "Architecture Design",
                  description: "Design optimal cloud architecture tailored to your business needs."
                },
                {
                  step: "03",
                  title: "Security Planning",
                  description: "Implement security best practices and compliance requirements."
                },
                {
                  step: "04",
                  title: "Migration Execution",
                  description: "Seamless migration with zero downtime and data integrity."
                },
                {
                  step: "05",
                  title: "Testing & Validation",
                  description: "Comprehensive testing to ensure everything works perfectly."
                },
                {
                  step: "06",
                  title: "Optimization & Support",
                  description: "Performance optimization and ongoing 24/7 support."
                }
              ].map((process, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">{process.title}</h3>
                  </div>
                  <p className="text-slate-300">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Cloud Migration Services?
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Join 1,000+ businesses that have successfully migrated to the cloud with us.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: DollarSign,
                  title: "50% Cost Reduction",
                  description: "Optimized cloud resources reduce operational costs"
                },
                {
                  icon: Clock,
                  title: "Zero Downtime",
                  description: "Seamless migration with no business interruption"
                },
                {
                  icon: Shield,
                  title: "Enterprise Security",
                  description: "Bank-level security and compliance standards"
                },
                {
                  icon: Users,
                  title: "24/7 Support",
                  description: "Round-the-clock expert support and monitoring"
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-600/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Migrate to the Cloud?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Get a free cloud migration assessment and cost analysis today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border border-blue-500/30 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 transition-all duration-200"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <p className="text-slate-400 mt-4">
              Questions? Email us at <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300">kleber@ziontechgroup.com</a>
            </p>
          </div>
        </section>
      </div>
    </>
  );
}