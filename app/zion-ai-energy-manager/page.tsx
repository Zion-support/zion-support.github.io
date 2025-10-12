'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Zap } from 'lucide-react';

const ZionAiEnergyManagerPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion AI Energy Manager"
      description="Intelligent energy management platform with optimization and cost reduction features."
      icon={Zap}
      features={["Energy Monitoring","Usage Optimization","Cost Analysis","Renewable Integration","Predictive Analytics","Automated Controls"]}
      benefits={["Energy Savings","Cost Reduction","Better Efficiency","Environmental Impact"]}
      pricing="$229/month"
      category="MicroSAAS"
      color="from-yellow-500 to-orange-600"
    />
  );
};

export default ZionAiEnergyManagerPage;
