import React from 'react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';


export default function AiSupplyChainOptimizerPage() {
  return (
    <>
          {
            title: 'Predictive Demand Forecasting',
            description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
            icon: <TrendingUp className="w-5h-5ml-2" />,
            benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
          },
          {
            title: 'Smart Route Optimization',
            description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
            icon: <Truck className="w-5h-5ml-2" />,
            benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
          },
          {
            title: 'Automated Inventory Management',
            description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
            icon: <Package className="w-5h-5ml-2" />,
            benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
          },
          {
            title: 'Risk Management & Compliance',
            description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
            icon: <Shield className="w-5h-5ml-2" />,
            benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
          }
        ];
        const pricingPlans = [
          {
            name: 'Starter',
            price: '$199',
            period: '/month',
            description: 'Perfect for small to medium businesses',
            features: [
              'Up to 5 warehouses',
              'Basic demand forecasting',
              'Route optimization',
              'Email support',
              'Standard integrations'
            ],
            popular: false;
          },
          {
            name: 'Professional',
            price: '$599',
            period: '/month',
            description: 'Advanced features for growing companies',
            features: [
              'Up to 25 warehouses',
              'Advanced AI forecasting',
              'Multi-modal optimization',
              'Priority support',
              'Custom integrations',
              'Real-time analytics'
            ],
            popular: true;
          },
          {
            name: 'Enterprise',
            price: '$1,999',
            period: '/month',
            description: 'Complete solution for large organizations',
            features: [
              'Unlimited warehouses',
              'Custom AI models',
              'White-label options',
              'Dedicated account manager',
              'API access',
              'Advanced security'
            ],
            popular: false;
          }
        ];
        const testimonials = [
          {
            name: 'Robert Chen',
            role: 'Supply Chain Director',
            company: 'Global Logistics Inc.',
            content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
            rating: 5;
          },
          {
            name: 'Maria Rodriguez',
            role: 'Operations Manager',
            company: 'RetailMax Corp',
            content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
            rating: 5;
          },
          {
            name: 'James Wilson',
            role: 'CEO',
            company: 'Manufacturing Solutions',
            content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
            rating: 5;
          }
        ];
        const stats = [
          { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
          { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-5h-5ml-2" /&gt; },</Target></Target>
          { number: '500+', label: 'Companies Using', icon: <Globe className="w-5h-5ml-2" /&gt; },</Globe></Globe>
          { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-5h-5ml-2" /&gt; }</Clock></Clock>
        ];
        return (
      
              <>
            <title>5G Data Analytics - Zion Tech Group</title>
      
                      <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
      
            </>
        );
      
      
    </>
  );
}