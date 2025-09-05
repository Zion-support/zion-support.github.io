<<<<<<< HEAD
export interface RealOperationalService {
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

export const realOperationalServices: RealOperationalService[] = [
  {
    id: &quot;operational-intelligence&quot;,
    name: &quot;Operational Intelligence Platform&quot;,
    tagline: &quot;Real-time operational insights and optimization&quot;,
    price: &quot;$99/month&quot;,
    description: &quot;Comprehensive operational intelligence platform for monitoring and optimizing business operations.&quot;,
    features: [
      &quot;Real-time monitoring&quot;,
      &quot;Performance analytics&quot;,
      &quot;Operational insights&quot;,
      &quot;Optimization recommendations&quot;,
      &quot;Alert system&quot;
    ],
    link: &quot;/services/operational-intelligence&quot;,
    category: &quot;Operational Services&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }
=======
export interface RealOperationalService {_id: string;
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

export const realOperationalServices: RealOperationalService[] = [
  {_id: "operational-intelligence", _name: "Operational Intelligence Platform", _tagline: "Real-time operational insights and optimization", _price: "$99/month", _description: "Comprehensive operational intelligence platform for monitoring and optimizing business operations.", _features: [
      "Real-time monitoring", _"Performance analytics", _"Operational insights", _"Optimization recommendations", _"Alert system"
    ], _link: "/services/operational-intelligence", _category: "Operational Services", _realImplementation: true, _contactInfo: {
      mobile: "+1 302 464 0950", _email: "kleber@ziontechgroup.com", _address: "364 E Main St STE 1008 Middletown DE 19709"}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
],