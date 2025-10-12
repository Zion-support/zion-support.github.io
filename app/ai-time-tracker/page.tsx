import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Clock, Timer, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Target, Brain, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AITimeTrackerPage;
const AITimeTrackerPage: React.FC = () => {
const features = [
{
icon: <Brain className="w-5h-5ml-2" />,
title: 'AI Activity Recognition',
description: 'Automatically detect and categorize work activities using AI to eliminate manual time entry.',
benefits: ['Auto-detection', 'Smart categorization', 'Context awareness', 'Learning algorithms'];
},
{
icon: <Timer className="w-5h-5ml-2" />,
title: 'Smart Time Tracking',
description: 'AI-powered time tracking that learns your work patterns and suggests optimal time allocation.',
benefits: ['Pattern learning', 'Optimal suggestions', 'Focus time detection', 'Break reminders'];
},
{
icon: <TrendingUp className="w-5h-5ml-2" />,
title: 'Productivity Analytics',
description: 'Comprehensive analytics with AI insights to improve productivity and work-life balance.',
benefits: ['Productivity metrics', 'Efficiency analysis', 'Distraction tracking', 'Goal setting'];
},
{
icon: <Zap className="w-5h-5ml-2" />,
title: 'Automated Reporting',
description: 'Generate detailed time reports automatically with AI-powered insights and recommendations.',
benefits: ['Auto reports', 'Client billing', 'Project insights', 'Team analytics'];
},
{
icon: <BarChart3 className="w-5h-5ml-2" />,
title: 'Project Management',
description: 'AI-driven project time estimation and resource allocation for better project planning.',
benefits: ['Time estimation', 'Resource planning', 'Deadline tracking', 'Budget monitoring'];
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: 'Privacy Protection',
description: 'Advanced privacy controls with local processing to protect sensitive work data.',
benefits: ['Local processing', 'Data encryption', 'Privacy controls', 'GDPR compliance'];
}
];

const pricingPlans = [
{
name: 'Individual',
price: '$19',
period: '/month',
description: 'Perfect for freelancers and individual professionals',
features: [
'Unlimited time tracking',
'Basic AI features',
'Mobile app access',
'Standard reports',
'Email support';
],
popular: false;
},
{
name: 'Team',
price: '$49',
period: '/month',
description: 'Ideal for small teams and growing businesses',
features: [
'Up to 10 team members',
'Advanced AI features',
'Team collaboration',
'Project management',
'Priority support',
'API access';
],
popular: true;
},
{
name: 'Enterprise',
price: '$149',
period: '/month',
description: 'For large organizations with complex needs',
features: [
'Unlimited team members',
'Full AI suite',
'Custom integrations',
'Dedicated support',
'Advanced analytics',
'White-label options';
],
popular: false;
}
];

const testimonials = [
{
name: 'Alex Johnson',
company: 'Freelance Designer',
content: 'AI Time Tracker increased my productivity by 40%. The auto-detection feature is a game-changer.',
rating: 5,
avatar: 'AJ';
},
{
name: 'Maria Rodriguez',
company: 'Project Manager',
content: 'The project time estimation feature helped us deliver projects 20% faster with better accuracy.',
rating: 5,
avatar: 'MR';
},
{
name: 'David Kim',
company: 'Software Developer',
content: 'Finally, a time tracker that actually understands my work patterns. Highly recommended!',
rating: 5,
avatar: 'DK';
}
];

const stats = [
{ number: '40%', label: 'Productivity Increase', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
{ number: '20%', label: 'Faster Delivery', icon: <Timer className="w-5h-5ml-2" /&gt; },</Timer></Timer>
{ number: '95%', label: 'Accuracy Rate', icon: <Target className="w-5h-5ml-2" /&gt; },</Target></Target>
{ number: '50 K+', label: 'Hours Tracked', icon: <Clock className="w-5h-5ml-2" /&gt; }</Clock></Clock>
];

return (;
