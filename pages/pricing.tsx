<<<<<<< HEAD
import React from 'react';
import Head from 'next/head';
import {
  Check,
  Star,
  Zap,
  Shield,
  Users,
  Globe,
  ArrowRight,
  ExternalLink,
  TrendingUp,
  Clock,
  Target,
  Building,
  Rocket,
  Award,
  DollarSign,
  ChartBar,
  Lock,
  Cpu,
  Database,
  Cloud,
  Smartphone,
  Palette,
  Search,
  MessageSquare,
  FileText,
  Calendar,
  CreditCard,
  BarChart3,
  Settings,
  Zap as ZapIcon,
  Code,
  BookOpen,
  Activity,
  Database as DatabaseIcon,
  Play,
  Mail,
  Phone,
  MapPin,
  Filter,
  Grid,
  List,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FlaskConical,
  Dna,
  Car,
  Leaf,
  Factory,
  Truck,
  Microscope,
  GraduationCap,
  ShieldCheck,
  Brain,
  Atom,
  Globe2,
  Bot,
  ChevronRight,
  Crown,
  Infinity,
  Zap as ZapIcon2,
  Shield as ShieldIcon,
  Users as UsersIcon,
  Globe as GlobeIcon,
  Cpu as CpuIcon,
  Database as DatabaseIcon2,
  Cloud as CloudIcon,
  Smartphone as SmartphoneIcon,
  Palette as PaletteIcon,
  Search as SearchIcon,
  MessageSquare as MessageSquareIcon,
  FileText as FileTextIcon,
  Calendar as CalendarIcon,
  CreditCard as CreditCardIcon,
  BarChart3 as BarChart3Icon,
  Settings as SettingsIcon,
  Zap as ZapIcon3,
  Code as CodeIcon,
  BookOpen as BookOpenIcon,
  Activity as ActivityIcon,
  Database as DatabaseIcon3,
  Play as PlayIcon,
  Mail as MailIcon,
  Phone as PhoneIcon,
  MapPin as MapPinIcon,
  Filter as FilterIcon,
  Grid as GridIcon,
  List as ListIcon,
  ChevronDown as ChevronDownIcon,
  ChevronUp as ChevronUpIcon,
  Sparkles as SparklesIcon,
  FlaskConical as FlaskConicalIcon,
  Dna as DnaIcon,
  Car as CarIcon,
  Leaf as LeafIcon,
  Factory as FactoryIcon,
  Truck as TruckIcon,
  Microscope as MicroscopeIcon,
  GraduationCap as GraduationCapIcon,
  ShieldCheck as ShieldCheckIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Globe2 as Globe2Icon,
  Bot as BotIcon,
  ChevronRight as ChevronRightIcon,;
} from 'lucide-react';import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import UltraFuturisticCard from '../components/ui/UltraFuturisticCard';
import {
  enhancedRealMicroSaasServices,
  getServicesByCategory,
  getPopularServices,;
} from '../data/enhanced-real-micro-saas-services';
import { nextGenerationAIServices } from '../data/next-generation-ai-services';
import { cuttingEdgeITServices } from '../data/cutting-edge-it-services';
import { innovativeMicroSaasV2Services } from '../data/innovative-micro-saas-v2';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>(
    'monthly'
  );  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com',
  };

  const popularServices = getPopularServices();

  // Combine all services for comprehensive pricing
  const allServices = [
    ...enhancedRealMicroSaasServices,
    ...nextGenerationAIServices,
    ...cuttingEdgeITServices,
    ...innovativeMicroSaasV2Services,  ];

  // Enhanced service categories with pricing
  const serviceCategories = [
    {
      name: 'Next-Generation AI',
      description: 'Revolutionary AI platforms',
      services: [
        'AI Multimodal Fusion',
        'AI Autonomous Decision Engine',
        'AI Emotional Intelligence',
      ],
      avgPrice: '$3,199/month',
      savings: 'Save 60-80% vs. competitors',
    },
    {
      name: 'Cutting-Edge IT Infrastructure',
      description: 'Advanced infrastructure solutions',
      services: [
        'Zero Trust Architecture',
        'Edge Computing Orchestration',
        '5G Private Networks',
      ],
      avgPrice: '$4,999/month',
      savings: 'Save 50-70% vs. competitors',
    },
    {
      name: 'Innovative Micro SaaS',
      description: 'Creative and practical SaaS tools',
      services: [
        'AI Brand Personality',
        'Virtual Event Holograms',
        'AI Meeting Transcriber',
      ],
      avgPrice: '$199/month',
      savings: 'Save 40-60% vs. competitors',
    },
    {
      name: 'Quantum & Space Technology',
      description: 'Quantum computing and space solutions',
      services: [
        'Quantum AI Hybrid',
        'Space Technology Platform',
        'Quantum Cybersecurity',
      ],
      avgPrice: '$5,999/month',
      savings: 'Save 70-85% vs. competitors',
    },
    {
      name: 'Enterprise IT Services',
      description: 'Comprehensive enterprise solutions',
      services: ['Cloud Migration', 'DevOps Automation', 'Security Hardening'],
      avgPrice: '$2,999/month',
      savings: 'Save 45-65% vs. competitors',
    },  ];

  // Enhanced pricing tiers with more realistic and comprehensive offerings
  const pricingTiers = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billingCycle === 'monthly' ? 49 : 39,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ Core Services',
        'Basic AI Integration',
        'Standard Support (24/7)',
        '30-Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
      ],
      icon: <Sparkles className='w-8 h-8' />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const,
    },    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 149 : 119,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 200+ Premium Services',
        'Advanced AI & Quantum Computing',
        'Priority Support (24/7)',
        '60-Day Free Trial',
        'Advanced Analytics & Reporting',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Enhanced Security & Compliance',
        'Custom Integrations',
        'Team Collaboration Tools',
        'API Access',
        'White-label Options',
      ],
      icon: <Crown className='w-8 h-8' />,
      variant: 'holographic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const,
    },    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 499 : 399,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to ALL 500+ Services',
        'Full Quantum AI & Autonomous Systems',
        'Dedicated Support Team (24/7)',
        '90-Day Free Trial',
        'Enterprise Analytics & AI Insights',
        'Dedicated Account Manager',
        '99.99% Uptime SLA',
        'Enterprise Security & Compliance',
        'Custom Development Services',
        'Advanced Team Management',
        'Full API & SDK Access',
        'Custom Branding & White-label',
        'On-premise Deployment Options',
        'Advanced AI Training & Customization',
        'Priority Feature Development',
        'Global Infrastructure Access',
      ],
      icon: <Rocket className='w-8 h-8' />,
      variant: 'neural' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const,
    },  ];

  // Service category pricing examples
  const serviceCategoryPricing = [
    {
      category: 'Quantum AI & Computing',
      services: [
        'Quantum AI Platform',
        'Neural Network Training',
        'Quantum Optimization',
      ],
      startingPrice: '$99/month',
      icon: <Brain className='w-6 h-6' />,
    },
    {
      category: 'Autonomous Systems',
      services: [
        'AI Factory Management',
        'Robotic Process Automation',
        'Smart Manufacturing',
      ],
      startingPrice: '$149/month',
      icon: <Factory className='w-6 h-6' />,
    },
    {
      category: 'Healthcare & Biotech',
      services: [
        'Drug Discovery AI',
        'Medical Imaging Analysis',
        'Genomic Research Platform',
      ],
      startingPrice: '$199/month',
      icon: <FlaskConical className='w-6 h-6' />,
    },
    {
      category: 'Cybersecurity',
      services: [
        'Quantum Encryption',
        'Threat Intelligence',
        'Zero-Trust Security',
      ],
      startingPrice: '$129/month',
      icon: <Shield className='w-6 h-6' />,
    },
    {
      category: 'Financial Technology',
      services: [
        'AI Trading Platform',
        'Risk Management',
        'Portfolio Optimization',
      ],
      startingPrice: '$179/month',
      icon: <DollarSign className='w-6 h-6' />,
    },
    {
      category: 'Space Technology',
      services: [
        'Satellite Management',
        'Space Data Analytics',
        'Mission Planning AI',
      ],
      startingPrice: '$299/month',
      icon: <Rocket className='w-6 h-6' />,
    },  ];

  // Value propositions
  const valuePropositions = [
    {
      title: 'Unprecedented ROI',
      description: 'Average 300% ROI within 6 months',
      icon: <TrendingUp className='w-8 h-8' />,
      metric: '300%',
      detail: 'Average ROI',
    },
    {
      title: 'Time to Value',
      description: 'Get up and running in under 24 hours',
      icon: <Clock className='w-8 h-8' />,
      metric: '<24h',
      detail: 'Setup Time',
    },
    {
      title: 'Global Reach',
      description: 'Available in 150+ countries worldwide',
      icon: <Globe className='w-8 h-8' />,
      metric: '150+',
      detail: 'Countries',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-level security with 99.99% uptime',
      icon: <Shield className='w-8 h-8' />,
      metric: '99.99%',
      detail: 'Uptime SLA',
    },
  ];

  return (
    <UltraFuturisticBackground variant='quantum' intensity='high'>
      <Head>
        <title>
          Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI &
          Quantum Services
        </title>
        <meta
          name='description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans with generous free trials.'
        />
        <meta
          name='keywords'
          content='pricing, micro SaaS pricing, AI services pricing, quantum computing pricing, enterprise pricing'
        />
        <meta name='author' content='Zion Tech Group' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph */}
        <meta
          property='og:title'
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services'
        />
        <meta
          property='og:description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ziontechgroup.com/pricing' />
        <meta
          property='og:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />

        {/* Twitter */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta
          name='twitter:title'
          content='Pricing - Zion Tech Group | Transparent Pricing for Revolutionary AI & Quantum Services'
        />
        <meta
          name='twitter:description'
          content='Transparent pricing for 500+ revolutionary micro SaaS services. Choose from Starter ($49/month), Professional ($149/month), or Enterprise ($499/month) plans.'
        />
        <meta
          name='twitter:image'
          content='https://ziontechgroup.com/og-image.jpg'
        />
      </Head>

      <div className='container mx-auto px-4 py-12'>
        {/* Hero Section */}
        <div className='text-center mb-16'>
          <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
            Transparent Pricing
          </h1>
          <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto'>
            Choose the perfect plan for your business. All plans include
            generous free trials and access to our revolutionary AI & quantum
            computing services.
          </p>

          {/* New 2026 Pricing Link */}
          <div className='mb-8 p-6 bg-gradient-to-r from-purple-800/60 to-pink-800/60 border border-purple-700/50 rounded-2xl max-w-4xl mx-auto'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              🚀 New for 2026: Revolutionary Services
            </h3>
            <p className='text-gray-300 mb-6'>
              Experience our cutting-edge AI consciousness simulation, quantum
              neural interfaces, and advanced cybersecurity solutions with
              comprehensive pricing and detailed comparisons.
            </p>
            <Button
              href='/comprehensive-pricing-2026'
              variant='primary'
              size='lg'
              className='bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 shadow-2xl hover:shadow-purple-500/30'
            >
              <span className='flex items-center'>
                <Rocket className='mr-3 w-6 h-6' />                View 2026 Comprehensive Pricing
              </span>
            </Button>
          </div>

          {/* Billing Toggle */}
          <div className='flex items-center justify-center gap-4 mb-8'>
            <span
              className={`text-lg ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-400'}`}
            >
              Monthly
            </span>
            <button
              onClick={() =>
                setBillingCycle(
                  billingCycle === 'monthly' ? 'yearly' : 'monthly'
                )
              }
              className='relative inline-flex h-12 w-24 items-center rounded-full bg-slate-700/50 p-1 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/50'            >
              <span
                className={`inline-block h-10 w-10 transform rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 transition-transform ${
                  billingCycle === 'yearly' ? 'translate-x-12' : 'translate-x-0'
                }`}
              />
            </button>
            <span
              className={`text-lg ${billingCycle === 'yearly' ? 'text-white' : 'text-gray-400'}`}
            >
              Yearly
              <span className='ml-2 text-sm text-green-400'>Save 20%</span>            </span>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className='mb-20'>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>            {pricingTiers.map((tier, index) => (
              <UltraFuturisticCard
                key={tier.name}
                variant={tier.variant}
                interactive={true}
                glowIntensity={tier.popular ? 'high' : 'medium'}
                className={`relative h-full ${tier.popular ? 'scale-105' : ''}`}
              >
                {tier.popular && (
                  <div className='absolute -top-4 left-1/2 transform -translate-x-1/2'>
                    <span className='bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center'>
                      <Star className='w-4 h-4 mr-2' />                      Most Popular
                    </span>
                  </div>
                )}

                <div className='text-center p-8'>
                  <div className='inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-6'>
                    {tier.icon}
                  </div>

                  <h3 className='text-2xl font-bold text-white mb-2'>
                    {tier.name}
                  </h3>
                  <p className='text-gray-300 mb-6'>{tier.description}</p>

                  <div className='mb-6'>
                    <div className='flex items-baseline justify-center'>
                      <span className='text-5xl font-bold text-cyan-400'>
                        ${tier.price}
                      </span>
                      <span className='text-xl text-gray-400 ml-2'>
                        {tier.period}
                      </span>
                    </div>
                    {tier.savings && (
                      <div className='text-green-400 text-sm mt-2'>
                        {tier.savings}
                      </div>
                    )}
                  </div>

                  <ul className='text-left space-y-3 mb-8'>
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className='flex items-start'>
                        <Check className='w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-300'>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    href={tier.name === 'Enterprise' ? '/contact' : '/services'}
                    variant={tier.ctaVariant}
                    size='lg'
                    className='w-full'
                  >
                    {tier.cta}
                    <ArrowRight className='ml-2 w-5 h-5' />                  </Button>
                </div>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Value Propositions */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Why Choose Zion Tech Group?
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>            {valuePropositions.map((proposition, index) => (
              <UltraFuturisticCard
                key={index}
                variant={index % 2 === 0 ? 'quantum' : 'holographic'}
                interactive={true}
                className='text-center p-6'
              >
                <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mb-4'>
                  {proposition.icon}
                </div>
                <h3 className='text-xl font-bold text-white mb-2'>
                  {proposition.title}
                </h3>
                <p className='text-gray-300 text-sm mb-4'>
                  {proposition.description}
                </p>
                <div className='text-3xl font-bold text-cyan-400 mb-2'>
                  {proposition.metric}
                </div>
                <div className='text-sm text-gray-400'>
                  {proposition.detail}
                </div>              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Service Category Pricing Examples */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Service Category Pricing
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {serviceCategoryPricing.map((category, index) => (
              <UltraFuturisticCard
                key={index}
                variant={
                  index % 3 === 0
                    ? 'quantum'
                    : index % 3 === 1
                      ? 'holographic'
                      : 'neural'
                }
                interactive={true}
                className='p-6'
              >
                <div className='flex items-center mb-4'>
                  <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 mr-4'>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white'>
                      {category.category}
                    </h3>
                    <div className='text-cyan-400 font-semibold'>
                      {category.startingPrice}
                    </div>
                  </div>
                </div>

                <ul className='space-y-2 mb-4'>
                  {category.services.map((service, idx) => (
                    <li
                      key={idx}
                      className='text-sm text-gray-300 flex items-center'
                    >
                      <Check className='w-4 h-4 text-green-400 mr-2' />                      {service}
                    </li>
                  ))}
                </ul>

                <Button
                  href='/services'
                  variant='secondary'
                  size='sm'
                  className='w-full'
                >
                  Explore Services
                  <ChevronRight className='ml-2 w-4 h-4' />                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* Popular Services Pricing */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Popular Services Pricing
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>            {popularServices.slice(0, 6).map((service, index) => (
              <UltraFuturisticCard
                key={service.id}
                variant={service.variant as any}
                interactive={true}
                className='p-6'
              >
                <div className='text-center mb-4'>
                  <div className='text-3xl mb-3'>{service.icon}</div>
                  <h3 className='text-lg font-bold text-white mb-2'>
                    {service.name}
                  </h3>
                  <div className='text-2xl font-bold text-cyan-400 mb-2'>
                    {service.price}
                  </div>
                  <div className='text-sm text-gray-400'>
                    {service.category}
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='text-xs text-gray-400 mb-2'>
                    Key Features:
                  </div>
                  <ul className='text-xs text-gray-300 space-y-1'>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className='flex items-center'>
                        <Check className='w-3 h-3 text-green-400 mr-2' />                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  href={service.link}
                  variant='primary'
                  size='sm'
                  className='w-full'
                >
                  Learn More
                  <ExternalLink className='ml-2 w-4 h-4' />                </Button>
              </UltraFuturisticCard>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mb-20'>
          <h2 className='text-3xl font-bold text-white mb-12 text-center'>
            Frequently Asked Questions
          </h2>
          <div className='max-w-4xl mx-auto space-y-4'>
            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What's included in the free trial?
              </h3>
              <p className='text-gray-300'>
                All plans include a generous free trial period with full access
                to the selected services. No credit card required to start your
                trial.
              </p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant='holographic' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Can I change my plan later?
              </h3>
              <p className='text-gray-300'>
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate any billing
                adjustments.
              </p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant='neural' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                What support is included?
              </h3>
              <p className='text-gray-300'>
                All plans include 24/7 support. Professional and Enterprise
                plans include priority support with dedicated account managers.
              </p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant='quantum' className='p-6'>
              <h3 className='text-lg font-bold text-white mb-3'>
                Is there a setup fee?
              </h3>
              <p className='text-gray-300'>
                No setup fees for any plan. All services are designed for
                instant deployment with our AI-powered setup wizards.
              </p>            </UltraFuturisticCard>
          </div>
        </div>

        {/* Contact Information */}
        <div className='mb-16'>
          <h2 className='text-3xl font-bold text-white mb-8 text-center'>
            Get In Touch
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto'>
            <UltraFuturisticCard variant='quantum' className='text-center p-6'>
              <Phone className='w-12 h-12 text-cyan-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Phone</h3>
              <p className='text-cyan-400 text-lg font-semibold'>
                {contactInfo.mobile}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Available 24/7</p>
            </UltraFuturisticCard>

            <UltraFuturisticCard
              variant='holographic'
              className='text-center p-6'
            >
              <Mail className='w-12 h-12 text-purple-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Email</h3>
              <p className='text-purple-400 text-lg font-semibold'>
                {contactInfo.email}
              </p>
              <p className='text-gray-400 text-sm mt-2'>
                Quick response guaranteed
              </p>
            </UltraFuturisticCard>

            <UltraFuturisticCard variant='neural' className='text-center p-6'>
              <MapPin className='w-12 h-12 text-green-400 mx-auto mb-4' />
              <h3 className='text-xl font-bold text-white mb-3'>Address</h3>
              <p className='text-green-400 text-sm font-semibold leading-relaxed'>
                {contactInfo.address}
              </p>
              <p className='text-gray-400 text-sm mt-2'>Global operations</p>            </UltraFuturisticCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className='text-center'>
          <UltraFuturisticCard
            variant='quantum-holographic-advanced'
            className='p-12'
          >
            <h2 className='text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
              Ready to Get Started?
            </h2>
            <p className='text-xl text-gray-300 mb-8 max-w-3xl mx-auto'>
              Start your free trial today and experience the power of
              revolutionary AI & quantum computing services. No credit card
              required, instant setup, and full support included.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 justify-center mb-8'>
              <Button
                href='/services'
                variant='primary'
                size='lg'
                className='text-lg px-8 py-4'
              >
                Start Free Trial
                <Play className='ml-2 w-5 h-5' />
              </Button>
              <Button
                href='/contact'
                variant='secondary'
                size='lg'
                className='text-lg px-8 py-4'
              >
                Contact Sales
                <MessageSquare className='ml-2 w-5 h-5' />
              </Button>
            </div>

            <div className='text-sm text-gray-400'>
              <p>
                ✓ 30-90 Day Free Trials • ✓ No Credit Card Required • ✓ Instant
                Setup
              </p>
              <p className='mt-2'>
                ✓ 24/7 Support • ✓ 99.99% Uptime SLA • ✓ Global Infrastructure
              </p>            </div>
          </UltraFuturisticCard>
        </div>
      </div>
    </Layout>
  );
=======
import React from 'react'; import Head from 'next/head'; import Link from 'next/link'; import { ArrowRight,CheckCircle,Clock,Star,Zap,Shield,Users,Mail,FileText,BarChart3,ShoppingCart,Calendar,MessageSquare,Search,Eye,Target,TrendingUp,Globe,Lock,Cpu,Bot,Image,Video,Mic,Code,Settings,Monitor,Smartphone,Cloud,Server,Network,Car,Rocket,Heart,Building,Sprout,DollarSign,Award,Phone,MapPin,Brain,Package,X } from 'lucide-react'; import Navigation from '../components/Navigation'; import Footer from '../components/Footer'; export default function Pricing() { const title = 'Pricing — Zion Tech Group'; const description = 'Transparent pricing for AI services,IT solutions,and micro SaaS applications. Choose the plan that fits your business needs.'; const pricingPlans = [ { name: 'Micro SaaS Starter',description: 'Perfect for small businesses and startups',price: '$97',period: '/month',icon: Package,features: [ '1 Micro SaaS Application','Basic AI Features','Email Support','Standard Setup','Monthly Reports','Basic Analytics' ],popular: false,cta: 'Get Started',href: '/contact' },{ name: 'Micro SaaS Professional',description: 'Ideal for growing businesses',price: '$497',period: '/month',icon: TrendingUp,features: [ '3 Micro SaaS Applications','Advanced AI Features','Priority Support','Custom Setup','Weekly Reports','Advanced Analytics','API Integration','Custom Branding' ],popular: true,cta: 'Get Started',href: '/contact' },{ name: 'Micro SaaS Enterprise',description: 'For large organizations',price: '$1,497',period: '/month',icon: Building,features: [ 'Unlimited Micro SaaS Applications','Full AI Suite','24/7 Dedicated Support','White-label Solutions','Real-time Reports','Enterprise Analytics','Custom Integrations','Full Branding Control','Dedicated Account Manager','SLA Guarantee' ],popular: false,cta: 'Contact Sales',href: '/contact' } ]; const aiServicesPricing = [ { service: 'AI-Powered Email Responder',starter: '$2,500/month',professional: '$5,000/month',enterprise: '$8,000/month',features: ['Smart categorization','Automated responses','Sentiment analysis','CRM integration'] },{ service: 'AI Content Creation Suite',starter: '$1,500/month',professional: '$3,000/month',enterprise: '$5,000/month',features: ['Blog generation','Social media content','SEO optimization','Multi-language support'] },{ service: 'Intelligent Document Processing',starter: '$3,000/month',professional: '$6,000/month',enterprise: '$12,000/month',features: ['OCR processing','Data extraction','Document classification','Compliance monitoring'] },{ service: 'AI-Powered Talent Matching',starter: '$4,000/month',professional: '$8,000/month',enterprise: '$15,000/month',features: ['Resume parsing','Skill matching','Cultural fit analysis','Interview scheduling'] },{ service: 'Computer Vision Solutions',starter: '$5,000/month',professional: '$10,000/month',enterprise: '$20,000/month',features: ['Object detection','Quality control','Facial recognition','Video analytics'] } ]; const itServicesPricing = [ { service: 'Cloud Migration & Management',starter: '$5,000/month',professional: '$15,000/month',enterprise: '$50,000/month',features: ['Cloud strategy','Data migration','Multi-cloud setup','24/7 monitoring'] },{ service: 'Cybersecurity Solutions',starter: '$3,000/month',professional: '$8,000/month',enterprise: '$25,000/month',features: ['Threat detection','Incident response','Compliance management','Security training'] },{ service: 'IT Infrastructure Management',starter: '$2,000/month',professional: '$5,000/month',enterprise: '$15,000/month',features: ['Server management','Network setup','Backup solutions','Proactive maintenance'] },{ service: 'Digital Transformation Consulting',starter: '$10,000/project',professional: '$25,000/project',enterprise: '$100,000/project',features: ['Strategy development','Process automation','Legacy modernization','Change management'] } ]; const addOnServices = [ { service: '24/7 Premium Support',price: '$500/month',description: 'Round-the-clock technical support with guaranteed response times' },{ service: 'Custom Development',price: '$150/hour',description: 'Bespoke software development and customization services' },{ service: 'Security Audit',price: '$2,500/audit',description: 'Comprehensive security assessment and vulnerability testing' },{ service: 'Training & Workshops',price: '$1,000/day',description: 'On-site or remote training for your team on new technologies' },{ service: 'Data Migration',price: '$3,000/project',description: 'Secure data migration between systems and platforms' },{ service: 'Compliance Consulting',price: '$200/hour',description: 'Expert guidance on regulatory compliance and best practices' } ]; return ( <> <Head> <title>{title}</title> <meta name="description" content={description} /> <link rel="canonical" href="https: <meta property="og:title" content={title} /> <meta property="og:description" content={description} /> <meta property="og:url" content="https: <meta name="twitter:card" content="summary_large_image" /> <meta name="twitter:title" content={title} /> <meta name="twitter:description" content={description} /> </Head> <Navigation /> <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50"> {} <section className="relative py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto text-center"> <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"> Transparent Pricing </h1> <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"> Choose the perfect plan for your business needs. All plans include our core features with no hidden fees. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" /> </Link> <Link href="/services" className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200" > View All Services </Link> </div> </div> </section> {} <section className="py-20 px-4 sm:px-6 lg:px-8"> <div className="max-w-7xl mx-auto"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Micro SaaS Plans </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Start with our micro SaaS solutions and scale as your business grows </p> </div> <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {pricingPlans.map((plan,index) => ( <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 border-2 ${ plan.popular ? 'border-blue-500 relative' : 'border-gray-100' }`} > {plan.popular && ( <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold"> Most Popular </span> </div> )} <div className="text-center mb-6"> <div className="p-4 bg-blue-100 rounded-lg w-16 h-16 mx-auto mb-4 flex items-center justify-center"> <plan.icon className="h-8 w-8 text-blue-600" /> </div> <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3> <p className="text-gray-600 mb-4">{plan.description}</p> <div className="flex items-baseline justify-center"> <span className="text-4xl font-bold text-gray-900">{plan.price}</span> <span className="text-gray-600 ml-1">{plan.period}</span> </div> </div> <ul className="space-y-3 mb-8"> {plan.features.map((feature,idx) => ( <li key={idx} className="flex items-center"> <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" /> <span className="text-gray-600">{feature}</span> </li> ))} </ul> <Link href={plan.href} className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${ plan.popular ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200' }`} > {plan.cta} <ArrowRight className="ml-2 h-4 w-4" /> </Link> </div> ))} </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> AI Services Pricing </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Advanced AI solutions with flexible pricing based on your requirements </p> </div> <div className="overflow-x-auto"> <table className="w-full border-collapse"> <thead> <tr className="border-b border-gray-200"> <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th> <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th> <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th> <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th> </tr> </thead> <tbody> {aiServicesPricing.map((service,index) => ( <tr key={index} className="border-b border-gray-100 hover:bg-gray-50"> <td className="py-4 px-6"> <div> <div className="font-semibold text-gray-900">{service.service}</div> <div className="text-sm text-gray-600 mt-1"> {service.features.join(' • ')} </div> </div> </td> <td className="text-center py-4 px-6 font-semibold text-blue-600"> {service.starter} </td> <td className="text-center py-4 px-6 font-semibold text-blue-600"> {service.professional} </td> <td className="text-center py-4 px-6 font-semibold text-blue-600"> {service.enterprise} </td> </tr> ))} </tbody> </table> </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> IT Services Pricing </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Comprehensive IT solutions with transparent pricing and no hidden costs </p> </div> <div className="overflow-x-auto"> <table className="w-full border-collapse"> <thead> <tr className="border-b border-gray-200"> <th className="text-left py-4 px-6 font-semibold text-gray-900">Service</th> <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th> <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th> <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th> </tr> </thead> <tbody> {itServicesPricing.map((service,index) => ( <tr key={index} className="border-b border-gray-100 hover:bg-gray-50"> <td className="py-4 px-6"> <div> <div className="font-semibold text-gray-900">{service.service}</div> <div className="text-sm text-gray-600 mt-1"> {service.features.join(' • ')} </div> </div> </td> <td className="text-center py-4 px-6 font-semibold text-blue-600"> {service.starter} </td> <td className="text-center py-4 px-6 font-semibold text-blue-600"> {service.professional} </td> <td className="text-center py-4 px-6 font-semibold text-blue-600"> {service.enterprise} </td> </tr> ))} </tbody> </table> </div> </div> </section> {} <section className="py-20 bg-white"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Add-On Services </h2> <p className="text-xl text-gray-600 max-w-3xl mx-auto"> Enhance your solution with additional services tailored to your specific needs </p> </div> <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {addOnServices.map((service,index) => ( <div key={index} className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200" > <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.service}</h3> <div className="text-2xl font-bold text-blue-600 mb-2">{service.price}</div> <p className="text-gray-600 text-sm">{service.description}</p> </div> ))} </div> </div> </section> {} <section className="py-20 bg-gray-50"> <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> <div className="text-center mb-16"> <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"> Frequently Asked Questions </h2> <p className="text-xl text-gray-600"> Common questions about our pricing and services </p> </div> <div className="space-y-8"> <div className="bg-white rounded-lg p-6 shadow-sm"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Do you offer custom pricing for large enterprises? </h3> <p className="text-gray-600"> Yes,we provide custom pricing for large enterprises with specific requirements. Contact our sales team to discuss your needs and get a tailored quote. </p> </div> <div className="bg-white rounded-lg p-6 shadow-sm"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Can I change my plan at any time? </h3> <p className="text-gray-600"> Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the beginning of your next billing cycle. </p> </div> <div className="bg-white rounded-lg p-6 shadow-sm"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> What payment methods do you accept? </h3> <p className="text-gray-600"> We accept all major credit cards,bank transfers,and can arrange custom payment terms for enterprise clients. </p> </div> <div className="bg-white rounded-lg p-6 shadow-sm"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Is there a setup fee? </h3> <p className="text-gray-600"> Setup fees vary by service complexity. Basic micro SaaS solutions have no setup fee,while complex AI implementations may include a one-time setup charge. </p> </div> <div className="bg-white rounded-lg p-6 shadow-sm"> <h3 className="text-lg font-semibold text-gray-900 mb-2"> Do you offer refunds? </h3> <p className="text-gray-600"> We offer a 30-day money-back guarantee for all our services. If you're not satisfied,we'll provide a full refund. </p> </div> </div> </div> </section> {} <section className="py-20 bg-blue-600"> <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"> <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> Ready to Get Started? </h2> <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"> Contact us today to discuss your specific needs and get a customized quote for your business. </p> <div className="flex flex-col sm:flex-row gap-4 justify-center"> <Link href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center" > <Phone className="mr-2 h-5 w-5" /> Call +1 302 464 0950 </Link> <Link href="mailto:kleber@ziontechgroup.com" className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center" > <Mail className="mr-2 h-5 w-5" /> Send Email </Link> </div> </div> </section> </main> <Footer /> </> )}
>>>>>>> origin/automation-improvements
