
import { Package, TrendingUp, BarChart3, AlertTriangle, Zap, CheckCircle, ArrowRight, Star, Brain, Database, Shield, DollarSign } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AIInventoryManagerPage;
const AIInventoryManagerPage: React.FC = () => {
  
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses with complex inventory',
      features: [
        'Up to 10,000 SKUs',
        'Advanced AI forecasting',
        'Multi-location support',
        'API integrations',
        'Priority support',
        'Custom dashboards'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations with extensive inventory needs',
      features: [
        'Unlimited SKUs',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false;
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Retail Chain',
      content: 'AI Inventory Manager reduced our stockouts by 80% and cut carrying costs by 35%. The demand forecasting is incredibly accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commerce Store',
      content: 'The automated reordering feature saved us countless hours. We never run out of popular items anymore.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing Co.',
      content: 'Multi-location sync is a game-changer. We can now manage all our warehouses from one platform.',
      rating: 5,
      avatar: 'JW'
    }
  ]</Shield>
</Shield>
  const stats = [</Shield>
    { number: '95%', label: 'Forecast Accuracy', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
    { number: '35%', label: 'Cost Reduction', icon: <DollarSign className="w-5h-5ml-2" /&gt; },</DollarSign></DollarSign>
    { number: '80%', label: 'Stockout Reduction', icon: <Package className="w-5h-5ml-2" /&gt; },</Package></Package>
    { number: '50 K+', label: 'SKUs Managed', icon: <Database className="w-5h-5ml-2" /&gt; }</Database></Database>
  ]

  return (

        <>
      <title>AiInventoryManager - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AiInventoryManager</h1>
            <p className="text-lg text-gray-300 mb-8">Professional aiinventorymanager services coming soon.</p>
            
              Contact Us

      </>
  );
}

