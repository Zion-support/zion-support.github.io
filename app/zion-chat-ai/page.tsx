import React from 'react';

export default ZionChatAiPage;
'use client';

const ZionChatAiPage: React.FC = () => {

useEffect(() => {
setIsVisible(true);
}, []);

const features = [
{
title: 'Multi-Language Support',
description: 'Support customers in 50+ languages with automatic translation and localization',
icon: Globe,
color: 'from-green-500 to-teal-500';
},
{
title: 'Sentiment Analysis',
description: 'Understand customer emotions and respond appropriately with AI-powered sentiment detection',
icon: Heart,
color: 'from-pink-500 to-rose-500';
},
{
title: 'Escalation Management',
description: 'Seamlessly transfer complex queries to human agents with full context',
icon: Users,
color: 'from-blue-500 to-purple-500';
},
{
title: 'Performance Analytics',
description: 'Track response times, satisfaction scores, and conversation outcomes',
icon: BarChart,
color: 'from-orange-500 to-red-500';
},
{
title: 'Custom Training',
description: 'Train the AI on your specific products, services, and company knowledge',
icon: Brain,
color: 'from-purple-500 to-indigo-500';
},
{
title: 'Integration APIs',
description: 'Connect with your existing CRM, helpdesk, and business tools',
icon: LinkIcon,
color: 'from-cyan-500 to-blue-500';
}
];
const pricingPlans = [
{
name: 'Starter',
price: '$79',
period: '/month',
description: 'Perfect for small businesses',
features: [
'Up to 1,000 conversations/month',
'Basic AI training',
'Email support',
'Standard integrations',
'Basic analytics',
'1 chatbot';
],
popular: false;
},
{
name: 'Professional',
price: '$149',
period: '/month',
description: 'Ideal for growing companies',
features: [
'Up to 10,000 conversations/month',
'Advanced AI training',
'Priority support',
'All integrations',
'Advanced analytics',
'Up to 5 chatbots',
'Custom branding',
'API access';
],
popular: true;
},
{
name: 'Enterprise',
price: '$299',
period: '/month',
description: 'For large organizations',
features: [
'Unlimited conversations',
'Custom AI training',
'24/7 phone support',
'Custom integrations',
'Enterprise analytics',
'Unlimited chatbots',
'White-label solution',
'Dedicated account manager';
],
popular: false;
}
];
return (;
