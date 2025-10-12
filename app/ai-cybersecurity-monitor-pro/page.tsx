import React from 'react';
export default function Component() {
return (
<div>
<h1>Component</h1>
</div>
);
}
'use client';

const features = [
{
icon: <Brain className="w-5h-5ml-2" />,
title: 'AI Threat Detection',
description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
benefits: ['Behavioral analysis', 'Anomaly detection', 'Threat prediction', 'Zero-day protection'];
},
{
icon: <Shield className="w-5h-5ml-2" />,
title: '24/7 Monitoring',
description: 'Continuous security monitoring with instant threat response and automated remediation',
benefits: ['Real-time alerts', 'Automated response', 'Incident management', 'Threat hunting'];
},
{
icon: <Eye className="w-5h-5ml-2" />,
title: 'Network Visibility',
description: 'Complete visibility into your network infrastructure with advanced traffic analysis',
benefits: ['Network mapping', 'Traffic analysis', 'Device discovery', 'Vulnerability scanning'];
},
{
icon: <Lock className="w-5h-5ml-2" />,
title: 'Compliance Management',
description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory standards',
benefits: ['Regulatory compliance', 'Audit trails', 'Policy enforcement', 'Risk assessment'];
},
{
icon: <Zap className="w-5h-5ml-2" />,
title: 'Automated Response',
description: 'Intelligent incident response with automated threat containment and remediation',
benefits: ['Auto-quarantine', 'Threat isolation', 'System restoration', 'Forensic analysis'];
},
{
icon: <Globe className="w-5h-5ml-2" />,
title: 'Global Threat Intelligence',
description: 'Access to global threat intelligence feeds and security research databases',
benefits: ['Threat intelligence', 'IOC feeds', 'Malware analysis', 'Attack patterns'];
}
];
const securityCapabilities = [
{
category: 'Threat Detection',
icon: <AlertTriangle className="w-5h-5ml-2" />,
items: [
'Malware detection',
'Phishing prevention',
'Ransomware protection',
'Advanced persistent threats',
'Insider threat detection';
];
},
{
category: 'Network Security',
icon: <Network className="w-5h-5ml-2" />,
items: [
'Firewall management',
'Intrusion detection',
'Network segmentation',
'VPN monitoring',
'Wireless security';
];
},
{
category: 'Endpoint Protection',
icon: <Monitor className="w-5h-5ml-2" />,
items: [
'Device monitoring',
'Application control',
'USB protection',
'Mobile device security',
'Patch management';
];
},
{
category: 'Data Protection',
icon: <Database className="w-5h-5ml-2" />,
items: [
'Data encryption',
'Access controls',
'Data loss prevention',
'Backup monitoring',
'Privacy compliance';
];
},
{
category: 'Incident Response',
icon: <AlertCircle className="w-5h-5ml-2" />,
items: [
'Automated response',
'Incident tracking',
'Forensic analysis',
'Recovery procedures',
'Communication tools';
];
},
{
category: 'Security Analytics',
icon: <BarChart3 className="w-5h-5ml-2" />,
items: [
'Security dashboards',
'Risk assessment',
'Compliance reporting',
'Trend analysis',
'Performance metrics';
];
}
];
const pricingPlans = [
{
name: 'Essential',
price: '$299',
period: '/month',
description: 'Perfect for small businesses and startups',
features: [
'Up to 50 devices',
'Basic threat detection',
'Email support',
'Standard reports',
'Basic compliance',
'1 TB log storage';
],
popular: false,
cta: 'Start Free Trial';
},
{
name: 'Professional',
price: '$799',
period: '/month',
description: 'Ideal for growing businesses and security teams',
features: [
'Up to 500 devices',
'Advanced AI detection',
'Priority support',
'Custom dashboards',
'Full compliance suite',
'10 TB log storage',
'Automated response',
'Threat intelligence';
],
popular: true,
cta: 'Get Started';
},
{
name: 'Enterprise',
price: '$1,999',
period: '/month',
description: 'For large organizations with complex security needs',
features: [
'Unlimited devices',
'Custom AI models',
'Dedicated support',
'White-label options',
'Unlimited storage',
'API access',
'On-premise deployment',
'Custom integrations';
],
popular: false,
cta: 'Contact Sales';
}
];
const testimonials = [
{
name: 'Michael Torres',
company: 'SecureTech Solutions',
role: 'CISO',
content: 'AI Cybersecurity Monitor Pro has revolutionized our security posture. The AI detection capabilities have prevented multiple sophisticated attacks that traditional tools missed.',
rating: 5,
avatar: 'MT',
results: '99.7% threat detection rate';
},
{
name: 'Sarah Chen',
company: 'Global Finance Corp',
role: 'Security Director',
content: 'The automated response capabilities have reduced our incident response time by 80%. Our security team can now focus on strategic initiatives instead of manual monitoring.',
rating: 5,
avatar: 'SC',
results: '80% faster incident response';
},
{
name: 'David Rodriguez',
company: 'Healthcare Systems',
role: 'IT Security Manager',
content: 'The compliance management features have made our HIPAA audits seamless. We maintain continuous compliance with automated monitoring and reporting.',
rating: 5,
avatar: 'DR',
results: '100% compliance score';
}
];
const stats = [
{ number: '1 M+', label: 'Threats Blocked', icon: <Shield className="w-5h-5ml-2" /&gt; },</Shield></Shield>
{ number: '500+', label: 'Enterprise Clients', icon: <Building2 className="w-5h-5ml-2" /&gt; },</Building2></Building2>
{ number: '99.9%', label: 'Uptime Guarantee', icon: <Activity className="w-5h-5ml-2" /&gt; },</Activity></Activity>
{ number: '24/7', label: 'Security Monitoring', icon: <Eye className="w-5h-5ml-2" /&gt; }</Eye></Eye>
];
const threatTypes = [
{ name: 'Malware', icon: <Bug className="w-5h-5ml-2" />, category: 'Malicious Software' },
{ name: 'Phishing', icon: <Target className="w-5h-5ml-2" />, category: 'Social Engineering' },
{ name: 'Ransomware', icon: <Lock className="w-5h-5ml-2" />, category: 'Data Encryption' },
{ name: 'DDoS', icon: <Network className="w-5h-5ml-2" />, category: 'Network Attacks' },
{ name: 'Insider Threats', icon: <Users className="w-5h-5ml-2" />, category: 'Internal Risks' },
{ name: 'Zero-Day', icon: <AlertCircle className="w-5h-5ml-2" />, category: 'Unknown Vulnerabilities' },
{ name: 'APTs', icon: <Search className="w-5h-5ml-2" />, category: 'Advanced Persistent Threats' },
{ name: 'IoT Attacks', icon: <Smartphone className="w-5h-5ml-2" />, category: 'Device Vulnerabilities' }
];
return (;
