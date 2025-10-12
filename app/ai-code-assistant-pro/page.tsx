import React from 'react';

const features = [
{
icon: <Bot className="w-6 h-6" />,
title: 'AI Code Generation',
description: 'Generate high-quality code from natural language descriptions with 95% accuracy',
color: 'from-blue-500 to-cyan-500';
},
{
icon: <Code className="w-6 h-6" />,
title: 'Smart Code Completion',
description: 'Intelligent autocomplete that understands context and suggests optimal solutions',
color: 'from-green-500 to-emerald-500';
},
{
icon: <Search className="w-6 h-6" />,
title: 'Code Analysis & Debugging',
description: 'Automatically detect bugs, security vulnerabilities, and performance issues',
color: 'from-yellow-500 to-orange-500';
},
{
icon: <GitBranch className="w-6 h-6" />,
title: 'Version Control Integration',
description: 'Seamless integration with Git, GitHub, GitLab, and other version control systems',
color: 'from-purple-500 to-pink-500';
},
{
icon: <Database className="w-6 h-6" />,
title: 'Multi-Language Support',
description: 'Support for 50+ programming languages including Python, JavaScript, Java, C++, and more',
color: 'from-indigo-500 to-purple-500';
},
{
icon: <Shield className="w-6 h-6" />,
title: 'Security & Compliance',
description: 'Built-in security scanning and compliance checking for enterprise-grade code quality',
color: 'from-red-500 to-pink-500';
}
];

const useCases = [
{
title: 'Rapid Prototyping',
description: 'Quickly build and test new features with AI-generated code',
benefits: ['Reduce development time by 70%', 'Generate boilerplate code instantly', 'Focus on business logic'];
},
{
title: 'Code Review & Optimization',
description: 'Automatically review code for best practices and performance',
benefits: ['Catch bugs before deployment', 'Improve code quality', 'Learn from AI suggestions'];
},
{
title: 'Legacy Code Modernization',
description: 'Update and modernize existing codebases with AI assistance',
benefits: ['Refactor complex code', 'Update deprecated patterns', 'Maintain functionality'];
}
];

const pricingPlans = [
{
name: 'Developer',
price: '$29',
period: '/month',
description: 'Perfect for individual developers',
features: [
'Up to 1,000 code generations/month',
'Basic AI features',
'5 programming languages',
'Email support',
'Basic analytics';
],
popular: false;
},
{
name: 'Professional',
price: '$99',
period: '/month',
description: 'Ideal for development teams',
features: [
'Up to 10,000 code generations/month',
'Advanced AI features',
'All programming languages',
'Priority support',
'Advanced analytics',
'Team collaboration',
'Custom integrations';
],
popular: true;
},
{
name: 'Enterprise',
price: 'Custom',
period: '',
description: 'For large organizations',
features: [
'Unlimited code generations',
'Custom AI models',
'White-label solution',
'Dedicated support',
'Advanced security',
'Custom integrations',
'SLA guarantee';
],
popular: false;
}
];

return (

</Link>
</div>
))}
</div>
