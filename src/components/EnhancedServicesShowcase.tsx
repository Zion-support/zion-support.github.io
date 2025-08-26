import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Rocket, 
  Lightbulb, 
  Wrench,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
<<<<<<< HEAD
import enhancedMicroSaasServices2025 from '../data/enhancedMicroSaasServices2025';
import enhancedAIServices2025 from '../data/enhancedAIServices2025';
import enhancedITServices2025 from '../data/enhancedITServices2025';
import nextGenInnovativeServices2025 from '../data/nextGenInnovativeServices2025';
import blockchainWeb3Services2025 from '../data/blockchainWeb3Services2025';
import iotEdgeComputingServices2025 from '../data/iotEdgeComputingServices2025';
import advancedCybersecurityServices2025 from '../data/advancedCybersecurityServices2025';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  benefits: string[];
  delivery: string;
  support: string;
  category: string;
  priority: number;
}

interface Technology {
  name: string;
  category: string;
  icon?: string;
}

interface Industry {
  name: string;
  description: string;
  icon: string;
}

export const EnhancedServicesShowcase: React.FC = () => {
  const services: Service[] = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions',
      icon: Brain,
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      benefits: ['Automated Decision Making', 'Improved Efficiency', 'Data-Driven Insights', 'Competitive Advantage'],
      delivery: 'Agile development with continuous iteration and testing',
      support: '24/7 monitoring and ongoing optimization',
      category: 'AI & ML',
      priority: 1
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Modern cloud infrastructure and development operations',
      icon: Cloud,
      features: ['Cloud Migration', 'CI/CD Pipelines', 'Container Orchestration', 'Infrastructure as Code'],
      benefits: ['Scalability', 'Cost Optimization', 'Faster Deployment', 'Improved Reliability'],
      delivery: 'Phased migration with minimal downtime',
      support: 'Proactive monitoring and automated scaling',
      category: 'Infrastructure',
      priority: 2
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions for modern threats',
      icon: Shield,
      features: ['Threat Detection', 'Vulnerability Assessment', 'Security Audits', 'Incident Response'],
      benefits: ['Risk Mitigation', 'Compliance', 'Business Continuity', 'Customer Trust'],
      delivery: 'Security-first approach with regular assessments',
      support: 'Real-time threat monitoring and rapid response',
      category: 'Security',
      priority: 3
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'Strategic guidance for organizational digital evolution',
      icon: Rocket,
      features: ['Technology Strategy', 'Process Optimization', 'Change Management', 'Innovation Consulting'],
      benefits: ['Operational Efficiency', 'Market Agility', 'Cost Reduction', 'Future Readiness'],
      delivery: 'Strategic roadmap with milestone tracking',
      support: 'Ongoing consultation and strategy refinement',
      category: 'Strategy',
      priority: 4
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Robust and scalable technology foundations',
      icon: Wrench,
      features: ['Network Design', 'System Architecture', 'Data Management', 'Performance Optimization'],
      benefits: ['Reliability', 'Performance', 'Scalability', 'Maintainability'],
      delivery: 'Phased implementation with testing at each stage',
      support: 'Proactive maintenance and performance tuning',
      category: 'Infrastructure',
      priority: 5
    },
    {
      id: 'consulting',
      title: 'Consulting',
      description: 'Expert technology strategy and advisory services',
      icon: Lightbulb,
      features: ['Technology Assessment', 'Strategic Planning', 'Vendor Selection', 'Project Management'],
      benefits: ['Informed Decisions', 'Cost Savings', 'Risk Mitigation', 'Best Practices'],
      delivery: 'Comprehensive analysis with actionable recommendations',
      support: 'Ongoing guidance and implementation support',
      category: 'Strategy',
      priority: 6
    }
  ];

  const technologies: Technology[] = [
    { name: 'React', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Python', category: 'AI/ML' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Azure', category: 'Cloud' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'TensorFlow', category: 'AI/ML' },
    { name: 'PyTorch', category: 'AI/ML' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Redis', category: 'Cache' }
  ];

  const industries: Industry[] = [
    { name: 'Healthcare', description: 'HIPAA compliant solutions', icon: '🏥' },
    { name: 'Finance', description: 'Regulatory compliant systems', icon: '💳' },
    { name: 'E-commerce', description: 'Scalable online platforms', icon: '🛒' },
    { name: 'Manufacturing', description: 'Industry 4.0 solutions', icon: '🏭' },
    { name: 'Education', description: 'EdTech innovations', icon: '🎓' },
    { name: 'Real Estate', description: 'Property management systems', icon: '🏠' },
    { name: 'Transportation', description: 'Logistics optimization', icon: '🚚' },
    { name: 'Energy', description: 'Smart grid solutions', icon: '⚡' },
    { name: 'Retail', description: 'Omnichannel experiences', icon: '🛍️' },
    { name: 'Media', description: 'Content management systems', icon: '📺' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const
      }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut" as const
      }
    }
  };

<<<<<<< HEAD
  const renderMicroSaasService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-slate-500 text-slate-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-slate-400">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">AI Score: {service.aiScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-300">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-slate-300">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-green-500/30 text-green-400">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-slate-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-slate-400">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-slate-400">ROI:</span>
              <div className="text-sm font-semibold text-green-400">{service.roi}</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-slate-500 text-slate-300 hover:border-blue-500 hover:text-blue-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderAIService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-purple-800/50 to-pink-700/50 border-purple-600/30 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-purple-500 text-purple-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-purple-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-purple-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Brain className="h-4 w-4 text-purple-400" />
            <span className="text-purple-400 font-semibold">AI Score: {service.aiScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Target className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">Accuracy: {service.accuracy}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-purple-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-purple-700/50 text-purple-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-purple-200">AI Models:</h4>
          <div className="flex flex-wrap gap-2">
            {service.aiModels.slice(0, 3).map((model: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-pink-500/30 text-pink-400">
                {model}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-purple-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-purple-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-purple-300">Real-time:</span>
              <div className="text-sm font-semibold text-green-400">
                {service.realTimeProcessing ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-purple-500 text-purple-300 hover:border-pink-500 hover:text-pink-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderITService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-blue-800/50 to-indigo-700/50 border-blue-600/30 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-blue-500 text-blue-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-blue-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 font-semibold">Response: {service.responseTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">SLA: {service.sla}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-blue-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-blue-700/50 text-blue-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-blue-200">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {service.technologies.slice(0, 3).map((tech: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-indigo-500/30 text-indigo-400">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-blue-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-blue-300">Hourly Rate:</span>
              <div className="text-lg font-bold text-white">${service.hourlyRate}/hour</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-blue-300">Project Rate:</span>
              <div className="text-sm font-semibold text-green-400">${service.projectRate.toLocaleString()}</div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-blue-500 text-blue-300 hover:border-indigo-500 hover:text-indigo-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderInnovativeService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-green-800/50 to-emerald-700/50 border-green-600/30 hover:border-green-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-green-500 text-green-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-green-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 text-green-400" />
            <span className="text-green-400 font-semibold">Innovation Score: {service.innovationScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-green-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-green-700/50 text-green-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-green-200">Benefits:</h4>
          <div className="flex flex-wrap gap-2">
            {service.benefits.slice(0, 3).map((benefit: string, index: number) => (
              <Badge key={index} variant="outline" className="text-xs border-emerald-500/30 text-emerald-400">
                {benefit}
              </Badge>
            ))}
          </div>
        </div>

        <div className="pt-4 border-t border-green-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-green-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-green-300">Emerging Tech:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.emergingTech ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-green-500 text-green-300 hover:border-emerald-500 hover:text-emerald-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderBlockchainService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-orange-800/50 to-red-700/50 border-orange-600/30 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-orange-500 text-orange-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-orange-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-orange-400" />
            <span className="text-orange-400 font-semibold">Blockchain Score: {service.blockchainScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-orange-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-orange-700/50 text-orange-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-orange-200">Web3 Features:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
              {service.web3Native ? 'Web3 Native' : 'Traditional'}
            </Badge>
            <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
              {service.smartContractSupport ? 'Smart Contracts' : 'No Smart Contracts'}
            </Badge>
            <Badge variant="outline" className="text-xs border-red-500/30 text-red-400">
              {service.crossChainCompatibility ? 'Cross-Chain' : 'Single Chain'}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-orange-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-orange-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-orange-300">Use Cases:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.useCases.length}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-orange-500 text-orange-300 hover:border-red-500 hover:text-red-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderIoTService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-teal-800/50 to-cyan-700/50 border-teal-600/30 hover:border-teal-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-teal-500 text-teal-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-teal-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-teal-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Settings className="h-4 w-4 text-teal-400" />
            <span className="text-teal-400 font-semibold">IoT Score: {service.iotScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-teal-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-teal-700/50 text-teal-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-teal-200">IoT Features:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
              {service.edgeNative ? 'Edge Native' : 'Cloud Based'}
            </Badge>
            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
              {service.aiIntegration ? 'AI Powered' : 'Traditional'}
            </Badge>
            <Badge variant="outline" className="text-xs border-cyan-500/30 text-cyan-400">
              {service.predictiveAnalytics ? 'Predictive' : 'Reactive'}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-teal-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-teal-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-teal-300">Real-time:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.realTimeProcessing ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-teal-500 text-teal-300 hover:border-cyan-500 hover:text-cyan-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderCybersecurityService = (service: any) => (
    <Card 
      key={service.id} 
      className="group relative overflow-hidden bg-gradient-to-br from-pink-800/50 to-rose-700/50 border-pink-600/30 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3 mb-3">
          <div className={`p-2 rounded-lg bg-gradient-to-r ${getCategoryColor(service.category)}`}>
            {getCategoryIcon(service.category)}
          </div>
          <Badge variant="outline" className="border-pink-500 text-pink-300">
            {service.category}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white group-hover:text-pink-400 transition-colors">
          {service.name}
        </CardTitle>
        <CardDescription className="text-pink-200">
          {service.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-pink-400" />
            <span className="text-pink-400 font-semibold">Security Score: {service.securityScore}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-yellow-400 font-semibold">{formatPrice(service.price, service.pricingModel)}</span>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-pink-200">Key Features:</h4>
          <div className="flex flex-wrap gap-2">
            {service.features.slice(0, 4).map((feature: string, index: number) => (
              <Badge key={index} variant="secondary" className="text-xs bg-pink-700/50 text-pink-200">
                {feature}
              </Badge>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-semibold text-pink-200">Security Features:</h4>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-400">
              {service.zeroTrust ? 'Zero Trust' : 'Traditional'}
            </Badge>
            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-400">
              {service.aiPowered ? 'AI Powered' : 'Rule Based'}
            </Badge>
            <Badge variant="outline" className="text-xs border-rose-500/30 text-rose-400">
              {service.quantumResistant ? 'Quantum Resistant' : 'Standard'}
            </Badge>
          </div>
        </div>

        <div className="pt-4 border-t border-pink-600/30">
          <div className="flex items-center justify-between mb-4">
            <div className="space-y-1">
              <span className="text-sm text-pink-300">Market Price:</span>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-right">
              <span className="text-sm text-pink-300">Threat Intel:</span>
              <div className="text-sm font-semibold text-yellow-400">
                {service.threatIntelligence ? 'Yes' : 'No'}
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <Button 
              size="sm"
              className="flex-1 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white font-semibold transition-all duration-300"
              onClick={() => window.open(service.contactInfo.website, '_blank')}
            >
              Learn More
            </Button>
            <Button 
              size="sm"
              variant="outline"
              className="border-pink-500 text-pink-300 hover:border-rose-500 hover:text-rose-400"
              onClick={() => window.open(`mailto:${service.contactInfo.email}`)}
            >
              Contact
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-600/30">
            <TabsTrigger 
              value="microsaas" 
              className="data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Zap className="h-4 w-4 mr-2" />
              Micro SAAS
            </TabsTrigger>
            <TabsTrigger 
              value="ai" 
              className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
            >
              <Brain className="h-4 w-4 mr-2" />
              AI Services
            </TabsTrigger>
            <TabsTrigger 
              value="it" 
              className="data-[state=active]:bg-indigo-600 data-[state=active]:text-white"
            >
              <Server className="h-4 w-4 mr-2" />
              IT Services
            </TabsTrigger>
            <TabsTrigger 
              value="innovative" 
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              <Star className="h-4 w-4 mr-2" />
              Innovative
            </TabsTrigger>
          </TabsList>

          <TabsContent value="microsaas" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedMicroSaasServices2025.map(renderMicroSaasService)}
            </div>
          </TabsContent>

          <TabsContent value="ai" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedAIServices2025.map(renderAIService)}
            </div>
          </TabsContent>

          <TabsContent value="it" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enhancedITServices2025.map(renderITService)}
            </div>
          </TabsContent>
          
          <TabsContent value="innovative" className="mt-8">
            <div className="space-y-8">
              {/* Next Gen Innovative Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Next Generation Innovative Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {nextGenInnovativeServices2025.map(renderInnovativeService)}
                </div>
              </div>
              
              {/* Blockchain & Web3 Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Blockchain & Web3 Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {blockchainWeb3Services2025.map(renderBlockchainService)}
                </div>
              </div>
              
              {/* IoT & Edge Computing Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">IoT & Edge Computing Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {iotEdgeComputingServices2025.map(renderIoTService)}
                </div>
              </div>
              
              {/* Advanced Cybersecurity Services */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Cybersecurity Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {advancedCybersecurityServices2025.map(renderCybersecurityService)}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Contact Information */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/30 backdrop-blur-lg rounded-xl p-8 border border-slate-600/30">
            <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              Contact our team to discuss how our comprehensive technology solutions can transform your business
=======
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-7xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            variants={itemVariants}
          >
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Services
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive technology solutions designed to transform your business and drive innovation
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={itemVariants}
          >
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
            >
              View All Services
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              End-to-end technology solutions across all major domains
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-bb5a
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="text-5xl mb-4 flex justify-center">
                  <service.icon className="h-16 w-16 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    Benefits
                  </h4>
                  <ul className="space-y-2 mb-4">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-300 flex items-center">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Delivery & Support */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="text-sm">
                    <p className="text-gray-300 mb-2">
                      <strong className="text-blue-400">Delivery:</strong> {service.delivery}
                    </p>
                    <p className="text-gray-300">
                      <strong className="text-cyan-400">Support:</strong> {service.support}
                    </p>
                  </div>
                </div>

                {/* Priority Badge */}
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs px-2 py-1 bg-zion-purple/20 text-zion-purple rounded-full">
                    Priority {service.priority}
                  </span>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-zion-cyan hover:text-zion-cyan-light text-sm font-medium group-hover:underline"
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Built with cutting-edge technologies and proven frameworks
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-white/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
              >
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <div className="text-xs text-gray-500 mt-1">{tech.category}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Proven expertise across diverse business sectors
            </p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 text-center hover:border-white/40 transition-all duration-300 group hover:scale-105"
                variants={itemVariants}
              >
                <div className="text-3xl mb-2">{industry.icon}</div>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {industry.name}
                </span>
                <div className="text-xs text-gray-500 mt-1">{industry.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can drive your success
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>
    </div>
  );
};