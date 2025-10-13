import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Shield, Zap, CheckCircle, Star, Server, Database, Globe, Lock, Users, Clock } from "lucide-react";

export default function CloudInfrastructure() {
  const features = [
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Multi-Cloud Strategy",
      description: "Optimize costs and performance with AWS, Azure, and Google Cloud Platform integration"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption, compliance, and threat monitoring"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Auto-Scaling",
      description: "Automatically scale resources based on demand to optimize costs and performance"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Database Management",
      description: "Managed database services with backup, recovery, and optimization"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global CDN",
      description: "Content delivery network for fast, reliable access worldwide"
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions"
    }
  ];

  const benefits = [
    "Reduce infrastructure costs by up to 40%",
    "Improve application performance by 60%",
    "Achieve 99.9% uptime guarantee",
    "Scale resources automatically with demand",
    "Enhance security with enterprise-grade protection",
    "Reduce deployment time by 80%"
  ];

  const pricing = {
    basic: "From $1,200/month",
    professional: "From $2,500/month",
    enterprise: "Custom pricing"
  };

  const services = [
    "Cloud Migration & Strategy",
    "Infrastructure as Code (IaC)",
    "Container Orchestration (Kubernetes)",
    "Serverless Architecture",
    "Database as a Service (DBaaS)",
    "Cloud Security & Compliance",
    "Cost Optimization",
    "24/7 Monitoring & Support"
  ];

  return (
    <>
      <Helmet>
        <title>Cloud Infrastructure Services - Zion Tech Group | Enterprise Cloud Solutions</title>
        <meta
          name="description"
          content="Transform your business with our cloud infrastructure services. AWS, Azure, Google Cloud solutions with enterprise security and 24/7 support. Starting from $1,200/month."
        />
        <meta
          name="keywords"
          content="cloud infrastructure, AWS, Azure, Google Cloud, cloud migration, cloud security, enterprise cloud solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <Cloud className="w-6 h-6 text-green-400" />
                  <span className="text-green-400 font-semibold">Cloud Infrastructure Services</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Scalable Cloud
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                    {" "}Infrastructure
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8">
                  Build, deploy, and manage robust cloud infrastructure that scales with your business. 
                  Our expert team provides end-to-end cloud solutions with enterprise-grade security and performance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Schedule Demo
                  </Link>
                </div>
                <div className="mt-6 flex items-center space-x-6 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>24/7 support</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-white mb-2">From $1,200</div>
                    <div className="text-gray-300">per month</div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Multi-Cloud Support</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Auto-Scaling</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Enterprise Security</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">24/7 Monitoring</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Disaster Recovery</span>
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Cloud Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From migration to optimization, we provide everything you need for a successful cloud transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Cloud Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end cloud infrastructure services designed to meet your specific business requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300"
                >
                  <div className="text-white font-semibold">{service}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Why Choose Our Cloud Solutions?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Our cloud infrastructure services deliver measurable results and help you achieve your business goals.
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300 text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
                  <div className="text-gray-300">Performance Boost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">80%</div>
                  <div className="text-gray-300">Faster Deployment</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Flexible Pricing Options
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that best fits your business needs and budget.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
                <div className="text-3xl font-bold text-green-400 mb-6">{pricing.basic}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Single cloud provider</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Basic monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Email support</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-green-400/50 ring-2 ring-green-400/20 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-3xl font-bold text-green-400 mb-6">{pricing.professional}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Multi-cloud support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Advanced monitoring</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Auto-scaling</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-green-400 mb-6">{pricing.enterprise}</div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Custom solutions</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">SLA guarantee</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">On-premise hybrid</span>
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="block w-full text-center border border-green-400 text-green-400 px-6 py-3 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our cloud experts help you build a scalable, secure, and cost-effective infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}