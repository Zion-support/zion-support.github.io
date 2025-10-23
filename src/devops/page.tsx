import React from 'react';
const DevOpsPage: React.FC = () => {
  const services = [
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import {GitBranchCheckCircle} from 'lucide-react';;
constDevOpsPage: React.FC= () =>{constservices= [
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
  ];
  return (
  <divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900"><Navigation /><mainclassName="container mx-autopx-4py-16pt-24"><sectionclassName="text-centermb-16"><h1className="text-4 xlmd:text-6 xl font-boldtext-whitemb-6">DevOpsServices</h><spanclassName="text-xl text-gray-300mb-8 max-w-3xlmx-auto"></spa></className="text-xl text-gray-300mb-8 max-w-3xlmx-auto">Accelerate your development lifecycle with our comprehensive DevOps solutions. 
            From CI/CD to infrastructure automation, we help you deliver faster and more reliably.
        </p></sectio><sectionclassName="mb-16"><h2className="text-3 xl font-bold text-white mb-12text-center">OurDevOpsServices</h><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{services.map((serviceindex) => (
           <divkey={index}className="bg-white/10backdrop-blur-md rounded-xl p-6 borderborder-white/20"><service.iconclassName="w-12h-12text-cyan-400mb-4" /><h3className="text-xl font-semiboldtext-whitemb-3">{service.title}</h><pclassName="text-gray-300mb-4">{service.description}</p><ulclassName="space-y-2">{service.features.map((featurefeatureIndex) => (
                 <likey={featureIndex}className="flex items-center text-smtext-gray-300"><CheckCircleclassName="w-4 h-4 text-green-400mr-2" />{feature}
                  </l>))}
              </u></di>))}
        </di></sectio></mai><Footer /></di>
  );
};
export default DevOpsPage;
