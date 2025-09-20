import React from "react";

export interface EnterpriseITInfrastructureService {
  
id: string;
title: string;
description: string;
category: "Infrastructure" | "Networking" | "Security" | "Cloud" | "Data Center" | "Disaster Recovery" | "Compliance" | "Performance" | "Scalability" | "Integration";
subcategory: string;
price: {
monthly: number;
yearly: number;
enterprise: number;
currency: string;
}
}
};
phone: string;
address: string;
};
integrations: string[];
sla: string;
}
enterprise: 14999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.99% uptime guarantee"
};
{id: "next-generation-data-center-solutions";
title: "Next-Generation Data Center & Edge Computing Solutions";
enterprise: 19999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.995% uptime guarantee"
};
{id: "enterprise-network-security-fabric";
title: "Enterprise Network Security Fabric & Zero Trust Architecture";
enterprise: 11999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.9% uptime guarantee"
};
{id: "enterprise-performance-optimization-suite";
title: "Enterprise Performance Optimization & Monitoring Suite";
enterprise: 8999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.9% uptime guarantee"
};
{id: "enterprise-disaster-recovery-platform";
title: "Enterprise Disaster Recovery & Business Continuity Platform";
enterprise: 12999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.99% recovery time guarantee"
};
{id: "enterprise-integration-hub";
title: "Enterprise Integration Hub & API Management Platform";
enterprise: 10999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.9% uptime guarantee"
};
{id: "enterprise-compliance-automation-suite";
title: "Enterprise Compliance Automation & Governance Suite";
enterprise: 11999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.9% uptime guarantee"
};
{id: "enterprise-scalability-solutions";
title: "Enterprise Scalability & Auto-Scaling Solutions";
enterprise: 9999;
contactInfo: {email: "kleber@ziontechgroup.com";
phone: "+1 302 464 0950";
sla: "99.9% uptime guarantee"
}