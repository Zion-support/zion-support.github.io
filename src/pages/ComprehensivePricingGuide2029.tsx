import React from 'react';
import { motion } from 'framer-motion';
import { ComprehensivePricingGuide2029 } from '../components/ComprehensivePricingGuide2029';
import { EnhancedSEO } from '../components/EnhancedSEO';

const ComprehensivePricingGuide2029Page: React.FC = (): JSX.Element => {
  return (
    <>
      <EnhancedSEO 
        title="Zion Tech Group 2029 - Comprehensive Pricing Guide for AI & IT Services"
        description="Transparent pricing for all our AI and IT services. Choose from Starter, Professional, Enterprise, and Quantum plans. Get started with flexible pricing options designed to scale with your business growth."
        keywords={['AI services pricing', 'IT consulting rates', 'micro SAAS pricing', 'enterprise AI solutions', 'technology pricing', 'Zion Tech Group']}
        type="website"
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-gradient-to-br from-zion-slate-dark via-zion-slate to-zion-slate-light"
      >
        <ComprehensivePricingGuide2029 />
      </motion.div>
    </>
  );
};

export default ComprehensivePricingGuide2029Page;