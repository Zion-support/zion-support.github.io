<<<<<<< HEAD
export interface Ultimate2026Service {
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

export const ultimate2026Services: Ultimate2026Service[] = [
  {
    id: &quot;2026-ultimate-service&quot;,
    name: &quot;2026 Ultimate Service Platform&quot;,
    tagline: &quot;The ultimate platform for 2026&quot;,
    price: &quot;$699/month&quot;,
    description: &quot;The ultimate service platform for 2026, combining all cutting-edge technologies and capabilities.&quot;,
    features: [
      &quot;Ultimate platform&quot;,
      &quot;All technologies&quot;,
      &quot;Maximum capabilities&quot;,
      &quot;Premium features&quot;,
      &quot;24/7 support&quot;
    ],
    link: &quot;/services/2026-ultimate-service&quot;,
    category: &quot;Ultimate 2026 Services&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface Ultimate2026Service {_id: string;
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

export const ultimate2026Services: Ultimate2026Service[] = [
  {_id: "2026-ultimate-service", _name: "2026 Ultimate Service Platform", _tagline: "The ultimate platform for 2026", _price: "$699/month", _description: "The ultimate service platform for 2026, _combining all cutting-edge technologies and capabilities.", _features: [
      "Ultimate platform", _"All technologies", _"Maximum capabilities", _"Premium features", _"24/7 support"
    ], _link: "/services/2026-ultimate-service", _category: "Ultimate 2026 Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],