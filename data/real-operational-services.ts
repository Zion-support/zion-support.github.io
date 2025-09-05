<<<<<<< HEAD
export interface RealOperationalService {;
  id:string,;
  name:string,;
  tagline:string,;
  price:string,;
  description:string,;
  features:string[],;
  link:string,;
  category:string,;
  realImplementation:boolean,;
  contactInfo:{;
    mobile:string,;
    email:string,;
    address:string;
  },;
}
;
export const realOperationalServices:RealOperationalService[] = [;
  {;
    id:"operational-intelligence",;
    name:"Operational Intelligence Platform",;
    tagline:"Real-time operational insights and optimization",;
    price:"$99/month",;
    description:"Comprehensive operational intelligence platform for monitoring and optimizing business operations.",;
    features:[;
      "Real-time monitoring",;
      "Performance analytics",;
      "Operational insights",;
      "Optimization recommendations",;
      "Alert system";
    ],;
    link:"/services/operational-intelligence",;
    category:"Operational Services",;
    realImplementation:true,;
    contactInfo:{;
      mobile:"+1 302 464 0950",;
      email:"kleber@ziontechgroup.com",;
      address:"364 E Main St STE 1008 Middletown DE 19709";
    }
  }
=======
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
    }  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
],