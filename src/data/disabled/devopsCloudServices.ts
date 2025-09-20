import React from "

export interface DevOpsCloudService {
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: string;
features: string[[];]
benefits: string[[];]
useCases: string[[];]
targetAudience: string[[];]
tags: string[[];]
estimatedDelivery: string;
supportLevel: string;
marketPrice: string;
contactInfo: {
phone: string;
email: string;,
website: string;,
}
}

export const DEVOPS_CLOUD_SERVICES: DevOpsCloudService[] = [
/
{
id: "
title: ",
description: "Complete GitOps platform that automates infrastructure deployment; configuration management; and application delivery using Git as the single source of truth.",
category: "
subcategory: "
price: 2200;
currency: "
pricingModel: ",
features: [
"
"Git-based deployment pipelines",
"Configuration drift detection",
"Rollback automation",
"Multi-environment management",
"
],
benefits: [
"
"Eliminate configuration drift",
"Improve audit compliance",
"Enable self-service deployments",
"
],
useCases: [
"
"Platform engineering",
"Infrastructure teams",
"Application teams",
"
],
targetAudience: [
"
"Platform engineers",
"Infrastructure architects",
"SRE engineers",
"
],
tags: ["DevOps", "GitOps", "Infrastructure as Code", "Automation", "Deployment"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$2;200 - $12;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
/
{
id: "
title: ",
description: "Unified multi-cloud management platform that provides centralized monitoring; cost optimization; and governance across AWS; Azure; GCP; and other cloud providers.",
category: "
subcategory: "
price: 2800;
currency: "
pricingModel: ",
features: [
"
"Cost optimization recommendations",
"Resource utilization monitoring",
"Compliance management",
"Automated scaling",
"
],
benefits: [
"
"Simplify multi-cloud operations",
"Improve resource utilization",
"Enhance compliance visibility",
"
],
useCases: [
"
"Enterprise IT",
"Cloud architects",
"FinOps teams",
"
],
targetAudience: [
"
"DevOps engineers",
"FinOps managers",
"IT directors",
"
],
tags: ["DevOps", "Multi-Cloud", "Cost Optimization", "Cloud Management", "FinOps"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$2;800 - $15;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
/
{
id: "
title: ",
description: "Comprehensive Kubernetes management platform that simplifies cluster operations; monitoring; security; and application deployment across multiple clusters.",
category: "
subcategory: "
price: 2500;
currency: "
pricingModel: ",
features: [
"
"Automated scaling",
"Security policy enforcement",
"Monitoring and alerting",
"Backup and disaster recovery",
"
],
benefits: [
"
"Improve cluster security",
"Reduce operational overhead",
"Enable self-service deployments",
"
],
useCases: [
"
"Containerized applications",
"Microservices architecture",
"DevOps teams",
"
],
targetAudience: [
"
"DevOps engineers",
"Platform engineers",
"SRE engineers",
"
],
tags: ["DevOps", "Kubernetes", "Container Management", "Microservices", "Platform Engineering"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$2;500 - $12;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
/
{
id: "
title: ",
description: "Comprehensive observability platform that provides unified monitoring; logging; tracing; and alerting across applications; infrastructure; and business metrics.",
category: "
subcategory: "
price: 2100;
currency: "
pricingModel: ",
features: [
"
"Infrastructure monitoring",
"Distributed tracing",
"Centralized logging",
"Real-time alerting",
"
],
benefits: [
"
"Improve system reliability",
"Enhance user experience",
"Optimize resource utilization",
"
],
useCases: [
"
"Infrastructure monitoring",
"Performance optimization",
"Incident response",
"
],
targetAudience: [
"
"SRE engineers",
"System administrators",
"Application developers",
"
],
tags: ["DevOps", "Observability", "Monitoring", "APM", "Logging"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$2;100 - $10;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
/
{
id: "
title: ",
description: "End-to-end serverless development platform that simplifies building; testing; deploying; and monitoring serverless applications across multiple cloud providers.",
category: "
subcategory: "
price: 1800;
currency: "
pricingModel: ",
features: [
"
"Multi-cloud deployment",
"Testing and debugging tools",
"Performance monitoring",
"Cost optimization",
"
],
benefits: [
"
"Reduce infrastructure management",
"Improve scalability",
"Optimize costs",
"
],
useCases: [
"
"API development",
"Event-driven systems",
"Microservices",
"
],
targetAudience: [
"
"Backend developers",
"DevOps engineers",
"Solution architects",
"
],
tags: ["DevOps", "Serverless", "Function as a Service", "API Development", "Microservices"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$1;800 - $8;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
];