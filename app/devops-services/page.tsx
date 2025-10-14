import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Server, Cloud, Zap, Shield, BarChart3 } from "lucide-react";

export default function DevOpsServices() {
  const services = [
    {
      icon: <Code className="w-8 h-8 text-blue-500" />,
      title: "CI/CD Pipeline Setup",
      description: "Automated build, test, and deployment pipelines for faster and more reliable releases."
    },
    {
      icon: <Server className="w-8 h-8 text-green-500" />,
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with tools like Terraform and CloudFormation."
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-500" />,
      title: "Cloud Migration",
      description: "Seamlessly migrate your applications to cloud platforms with zero downtime."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: "Performance Optimization",
      description: "Optimize your applications and infrastructure for maximum performance and efficiency."
    },
    {
      icon: <Shield className="w-8 h-8 text-red-500" />,
      title: "Security & Compliance",
      description: "Implement security best practices and ensure compliance with industry standards."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
      title: "Monitoring & Analytics",
      description: "Comprehensive monitoring and analytics to keep your systems running smoothly."
    }
  ];

  return (
    <>
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services including CI/CD, infrastructure automation, cloud migration, and monitoring solutions." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                DevOps
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {" "}Services
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accelerate your development lifecycle with our comprehensive DevOps solutions. 
                From CI/CD pipelines to cloud infrastructure, we help you deploy faster and more reliably.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our DevOps Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive DevOps solutions to streamline your development and deployment processes
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-16 bg-gradient-to-r from-blue-500/20 to-purple-600/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your DevOps?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let our DevOps experts help you build, deploy, and scale your applications with confidence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your DevOps Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}