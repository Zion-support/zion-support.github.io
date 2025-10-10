'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PricingPage: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$1,500',
      period: '/month',
      description: 'Perfect for small businesses getting started with AI',
      features: [
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$3,999',
      period: '/month',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations with complex requirements',
      features: [
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

    </div>
  );
};

export default PricingPage;