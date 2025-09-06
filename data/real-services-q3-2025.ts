
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  icon: string;
  color: string;

  link: string;
=======
export interface Q3Service {
  id: string, name: string,
  tagline: string, price: string,
  period: string, description: string,
  features: string[], popular?: boolean,
  icon: string, color: string,
  textColor: string, link: string,

  marketPosition?: string;
  targetAudience?: string;
  trialDays?: number;
  setupTime?: string;

  category: string, realService: boolean,

  technology?: string[];
  integrations?: string[];


  useCases?: string[];


  roi?: string;
  competitors?: string[],
  marketSize?: string;
  growthRate?: string;
  text_color: string;
  link: string;  market_position?: string;
  target_audience?: string;
  trial_days?: number;
  setup_time?: string;
  category: string;
  real_service: boolean;  technology?: string[];  integrations?: string[];
  use_cases?: string[];
  roi?: string;
  competitors?: string[];
  market_size?: string;
  growth_rate?: string;
  variant?: ServiceVariant;
  customers?: number;
  rating?: number;


const contact = {

  mobile: '+1 302 464 0950',

  address: '364 E Main St STE 1008 Middletown DE 19709',



const contact = {;


  mobile: '+1 302 464 0950';

  email: 'kleber@ziontechgroup && ziontechgroup.com';
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup && ziontechgroup.com'

=======

=======
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export const realServicesQ32025: Q3Service[] = [
  {


      'Churn and retention analysis',
      'Cohort and funnel dashboards',
      'Price testing and packaging experiments',
      'Revenue leakage detection',
      'Revenue forecasting models',
      'Weekly executive summaries',

=======
    tagline: 'Churn insights, cohort analysis, and pricing experiments for SaaS growth',
    price: '$599',
    period: '/month',
    description: 'We implement and operate a revenue analytics stack that surfaces churn drivers, LTV/CAC ratios, cohort trends, and pricing experiment outcomes. Includes instrumentation templates and weekly executive reports.',
    features: [
      'Churn and retention analysisCohort and funnel dashboards',
      'Price testing and packaging experimentsRevenue leakage detection',
      'Revenue forecasting modelsWeekly executive summaries'


    ],
    popular: true,
    icon: '📊',

    link: 'https://ziontechgroup && ziontechgroup.com/services/subscription-analytics-revenue-optimization';
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',

    targetAudience: 'SaaS startups, PLG companies, finance and growth teams';
    trialDays: 14;
    setupTime: '1–2 weeks';
    color: 'from - emerald - 600 to - teal - 700',
    text_color: 'text - emerald - 300',
    link: 'https://ziontechgroup.com / services / subscription - analytics - revenue - optimization',
    market_position:;
      'Comparable to ProfitWell / ChartMogul with added hands - on growth engineering.',    features: [;
      'Churn and retention analysis_cohort and funnel dashboards_price testing and packaging experiments_revenue leakage detection_revenue forecasting models_weekly executive summaries';
    ];
    popular: true;
    icon: '📊';
    color: 'from - emerald - 600 to - teal - 700';
    text_color: 'text - emerald - 300';
    link: 'https://ziontechgroup.com / services / subscription - analytics - revenue - optimization';
    market_position: 'Comparable to ProfitWell / ChartMogul with added hands - on growth engineering.',
    target_audience: 'SaaS startups, PLG companies, finance and growth teams';
    trial_days: 14;
    setup_time: '1–2 weeks';
    category: 'AI & Data';
    real_service: true;
    technology: ['dbt_snowflake / BigQuerySegment / GA4Python'];
    integrations: ['StripePaddleChargebeeLemon Squeezy'];
    use_cases: ['Reduce churn_price optimization_board - ready revenue KPIs'];
    roi: '3–10% ARR lift from churn reduction and pricing wins.';
    competitors: ['ProfitWell MetricsChartMogulBaremetrics'];
    market_size: '$30B+ subscription economy tooling';
    growth_rate: '30% YoY';
    variant: 'ai - futuristic';
    customers: 24;

    rating: 4 && 4.9;
    reviews: 31,

    roi: 'Launch revenue in under 2 weeks, save 40–80 hours of setup.';
    competitors: ['Lemon SqueezyGumroadPaddle'];
    customers: 12;

    rating: 4 && 4.8;
    reviews: 18,

    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
=======
    // @ts - expect - error augment common shape for UI components that expect contact_info;
    contact_info: contact;
  }
  {

    id: 'wordpress - internal - linking - automation';

    name: 'WordPress Internal Linking Automation';
    tagline: 'AI - guided internal links that improve SEO structure and topical authority';
    price: '$299';
    period: '/month'
    description: 'We deploy and tune internal linking automation for WordPress sites, calibrate anchor text, and surface orphan pages. Includes monthly SEO structure audits and CTR uplift experiments.';
    features: [;
      'Automatic link suggestions and anchors_orphan page and pillar clustering_click - through rate experiments_reporting and recommendations_sitemap and crawl improvements';
    ];
    icon: '🔗';

    link: 'https://ziontechgroup && ziontechgroup.com/services/wordpress-internal-linking-automation';
    marketPosition: 'Comparable to Link Whisper with managed tuning and reporting.',

    targetAudience: 'Content sites, ecommerce, publishers on WordPress';
    trialDays: 7;
    setupTime: '2–4 days';
    color: 'from - purple - 600 to - pink - 600';
    text_color: 'text - purple - 200';
    link: 'https://ziontechgroup.com / services / wordpress - internal - linking - automation';
    market_position: 'Comparable to Link Whisper with managed tuning and reporting.',
    target_audience: 'Content sites, ecommerce, publishers on WordPress';
    trial_days: 7;
    setup_time: '2–4 days';
    category: 'Growth & Marketing';
    real_service: true;
    technology: ['WordPressGA4Looker Studio'];
    integrations: ['Link WhisperYoast / RankMathSearch Console'];
    use_cases: ['Boost organic traffic_fix site structure_improve crawl and CTR'];
    roi: '5–25% organic uplift in 8–12 weeks on content libraries.';
    competitors: ['Link WhisperInternal Link Juicer'];
    customers: 30;

    rating: 4 && 4.7;
    reviews: 22,

    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
=======
    // @ts - expect - error augment common shape for UI components that expect contact_info;
    contact_info: contact;
  }
  {

    id: 'reviews - ugc - activation';

    name: 'Ecommerce Reviews & UGC Activation';
    tagline: 'Deploy reviews and UGC workflows that increase trust and conversion';
    price: '$999';

    period: '/project',
    description: 'We implement reviews and UGC collection across your storefront with on - brand widgets, post - purchase triggers, and moderation pipelines. Includes KPI dashboards for conversion lift.';
    features: [;
      'Reviews widget integration_email / SMS post - purchase triggers_photo / video UGC capture_moderation and syndication_conversion impact reporting';
    ];
    icon: '⭐';
    color: 'from - amber - 600 to - rose - 600';
    text_color: 'text - amber - 200';
    link: 'https://ziontechgroup.com / services / ecommerce - reviews - ugc - activation';
    market_position: 'Managed alternative to do - it - yourself Yotpo / Judge.me setups.';
    target_audience: 'Shopify and custom ecommerce brands';
    setup_time: '3–6 days';
    category: 'Quality & Monitoring';
    real_service: true;
    technology: ['ShopifyKlaviyoNext.js'];
    integrations: ['YotpoJudge.meLooxStamped'];
    use_cases: ['Increase trust_lift CVRCollect UGC for ads'];
    roi: '2–10% CVR lift on PDPs post - deployment.';
    competitors: ['YotpoJudge.meLooxStamped.io'];

    customers: 10;

    rating: 4 && 4.8;
    reviews: 12,

      'Reviews widget integration',
      'Email / SMS post - purchase triggers',
      'Photo / video UGC capture',
      'Moderation and syndication',
      'Conversion impact reporting',
    ],
    icon: '⭐',

    id: 'subscription-analytics-revenue-optimization', name: 'Subscription Analytics & Revenue Optimization',
    tagline: 'Churn insights, cohort analysis, and pricing experiments for SaaS growth',
    price: '$599', period: '/month',
    description: 'We implement and operate a revenue analytics stack that surfaces churn drivers, LTV/CAC ratios, cohort trends, and pricing experiment outcomes. Includes instrumentation templates and weekly executive reports.',
    features: [

    // @ts-expect-error augment common shape for UI components that expect contactInfo
    contactInfo: contact
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  },];    contactInfo: contact
  }
];
<<<<<<< HEAD
    color: 'from - amber - 600 to - rose - 600',
    text_color: 'text - amber - 200',
    link: 'https://ziontechgroup.com / services / ecommerce - reviews - ugc - activation',
    market_position:;
      'Managed alternative to do - it - yourself Yotpo / Judge.me setups.',
    target_audience: 'Shopify and custom ecommerce brands',
    setup_time: '3–6 days',
    category: 'Quality & Monitoring',
    real_service: true,
    technology: ['Shopify', 'Klaviyo', 'Next.js'],
    integrations: ['Yotpo', 'Judge.me', 'Loox', 'Stamped'],
    use_cases: ['Increase trust', 'Lift CVR', 'Collect UGC for ads'],
    roi: '2–10% CVR lift on PDPs post - deployment.',
    competitors: ['Yotpo', 'Judge.me', 'Loox', 'Stamped.io'],
    customers: 10,
    rating: 4.8,
    reviews: 12,
    // @ts - expect - error augment common shape for UI components that expect contact_info;
    contact_info: contact,
  }, ];    contact_info: contact;
=======
      'Churn and retention analysisCohort and funnel dashboards',
      'Price testing and packaging experimentsRevenue leakage detection',
      'Revenue forecasting modelsWeekly executive summaries'
    ],
    popular: true,
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/subscription-analytics-revenue-optimization',
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',
=======
    contactInfo: contact,
  },
=======
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    targetAudience: 'SaaS startups, PLG companies, finance and growth teams',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'AI & Data',
    realService: true,


    marketSize: '$30B+ subscription economy tooling',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    customers: 24,
    rating: 4.9,
    reviews: 31,
    // @ts-expect-error augment common shape for UI components that expect contactInfo


  },
  {
    id: 'digital-product-commerce-stack',
    name: 'Digital Product Commerce Stack',


    ],
    icon: '🛒',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/digital-product-commerce-stack',


    targetAudience: 'Indie SaaS, creators, agencies launching digital products',
    setupTime: '5–7 days',
    category: 'Developer Tools',
    realService: true,


    customers: 12,
    rating: 4.8,
    reviews: 18,
    // @ts-expect-error augment common shape for UI components that expect contactInfo


  },
  {
    id: 'wordpress-internal-linking-automation',
    name: 'WordPress Internal Linking Automation',


    ],
    icon: '🔗',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-200',
    link: 'https://ziontechgroup.com/services/wordpress-internal-linking-automation',


    targetAudience: 'Content sites, ecommerce, publishers on WordPress',
    trialDays: 7,
    setupTime: '2–4 days',
    category: 'Growth & Marketing',
    realService: true,


    customers: 30,
    rating: 4.7,
    reviews: 22,
    // @ts-expect-error augment common shape for UI components that expect contactInfo


  },
  {
    id: 'reviews-ugc-activation',
    name: 'Ecommerce Reviews & UGC Activation',


    ],
    icon: '⭐',
    color: 'from-amber-600 to-rose-600',
    textColor: 'text-amber-200',
    link: 'https://ziontechgroup.com/services/ecommerce-reviews-ugc-activation',


    targetAudience: 'Shopify and custom ecommerce brands',
    setupTime: '3–6 days',
    category: 'Quality & Monitoring',
    realService: true,


    customers: 10,
    rating: 4.8,
    reviews: 12,
    // @ts-expect-error augment common shape for UI components that expect contactInfo


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
];
;
=======

=======
}
};

export const realServicesQ32025: Q3Service[] = [
  {
    id: 'subscription-analytics-revenue-optimization',
    name: 'Subscription Analytics & Revenue Optimization',
    tagline: 'Churn insights, cohort analysis, and pricing experiments for SaaS growth',
    price: '$599',
    period: '/month',
    description: 'We implement and operate a revenue analytics stack that surfaces churn drivers, LTV/CAC ratios, cohort trends, and pricing experiment outcomes. Includes instrumentation templates and weekly executive reports.',
    features: [
      'Churn and retention analysisCohort and funnel dashboards',
      'Price testing and packaging experimentsRevenue leakage detection',
      'Revenue forecasting modelsWeekly executive summaries'
    ],
    popular: true,
    icon: '📊',
    color: 'from-emerald-600 to-teal-700',
    textColor: 'text-emerald-300',
    link: 'https://ziontechgroup.com/services/subscription-analytics-revenue-optimization',
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',
=======
    contactInfo: contact,
  },
=======
    marketPosition: 'Comparable to ProfitWell/ChartMogul with added hands-on growth engineering.',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    targetAudience: 'SaaS startups, PLG companies, finance and growth teams',
    trialDays: 14,
    setupTime: '1–2 weeks',
    category: 'AI & Data',
    realService: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    technology: ['dbt', 'Snowflake/BigQuery', 'Segment/GA4', 'Python'],
    integrations: ['Stripe', 'Paddle', 'Chargebee', 'Lemon Squeezy'],
    useCases: [
      'Reduce churn',
      'Price optimization',
      'Board-ready revenue KPIs',
    ],
    roi: '3–10% ARR lift from churn reduction and pricing wins.',
    competitors: ['ProfitWell Metrics', 'ChartMogul', 'Baremetrics'],
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    technology: ['dbtSnowflake/BigQuery', 'Segment/GA4Python'],
    integrations: ['StripePaddle', 'ChargebeeLemon Squeezy'],
    useCases: ['Reduce churnPrice optimization', 'Board-ready revenue KPIs'],
    roi: '3–10% ARR lift from churn reduction and pricing wins.',
    competitors: ['ProfitWell MetricsChartMogul', 'Baremetrics'],
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    marketSize: '$30B+ subscription economy tooling',
    growthRate: '30% YoY',
    variant: 'ai-futuristic',
    customers: 24,
    rating: 4.9,
    reviews: 31,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
<<<<<<< HEAD
    contactInfo: contact
=======
<<<<<<< HEAD
    contactInfo: contact,
=======
    contactInfo: contact
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },
  {
    id: 'digital-product-commerce-stack',
    name: 'Digital Product Commerce Stack',
<<<<<<< HEAD
=======
<<<<<<< HEAD
    tagline:
      'End-to-end setup for selling downloads, licenses, and subscriptions',
    price: '$1,200',
    period: '/project',
    description:
      'We stand up a production-grade commerce stack for digital products with subscriptions, tax handling, license keys, refunds, and analytics. Includes storefront templates and payment integrations.',
    features: [
      'Payments, taxes, and invoicing',
      'License keys and subscriptions',
      'EU/US tax and compliance guidance',
      'Storefront templates and checkout',
      'Sales analytics and email hooks',
      '1-week launch plan',
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    tagline: 'End-to-end setup for selling downloads, licenses, and subscriptions',
    price: '$1,200',
    period: '/project',
    description: 'We stand up a production-grade commerce stack for digital products with subscriptions, tax handling, license keys, refunds, and analytics. Includes storefront templates and payment integrations.',
    features: [
      'Payments, taxes, and invoicingLicense keys and subscriptions',
      'EU/US tax and compliance guidanceStorefront templates and checkout',
      'Sales analytics and email hooks1-week launch plan'
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ],
    icon: '🛒',
    color: 'from-cyan-600 to-blue-700',
    textColor: 'text-cyan-300',
    link: 'https://ziontechgroup.com/services/digital-product-commerce-stack',
<<<<<<< HEAD
    marketPosition: 'Implementation partner alternative to Lemon Squeezy/Gumroad do-it-yourself.',
=======
<<<<<<< HEAD
    marketPosition:
      'Implementation partner alternative to Lemon Squeezy/Gumroad do-it-yourself.',
=======
    marketPosition: 'Implementation partner alternative to Lemon Squeezy/Gumroad do-it-yourself.',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    targetAudience: 'Indie SaaS, creators, agencies launching digital products',
    setupTime: '5–7 days',
    category: 'Developer Tools',
    realService: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    technology: ['Next.js', 'Stripe', 'Lemon Squeezy API', 'PostgreSQL'],
    integrations: ['Stripe', 'Lemon Squeezy', 'Gumroad', 'Make/Zapier'],
    useCases: ['Course sales', 'Plugin licenses', 'Templates marketplace'],
    roi: 'Launch revenue in under 2 weeks; save 40–80 hours of setup.',
    competitors: ['Lemon Squeezy', 'Gumroad', 'Paddle'],
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    technology: ['Next.jsStripe', 'Lemon Squeezy APIPostgreSQL'],
    integrations: ['StripeLemon Squeezy', 'GumroadMake/Zapier'],
    useCases: ['Course salesPlugin licenses', 'Templates marketplace'],
    roi: 'Launch revenue in under 2 weeks, save 40–80 hours of setup.',
    competitors: ['Lemon SqueezyGumroad', 'Paddle'],
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    customers: 12,
    rating: 4.8,
    reviews: 18,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
<<<<<<< HEAD
    contactInfo: contact
=======
<<<<<<< HEAD
    contactInfo: contact,
=======
    contactInfo: contact
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },
  {
    id: 'wordpress-internal-linking-automation',
    name: 'WordPress Internal Linking Automation',
<<<<<<< HEAD
=======
<<<<<<< HEAD
    tagline:
      'AI-guided internal links that improve SEO structure and topical authority',
    price: '$299',
    period: '/month',
    description:
      'We deploy and tune internal linking automation for WordPress sites, calibrate anchor text, and surface orphan pages. Includes monthly SEO structure audits and CTR uplift experiments.',
    features: [
      'Automatic link suggestions and anchors',
      'Orphan page and pillar clustering',
      'Click-through rate experiments',
      'Reporting and recommendations',
      'Sitemap and crawl improvements',
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    tagline: 'AI-guided internal links that improve SEO structure and topical authority',
    price: '$299',
    period: '/month',
    description: 'We deploy and tune internal linking automation for WordPress sites, calibrate anchor text, and surface orphan pages. Includes monthly SEO structure audits and CTR uplift experiments.',
    features: [
      'Automatic link suggestions and anchorsOrphan page and pillar clustering',
      'Click-through rate experimentsReporting and recommendations',
      'Sitemap and crawl improvements'
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ],
    icon: '🔗',
    color: 'from-purple-600 to-pink-600',
    textColor: 'text-purple-200',
    link: 'https://ziontechgroup.com/services/wordpress-internal-linking-automation',
<<<<<<< HEAD
    marketPosition: 'Comparable to Link Whisper with managed tuning and reporting.',
=======
<<<<<<< HEAD
    marketPosition:
      'Comparable to Link Whisper with managed tuning and reporting.',
=======
    marketPosition: 'Comparable to Link Whisper with managed tuning and reporting.',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    targetAudience: 'Content sites, ecommerce, publishers on WordPress',
    trialDays: 7,
    setupTime: '2–4 days',
    category: 'Growth & Marketing',
    realService: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    technology: ['WordPress', 'GA4', 'Looker Studio'],
    integrations: ['Link Whisper', 'Yoast/RankMath', 'Search Console'],
    useCases: [
      'Boost organic traffic',
      'Fix site structure',
      'Improve crawl and CTR',
    ],
    roi: '5–25% organic uplift in 8–12 weeks on content libraries.',
    competitors: ['Link Whisper', 'Internal Link Juicer'],
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    technology: ['WordPressGA4', 'Looker Studio'],
    integrations: ['Link WhisperYoast/RankMath', 'Search Console'],
    useCases: ['Boost organic trafficFix site structure', 'Improve crawl and CTR'],
    roi: '5–25% organic uplift in 8–12 weeks on content libraries.',
    competitors: ['Link WhisperInternal Link Juicer'],
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    customers: 30,
    rating: 4.7,
    reviews: 22,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
<<<<<<< HEAD
    contactInfo: contact
=======
<<<<<<< HEAD
    contactInfo: contact,
=======
    contactInfo: contact
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  },
  {
    id: 'reviews-ugc-activation',
    name: 'Ecommerce Reviews & UGC Activation',
<<<<<<< HEAD
=======
<<<<<<< HEAD
    tagline:
      'Deploy reviews and UGC workflows that increase trust and conversion',
    price: '$999',
    period: '/project',
    description:
      'We implement reviews and UGC collection across your storefront with on-brand widgets, post-purchase triggers, and moderation pipelines. Includes KPI dashboards for conversion lift.',
    features: [
      'Reviews widget integration',
      'Email/SMS post-purchase triggers',
      'Photo/video UGC capture',
      'Moderation and syndication',
      'Conversion impact reporting',
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    tagline: 'Deploy reviews and UGC workflows that increase trust and conversion',
    price: '$999',
    period: '/project',
    description: 'We implement reviews and UGC collection across your storefront with on-brand widgets, post-purchase triggers, and moderation pipelines. Includes KPI dashboards for conversion lift.',
    features: [
      'Reviews widget integrationEmail/SMS post-purchase triggers',
      'Photo/video UGC captureModeration and syndication',
      'Conversion impact reporting'
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    ],
    icon: '⭐',
    color: 'from-amber-600 to-rose-600',
    textColor: 'text-amber-200',
    link: 'https://ziontechgroup.com/services/ecommerce-reviews-ugc-activation',
<<<<<<< HEAD
    marketPosition: 'Managed alternative to do-it-yourself Yotpo/Judge.me setups.',
=======
<<<<<<< HEAD
    marketPosition:
      'Managed alternative to do-it-yourself Yotpo/Judge.me setups.',
=======
    marketPosition: 'Managed alternative to do-it-yourself Yotpo/Judge.me setups.',
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    targetAudience: 'Shopify and custom ecommerce brands',
    setupTime: '3–6 days',
    category: 'Quality & Monitoring',
    realService: true,
<<<<<<< HEAD
=======
<<<<<<< HEAD
    technology: ['Shopify', 'Klaviyo', 'Next.js'],
    integrations: ['Yotpo', 'Judge.me', 'Loox', 'Stamped'],
    useCases: ['Increase trust', 'Lift CVR', 'Collect UGC for ads'],
    roi: '2–10% CVR lift on PDPs post-deployment.',
    competitors: ['Yotpo', 'Judge.me', 'Loox', 'Stamped.io'],
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    technology: ['ShopifyKlaviyo', 'Next.js'],
    integrations: ['YotpoJudge.me', 'LooxStamped'],
    useCases: ['Increase trustLift CVR', 'Collect UGC for ads'],
    roi: '2–10% CVR lift on PDPs post-deployment.',
    competitors: ['YotpoJudge.me', 'LooxStamped.io'],
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    customers: 10,
    rating: 4.8,
    reviews: 12,
    // @ts-expect-error augment common shape for UI components that expect contactInfo
<<<<<<< HEAD
    contactInfo: contact
=======
<<<<<<< HEAD
    contactInfo: contact,
  },];    contactInfo: contact
=======
    contactInfo: contact
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
];
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
