import React from 'react';
export default ServicesPage;
const ServicesPage: React.FC = () => {
const mainServices = [
{
icon: Brain,
title: 'AI Solutions',
description: 'Transform your business with cutting-edge artificial intelligence and machine learning solutions.',
features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
color: 'from-purple-500 to-pink-500',
href: '/ai-services';
},
{
icon: Cloud,
title: 'Cloud Computing',
description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
features: ['AWS Migration', 'Azure Solutions', 'Google Cloud', 'Hybrid Cloud'],
color: 'from-cyan-500 to-blue-500',
href: '/cloud-services';
},
{
icon: Shield,
title: 'Cybersecurity',
description: 'Protect your digital assets with comprehensive security solutions and best practices.',
features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Incident Response'],
color: 'from-red-500 to-orange-500',
href: '/cybersecurity';
},
{
icon: Code,
title: 'Custom Development',
description: 'Tailored software solutions built with modern technologies and best practices.',
features: ['Web Applications', 'Mobile Apps', 'API Development', 'System Integration'],
color: 'from-green-500 to-emerald-500',
href: '/custom-development';
}
];
const additionalServices = [
{
icon: Database,
title: 'Data Analytics',
description: 'Unlock insights from your data with advanced analytics and visualization tools.',
href: '/data-analytics';
},
{
icon: Smartphone,
title: 'Mobile Development',
description: 'Native and cross-platform mobile applications for iOS and Android.',
href: '/mobile-development';
},
{
icon: Globe,
title: 'Web Development',
description: 'Modern, responsive websites and web applications that drive engagement.',
href: '/web-development';
},
{
icon: Lock,
title: 'IT Support',
description: 'Comprehensive IT support and maintenance services for your business.',
href: '/it-support';
}
];
const processSteps = [
{
step: '01',
title: 'Discovery',
description: 'We analyze your business needs and technical requirements to understand your goals.',
icon: Users;
},
{
step: '02',
title: 'Strategy',
description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
icon: Brain;
},
{
step: '03',
title: 'Implementation',
description: 'Our expert team implements the solution with precision and attention to detail.',
icon: Code;
},
{
step: '04',
title: 'Support',
description: 'We provide ongoing support and maintenance to ensure optimal performance.',
icon: Zap;
}
];
return (;
