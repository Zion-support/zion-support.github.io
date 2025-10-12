'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Package } from 'lucide-react';

const ItAssetManagementPage: React.FC = () => {
  return (
    <GenericServicePage
      title="IT Asset Management"
      description="Comprehensive IT asset lifecycle management for better control and cost optimization."
      icon={Package}
      features={["Asset Tracking","Lifecycle Management","Cost Optimization","Compliance Management","Reporting","Automation"]}
      benefits={["Better Control","Cost Savings","Compliance","Improved Efficiency"]}
      pricing="$599/month"
      category="IT"
      color="from-slate-500 to-gray-600"
    />
  );
};

export default ItAssetManagementPage;
