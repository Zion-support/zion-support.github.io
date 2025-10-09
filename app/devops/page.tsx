'use client';
import React from 'react';
import { Settings, Target, BarChart, Zap, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const DevOpsPage: React.FC = () => {
  const devopsServices = [
    {
      title: 'CI/CD Pipeline Setup',
      description: 'Build automated continuous integration and deployment pipelines for faster, more reliable software delivery.',
      features: ['Automated Testing', 'Build Automation', 'Deployment Automation', 'Rollback Capabilities', 'Multi-environment Support'],
      benefits: ['Faster releases', 'Reduced errors', 'Improved quality', 'Team productivity']
    },
    {
      title: 'Container Orchestration',
      description: 'Implement and manage containerized applications with Kubernetes and Docker for scalable deployments.',
      features: ['Kubernetes Setup', 'Docker Implementation', 'Service Mesh', 'Auto-scaling', 'Health Monitoring'],
      benefits: ['Scalable infrastructure', 'Resource optimization', 'High availability', 'Easy management']
    },
    {
      title: 'Infrastructure as Code',
      description: 'Manage and provision infrastructure using code for consistent, repeatable, and version-controlled deployments.',
      features: ['Terraform', 'CloudFormation', 'Ansible', 'Version Control', 'State Management'],
      benefits: ['Consistent environments', 'Version control', 'Disaster recovery', 'Cost optimization']
    },
    {
      title: 'Monitoring & Observability',
      description: 'Implement comprehensive monitoring, logging, and alerting systems for better system visibility and reliability.',
      features: ['Application Monitoring', 'Infrastructure Monitoring', 'Log Aggregation', 'Alerting Systems', 'Dashboards'],
      benefits: ['Proactive issue detection', 'Better performance', 'Faster troubleshooting', 'Improved reliability']
    },
    {
      title: 'Security Integration',
      description: 'Integrate security practices into the development lifecycle with automated security scanning and compliance.',
      features: ['Security Scanning', 'Vulnerability Assessment', 'Compliance Automation', 'Secret Management', 'Policy Enforcement'],
      benefits: ['Enhanced security', 'Compliance readiness', 'Risk reduction', 'Automated protection']
    },
    {
      title: 'Cloud Migration',
      description: 'Migrate applications and infrastructure to cloud platforms with minimal downtime and maximum efficiency.',
      features: ['Cloud Strategy', 'Migration Planning', 'Data Migration', 'Application Modernization', 'Cost Optimization'],
      benefits: ['Scalability', 'Cost savings', 'Improved performance', 'Modern infrastructure']
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="DevOps & CI/CD Services - Automation & Cloud Solutions | Zion Tech Group"
        description="Expert DevOps services including CI/CD pipeline setup, container orchestration, infrastructure as code, and cloud migration. Accelerate your development lifecycle."
        keywords={['DevOps', 'CI/CD', 'container orchestration', 'infrastructure as code', 'cloud migration', 'automation', 'Kubernetes']}
        canonicalUrl="https://ziontechgroup.com/devops"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              DevOps & CI/CD Services
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
              Accelerate your development lifecycle with modern DevOps practices and automation
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto">
              Our DevOps experts help you build, deploy, and maintain applications faster and more reliably 
              with cutting-edge automation, containerization, and cloud technologies.
            </p>
          </section>

          {/* Services Grid */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {devopsServices.map((service, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <Settings className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 text-center neon-text">{service.title}</h3>
                  <p className="text-gray-300 mb-4 text-center text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-emerald-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-gray-300">
                          <ArrowRight className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* DevOps Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">DevOps Lifecycle</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-lg font-bold text-white mb-2">Plan</h3>
                <p className="text-gray-300 text-sm">Requirements gathering, architecture design, and project planning</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-lg font-bold text-white mb-2">Code</h3>
                <p className="text-gray-300 text-sm">Version control, code review, and collaborative development</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-lg font-bold text-white mb-2">Build & Test</h3>
                <p className="text-gray-300 text-sm">Automated builds, testing, and quality assurance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-lg font-bold text-white mb-2">Deploy & Monitor</h3>
                <p className="text-gray-300 text-sm">Automated deployment, monitoring, and continuous improvement</p>
              </div>
            </div>
          </section>

          {/* Technologies */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">DevOps Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'Terraform', 'Ansible', 'AWS', 'Azure', 'GCP', 'Prometheus', 'Grafana'].map((tech, index) => (
                <div key={index} className="cyber-card p-4 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">⚙️</div>
                  <div className="text-sm font-medium text-white">{tech}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Transform Your DevOps?</h2>
              <p className="text-gray-300 mb-8 text-lg">
                Let's discuss how our DevOps services can accelerate your development and improve your deployment processes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Your DevOps Journey
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default DevOpsPage;