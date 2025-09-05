import React from 'react';
import Layout from '../../components/Layout';
import { Cloud, Server, Database, Shield, Zap, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Cloud,
    title: 'Cloud Migration',
    description: 'Seamless migration to AWS, Azure, or Google Cloud with zero downtime',
    features: ['Infrastructure as Code', 'Automated Deployment', 'Cost Optimization', 'Security Compliance']
  },
  {
    icon: Server,
    title: 'DevOps Automation',
    description: 'Complete CI/CD pipeline setup with automated testing and deployment',
    features: ['Jenkins/GitLab CI', 'Docker Containerization', 'Kubernetes Orchestration', 'Monitoring & Logging']
  },
  {
    icon: Database,
    title: 'Database Management',
    description: 'Scalable database solutions with high availability and performance',
    features: ['PostgreSQL/MySQL', 'MongoDB/Redis', 'Data Backup & Recovery', 'Performance Tuning']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Enterprise-grade security with compliance frameworks',
    features: ['SOC 2 Compliance', 'GDPR Compliance', 'Security Audits', 'Penetration Testing']
  }
];

const benefits = [
  '99.9% Uptime Guarantee',
  '24/7 Monitoring & Support',
  'Automated Scaling',
  'Cost Reduction up to 40%',
  'Faster Time to Market',
  'Enhanced Security Posture'
];

export default function CloudDevOpsPage() {
  return (
    <Layout
      title="Cloud & DevOps Services - Zion Tech Group"
      description="Transform your infrastructure with our comprehensive cloud and DevOps solutions. AWS, Azure, Google Cloud migration and automation services."
      keywords="cloud migration, devops, aws, azure, kubernetes, ci/cd, infrastructure automation"
    >
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Cloud & DevOps
                <span className="block text-blue-600">Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Accelerate your digital transformation with our comprehensive cloud infrastructure 
                and DevOps automation services. Scale efficiently, deploy faster, and maintain 
                enterprise-grade security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Cloud & DevOps Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions to modernize your infrastructure and streamline your development processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-blue-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
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
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Cloud & DevOps Solutions?
              </h2>
              <p className="text-xl text-gray-600">
                Proven expertise delivering enterprise-grade cloud infrastructure and DevOps automation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Zap className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-lg font-medium text-gray-900">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Infrastructure?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let our cloud and DevOps experts help you build a scalable, secure, and efficient infrastructure.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </section>
      </div>
    </Layout>
  );
}