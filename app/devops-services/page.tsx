import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Server, Globe, Shield, Monitor, Settings } from 'lucide-react';

const DevOpsServicesPage: React.FC = () => {
  const services = [
    {
      title: "CI/CD Pipeline Setup",
      description: "Automate your development workflow with continuous integration and deployment pipelines for faster, more reliable releases.",
      icon: <Zap className="w-6 h-6" />,
      features: ["Automated testing", "Code quality checks", "Deployment automation", "Rollback capabilities"]
    },
    {
      title: "Infrastructure as Code",
      description: "Manage your infrastructure using code with tools like Terraform, Ansible, and CloudFormation for consistency and scalability.",
      icon: <Server className="w-6 h-6" />,
      features: ["Terraform automation", "Configuration management", "Version control", "Environment consistency"]
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage containerized applications with Kubernetes, Docker Swarm, or other orchestration platforms.",
      icon: <Globe className="w-6 h-6" />,
      features: ["Kubernetes deployment", "Container management", "Auto-scaling", "Service mesh"]
    },
    {
      title: "Security & Compliance",
      description: "Implement security best practices and ensure compliance with industry standards and regulations.",
      icon: <Shield className="w-6 h-6" />,
      features: ["Security scanning", "Compliance monitoring", "Access control", "Audit logging"]
    },
    {
      title: "Monitoring & Observability",
      description: "Set up comprehensive monitoring, logging, and alerting systems for better visibility into your applications.",
      icon: <Monitor className="w-6 h-6" />,
      features: ["Application monitoring", "Infrastructure monitoring", "Log aggregation", "Alert management"]
    },
    {
      title: "Cloud Migration",
      description: "Migrate your applications and infrastructure to the cloud with minimal downtime and maximum efficiency.",
      icon: <Settings className="w-6 h-6" />,
      features: ["Cloud strategy", "Migration planning", "Data migration", "Performance optimization"]
    }
  ];

  const benefits = [
    "Faster deployment cycles",
    "Improved reliability and stability",
    "Reduced manual errors",
    "Better resource utilization",
    "Enhanced security posture",
    "Cost optimization"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>DevOps Services - Zion Tech Group</title>
        <meta name="description" content="Professional DevOps services for modern software development and deployment." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              DevOps Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Accelerate your software delivery with our comprehensive DevOps solutions. 
              We help you build, deploy, and scale applications with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
              >
                Start Your DevOps Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/consultation"
                className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our DevOps Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From CI/CD pipelines to cloud migration, we provide end-to-end DevOps solutions 
              tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="text-blue-400 mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose Our DevOps Services?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience the benefits of modern DevOps practices with our expert guidance and support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your DevOps?</h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how our DevOps services can help you achieve faster, more reliable software delivery.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Start Your DevOps Journey
            </Link>
            <Link
              to="/consultation"
              className="border border-blue-500 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-500/10 transition-all duration-300"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOpsServicesPage;