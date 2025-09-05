<<<<<<< HEAD
export interface NextGenInnovation2025 {
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

export const nextGenInnovations2025: NextGenInnovation2025[] = [
  {
    id: &quot;next-gen-ai-suite&quot;,
    name: &quot;Next-Gen AI Suite&quot;,
    tagline: &quot;Future-ready AI solutions&quot;,
    price: &quot;$179/month&quot;,
    description: &quot;Next-generation AI suite that provides cutting-edge artificial intelligence capabilities.&quot;,
    features: [
      &quot;Next-gen AI models&quot;,
      &quot;Advanced capabilities&quot;,
      &quot;Future-ready features&quot;,
      &quot;Innovation platform&quot;,
      &quot;Expert support&quot;
    ],
    link: &quot;/services/next-gen-ai-suite&quot;,
    category: &quot;Next-Gen Innovations 2025&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface NextGenInnovation2025 {_id: string;
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

export const nextGenInnovations2025: NextGenInnovation2025[] = [
  {_id: "next-gen-ai-suite", _name: "Next-Gen AI Suite", _tagline: "Future-ready AI solutions", _price: "$179/month", _description: "Next-generation AI suite that provides cutting-edge artificial intelligence capabilities.", _features: [
      "Next-gen AI models", _"Advanced capabilities", _"Future-ready features", _"Innovation platform", _"Expert support"
    ], _link: "/services/next-gen-ai-suite", _category: "Next-Gen Innovations 2025", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],