export interface RealMicroSaasService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
    website: string;
  };
export const realMicroSaasServices: RealMicroSaasService[] = [
  // AI-Powered Business Solutions
  {

export const realMicroSaasServices: RealMicroSaasService[] = [
  // AI-Powered Business Solutions
  {

];

// Helper functions
export const getServicesByCategory = (category: string) => {

};
marketPosition: 'Lightweight alternative to Typeform and SurveySparrow with better mobile UX.';
competitors: ['TypeformSurveySparrowTally'];
techStack: ['Next.jsSupabaseVercel EdgeOpenAI'];
realImplementation: true;
implementationDetails: 'Template gallery, response store, analytics, export jobs.';
roi: 'Improves feedback volume 20–50%.';
useCases: ['NPSBeta feedbackLead qual'];
integrations: ['HubSpotSegmentZapier'];
support: 'Email support, templates library';
compliance: ['GDPRCCPA'];
link: 'https://ziontechgroup.com/mobile-surveys';
icon: '📱';
color: 'from-emerald-600 to-teal-700';
popular: false;
launchDate: '2024-12-10';
customers: 95;
rating: 4.6;
reviews: 22 
};
marketPosition: 'Alternative to Notion templates + Asana. Faster to start with curated flows.';
competitors: ['AsanaClickUpNotion'];
techStack: ['Next.jsPrismaPostgreSQL'];
realImplementation: true;
implementationDetails: 'Template JSON schemas, rules engine, import/export.';
roi: 'Deliverables throughput +15–25%.';
useCases: ['Client deliveryEditorial calendarSprints'];
integrations: ['Google CalendarSlackLinear'];
support: 'Email support';
compliance: ['GDPR'];
link: 'https://ziontechgroup.com/productivity-planner';
icon: '🗓️';
color: 'from-purple-600 to-pink-600';
popular: false;
launchDate: '2025-01-20';
customers: 60;
rating: 4.5;
reviews: 14 
};

export const serviceCategories = [
  'Legal Technology',
  'Customer Service & Support',
  'Digital Marketing & SEO',
  'Creative & Media',
  'Data & Analytics',
  'Human Resources',
  'Sales & CRM',
  'Market Research',
  'Blockchain & Cryptocurrency',
  'Cloud & DevOps',
  'Database & Performance',
  'Design & UI/UX',
  'Development & DevOps',
  'Business Intelligence',
  'Quantum Computing',
  'Cybersecurity',
  'Metaverse & Virtual Reality',
  'Web3 & DeFi',
  'IoT & Edge Computing',
  'Autonomous Vehicles & Robotics',
  'Climate & Environmental',
  'Biotechnology & Healthcare',
  'Financial Technology',
  'Education Technology',
  'Enterprise IT',
];
  'Legal TechnologyCustomer Service & SupportDigital Marketing & SEOCreative & MediaData & AnalyticsHuman ResourcesSales & CRMMarket Research';
  'Blockchain & CryptocurrencyCloud & DevOpsDatabase & PerformanceDesign & UI/UXDevelopment & DevOpsBusiness IntelligenceQuantum ComputingCybersecurity';
  'Metaverse & Virtual RealityWeb3 & DeFiIoT & Edge ComputingAutonomous Vehicles & RoboticsClimate & EnvironmentalBiotechnology & HealthcareFinancial TechnologyEducation Technology';
  'Enterprise IT'
];