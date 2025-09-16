import React from 'react';
<<<<<<< HEAD
=======
import Layout from '../../components/Layout';';
import { ShoppingCart, Users, BarChart, Smartphone, Package, CheckCircle, ArrowRight } from 'lucide-react';
import Layout from '../../components/Layout';
import { ShoppingCart, Users, BarChart3, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
const features = [;
  {}
    icon: ShoppingCart,
    title: 'E-commerce Platforms,',
    description: 'Custom e-commerce solutions that provide seamless shopping experiences across all devices.'';
  },
  {}
    icon: Users,
    title: 'Customer Analytics,',
    description: 'Advanced customer behavior analytics to optimize marketing and improve conversion rates.'';
  },
  {}
    icon: BarChart,
    title: 'Inventory Management,',
    description: 'Real-time inventory tracking and management systems to optimize stock levels and reduce costs.'';
  },
  {}
    icon: Smartphone,
    title: 'Mobile Commerce,',
    description: 'Mobile-first shopping experiences with native apps and progressive web applications.'';
  },
  {}
    icon: Package,
    title: 'Supply Chain Optimization,',
    description: 'End-to-end supply chain visibility and optimization using AI and machine learning.'';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { 
  ShoppingCart, 
  Users, 
  BarChart3, 
  Smartphone, 
  CheckCircle, 
  ArrowRight 
} from 'lucide-react';
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const retail: React.FC = () => {
  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">retail</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
  );
};

export default retail;