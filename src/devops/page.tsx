import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { GitBranch } from 'lucide-react'
import { CheckCircle } from 'lucide-react'

const DevOpsPage: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: 'CI/CD Pipeline',
      description: 'Automated continuous integration and deployment pipelines',
      features: ['Automated Testing', 'Code Quality Checks', 'Deployment Automation', 'Rollback Capabilities']
   },
    {icon: GitBranch,
      title: 'Version Control',
      description: 'Git-based version control and collaboration workflows',
      features: ['Git Workflows', 'Code Review', 'Branch Management', 'Merge Strategies']
   },
    {icon: Zap,
      title: 'Infrastructure as Code',
      description: 'Automated infrastructure provisioning and management',
      features: ['Terraform', 'Ansible', 'CloudFormation', 'Kubernetes']
   },
    {icon: Shield,
      title: 'Security Integration',
      description: 'Security-first DevOps practices and tools',
      features: ['SAST/DAST', 'Dependency Scanning', 'Secrets Management', 'Compliance']
    }
  ]
  return (
    <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
      <Navigation />
      <main className=&quot;container mx-auto px-4 py-16 pt-24&quot;>
        <section className=&quot;text-center mb-16&quot;></section>
          <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6&quot;>DevOps Services</h1>
          <p className=&quot;text-xl text-gray-300 mb-8 max-w-3xl mx-auto&quot;>
            Accelerate your development lifecycle with our comprehensive DevOps solutions.
            From CI/CD to infrastructure automation, we help you deliver faster and more reliably.
          </p>
        </section>
        <section className=&quot;mb-16&quot;></section>
          <h2 className=&quot;text-3xl font-bold text-white mb-12 text-center&quot;>Our DevOps Services</h2>
          <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8&quot;></div>
            {services.map((service, index) => (
              <div key={index} className=&quot;bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20&quot;></div>
                <service.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                <h3 className=&quot;text-xl font-semibold text-white mb-3&quot;>{service.title}</h3>
                <p className=&quot;text-gray-300 mb-4&quot;>{service.description}</p>
                <ul className=&quot;space-y-2&quot;>
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className=&quot;flex items-center text-sm text-gray-300&quot;>
                      <CheckCircle className=&quot;w-4 h-4 text-green-400 mr-2&quot; />
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
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d
    </div>
  )
}
export default DevOpsPage
