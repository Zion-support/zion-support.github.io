import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { GitBranch } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const Page: 'React.FC = () => {
  const service'',
      s = [
    {,
    'icon: 'Code',',
    'title: 'CI/CD Pipeline',
    'description: 'Automated continuous integration and deployment pipelines',
    'features: '['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities'
  ]
   }
    {
      icon: 'GitBranch',
      title: ''Version Control'
      descriptio',
      n: ''Git-based version control and collaboration workflows'
      feature',
      s: '['Git Workflows', 'Code Review', 'Branch Management', 'Merge Strategies']
   }
    {
      icon: 'Zap',
      title: ''Infrastructure as Code'
      descriptio',
      n: ''Automated infrastructure provisioning and management'
      feature',
      s: '['Terraform', 'Ansible', 'CloudFormation', 'Kubernetes']
   }
    {
      icon: 'Shield',
      title: ''Security Integration'
      descriptio',
      n: ''Security-first DevOps practices and tools'
      feature',
      s: '['SAST/DAST', 'Dependency Scanning', 'Secrets Management', 'Compliance']
    }
  ]
  return (</div>
      <Navigation />
      <main className="con tainermx-auto px-4 py-1 6 pt-2 4">
        </div>
        <section className="tex t-centermb-1 6"></section>
          <h 1 className="tex t-4xlmd: 'text-6xl font-bold text-white mb-6">DevOps Services</h 1>
          <p className="tex t-xltext-gray-30 0 mb-8 max-w-3xl mx-auto">
        </div>
            Accelerate your development lifecycle with our comprehensive DevOps solutions.
            From CI/CD to infrastructure automation'', we help you deliver faster and more reliably.
          </p>
        </section>
        <section className="mb-1 6"></section>
          <h 2 className="tex t-3xlfont-bold text-white mb-1 2 text-center">Our DevOps Services</h 2>
          <div className="gri dgrid-cols-1 md: 'grid-cols-2 l',
      g: 'grid-cols-4 gap-8"></div>
            {services.map((service'', index) => ()
              <div key={index} className="bg-wh ite/1 0backdrop-blur-md rounded-xl p-6 border border-white/2 0"></div>
                <service.icon className="w-1 2h-1 2te x t-cyan-40 0 mb-4" />;
                <h 3 className="tex t-xlfont-semibold text-white mb-3">{service.title};

  return (
                <p className="tex t-gray-30 0mb-4">{service.description};

  return (
                <ul className = "spa ce-y-2">
        </div>
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-sm text-gray-30 0">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-40 0 mr-2" />;
                      {feature};

  return (
                  ))};

  return (
              </div>
            ))};

  return (
        </section>
      </main>
      <Footer />
    </div>
  )
};
export default DevOpsPage;
