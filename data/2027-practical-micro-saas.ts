<<<<<<< HEAD
export interface PracticalMicroSaas2027 {
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

export const practicalMicroSaas2027: PracticalMicroSaas2027[] = [
  {
    id: &quot;2027-practical-micro-saas&quot;,
    name: &quot;2027 Practical Micro SAAS Platform&quot;,
    tagline: &quot;Practical micro SAAS for 2027&quot;,
    price: &quot;$129/month&quot;,
    description: &quot;Practical micro SAAS platform designed for 2027 with real-world business applications.&quot;,
    features: [
      &quot;Practical solutions&quot;,
      &quot;Business applications&quot;,
      &quot;Real-world use cases&quot;,
      &quot;Easy integration&quot;,
      &quot;Affordable pricing&quot;
    ],
    link: &quot;/services/2027-practical-micro-saas&quot;,
    category: &quot;Practical Micro SAAS 2027&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface PracticalMicroSaas2027 {_id: string;
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

export const practicalMicroSaas2027: PracticalMicroSaas2027[] = [
  {_id: "2027-practical-micro-saas", _name: "2027 Practical Micro SAAS Platform", _tagline: "Practical micro SAAS for 2027", _price: "$129/month", _description: "Practical micro SAAS platform designed for 2027 with real-world business applications.", _features: [
      "Practical solutions", _"Business applications", _"Real-world use cases", _"Easy integration", _"Affordable pricing"
    ], _link: "/services/2027-practical-micro-saas", _category: "Practical Micro SAAS 2027", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],