const DevOpsPage: React.FC = () => {
  const services = [
=======
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import {GitBranchCheckCircle} from 'lucide-react';;
constDevOpsPage: React.FC= () =>{constservices= [
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
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
