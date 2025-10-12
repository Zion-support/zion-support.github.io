'use client';
import React from 'react';
import GenericServicePage from '../components/GenericServicePage';
import { DollarSign } from 'lucide-react';

const ZionInvoiceGeniusPage: React.FC = () => {
  return (
    <GenericServicePage
      title="Zion Invoice Genius"
      description="Intelligent invoice generation and management with automated processing and payment tracking."
      icon={DollarSign}
      features={["Auto Generation","Payment Tracking","Reminder System","Analytics Dashboard","Multi-currency Support","Integration APIs"]}
      benefits={["Faster Invoicing","Better Cash Flow","Reduced Errors","Automated Follow-ups"]}
      pricing="$69/month"
      category="MicroSAAS"
      color="from-green-500 to-emerald-600"
    />
  );
};

export default ZionInvoiceGeniusPage;
