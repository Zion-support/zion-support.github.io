import React from 'react';
// // import Navigation from '../components/Navigation';
// // import Footer from '../components/Footer';
import { Code, GitBranch, Zap, Shield, BarChart, CheckCircle } from 'lucide-react';

const DevOpsPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'CI/CD Pipeline',
      description: 'Automated continuous integration and deployment pipelines',
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities']
    },
    {
      icon: GitBranch,
      title: 'Version Control',
      description: 'Git-based version control and collaboration workflows',
      features: ['Git Workflows', 'Code Review', 'Branch Management', 'Merge Strategies']
    },
    {
      icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      features: ['Terraform', 'Ansible', 'CloudFormation', 'Kubernetes']
    },
    {
      icon: Shield,
      title: 'Security Integration',
      description: 'Security-first DevOps practices and tools',
      features: ['SAST/DAST', 'Dependency Scanning', 'Secrets Management', 'Compliance']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* {/* <Navigation /> */} */}
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">DevOps Services</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Accelerate your development lifecycle with our comprehensive DevOps solutions. 
            From CI/CD to infrastructure automation, we help you deliver faster and more reliably.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Our DevOps Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <service.icon className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {/* {/* <Footer /> */} */}
    </div>
  );
};

export default DevOpsPage;
