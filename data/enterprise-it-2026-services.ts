<<<<<<< HEAD
export interface EnterpriseIt2026Service {
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

export const enterpriseIT2026Services: EnterpriseIt2026Service[] = [
  {
    id: &quot;2026-enterprise-it&quot;,
    name: &quot;2026 Enterprise IT Solutions&quot;,
    tagline: &quot;Future-ready enterprise IT&quot;,
    price: &quot;$399/month&quot;,
    description: &quot;Comprehensive enterprise IT solutions designed for 2026 and beyond.&quot;,
    features: [
      &quot;Enterprise architecture&quot;,
      &quot;Future-ready solutions&quot;,
      &quot;Scalable infrastructure&quot;,
      &quot;Advanced security&quot;,
      &quot;24/7 support&quot;
    ],
    link: &quot;/services/2026-enterprise-it&quot;,
    category: &quot;Enterprise IT 2026&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface EnterpriseIt2026Service {_id: string;
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

export const enterpriseIT2026Services: EnterpriseIt2026Service[] = [
  {_id: "2026-enterprise-it", _name: "2026 Enterprise IT Solutions", _tagline: "Future-ready enterprise IT", _price: "$399/month", _description: "Comprehensive enterprise IT solutions designed for 2026 and beyond.", _features: [
      "Enterprise architecture", _"Future-ready solutions", _"Scalable infrastructure", _"Advanced security", _"24/7 support"
    ], _link: "/services/2026-enterprise-it", _category: "Enterprise IT 2026", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],