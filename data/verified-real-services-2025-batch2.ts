<<<<<<< HEAD
export interface VerifiedRealService2025Batch2 {
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

export const verifiedRealServices2025Batch2: VerifiedRealService2025Batch2[] = [
  {
    id: &quot;ai-quality-assurance&quot;,
    name: &quot;AI Quality Assurance Platform&quot;,
    tagline: &quot;Automated testing and quality control&quot;,
    price: &quot;$79/month&quot;,
    description: &quot;AI-powered quality assurance platform that automates testing and ensures software quality.&quot;,
    features: [
      &quot;Automated testing&quot;,
      &quot;AI defect detection&quot;,
      &quot;Performance monitoring&quot;,
      &quot;Quality metrics&quot;,
      &quot;Continuous integration&quot;
    ],
    link: &quot;/services/ai-quality-assurance&quot;,
    category: &quot;Verified Services 2025&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface VerifiedRealService2025Batch2 {_id: string;
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

export const verifiedRealServices2025Batch2: VerifiedRealService2025Batch2[] = [
  {_id: "ai-quality-assurance", _name: "AI Quality Assurance Platform", _tagline: "Automated testing and quality control", _price: "$79/month", _description: "AI-powered quality assurance platform that automates testing and ensures software quality.", _features: [
      "Automated testing", _"AI defect detection", _"Performance monitoring", _"Quality metrics", _"Continuous integration"
    ], _link: "/services/ai-quality-assurance", _category: "Verified Services 2025", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],