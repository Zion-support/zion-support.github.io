<<<<<<< HEAD
export interface PracticalBusinessSolution2028 {
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

export const practicalBusinessSolutions2028: PracticalBusinessSolution2028[] = [
  {
    id: &quot;2028-practical-business-solution&quot;,
    name: &quot;2028 Practical Business Solution Platform&quot;,
    tagline: &quot;Practical business solutions for 2028&quot;,
    price: &quot;$249/month&quot;,
    description: &quot;Practical business solution platform that provides real-world solutions for 2028.&quot;,
    features: [
      &quot;Practical solutions&quot;,
      &quot;Business applications&quot;,
      &quot;Real-world use cases&quot;,
      &quot;Easy integration&quot;,
      &quot;Affordable pricing&quot;
    ],
    link: &quot;/services/2028-practical-business-solution&quot;,
    category: &quot;Practical Business Solutions 2028&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface PracticalBusinessSolution2028 {_id: string;
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

export const practicalBusinessSolutions2028: PracticalBusinessSolution2028[] = [
  {_id: "2028-practical-business-solution", _name: "2028 Practical Business Solution Platform", _tagline: "Practical business solutions for 2028", _price: "$249/month", _description: "Practical business solution platform that provides real-world solutions for 2028.", _features: [
      "Practical solutions", _"Business applications", _"Real-world use cases", _"Easy integration", _"Affordable pricing"
    ], _link: "/services/2028-practical-business-solution", _category: "Practical Business Solutions 2028", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],