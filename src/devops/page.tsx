import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { GitBranch } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

const $1: React.FC = () => {;
  const services = [;
    {
      icon: Code
      title: 'CI/CD Pipeline'
      description: 'Automated continuous integration and deployment pipelines'
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities']
   }
    {icon: GitBranch
      title: 'Version Control'
      description: 'Git-based version control and collaboration workflows'
      features: ['Git Workflows', 'Code Review', 'Branch Management', 'Merge Strategies']
   }
    {icon: Zap
      title: 'Infrastructure as Code'
      description: 'Automated infrastructure provisioning and management'
      features: ['Terraform', 'Ansible', 'CloudFormation', 'Kubernetes']
   }
    {icon: Shield
      title: 'Security Integration'
      description: 'Security-first DevOps practices and tools'
      features: ['SAST/DAST', 'Dependency Scanning', 'Secrets Management', 'Compliance']
    }
  ]
  return ()
    <div className="min-h-s creenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="con tainermx-auto px-4 py-16 pt-24">
        </div>
        <section className="tex t-centermb-16"></section>
          <h1 className="tex t-4xlmd: text-6xl font-bold text-white mb-6">DevOps Services</h1>
          <p className="tex t-xltext-gray-300 mb-8 max-w-3xl mx-auto">
        </div>
            Accelerate your development lifecycle with our comprehensive DevOps solutions.
            From CI/CD to infrastructure automation, we help you deliver faster and more reliably.
          </p>
        </section>
        <section className="mb-16"></section>
          <h2 className="tex t-3xlfont-bold text-white mb-12 text-center">Our DevOps Services</h2>
          <div className="gri dgrid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {services.map((service, index) => ()
              <div key={index} className="bg-wh ite/10backdrop-blur-md rounded-xl p-6 border border-white/20"></div>
                <service.icon className="w-12h-12te x t-cyan-400 mb-4" />
                <h3 className="tex t-xlfont-semibold text-white mb-3">{service.title}</h3>
                <p className="tex t-gray-300mb-4">{service.description}</p>
                <ul className="spa ce-y-2">
        </div>
                  {service.features.map((feature, featureIndex) => ()
                    <li key={featureIndex} className="fle xitems-center text-sm text-gray-300">
        </div>
                      <CheckCircle className="w-4h-4te x t-green-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
<<<<<<< HEAD
};
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-92e4
export default DevOpsPage;
