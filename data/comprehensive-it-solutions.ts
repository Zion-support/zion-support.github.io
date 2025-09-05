export interface ComprehensiveItSolution {;
  id: string,;
  name: string,;
  tagline: string,;
  price: string,;
  description: string,;
  features: string[],;
  link: string,;
  category: string,;
  realImplementation: boolean,;
  contactInfo: {;
    mobile: string,;
    email: string,;
    address: string;
  }
}
<<<<<<< HEAD

export const comprehensiveITSolutions: ComprehensiveItSolution[] = [
  {
    id: &quot;full-stack-development&quot;,
    name: &quot;Full-Stack Development Services&quot;,
    tagline: &quot;End-to-end web application development&quot;,
    price: &quot;$80/hour&quot;,
    description: &quot;Complete full-stack development services from frontend to backend and database design.&quot;,
    features: [
      &quot;Frontend development&quot;,
      &quot;Backend APIs&quot;,
      &quot;Database design&quot;,
      &quot;DevOps integration&quot;,
      &quot;Testing & deployment&quot;
    ],
    link: &quot;/services/full-stack-development&quot;,
    category: &quot;IT Solutions&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
=======
;
export const comprehensiveITSolutions: ComprehensiveItSolution[] = [;
  {;
    id: "full-stack-development",;
    name: "Full-Stack Development Services",;
    tagline: "End-to-end web application development",;
    price: "$80/hour",;
    description: "Complete full-stack development services from frontend to backend and database design.",;
    features: [;
      "Frontend development",;
      "Backend APIs",;
      "Database design",;
      "DevOps integration",;
      "Testing & deployment";
    ],;
    link: "/services/full-stack-development",;
    category: "IT Solutions",;
    realImplementation: true,;
    contactInfo: {;
      mobile: "+1 302 464 0950",;
      email: "kleber@ziontechgroup.com",;
      address: "364 E Main St STE 1008 Middletown DE 19709";
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
    }
  }
];