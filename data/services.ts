export interface Service {,
  id: string;
  name: string;
  category: 'AI' | 'IT' | 'SAAS' | 'Development' | 'Cloud' | 'Security' | 'Analytics' | 'Automation' | 'Fintech' | 'Healthcare' | 'Education' | 'Marketing';
  description: string;
  features: string[];
  benefits: string[];
  pricing: {,
    starter: number;
    professional: number;
    enterprise: number;
    currency: string;
    period: string,};
  link: string;
  icon: string;
  isPopular?: boolean;
  isNew?: boolean,
}
,
// Import enhanced services,
import { enhancedServices2025 } from './enhanced-2025-services';
import { specializedIndustryServices } from './specialized-industry-services';
export const services: Service[] = [,
  // AI Services,
  {,
    id: 'ai-chatbot-platform';
    name: 'AI Chatbot Platform';
    category: 'AI';
    description: 'Enterprise-grade AI chatbot platform with natural language processing, multi-language support, and seamless integration.';
    features: [,
      'Advanced NLP with GPT-4 integrationMulti-language support (50+ languages)';
      'Custom training on your dataAnalytics and performance insights';
      'API integration and webhooks24/7 customer support',
    ];
    benefits: [,
      'Reduce customer service costs by 60%Handle 1000+ conversations simultaneously';
      'Improve customer satisfaction by 40%24/7 availability without human intervention',
    ];
    pricing: {,
      starter: 99;
      professional: 299;
      enterprise: 999;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/ai-chatbot-platform';
    icon: '🤖';
    isPopular: true,};
  {,
    id: 'ai-content-generator';
    name: 'AI Content Generator';
    category: 'AI';
    description: 'Generate high-quality, SEO-optimized content for blogs, social media, and marketing campaigns.';
    features: [,
      'SEO-optimized content generationMultiple content types (blogs, social, ads)';
      'Plagiarism-free contentBrand voice customization';
      'Content calendar managementPerformance analytics',
    ];
    benefits: [,
      'Save 80% of content creation timeImprove SEO rankings by 45%';
      'Generate 100+ articles per monthMaintain consistent brand voice',
    ];
    pricing: {,
      starter: 49;
      professional: 149;
      enterprise: 499;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/ai-content-generator';
    icon: '✍️',};
  {,
    id: 'ai-data-analytics';
    name: 'AI-Powered Data Analytics';
    category: 'AI';
    description: 'Transform raw data into actionable insights with machine learning algorithms and predictive analytics.';
    features: [,
      'Real-time data processingPredictive analytics models';
      'Custom dashboard creationAutomated reporting';
      'Data visualization toolsAPI integration capabilities',
    ];
    benefits: [,
      'Increase data-driven decisions by 70%Reduce analysis time by 85%';
      'Predict trends with 90% accuracyAutomate routine reporting tasks',
    ];
    pricing: {,
      starter: 199;
      professional: 499;
      enterprise: 1499;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/ai-data-analytics';
    icon: '📊';
    isNew: true,};
  // IT Services,
  {,
    id: 'managed-it-services';
    name: 'Managed IT Services';
    category: 'IT';
    description: 'Comprehensive IT management including network monitoring, security, and 24/7 technical support.';
    features: [,
      '24/7 network monitoringProactive issue resolution';
      'Security patch managementBackup and disaster recovery';
      'Help desk supportMonthly reporting and analytics',
    ];
    benefits: [,
      'Reduce IT downtime by 95%Lower IT costs by 30%';
      'Improve system reliabilityFocus on core business activities',
    ];
    pricing: {,
      starter: 299;
      professional: 599;
      enterprise: 1499;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/managed-it-services';
    icon: '🖥️',};
  {,
    id: 'cybersecurity-suite';
    name: 'Cybersecurity Suite';
    category: 'Security';
    description: 'Advanced cybersecurity solutions including threat detection, vulnerability assessment, and incident response.';
    features: [,
      'Real-time threat detectionVulnerability scanning';
      'Penetration testingSecurity awareness training';
      'Incident response planningCompliance reporting',
    ];
    benefits: [,
      'Protect against 99.9% of cyber threatsMeet industry compliance standards';
      'Reduce security breach risk by 80%24/7 security monitoring',
    ];
    pricing: {,
      starter: 399;
      professional: 799;
      enterprise: 1999;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/cybersecurity-suite';
    icon: '🔒';
    isPopular: true,};
  {,
    id: 'cloud-migration';
    name: 'Cloud Migration Services';
    category: 'Cloud';
    description: 'Seamless migration to cloud platforms with minimal downtime and maximum efficiency.';
    features: [,
      'Migration strategy planningData migration tools';
      'Performance optimizationSecurity implementation';
      'Training and documentationPost-migration support',
    ];
    benefits: [,
      'Reduce infrastructure costs by 40%Improve scalability and flexibility';
      'Enhanced disaster recoveryAccess to latest technologies',
    ];
    pricing: {,
      starter: 2999;
      professional: 7999;
      enterprise: 19999;
      currency: 'USD';
      period: 'one-time',};
    link: 'https://ziontechgroup.com/services/cloud-migration';
    icon: '☁️',};
  // SAAS Services,
  {,
    id: 'project-management-platform';
    name: 'Project Management Platform';
    category: 'SAAS';
    description: 'Collaborative project management tool with task tracking, team collaboration, and progress monitoring.';
    features: [,
      'Task and project trackingTeam collaboration tools';
      'Time tracking and reportingFile sharing and storage';
      'Mobile app accessIntegration with popular tools',
    ];
    benefits: [,
      'Increase team productivity by 35%Reduce project delays by 50%';
      'Improve communication efficiencyCentralized project information',
    ];
    pricing: {,
      starter: 29;
      professional: 79;
      enterprise: 199;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/project-management-platform';
    icon: '📋',};
  {,
    id: 'crm-system';
    name: 'Customer Relationship Management';
    category: 'SAAS';
    description: 'Comprehensive CRM solution for managing customer relationships, sales pipeline, and marketing campaigns.';
    features: [,
      'Contact and lead managementSales pipeline tracking';
      'Email marketing automationCustomer support integration';
      'Analytics and reportingMobile app access',
    ];
    benefits: [,
      'Increase sales by 30%Improve customer retention by 25%';
      'Streamline sales processesBetter customer insights',
    ];
    pricing: {,
      starter: 39;
      professional: 99;
      enterprise: 299;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/crm-system';
    icon: '👥';
    isPopular: true,};
  {,
    id: 'hr-management-system';
    name: 'HR Management System';
    category: 'SAAS';
    description: 'Complete HR solution for employee management, payroll, benefits, and performance tracking.';
    features: [,
      'Employee database managementPayroll processing';
      'Benefits administrationPerformance reviews';
      'Time and attendanceCompliance reporting',
    ];
    benefits: [,
      'Reduce HR administrative tasks by 60%Improve employee satisfaction';
      'Ensure compliance with regulationsBetter workforce analytics',
    ];
    pricing: {,
      starter: 49;
      professional: 129;
      enterprise: 399;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/hr-management-system';
    icon: '👨‍💼',};
  // Development Services,
  {,
    id: 'web-development';
    name: 'Custom Web Development';
    category: 'Development';
    description: 'Professional web development services including responsive design, e-commerce, and custom applications.';
    features: [,
      'Responsive web designE-commerce integration';
      'Custom functionalitySEO optimization';
      'Performance optimizationOngoing maintenance',
    ];
    benefits: [,
      'Professional online presenceImproved user experience';
      'Better search engine rankingsScalable and maintainable code',
    ];
    pricing: {,
      starter: 2999;
      professional: 7999;
      enterprise: 19999;
      currency: 'USD';
      period: 'one-time',};
    link: 'https://ziontechgroup.com/services/web-development';
    icon: '🌐',};
  {,
    id: 'mobile-app-development';
    name: 'Mobile App Development';
    category: 'Development';
    description: 'Native and cross-platform mobile app development for iOS and Android platforms.';
    features: [,
      'Native iOS and Android developmentCross-platform solutions';
      'UI/UX designApp store optimization';
      'Testing and quality assurancePost-launch support',
    ];
    benefits: [,
      'Reach mobile users effectivelyImprove customer engagement';
      'Increase brand visibilityGenerate additional revenue streams',
    ];
    pricing: {,
      starter: 4999;
      professional: 14999;
      enterprise: 49999;
      currency: 'USD';
      period: 'one-time',};
    link: 'https://ziontechgroup.com/services/mobile-app-development';
    icon: '📱',};
  {,
    id: 'api-development';
    name: 'API Development & Integration';
    category: 'Development';
    description: 'Custom API development and third-party service integration for seamless data exchange.';
    features: [,
      'RESTful API developmentGraphQL implementation';
      'Third-party integrationsAPI documentation';
      'Testing and monitoringPerformance optimization',
    ];
    benefits: [,
      'Enable system interoperabilityImprove data flow efficiency';
      'Reduce development timeEnhance user experience',
    ];
    pricing: {,
      starter: 1999;
      professional: 5999;
      enterprise: 14999;
      currency: 'USD';
      period: 'one-time',};
    link: 'https://ziontechgroup.com/services/api-development';
    icon: '🔌',};
  // Analytics Services,
  {,
    id: 'business-intelligence';
    name: 'Business Intelligence Solutions';
    category: 'Analytics';
    description: 'Transform business data into actionable insights with advanced analytics and reporting tools.';
    features: [,
      'Data warehousingInteractive dashboards';
      'Custom reportingData visualization';
      'Predictive analyticsReal-time monitoring',
    ];
    benefits: [,
      'Make data-driven decisionsIdentify business opportunities';
      'Improve operational efficiencyGain competitive advantage',
    ];
    pricing: {,
      starter: 399;
      professional: 899;
      enterprise: 2499;
      currency: 'USD';
      period: 'month',};
    link: 'https://ziontechgroup.com/services/business-intelligence';
    icon: '📈',}
];
// Enhanced Services from 2025,
export const enhancedServices = enhancedServices2025;
// Specialized Industry Services,
export const specializedServices = specializedIndustryServices;
// Combined Services Array,
export const allServices = [,
  ...services;
  ...enhancedServices2025;
  ...specializedIndustryServices,
];
export const getServicesByCategory = (category: Service['category']) => {,
  return allServices.filter(service => service.category === category),};
export const getPopularServices = () => {,
  return allServices.filter(service => service.isPopular);
};
export const getNewServices = () => {,
  return allServices.filter(service => service.isNew);
};
export const getServicesByIndustry = (industry: string) => {,
  return specializedIndustryServices.filter(service => service.industry === industry),};
export const getServicesByAudience = (audience: string) => {,
  return enhancedServices2025.filter(service =>,
    service.targetAudience.includes(audience),
  ),};