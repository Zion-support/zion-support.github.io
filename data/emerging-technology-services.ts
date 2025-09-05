<<<<<<< HEAD
export interface EmergingTechnologyService {;
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
export const emergingTechnologyServices:EmergingTechnologyService[] = [;
  {;
    id:"blockchain-platform",;
    name:"Blockchain Development Platform",;
    tagline:"Build and deploy blockchain applications",;
    price:"$179/month",;
    description:"Comprehensive blockchain development platform for creating decentralized applications.",;
    features:[;
      "Smart contract development",;
      "DApp deployment",;
      "Blockchain integration",;
      "Security auditing",;
      "Performance monitoring";
    ],;
    link:"/services/blockchain-platform",;
    category:"Emerging Tech",;
    realImplementation:true,;
    contactInfo:{;
      mobile:"+1 302 464 0950",;
      email:"kleber@ziontechgroup.com",;
      address:"364 E Main St STE 1008 Middletown DE 19709";
    }
  }
=======
export interface EmergingTechnologyService {
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

export const emergingTechnologyServices: EmergingTechnologyService[] = [
  {
    id: &quot;blockchain-platform&quot;,
    name: &quot;Blockchain Development Platform&quot;,
    tagline: &quot;Build and deploy blockchain applications&quot;,
    price: &quot;$179/month&quot;,
    description: &quot;Comprehensive blockchain development platform for creating decentralized applications.&quot;,
    features: [
      &quot;Smart contract development&quot;,
      &quot;DApp deployment&quot;,
      &quot;Blockchain integration&quot;,
      &quot;Security auditing&quot;,
      &quot;Performance monitoring&quot;
    ],
    link: &quot;/services/blockchain-platform&quot;,
    category: &quot;Emerging Tech&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
],