export interface ExtraService {_id: string;
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

export const extraServices: ExtraService[] = [
  {_id: "cloud-migration-expert", _name: "Cloud Migration Expert", _tagline: "Seamless cloud migration and optimization", _price: "$99/hour", _description: "Professional cloud migration services for businesses looking to modernize their infrastructure.", _features: [
      "AWS/Azure/GCP migration", _"Performance optimization", _"Cost analysis", _"Security implementation", _"24/7 support"
    ], _link: "/services/cloud-migration-expert", _category: "Cloud Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  },
  {_id: "cybersecurity-audit", _name: "Cybersecurity Audit Pro", _tagline: "Comprehensive security assessment and protection", _price: "$199/hour", _description: "Complete cybersecurity audit and vulnerability assessment for enterprise-level protection.", _features: [
      "Vulnerability assessment", _"Penetration testing", _"Security policy review", _"Compliance audit", _"Remediation guidance"
    ], _link: "/services/cybersecurity-audit", _category: "Security", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
  }
];