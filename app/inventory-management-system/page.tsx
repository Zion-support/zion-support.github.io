import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Package, 
  ArrowRight, 
  Star, 
  CheckCircle,
  Sparkles,
  Monitor,
  Database,
  Globe,
  Smartphone,
  Target,
  Brain,
  Cpu,
  Clock,
  Shield,
  Zap
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const InventoryManagementSystemPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Inventory Management System - Zion Tech Group | Smart Inventory Solutions"
        description="AI-powered inventory management system with demand forecasting, automated reorder points, and waste reduction optimization."
        keywords="inventory management, stock management, demand forecasting, inventory optimization, supply chain"
        canonical="https://ziontechgroup.com/inventory-management-system"
      />

      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <ResponsiveContainer className="text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="holographic-text text-4xl md:text-6xl lg:text-7xl font-bold">
              Inventory Management System
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            AI-powered inventory management system with demand forecasting, 
            automated reorder points, and waste reduction optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-teal-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
            >
              Get Started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default InventoryManagementSystemPage;