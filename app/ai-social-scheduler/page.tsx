import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Calendar, Share2, TrendingUp, BarChart3, Zap, CheckCircle, ArrowRight, Star, Clock, Globe, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AISocialSchedulerPage;
const AISocialSchedulerPage: React.FC = () => {
const features = [
{
icon: <Brain className="w-5h-5ml-2" />,
title: 'AI Content Generation',
description: 'Generate engaging social media posts using AI that understands your brand voice and audience preferences.',
benefits: ['Brand voice training', 'Audience analysis', 'Content optimization', 'Multi-platform adaptation'];
},
{
icon: <Calendar className="w-5h-5ml-2" />,
title: 'Smart Scheduling',
description: 'AI determines optimal posting times based on your audience activity patterns and engagement data.',
benefits: ['Optimal timing', 'Audience insights', 'Engagement prediction', 'Cross-platform sync'];
},
{
icon: <TrendingUp className="w-5h-5ml-2" />,
title: 'Performance Analytics',
description: 'Comprehensive analytics with AI-powered insights to improve your social media strategy.',
benefits: ['Engagement metrics', 'ROI tracking', 'Trend analysis', 'Competitor insights'];
},
{
icon: <Share2 className="w-5h-5ml-2" />,
title: 'Multi-Platform Management',
description: 'Manage all your social media accounts from one dashboard with platform-specific optimization.',
benefits: ['Unified dashboard', 'Platform optimization', 'Bulk posting', 'Content adaptation'];
},
{
icon: <Zap className="w-5h-5ml-2" />,
title: 'Automated Engagement',
description: 'AI-powered auto-responses and engagement tools to maintain active social media presence.',
benefits: ['Auto-responses', 'Comment management', 'Hashtag optimization', 'Community building'];
},
{
icon: <BarChart3 className="w-5h-5ml-2" />,
title: 'Campaign Management',
description: 'Plan, execute, and track social media campaigns with AI-driven recommendations.',
benefits: ['Campaign planning', 'A/B testing', 'Performance tracking', 'Budget optimization'];
}
];

const pricingPlans = [
{
name: 'Starter',
price: '$39',
period: '/month',
description: 'Perfect for individuals and small businesses',
features: [
'Up to 3 social accounts',
'50 posts per month',
'Basic AI content generation',
'Standard analytics',
'Email support';
],
popular: false;
},
{
name: 'Professional',
price: '$99',
period: '/month',
description: 'Ideal for growing businesses and agencies',
features: [
'Up to 10 social accounts',
'Unlimited posts',
'Advanced AI features',
'Team collaboration',
'Priority support',
'API access';
],
popular: true;
},
{
name: 'Enterprise',
price: '$299',
period: '/month',
description: 'For large organizations and agencies',
features: [
'Unlimited accounts',
'White-label options',
'Custom integrations',
'Dedicated support',
'Advanced analytics',
'Custom AI training';
],
popular: false;
}
];

const testimonials = [
{
name: 'Maria Garcia',
company: 'Digital Marketing Agency',
content: 'AI Social Scheduler increased our client engagement by 150%. The AI content generation is incredibly effective.',
rating: 5,
avatar: 'MG';
},
{
name: 'Tom Anderson',
company: 'E-commerce Brand',
content: 'The optimal timing feature alone increased our reach by 200%. Best social media tool we've ever used.',
rating: 5,
avatar: 'TA';
},
{
name: 'Sarah Kim',
company: 'Content Creator',
content: 'Saves me 10+ hours per week on content planning. The AI understands my brand voice perfectly.',
rating: 5,
avatar: 'SK';
}
];

const stats = [
{ number: '150%', label: 'Engagement Increase', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
{ number: '200%', label: 'Reach Improvement', icon: <Globe className="w-5h-5ml-2" /&gt; },</Globe></Globe>
{ number: '10 hrs', label: 'Time Saved/Week', icon: <Clock className="w-5h-5ml-2" /&gt; },</Clock></Clock>
{ number: '50 K+', label: 'Posts Scheduled', icon: <Calendar className="w-5h-5ml-2" /&gt; }</Calendar></Calendar>
];

return (;
