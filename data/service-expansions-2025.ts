export interface ServiceExpansion2025 {_id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
  contactInfo: {
    mobile: string;
    email: string;
    address: string;};
}

export const serviceExpansions2025: ServiceExpansion2025[] = [
  {_id: "ai-workflow-automation", _name: "AI Workflow Automation", _tagline: "Intelligent process automation and optimization", _price: "$89/month", _description: "Advanced AI-powered workflow automation platform that streamlines business processes.", _features: [
      "Process automation", _"AI optimization", _"Workflow analytics", _"Integration capabilities", _"Custom workflows"
    ], _link: "/services/ai-workflow-automation", _category: "Service Expansions 2025", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];