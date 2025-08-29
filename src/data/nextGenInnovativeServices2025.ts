export type NextGenServiceItem = {
  id: string;
  title: string;
  description: string;
  category: 'Micro SaaS' | 'IT Services' | 'AI Solutions' | 'Cybersecurity' | 'Data & Analytics' | 'Cloud & DevOps' | 'Quantum Computing' | 'Blockchain & Web3' | 'IoT & Edge' | 'Green Tech' | 'Space Tech' | 'BioTech & Health' | 'FinTech & DeFi' | 'Metaverse & AR/VR' | 'Autonomous Systems' | 'Industry Solutions';
  price: string;
  billing: 'month' | 'project' | 'hour';
  features: string[];
  benefits: string[];
  useCases: string[];
  ctaLabel: string;
  href: string;
  external?: boolean;
  marketPosition: string;
  competitiveAdvantage: string;
  integrationCapabilities: string[];
  complianceStandards: string[];
  supportLevel: string;
  deploymentOptions: string[];
  scalability: string;
  securityFeatures: string[];
  innovationLevel: 'Emerging' | 'Advanced' | 'Revolutionary' | 'Futuristic';
};

export type NextGenServiceCategory = {
  name: string;
  slug: string;
  description: string;
  items: NextGenServiceItem[];
};

export const nextGenInnovativeServices2025: NextGenServiceCategory[] = [
  {
    name: 'Autonomous Systems & Robotics',
    slug: 'autonomous-systems',
    description: 'Next-generation autonomous systems and robotics solutions for enterprise and industrial applications',
    items: [
      {
        id: 'autonomous-logistics-platform',
        title: 'Autonomous Logistics Platform',
        description: 'Intelligent logistics platform that autonomously manages supply chains, warehouse operations, and delivery systems using AI and robotics.',
        category: 'Autonomous Systems',
        price: '$12,999',
        billing: 'month',
        features: [
          'Autonomous warehouse robots',
          'AI-powered route optimization',
          'Predictive demand forecasting',
          'Real-time inventory tracking',
          'Automated quality control',
          'Multi-warehouse coordination',
          'Performance analytics',
          'Integration APIs'
        ],
        benefits: [
          'Reduce logistics costs by 40-60%',
          'Improve delivery speed by 50%',
          'Increase warehouse efficiency by 80%',
          'Reduce human error by 95%'
        ],
        useCases: [
          'E-commerce fulfillment',
          'Manufacturing logistics',
          'Retail distribution',
          'Healthcare supply chain',
          'Food and beverage logistics'
        ],
        ctaLabel: 'Logistics Automation Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Leading autonomous logistics platform for enterprise operations',
        competitiveAdvantage: 'Proprietary AI algorithms with 10+ years of logistics optimization experience',
        integrationCapabilities: ['ERP systems', 'WMS platforms', 'TMS solutions', 'IoT devices', 'Robotics systems'],
        complianceStandards: ['ISO 9001', 'ISO 14001', 'OSHA', 'Industry-specific safety standards'],
        supportLevel: 'Dedicated robotics engineers with 24/7 operational support',
        deploymentOptions: ['On-premise', 'Hybrid', 'Multi-site', 'Cloud management'],
        scalability: 'Manages 100+ warehouses and 10K+ robots globally',
        securityFeatures: ['Physical security', 'Cybersecurity', 'Safety protocols', 'Emergency shutdown systems'],
        innovationLevel: 'Revolutionary'
      },
      {
        id: 'ai-autonomous-vehicles',
        title: 'AI Autonomous Vehicle Fleet Management',
        description: 'Complete autonomous vehicle management system for fleets, including self-driving cars, trucks, and specialized vehicles.',
        category: 'Autonomous Systems',
        price: '$15,999',
        billing: 'month',
        features: [
          'Autonomous driving systems',
          'Fleet coordination AI',
          'Safety monitoring',
          'Predictive maintenance',
          'Route optimization',
          'Real-time tracking',
          'Compliance management',
          'Performance analytics'
        ],
        benefits: [
          'Reduce transportation costs by 50%',
          'Improve safety by 90%',
          'Increase fleet utilization by 40%',
          'Reduce carbon emissions by 30%'
        ],
        useCases: [
          'Ride-sharing services',
          'Delivery fleets',
          'Public transportation',
          'Industrial transport',
          'Emergency services'
        ],
        ctaLabel: 'Autonomous Fleet Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Enterprise autonomous vehicle fleet management platform',
        competitiveAdvantage: 'Advanced AI algorithms with 100M+ miles of autonomous driving data',
        integrationCapabilities: ['Fleet management systems', 'GPS tracking', 'Maintenance systems', 'Insurance platforms'],
        complianceStandards: ['NHTSA', 'DOT', 'State regulations', 'Safety standards'],
        supportLevel: 'Autonomous vehicle specialists with 24/7 monitoring support',
        deploymentOptions: ['Vehicle integration', 'Cloud management', 'Hybrid systems', 'Custom solutions'],
        scalability: 'Manages 10K+ autonomous vehicles globally',
        securityFeatures: ['Cybersecurity', 'Physical security', 'Safety protocols', 'Emergency systems'],
        innovationLevel: 'Revolutionary'
      }
    ]
  },
  {
    name: 'Metaverse & AR/VR Solutions',
    slug: 'metaverse-ar-vr',
    description: 'Cutting-edge metaverse, augmented reality, and virtual reality solutions for business and entertainment',
    items: [
      {
        id: 'enterprise-metaverse-platform',
        title: 'Enterprise Metaverse Platform',
        description: 'Corporate metaverse platform for virtual meetings, training, collaboration, and immersive business experiences.',
        category: 'Metaverse & AR/VR',
        price: '$8,999',
        billing: 'month',
        features: [
          'Virtual office spaces',
          '3D meeting rooms',
          'Collaborative workspaces',
          'Virtual training environments',
          'Avatar customization',
          'Integration tools',
          'Analytics dashboard',
          'Security controls'
        ],
        benefits: [
          'Reduce travel costs by 70%',
          'Improve collaboration by 60%',
          'Increase training effectiveness by 80%',
          'Enhance employee engagement by 50%'
        ],
        useCases: [
          'Virtual meetings',
          'Employee training',
          'Product demonstrations',
          'Virtual events',
          'Remote collaboration'
        ],
        ctaLabel: 'Metaverse Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Leading enterprise metaverse platform for business applications',
        competitiveAdvantage: 'Proprietary 3D rendering engine with enterprise-grade security',
        integrationCapabilities: ['Video conferencing', 'Project management', 'CRM systems', 'Learning platforms'],
        complianceStandards: ['SOC 2', 'ISO 27001', 'GDPR', 'Industry-specific standards'],
        supportLevel: 'Metaverse specialists with dedicated success management',
        deploymentOptions: ['Cloud', 'Hybrid', 'On-premise', 'Multi-tenant'],
        scalability: 'Supports 100K+ concurrent users in virtual environments',
        securityFeatures: ['End-to-end encryption', 'Access controls', 'Data protection', 'Privacy controls'],
        innovationLevel: 'Advanced'
      },
      {
        id: 'ar-enhanced-workplace',
        title: 'AR-Enhanced Workplace Platform',
        description: 'Augmented reality platform that enhances workplace productivity through digital overlays and interactive experiences.',
        category: 'Metaverse & AR/VR',
        price: '$6,999',
        billing: 'month',
        features: [
          'AR device support',
          'Digital overlays',
          'Interactive training',
          'Remote assistance',
          '3D visualization',
          'Integration APIs',
          'Analytics tools',
          'Content management'
        ],
        benefits: [
          'Improve productivity by 35%',
          'Reduce training time by 50%',
          'Enhance accuracy by 90%',
          'Enable remote work capabilities'
        ],
        useCases: [
          'Manufacturing training',
          'Field service support',
          'Quality control',
          'Maintenance procedures',
          'Design visualization'
        ],
        ctaLabel: 'AR Workplace Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Advanced AR platform for industrial and enterprise applications',
        competitiveAdvantage: 'Proprietary AR algorithms with real-time object recognition',
        integrationCapabilities: ['IoT devices', 'Enterprise systems', 'Mobile apps', 'Cloud platforms'],
        complianceStandards: ['ISO 27001', 'Industry safety standards', 'Data protection'],
        supportLevel: 'AR specialists with technical support and training',
        deploymentOptions: ['Mobile apps', 'AR glasses', 'Tablets', 'Mixed reality devices'],
        scalability: 'Supports 10K+ AR devices simultaneously',
        securityFeatures: ['Data encryption', 'Access controls', 'Device management', 'Privacy protection'],
        innovationLevel: 'Advanced'
      }
    ]
  },
  {
    name: 'Space Technology Solutions',
    slug: 'space-tech',
    description: 'Innovative space technology solutions for satellite operations, space data, and space-based services',
    items: [
      {
        id: 'satellite-data-analytics',
        title: 'Satellite Data Analytics Platform',
        description: 'Advanced platform for processing, analyzing, and deriving insights from satellite imagery and space data.',
        category: 'Space Tech',
        price: '$19,999',
        billing: 'month',
        features: [
          'Multi-satellite data processing',
          'AI-powered image analysis',
          'Real-time monitoring',
          'Predictive analytics',
          'Custom algorithms',
          'Integration APIs',
          'Visualization tools',
          'Compliance reporting'
        ],
        benefits: [
          'Access global data coverage',
          'Enable real-time monitoring',
          'Improve decision making',
          'Reduce operational costs'
        ],
        useCases: [
          'Environmental monitoring',
          'Agriculture analysis',
          'Urban planning',
          'Disaster response',
          'Climate research'
        ],
        ctaLabel: 'Satellite Data Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Leading satellite data analytics platform for enterprise applications',
        competitiveAdvantage: 'Proprietary AI algorithms with access to multiple satellite constellations',
        integrationCapabilities: ['GIS systems', 'Analytics platforms', 'Cloud services', 'IoT platforms'],
        complianceStandards: ['ITAR', 'Export controls', 'Data protection', 'Industry standards'],
        supportLevel: 'Space technology experts with dedicated support',
        deploymentOptions: ['Cloud', 'Hybrid', 'On-premise', 'Edge computing'],
        scalability: 'Processes 1TB+ of satellite data daily',
        securityFeatures: ['Data encryption', 'Access controls', 'Compliance monitoring', 'Audit logging'],
        innovationLevel: 'Futuristic'
      },
      {
        id: 'space-communications-network',
        title: 'Space Communications Network',
        description: 'Global space-based communications network providing high-speed, low-latency connectivity worldwide.',
        category: 'Space Tech',
        price: '$25,999',
        billing: 'month',
        features: [
          'Global satellite coverage',
          'High-speed connectivity',
          'Low-latency communications',
          'Redundant systems',
          'Security protocols',
          'Monitoring tools',
          'Integration APIs',
          'Support services'
        ],
        benefits: [
          'Global connectivity coverage',
          'High-speed communications',
          'Reliable connectivity',
          'Reduced infrastructure costs'
        ],
        useCases: [
          'Remote communications',
          'IoT connectivity',
          'Emergency services',
          'Maritime communications',
          'Aviation connectivity'
        ],
        ctaLabel: 'Space Communications Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Advanced space communications network for global connectivity',
        competitiveAdvantage: 'Proprietary satellite technology with global coverage',
        integrationCapabilities: ['Communication systems', 'IoT platforms', 'Cloud services', 'Enterprise networks'],
        complianceStandards: ['ITU', 'FCC', 'International regulations', 'Security standards'],
        supportLevel: 'Space communications specialists with 24/7 support',
        deploymentOptions: ['Satellite terminals', 'Ground stations', 'Hybrid networks', 'Custom solutions'],
        scalability: 'Supports 1M+ connected devices globally',
        securityFeatures: ['Encrypted communications', 'Access controls', 'Threat detection', 'Compliance monitoring'],
        innovationLevel: 'Futuristic'
      }
    ]
  },
  {
    name: 'Green Technology Solutions',
    slug: 'green-tech',
    description: 'Sustainable and environmentally friendly technology solutions for businesses and organizations',
    items: [
      {
        id: 'carbon-footprint-tracker',
        title: 'AI Carbon Footprint Tracker',
        description: 'Intelligent platform for tracking, analyzing, and reducing carbon footprints across organizations and supply chains.',
        category: 'Green Tech',
        price: '$3,999',
        billing: 'month',
        features: [
          'Real-time carbon tracking',
          'AI-powered analysis',
          'Reduction recommendations',
          'Supply chain monitoring',
          'Compliance reporting',
          'Integration tools',
          'Analytics dashboard',
          'Sustainability metrics'
        ],
        benefits: [
          'Reduce carbon emissions by 25-40%',
          'Improve sustainability compliance',
          'Enhance brand reputation',
          'Reduce operational costs'
        ],
        useCases: [
          'Corporate sustainability',
          'Supply chain management',
          'Environmental compliance',
          'ESG reporting',
          'Carbon trading'
        ],
        ctaLabel: 'Sustainability Assessment',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Leading carbon footprint tracking platform for enterprise sustainability',
        competitiveAdvantage: 'Proprietary AI algorithms with comprehensive sustainability data',
        integrationCapabilities: ['ERP systems', 'Supply chain platforms', 'IoT devices', 'Analytics tools'],
        complianceStandards: ['ISO 14001', 'GHG Protocol', 'ESG standards', 'Industry regulations'],
        supportLevel: 'Sustainability experts with dedicated support',
        deploymentOptions: ['Cloud', 'Hybrid', 'On-premise', 'Multi-tenant'],
        scalability: 'Tracks 1M+ sustainability metrics across organizations',
        securityFeatures: ['Data encryption', 'Access controls', 'Audit logging', 'Compliance monitoring'],
        innovationLevel: 'Advanced'
      },
      {
        id: 'renewable-energy-optimizer',
        title: 'Renewable Energy Optimization Platform',
        description: 'AI-powered platform for optimizing renewable energy systems, storage, and grid integration.',
        category: 'Green Tech',
        price: '$7,999',
        billing: 'month',
        features: [
          'Energy system optimization',
          'Storage management',
          'Grid integration',
          'Predictive analytics',
          'Performance monitoring',
          'Maintenance scheduling',
          'Integration APIs',
          'Reporting tools'
        ],
        benefits: [
          'Increase energy efficiency by 30%',
          'Reduce energy costs by 25%',
          'Improve system reliability',
          'Maximize renewable energy usage'
        ],
        useCases: [
          'Solar power optimization',
          'Wind energy management',
          'Energy storage systems',
          'Smart grid integration',
          'Microgrid management'
        ],
        ctaLabel: 'Energy Optimization Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Advanced renewable energy optimization platform',
        competitiveAdvantage: 'Proprietary AI algorithms with real-time energy optimization',
        integrationCapabilities: ['Energy management systems', 'IoT devices', 'Grid systems', 'Analytics platforms'],
        complianceStandards: ['ISO 50001', 'Energy efficiency standards', 'Grid regulations', 'Safety standards'],
        supportLevel: 'Energy experts with technical support and optimization services',
        deploymentOptions: ['Cloud', 'Edge computing', 'Hybrid', 'On-premise'],
        scalability: 'Manages 100MW+ of renewable energy capacity',
        securityFeatures: ['Cybersecurity', 'Physical security', 'Access controls', 'Compliance monitoring'],
        innovationLevel: 'Advanced'
      }
    ]
  },
  {
    name: 'Advanced IoT & Edge Computing',
    slug: 'iot-edge-advanced',
    description: 'Next-generation IoT and edge computing solutions for smart cities, industrial automation, and connected devices',
    items: [
      {
        id: 'smart-city-platform',
        title: 'AI Smart City Platform',
        description: 'Comprehensive smart city platform that integrates IoT devices, edge computing, and AI for urban management and optimization.',
        category: 'IoT & Edge',
        price: '$14,999',
        billing: 'month',
        features: [
          'IoT device management',
          'Edge computing nodes',
          'AI-powered analytics',
          'Real-time monitoring',
          'Predictive maintenance',
          'Traffic optimization',
          'Energy management',
          'Public safety systems'
        ],
        benefits: [
          'Reduce city operational costs by 20%',
          'Improve public services by 40%',
          'Enhance citizen satisfaction',
          'Optimize resource utilization'
        ],
        useCases: [
          'Traffic management',
          'Public safety',
          'Energy optimization',
          'Waste management',
          'Environmental monitoring'
        ],
        ctaLabel: 'Smart City Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Leading smart city platform for urban management',
        competitiveAdvantage: 'Proprietary AI algorithms with comprehensive urban data integration',
        integrationCapabilities: ['IoT devices', 'City systems', 'Public services', 'Analytics platforms'],
        complianceStandards: ['ISO 27001', 'City regulations', 'Data protection', 'Privacy standards'],
        supportLevel: 'Smart city specialists with dedicated support and training',
        deploymentOptions: ['City-wide deployment', 'Phased rollout', 'Hybrid systems', 'Custom solutions'],
        scalability: 'Manages 1M+ IoT devices across city infrastructure',
        securityFeatures: ['Cybersecurity', 'Physical security', 'Access controls', 'Privacy protection'],
        innovationLevel: 'Revolutionary'
      },
      {
        id: 'industrial-iot-platform',
        title: 'Industrial IoT Platform',
        description: 'Advanced IoT platform for industrial automation, predictive maintenance, and operational optimization.',
        category: 'IoT & Edge',
        price: '$9,999',
        billing: 'month',
        features: [
          'Industrial device connectivity',
          'Predictive maintenance',
          'Performance optimization',
          'Real-time monitoring',
          'Safety systems',
          'Integration tools',
          'Analytics dashboard',
          'Compliance reporting'
        ],
        benefits: [
          'Reduce downtime by 50%',
          'Improve efficiency by 30%',
          'Reduce maintenance costs by 40%',
          'Enhance safety compliance'
        ],
        useCases: [
          'Manufacturing automation',
          'Predictive maintenance',
          'Quality control',
          'Safety monitoring',
          'Energy optimization'
        ],
        ctaLabel: 'Industrial IoT Demo',
        href: 'https://ziontechgroup.com/contact',
        marketPosition: 'Advanced industrial IoT platform for manufacturing and industrial applications',
        competitiveAdvantage: 'Proprietary algorithms with 20+ years of industrial automation experience',
        integrationCapabilities: ['PLC systems', 'SCADA systems', 'ERP platforms', 'Analytics tools'],
        complianceStandards: ['ISO 27001', 'Industrial safety standards', 'Data protection', 'Industry regulations'],
        supportLevel: 'Industrial IoT experts with technical support and training',
        deploymentOptions: ['On-premise', 'Hybrid', 'Edge computing', 'Cloud management'],
        scalability: 'Manages 100K+ industrial devices across multiple facilities',
        securityFeatures: ['Industrial cybersecurity', 'Access controls', 'Safety protocols', 'Compliance monitoring'],
        innovationLevel: 'Advanced'
      }
    ]
  }
];

export default nextGenInnovativeServices2025;