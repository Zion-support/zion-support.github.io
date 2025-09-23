export const comprehensivePricingAnalysis2025 = [
  {
    serviceId: 'ai-autonomous-business-manager',
    serviceName: 'AI Autonomous Business Manager',
    basePrice: 2999,
    currency: 'USD',
    period: 'monthly',
    pricingTiers: [
      {
        tier: 'Starter',
        price: 1999,
        features: ['Basic automation', 'Core analytics', 'Email support'],
        recommended: false
      },
      {
        tier: 'Professional',
        price: 2999,
        features: ['Full automation', 'Advanced analytics', 'Priority support', 'Custom integrations'],
        recommended: true
      },
      {
        tier: 'Enterprise',
        price: 4999,
        features: ['Custom AI models', 'Dedicated support', 'White-label options', 'SLA guarantees'],
        recommended: false
      }
    ],
    marketAnalysis: {
      competitorPricing: {
        average: 3500,
        range: [2000, 8000]
      },
      valueProposition: '500% ROI with 40% operational cost reduction',
      marketPosition: 'Premium autonomous business solution'
    }
  },
  {
    serviceId: 'quantum-neural-network-platform',
    serviceName: 'Quantum Neural Network Platform',
    basePrice: 5999,
    currency: 'USD',
    period: 'monthly',
    pricingTiers: [
      {
        tier: 'Research',
        price: 3999,
        features: ['Basic quantum access', 'Standard algorithms', 'Community support'],
        recommended: false
      },
      {
        tier: 'Professional',
        price: 5999,
        features: ['Full quantum access', 'Custom algorithms', 'Priority support', 'Training included'],
        recommended: true
      },
      {
        tier: 'Enterprise',
        price: 9999,
        features: ['Dedicated quantum resources', 'Custom development', '24/7 support', 'SLA guarantees'],
        recommended: false
      }
    ],
    marketAnalysis: {
      competitorPricing: {
        average: 7500,
        range: [5000, 15000]
      },
      valueProposition: '1000x faster processing than classical systems',
      marketPosition: 'Leading quantum AI platform'
    }
  }
];

export const getPricingAnalysis = (serviceId) => {
  return comprehensivePricingAnalysis2025.find(service => service.serviceId === serviceId);
};

export const getAveragePricing = () => {
  const total = comprehensivePricingAnalysis2025.reduce((sum, service) => sum + service.basePrice, 0);
  return total / comprehensivePricingAnalysis2025.length;
};