
;
import { motion } from &apos;framer-motion';
import { Link } from &apos;react-router-dom';
import {
  Brain,
  Shield,
  Cloud,
  Database,
  Globe,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Search} from &apos;lucide-react';&apos;&apos;
export const EnhancedServicesShowcase: React.FC = () => {}
  const;const;const services = [{
      title: &apos;AI Workflow Automation&apos;,
      description: &apos;Transform business operations with intelligent automation that learns and scales&apos;,
      price: &apos;From $299/month&apos;,
      path: &apos;/services/ai-workflow-automation&apos;,
              icon: GitFork,
      category: &apos;AI & Automation&apos;,
      features: [&apos;Process optimization&apos;, &apos;AI-powered workflows&apos;, &apos;Real-time analytics&apos;, &apos;Scalable automation&apos;],
      benefits: [&apos;Reduce manual work by 70-85%&apos;, &apos;Improve efficiency by 60%&apos;, &apos;Cut operational costs by 40-50%&apos;],
      color: &apos;from-cyan-500 to-blue-600&apos;,
      glowColor: &apos;cyan&apos;},
    {
      title: &apos;AI Cybersecurity&apos;,
      description: &apos;Protect your business with AI-powered threat detection and prevention&apos;,
      price: &apos;From $499/month&apos;,
      path: &apos;/services/ai-cybersecurity&apos;,
      icon: Shield,
      category: &apos;Security&apos;,
      features: [&apos;Threat detection&apos;, &apos;Behavioral analytics&apos;, &apos;Automated response&apos;, &apos;Compliance monitoring&apos;],
      benefits: [&apos;Detect threats 10x faster&apos;, &apos;Reduce false positives by 85%&apos;, &apos;Prevent 99.9% of attacks&apos;],
      color: &apos;from-purple-500 to-indigo-600&apos;,
      glowColor: &apos;purple&apos;},
    {
      title: &apos;Quantum Computing&apos;,
      description: &apos;Solve complex problems 1000x faster with quantum computing solutions&apos;,
      price: &apos;From $2,999/month&apos;,
      path: &apos;/services/quantum-computing-solutions&apos;,
      icon: Atom,
      category: &apos;Quantum Tech&apos;,
      features: [&apos;Quantum algorithms&apos;, &apos;ML acceleration&apos;, &apos;Financial modeling&apos;, &apos;Drug discovery&apos;],
      benefits: [&apos;1000x faster computation&apos;, &apos;Breakthrough discoveries&apos;, &apos;Unbreakable encryption&apos;],
      color: &apos;from-green-500 to-emerald-600&apos;,
      glowColor: &apos;green&apos;},
    {
      title: &apos;IoT Edge Computing&apos;,
      description: &apos;Process data at the edge and reduce latency by 90%&apos;,
      price: &apos;From $399/month&apos;,
      path: &apos;/services/iot-edge-computing&apos;,
      icon: Cpu,
      category: &apos;IoT & Edge&apos;,
      features: [&apos;Edge processing&apos;, &apos;Device management&apos;, &apos;Real-time analytics&apos;, &apos;AI at the edge&apos;],
      benefits: [&apos;Reduce latency by 90%&apos;, &apos;Cut bandwidth costs by 60-80%&apos;, &apos;Scale to millions of devices&apos;],
      color: &apos;from-orange-500 to-red-600&apos;,
      glowColor: &apos;orange&apos;},
    {
      title: &apos;Cloud & DevOps&apos;,
      description: &apos;Build, deploy, and scale with enterprise-grade cloud infrastructure&apos;,
      price: &apos;From $799/month&apos;,
      path: &apos;/services/cloud-devops&apos;,
      icon: Cloud,
      category: &apos;Infrastructure&apos;,
      features: [&apos;Cloud migration&apos;, &apos;CI/CD pipelines&apos;, &apos;Infrastructure as code&apos;, &apos;Monitoring & alerting&apos;],
      benefits: [&apos;Faster deployments&apos;, &apos;Improved reliability&apos;, &apos;Cost optimization&apos;, &apos;Scalability&apos;],
      color: &apos;from-blue-500 to-cyan-600&apos;,
      glowColor: &apos;blue&apos;},
    {
      title: &apos;AI Sales Copilot&apos;,
      description: &apos;Automate sales processes and boost conversion rates with AI&apos;,
      price: &apos;From $1,500/month&apos;,
      path: &apos;/services/ai-sales-copilot&apos;,
      icon: Brain,
      category: &apos;Sales AI&apos;,
      features: [&apos;Lead scoring&apos;, &apos;CRM automation&apos;, &apos;Sales analytics&apos;, &apos;Predictive insights&apos;],
      benefits: [&apos;Reduce admin time by 40-60%&apos;, &apos;Improve conversion rates&apos;, &apos;Shorten sales cycles&apos;],
      color: &apos;from-pink-500 to-rose-600&apos;,
      glowColor: &apos;pink&apos;}
  ];&apos;
  const containerVariants = {
    hidden: { opacit,y: 0 },
    visible: {
      opacit,y: 1,
      transition: {
        staggerChildre,n: 0.1}
    }
  }
;
const categories = [&apos;All&apos;, &apos;AI & Analytics&apos;, &apos;Quantum Computing&apos;, &apos;Cybersecurity&apos;, &apos;Cloud & DevOps&apos;, &apos;Data & Analytics&apos;, &apos;Blockchain & Web3&apos;]
;&apos;
export default function EnhancedServicesShowcase(...args: unknown[]): unknown ;{}  const [selectedCategory, setSelectedCategory] = useState(&apos;All&apos;)&apos;'
  const [hoveredService, setHoveredService] = useState<;<string | null>(null);