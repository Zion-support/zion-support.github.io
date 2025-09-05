<<<<<<< HEAD
export interface EnterpriseItService {;
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
export const enterpriseITServices:EnterpriseItService[] = [;
  {;
    id:"enterprise-architecture",;
    name:"Enterprise Architecture Consulting",;
    tagline:"Strategic IT architecture for large organizations",;
    price:"$150/hour",;
    description:"Comprehensive enterprise architecture consulting services for digital transformation.",;
    features:[;
      "Architecture assessment",;
      "Technology roadmap",;
      "Integration strategy",;
      "Governance framework",;
      "Implementation support";
    ],;
    link:"/services/enterprise-architecture",;
    category:"Enterprise IT",;
    realImplementation:true,;
    contactInfo:{;
      mobile:"+1 302 464 0950",;
      email:"kleber@ziontechgroup.com",;
      address:"364 E Main St STE 1008 Middletown DE 19709";
    }
  }
=======
export interface EnterpriseItService {
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

export const enterpriseITServices: EnterpriseItService[] = [
  {
    id: &quot;enterprise-architecture&quot;,
    name: &quot;Enterprise Architecture Consulting&quot;,
    tagline: &quot;Strategic IT architecture for large organizations&quot;,
    price: &quot;$150/hour&quot;,
    description: &quot;Comprehensive enterprise architecture consulting services for digital transformation.&quot;,
    features: [
      &quot;Architecture assessment&quot;,
      &quot;Technology roadmap&quot;,
      &quot;Integration strategy&quot;,
      &quot;Governance framework&quot;,
      &quot;Implementation support&quot;
    ],
    link: &quot;/services/enterprise-architecture&quot;,
    category: &quot;Enterprise IT&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
],