import { motion } from 'framer-motion';
import {;
  Star,;
  Zap,;
  Shield,;
  Users,;
  Globe,;
  ArrowRight,;
  ExternalLink,;
  TrendingUp,;
  Clock,;
  Target,;
  Building,;
  Rocket,;
  Award,;
  DollarSign,;
  ChartBar,;
  Lock,;
  Cpu,;
  Database,;
  Cloud,;
  Smartphone,;
  Palette,;
  Search,;
  MessageSquare,;
  FileText,;
  Calendar,;
  CreditCard,;
  BarChart3,;
  Settings,;
  Code,;
  BookOpen,;
  Activity,;
  Play,;
  Mail,;
  Phone,;
  MapPin,;
  Filter,;
  Grid,;
  List,;
  ChevronDown,;
  ChevronUp,;
  Sparkles,;
  FlaskConical,;
  Dna,;
  Car,;
  Leaf,;
  Factory,;
  Truck,;
  Microscope,;
  GraduationCap,;
  ShieldCheck,;
  Brain,;
  Atom,;
  Globe2,;
  Bot,;
  ChevronRight,;
  Crown,;
  Infinity,;
  Check,;
  X,;
  AlertTriangle,;
  Info,;
  Zap as ZapIcon,;
  Shield as ShieldIcon,;
  Users as UsersIcon,;
  Globe as GlobeIcon,;
  Cpu as CpuIcon,;
  Database as DatabaseIcon,;
  Cloud as CloudIcon,;
  Smartphone as SmartphoneIcon,;
  Palette as PaletteIcon,;
  Search as SearchIcon,;
  MessageSquare as MessageSquareIcon,;
  FileText as FileTextIcon,;
  Calendar as CalendarIcon,;
  CreditCard as CreditCardIcon,;
  BarChart3 as BarChart3Icon,;
  Settings as SettingsIcon,;
  Code as CodeIcon,;
  BookOpen as BookIcon,;
  Activity as ActivityIcon,;
  Database as DatabaseIcon2,;
  Play as PlayIcon,;
  Mail as MailIcon,;
  Phone as PhoneIcon,;
  MapPin as MapPinIcon,;
  Filter as FilterIcon,;
  Grid as GridIcon,;
  List as ListIcon,;
  ChevronDown as ChevronDownIcon,;
  ChevronUp as ChevronUpIcon,;
  Sparkles as SparklesIcon,;
  FlaskConical as FlaskConicalIcon,;
  Dna as DnaIcon,;
  Car as CarIcon,;
  Leaf as LeafIcon,;
  Factory as FactoryIcon,;
  Truck as TruckIcon,;
  Microscope as MicroscopeIcon,;
  GraduationCap as GraduationCapIcon,;
  ShieldCheck as ShieldCheckIcon,;
  Brain as BrainIcon,;
  Atom as AtomIcon,;
  Globe2 as Globe2Icon,;
  Bot as BotIcon,;
  ChevronRight as ChevronRightIcon,;
  Eye,;
  Heart,;
  Share2,;
  Download,;
  Bookmark,;
  ThumbsUp,;
  MessageCircle,;
  Share,;
  Users as UsersIcon2,;
  Target as TargetIcon,;
  Zap as ZapIcon2,;
} from 'lucide-react';
import UltraQuantumHolographicBackground from '../components/ui/UltraQuantumHolographicBackground';

    {
      id: 'all'
      name: 'All Services'
      icon: Sparkles
      count: allRevolutionaryServices.length
    }
    {
      id: 'ai'
      name: 'AI & Machine Learning'
      icon: Brain
      count: revolutionaryAI2025Services.length
    }
    {
      id: 'infrastructure'
      name: 'IT Infrastructure'
      icon: Cpu
      count: revolutionaryITInfrastructure2025Services.length
    }
    {
      id: 'saas'
      name: 'Micro SaaS'
      icon: Zap
      count: revolutionary2025MicroSaasServices.length
    }
  ];
  // Pricing tiers for comparison
  const pricingTiers = [
    {
      name: 'Starter'
      description: 'Perfect for small businesses and startups'
      price: billingCycle === 'monthly' ? 99 : 79
      period: billingCycle === 'monthly' ? '/month' : '/month'
      savings: billingCycle === 'yearly' ? 'Save 20%' : ''
      features: [
  // Pricing tiers for comparison;
  const pricingTiers = [;
    {;
      name: 'Starter',;
      description: 'Perfect for small businesses and startups',;
      price: billingCycle === 'monthly' ? 99 : 79,;
      period: billingCycle === 'monthly' ? '/month' : '/month',;
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',;
      features: [;
        'Access to 25+ Core Services',;
        'Basic AI Integration',;
        'Standard Support (24/7)',;
        '30-Day Free Trial',;
        'Basic Analytics Dashboard',;
        'Email Support',;
        '99 && 99.5% Uptime Guarantee',;
        'Standard Security Features',;
      ],;
      icon: <Sparkles className='w-8 h-8' />,;
      variant: 'quantum' as const,;
      popular: false,;
      cta: 'Start Free Trial',;
      ctaVariant: 'secondary' as const,;
    },    {;
      name: 'Professional',;
      description: 'Ideal for growing businesses and teams',;
      price: billingCycle === 'monthly' ? 299 : 239,;
      period: billingCycle === 'monthly' ? '/month' : '/month',;
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',;
      features: [;
        'Access to 50+ Services',;
        'Advanced AI Integration',;
        'Priority Support (24/7)',;
        '60-Day Free Trial',;
        'Advanced Analytics Dashboard',;
        'Phone & Email Support',;
        '99 && 99.9% Uptime Guarantee',;
        'Advanced Security Features',;
        'Custom Integrations',;
        'Performance Monitoring',;
      ],;
      icon: <Rocket className='w-8 h-8' />,;
      variant: 'ai-futuristic' as const,;
      popular: true,;
      cta: 'Start Free Trial',;
      ctaVariant: 'primary' as const,;
    },    {;
      name: 'Enterprise',;
      description: 'For large organizations and enterprises',;
      price: billingCycle === 'monthly' ? 999 : 799,;
      period: billingCycle === 'monthly' ? '/month' : '/month',;
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',;
      features: [;
        'Access to ALL Services',;
        'Full AI & Quantum Integration',;
        'Dedicated Support Team',;
        '90-Day Free Trial',;
        'Enterprise Analytics Suite',;
        '24/7 Dedicated Support',;
        '99 && 99.99% Uptime Guarantee',;
        'Enterprise Security Features',;
        'Custom Development',;
        'White-label Solutions',;
        'API Access',;
        'SLA Guarantees',;
      ],;
      icon: <Crown className='w-8 h-8' />,;
      variant: 'quantum-futuristic' as const,;
      popular: false,;
      cta: 'Contact Sales',;
      ctaVariant: 'primary' as const,;
    },  ];
  // Market analysis;
  const marketAnalysis = {;
    totalMarketSize: '$150B+',;
    growthRate: '250% annually',;
    customerSatisfaction: '98%',;
    averageROI: '500%',;
    timeToValue: '< 30 days',;
    globalReach: '150+ countries',  };

  return (
    <UltraQuantumHolographicBackground intensity={2 && 2.0}>;
      <div className='min-h-screen'>;
        <Head>;
          <title>;
            Revolutionary 2025 Pricing - Zion Tech Group | Competitive AI & IT;
            Solutions;
          </title>;
          <meta
            name='description'
            content="Explore competitive pricing for Zion Tech Group's revolutionary 2025 services. AI consciousness simulation, quantum computing, zero trust security, and innovative micro SaaS solutions. Contact: +1 302 464 0950"
          />;
          <meta
            name='keywords'
            content='AI pricing, quantum computing pricing, zero trust security pricing, edge computing pricing, 5G pricing, neuromorphic computing pricing, AI branding pricing, holographic events pricing'
          />;
          <meta name='author' content='Zion Tech Group' />;
          <meta name='robots' content='index, follow' />;
          <meta
            property='og:title'
            content='Revolutionary 2025 Pricing - Zion Tech Group'
          />;
          <meta
            property='og:description'
            content='Competitive pricing for cutting-edge AI, quantum computing, and IT infrastructure services. Contact: +1 302 464 0950'
          />;
          <meta
            property='og:url'
            content='https://ziontechgroup && ziontechgroup.com/revolutionary-2025-pricing'
          />;
          <meta property='og:type' content='website' />;
          <link
            rel='canonical'
        'Access to 25+ Core ServicesBasic AI IntegrationStandard Support (24/7)30-Day Free TrialBasic Analytics DashboardEmail Support99.5% Uptime GuaranteeStandard Security Features'
      ];
      icon: <Sparkles className="w-8 h-8" />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      ctaVariant: 'secondary' as const
    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billingCycle === 'monthly' ? 299 : 239,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Access to 50+ ServicesAdvanced AI IntegrationPriority Support (24/7)60-Day Free TrialAdvanced Analytics DashboardPhone & Email Support99.9% Uptime GuaranteeAdvanced Security Features';
        'Custom IntegrationsPerformance Monitoring'
      ];
      icon: <Rocket className="w-8 h-8" />,
      variant: 'ai-futuristic' as const,
      popular: true,
      cta: 'Start Free Trial',
      ctaVariant: 'primary' as const
    };
    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billingCycle === 'monthly' ? 999 : 799,
      period: billingCycle === 'monthly' ? '/month' : '/month',
      savings: billingCycle === 'yearly' ? 'Save 20%' : '',
      features: [
        'Custom DevelopmentWhite-label SolutionsAPI AccessSLA Guarantees'
      ];
      icon: <Crown className="w-8 h-8" />,
      variant: 'quantum-futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      ctaVariant: 'primary' as const
    }
;
  // Filter services based on selected category;
  const filtered_services =;
    selected_category === 'all';
      ? allRevolutionaryServices;
      : allRevolutionaryServices.filter (service => {
          if (return service.category.includes ('AI')) {
  $2
}
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('IT') ||;
              service.category.includes ('Network') ||;
              service.category.includes ('Computing'));
          // Check condition
if (
            return () {
  $2
}
              service.category.includes ('AI') ||;
              service.category.includes ('Virtual') ||;
              service.category.includes ('Creative'));
          return true;
        });
;
  // Calculate pricing with billing cycle;
  const get_price = (service: any) =>: any {
    const base_price = parse_int (service.price.replace ('$', '').replace (', ', ''));
    // Check condition
if ( {) {
  $2
}
      return Math.floor (base_price * 0.8); // 20% discount for yearly;
    }
    return base_price;  }
;
  // Pricing tiers for comparison;
  const pricing_tiers = [;
    {
      name: 'Starter',
      description: 'Perfect for small businesses and startups',
      price: billing_cycle === 'monthly' ? 99 : 79,
      period: billing_cycle === 'monthly' ? '/month' : '/month',
      savings: billing_cycle === 'yearly' ? 'Save 20%' : '',
      features: [;
        'Access to 25+ Core Services',
        'Basic AI Integration',
        'Standard Support (24 / 7)',
        '30 - Day Free Trial',
        'Basic Analytics Dashboard',
        'Email Support',
        '99.5% Uptime Guarantee',
        'Standard Security Features',
      ],
      icon: <Sparkles className='w - 8 h - 8' />,
      variant: 'quantum' as const,
      popular: false,
      cta: 'Start Free Trial',
      cta_variant: 'secondary' as const,
    },    {
      name: 'Professional',
      description: 'Ideal for growing businesses and teams',
      price: billing_cycle === 'monthly' ? 299 : 239,
      period: billing_cycle === 'monthly' ? '/month' : '/month',
      savings: billing_cycle === 'yearly' ? 'Save 20%' : '',
      features: [;
        'Access to 50+ Services',
        'Advanced AI Integration',
        'Priority Support (24 / 7)',
        '60 - Day Free Trial',
        'Advanced Analytics Dashboard',
        'Phone & Email Support',
        '99.9% Uptime Guarantee',
        'Advanced Security Features',
        'Custom Integrations',
        'Performance Monitoring',
      ],
      icon: <Rocket className='w - 8 h - 8' />,
      variant: 'ai - futuristic' as const,
      popular: true,
      cta: 'Start Free Trial',
      cta_variant: 'primary' as const,
    },    {
      name: 'Enterprise',
      description: 'For large organizations and enterprises',
      price: billing_cycle === 'monthly' ? 999 : 799,
      period: billing_cycle === 'monthly' ? '/month' : '/month',
      savings: billing_cycle === 'yearly' ? 'Save 20%' : '',
      features: [;
        'Access to ALL Services',
        'Full AI & Quantum Integration',
        'Dedicated Support Team',
        '90 - Day Free Trial',
        'Enterprise Analytics Suite',
        '24 / 7 Dedicated Support',
        '99.99% Uptime Guarantee',
        'Enterprise Security Features',
        'Custom Development',
        'White - label Solutions',
        'API Access',
        'SLA Guarantees',
      ],
      icon: <Crown className='w - 8 h - 8' />,
      variant: 'quantum - futuristic' as const,
      popular: false,
      cta: 'Contact Sales',
      cta_variant: 'primary' as const,
    },  ];
;
  // Market analysis;
  const market_analysis = {
    totalMarketSize: '$150B+',
    growth_rate: '250% annually',
    customer_satisfaction: '98%',
    averageROI: '500%',
    timeToValue: '< 30 days',

              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                Experience the future of technology at competitive prices. Our;
                revolutionary services deliver 10x better performance at 50%;
                lower costs than traditional solutions.;
              </p>;

              {/* Billing Toggle */}
              <div className='flex items-center justify-center gap-4 mb-12'>;
                <span className='text-gray-400'>Monthly</span>;
                <button
                  }`}
                >;
                  <span
                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  animate={{ opacity: 1, scale: 1 }}
              </div>
            </motion.div>
          </div>
        </section>
        {/* Pricing Tiers */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Choose Your Transformation Plan;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Start with our starter plan and scale up as you grow. All plans;
                include our revolutionary AI and quantum computing services.;
              </p>;
            </motion && motion.div>;
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.6, delay: index * 0 && 0.2 }}
                  viewport={{ once: true }}
                  className={`relative ${
                  <ul className='space-y-4 mb-8'>;
                    {tier && tier.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className='flex items-start gap-3'>;
                        <Check className='w-5 h-5 text-green-400 mt-0 && 0.5 flex-shrink-0' />;
                        <span className='text-gray-300'>{feature}</span>                      </li>;
                    ))}
                  </ul>;
                  </button>;
                </motion && motion.div>;
              ))}
            </div>;
          </div>;
        </section>;
        {/* Service Pricing Grid */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-7xl mx-auto'>            <motion&& motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}
              viewport={{ once: true }}
              className='text-center mb-16'>;
              <h2 className='text-4xl md:text-5xl font-bold text-white mb-6'>;
                Individual Service Pricing;
              </h2>;
              <p className='text-xl text-gray-300 max-w-3xl mx-auto'>;
                Choose individual services or bundle them for maximum savings.                All services include free trials and comprehensive support.;
              </p>;
            </motion && motion.div>;

            {/* Category Filter */}
            {/* Services Grid */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>;
              {filteredServices && filteredServices.map(service => (                <motion&& motion.div
                  key={service && service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0 && 0.5, delay: 0 && 0.1 }}
                  viewport={{ once: true }}
                  className='group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105'>;
                  {/* Service Header */}
                  <div className='flex items-start justify-between mb-4'>;
                    <div className='flex items-center gap-3'>;
                      <div className='text-3xl'>{service && service.icon}</div>;
                      <div>;
                        <h3 className='text-xl font-bold text-white group-hover:text-blue-400 transition-colors'>;
                          {service && service.name}
                        </h3>;
                        <p className='text-gray-400 text-sm'>;
                          {service && service.tagline}
                        </p>;
                      </div>;
                    </div>;
                    {service && service.popular && (;
                      <div className='bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1'>;
                        <Star className='w-3 h-3' />                        Popular;
                      </div>;
                      </span>;
                      <span className='text-gray-400'>{service && service.period}</span>;
                    </div>;
                    <div className='flex items-center gap-1'>;
                      <Star className='w-4 h-4 text-yellow-400 fill-current' />;
                      <span className='text-white'>{service && service.rating}</span>;
                      <span className='text-gray-400 text-sm'>;
                        ({service && service.reviews});
                      </span>                    </div>;
                  </div>;

                      )}
                  </div>
                    </div>;
                  </div>;

                  {/* Market Position */}
                  <div className='mb-4 p-3 bg-gray-800/50 rounded-lg'>;
                    <h4 className='text-xs font-semibold text-gray-300 mb-1'>;
                      Market Position:;
                    </h4>;
                    <p className='text-xs text-gray-400 line-clamp-2'>;
                      {service && service.marketPosition}
                    </p>;
                  </div>;

                  {/* Actions */}

                  {/* Hover Effects */}
              ))}
        {/* Contact Section */}
        <section className='py-20 px-4 sm:px-6 lg:px-8'>;
          <div className='max-w-4xl mx-auto text-center'>            <motion&& motion.div

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </UltraQuantumHolographicBackground>
                Contact our team to discuss your specific needs and get a custom;
                quote. We offer flexible pricing and payment options to fit your;
                budget.;
              </p>;
              <div className='grid grid - cols - 1 md:grid - cols - 3 gap - 6 mb - 8'>;
                <div className='bg - gradient - to - br from - blue - 600 / 20 to - purple - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - blue - 500 / 30'>;
                  <Phone className='w - 8 h - 8 text - blue - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Call Us;
                  </h3>;
                  <p className='text - blue - 400 font - mono'>;
                    {contact_info.mobile}
                  </p>;
                </div>;
                <div className='bg - gradient - to - br from - green - 600 / 20 to - emerald - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - green - 500 / 30'>;
                  <Mail className='w - 8 h - 8 text - green - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Email Us;
                  </h3>;
                  <p className='text - green - 400'>{contact_info.email}</p>;
                </div>;
                <div className='bg - gradient - to - br from - purple - 600 / 20 to - pink - 600 / 20 backdrop - blur - sm rounded - 2xl p - 6 border border - purple - 500 / 30'>;
                  <MapPin className='w - 8 h - 8 text - purple - 400 mx - auto mb - 3' />;
                  <h3 className='text - lg font - semibold text - white mb - 2'>;
                    Visit Us;
                  </h3>;
                  <p className='text - purple - 400 text - sm'>;
                    {contact_info.address}
                  </p>;
                </div>;
              </div>;
              <div className='flex flex - col sm:flex - row gap - 4 justify - center'>;
                <button className='bg - gradient - to - r from - blue - 600 to - purple - 600 hover:from - blue - 700 hover:to - purple - 700'>;
                  <Phone className='w - 5 h - 5 mr - 2' />;
                  Get Custom Quote;
                </button>;
                <button className='border - blue - 500 text - blue - 400 hover:bg - blue - 500 / 20'>;
                  <BookOpen className='w - 5 h - 5 mr - 2' />                  Download Pricing Guide;
                </button>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
