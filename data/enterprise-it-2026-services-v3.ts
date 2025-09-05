<<<<<<< HEAD
export interface EnterpriseIt2026ServiceV3 {
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

export const enterpriseIT2026ServicesV3: EnterpriseIt2026ServiceV3[] = [
  {
    id: &quot;2026-enterprise-it-v3&quot;,
    name: &quot;2026 Enterprise IT Solutions V3&quot;,
    tagline: &quot;Third generation enterprise IT&quot;,
    price: &quot;$499/month&quot;,
    description: &quot;Third generation of the 2026 enterprise IT solutions with enhanced capabilities and features.&quot;,
    features: [
      &quot;Third generation IT&quot;,
      &quot;Enhanced solutions&quot;,
      &quot;Advanced infrastructure&quot;,
      &quot;Improved security&quot;,
      &quot;Better performance&quot;
    ],
    link: &quot;/services/2026-enterprise-it-v3&quot;,
    category: &quot;Enterprise IT 2026 V3&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface EnterpriseIt2026ServiceV3 {_id: string;
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

export const enterpriseIT2026ServicesV3: EnterpriseIt2026ServiceV3[] = [
  {_id: "2026-enterprise-it-v3", _name: "2026 Enterprise IT Solutions V3", _tagline: "Third generation enterprise IT", _price: "$499/month", _description: "Third generation of the 2026 enterprise IT solutions with enhanced capabilities and features.", _features: [
      "Third generation IT", _"Enhanced solutions", _"Advanced infrastructure", _"Improved security", _"Better performance"
    ], _link: "/services/2026-enterprise-it-v3", _category: "Enterprise IT 2026 V3", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],