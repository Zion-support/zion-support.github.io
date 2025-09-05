<<<<<<< HEAD
export interface NextGenAi2026Service {
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

export const nextGenAI2026Services: NextGenAi2026Service[] = [
  {
    id: &quot;2026-next-gen-ai&quot;,
    name: &quot;2026 Next-Gen AI Platform&quot;,
    tagline: &quot;Next-generation AI for 2026&quot;,
    price: &quot;$299/month&quot;,
    description: &quot;Advanced next-generation AI platform designed specifically for 2026 with cutting-edge capabilities.&quot;,
    features: [
      &quot;Next-gen AI capabilities&quot;,
      &quot;Advanced algorithms&quot;,
      &quot;Future-ready features&quot;,
      &quot;Innovation platform&quot;,
      &quot;Expert support&quot;
    ],
    link: &quot;/services/2026-next-gen-ai&quot;,
    category: &quot;Next-Gen AI 2026&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface NextGenAi2026Service {_id: string;
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

export const nextGenAI2026Services: NextGenAi2026Service[] = [
  {_id: "2026-next-gen-ai", _name: "2026 Next-Gen AI Platform", _tagline: "Next-generation AI for 2026", _price: "$299/month", _description: "Advanced next-generation AI platform designed specifically for 2026 with cutting-edge capabilities.", _features: [
      "Next-gen AI capabilities", _"Advanced algorithms", _"Future-ready features", _"Innovation platform", _"Expert support"
    ], _link: "/services/2026-next-gen-ai", _category: "Next-Gen AI 2026", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],