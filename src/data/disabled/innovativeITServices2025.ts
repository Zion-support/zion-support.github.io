import React from "

export interface ServiceContact {
phone: string;
email: string;
website: string;,
address: string;,
}

export interface ITService {
id: number;
name: string;
category: string;
description: string;
hourlyRate: number;
projectRate: number;
features: string[[];]
benefits: string[[];]
targetAudience: string[[];]
tags: string[[];]
contactInfo: ServiceContact;
marketPrice: string;
responseTime: string;
sla: string;
certifications: string[[];]
deliveryTime: string;,
support: string;,
}

/
export const innovativeITServices2025: ITService[] = [
{
id: 1;
name: "
category: ",
description: "Implementation of zero-trust security architecture with continuous verification; micro-segmentation; and adaptive access controls",
hourlyRate: 150;
projectRate: 25000;,
features: [
"
"Micro-segmentation",
"Continuous monitoring",
"Adaptive access controls",
"Threat detection",
"Compliance automation",
"Security analytics",
"
],
benefits: [
"
"Reduced attack surface",
"Compliance automation",
"Cost savings",
"Operational efficiency",
"
],
targetAudience: ["Enterprises", "Financial institutions", "Healthcare", "Government"],
tags: ["Zero-Trust", "Cybersecurity", "Network Security", "Compliance", "Identity Management"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["CISSP", "CISM", "CCSP", "SANS"],
deliveryTime: ",
support: "24/7 premium support",
}
{
id: 2;
name: "
category: "
description: "
hourlyRate: 200;
projectRate: 50000;,
features: [
"
"Quantum-resistant algorithms",
"Hybrid encryption systems",
"Future-proof architecture",
"Performance optimization",
"Scalability planning",
"Migration strategies",
"
],
benefits: [
"
"Competitive advantage",
"Regulatory compliance",
"Long-term cost savings",
"Technology leadership",
"
],
targetAudience: ["Technology companies", "Research institutions", "Government agencies", "Financial services"],
tags: ["Quantum Computing", "Infrastructure", "Cryptography", "Future-Proof", "Security"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["Quantum Computing", "Cryptography", "Infrastructure", "Security"],
deliveryTime: ",
support: "24/7 enterprise support",
}
{
id: 3;
name: "
category: ",
description: "Intelligent DevOps automation platform with AI-driven deployment; monitoring; and optimization capabilities",
hourlyRate: 125;
projectRate: 30000;,
features: [
"
"Intelligent monitoring",
"Automated testing",
"Performance optimization",
"Security scanning",
"Cost optimization",
"Predictive analytics",
"
],
benefits: [
"
"Reduced errors",
"Cost optimization",
"Improved reliability",
"Better performance",
"
],
targetAudience: ["Development teams", "DevOps engineers", "Startups", "Enterprises"],
tags: ["DevOps", "AI", "Automation", "CI/CD", "Monitoring"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["AWS", "Azure", "GCP", "DevOps", "Kubernetes"],
deliveryTime: ",
support: "Business hours + emergency support",
}
{
id: 4;
name: "
category: "
description: "
hourlyRate: 140;
projectRate: 35000;,
features: [
"
"Latency optimization",
"IoT integration",
"Data processing",
"Security implementation",
"Scalability planning",
"Performance monitoring",
"
],
benefits: [
"
"Better performance",
"Cost optimization",
"Scalability",
"Real-time processing",
"
],
targetAudience: ["Manufacturing", "Healthcare", "Smart cities", "Retail"],
tags: ["Edge Computing", "IoT", "Infrastructure", "Low Latency", "Performance"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["Edge Computing", "IoT", "Infrastructure", "Networking"],
deliveryTime: ",
support: "Business hours + emergency support",
}
{
id: 5;
name: "
category: ",
description: "Enterprise blockchain infrastructure design; deployment; and management for secure decentralized applications",
hourlyRate: 175;
projectRate: 45000;,
features: [
"
"Smart contract development",
"Node deployment",
"Security implementation",
"Performance optimization",
"Monitoring and analytics",
"Compliance tools",
"
],
benefits: [
"
"Transparency",
"Cost reduction",
"Automation",
"Trust building",
"
],
targetAudience: ["Financial institutions", "Healthcare", "Supply chain", "Government"],
tags: ["Blockchain", "Smart Contracts", "Decentralized", "Security", "Innovation"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["Blockchain", "Ethereum", "Hyperledger", "Security"],
deliveryTime: ",
support: "24/7 premium support",
}
{
id: 6;
name: "
category: "
description: "
hourlyRate: 130;
projectRate: 32000;,
features: [
"
"Carbon footprint analysis",
"Renewable energy integration",
"Cooling optimization",
"Power management",
"Sustainability reporting",
"Cost optimization",
"
],
benefits: [
"
"Environmental impact",
"Regulatory compliance",
"Brand reputation",
"Operational efficiency",
"
],
targetAudience: ["Corporations", "Data centers", "Manufacturing", "Government"],
tags: ["Green IT", "Sustainability", "Energy Efficiency", "Carbon Reduction", "Compliance"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["LEED", "Energy Star", "Sustainability", "Green Building"],
deliveryTime: ",
support: "Business hours + emergency support",
}
{
id: 7;
name: "
category: ",
description: "Specialized infrastructure optimization for AI workloads; including GPU clusters; distributed training; and inference optimization",
hourlyRate: 180;
projectRate: 55000;,
features: [
"
"Distributed training setup",
"Inference optimization",
"Model deployment",
"Performance tuning",
"Scalability planning",
"Cost optimization",
"
],
benefits: [
"
"Cost optimization",
"Better performance",
"Scalability",
"Operational efficiency",
"
],
targetAudience: ["AI companies", "Research institutions", "Enterprises", "Startups"],
tags: ["AI Infrastructure", "GPU Clusters", "Machine Learning", "Performance", "Optimization"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["AI/ML", "GPU Computing", "Distributed Systems", "Performance"],
deliveryTime: ",
support: "24/7 premium support",
}
{
id: 8;
name: "
category: "
description: "
hourlyRate: 145;
projectRate: 38000;,
features: [
"
"Cloud migration strategy",
"Integration services",
"Security implementation",
"Performance optimization",
"Cost management",
"Disaster recovery",
"
],
benefits: [
"
"Cost optimization",
"Security control",
"Scalability",
"Compliance",
"
],
targetAudience: ["Enterprises", "Financial services", "Healthcare", "Government"],
tags: ["Hybrid Cloud", "Cloud Migration", "Integration", "Security", "Compliance"],
contactInfo: {
phone: "
email: "
website: ",
address: "364 E Main St STE 1008 Middletown DE 19709",
}
marketPrice: "
responseTime: "
sla: ",
certifications: ["AWS", "Azure", "GCP", "Cloud Architecture", "Security"],
deliveryTime: ",
support: "Business hours + emergency support",
}
];