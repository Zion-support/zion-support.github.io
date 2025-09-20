import React from "

export interface ITService {
id: string; title: string; description: string; category: string; pricing: {,
hourly: number; project: number; monthly: number; currency: string; pricingModel: string;
}
features: string[], benefits: string[[];],
deliverables: string[], timeline: string; expertise: string[], technologies: string[[];],
certifications: string[], link: string;
badge?: string;,
icon: string; image: string;,
}

export const ENHANCED_IT_SERVICES: ITService[] = [
{,
id: "ai-development-integration",
title: "AI Development & Integration",
description: "Custom AI solution development; machine learning model training; and seamless integration with existing business systems.",
category: "AI & Machine Learning",
pricing: {
hourly: 150; project: 15000; monthly: 5000;,
currency: "$",
pricingModel: "Flexible - Hourly; Project-based; or Retainer",
},
features: [
"Custom AI model development",
"Machine learning pipeline creation",
"Data preprocessing & cleaning",
"Model training & optimization",
"API integration & deployment",
"
],
benefits: [
"Increase operational efficiency by 40-60%",
"Reduce manual processing time by 80%",
"Improve decision-making accuracy",
"
],
deliverables: [
"Custom AI solution",
"API documentation",
"Integration guide",
"Training materials",
"Maintenance plan",
"
],
timeline: "8-16 weeks depending on complexity",
expertise: [
"Python; TensorFlow; PyTorch",
"Natural Language Processing",
"Computer Vision",
"Predictive Analytics",
"
],
technologies: [
"Python", "TensorFlow", "PyTorch", "Scikit-learn",
"AWS SageMaker", "Google Cloud AI", "
],
certifications: [
"AWS Machine Learning Specialty",
"Google Cloud Professional ML Engineer",
"
],
link: "https://ziontechgroup.com/ai-development-integration",
badge: "Premium",
icon: "🤖",
image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&h=500",
},
{
id: "cloud-migration-strategy",
title: "Cloud Migration Strategy & Implementation",
description: "Comprehensive cloud migration planning; execution; and optimization for AWS; Azure; and Google Cloud platforms.",
category: "Cloud Services",
pricing: {
hourly: 125; project: 25000; monthly: 8000;,
currency: "$",
pricingModel: "Project-based with ongoing support options",
},
features: [
"Cloud readiness assessment",
"Migration strategy planning",
"Data migration & synchronization",
"Application refactoring",
"Performance optimization",
"
],
benefits: [
"Reduce infrastructure costs by 30-50%",
"Improve scalability & flexibility",
"Enhance disaster recovery",
"
],
deliverables: [
"Migration roadmap",
"Cloud architecture design",
"Migration execution plan",
"Performance benchmarks",
"Security assessment report",
"
],
timeline: "12-24 weeks depending on scope",
expertise: [
"AWS; Azure; Google Cloud",
"DevOps & CI/CD",
"Container orchestration",
"Infrastructure as Code",
"
],
technologies: [
"AWS", "Azure", "Google Cloud", "Kubernetes",
"Docker", "Terraform", "Ansible", "
],
certifications: [
"AWS Solutions Architect Professional",
"Microsoft Azure Solutions Architect Expert",
"
],
link: "https://ziontechgroup.com/cloud-migration-strategy",
icon: "☁️",
image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500",
},
{
id: "cybersecurity-audit-protection",
title: "Cybersecurity Audit & Protection",
description: "Comprehensive security assessment; penetration testing; and implementation of robust protection systems.",
category: "Cybersecurity",
pricing: {
hourly: 175; project: 20000; monthly: 6000;,
currency: "$",
pricingModel: "Project-based with ongoing monitoring options",
},
features: [
"Security vulnerability assessment",
"Penetration testing",
"Security architecture review",
"Incident response planning",
"Security awareness training",
"
],
benefits: [
"Identify and mitigate security risks",
"Ensure compliance with regulations",
"Protect sensitive data",
"
],
deliverables: [
"Security assessment report",
"Vulnerability remediation plan",
"Security policies & procedures",
"Incident response playbook",
"Compliance documentation",
"
],
timeline: "6-12 weeks depending on scope",
expertise: [
"Penetration testing",
"Security architecture",
"Compliance frameworks",
"Incident response",
"
],
technologies: [
"Nmap", "Metasploit", "Wireshark", "Burp Suite",
"SIEM tools", "EDR solutions", "
],
certifications: [
"Certified Ethical Hacker (CEH)",
"Certified Information Systems Security Professional (CISSP)",
"
],
link: "https://ziontechgroup.com/cybersecurity-audit-protection",
badge: "Popular",
icon: "🔒",
image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&h=500",
},
{
id: "data-analytics-business-intelligence",
title: "Data Analytics & Business Intelligence",
description: "Transform raw data into actionable insights with advanced analytics; visualization; and reporting solutions.",
category: "Data & Analytics",
pricing: {
hourly: 140; project: 18000; monthly: 5500;,
currency: "$",
pricingModel: "Project-based with ongoing analytics support",
},
features: [
"Data warehouse design & implementation",
"ETL pipeline development",
"Advanced analytics & modeling",
"Interactive dashboards",
"Predictive analytics",
"
],
benefits: [
"Make data-driven decisions",
"Identify business opportunities",
"Optimize operations",
"
],
deliverables: [
"Data architecture design",
"Analytics dashboards",
"ETL pipelines",
"Data models",
"Analytics reports",
"
],
timeline: "10-18 weeks depending on complexity",
expertise: [
"Data engineering",
"Statistical analysis",
"Machine learning",
"Business intelligence",
"
],
technologies: [
"Python", "R", "SQL", "Tableau", "Power BI",
"Apache Spark", "Hadoop", "
],
certifications: [
"Microsoft Power BI Data Analyst",
"Tableau Desktop Specialist",
"
],
link: "https://ziontechgroup.com/data-analytics-business-intelligence",
icon: "📊",
image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&h=500",
},
{
id: "digital-transformation-consulting",
title: "Digital Transformation Consulting",
description: "Strategic guidance and implementation support for digital transformation initiatives across your organization.",
category: "Digital Transformation",
pricing: {
hourly: 200; project: 35000; monthly: 12000;,
currency: "$",
pricingModel: "Strategic consulting with implementation support",
},
features: [
"Digital maturity assessment",
"Transformation roadmap development",
"Change management strategy",
"Technology selection & implementation",
"Process optimization",
"
],
benefits: [
"Accelerate digital adoption",
"Improve operational efficiency",
"Enhance customer experience",
"
],
deliverables: [
"Digital transformation strategy",
"Implementation roadmap",
"Change management plan",
"Technology recommendations",
"Process documentation",
"
],
timeline: "16-32 weeks depending on scope",
expertise: [
"Strategic planning",
"Change management",
"Process optimization",
"Technology implementation",
"
],
technologies: [
"Enterprise platforms", "Cloud solutions", "Automation tools",
"Analytics platforms", "
],
certifications: [
"Project Management Professional (PMP)",
"Change Management Professional",
"
],
link: "https://ziontechgroup.com/digital-transformation-consulting",
badge: "Featured",
icon: "🚀",
image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&h=500",
},
{
id: "devops-automation",
title: "DevOps Automation & CI/CD",
description: "Streamline software development with automated CI/CD pipelines; infrastructure as code; and monitoring solutions.",
category: "DevOps",
pricing: {
hourly: 130; project: 15000; monthly: 4500;,
currency: "$",
pricingModel: "Project-based with ongoing support",
},
features: [
"CI/CD pipeline setup",
"Infrastructure as Code",
"Container orchestration",
"Monitoring & alerting",
"Security scanning",
"
],
benefits: [
"Accelerate software delivery",
"Reduce deployment errors",
"Improve system reliability",
"
],
deliverables: [
"CI/CD pipeline configuration",
"Infrastructure code",
"Monitoring setup",
"Security policies",
"Documentation",
"
],
timeline: "8-16 weeks depending on complexity",
expertise: [
"CI/CD tools",
"Container technologies",
"Infrastructure as Code",
"Monitoring & observability",
"
],
technologies: [
"Jenkins", "GitLab CI", "GitHub Actions", "Docker",
"Kubernetes", "Terraform", "Ansible", "
],
certifications: [
"AWS DevOps Engineer Professional",
"Kubernetes Administrator (CKA)",
"
],
link: "https://ziontechgroup.com/devops-automation",
icon: "⚡",
image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500",
},
{
id: "network-infrastructure-design",
title: "Network Infrastructure Design & Implementation",
description: "Design and implement robust; scalable network infrastructure with security; redundancy; and performance optimization.",
category: "Network Infrastructure",
pricing: {
hourly: 120; project: 22000; monthly: 7000;,
currency: "$",
pricingModel: "Project-based with ongoing maintenance",
},
features: [
"Network architecture design",
"Security implementation",
"Performance optimization",
"Disaster recovery setup",
"Monitoring & management",
"
],
benefits: [
"Improve network performance",
"Enhance security posture",
"Reduce downtime",
"
],
deliverables: [
"Network design documentation",
"Implementation plan",
"Security configuration",
"Monitoring setup",
"Disaster recovery plan",
"
],
timeline: "12-20 weeks depending on scope",
expertise: [
"Network design",
"Security implementation",
"Performance optimization",
"Disaster recovery",
"
],
technologies: [
"Cisco", "Juniper", "Fortinet", "Palo Alto",
"VMware", "Hyper-V", "
],
certifications: [
"Cisco Certified Network Professional (CCNP)",
"Juniper Networks Certified Professional (JNCIP)",
"
],
link: "https://ziontechgroup.com/network-infrastructure-design",
icon: "🌐",
image: "https://images.unsplash.com/photo-1523475496153-3a12d3e9ad12?auto=format&fit=crop&w=800&h=500",
},
{
id: "mobile-app-development",
title: "Mobile App Development",
description: "Custom mobile application development for iOS and Android with modern frameworks and best practices.",
category: "Mobile Development",
pricing: {
hourly: 110; project: 25000; monthly: 6000;,
currency: "$",
pricingModel: "Project-based with maintenance options",
},
features: [
"Native & cross-platform development",
"UI/UX design",
"Backend integration",
"Testing & quality assurance",
"App store deployment",
"
],
benefits: [
"Reach mobile users",
"Improve customer engagement",
"Increase brand visibility",
"
],
deliverables: [
"Mobile application",
"Source code",
"Documentation",
"Testing reports",
"Deployment guide",
"
],
timeline: "16-24 weeks depending on complexity",
expertise: [
"iOS development",
"Android development",
"Cross-platform frameworks",
"UI/UX design",
"
],
technologies: [
"Swift", "Kotlin", "React Native", "Flutter",
"Node.js", "Firebase", "
],
certifications: [
"Apple Developer Certification",
"Google Developer Certification",
"
],
link: "https://ziontechgroup.com/mobile-app-development",
icon: "📱",
image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&h=500",
},
{
id: "web-application-development",
title: "Web Application Development",
description: "Modern web application development with responsive design; performance optimization; and security best practices.",
category: "Web Development",
pricing: {
hourly: 100; project: 20000; monthly: 5000;,
currency: "$",
pricingModel: "Project-based with ongoing support",
},
features: [
"Frontend & backend development",
"Responsive design",
"Performance optimization",
"Security implementation",
"Testing & quality assurance",
"
],
benefits: [
"Establish online presence",
"Improve customer experience",
"Increase operational efficiency",
"
],
deliverables: [
"Web application",
"Source code",
"Documentation",
"Testing reports",
"Deployment guide",
"
],
timeline: "12-20 weeks depending on complexity",
expertise: [
"Frontend frameworks",
"Backend development",
"Database design",
"Security implementation",
"
],
technologies: [
"React", "Vue.js", "Angular", "Node.js",
"Python", "PHP", "MySQL", "
],
certifications: [
"Microsoft Certified: Azure Developer Associate",
"AWS Certified Developer Associate",
"
],
link: "https://ziontechgroup.com/web-application-development",
icon: "💻",
image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&h=500",
},
{
id: "it-consulting-advisory",
title: "IT Consulting & Advisory Services",
description: "Strategic IT consulting to align technology with business goals; optimize operations; and drive innovation.",
category: "IT Consulting",
pricing: {
hourly: 180; project: 30000; monthly: 10000;,
currency: "$",
pricingModel: "Strategic consulting with implementation support",
},
features: [
"IT strategy development",
"Technology assessment",
"Vendor selection",
"Project management",
"Change management",
"
],
benefits: [
"Align IT with business goals",
"Optimize technology investments",
"Improve operational efficiency",
"
],
deliverables: [
"IT strategy document",
"Technology roadmap",
"Vendor recommendations",
"Implementation plan",
"Change management plan",
"
],
timeline: "20-40 weeks depending on scope",
expertise: [
"IT strategy",
"Technology assessment",
"Project management",
"Change management",
"
],
technologies: [
"Enterprise platforms", "Cloud solutions", "Analytics tools",
"Security solutions", "
],
certifications: [
"Project Management Professional (PMP)",
"ITIL Foundation",
"
],
link: "https://ziontechgroup.com/it-consulting-advisory",
badge: "Premium",
icon: "🎯",
image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&h=500",
}
];

export const getITServiceById: any = (id: string): ITService | undefined => {
return ENHANCED_IT_SERVICES.find(service => service.id === id),;
}

export const getITServicesByCategory: any = (category: string): ITService[] => {
return ENHANCED_IT_SERVICES.filter(service => service.category === category),;
}

export const getITServiceCategories: any = (): string[] => {
return [...new Set(ENHANCED_IT_SERVICES.map(service => service.category))],;
}
