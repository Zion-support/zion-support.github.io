export type EmergingTechService = {
  id: string;
  title: string;
  description: string;
  category: 'Quantum Computing' | 'Neuromorphic Computing' | 'Brain-Computer Interfaces' | 'Synthetic Biology' | 'Fusion Energy' | 'Space Mining' | 'Digital Twins' | 'Metaverse Infrastructure' | 'Autonomous Systems' | 'Biocomputing' | 'Nanotechnology' | 'Advanced Robotics';
  price: string;
  billing: 'month' | 'project' | 'hour' | 'year';
  features: string[];
  benefits: string[];
  useCases: string[];
  marketSize: string;
  targetAudience: string;
  competitiveAdvantage: string;
  ctaLabel: string;
  href: string;
  external?: boolean;
};

export const emergingTechServices2025: EmergingTechService[] = [
  {
    id: 'quantum-ai-platform',
    title: 'Quantum AI Platform',
    description: 'Revolutionary quantum computing platform that accelerates AI training by 1000x, enabling breakthroughs in drug discovery, financial modeling, and climate prediction.',
    category: 'Quantum Computing',
    price: '$50,000',
    billing: 'month',
    features: [
      'Quantum error correction and noise mitigation',
      'Hybrid quantum-classical algorithms',
      'Real-time quantum circuit optimization',
      'Integration with existing AI frameworks',
      'Quantum advantage benchmarking tools',
      'Multi-qubit entanglement management'
    ],
    benefits: [
      '1000x faster AI model training',
      'Unprecedented computational power',
      'Breakthrough scientific discoveries',
      'Competitive advantage in research',
      'Future-proof technology investment',
      'Access to quantum computing resources'
    ],
    useCases: [
      'Drug discovery and molecular modeling',
      'Financial risk assessment and optimization',
      'Climate change prediction models',
      'Cryptography and cybersecurity',
      'Machine learning optimization',
      'Scientific research acceleration'
    ],
    marketSize: '$1.2B by 2025',
    targetAudience: 'Research institutions, pharmaceutical companies, financial services, government agencies',
    competitiveAdvantage: 'First-to-market quantum AI platform with proven quantum advantage',
    ctaLabel: 'Explore Quantum AI',
    href: '/services/quantum-ai-platform'
  },
  {
    id: 'neuromorphic-computing-suite',
    title: 'Neuromorphic Computing Suite',
    description: 'Brain-inspired computing platform that mimics neural networks for ultra-efficient AI processing, reducing energy consumption by 90% while maintaining performance.',
    category: 'Neuromorphic Computing',
    price: '$25,000',
    billing: 'month',
    features: [
      'Spiking neural network architecture',
      'Event-driven processing',
      'Ultra-low power consumption',
      'Real-time learning capabilities',
      'Hardware-software co-design',
      'Adaptive neural plasticity'
    ],
    benefits: [
      '90% reduction in energy consumption',
      'Real-time learning and adaptation',
      'Unlimited scalability',
      'Fault-tolerant architecture',
      'Bio-inspired intelligence',
      'Sustainable computing solution'
    ],
    useCases: [
      'Edge AI and IoT devices',
      'Autonomous vehicle systems',
      'Smart city infrastructure',
      'Healthcare monitoring devices',
      'Industrial automation',
      'Consumer electronics'
    ],
    marketSize: '$8.5B by 2027',
    targetAudience: 'IoT manufacturers, automotive companies, healthcare providers, smart city planners',
    competitiveAdvantage: 'Industry-leading energy efficiency with proven neural network performance',
    ctaLabel: 'Discover Neuromorphic Computing',
    href: '/services/neuromorphic-computing'
  },
  {
    id: 'brain-computer-interface-platform',
    title: 'Brain-Computer Interface Platform',
    description: 'Advanced BCI platform enabling direct communication between the human brain and computers, revolutionizing healthcare, gaming, and accessibility.',
    category: 'Brain-Computer Interfaces',
    price: '$100,000',
    billing: 'project',
    features: [
      'Non-invasive EEG signal processing',
      'Real-time brain activity decoding',
      'Machine learning-based pattern recognition',
      'Multi-modal sensor integration',
      'Customizable control interfaces',
      'Clinical validation tools'
    ],
    benefits: [
      'Restore mobility for paralyzed patients',
      'Enhance cognitive capabilities',
      'Revolutionary gaming experiences',
      'Accessibility for disabled users',
      'Medical research advancement',
      'Human-computer symbiosis'
    ],
    useCases: [
      'Medical rehabilitation and therapy',
      'Assistive technology for disabilities',
      'Gaming and entertainment',
      'Research and development',
      'Education and training',
      'Performance enhancement'
    ],
    marketSize: '$3.7B by 2027',
    targetAudience: 'Healthcare providers, research institutions, gaming companies, accessibility organizations',
    competitiveAdvantage: 'Most advanced non-invasive BCI technology with clinical validation',
    ctaLabel: 'Explore BCI Technology',
    href: '/services/brain-computer-interface'
  },
  {
    id: 'synthetic-biology-platform',
    title: 'Synthetic Biology Platform',
    description: 'Revolutionary platform for designing and engineering biological systems, enabling breakthroughs in medicine, agriculture, and sustainable materials.',
    category: 'Synthetic Biology',
    price: '$75,000',
    billing: 'month',
    features: [
      'DNA design and synthesis tools',
      'CRISPR gene editing platform',
      'Biological circuit design',
      'Metabolic pathway engineering',
      'Protein structure prediction',
      'Biosafety and biosecurity tools'
    ],
    benefits: [
      'Revolutionary medical treatments',
      'Sustainable agriculture solutions',
      'Bio-based materials production',
      'Environmental remediation',
      'Personalized medicine',
      'Scientific breakthrough acceleration'
    ],
    useCases: [
      'Drug discovery and development',
      'Agricultural crop improvement',
      'Bioremediation and cleanup',
      'Biofuel production',
      'Medical diagnostics',
      'Research and development'
    ],
    marketSize: '$19.8B by 2027',
    targetAudience: 'Pharmaceutical companies, agricultural firms, research institutions, environmental organizations',
    competitiveAdvantage: 'Most comprehensive synthetic biology platform with proven success in multiple industries',
    ctaLabel: 'Discover Synthetic Biology',
    href: '/services/synthetic-biology'
  },
  {
    id: 'fusion-energy-simulation',
    title: 'Fusion Energy Simulation Platform',
    description: 'Advanced simulation platform for fusion energy research, accelerating the development of clean, unlimited energy sources.',
    category: 'Fusion Energy',
    price: '$200,000',
    billing: 'project',
    features: [
      'Plasma physics simulation',
      'Magnetic confinement modeling',
      'Thermal dynamics analysis',
      'Neutron transport simulation',
      'Materials science modeling',
      'Real-time monitoring systems'
    ],
    benefits: [
      'Unlimited clean energy potential',
      'Zero carbon emissions',
      'Energy security and independence',
      'Scientific breakthrough acceleration',
      'Global energy transformation',
      'Economic growth driver'
    ],
    useCases: [
      'Fusion reactor design',
      'Plasma physics research',
      'Materials testing and validation',
      'Safety analysis and optimization',
      'Educational and training programs',
      'Policy and planning support'
    ],
    marketSize: '$40B by 2030',
    targetAudience: 'Energy companies, research institutions, government agencies, educational organizations',
    competitiveAdvantage: 'Most advanced fusion simulation platform with proven accuracy and reliability',
    ctaLabel: 'Explore Fusion Energy',
    href: '/services/fusion-energy'
  },
  {
    id: 'space-mining-analytics',
    title: 'Space Mining Analytics Platform',
    description: 'Comprehensive analytics platform for space mining operations, enabling efficient resource extraction from asteroids and celestial bodies.',
    category: 'Space Mining',
    price: '$150,000',
    billing: 'month',
    features: [
      'Asteroid composition analysis',
      'Mining feasibility assessment',
      'Resource extraction planning',
      'Logistics optimization',
      'Risk assessment tools',
      'ROI calculation models'
    ],
    benefits: [
      'Access to rare earth elements',
      'Reduced environmental impact',
      'Space economy development',
      'Resource security',
      'Technological advancement',
      'Economic growth opportunities'
    ],
    useCases: [
      'Asteroid mining operations',
      'Space resource planning',
      'Investment analysis',
      'Policy development',
      'Educational programs',
      'Research and development'
    ],
    marketSize: '$3.9B by 2027',
    targetAudience: 'Space companies, mining corporations, investment firms, government agencies',
    competitiveAdvantage: 'First comprehensive space mining analytics platform with proven methodologies',
    ctaLabel: 'Explore Space Mining',
    href: '/services/space-mining'
  },
  {
    id: 'digital-twin-platform',
    title: 'Digital Twin Platform',
    description: 'Advanced digital twin technology creating virtual replicas of physical systems for real-time monitoring, optimization, and predictive maintenance.',
    category: 'Digital Twins',
    price: '$30,000',
    billing: 'month',
    features: [
      'Real-time sensor integration',
      '3D visualization and modeling',
      'Predictive analytics engine',
      'Machine learning optimization',
      'IoT device connectivity',
      'Customizable dashboards'
    ],
    benefits: [
      'Predictive maintenance',
      'Operational efficiency',
      'Cost reduction',
      'Risk mitigation',
      'Performance optimization',
      'Data-driven decision making'
    ],
    useCases: [
      'Manufacturing optimization',
      'Smart city management',
      'Healthcare monitoring',
      'Energy grid management',
      'Transportation systems',
      'Building management'
    ],
    marketSize: '$86.1B by 2028',
    targetAudience: 'Manufacturing companies, smart city planners, healthcare providers, utility companies',
    competitiveAdvantage: 'Most advanced digital twin platform with proven ROI across multiple industries',
    ctaLabel: 'Discover Digital Twins',
    href: '/services/digital-twin'
  },
  {
    id: 'metaverse-infrastructure',
    title: 'Metaverse Infrastructure Platform',
    description: 'Comprehensive infrastructure platform for building and managing metaverse experiences, enabling immersive digital worlds and virtual economies.',
    category: 'Metaverse Infrastructure',
    price: '$40,000',
    billing: 'month',
    features: [
      '3D world building tools',
      'Avatar creation and customization',
      'Virtual economy management',
      'Multi-user synchronization',
      'VR/AR integration',
      'Blockchain integration'
    ],
    benefits: [
      'Immersive user experiences',
      'Virtual economy creation',
      'Brand engagement opportunities',
      'Remote collaboration',
      'Entertainment innovation',
      'Social interaction evolution'
    ],
    useCases: [
      'Virtual events and conferences',
      'Gaming and entertainment',
      'Virtual real estate',
      'Remote work collaboration',
      'Educational experiences',
      'Social networking'
    ],
    marketSize: '$936.6B by 2030',
    targetAudience: 'Gaming companies, event organizers, educational institutions, businesses',
    competitiveAdvantage: 'Most comprehensive metaverse platform with proven scalability and user engagement',
    ctaLabel: 'Build Your Metaverse',
    href: '/services/metaverse-infrastructure'
  },
  {
    id: 'autonomous-systems-platform',
    title: 'Autonomous Systems Platform',
    description: 'Advanced platform for developing and deploying autonomous systems, enabling self-driving vehicles, drones, and robotic systems.',
    category: 'Autonomous Systems',
    price: '$60,000',
    billing: 'month',
    features: [
      'Computer vision algorithms',
      'Sensor fusion technology',
      'Path planning and navigation',
      'Machine learning training',
      'Safety and redundancy systems',
      'Real-time decision making'
    ],
    benefits: [
      'Increased safety and reliability',
      'Operational efficiency',
      'Cost reduction',
      '24/7 operation capability',
      'Scalable deployment',
      'Continuous improvement'
    ],
    useCases: [
      'Autonomous vehicles',
      'Drone delivery systems',
      'Industrial robotics',
      'Agricultural automation',
      'Security and surveillance',
      'Logistics and warehousing'
    ],
    marketSize: '$126.8B by 2027',
    targetAudience: 'Automotive companies, logistics firms, agricultural companies, security providers',
    competitiveAdvantage: 'Most advanced autonomous systems platform with proven safety and reliability',
    ctaLabel: 'Explore Autonomous Systems',
    href: '/services/autonomous-systems'
  },
  {
    id: 'biocomputing-platform',
    title: 'Biocomputing Platform',
    description: 'Revolutionary platform using biological components for computing, enabling ultra-efficient and sustainable information processing.',
    category: 'Biocomputing',
    price: '$80,000',
    billing: 'month',
    features: [
      'DNA computing algorithms',
      'Protein-based processing',
      'Biological memory systems',
      'Enzyme-based logic gates',
      'Biomolecular programming',
      'Biological error correction'
    ],
    benefits: [
      'Ultra-efficient processing',
      'Sustainable computing',
      'Massive parallel processing',
      'Low energy consumption',
      'Biological compatibility',
      'Revolutionary architecture'
    ],
    useCases: [
      'Medical diagnostics',
      'Drug discovery',
      'Environmental monitoring',
      'Data encryption',
      'Pattern recognition',
      'Scientific research'
    ],
    marketSize: '$2.1B by 2027',
    targetAudience: 'Healthcare companies, research institutions, environmental organizations, security firms',
    competitiveAdvantage: 'First commercial biocomputing platform with proven biological processing capabilities',
    ctaLabel: 'Discover Biocomputing',
    href: '/services/biocomputing'
  },
  {
    id: 'nanotechnology-platform',
    title: 'Nanotechnology Platform',
    description: 'Advanced nanotechnology platform for manipulating matter at the atomic and molecular scale, enabling breakthroughs in materials, medicine, and electronics.',
    category: 'Nanotechnology',
    price: '$100,000',
    billing: 'month',
    features: [
      'Atomic force microscopy',
      'Molecular manipulation tools',
      'Nanomaterial synthesis',
      'Quantum dot technology',
      'Nanoelectronics design',
      'Safety and toxicity testing'
    ],
    benefits: [
      'Revolutionary materials',
      'Advanced medical treatments',
      'Miniaturized electronics',
      'Enhanced energy storage',
      'Environmental solutions',
      'Scientific breakthroughs'
    ],
    useCases: [
      'Medical drug delivery',
      'Electronics manufacturing',
      'Materials science',
      'Energy storage',
      'Environmental cleanup',
      'Research and development'
    ],
    marketSize: '$33.6B by 2027',
    targetAudience: 'Pharmaceutical companies, electronics manufacturers, materials companies, research institutions',
    competitiveAdvantage: 'Most advanced nanotechnology platform with proven applications across multiple industries',
    ctaLabel: 'Explore Nanotechnology',
    href: '/services/nanotechnology'
  },
  {
    id: 'advanced-robotics-platform',
    title: 'Advanced Robotics Platform',
    description: 'Comprehensive robotics platform for developing intelligent, adaptive robots capable of complex tasks and human-like interactions.',
    category: 'Advanced Robotics',
    price: '$70,000',
    billing: 'month',
    features: [
      'Advanced AI integration',
      'Computer vision systems',
      'Natural language processing',
      'Emotional intelligence',
      'Adaptive learning',
      'Human-robot collaboration'
    ],
    benefits: [
      'Increased productivity',
      'Improved safety',
      '24/7 operation',
      'Cost reduction',
      'Quality improvement',
      'Innovation acceleration'
    ],
    useCases: [
      'Manufacturing automation',
      'Healthcare assistance',
      'Customer service',
      'Education and training',
      'Research and development',
      'Entertainment and gaming'
    ],
    marketSize: '$74.1B by 2027',
    targetAudience: 'Manufacturing companies, healthcare providers, service businesses, educational institutions',
    competitiveAdvantage: 'Most advanced robotics platform with proven human-robot collaboration capabilities',
    ctaLabel: 'Discover Advanced Robotics',
    href: '/services/advanced-robotics'
  }
];

export default emergingTechServices2025;