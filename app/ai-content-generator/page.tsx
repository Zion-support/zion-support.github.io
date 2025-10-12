import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
export default function Component() {
return (
<div>
<h1>Component</h1>
</div>
);
}
const features = [
{
icon: <Brain className="w-5h-5ml-2" />,
title: 'AI-Powered Writing',
description: 'Advanced GPT-4 and Claude-3 powered content generation with 99.9% accuracy and human-like quality.',
benefits: ['Natural language processing', 'Context-aware generation', 'Multi-language support', 'Brand voice adaptation'];
},
{
icon: <FileText className="w-5h-5ml-2" />,
title: 'Content Templates',
description: '500+ professionally designed templates for blogs, social media, emails, ads, and more.',
benefits: ['Industry-specific templates', 'Customizable layouts', 'SEO-optimized structure', 'Mobile-responsive design'];
},
{
icon: <BarChart3 className="w-5h-5ml-2" />,
title: 'SEO Optimization',
description: 'Built-in SEO tools with keyword research, density analysis, and readability scoring.',
benefits: ['Keyword optimization', 'Meta tag generation', 'Readability analysis', 'Competitor analysis'];
},
{
icon: <Palette className="w-5h-5ml-2" />,
title: 'Brand Voice Training',
description: 'Train AI to match your unique brand voice and tone across all content types.',
benefits: ['Voice consistency', 'Tone adaptation', 'Style guidelines', 'Brand personality'];
},
{
icon: <Globe className="w-5h-5ml-2" />,
title: 'Multi-Language Support',
description: 'Generate content in 50+ languages with native-level quality and cultural adaptation.',
benefits: ['50+ languages', 'Cultural adaptation', 'Local SEO optimization', 'Regional preferences'];
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: 'Plagiarism Detection',
description: 'Built-in plagiarism checker with 99.8% accuracy and originality scoring.',
benefits: ['Real-time checking', 'Originality reports', 'Citation suggestions', 'Copyright compliance'];
}
];

const pricingPlans = [
{
name: 'Starter',
price: '$29',
period: '/month',
description: 'Perfect for individuals and small businesses',
features: [
'10,000 words/month',
'50+ content templates',
'Basic SEO tools',
'5 brand voices',
'3 languages',
'Email support',
'Basic analytics';
],
popular: false,
cta: 'Start Free Trial';
},
{
name: 'Professional',
price: '$99',
period: '/month',
description: 'Ideal for growing businesses and agencies',
features: [
'100,000 words/month',
'500+ content templates',
'Advanced SEO suite',
'Unlimited brand voices',
'20 languages',
'Priority support',
'Advanced analytics',
'Team collaboration',
'API access',
'Custom templates';
],
popular: true,
cta: 'Start Free Trial';
},
{
name: 'Enterprise',
price: '$299',
period: '/month',
description: 'For large organizations with custom needs',
features: [
'Unlimited words',
'All templates + custom',
'Full SEO suite + AI insights',
'Unlimited everything',
'All 50+ languages',
'24/7 dedicated support',
'Enterprise analytics',
'Advanced team features',
'Full API access',
'White-label options',
'Custom integrations',
'Dedicated account manager';
],
popular: false,
cta: 'Contact Sales';
}
];

const testimonials = [
{
name: 'Sarah Johnson',
role: 'Content Marketing Manager',
company: 'TechFlow Inc.',
content: 'Zion's AI Content Generator has revolutionized our content strategy. We've increased our content output by 300% while maintaining quality.',
rating: 5,
avatar: 'SJ';
},
{
name: 'Michael Chen',
role: 'Founder',
company: 'StartupHub',
content: 'The brand voice training feature is incredible. Our content now sounds exactly like our brand, saving us hours of editing.',
rating: 5,
avatar: 'MC';
},
{
name: 'Emily Rodriguez',
role: 'SEO Specialist',
company: 'Digital Marketing Pro',
content: 'The SEO optimization tools are game-changing. Our content ranks 40% higher since using this platform.',
rating: 5,
avatar: 'ER';
}
];

const useCases = [
{
title: 'Blog Content',
description: 'Generate engaging blog posts with SEO optimization and brand voice consistency.',
icon: <FileText className="w-5h-5ml-2" />,
examples: ['How-to guides', 'Industry insights', 'Product reviews', 'Thought leadership'];
},
{
title: 'Social Media',
description: 'Create compelling social media posts for all platforms with optimal engagement.',
icon: <Share className="w-5h-5ml-2" />,
examples: ['Facebook posts', 'Twitter threads', 'LinkedIn articles', 'Instagram captions'];
},
{
title: 'Email Marketing',
description: 'Generate personalized email campaigns that convert and engage your audience.',
icon: <Mail className="w-5h-5ml-2" />,
examples: ['Newsletters', 'Promotional emails', 'Welcome sequences', 'Follow-up campaigns'];
},
{
title: 'Ad Copy',
description: 'Create high-converting ad copy for Google, Facebook, and other advertising platforms.',
icon: <Target className="w-5h-5ml-2" />,
examples: ['Google Ads', 'Facebook Ads', 'LinkedIn Ads', 'Display banners'];
}
];

return (;
