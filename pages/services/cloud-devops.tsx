import React from 'react';
import Layout from '../../components/Layout';
import { Cloud, Server, Database, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    title: "Cloud Migration",
    description: "Seamlessly migrate your infrastructure to the cloud with zero downtime",
    icon: Cloud,
    features: ["AWS Migration", "Azure Migration", "GCP Migration", "Hybrid Cloud Setup"]
  },
  {
    title: "DevOps Implementation",
    description: "Streamline your development and deployment processes",
    icon: Server,
    features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"]
  },
  {
    title: "Database Management",
    description: "Optimize and manage your databases for peak performance",
    icon: Database,
    features: ["Database Design", "Performance Tuning", "Backup & Recovery", "Data Migration"]
  },
  {
    title: "Security & Compliance",
    description: "Ensure your cloud infrastructure meets security standards",
    icon: Shield,
    features: ["Security Audits", "Compliance Management", "Access Control", "Threat Detection"]
  }
];

const benefits = [
  "99.9% Uptime Guarantee",
  "24/7 Monitoring & Support",
  "Automated Scaling",
  "Cost Optimization",
  "Enhanced Security",
  "Faster Deployment"
];

export default function CloudDevOpsPage() {
  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Expert cloud migration, DevOps implementation, and infrastructure management services. Transform your IT operations with our proven methodologies."
      keywords="cloud migration, devops, infrastructure, AWS, Azure, GCP, CI/CD, containerization"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cloud & DevOps
                <span className="block text-blue-400">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Accelerate your digital transformation with our comprehensive cloud migration and DevOps services
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Get Free Consultation
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From cloud migration to DevOps implementation, we provide end-to-end solutions to modernize your infrastructure
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud & DevOps Services?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We deliver measurable results that drive business growth and operational efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let our experts help you migrate to the cloud and implement DevOps best practices
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Start Your Migration
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}