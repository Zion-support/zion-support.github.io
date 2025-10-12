import React from 'react';

export default ZionAnalyticsProPage;
'use client';

const ZionAnalyticsProPage: React.FC = () => {

useEffect(() => {
setIsVisible(true);
}, []);

const features = [
{
title: 'Real-time Analytics Dashboard',
description: 'Monitor your business performance with live data updates and interactive visualizations',
icon: BarChart,
color: 'from-blue-500 to-purple-500';
},
{
title: 'AI-Powered Predictive Insights',
description: 'Get intelligent forecasts and recommendations based on your data patterns',
icon: Brain,
color: 'from-purple-500 to-pink-500';
},
{
title: 'Custom Report Generation',
description: 'Create personalized reports with drag-and-drop interface and automated scheduling',
icon: FileText,
color: 'from-green-500 to-teal-500';
},
{
title: 'Team Collaboration Tools',
description: 'Share insights, create annotations, and collaborate with your team in real-time',
icon: Users,
color: 'from-orange-500 to-red-500';
},
{
title: 'API Integrations',
description: 'Connect with 100+ popular business tools and platforms seamlessly',
icon: LinkIcon,
color: 'from-cyan-500 to-blue-500';
},
{
title: 'Mobile App Access',
description: 'Access your analytics on-the-go with our native iOS and Android apps',
icon: Smartphone,
color: 'from-indigo-500 to-purple-500';
}
];
const pricingPlans = [
{
name: 'Starter',
price: '$99',
period: '/month',
description: 'Perfect for small businesses',
features: [
'Up to 5 users',
'10 data sources',
'Basic dashboards',
'Email support',
'1 GB data storage',
'Standard reports';
],
popular: false;
},
{
name: 'Professional',
price: '$199',
period: '/month',
description: 'Ideal for growing companies',
features: [
'Up to 25 users',
'Unlimited data sources',
'Advanced dashboards',
'Priority support',
'10 GB data storage',
'Custom reports',
'API access',
'White-label options';
],
popular: true;
},
{
name: 'Enterprise',
price: '$399',
period: '/month',
description: 'For large organizations',
features: [
'Unlimited users',
'Unlimited data sources',
'Enterprise dashboards',
'24/7 phone support',
'Unlimited data storage',
'Advanced analytics',
'Custom integrations',
'Dedicated account manager';
],
popular: false;
}
];
const testimonials = [
{
name: 'Sarah Johnson',
company: 'TechStart Inc.',
role: 'CEO',
content: 'Zion Analytics Pro has transformed how we understand our business. The AI insights have helped us increase revenue by 40%.',
rating: 5,
avatar: 'SJ';
},
{
name: 'Michael Chen',
company: 'DataFlow Solutions',
role: 'CTO',
content: 'The real-time dashboards and predictive analytics have given us a competitive edge. Highly recommended!',
rating: 5,
avatar: 'MC';
},
{
name: 'Emily Rodriguez',
company: 'GrowthCorp',
role: 'Marketing Director',
content: 'Easy to use, powerful features, and excellent support. Our team productivity has increased significantly.',
rating: 5,
avatar: 'ER';
}
];
return (;
