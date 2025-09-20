import { Link  } from 'react-router-dom';
 from 'react';
export const EnhancedServicesShowcase: React.FC = () => {
export default React.memo(/**
import { motion  } from 'framer-motion';

 params - Function parameters
 * @returns {*} Function return value
 */
function EnhancedServicesShowcase () {

,
    {

      title: 'AI Cybersecurity',
      description: 'Protect your business with AI-powered threat detection and prevention',
      price: 'From $499/month',
      path: '/services/ai-cybersecurity',
      icon: Shield,
      category: 'Security',
      features: ['Threat detection',Behavioral analytics',Automated response',Compliance monitoring'],
      benefits: ['Detect threats 10x faster',Reduce false positives by 85%',Prevent 99.9% of attacks'],
      color: 'from-purple-500 to-indigo-600',
      glowColor: 'purple'
    },
    {

      title: 'Quantum Computing',
      description: 'Solve complex problems 1000x faster with quantum computing solutions',
      price: 'From $2,999/month',
      path: '/services/quantum-computing-solutions',
      icon: Atom,
      category: 'Quantum Tech',
      features: ['Quantum algorithms',ML acceleration',Financial modeling',Drug discovery'],
      benefits: ['1000x faster computation',Breakthrough discoveries',Unbreakable encryption'],
      color: 'from-green-500 to-emerald-600',
      glowColor: 'green'
    },
    {

      title: 'IoT Edge Computing',
      description: 'Process data at the edge and reduce latency by 90%',
      price: 'From $399/month',
      path: '/services/iot-edge-computing',
      icon: Cpu,
      category: 'IoT & Edge',
      features: ['Edge processing',Device management',Real-time analytics',AI at the edge'],
      benefits: ['Reduce latency by 90%',Cut bandwidth costs by 60-80%',Scale to millions of devices'],
      color: 'from-orange-500 to-red-600',
      glowColor: 'orange'
    },
    {

      title: 'Cloud & DevOps',
      description: 'Build, deploy, and scale with enterprise-grade cloud infrastructure',
      price: 'From $799/month',
      path: '/services/cloud-devops',
      icon: Cloud,
      category: 'Infrastructure',
      features: ['Cloud migration',CI/CD pipelines',Infrastructure as code',Monitoring & alerting'],
      benefits: ['Faster deployments',Improved reliability',Cost optimization',Scalability'],
      color: 'from-blue-500 to-cyan-600',
      glowColor: 'blue'
    },
    {

      title: 'AI Sales Copilot',
      description: 'Automate sales processes and boost conversion rates with AI',
      price: 'From $1,500/month',
      path: '/services/ai-sales-copilot',
      icon: Brain,;
      category: 'Sales AI',;
      features: ['Lead scoring',CRM automation',Sales analytics',Predictive insights'],;
      benefits: ['Reduce admin time by 40-60%',Improve conversion rates',Shorten sales cycles'],;
      color: 'from-pink-500 to-rose-600',;
      glowColor: 'pink'};
  ];

    visible: {
      opacity: 1,;
      transition: {
        staggerChildren: 0.1}}};

        <motion.div
          className="grid grid - cols - 1 lg:grid - cols - 2 xl:grid - cols - 3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport = {
  { once: true,
  margin: "-100px"
              View All Services;
              <ArrowRight className="ml-2 w-5 h-5" />;
            </Link>
            <a
