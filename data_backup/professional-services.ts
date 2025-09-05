export interface ProfessionalService {
  "id": string;
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
address: string};export const "professionalServices": ProfessionalService[] = [{
    id: "it-consulting",
    "name": "IT Consulting Services",
    "tagline": "Expert IT consulting for business growth",
    "price": "$120/hour",
    "description": "Professional IT consulting services to help businesses optimize their technology investments.",
    features[
      "Technology assessment",
      "Strategic planning",
      "Implementation guidance",
      "Performance optimization",
      "Ongoing support"
    ],
    "link": "/services/it-consulting",
    "category": "Professional Services",
    "realImplementation": true,
    "contactInfo": {
      mobile: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "address": "364 E Main St STE 1008 Middletown DE 19709"
]}}}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export interface ProfessionalService { id: string; name: string; tagline: string; price: string; description: string; features: string[]; link: string; category: string; realImplementation: boolean; contactInfo: { mobile: string; email: string; address: string};export const professionalServices: ProfessionalService[] = [ { id: "it-consulting",name: "IT Consulting Services",tagline: "Expert IT consulting for business growth",price: "$120/hour",description: "Professional IT consulting services to help businesses optimize their technology investments.",features[ "Technology assessment","Strategic planning","Implementation guidance","Performance optimization","Ongoing support" ],link: "/services/it-consulting",category: "Professional Services",realImplementation: true,contactInfo: { mobile: "+1 302 464 0950",email: "kleber@ziontechgroup.com",address: "364 E Main St STE 1008 Middletown DE 19709" ]}}}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
