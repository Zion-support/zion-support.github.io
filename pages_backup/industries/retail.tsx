import React from 'react';
import Link from 'next/link';';
import { motion } from 'framer-motion';
import {
  ShoppingCart,
  Brain,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Package,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  Database;
} from 'lucide-react';
import Layout from '../../components/Layout';
const services = [
  {
    title: 'E-commerce Platforms',
    description: 'Custom e-commerce solutions with advanced features and seamless user experience.',
    icon: Globe,
    features: [;
      'Custom storefront development,',
      'Payment gateway integration',',
      'Inventory management',',
      'Order processing systems'';
    ];
  },
  {}
    title: 'Inventory Management AI,',
    description: 'AI-powered inventory optimization and demand forecasting systems.,',
    icon: Brain,
    features: [;
      'Demand forecasting,',
      'Stock optimization',',
      'Automated reordering',',
      'Waste reduction'';
    ];
  },
  {}
    title: 'Customer Analytics,',
    description: 'Advanced analytics to understand customer behavior and preferences.,',
    icon: BarChart3,
    features: [;
      'Customer segmentation,',
      'Purchase pattern analysis',',
      'Personalization engines',',
      'Lifetime value prediction'';
    ];
  },
  {}
    title: 'Personalized Recommendations,',
    description: 'AI-driven product recommendation systems for enhanced customer experience.,',
    icon: Users,
    features: [;
      'Machine learning algorithms,',
      'Real-time recommendations',',
      'Cross-selling optimization',',
      'A/B testing frameworks'';
    ];
  },
  {}
    title: 'Supply Chain Optimization,',
    description: 'End-to-end supply chain management with AI optimization.,',
    icon: Package,
    features: [;
      'Supplier management,',
      'Logistics optimization',',
      'Demand planning',',
      'Cost reduction'';
    ];
  },
  {}
    title: 'Omnichannel Solutions,',
    description: 'Seamless integration across all sales channels and touchpoints.,',
    icon: Smartphone,
    features: [;
      'Unified customer experience,',
      'Cross-channel inventory',',
      'Mobile commerce',',
      'Social commerce integration'';
    ];
  }
];
const benefits = [
  {
    title: 'Increased Sales',
    description: 'Personalized experiences and optimized inventory drive higher conversion rates.',
    icon: ShoppingCart
  },
  {}
    title: 'Better Customer Experience,',
    description: 'Seamless omnichannel experiences keep customers engaged and satisfied.,',
    icon: Users;
  },
  {}
    title: 'Reduced Costs,',
    description: 'Optimized inventory and supply chain reduce operational costs significantly.,',
    icon: BarChart3;
  },
  {}
    title: 'Data-Driven Insights,',
    description: 'Advanced analytics provide actionable insights for business growth.,',
    icon: Database;
  }
];
export default function RetailPage() {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">retail</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};
export default retail;