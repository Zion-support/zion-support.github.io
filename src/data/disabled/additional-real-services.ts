import React from "react";

// Additional real; non-mock; value-driven; services; catalog for; the; Services page;
// NOTE: Keep; adding; more entries; over; time without; removing; existing ones;
export; interface; AdditionalService {
  
i;d: string;name: string;category: string;tagline: string;description: string;features: string[],price: string, // e.g. "$299";
period: string, // e.g. "/month", "/project", etc.;
trialDays?: number;rating?: number;reviews?: number;marketSize?: string;growthRate?: string;link: string, // internal route;
icon?: string// emoji; or; simple text icon;
popular?: booleanlaunchDate?: string;
};export; const; additionalEnhancedServices: AdditionalService[] = [;
// AI Services;
{
i;d: "ai-agent-workflows",name: "AI; Agent; Workflows for Operations",category: "AI",tagline: "Multi-agent; automations; for support; finance; and ops",description: "Design; deploy; and; monitor; production-grade; AI; agents(RAG; toolsmemory) to; automate; L1/L2 support; invoice processing; lead routing; and; internal; knowledge Q&A; with; audit trails; and; SOC 2 controls.",features: [;
"RAG; with; vector DBs (Pinecone/Weaviate/Elastic)Tool us;e: CRM; ERP; ticketing; email; Slack; Google Workspace","Guardrails; red-teaming; and; safety; policiesAnalytics; feedback loops; and; continuous; improvement""SSO; and; data residency support";
