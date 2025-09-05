<<<<<<< HEAD
export interface QuantumSpaceService {;
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
export const quantumSpaceServices:QuantumSpaceService[] = [;
  {;
    id:"quantum-computing-platform",;
    name:"Quantum Computing Platform",;
    tagline:"Next-generation quantum computing solutions",;
    price:"$199/month",;
    description:"Advanced quantum computing platform for complex calculations and simulations.",;
    features:[;
      "Quantum algorithms",;
      "Simulation tools",;
      "API access",;
      "Documentation",;
      "Support services";
    ],;
    link:"/services/quantum-computing-platform",;
    category:"Quantum Computing",;
    realImplementation:true,;
    contactInfo:{;
      mobile:"+1 302 464 0950",;
      email:"kleber@ziontechgroup.com",;
      address:"364 E Main St STE 1008 Middletown DE 19709";
    }
  }
=======
export interface QuantumSpaceService {
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

export const quantumSpaceServices: QuantumSpaceService[] = [
  {
    id: &quot;quantum-computing-platform&quot;,
    name: &quot;Quantum Computing Platform&quot;,
    tagline: &quot;Next-generation quantum computing solutions&quot;,
    price: &quot;$199/month&quot;,
    description: &quot;Advanced quantum computing platform for complex calculations and simulations.&quot;,
    features: [
      &quot;Quantum algorithms&quot;,
      &quot;Simulation tools&quot;,
      &quot;API access&quot;,
      &quot;Documentation&quot;,
      &quot;Support services&quot;
    ],
    link: &quot;/services/quantum-computing-platform&quot;,
    category: &quot;Quantum Computing&quot;,
    realImplementation: true,
    contactInfo: {
      mobile: &quot;+1 302 464 0950&quot;,
      email: &quot;kleber@ziontechgroup.com&quot;,
      address: &quot;364 E Main St STE 1008 Middletown DE 19709&quot;
    }  }
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
],