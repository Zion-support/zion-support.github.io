<<<<<<< HEAD
import React from 'react';
=======
import { enhancedMicroSaasServices } from '../data/enhanced-micro-saas-services';


export default function ComprehensivePricingPage() {
  ];

  // Filter and sort services
  let filteredServices = allServices;

  // Category filter
  if (selectedCategory !== 'All') {
    filteredServices = filteredServices.filter(service => service.category === selectedCategory);
  }

  // Price range filter
  if (priceRange !== 'All') {
      return price >= min && (max === Infinity || price <= max);
    });
  }

  // Search filter
  if (searchQuery) {
    filteredServices = filteredServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort services
      case 'popularity':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      case 'category':
        return a.category.localeCompare(b.category);
      case 'roi':
        const aRoi = parseFloat(a.roi.match(/\d+/)?.[0] || '0');
        const bRoi = parseFloat(b.roi.match(/\d+/)?.[0] || '0');
        return bRoi - aRoi;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  // Pricing tiers
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Basic service access',
        'Email support',
        'Standard features',
        'Community forum access',
        'Basic analytics'
      ],
      icon: <Star className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-600',
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and teams',
      features: [
        'Advanced service access',
        'Priority support',
        'Advanced features',
        'API access',
        'Advanced analytics',
        'Custom integrations'
      ],
      icon: <Gem className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-600',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Full service access',
        '24/7 dedicated support',
        'All features',
        'Custom development',
        'Enterprise analytics',
        'White-label options',
        'SLA guarantees'
      ],
      icon: <Crown className="w-6 h-6" />,
      color: 'from-yellow-500 to-orange-600',
      popular: false
    }
  ];

  // Market statistics
  const marketStats = [
    {
      metric: '$15.2B',
      label: 'Total Market Size',
      description: 'Combined market value of all services',
      icon: <ChartBar className="w-6 h-6" />
    },
    {
      metric: '400+',
      label: 'Services Available',
      description: 'Comprehensive micro SaaS portfolio',
      icon: <Database className="w-6 h-6" />
    },
    {
      metric: '99.99%',
      label: 'Uptime Guarantee',
      description: 'Enterprise-grade reliability',
      icon: <Shield className="w-6 h-6" />
    },
    {
      metric: '2000%+',
      label: 'Average ROI',
      description: 'Proven business value',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const comprehensive-pricing: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">comprehensive-pricing</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default comprehensive-pricing;