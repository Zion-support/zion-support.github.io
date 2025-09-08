import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Crown, Building2, Users, Zap, Shield, Globe } from 'lucide-react';

export function EnterprisePricingTable() {
  const plans = [
    {
      name: 'Starter',
      price: '$999',
      period: '/month',
      description: 'Perfect for small to medium enterprises',
      features: [
        'Up to 100 users',
        'Basic support',
        'Core features',
        'Email support',
        'Standard SLA'
      ],
      icon: <Building2 className="h-6 w-6" />,
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Professional',
      price: '$2,499',
      period: '/month',
      description: 'Ideal for growing enterprises',
      features: [
        'Up to 500 users',
        'Priority support',
        'Advanced features',
        'Phone & email support',
        'Enhanced SLA',
        'Custom integrations'
      ],
      icon: <Users className="h-6 w-6" />,
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$4,999',
      period: '/month',
      description: 'For large-scale enterprises',
      features: [
        'Unlimited users',
        '24/7 dedicated support',
        'All features',
        'Dedicated account manager',
        'Premium SLA',
        'Custom development',
        'On-premise option',
        'Advanced security'
      ],
      icon: <Crown className="h-6 w-6" />,
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const addOns = [
    {
      name: 'Advanced Security',
      price: '$299',
      period: '/month',
      description: 'Enhanced security features and compliance',
      icon: <Shield className="h-5 w-5" />
    },
    {
      name: 'Global CDN',
      price: '$199',
      period: '/month',
      description: 'Worldwide content delivery network',
      icon: <Globe className="h-5 w-5" />
    },
    {
      name: 'Performance Monitoring',
      price: '$149',
      period: '/month',
      description: 'Real-time performance analytics',
      icon: <Zap className="h-5 w-5" />
    }
  ];

  return (
    <div className="space-y-8">
      {/* Main Plans */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={`relative ${plan.popular ? 'border-zion-cyan ring-2 ring-zion-cyan/20' : ''}`}>
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-zion-cyan text-zion-blue-dark px-3 py-1">
                  <Star className="h-3 w-3 mr-1" />
                  Most Popular
                </Badge>
              </div>
            )}
            
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-zion-blue-dark rounded-full">
                  {plan.icon}
                </div>
              </div>
              <CardTitle className="text-2xl">{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-zion-cyan">{plan.price}</span>
                <span className="text-zion-slate-light">{plan.period}</span>
              </div>
            </CardHeader>
            
            <CardContent>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-zion-slate-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full ${plan.popular ? 'bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/80' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.cta}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Add-ons */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Additional Services & Add-ons</CardTitle>
          <CardDescription className="text-center">
            Enhance your enterprise plan with these additional services
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addOns.map((addon, index) => (
              <div key={index} className="p-4 border border-zion-blue-light rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-zion-blue-dark rounded-lg">
                    {addon.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{addon.name}</h4>
                    <p className="text-sm text-zion-slate-light">{addon.description}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-zion-cyan font-semibold">
                    {addon.price}{addon.period}
                  </div>
                  <Button size="sm" variant="outline">
                    Add Service
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Enterprise Features */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Enterprise Features</CardTitle>
          <CardDescription className="text-center">
            All enterprise plans include these premium features
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Custom integrations',
              'Advanced analytics',
              'Multi-region deployment',
              'Enterprise SSO',
              'Custom branding',
              'Advanced reporting',
              'API access',
              'White-label options'
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-2 p-3 bg-zion-blue-dark rounded-lg">
                <Check className="h-4 w-4 text-green-400 flex-shrink-0" />
                <span className="text-zion-slate-light text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}