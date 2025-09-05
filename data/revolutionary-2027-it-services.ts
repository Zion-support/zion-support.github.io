<<<<<<< HEAD
export interface Revolutionary2027ItService {
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

export const revolutionary2027ITServices: Revolutionary2027ItService[] = [
  {
    id: &quot;2027-revolutionary-it&quot;,
    name: &quot;2027 Revolutionary IT Platform&quot;,
    tagline: &quot;Revolutionary IT for 2027&quot;,
    price: &quot;$349/month&quot;,
    description: &quot;Revolutionary IT platform that transforms how businesses manage technology in 2027.&quot;,
    features: [
      &quot;Revolutionary IT&quot;,
      &quot;Transformative technology&quot;,
      &quot;Advanced capabilities&quot;,
      &quot;Innovation platform&quot;,
      &quot;Future-ready solutions&quot;
    ],
    link: &quot;/services/2027-revolutionary-it&quot;,
    category: &quot;Revolutionary 2027 IT&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface Revolutionary2027ItService {_id: string;
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

export const revolutionary2027ITServices: Revolutionary2027ItService[] = [
  {_id: "2027-revolutionary-it", _name: "2027 Revolutionary IT Platform", _tagline: "Revolutionary IT for 2027", _price: "$349/month", _description: "Revolutionary IT platform that transforms how businesses manage technology in 2027.", _features: [
      "Revolutionary IT", _"Transformative technology", _"Advanced capabilities", _"Innovation platform", _"Future-ready solutions"
    ], _link: "/services/2027-revolutionary-it", _category: "Revolutionary 2027 IT", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],