<<<<<<< HEAD
export interface Revolutionary2025Service {
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

export const revolutionary2025Services: Revolutionary2025Service[] = [
  {
    id: &quot;revolutionary-ai-platform&quot;,
    name: &quot;Revolutionary AI Platform&quot;,
    tagline: &quot;Next-generation AI capabilities&quot;,
    price: &quot;$199/month&quot;,
    description: &quot;Revolutionary AI platform that pushes the boundaries of what's possible with artificial intelligence.&quot;,
    features: [
      &quot;Advanced AI models&quot;,
      &quot;Revolutionary algorithms&quot;,
      &quot;Breakthrough capabilities&quot;,
      &quot;Future-ready architecture&quot;,
      &quot;Cutting-edge features&quot;
    ],
    link: &quot;/services/revolutionary-ai-platform&quot;,
    category: &quot;Revolutionary 2025 Services&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface Revolutionary2025Service {_id: string;
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

export const revolutionary2025Services: Revolutionary2025Service[] = [
  {_id: "revolutionary-ai-platform", _name: "Revolutionary AI Platform", _tagline: "Next-generation AI capabilities", _price: "$199/month", _description: "Revolutionary AI platform that pushes the boundaries of what's possible with artificial intelligence.", _features: [
      "Advanced AI models", _"Revolutionary algorithms", _"Breakthrough capabilities", _"Future-ready architecture", _"Cutting-edge features"
    ], _link: "/services/revolutionary-ai-platform", _category: "Revolutionary 2025 Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],