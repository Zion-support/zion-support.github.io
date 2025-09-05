export interface ComprehensiveItSolution {_id: string;
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

export const comprehensiveITSolutions: ComprehensiveItSolution[] = [
  {_id: "full-stack-development", _name: "Full-Stack Development Services", _tagline: "End-to-end web application development", _price: "$80/hour", _description: "Complete full-stack development services from frontend to backend and database design.", _features: [
      "Frontend development", _"Backend APIs", _"Database design", _"DevOps integration", _"Testing & deployment"
    ], _link: "/services/full-stack-development", _category: "IT Solutions", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];