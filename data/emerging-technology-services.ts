<<<<<<< HEAD
<<<<<<< HEAD
export interface EmergingTechnologyService {; id: string; name: string; tagline: string; price: string; description: string; features: string[]; link: string; category: string; realImplementation: boolean; contactInfo: {; mobile: string; email: string; export const emergingTechnologyServices: EmergingTechnologyService[] = [; {; id: "blockchain-platform",; name: "Blockchain Development Platform",; tagline: "Build and deploy blockchain applications",; price: "$179/month",; description: "Comprehensive blockchain development platform for creating decentralized applications.",; features[; "Smart contract development",; "DApp deployment",; "Blockchain integration",; "Security auditing",; "Performance monitoring"; ],; link: "/services/blockchain-platform",; category: "Emerging Tech",; realImplementation: true,; contactInfo: {; mobile: "+1 302 464 0950",; email: "kleber@ziontechgroup.com",; address: "364 E Main St STE 1008 Middletown DE 19709"; ]}}}
=======
=======
>>>>>>> origin/automation/changelog
export interface EmergingTechnologyService {
  id: string;
  name: string;
  tagline: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  category: string;
  realImplementation: boolean;
<<<<<<< HEAD
  contactInfo: {;
    mobile: string;
    email: string;
export const emergingTechnologyServices: EmergingTechnologyService[] = [;
  {;
=======
  contactInfo: {
    mobile: string;
    email: string;
    address: string;
  };
}

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
>>>>>>> origin/automation/changelog
    id: "blockchain-platform",
    name: "Blockchain Development Platform",
    tagline: "Build and deploy blockchain applications",
    price: "$179/month",
    description: "Comprehensive blockchain development platform for creating decentralized applications.",
<<<<<<< HEAD
    features[ "Smart contract development",
      "DApp deployment",
      "Blockchain integration",
      "Security auditing",
      "Performance monitoring" ],
    link: "/services/blockchain-platform",
    category: "Emerging Tech",
    realImplementation: true,
    contactInfo: {;
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709" ]}}}}
>>>>>>> origin/automation-fixes
=======
    features: [
      "Smart contract development",
      "DApp deployment",
      "Blockchain integration",
      "Security auditing",
      "Performance monitoring"
    ],
    link: "/services/blockchain-platform",
    category: "Emerging Tech",
    realImplementation: true,
    contactInfo: {
      mobile: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com",
      address: "364 E Main St STE 1008 Middletown DE 19709"
    }
  }
];
>>>>>>> origin/automation/changelog
