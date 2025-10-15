export interface ContactInfo {
  company: string;
  domain: string;
  mobile: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    instagram?: string;
    youtube?: string;
    github?: string;
  };
  businessHours: {
    weekdays: string;
    weekends: string;
    timezone: string;
  };
  support: {
    email: string;
    phone: string;
    hours: string;
  };
}

export const contactInfo: ContactInfo = {
  company: 'Zion Tech Group',
  domain: 'https://ziontechgroup.com',
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: {
    street: '364 E Main St STE 1008',
    city: 'Middletown',
    state: 'DE',
    zip: '19709',
    country: 'United States'
  },
  social: {
    linkedin: 'https://linkedin.com/company/ziontechgroup',
    twitter: 'https://twitter.com/ziontechgroup',
    facebook: 'https://facebook.com/ziontechgroup',
    instagram: 'https://instagram.com/ziontechgroup',
    youtube: 'https://youtube.com/@ziontechgroup',
    github: 'https://github.com/ziontechgroup'
  },
  businessHours: {
    weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    weekends: 'Saturday: 10:00 AM - 4:00 PM EST',
    timezone: 'Eastern Time (ET)'
  },
  support: {
    email: 'support@ziontechgroup.com',
    phone: '+1 302 464 0950',
    hours: '24/7 Support Available'
  }
};

export const pricingTiers = {
  microSaaS: {
    basic: {
      name: 'Basic',
      price: 29,
      period: 'month',
      features: [
        'Up to 1,000 API calls/month',
        'Basic analytics',
        'Email support',
        'Standard integrations',
        'Basic customization'
      ],
      limitations: [
        'Limited API calls',
        'Basic support only',
        'No custom integrations'
      ]
    },
    pro: {
      name: 'Pro',
      price: 99,
      period: 'month',
      features: [
        'Up to 10,000 API calls/month',
        'Advanced analytics',
        'Priority support',
        'Custom integrations',
        'Advanced customization',
        'Team collaboration',
        'API access'
      ],
      limitations: [
        'Higher cost',
        'More complex setup'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 299,
      period: 'month',
      features: [
        'Unlimited API calls',
        'Full analytics suite',
        '24/7 dedicated support',
        'Custom development',
        'White-label options',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      limitations: [
        'Requires annual contract',
        'Custom pricing for large volumes'
      ]
    }
  },
  itServices: {
    basic: {
      name: 'Basic',
      price: 999,
      period: 'month',
      features: [
        'Basic infrastructure setup',
        'Standard monitoring',
        'Email support',
        'Monthly reports',
        'Basic security'
      ],
      limitations: [
        'Limited customization',
        'Basic support only'
      ]
    },
    pro: {
      name: 'Pro',
      price: 2999,
      period: 'month',
      features: [
        'Advanced infrastructure',
        '24/7 monitoring',
        'Priority support',
        'Weekly reports',
        'Advanced security',
        'Custom configurations',
        'Performance optimization'
      ],
      limitations: [
        'Higher cost',
        'More complex management'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 8999,
      period: 'month',
      features: [
        'Full infrastructure management',
        'Real-time monitoring',
        'Dedicated support team',
        'Daily reports',
        'Enterprise security',
        'Custom solutions',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      limitations: [
        'Requires annual contract',
        'Custom pricing for large scale'
      ]
    }
  },
  aiServices: {
    basic: {
      name: 'Basic',
      price: 2999,
      period: 'month',
      features: [
        'Basic AI consultation',
        'Standard models',
        'Email support',
        'Monthly reports',
        'Basic customization'
      ],
      limitations: [
        'Limited AI capabilities',
        'Basic support only'
      ]
    },
    pro: {
      name: 'Pro',
      price: 7999,
      period: 'month',
      features: [
        'Advanced AI solutions',
        'Custom model development',
        'Priority support',
        'Weekly reports',
        'Advanced customization',
        'Performance optimization',
        'Integration support'
      ],
      limitations: [
        'Higher cost',
        'More complex implementation'
      ]
    },
    enterprise: {
      name: 'Enterprise',
      price: 19999,
      period: 'month',
      features: [
        'Full AI strategy implementation',
        'Custom AI development',
        'Dedicated AI team',
        'Real-time monitoring',
        'Enterprise security',
        'White-label solutions',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      limitations: [
        'Requires annual contract',
        'Custom pricing for large scale'
      ]
    }
  }
};

export const marketPricing = {
  microSaaS: {
    average: 89,
    range: '29 - 299',
    currency: 'USD',
    period: 'month'
  },
  itServices: {
    average: 3999,
    range: '999 - 8999',
    currency: 'USD',
    period: 'month'
  },
  aiServices: {
    average: 9999,
    range: '2999 - 19999',
    currency: 'USD',
    period: 'month'
  }
};