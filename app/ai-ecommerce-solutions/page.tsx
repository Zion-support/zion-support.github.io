'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { ShoppingCart } from 'lucide-react';

const AiEcommerceSolutionsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI E-commerce Solutions"
      description="AI-powered e-commerce optimization including personalized recommendations and automated customer service."
      icon={ShoppingCart}
      features={["Personalized Recommendations","Price Optimization","Inventory Management","Customer Service Bots","Visual Search","Demand Forecasting"]}
      benefits={["Increase Sales by 35%","Better Customer Experience","Optimized Pricing","Reduced Cart Abandonment"]}
      pricing="$799/month"
      category="AI"
      color="from-pink-500 to-rose-600"
    />
  );
};

export default AiEcommerceSolutionsPage;
