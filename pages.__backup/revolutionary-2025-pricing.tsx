import React{ useState } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
StarZapShieldUsersGlobeArrowRightExternalLinkTrendingUpClockTargetBuildingRocketAwardDollarSignChartBarLockCpuDatabaseCloudSmartphonePaletteSearchMessageSquareFileTextCalendarCreditCardBarChart3SettingsCodeBookOpenActivityPlayMailPhoneMapPinFilterGridListChevronDownChevronUpSparklesFlaskConicalDnaCarLeafFactoryTruckMicroscopeGraduationCapShieldCheckBrainAtomGlobe2BotChevronRightCrownInfinityCheckXAlertTriangleInfoZap as ZapIconShield as ShieldIconUsers as UsersIconGlobe as GlobeIconCpu as CpuIconDatabase as DatabaseIconCloud as CloudIconSmartphone as SmartphoneIconPalette as PaletteIconSearch as SearchIconMessageSquare as MessageSquareIconFileText as FileTextIconCalendar as CalendarIconCreditCard as CreditCardIconBarChart3 as BarChart3IconSettings as SettingsIconCode as CodeIconBookOpen as BookIconActivity as ActivityIconDatabase as DatabaseIcon2Play as PlayIconMail as MailIconPhone as PhoneIconMapPin as MapPinIconFilter as FilterIconGrid as GridIconList as ListIconChevronDown as ChevronDownIconChevronUp as ChevronUpIconSparkles as SparklesIconFlaskConical as FlaskConicalIconDna as DnaIconCar as CarIconLeaf as LeafIconFactory as FactoryIconTruck as TruckIconMicroscope as MicroscopeIconGraduationCap as GraduationCapIconShieldCheck as ShieldCheckIconBrain as BrainIconAtom as AtomIconGlobe2 as Globe2IconBot as BotIconChevronRight as ChevronRightIconEyeHeartShare2DownloadBookmarkThumbsUpMessageCircleShareUsers as UsersIcon2Target as TargetZap as ZapIcon2

import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';
import UltraAdvancedNavigation from '../components/layout/UltraAdvancedNavigation';
import { revolutionaryAI2025Services } from '../data/revolutionary-2025-ai-services';
import { revolutionaryITInfrastructure2025Services } from '../data/revolutionary-2025-it-infrastructure';
import { revolutionary2025MicroSaasServices } from '../data/revolutionary-2025-micro-saas';

export default function Revolutionary2025Pricing() {
  const [billingCyclesetBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [selectedCategorysetSelectedCategory] = useState<string>('all');

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Combine all revolutionary services
  const allRevolutionaryServices = [
    ...revolutionaryAI2025Services,
    ...revolutionaryITInfrastructure2025Services,
    ...revolutionary2025MicroSaasServices
  ];

  // Service categories
  const serviceCategories = [
    { id: 'all'name: 'All Services'icon: Sparklescount: allRevolutionaryServices.length },
    { id: 'ai'name: 'AI & Machine Learning'icon: Braincount: revolutionaryAI2025Services.length },
    { id: 'infrastructure'name: 'IT Infrastructure'icon: Cpucount: revolutionaryITInfrastructure2025Services.length },
          { id: 'saas'name: 'Micro SaaS'icon: Zapcount: revolutionary2025MicroSaasServices.length }
  ];

  // Filter services based on selected category
  const filteredServices = selectedCategory === 'all' 
    ? allRevolutionaryServices 
    : allRevolutionaryServices.filter(service => {
        if (selectedCategory === 'ai') return service.category.includes('AI');
        if (selectedCategory === 'infrastructure') return service.category.includes('IT') || service.category.includes('Network') || service.category.includes('Computing');
        if (selectedCategory === 'saas') return service.category.includes('AI') || service.category.includes('Virtual') || service.category.includes('Creative');
        return true;
      });

  // Calculate pricing with billing cycle
  const getPrice = (service: any) => {
    const basePrice = parseInt(service.price.replace('$'').replace(',''));
    if (billingCycle === 'yearly') {
      return Math.floor(basePrice * 0.8); // 20% discount for yearly
    }
    return basePrice;
  };

  // Pricing tiers for comparison
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 99 : 79,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 25+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features'
      ],
      icon: <Sparkles className="w-8 h-8" />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ Services',
        'Advanced AI Integration',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics Dashboard',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Advanced Security Features',
        'Custom Integrations',
        'Performance Monitoring'
      ],
      icon: <Rocket className="w-8 h-8" />,
      variant: 'ai-futuristic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const
    },
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL Services',
        'Full AI & Quantum Integration',
        'Dedicated Support Team',
        '90-Day Free Trial',
        'Enterprise Analytics Suite',
        '24/7 Dedicated Support',
        '99.99% Uptime Guarantee',
        'Enterprise Security Features',
        'Custom Development',
        'White-label Solutions',
        'API Access',
        'SLA Guarantees'
      ],
      icon: <Crown className="w-8 h-8" />,
      variant: 'quantum-futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const
    }
  ];

  // Market analysis
  const marketAnalysis = {
    totalMarketSize: '$150B+',
    growthRate: '250% annually',
    customerSatisfaction: '98%',
    averageROI: '500%',
    timeToValue: '< 30 days',
    globalReach: '150+ countries'
  };

const revolutionary-2025-pricing: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">revolutionary-2025-pricing</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default revolutionary-2025-pricing;
