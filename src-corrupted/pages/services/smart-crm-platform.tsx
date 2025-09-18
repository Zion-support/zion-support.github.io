import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Brain, 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  ArrowRight,
  Clock,
  Target,
  TrendingUp,
  Zap,
  Globe,
  Shield,
  Smartphone,
  Calendar,
  MessageSquare
} from 'lucide-react';

const SmartCRMPlatform = (props: any) => {
  const features = [
    'AI-powered lead scoring',
    'Automated sales forecasting',
    'Email marketing automation',
    'Mobile app access',
    'Real-time analytics',
    'Custom pipeline management',
    'Integration with 500+ apps',
    '24/7 customer support'
  ];

  const benefits = [
    'Increase sales by 25%',
    'Improve customer retention',
    'Streamline sales processes',
    'Real-time insights & analytics',
    'Reduce manual data entry',
    'Better lead qualification',
    'Automated follow-ups',
    'Team collaboration tools'
  ];

  const integrations = [
    'Gmail & Outlook',
    'Slack & Teams',
    'QuickBooks & Xero',
    'Mailchimp & HubSpot',
    'Zapier & Make',
    'Google Workspace',
    'Microsoft 365',
    'Salesforce'
  ];

  const pricing = {
    starter: {
      name: 'Starter',
      price: '$79/month',
      users: 'Up to 5 users',
      features: ['Basic CRM', 'Email integration', 'Mobile app', 'Email support'],
      marketPrice: '$99/month'
    },
    professional: {
      name: 'Professional',
      price: '$149/month',
      users: 'Up to 15 users',
      features: ['Advanced CRM', 'AI lead scoring', 'Sales forecasting', 'Priority support', 'Custom fields'],
      marketPrice: '$199/month',
      popular: true
    },
    enterprise: {
      name: 'Enterprise',
      price: '$299/month',
      users: 'Unlimited users',
      features: ['Full CRM suite', 'Custom AI models', 'Advanced analytics', 'Dedicated support', 'API access', 'White-label'],
      marketPrice: '$399/month'
    }
  };

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>smart-crm-platform | Zion Tech Group</title>
        <meta name="description" content="smart-crm-platform - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">smart-crm-platform</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default smart-crm-platform;
