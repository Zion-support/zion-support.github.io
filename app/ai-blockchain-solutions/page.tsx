'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { Link } from 'lucide-react';

const AiBlockchainSolutionsPage: React.FC = () => {
  return (
    <GenericServicePage
      title="AI Blockchain Solutions"
      description="Decentralized AI solutions combining blockchain technology with artificial intelligence."
      icon={Link}
      features={["Decentralized AI","Smart Contracts","Token Economics","Data Privacy","Consensus Mechanisms","Integration APIs"]}
      benefits={["Decentralized Control","Enhanced Privacy","Transparent Operations","Innovative Solutions"]}
      pricing="$1,799/month"
      category="Emerging"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default AiBlockchainSolutionsPage;
