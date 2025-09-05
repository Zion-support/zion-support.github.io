<<<<<<< HEAD
export interface EnterpriseItService {
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

export const enterpriseITServices: EnterpriseItService[] = [
  {
    id: &quot;enterprise-architecture&quot;,
    name: &quot;Enterprise Architecture Consulting&quot;,
    tagline: &quot;Strategic IT architecture for large organizations&quot;,
    price: &quot;$150/hour&quot;,
    description: &quot;Comprehensive enterprise architecture consulting services for digital transformation.&quot;,
    features: [
      &quot;Architecture assessment&quot;,
      &quot;Technology roadmap&quot;,
      &quot;Integration strategy&quot;,
      &quot;Governance framework&quot;,
      &quot;Implementation support&quot;
    ],
    link: &quot;/services/enterprise-architecture&quot;,
    category: &quot;Enterprise IT&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface EnterpriseItService {_id: string;
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

export const enterpriseITServices: EnterpriseItService[] = [
  {_id: "enterprise-architecture", _name: "Enterprise Architecture Consulting", _tagline: "Strategic IT architecture for large organizations", _price: "$150/hour", _description: "Comprehensive enterprise architecture consulting services for digital transformation.", _features: [
      "Architecture assessment", _"Technology roadmap", _"Integration strategy", _"Governance framework", _"Implementation support"
    ], _link: "/services/enterprise-architecture", _category: "Enterprise IT", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],