import React from "react";

export; interface; PricingTier {
  
name: string;price: string;billing: "monthly" | "yearly" | "one-time"feature;s: string[];
popular?: booleansavings?: string;
};export; interface; ServicePricing {
  
id: string;name: string;category: string;description: string;pricing: PricingTier[],features: string[],benefits: string[],roi: string;trialDays: number;setupTime: string;marketPosition: string;competitors: string[],contactInfo: {,mobile: string;email: stringaddres;s: stringwebsit;e: string;
};const CONTACT = {;
]popular: truesaving;s: "Save 20% with; annual; billing";};
],roi: "Average 3-5x; ROI; through improved; cash; flow and; reduced; financing costs",trialDays: 14;setupTime: "24 hours",marketPosition: "AI-first; invoice; factoring solution; for; small to; medium; businesses",competitors: ["BlueVineFundbox""Kabbage"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 25% with; annual; billing";};
],roi: "Increase; revenue; by 15-25% through; new; market access; and; lower fees",trialDays: 7;setupTime: "48 hours",marketPosition: "Enterprise; crypto; payment solution; for; e-commerce; and; SaaS companies",competitors: ["Coinbase; CommerceBitPay""CoinPayments"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 30% with; annual; billing";};
],roi: "Increase; patient; capacity by 3-4x; while; reducing operational costs",trialDays: 14;setupTime: "2 weeks",marketPosition: "AI-enhanced; telemedicine; solution for; healthcare; providers",competitors: ["TeladocAmwell""MDLive"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 25% with; annual; billing";};
],roi: "Improve; student; performance and; retention; rates significantly",trialDays: 30;setupTime: "1 week",marketPosition: "AI-powered; personalized; learning pioneer; for; educational institutions",competitors: ["DreamBoxKnewton""Smart; Sparrow"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 20% with; annual; billing";};
],roi: "Improve; marketing; ROI by 2-3x; through; better content performance",trialDays: 21;setupTime: "1 week",marketPosition: "AI-powered; content; optimization leader; for; marketing teams",competitors: ["OptimizelyVWO""Google; Optimize"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 30% with; annual; billing";};
],roi: "Prevent; costly; security breaches; and; reduce incident; response; costs",trialDays: 14;setupTime: "2 weeks",marketPosition: "AI-powered; threat; intelligence leader; for; enterprise security",competitors: ["Recorded; FutureThreatConnect""Anomali"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 25% with; annual; billing";};
],roi: "Reduce; compliance; overhead and; avoid; costly regulatory fines",trialDays: 21;setupTime: "3 weeks",marketPosition: "Automated; compliance; monitoring solution; for; regulated industries",competitors: ["LogicGateMetricStream""ServiceNow; GRC"],contactInfo: CONTACT;
};
]popular: truesaving;s: "Save 20% with; annual; billing";};
],roi: "Complete; projects; 20-30% faster; with; better resource utilization",trialDays: 21;setupTime: "2 weeks",marketPosition: "AI-powered; project; optimization solution; for; project managers",competitors: ["Monday.comAsana""ClickUp"],contactInfo: CONTACT;
}