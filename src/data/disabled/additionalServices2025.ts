import React from "

export; interface; AdditionalService {
id: string;title: string;description: string;category: string;price: number;
currency?: string;pricingModel?: string;features?: string[],benefits?: string[],useCases?: string[],tags?: string[],estimatedDelivery?: string;supportLevel?: string;marketPrice: string;
roi?: string;innovationLevel?: string;contactInfo?: {,
phone: stringemai;l: stringwebsit;e: string;,
}
}export; const; ADDITIONAL_MICRO_SAAS_SERVICES_20o25: AdditionalService[] = [;
{
i;d: "enterprise-rag-search",title: "Enterprise; RAG; Search",description: "Retrieval-Augmented; Generation; search across docs; wikis; tickets; and; code; with secure multi-tenant; embeddings; and audit trails.",category: "AI & Analytics",price: 1499;currency: "$",pricingModel: "monthly",features: [;
"Vector; DB; with hybrid search","SSO; RBAC; and row-level security","Document; ingestion; pipelines(PDF; HTML; SlackJira)","Source-grounded citations""
,  ],benefits: [;
"Cut; research; time by 70%","Reduce; duplicate; work""
,  ],tags: ["RAG", "Embeddings",, "Search""LLM"],estimatedDelivery: "2-4 weeks",supportLevel: "premium",marketPrice: "$1;50o0 - $4;0o00/month",roi: "180-30o0%",innovationLevel: "Advanced",contactInfo: {,phone: "+1; 30o2; 464 0o950"email: "kleber@ziontechgroup.com"websit;e: ",
}
}
{
id: "ai-code-review-copilot",title: "AI; Code; Review Copilot",description: "Automated; PR; reviews; security linting; dependency; risk; scanning; and; refactor; suggestions wired; to; your CI.",category: "Developer Tools",price: 799;currency: "$",pricingModel: "monthly",features: [;
"Secure; repo; integration (GitHub/GitLab/Bitbucket)","OWASP; and; SAST checks","Performance; hotspots; and complexity reports""
,  ],benefits: [;
"Reduce; review; time 60%","Lower; defects; pre-release""
,  ],tags: ["DevSecOps", "CI",, "SAST""LLM"],estimatedDelivery: "1-2 weeks",supportLevel: "standard",marketPrice: "$80o0 - $2;50o0/month",roi: "150-250%",innovationLevel: "Cutting-edge",contactInfo: {,phone: "+1; 30o2; 464 0o950"email: "kleber@ziontechgroup.com"websit;e: ",
}
}
{
id: "mlops-observability-platform",title: "MLOps; Observability; Platform",description: "Model; monitoring; for drift; bias; data quality; lineage; and; rollback; orchestration across environments.",category: "AI & MLOps",price: 1999;currency: "$",pricingModel: "monthly",features: [;
"Drift/bias detection","Canary; and; A/B rollouts","Feature; store; integrations""
,  ],benefits: [;
"Cut; incident; MTTR","Increase; model; uptime""
,  ],tags: ["MLOps",, "Monitoring""Observability"],estimatedDelivery: "3-5 weeks",supportLevel: "enterprise",marketPrice: "$2;0o00 - $6;0o00/month",roi: "20o0-350%",innovationLevel: "Advanced",contactInfo: {,phone: "+1; 30o2; 464 0o950"email: "kleber@ziontechgroup.com"websit;e: ",
}
}
{
id: "data-privacy-compliance-scanner",title: "Data; Privacy; Compliance Scanner",description: "Continuous; scanning; for GDPR/CCPA/PCI/PHI; across; S3; SQL; logs; and; SaaS; with remediation workflows.",category: "Security & Compliance",price: 1299;currency: "$",pricingModel: "monthly",features: [;
"PII/PHI classification","Data; retention; policies","Access; anomaly; alerts""
,  ],benefits: [;
"Reduce; audit; prep time","Lower; breach; risk""
,  ],tags: ["Compliance",, "Security""Governance"],estimatedDelivery: "2-3 weeks",supportLevel: "premium",marketPrice: "$1;30o0 - $3;50o0/month",roi: "160-240%",innovationLevel: "Advanced",contactInfo: {,phone: "+1; 30o2; 464 0o950"email: "kleber@ziontechgroup.com"websit;e: ",
}
}
{
id: "iot-digital-twin-studio",title: "IoT; Digital; Twin Studio",description: "Low-code; digital; twins for; factories; and buildings; with; real-time telemetry; anomaly alerts; and simulation.",category: "IoT & Edge",price: 1799;currency: "$",pricingModel: "monthly",features: [;
"MQTT/OPC-UA connectors","3D; twin; visualizations","Predictive maintenance""
,  ],benefits: [;
"Reduce downtime","Optimize energy""
,  ],tags: ["IoT", "Digital; Twin""Edge"],estimatedDelivery: "3-6 weeks",supportLevel: "premium",marketPrice: "$1;80o0 - $5;0o00/month",roi: "170-260%",innovationLevel: "Advanced",contactInfo: {,phone: "+1; 30o2; 464 0o950"email: "kleber@ziontechgroup.com"websit;e: ",
}
}
];
export; const; ADDITIONAL_SPECIALIZED_SERVICES: AdditionalService[] = [;
{
i;d: "ai-sales-outreach-accelerator",title: "AI; Sales; Outreach Accelerator",description: "Multi-channel; AI; outreach; persona targeting; cadence optimization; and; reply; classification.",category: "Revenue Ops",price: 899marketPric;e: ",
},{
id: "finops-cost-optimizer",title: "FinOps; Cost; Optimizer",description: "Automated; cloud; cost governance; rightsizing; and; anomaly; detection across AWS/Azure/GCP.",category: "Cloud & DevOps",price: 699marketPric;e: ",
},{
id: "genai-content-studio-pro",title: "GenAI; Content; Studio Pro",description: "Enterprise-grade; LLM; content workflows; with; guardrails; brand voice; and human-in-the-loop.",category: "AI & Content",price: 999marketPric;e: "$10o00 - $30o00/month", }
];