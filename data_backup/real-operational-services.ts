export interface RealOperationalService {
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
address: string};export const "realOperationalServices": RealOperationalService[] = [{
    id: "operational-intelligence",
    "name": "Operational Intelligence Platform",
    "tagline": "Real-time operational insights and optimization",
    "price": "$99/month",
    "description": "Comprehensive operational intelligence platform for monitoring and optimizing business operations.",
    features[
      "Real-time monitoring",
      "Performance analytics",
      "Operational insights",
      "Optimization recommendations",
      "Alert system"
    ],
    "link": "/services/operational-intelligence",
    "category": "Operational Services",
    "realImplementation": true,
    "contactInfo": {
      mobile: "+1 302 464 0950",
      "email": "kleber@ziontechgroup.com",
      "address": "364 E Main St STE 1008 Middletown DE 19709"
]}}}
>>>>>>> c017c2ce201787a72821f9d4b2713514bd3cdb3a
export interface RealOperationalService { id: string; name: string; tagline: string; price: string; description: string; features: string[]; link: string; category: string; realImplementation: boolean; contactInfo: { mobile: string; email: string; address: string};export const realOperationalServices: RealOperationalService[] = [ { id: "operational-intelligence",name: "Operational Intelligence Platform",tagline: "Real-time operational insights and optimization",price: "$99/month",description: "Comprehensive operational intelligence platform for monitoring and optimizing business operations.",features[ "Real-time monitoring","Performance analytics","Operational insights","Optimization recommendations","Alert system" ],link: "/services/operational-intelligence",category: "Operational Services",realImplementation: true,contactInfo: { mobile: "+1 302 464 0950",email: "kleber@ziontechgroup.com",address: "364 E Main St STE 1008 Middletown DE 19709" ]}}}
>>>>>>> 6f37999110c5d0bd56901bd8a1becc376a5bbb23
