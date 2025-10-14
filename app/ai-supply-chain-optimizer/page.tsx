import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Target, Globe, Clock, CheckCircle } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      icon: <Truck className="w-6 h-6 text-green-400" />,
      title: 'Route Optimization',
      description: 'AI-powered route planning to minimize delivery time and fuel costs'
    },
    {
      icon: <Package className="w-6 h-6 text-blue-400" />,
      title: 'Inventory Management',
      description: 'Smart inventory tracking with predictive restocking and demand forecasting'
    }
}