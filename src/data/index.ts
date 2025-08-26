// Export all comprehensive services
export { comprehensiveInnovativeServices } from '../../data/comprehensive-innovative-services-2025';
export { revolutionary2025Services } from '../../data/revolutionary-2025-services';

// Export service types
export type { ComprehensiveInnovativeService } from '../../data/comprehensive-innovative-services-2025';
export type { Revolutionary2025Service } from '../../data/revolutionary-2025-services';

// Combined services array
export const allServices = [
  ...require('../../data/comprehensive-innovative-services-2025').comprehensiveInnovativeServices,
  ...require('../../data/revolutionary-2025-services').revolutionary2025Services
];

// Service categories
export const serviceCategories = [
  'AI Business Intelligence',
  'Quantum Computing',
  'Cybersecurity',
  'Cloud Infrastructure',
  'Data Analytics',
  'Blockchain & Web3',
  'Internet of Things',
  'FinTech & Banking',
  'Healthcare AI',
  'Autonomous Systems',
  'AI & Consciousness Research',
  'Quantum AI & Mental Health',
  'Neural Interface & BCI',
  'Quantum Cloud & IT',
  'AI Cybersecurity & Defense'
];

// Contact information
export const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};