<<<<<<< HEAD
<<<<<<< HEAD
import {;
  Brain,;
  Shield,;
  Rocket,;
  Cpu,;
  Database,;
  Atom,;
  Users,;
  CheckCircle,;
  TrendingUp,;
  Clock,;
  Star,;
  Filter,;
  ChevronDown,;
import React, { useState } from 'react';

import React, { useState } from 'react';

import {
  Brain
  Shield
  Rocket
  Cpu
  Database
  Atom
  Users
  CheckCircle
  TrendingUp
  Clock
  Star
  Filter
  ChevronDown;
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  Filter,;
  ChevronDown,;
} from 'lucide-react';
interface Service {;

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useState } from 'react';

<<<<<<< HEAD
=======
import {
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,
  Filter,;
  ChevronDown,;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

} from 'lucide-react';
interface Service {;
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  Brain,
  Shield,
  Rocket,
  Cpu,
  Database,
  Atom,
  Users,
  CheckCircle,
  TrendingUp,
  Clock,
  Star,

  Filter,;
  ChevronDown,;


} from 'lucide-react';
;
interface Service {
  id: string;
  name: string;
  tagline: string;
  category: string;
  price: string;
  period: string;
  setup_time: string;
  customers: string;
  features: string[];
  benefits: string[];
  roi: string;
  market_size: string;
  growth_rate: string;
  popular?: boolean;
<<<<<<< HEAD
<<<<<<< HEAD
import { 
  Brain, Shield, Rocket, Cpu, Database, Atom, Users, 
  CheckCircle, TrendingUp, Clock, Star, Filter, ChevronDown
} from 'lucide-react';
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  color: string;} from 'lucide-react';
interface Service {
  id: string
  name: string
  tagline: string
  category: string
  price: string
  period: string
  setupTime: string
  customers: string
  features: string[]
  benefits: string[]
  roi: string
  marketSize: string
  growthRate: string
  popular?: boolean;
  icon: React.ComponentType<any>
  color: string
}
const EnhancedServicesShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const services: Service[] = [
    {
<<<<<<< HEAD
      id: 'ai-bi',
      name: 'AI Business Intelligence',
      tagline: 'Transform data into actionable insights with AI-powered analytics',
  icon: React.ComponentType < any>;
  color: string;} from 'lucide-react';
;
interface Service {
  id: string,
  name: string,
  tagline: string,
  category: string,
  price: string,
  period: string,
setup_time: string,
  customers: string,
  features: string[],
  benefits: string[],
  roi: string,
market_size: string,
  growth_rate: string,
  popular?: boolean;
  icon: React.ComponentType < any>,
  color: string;
}
const EnhancedServicesShowcase: React.FC = () => {
  const [selected_category, setSelectedCategory] = useState < string>('all');
  const [search_term, setSearchTerm] = useState ('');
;
  const services: Service[] = [;
    {
      id: 'ai - bi',
      name: 'AI Business Intelligence',
      tagline:;
        'Transform data into actionable insights with AI - powered analytics',      category: 'AI & Analytics',      tagline: 'Transform data into actionable insights with AI - powered analytics',
      category: 'AI & Analytics',
      price: '$499',
      period: '/month',
      setup_time: '2 - 3 weeks',
      customers: '150+',
      features: [;
        'AI - powered dashboards',
        'Predictive analytics',
        'Real - time insights',
        'Custom reporting',
      ],
      benefits: [;
        '30% faster decision making',
        'Improved data accuracy',
        'Cost reduction',
      ],      roi: 'Average 3.2x ROI within 6 months',      features: ['AI - powered dashboards_predictive analytics_real - time insights_custom reporting'],
      benefits: ['30% faster decision making_improved data accuracy_cost reduction'],
      roi: 'Average 3.2x ROI within 6 months',
      market_size: '$25B',
      growth_rate: '25% YoY',
      popular: true,
      icon: Brain,
      id: 'quantum-cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',
      category: 'Security',
color: 'from - purple - 500 to - pink - 500',
    },
    {
      id: 'quantum - cyber',
      name: 'Quantum Cybersecurity',
      tagline:;
        'Future - proof security with quantum - resistant encryption and AI threat detection',      category: 'Security',      color: 'from - purple - 500 to - pink - 500';
    }
    {
      id: 'quantum - cyber',
      name: 'Quantum Cybersecurity',
      tagline: 'Future - proof security with quantum - resistant encryption and AI threat detection',
      price: '$799',
      period: '/month',
      setup_time: '4 - 6 weeks',
      customers: '75+',
      features: [;
        'Quantum - resistant encryption',
        'AI threat detection',
        'Zero - trust architecture',
        '24 / 7 monitoring',
      ],
      benefits: [;
        '99.99% threat prevention',
        'Compliance ready',
        'Reduced security incidents',
      ],      roi: 'Average 4.1x ROI within 8 months',      features: ['Quantum - resistant encryptionAI threat detection_zero - trust architecture24 / 7 monitoring'],
      benefits: ['99.99% threat prevention_compliance ready_reduced security incidents'],
      roi: 'Average 4.1x ROI within 8 months',
      market_size: '$18B',
      growth_rate: '32% YoY',
      popular: false,
      icon: Shield,
      id: 'edge-computing',
      color: 'from - red - 500 to - orange - 500',
    },
    {
      id: 'edge - computing',
      name: 'Edge Computing Orchestration',
      tagline:;
        'Deploy and manage applications at the edge with intelligent orchestration',      category: 'Infrastructure',      color: 'from - red - 500 to - orange - 500';
    }
    {
      id: 'edge - computing',
      name: 'Edge Computing Orchestration',
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',
      category: 'Infrastructure',
      price: '$349',
      period: '/month',
setup_time: '1 - 2 weeks',
      customers: '200+',
      features: [;
        'Edge node management',
        'IoT device management',
        'Real - time monitoring',
        'Auto - scaling',
      ],
      benefits: [;
        '50% latency reduction',
        'Improved reliability',
        'Cost optimization',
      ],      roi: 'Average 2.8x ROI within 4 months',      features: ['Edge node managementIoT device management_real - time monitoring_auto - scaling'],
      benefits: ['50% latency reduction_improved reliability_cost optimization'],
      roi: 'Average 2.8x ROI within 4 months',
      market_size: '$12B',
      growth_rate: '28% YoY',
      popular: false,
      icon: Cpu,
      color: 'from - emerald - 500 to - teal - 500',
    },
      id: 'space - tech',
      name: 'Space Technology Innovation',
      tagline:;
        'Accelerate space exploration with cutting - edge technology solutions',
      category: 'Space Tech',
      price: '$2, 499',
      period: '/month',
      setup_time: '8 - 12 weeks',
      customers: '25+',
      features: [;
        'Satellite management',
        'AI mission planning',
        'Quantum communication',
        'Space analytics',
      ],
      benefits: [;
        'Mission success rate 95%+',
        'Reduced launch costs',
        'Advanced capabilities',
      ],      roi: 'Average 5.2x ROI within 12 months',      features: ['Satellite managementAI mission planning_quantum communication_space analytics'],
      benefits: ['Mission success rate 95%+Reduced launch costs_advanced capabilities'],
      roi: 'Average 5.2x ROI within 12 months',
      market_size: '$8B',
      growth_rate: '45% YoY',
      popular: true,
      icon: Rocket,
      id: 'neural-interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human-computer interaction with neural interfaces',
      category: 'Emerging Tech',
color: 'from - violet - 500 to - purple - 500',
    },
    {
      id: 'neural - interface',
      name: 'Neural Interface Development',
      tagline:;
        'Build the future of human - computer interaction with neural interfaces',      category: 'Emerging Tech',      color: 'from - violet - 500 to - purple - 500';
    }
    {
      id: 'neural - interface',
      name: 'Neural Interface Development',
      tagline: 'Build the future of human - computer interaction with neural interfaces',
      price: '$899',
      period: '/month',
      setup_time: '6 - 8 weeks',
      customers: '40+',
      features: [;
        'BCI development tools',
        'Neural signal processing',
        'AI pattern recognition',
        'Safety protocols',
      ],
      benefits: [;
        'Revolutionary UX',
        'Accessibility improvements',
        'Research advancement',
      ],      roi: 'Average 6.8x ROI within 18 months',      features: ['BCI development tools_neural signal processingAI pattern recognition_safety protocols'],
      benefits: ['Revolutionary UXAccessibility improvements_research advancement'],
      roi: 'Average 6.8x ROI within 18 months',
      market_size: '$3B',
      growth_rate: '67% YoY',
      popular: false,
      icon: Brain,
      color: 'from - pink - 500 to - rose - 500',
    },    {      color: 'from - pink - 500 to - rose - 500';
    }
    {
      id: 'quantum - ai',
      name: 'Quantum AI Neural Networks',
      tagline: 'Quantum - powered AI with advanced consciousness capabilities',
      category: 'Quantum AI',
      price: '$1, 299',
      period: '/month',
      setup_time: '10 - 14 weeks',
      customers: '15+',
      features: [;
        'Quantum neural networks',
        'Consciousness simulation',
        'Advanced learning',
        'Quantum optimization',
      ],
      benefits: [;
        'Unprecedented AI capabilities',
        'Breakthrough research',
        'Competitive advantage',
      ],      roi: 'Average 8.5x ROI within 24 months',      price: '$1, 299';
      period: '/month',
      setup_time: '10 - 14 weeks',
      customers: '15+',
      features: ['Quantum neural networks_consciousness simulation_advanced learning_quantum optimization'],
      benefits: ['Unprecedented AI capabilities_breakthrough research_competitive advantage'],
      roi: 'Average 8.5x ROI within 24 months',
      market_size: '$2B',
      growth_rate: '89% YoY',
      popular: true,
      icon: Atom,
  icon: React && React.ComponentType<any>;
  color: string;} from 'lucide-react';
interface Service {;
  id: string,;
  name: string,;
  tagline: string,;
  category: string,;
  price: string,;
  period: string,;
  setupTime: string,;
  customers: string,;
  features: string[],;
  benefits: string[],;
  roi: string,;
  marketSize: string,;
  growthRate: string,;
  popular?: boolean;
  icon: React && React.ComponentType<any>,;
  color: string;
}
const EnhancedServicesShowcase: React.FC = () => {;
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const services: Service[] = [;
    {;
      id: 'ai-bi',;
      name: 'AI Business Intelligence',;
      tagline:;
        'Transform data into actionable insights with AI-powered analytics',      category: 'AI & Analytics',      tagline: 'Transform data into actionable insights with AI-powered analytics',;
      category: 'AI & Analytics',;
      price: '$499',;
      period: '/month',;
      setupTime: '2-3 weeks',;
      customers: '150+',;
      features: [;
        'AI-powered dashboards',;
        'Predictive analytics',;
        'Real-time insights',;
        'Custom reporting',;
      ],;
      benefits: [;
        '30% faster decision making',;
        'Improved data accuracy',;
        'Cost reduction',;
      ],      roi: 'Average 3 && 3.2x ROI within 6 months',      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting'],;
      benefits: ['30% faster decision makingImproved data accuracyCost reduction'],;
      roi: 'Average 3 && 3.2x ROI within 6 months',;
      marketSize: '$25B',;
      growthRate: '25% YoY',;
      popular: true,;
      icon: Brain,;
      color: 'from-purple-500 to-pink-500',;
    },;
    {;
      id: 'quantum-cyber',;
      name: 'Quantum Cybersecurity',;
      tagline:;
        'Future-proof security with quantum-resistant encryption and AI threat detection',      category: 'Security',      color: 'from-purple-500 to-pink-500';
    };
    {;
      id: 'quantum-cyber',;
      name: 'Quantum Cybersecurity',;
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection',;
      price: '$799',;
      period: '/month',;
      setupTime: '4-6 weeks',;
      customers: '75+',;
      features: [;
        'Quantum-resistant encryption',;
        'AI threat detection',;
        'Zero-trust architecture',;
        '24/7 monitoring',;
      ],;
      benefits: [;
        '99 && 99.99% threat prevention',;
        'Compliance ready',;
        'Reduced security incidents',;
      ],      roi: 'Average 4 && 4.1x ROI within 8 months',      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring'],;
      benefits: ['99 && 99.99% threat preventionCompliance readyReduced security incidents'],;
      roi: 'Average 4 && 4.1x ROI within 8 months',;
      marketSize: '$18B',;
      growthRate: '32% YoY',;
      popular: false,;
      icon: Shield,;
      color: 'from-red-500 to-orange-500',;
    },;
    {;
      id: 'edge-computing',;
      name: 'Edge Computing Orchestration',;
      tagline:;
        'Deploy and manage applications at the edge with intelligent orchestration',      category: 'Infrastructure',      color: 'from-red-500 to-orange-500';
    };
    {;
      id: 'edge-computing',;
      name: 'Edge Computing Orchestration',;
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration',;
      price: '$349',;
      period: '/month',;
      setupTime: '1-2 weeks',;
      customers: '200+',;
      features: [;
        'Edge node management',;
        'IoT device management',;
        'Real-time monitoring',;
        'Auto-scaling',;
      ],;
      benefits: [;
        '50% latency reduction',;
        'Improved reliability',;
        'Cost optimization',;
      ],      roi: 'Average 2 && 2.8x ROI within 4 months',      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling'],;
      benefits: ['50% latency reductionImproved reliabilityCost optimization'],;
      roi: 'Average 2 && 2.8x ROI within 4 months',;
      marketSize: '$12B',;
      growthRate: '28% YoY',;
      popular: false,;
      icon: Cpu,;
      color: 'from-emerald-500 to-teal-500',;
    },;
      id: 'space-tech',;
      name: 'Space Technology Innovation',;
      tagline:;
        'Accelerate space exploration with cutting-edge technology solutions',;
      category: 'Space Tech',;
      price: '$2,499',;
      period: '/month',;
      setupTime: '8-12 weeks',;
      customers: '25+',;
      features: [;
        'Satellite management',;
        'AI mission planning',;
        'Quantum communication',;
        'Space analytics',;
      ],;
      benefits: [;
        'Mission success rate 95%+',;
        'Reduced launch costs',;
        'Advanced capabilities',;
      ],      roi: 'Average 5 && 5.2x ROI within 12 months',      features: ['Satellite managementAI mission planningQuantum communicationSpace analytics'],;
      benefits: ['Mission success rate 95%+Reduced launch costsAdvanced capabilities'],;
      roi: 'Average 5 && 5.2x ROI within 12 months',;
      marketSize: '$8B',;
      growthRate: '45% YoY',;
      popular: true,;
      icon: Rocket,;
      color: 'from-violet-500 to-purple-500',;
    },;
    {;
      id: 'neural-interface',;
      name: 'Neural Interface Development',;
      tagline:;
        'Build the future of human-computer interaction with neural interfaces',      category: 'Emerging Tech',      color: 'from-violet-500 to-purple-500';
    };
    {;
      id: 'neural-interface',;
      name: 'Neural Interface Development',;
      tagline: 'Build the future of human-computer interaction with neural interfaces',;
      price: '$899',;
      period: '/month',;
      setupTime: '6-8 weeks',;
      customers: '40+',;
      features: [;
        'BCI development tools',;
        'Neural signal processing',;
        'AI pattern recognition',;
        'Safety protocols',;
      ],;
      benefits: [;
        'Revolutionary UX',;
        'Accessibility improvements',;
        'Research advancement',;
      ],      roi: 'Average 6 && 6.8x ROI within 18 months',      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols'],;
      benefits: ['Revolutionary UXAccessibility improvementsResearch advancement'],;
      roi: 'Average 6 && 6.8x ROI within 18 months',;
      marketSize: '$3B',;
      growthRate: '67% YoY',;
      popular: false,;
      icon: Brain,;
      color: 'from-pink-500 to-rose-500',;
    },    {      color: 'from-pink-500 to-rose-500';
    };
    {;
      id: 'quantum-ai',;
      name: 'Quantum AI Neural Networks',;
      tagline: 'Quantum-powered AI with advanced consciousness capabilities',;
      category: 'Quantum AI',;
      price: '$1,299',;
      period: '/month',;
      setupTime: '10-14 weeks',;
      customers: '15+',;
      features: [;
        'Quantum neural networks',;
        'Consciousness simulation',;
        'Advanced learning',;
        'Quantum optimization',;
      ],;
      benefits: [;
        'Unprecedented AI capabilities',;
        'Breakthrough research',;
        'Competitive advantage',;
      ],      roi: 'Average 8 && 8.5x ROI within 24 months',      price: '$1,299';
      period: '/month',;
      setupTime: '10-14 weeks',;
      customers: '15+',;
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization'],;
      benefits: ['Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage'],;
      roi: 'Average 8 && 8.5x ROI within 24 months',;
      marketSize: '$2B',;
      growthRate: '89% YoY',;
      popular: true,;
      icon: Atom,;
      color: 'from-blue-500 to-cyan-500',;
    },;
=======
      id: 'ai-bi'
      name: 'AI Business Intelligence'
      tagline:
        'Transform data into actionable insights with AI-powered analytics',      category: 'AI & Analytics',      tagline: 'Transform data into actionable insights with AI-powered analytics'
      category: 'AI & Analytics'
      price: '$499'
      period: '/month'
      setupTime: '2-3 weeks'
      customers: '150+'
      features: [
        'AI-powered dashboards'
        'Predictive analytics'
        'Real-time insights'
        'Custom reporting'
      ]
      benefits: [
        '30% faster decision making'
        'Improved data accuracy'
        'Cost reduction'
      ],      roi: 'Average 3.2x ROI within 6 months',      features: ['AI-powered dashboardsPredictive analyticsReal-time insightsCustom reporting']
      benefits: ['30% faster decision makingImproved data accuracyCost reduction']
      roi: 'Average 3.2x ROI within 6 months'
      marketSize: '$25B'
      growthRate: '25% YoY'
      popular: true
      icon: Brain
      color: 'from-purple-500 to-pink-500'
    }
    {
      id: 'quantum-cyber'
      name: 'Quantum Cybersecurity'
      tagline:
        'Future-proof security with quantum-resistant encryption and AI threat detection',      category: 'Security',      color: 'from-purple-500 to-pink-500'
    }
    {
      id: 'quantum-cyber'
      name: 'Quantum Cybersecurity'
      tagline: 'Future-proof security with quantum-resistant encryption and AI threat detection'
      price: '$799'
      period: '/month'
      setupTime: '4-6 weeks'
      customers: '75+'
      features: [
        'Quantum-resistant encryption'
        'AI threat detection'
        'Zero-trust architecture'
        '24/7 monitoring'
      ]
      benefits: [
        '99.99% threat prevention'
        'Compliance ready'
        'Reduced security incidents'
      ],      roi: 'Average 4.1x ROI within 8 months',      features: ['Quantum-resistant encryptionAI threat detectionZero-trust architecture24/7 monitoring']
      benefits: ['99.99% threat preventionCompliance readyReduced security incidents']
      roi: 'Average 4.1x ROI within 8 months'
      marketSize: '$18B'
      growthRate: '32% YoY'
      popular: false
      icon: Shield
      color: 'from-red-500 to-orange-500'
    }
    {
      id: 'edge-computing'
      name: 'Edge Computing Orchestration'
      tagline:
        'Deploy and manage applications at the edge with intelligent orchestration',      category: 'Infrastructure',      color: 'from-red-500 to-orange-500'
    }
    {
      id: 'edge-computing'
      name: 'Edge Computing Orchestration'
      tagline: 'Deploy and manage applications at the edge with intelligent orchestration'
      price: '$349'
      period: '/month'
      setupTime: '1-2 weeks'
      customers: '200+'
      features: [
        'Edge node management'
        'IoT device management'
        'Real-time monitoring'
        'Auto-scaling'
      ]
      benefits: [
        '50% latency reduction'
        'Improved reliability'
        'Cost optimization'
      ],      roi: 'Average 2.8x ROI within 4 months',      features: ['Edge node managementIoT device managementReal-time monitoringAuto-scaling']
      benefits: ['50% latency reductionImproved reliabilityCost optimization']
      roi: 'Average 2.8x ROI within 4 months'
      marketSize: '$12B'
      growthRate: '28% YoY'
      popular: false
      icon: Cpu
      color: 'from-emerald-500 to-teal-500'
    }
      id: 'space-tech'
      name: 'Space Technology Innovation'
      tagline:
        'Accelerate space exploration with cutting-edge technology solutions'
      category: 'Space Tech'
      price: '$2,499'
      period: '/month'
      setupTime: '8-12 weeks'
      customers: '25+'
      features: [
        'Satellite management'
        'AI mission planning'
        'Quantum communication'
        'Space analytics'
      ]
      benefits: [
        'Mission success rate 95%+'
        'Reduced launch costs'
        'Advanced capabilities'
      ],      roi: 'Average 5.2x ROI within 12 months',      features: ['Satellite managementAI mission planningQuantum communicationSpace analytics']
      benefits: ['Mission success rate 95%+Reduced launch costsAdvanced capabilities']
      roi: 'Average 5.2x ROI within 12 months'
      marketSize: '$8B'
      growthRate: '45% YoY'
      popular: true
      icon: Rocket
      color: 'from-violet-500 to-purple-500'
    }
    {
      id: 'neural-interface'
      name: 'Neural Interface Development'
      tagline:
        'Build the future of human-computer interaction with neural interfaces',      category: 'Emerging Tech',      color: 'from-violet-500 to-purple-500'
    }
    {
      id: 'neural-interface'
      name: 'Neural Interface Development'
      tagline: 'Build the future of human-computer interaction with neural interfaces'
      price: '$899'
      period: '/month'
      setupTime: '6-8 weeks'
      customers: '40+'
      features: [
        'BCI development tools'
        'Neural signal processing'
        'AI pattern recognition'
        'Safety protocols'
      ]
      benefits: [
        'Revolutionary UX'
        'Accessibility improvements'
        'Research advancement'
      ],      roi: 'Average 6.8x ROI within 18 months',      features: ['BCI development toolsNeural signal processingAI pattern recognitionSafety protocols']
      benefits: ['Revolutionary UXAccessibility improvementsResearch advancement']
      roi: 'Average 6.8x ROI within 18 months'
      marketSize: '$3B'
      growthRate: '67% YoY'
      popular: false
      icon: Brain
      color: 'from-pink-500 to-rose-500'
    },    {      color: 'from-pink-500 to-rose-500'
    }
    {
      id: 'quantum-ai'
      name: 'Quantum AI Neural Networks'
      tagline: 'Quantum-powered AI with advanced consciousness capabilities'
      category: 'Quantum AI'
      price: '$1,299'
      period: '/month'
      setupTime: '10-14 weeks'
      customers: '15+'
      features: [
        'Quantum neural networks'
        'Consciousness simulation'
        'Advanced learning'
        'Quantum optimization'
      ]
      benefits: [
        'Unprecedented AI capabilities'
        'Breakthrough research'
        'Competitive advantage'
      ],      roi: 'Average 8.5x ROI within 24 months',      price: '$1,299';
      period: '/month'
      setupTime: '10-14 weeks'
      customers: '15+'
      features: ['Quantum neural networksConsciousness simulationAdvanced learningQuantum optimization']
      benefits: ['Unprecedented AI capabilitiesBreakthrough researchCompetitive advantage']
      roi: 'Average 8.5x ROI within 24 months'
      marketSize: '$2B'
      growthRate: '89% YoY'
      popular: true
      icon: Atom
      color: 'from-blue-500 to-cyan-500'
    }
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  ];
  const categories = [
    'all'
    ...Array.from(new Set(services.map(s => s.category)))
    'all',
    ...Array.from(new Set(services.map(s => s.category))),

<<<<<<< HEAD
  ];

  ];

  const filteredServices = services.filter(service => {
    const matchesCategory =
      selectedCategory === 'all' |service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) |
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase());
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <section id='services' className='py-24 px-6 relative overflow-hidden'>;
      {/* Background */}

<<<<<<< HEAD
<<<<<<< HEAD
    return matchesCategory && matchesSearch;  });
  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React && React.ComponentType<any> } = {    const matchesCategory = selectedCategory === 'all' || service && service.category === selectedCategory;
    const matchesSearch = service && service.name.toLowerCase().includes(searchTerm && searchTerm.toLowerCase()) ||;
                         service && service.tagline.toLowerCase().includes(searchTerm && searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  const getCategoryIcon = (category: string) => {;
    const iconMap: { [key: string]: React && React.ComponentType<any> } = {;
      'AI & Analytics': Brain,;
      Security: Shield,;
      Infrastructure: Cpu,;
      'Space Tech': Rocket,;
      'Emerging Tech': Brain,;
      'Quantum AI': Atom,;
    };
    return iconMap[category] || Brain;
  };
  return (
    <section id='services' className='py-24 px-6 relative overflow-hidden'>;
      {/* Background */}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className='absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'>;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]' />;
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0 && 0.1),transparent_50%)]' />;
      </div>;
      <div className='max-w-7xl mx-auto relative z-10'>;
        {/* Header */}
        <div className='text-center mb-16'>;
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
            <span className='bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent'>;
              Our Services;
            </span>;
          </h2>;
          <p className='text-xl text-white/70 max-w-3xl mx-auto leading-relaxed'>;
            Cutting-edge technology solutions designed to transform your;
            business and accelerate innovation          </p>;
        </div>;
        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>    };
    return iconMap[category] || Brain;
<<<<<<< HEAD
<<<<<<< HEAD
  });
  const getCategoryIcon = (category: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'AI & Analytics': Brain;
      'Security': Shield;
      'Infrastructure': Cpu;
      'Space Tech': Rocket;
      'Emerging Tech': Brain;
      'Quantum AI': Atom
    };
    return iconMap[category] || Brain
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  };
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">;
      {/* Background */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0 && 0.1),transparent_50%)]" />;
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0 && 0.1),transparent_50%)]" />;
      </div>;
      <div className="max-w-7xl mx-auto relative z-10">;
        {/* Header */}
        <div className="text-center mb-16">;
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">;
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">;
              Our Services;
            </span>;
          </h2>;
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">;
            Cutting-edge technology solutions designed to transform your business and accelerate innovation;
          </p>;
        </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======

        {/* Filters */}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        <div className="flex flex-col md:flex-row gap-4 mb-12 justify-center items-center">
          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">

<<<<<<< HEAD



        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>    }
    return iconMap[category] |Brain
  }
  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.1),transparent_50%)]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Cutting-edge technology solutions designed to transform your business and accelerate innovation
          </p>
        </div>
        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>
          {/* Category Filter */}
          <div className='relative'>
            <select
              value={selectedCategory}
              onChange={e => setSelectedCategory(e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12'
            >
              {categories.map(category => (
                <option
                  key={category}
                  value={category}
                  className='bg-slate-800 text-white'
                >                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />          {/* Category Filter */}
=======

        {/* Filters */}
        <div className='flex flex-col md:flex-row gap-4 mb-12 justify-center items-center'>
          {/* Category Filter */}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-400 transition-colors duration-300 appearance-none pr-12"
            >
              {categories.map((category) => (
                <option key={category} value={category} className="bg-slate-800 text-white">

<<<<<<< HEAD

=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}


            </select>;
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />;
          </div>;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />
          </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Search */}
          <div className='relative'>;
            <input
              type='text'
              placeholder='Search services...'
              value={searchTerm}

              onChange={e => setSearchTerm(e && e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64';
            />;
            <Filter className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50' />          </div>;
        </div>;


        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          </div>;

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {/* Search */}
          <div className="relative">;
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}


<<<<<<< HEAD
<<<<<<< HEAD



              {/* Service Content */}
              <div className='p-8'>

        </div>

        {/* Services Grid */}
            </select>
            <ChevronDown className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50 pointer-events-none' />
          </div>
          {/* Search */}
          <div className='relative'>
            <input
              type='text'
              placeholder='Search services...'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className='px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64'
            />
            <Filter className='absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50' />          </div>
        </div>
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>          </div>
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors duration-300 w-64"
            />
            <Filter className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
          </div>
        </div>
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top-4 right-4 z-20'>
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>
                    <Star className='w-3 h-3' />                    Popular          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Popular
                  </div>
                </div>
              )}



<<<<<<< HEAD
=======
=======



              {/* Service Content */}
              <div className='p-8'>
=======
=======
              {/* Service Content */}
              <div className='p-8'>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
          {filteredServices && filteredServices.map((service, index) => (;
            <div
              key={service && service.id}
              className='group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
              {/* Popular Badge */}
              {service && service.popular && (;
                <div className='absolute top-4 right-4 z-20'>;
                  <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1'>;
                    <Star className='w-3 h-3' />                    Popular          {filteredServices && filteredServices.map((service, index) => (;
            <div
              key={service && service.id}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">;
              {/* Popular Badge */}
              {service && service.popular && (;
                <div className="absolute top-4 right-4 z-20">;
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">;
                    <Star className="w-3 h-3" />;
                    Popular;
                  </div>;
                </div>;
              )}
              {/* Service Content */}

              <div className='p-8'>




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Icon and Category */}
                <div className='flex items-center justify-between mb-4'>;
                  <div

      color: 'from - blue - 500 to - cyan - 500',
    },
  ];
;
  const categories = [;
    'all',
    ...Array.from (new Set (services.map (string => s.category))),
  const filtered_services = services.filter (service => {
    const matches_category =;
      selected_category === 'all' || service.category === selected_category;
    const matches_search =;
      service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
      service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;  });
;
  const getCategoryIcon = (category: string) =>: any {
    const icon_map: { [key: string]: React.ComponentType < any> } = {    const matches_category = selected_category === 'all' || service.category === selected_category;
    const matches_search = service.name.toLowerCase ().includes (search_term.toLowerCase ()) ||;
                        service.tagline.toLowerCase ().includes (search_term.toLowerCase ());
    return matches_category && matches_search;
  const getCategoryIcon = (category: string) =>: any {
    const icon_map: { [key: string]: React.ComponentType < any> } = {
      'AI & Analytics': Brain,
      Security: Shield,
      Infrastructure: Cpu,
      'Space Tech': Rocket,
      'Emerging Tech': Brain,
      'Quantum AI': Atom,
    }
    return icon_map[category] || Brain;
  }
;
  return (
    <section id='services' className='py - 24 px - 6 relative overflow - hidden'>;
      {/* Background */}
      <div className='absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950'>;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]' />;
        <div className='absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (168, 85, 247, 0.1), transparent_50%)]' />;
      </div>;
      <div className='max - w-7xl mx - auto relative z - 10'>;
        {/* Header */}
        <div className='text - center mb - 16'>;
          <h2 className='text - 4xl md:text - 5xl font - bold text - white mb - 6'>;
            <span className='bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent'>;
              Our Services;
            </span>;
          </h2>;
          <p className='text - xl text - white / 70 max - w-3xl mx - auto leading - relaxed'>;
            Cutting - edge technology solutions designed to transform your;
            business and accelerate innovation          </p>;
        </div>;
        {/* Filters */}
        <div className='flex flex - col md:flex - row gap - 4 mb - 12 justify - center items - center'>    }
    return icon_map[category] || Brain;
  }
;
  return (
    <section id="services" className="py - 24 px - 6 relative overflow - hidden">;
      {/* Background */}
      <div className="absolute inset - 0 bg - gradient - to - br from - slate - 950 via - slate - 900 to - slate - 950">;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_50%_50%, rgba (59, 130, 246, 0.1), transparent_50%)]" />;
        <div className="absolute inset - 0 bg-[radial - gradient (circle_at_80%_20%, rgba (168, 85, 247, 0.1), transparent_50%)]" />;
      </div>;
      <div className="max - w-7xl mx - auto relative z - 10">;
        {/* Header */}
        <div className="text - center mb - 16">;
          <h2 className="text - 4xl md:text - 5xl font - bold text - white mb - 6">;
            <span className="bg - gradient - to - r from - blue - 400 to - cyan - 400 bg - clip - text text - transparent">;
              Our Services;
            </span>;
          </h2>;
          <p className="text - xl text - white / 70 max - w-3xl mx - auto leading - relaxed">;
            Cutting - edge technology solutions designed to transform your business and accelerate innovation;
          </p>;
        </div>;
        {/* Filters */}
        <div className='flex flex - col md:flex - row gap - 4 mb - 12 justify - center items - center'>;
          {/* Category Filter */}
          <div className='relative'>;
            <select;
              value={selected_category}
              on_change={e => setSelectedCategory (e.target.value)}
              className='px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white focus:outline - none focus:border - blue - 400 transition - colors duration - 300 appearance - none pr - 12';
            >;
              {categories.map (category => (
                <option;
                  key={category}
                  value={category}
                  className='bg - slate - 800 text - white';
                >                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>;
            <ChevronDown className='absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50 pointer - events - none' />          {/* Category Filter */}
          <div className="relative">;
            <select;
              value={selected_category}
              on_change={(e) => setSelectedCategory (e.target.value)}
              className="px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white focus:outline - none focus:border - blue - 400 transition - colors duration - 300 appearance - none pr - 12";
            >;
              {categories.map ((category) => (
                <option key={category} value={category} className="bg - slate - 800 text - white">;
                  {category === 'all' ? 'All Categories' : category}
                </option>))}
            </select>;
            <ChevronDown className='absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50 pointer - events - none' />;
          </div>;
          {/* Search */}
          <div className='relative'>;
            <input;
              type='text';
              placeholder='Search services...';
              value={search_term}
              on_change={e => setSearchTerm (e.target.value)}
              className='px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white placeholder - white / 50 focus:outline - none focus:border - blue - 400 transition - colors duration - 300 w - 64';
            />;
            <Filter className='absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50' />          </div>;
        </div>;
        {/* Services Grid */}
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>          </div>;
          {/* Search */}
          <div className="relative">;
            <input;
              type="text";
              placeholder="Search services...";
              value={search_term}
              on_change={(e) => setSearchTerm (e.target.value)}
              className="px - 6 py - 3 bg - white / 5 border border - white / 10 rounded - xl text - white placeholder - white / 50 focus:outline - none focus:border - blue - 400 transition - colors duration - 300 w - 64";
            />;
            <Filter className="absolute right - 4 top - 1/2 transform -translate - y-1 / 2 w - 5 h - 5 text - white / 50" />;
          </div>;
        </div>;
        {/* Services Grid */}
        <div className='grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8'>;
          {filtered_services.map ((service, index) => (
            <div;
              key={service.id}
              className='group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl';
            >;
              {/* Popular Badge */}
              {service.popular && (
                <div className='absolute top - 4 right - 4 z - 20'>;
                  <div className='bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1'>;
                    <Star className='w - 3 h - 3' />                    Popular          {filtered_services.map ((service, index) => (
            <div;
              key={service.id}
              className="group relative overflow - hidden rounded - 2xl border border - white / 10 bg - gradient - to - br from - white / 5 to - white / 10 backdrop - blur - xl hover:border - cyan - 400 / 30 transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
            >;
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top - 4 right - 4 z - 20">;
                  <div className="bg - gradient - to - r from - yellow - 500 to - orange - 500 text - black text - xs font - bold px - 3 py - 1 rounded - full flex items - center gap - 1">;
                    <Star className="w - 3 h - 3" />;
                    Popular;
                  </div>;
                </div>)}
              {/* Service Content */}
              <div className='p - 8'>;
<<<<<<< HEAD

              {/* Service Content */}
              <div className='p-8'>
=======
=======

              {/* Service Content */}
              <div className='p-8'>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>

        {/* Services Grid */}

                    Popular

                  </div>
                </div>
              )}

              {/* Service Content */}
              <div className='p-8'>

                {/* Icon and Category */}
                <div className='flex items - center justify - between mb - 4'>;
                  <div;
                    className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} p - 4 flex items - center justify - center text - 2xl`}
                  >;
                    <service.icon className='w - 8 h - 8 text - white' />;
                  </div>;
                  <div className='text - right'>;
                    <div className='text - xs text - white / 60 mb - 1'>;
                      {getCategoryIcon (service.category)({
                        class_name: 'w - 3 h - 3',
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      })}
                    </div>;
                    <div className='text - xs text - white / 40'>;
                      {service.category}
<<<<<<< HEAD
<<<<<<< HEAD
              <div className="p-8">
                {/* Icon and Category */}
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

              <div className="p-8">
                {/* Icon and Category */}

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 flex items-center justify-center text-2xl`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service.category)({ className: 'w-3 h-3' })}</div>
                    <div className="text-xs text-white/40">{service.category}</div>
                  </div>
                </div>
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service && service.color} p-4 flex items-center justify-center text-2xl`}>;
                    <service && service.icon className='w-8 h-8 text-white' />;
                  </div>;
                  <div className='text-right'>;
                    <div className='text-xs text-white/60 mb-1'>;
                      {getCategoryIcon(service && service.category)({;
                        className: 'w-3 h-3',;
                      })}
                    </div>;
                    <div className='text-xs text-white/40'>;
                      {service && service.category}
                    </div>                  </div>;
                </div>;
                {/* Service Info */}                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">;
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service && service.color} p-4 flex items-center justify-center text-2xl`}>;
                    <service && service.icon className="w-8 h-8 text-white" />;
                  </div>;
                  <div className="text-right">;
                    <div className="text-xs text-white/60 mb-1">{getCategoryIcon(service && service.category)({ className: 'w-3 h-3' })}</div>;
                    <div className="text-xs text-white/40">{service && service.category}</div>;
                  </div>;
                </div>;
                {/* Service Info */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <h3 className="text-xl font-bold mb-3 text-white">{service.name}</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">{service.tagline}</p>
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-white/60">{service.period}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-white/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {service.setupTime}
                    </span>
                    <span className="flex items-center gap-1">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                      <Users className="w-3 h-3" />
                      {service.customers} customers
                    </span>
                  </div>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="mb-6">
                <div className="mb-6">
                {/* Key Features */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Features:
                  </h4>
                  <div className='space-y-2'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <CheckCircle className='w-3 h-3 text-green-400' />                        {feature}                <div className="mb-6">
=======
<<<<<<< HEAD
<div className='mb-6'>;
                  <div className='flex items-baseline gap-2 mb-2'>;
                    <span className='text-3xl font-bold text-white'>;
                      {service && service.price}
                    </span>;
                    <span className='text-white/60'>{service && service.period}</span>;
                  </div>;
                  <div className='flex items-center gap-4 text-xs text-white/50'>;
                    <span className='flex items-center gap-1'>;
                      <Clock className='w-3 h-3' />;
                      {service && service.setupTime}
                    </span>;
                    <span className='flex items-center gap-1'>;
                      <Users className='w-3 h-3' />                      {service && service.customers} customers                    <span className="flex items-center gap-1">;
                      <Users className="w-3 h-3" />;
                      {service && service.customers} customers;
                    </span>;
                  </div>;
                </div>;
                {/* Key Features */}

=======
                <div className="mb-6">
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                <div className="mb-6">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                  <div className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <CheckCircle className="w-3 h-3 text-green-400" />
<<<<<<< HEAD
<<<<<<< HEAD
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className='mb-6'>
                  <h4 className='text-sm font-semibold text-white mb-3'>
                    Key Benefits:
                  </h4>
                  <div className='space-y-2'>
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-2 text-xs text-white/70'
                      >
                        <TrendingUp className='w-3 h-3 text-blue-400' />                        {benefit}                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-3">Key Benefits:</h4>
                  <div className="space-y-2">
                    {service.benefits.slice(0, 2).map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white/70">
                        <TrendingUp className="w-3 h-3 text-blue-400" />
                      </div>
                    ))}
                  </div>
                </div>
=======
                        {feature}
                      </div>

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
                    ))}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                        {feature}
                      </div>

                    ))}
                  </div>
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

                  </div>;
                </div>;


<<<<<<< HEAD



=======
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                {/* Benefits */}


                    ))}
<<<<<<< HEAD
=======
                  </div>
                </div>
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a





<<<<<<< HEAD
                {/* ROI and Market Info */}

                <div className="mb-6 p-4 bg-white/5 rounded-lg">
<<<<<<< HEAD

                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>
                  <div className='text-xs text-white/60 mb-2'>
                    ROI & Market Position
                  </div>
                  <div className='text-xs text-white/80 leading-relaxed'>
                    {service.roi}
                  </div>
                  <div className='mt-2 text-xs text-white/60'>                    Market: {service.marketSize} • Growth: {service.growthRate}                <div className="mb-6 p-4 bg-white/5 rounded-lg">
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
                {/* ROI and Market Info */}

                <div className="mb-6 p-4 bg-white/5 rounded-lg">
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>
                  <div className="text-xs text-white/80 leading-relaxed">{service.roi}</div>
                  <div className="mt-2 text-xs text-white/60">
                    Market: {service.marketSize} • Growth: {service.growthRate}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  </div>
                </div>
                  </div>;
                </div>;
                {/* ROI and Market Info */}
                <div className='mb-6 p-4 bg-white/5 rounded-lg'>;
                  <div className='text-xs text-white/60 mb-2'>;
                    ROI & Market Position;
                  </div>;
                  <div className='text-xs text-white/80 leading-relaxed'>;
                    {service && service.roi}
                  </div>;
                  <div className='mt-2 text-xs text-white/60'>                    Market: {service && service.marketSize} • Growth: {service && service.growthRate}                <div className="mb-6 p-4 bg-white/5 rounded-lg">;
                  <div className="text-xs text-white/60 mb-2">ROI & Market Position</div>;
                  <div className="text-xs text-white/80 leading-relaxed">{service && service.roi}</div>;
                  <div className="mt-2 text-xs text-white/60">;
                  </div>;
                </div>;
                {/* Action Buttons */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    </div>                  </div>;
                </div>;
                {/* Service Info */}                {/* Icon and Category */}
                <div className="flex items - center justify - between mb - 4">;
                  <div className={`w - 16 h - 16 rounded - 2xl bg - gradient - to - br ${service.color} p - 4 flex items - center justify - center text - 2xl`}>;
                    <service.icon className="w - 8 h - 8 text - white" />;
                  </div>;
                  <div className="text - right">;
                    <div className="text - xs text - white / 60 mb - 1">{getCategoryIcon (service.category)({ class_name: 'w - 3 h - 3' })}</div>;
                    <div className="text - xs text - white / 40">{service.category}</div>;
                  </div>;
                </div>;
                {/* Service Info */}
                <h3 className='text - xl font - bold mb - 3 text - white'>;
                  {service.name}
                </h3>;
                <p className='text - white / 70 text - sm mb - 4 leading - relaxed'>;
                  {service.tagline}
                </p>;
                {/* Pricing */}
                <div className='mb - 6'>;
                  <div className='flex items - baseline gap - 2 mb - 2'>;
                    <span className='text - 3xl font - bold text - white'>;
                      {service.price}
                    </span>;
                    <span className='text - white / 60'>{service.period}</span>;
                  </div>;
                  <div className='flex items - center gap - 4 text - xs text - white / 50'>;
                    <span className='flex items - center gap - 1'>;
                      <Clock className='w - 3 h - 3' />;
                      {service.setup_time}
                    </span>;
                    <span className='flex items - center gap - 1'>;
                      <Users className='w - 3 h - 3' />                      {service.customers} customers                    <span className="flex items - center gap - 1">;
                      <Users className="w - 3 h - 3" />;
                      {service.customers} customers;
                    </span>;
                  </div>;
                </div>;
                {/* Key Features */}
                <div className='mb - 6'>;
                  <h4 className='text - sm font - semibold text - white mb - 3'>;
                    Key Features:;
                  </h4>;
                  <div className='space - y-2'>;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center gap - 2 text - xs text - white / 70';
                      >;
                        <CheckCircle className='w - 3 h - 3 text - green - 400' />                        {feature}                <div className="mb - 6">;
                  <h4 className="text - sm font - semibold text - white mb - 3">Key Features:</h4>;
                  <div className="space - y-2">;
                    {service.features.slice (0, 3).map ((feature, idx) => (
                      <div key={idx} className="flex items - center gap - 2 text - xs text - white / 70">;
                        <CheckCircle className="w - 3 h - 3 text - green - 400" />;
                      </div>))}
                  </div>;
                </div>;
                {/* Benefits */}
                <div className='mb - 6'>;
                  <h4 className='text - sm font - semibold text - white mb - 3'>;
                    Key Benefits:;
                  </h4>;
                  <div className='space - y-2'>;
                    {service.benefits.slice (0, 2).map ((benefit, idx) => (
                      <div;
                        key={idx}
                        className='flex items - center gap - 2 text - xs text - white / 70';
                      >;
                        <TrendingUp className='w - 3 h - 3 text - blue - 400' />                        {benefit}                <div className="mb - 6">;
                  <h4 className="text - sm font - semibold text - white mb - 3">Key Benefits:</h4>;
                  <div className="space - y-2">;
                    {service.benefits.slice (0, 2).map ((benefit, idx) => (
                      <div key={idx} className="flex items - center gap - 2 text - xs text - white / 70">;
                        <TrendingUp className="w - 3 h - 3 text - blue - 400" />;
                      </div>))}
                  </div>;
                </div>;
                {/* ROI and Market Info */}
                <div className='mb - 6 p - 4 bg - white / 5 rounded - lg'>;
                  <div className='text - xs text - white / 60 mb - 2'>;
                    ROI & Market Position;
                  </div>;
                  <div className='text - xs text - white / 80 leading - relaxed'>;
                    {service.roi}
                  </div>;
                  <div className='mt - 2 text - xs text - white / 60'>                    Market: {service.market_size} • Growth: {service.growth_rate}                <div className="mb - 6 p - 4 bg - white / 5 rounded - lg">;
                  <div className="text - xs text - white / 60 mb - 2">ROI & Market Position</div>;
                  <div className="text - xs text - white / 80 leading - relaxed">{service.roi}</div>;
                  <div className="mt - 2 text - xs text - white / 60">;
                  </div>;
                </div>;
                {/* Action Buttons */}
                <div className='flex gap - 3'>;
                  <button;
                    on_click={() =>;
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.name}`);
                    }
                    className='flex - 1 px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - xl font - semibold text - white transition - all duration - 300 transform hover:scale - 105'                  >;
                    Get Started;
                  </button>;
                  <button;
                    on_click={() =>;
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject = Demo request for ${service.name}`);
                    }
                    className='px - 4 py - 3 border border - white / 20 hover:border - white / 40 rounded - xl font - semibold text - white transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'                  >                <div className="flex gap - 3">;
                  <button;
                    on_click={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject = Inquiry about ${service.name}`}
                    className="flex - 1 px - 4 py - 3 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - xl font - semibold text - white transition - all duration - 300 transform hover:scale - 105";
                  >;
                    Get Started;
                  </button>;
                  <button;
                    on_click={() =>;
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject = Demo request for ${service.name}`);
                    }
                    className='px - 4 py - 3 border border - white / 20 hover:border - white / 40 rounded - xl font - semibold text - white transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'                    on_click={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject = Demo request for ${service.name}`}
                    className="px - 4 py - 3 border border - white / 20 hover:border - white / 40 rounded - xl font - semibold text - white transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10";
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                  >;
                    Demo;
                  </button>;
                </div>;
              </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                <div className="flex gap-3">
                  <button
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.name}`}
                    className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105"
                  >
                    Get Started
                  </button>
                  <button
<<<<<<< HEAD
<<<<<<< HEAD
                    onClick={() =>
                      (window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`)
                    }
                    className='px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
=======
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
                    onClick={() => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Demo request for ${service.name}`}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
                    className="px-4 py-3 border border-white/20 hover:border-white/40 rounded-xl font-semibold text-white transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
                  >
                    Demo
                  </button>
                </div>
              </div>
            </div>

          ))}
<<<<<<< HEAD

=======
        </div>

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        </div>;


        {/* CTA Section */}


        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>



              Ready to Transform Your Business?
            </h3>
            <p className='text-white/70 mb-6 max-w-2xl mx-auto'>
              Let's discuss how our cutting-edge technology solutions can
              accelerate your digital transformation journey.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
              <a
                href='mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Consultation Request'
                className='px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl'>;
                Schedule Consultation;
              </a>;
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'>              Ready to Transform Your Business?;
            </h3>;
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">;
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center">;
              <a
                href="mailto:kleber@ziontechgroup && ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">;
                Schedule Consultation;
              </a>;
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10">;
<<<<<<< HEAD
<<<<<<< HEAD
          ))}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
        </div>

        {/* CTA Section */}
        <div className='text-center mt-16'>
          <div className='bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl p-8 border border-blue-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>

              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Let's discuss how our cutting-edge technology solutions can accelerate your digital transformation journey.
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">
              <a
                href="mailto:kleber@ziontechgroup.com?subject=Consultation Request"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Schedule Consultation
              </a>
              <a
                href='tel:+13024640950'
                className='px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10'                href="tel:+13024640950"
                className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======
            </div>))}
        </div>;
        {/* CTA Section */}
        <div className='text - center mt - 16'>;
          <div className='bg - gradient - to - r from - blue - 600 / 20 to - cyan - 600 / 20 rounded - 3xl p - 8 border border - blue - 500 / 20'>;
            <h3 className='text - 2xl font - bold text - white mb - 4'>;
              Ready to Transform Your Business?;
            </h3>;
            <p className='text - white / 70 mb - 6 max - w-2xl mx - auto'>;
              Let's discuss how our cutting - edge technology solutions can;
              accelerate your digital transformation journey.;
            </p>;
            <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
              <a;
                href='mailto:kleber@ziontechgroup.com?subject = Consultation Request';
                className='px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl'              >;
                Schedule Consultation;
              </a>;
              <a;
                href='tel:+13024640950';
                className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'              >              Ready to Transform Your Business?;
            </h3>;
            <p className="text - white / 70 mb - 6 max - w-2xl mx - auto">;
              Let's discuss how our cutting - edge technology solutions can accelerate your digital transformation journey.;
            </p>;
            <div className="flex flex - col sm: flex - row gap - 4 justify - center">;
              <a;
                href="mailto:kleber@ziontechgroup.com?subject = Consultation Request";
                className="px - 8 py - 4 bg - gradient - to - r from - blue - 600 to - cyan - 600 hover:from - blue - 700 hover:to - cyan - 700 rounded - full font - semibold text - lg transition - all duration - 300 transform hover:scale - 105 hover:shadow - 2xl";
              >;
                Schedule Consultation;
              </a>;
              <a;
                href='tel:+13024640950';
                className='px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10'                href="tel:+13024640950";
                className="px - 8 py - 4 border border - white / 20 hover:border - white / 40 rounded - full font - semibold text - lg transition - all duration - 300 backdrop - blur - sm bg - white / 5 hover:bg - white / 10";
              >;
                Call Now;
              </a>;
            </div>;
          </div>;
        </div>;
      </div>;


};
export default EnhancedServicesShowcase;  );
};
export default EnhancedServicesShowcase;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    </section>);
}
;
export default EnhancedServicesShowcase);
}
;
export default EnhancedServicesShowcase;
;
<<<<<<< HEAD
<<<<<<< HEAD
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
}
};

export default EnhancedServicesShowcase;  )
}
export default EnhancedServicesShowcase;

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

};


<<<<<<< HEAD
export default EnhancedServicesShowcase;

}
}
export default EnhancedServicesShowcase;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
