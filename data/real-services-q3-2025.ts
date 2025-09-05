<<<<<<< HEAD
import { ServiceVariant } from '../types/service-variants',
export interface Q3Service {
  id: string,
  name: string,
  tagline: string,
  price: string,
  period: string,
  description: string,
  features: string[],
  popular?: boolean,
  icon: string,
  color: string,
  textColor: string,
  link: string,
  marketPosition?: string,
  targetAudience?: string,
  trialDays?: number,
  setupTime?: string,
  category: string,
  realService: boolean,
  technology?: string[],
  integrations?: string[],
  useCases?: string[],
  roi?: string,
  competitors?: string[],
  marketSize?: string,
  growthRate?: string,
  variant?: ServiceVariant,
  customers?: number,
  rating?: number,
  reviews?: number
}

const contact = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

export const realServicesQ32025: Q3Service[] = [
  {
    id: 'subscription-analytics-revenue-optimization',
    name: 'Subscription Analytics & Revenue Optimization',
    tagline: 'Churn insights, cohort analysis, and pricing experiments for SaaS growth',
    price: '$599',
    period: '/month',
    description: 'We implement and operate a revenue analytics stack that surfaces churn drivers, LTV/CAC ratios, cohort trends, and pricing experiment outcomes. Includes instrumentation templates and weekly executive reports.',
    features: [
      'Churn and retention analysisCohort and funnel dashboardsPrice testing and packaging experimentsRevenue leakage detectionRevenue forecasting modelsWeekly executive summaries'
    ],
    popular: true,
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/subscription-analytics-revenue-optimization',
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',
    targetAudience: 'SaaS startups, PLG companies, finance and growth teams',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'AI & Data',
    realService: true,
    technology: ['dbtSnowflake/BigQuerySegment/GA4Python'],
    integrations: ['StripePaddleChargebeeLemon Squeezy'],
    useCases: ['Reduce churnPrice optimizationBoard-ready revenue KPIs'],
    roi: '3–10% ARR lift from churn reduction and pricing wins.',
    competitors: ['ProfitWell MetricsChartMogulBaremetrics'],
    marketSize: '$30B+ subscription economy tooling',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    customers: 24,
    rating: 4.9,
    reviews: 31,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  },
  {
    id: 'digital-product-commerce-stack',
    name: 'Digital Product Commerce Stack',
    tagline: 'End-to-end setup for selling downloads, licenses, and subscriptions',
    price: '$1,200',
    period: '/project',
    description: 'We stand up a production-grade commerce stack for digital products with subscriptions, tax handling, license keys, refunds, and analytics. Includes storefront templates and payment integrations.',
    features: [
      'Payments, taxes, and invoicingLicense keys and subscriptionsEU/US tax and compliance guidanceStorefront templates and checkoutSales analytics and email hooks1-week launch plan'
    ],
    icon: '🛒',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/digital-product-commerce-stack',
    marketPosition: 'Implementation partner alternative to Lemon Squeezy/Gumroad do-it-yourself.',
    targetAudience: 'Indie SaaS, creators, agencies launching digital products',
    setupTime: '5–7 days',
    category: 'Developer Tools',
    realService: true,
    technology: ['Next.jsStripeLemon Squeezy APIPostgreSQL'],
    integrations: ['StripeLemon SqueezyGumroadMake/Zapier'],
    useCases: ['Course salesPlugin licensesTemplates marketplace'],
    roi: 'Launch revenue in under 2 weeks, save 40–80 hours of setup.',
    competitors: ['Lemon SqueezyGumroadPaddle'],
    customers: 12,
    rating: 4.8,
    reviews: 18,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  },
  {
    id: 'wordpress-internal-linking-automation',
    name: 'WordPress Internal Linking Automation',
    tagline: 'AI-guided internal links that improve SEO structure and topical authority',
    price: '$299',
    period: '/month',
    description: 'We deploy and tune internal linking automation for WordPress sites, calibrate anchor text, and surface orphan pages. Includes monthly SEO structure audits and CTR uplift experiments.',
    features: [
      'Automatic link suggestions and anchorsOrphan page and pillar clusteringClick-through rate experimentsReporting and recommendationsSitemap and crawl improvements'
    ],
    icon: '🔗',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-200',
    link: 'https://ziontechgroup.com/services/wordpress-internal-linking-automation',
    marketPosition: 'Comparable to Link Whisper with managed tuning and reporting.',
    targetAudience: 'Content sites, ecommerce, publishers on WordPress',
    trialDays: 7,
    setupTime: '2–4 days',
    category: 'Growth & Marketing',
    realService: true,
    technology: ['WordPressGA4Looker Studio'],
    integrations: ['Link WhisperYoast/RankMathSearch Console'],
    useCases: ['Boost organic trafficFix site structureImprove crawl and CTR'],
    roi: '5–25% organic uplift in 8–12 weeks on content libraries.',
    competitors: ['Link WhisperInternal Link Juicer'],
    customers: 30,
    rating: 4.7,
    reviews: 22,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  },
  {
    id: 'reviews-ugc-activation',
    name: 'Ecommerce Reviews & UGC Activation',
    tagline: 'Deploy reviews and UGC workflows that increase trust and conversion',
    price: '$999',
    period: '/project',
    description: 'We implement reviews and UGC collection across your storefront with on-brand widgets, post-purchase triggers, and moderation pipelines. Includes KPI dashboards for conversion lift.',
    features: [
      'Reviews widget integrationEmail/SMS post-purchase triggersPhoto/video UGC captureModeration and syndicationConversion impact reporting'
    ],
    icon: '⭐',
    color: 'from-amber-600 to-rose-600',
    textColor: 'text-amber-200',
    link: 'https://ziontechgroup.com/services/ecommerce-reviews-ugc-activation',
    marketPosition: 'Managed alternative to do-it-yourself Yotpo/Judge.me setups.',
    targetAudience: 'Shopify and custom ecommerce brands',
    setupTime: '3–6 days',
    category: 'Quality & Monitoring',
    realService: true,
    technology: ['ShopifyKlaviyoNext.js'],
    integrations: ['YotpoJudge.meLooxStamped'],
    useCases: ['Increase trustLift CVRCollect UGC for ads'],
    roi: '2–10% CVR lift on PDPs post-deployment.',
    competitors: ['YotpoJudge.meLooxStamped.io'],
    customers: 10,
    rating: 4.8,
    reviews: 12,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
  }
],
=======

export interface Q3Service {_id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;
  category: string;
  realService: boolean;
  technology?: string[];
  integrations?: string[];
  useCases?: string[];
  roi?: string;
  competitors?: string[];
  marketSize?: string;
  growthRate?: string;
  variant?: ServiceVariant;
  customers?: number;
  rating?: number;
  reviews?: number;}

const _contact = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

export const realServicesQ32025: Q3Service[] = [
  {_id: 'subscription-analytics-revenue-optimization', _name: 'Subscription Analytics & Revenue Optimization', _tagline: 'Churn insights, _cohort analysis, _and pricing experiments for SaaS growth', _price: '$599', _period: '/month', _description: 'We implement and operate a revenue analytics stack that surfaces churn drivers, _LTV/CAC ratios, _cohort trends, _and pricing experiment outcomes. Includes instrumentation templates and weekly executive reports.', _features: [
      'Churn and retention analysis', _'Cohort and funnel dashboards', _'Price testing and packaging experiments', _'Revenue leakage detection', _'Revenue forecasting models', _'Weekly executive summaries'
    ], _popular: true, _icon: '📊', _color: 'from-emerald-600 to-teal-700', _textColor: 'text-emerald-300', _link: 'https://ziontechgroup.com/services/subscription-analytics-revenue-optimization', _marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.', _targetAudience: 'SaaS startups, _PLG companies, _finance and growth teams', _trialDays: 14, _setupTime: '1–2 weeks', _category: 'AI & Data', _realService: true, _technology: ['dbt', _'Snowflake/BigQuery', _'Segment/GA4', _'Python'], _integrations: ['Stripe', _'Paddle', _'Chargebee', _'Lemon Squeezy'], _useCases: ['Reduce churn', _'Price optimization', _'Board-ready revenue KPIs'], _roi: '3–10% ARR lift from churn reduction and pricing wins.', _competitors: ['ProfitWell Metrics', _'ChartMogul', _'Baremetrics'], _marketSize: '$30B+ subscription economy tooling', _growthRate: '30% YoY', _variant: 'ai-futuristic', _customers: 24, _rating: 4.9, _reviews: 31, _// @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact},
  {_id: 'digital-product-commerce-stack', _name: 'Digital Product Commerce Stack', _tagline: 'End-to-end setup for selling downloads, _licenses, _and subscriptions', _price: '$1, _200', _period: '/project', _description: 'We stand up a production-grade commerce stack for digital products with subscriptions, _tax handling, _license keys, _refunds, _and analytics. Includes storefront templates and payment integrations.', _features: [
      'Payments, _taxes, _and invoicing', _'License keys and subscriptions', _'EU/US tax and compliance guidance', _'Storefront templates and checkout', _'Sales analytics and email hooks', _'1-week launch plan'
    ], _icon: '🛒', _color: 'from-cyan-600 to-blue-700', _textColor: 'text-cyan-300', _link: 'https://ziontechgroup.com/services/digital-product-commerce-stack', _marketPosition: 'Implementation partner alternative to Lemon Squeezy/Gumroad do-it-yourself.', _targetAudience: 'Indie SaaS, _creators, _agencies launching digital products', _setupTime: '5–7 days', _category: 'Developer Tools', _realService: true, _technology: ['Next.js', _'Stripe', _'Lemon Squeezy API', _'PostgreSQL'], _integrations: ['Stripe', _'Lemon Squeezy', _'Gumroad', _'Make/Zapier'], _useCases: ['Course sales', _'Plugin licenses', _'Templates marketplace'], _roi: 'Launch revenue in under 2 weeks; save 40–80 hours of setup.', _competitors: ['Lemon Squeezy', _'Gumroad', _'Paddle'], _customers: 12, _rating: 4.8, _reviews: 18, _// @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact},
  {_id: 'wordpress-internal-linking-automation', _name: 'WordPress Internal Linking Automation', _tagline: 'AI-guided internal links that improve SEO structure and topical authority', _price: '$299', _period: '/month', _description: 'We deploy and tune internal linking automation for WordPress sites, _calibrate anchor text, _and surface orphan pages. Includes monthly SEO structure audits and CTR uplift experiments.', _features: [
      'Automatic link suggestions and anchors', _'Orphan page and pillar clustering', _'Click-through rate experiments', _'Reporting and recommendations', _'Sitemap and crawl improvements'
    ], _icon: '🔗', _color: 'from-purple-600 to-pink-600', _textColor: 'text-purple-200', _link: 'https://ziontechgroup.com/services/wordpress-internal-linking-automation', _marketPosition: 'Comparable to Link Whisper with managed tuning and reporting.', _targetAudience: 'Content sites, _ecommerce, _publishers on WordPress', _trialDays: 7, _setupTime: '2–4 days', _category: 'Growth & Marketing', _realService: true, _technology: ['WordPress', _'GA4', _'Looker Studio'], _integrations: ['Link Whisper', _'Yoast/RankMath', _'Search Console'], _useCases: ['Boost organic traffic', _'Fix site structure', _'Improve crawl and CTR'], _roi: '5–25% organic uplift in 8–12 weeks on content libraries.', _competitors: ['Link Whisper', _'Internal Link Juicer'], _customers: 30, _rating: 4.7, _reviews: 22, _// @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact},
  {_id: 'reviews-ugc-activation', _name: 'Ecommerce Reviews & UGC Activation', _tagline: 'Deploy reviews and UGC workflows that increase trust and conversion', _price: '$999', _period: '/project', _description: 'We implement reviews and UGC collection across your storefront with on-brand widgets, _post-purchase triggers, _and moderation pipelines. Includes KPI dashboards for conversion lift.', _features: [
      'Reviews widget integration', _'Email/SMS post-purchase triggers', _'Photo/video UGC capture', _'Moderation and syndication', _'Conversion impact reporting'
    ], _icon: '⭐', _color: 'from-amber-600 to-rose-600', _textColor: 'text-amber-200', _link: 'https://ziontechgroup.com/services/ecommerce-reviews-ugc-activation', _marketPosition: 'Managed alternative to do-it-yourself Yotpo/Judge.me setups.', _targetAudience: 'Shopify and custom ecommerce brands', _setupTime: '3–6 days', _category: 'Quality & Monitoring', _realService: true, _technology: ['Shopify', _'Klaviyo', _'Next.js'], _integrations: ['Yotpo', _'Judge.me', _'Loox', _'Stamped'], _useCases: ['Increase trust', _'Lift CVR', _'Collect UGC for ads'], _roi: '2–10% CVR lift on PDPs post-deployment.', _competitors: ['Yotpo', _'Judge.me', _'Loox', _'Stamped.io'], _customers: 10, _rating: 4.8, _reviews: 12, _// @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact}
];
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
