export const octoberCuttingEdgeInnovations = [
  {
    id: 'quantum-security-networks',
    slug: 'ai-2025-october-quantum-security-networks-enterprise',
    title: 'AI-Powered Quantum Security Networks',
    category: 'Quantum Security',
    description: 'Master quantum-resistant security with AI-powered threat detection, post-quantum cryptography, and zero-trust networks. 99.999% uptime with <100ms threat detection.',
    icon: '🔐',
    gradient: 'from-blue-600 to-purple-600',
    metrics: {
      uptime: '99.999%',
      detection: '<100ms',
      market: '$850B',
      reduction: '90%',
    },
    highlights: [
      'Post-quantum cryptography with CRYSTALS-Kyber and Dilithium',
      'Quantum key distribution (QKD) for unhackable communication',
      'AI-powered threat detection with real-time anomaly analysis',
      'Zero-trust architecture with microsegmentation',
      'Proven in Fortune 500 financial institutions',
    ],
  },
  {
    id: 'neuromorphic-computing-edge',
    slug: 'ai-2025-october-neuromorphic-computing-edge',
    title: 'Neuromorphic Computing at the Edge',
    category: 'Edge Computing',
    description: 'Revolutionary brain-inspired computing delivering 1000x energy efficiency with spiking neural networks and event-driven processing.',
    icon: '🧠',
    gradient: 'from-green-600 to-teal-600',
    metrics: {
      efficiency: '1000x',
      power: '<1W',
      latency: '<1ms',
      market: '$2.1T',
    },
    highlights: [
      'Spiking neural networks (SNNs) with biological realism',
      'Intel Loihi 2 and BrainChip Akida deployment guides',
      'Event-driven sensors for ultra-low power consumption',
      'Real-time edge AI for autonomous systems',
      'Proven in BMW autonomous driving and NASA rovers',
    ],
  }
];

export const getFeaturedInnovations = () => {
  return octoberCuttingEdgeInnovations;
};

export const getInnovationsByCategory = (category: string) => {
  return octoberCuttingEdgeInnovations.filter(innovation => innovation.category === category);
};