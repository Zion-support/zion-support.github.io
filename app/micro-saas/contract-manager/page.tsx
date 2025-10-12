import React from 'react';
import { Helmet } from 'react-helmet-async'
import { FileText, Clock, Shield, Users, CheckCircle, ArrowRight, BarChart3, Calendar } from 'lucide-react'
import { Link } from 'react-router-dom'
export default ContractManagerPage;
const ContractManagerPage: React.FC = () => {
const features = [
{
icon: <FileText className="w-5h-5ml-2" />,
title: 'Smart Contract Templates',
description: 'Pre-built contract templates for common business agreements with AI-powered customization.';
},
{
icon: <Clock className="w-5h-5ml-2" />,
title: 'Automated Renewals',
description: 'Never miss a contract renewal with intelligent tracking and automated notifications.';
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: 'Compliance Monitoring',
description: 'Ensure all contracts meet legal requirements with built-in compliance checks.';
},
{
icon: <Users className="w-5h-5ml-2" />,
title: 'Team Collaboration',
description: 'Collaborate on contract reviews with real-time editing and commenting features.';
},
{
icon: <BarChart3 className="w-5h-5ml-2" />,
title: 'Analytics Dashboard',
description: 'Track contract performance, renewal rates, and key metrics in real-time.';
},
{
icon: <Calendar className="w-5h-5ml-2" />,
title: 'Deadline Management',
description: 'Never miss important contract deadlines with smart calendar integration.';
}
];

const pricingPlans = [
{
name: 'Starter',
price: '$29',
period: '/month',
description: 'Perfect for small businesses',
features: [
'Up to 50 contracts',
'Basic templates',
'Email notifications',
'Standard support';
],
popular: false;
},
{
name: 'Professional',
price: '$79',
period: '/month',
description: 'Ideal for growing companies',
features: [
'Up to 500 contracts',
'Advanced templates',
'Team collaboration',
'Analytics dashboard',
'Priority support';
],
popular: true;
},
{
name: 'Enterprise',
price: '$199',
period: '/month',
description: 'For large organizations',
features: [
'Unlimited contracts',
'Custom templates',
'Advanced analytics',
'API integration',
'Dedicated support';
],
popular: false;
}
];

return (;
