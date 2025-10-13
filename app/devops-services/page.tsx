import { ArrowRight, Code, Cloud, Shield, Zap, Users, BarChart3, CheckCircle } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function DevOpsServicesPage() {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "CI/CD Pipeline Setup",
      description: "Automate your software delivery with robust continuous integration and deployment pipelines.",
      features: ["Automated testing", "Code quality checks", "Deployment automation", "Rollback capabilities"]
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Infrastructure as Code",
      description: "Manage your infrastructure with code for consistency, repeatability, and version control.",
      features: ["Terraform configurations", "CloudFormation templates", "Kubernetes manifests", "Environment management"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Integration",
      description: "Integrate security practices into your development workflow from the start.",
      features: ["SAST/DAST scanning", "Dependency checking", "Secrets management", "Compliance monitoring"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance Optimization",
      description: "Optimize your applications and infrastructure for maximum performance and efficiency.",
      features: ["Performance monitoring", "Resource optimization", "Load testing", "Capacity planning"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Training & Support",
      description: "Train your team on DevOps best practices and provide ongoing support.",
      features: ["DevOps training", "Tool adoption", "Process optimization", "24/7 support"]
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring and analytics to keep your systems healthy and performant.",
      features: ["Application monitoring", "Infrastructure metrics", "Log aggregation", "Alert management"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group | CI/CD, Infrastructure as Code, Cloud Solutions</title>
        <meta name="description" content="Professional DevOps services including CI/CD pipeline setup, infrastructure as code, security integration, and performance optimization. Transform your development workflow." />
        <meta name="keywords" content="DevOps services, CI/CD, infrastructure as code, cloud automation, deployment automation, monitoring, security integration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  DevOps Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your software delivery with our comprehensive DevOps solutions. 
                From CI/CD pipelines to infrastructure automation, we help you build, deploy, and scale faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our DevOps Solutions
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Comprehensive DevOps services designed to streamline your development workflow and accelerate delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="h-4 w-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your DevOps?
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Let our expert team help you implement DevOps best practices and accelerate your software delivery.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}