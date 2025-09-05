export interface ServiceExpansion2025 {
  id: string,
  name: string,
  tagline: string,
  price: string,
  description: string,
  features: string[],
  link: string,
  category: string,
  realImplementation: boolean,
  contactInfo: {
    mobile: string,
    email: string,
    address: string
  }
}

export const serviceExpansions2025: ServiceExpansion2025[] = [
  {
    id: &quot;ai-workflow-automation&quot;,
    name: &quot;AI Workflow Automation&quot;,
    tagline: &quot;Intelligent process automation and optimization&quot;,
    price: &quot;$89/month&quot;,
    description: &quot;Advanced AI-powered workflow automation platform that streamlines business processes.&quot;,
    features: [
      &quot;Process automation&quot;,
      &quot;AI optimization&quot;,
      &quot;Workflow analytics&quot;,
      &quot;Integration capabilities&quot;,
      &quot;Custom workflows&quot;
    ],
    link: &quot;/services/ai-workflow-automation&quot;,
    category: &quot;Service Expansions 2025&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
],