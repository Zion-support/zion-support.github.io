<<<<<<< HEAD
export interface Revolutionary2026ItService {
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

export const revolutionary2026ITServices: Revolutionary2026ItService[] = [
  {
    id: &quot;2026-revolutionary-it&quot;,
    name: &quot;2026 Revolutionary IT Platform&quot;,
    tagline: &quot;Revolutionary IT for 2026&quot;,
    price: &quot;$199/month&quot;,
    description: &quot;Revolutionary IT platform that transforms how businesses manage technology in 2026.&quot;,
    features: [
      &quot;Revolutionary IT&quot;,
      &quot;Transformative technology&quot;,
      &quot;Advanced capabilities&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready solutions&quot;
    ],
    link: &quot;/services/2026-revolutionary-it&quot;,
    category: &quot;Revolutionary 2026 IT&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface Revolutionary2026ItService {_id: string;
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

export const revolutionary2026ITServices: Revolutionary2026ItService[] = [
  {_id: "2026-revolutionary-it", _name: "2026 Revolutionary IT Platform", _tagline: "Revolutionary IT for 2026", _price: "$199/month", _description: "Revolutionary IT platform that transforms how businesses manage technology in 2026.", _features: [
      "Revolutionary IT", _"Transformative technology", _"Advanced capabilities", _"Innovation platform", _"Future-ready solutions"
    ], _link: "/services/2026-revolutionary-it", _category: "Revolutionary 2026 IT", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],