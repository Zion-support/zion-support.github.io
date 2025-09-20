import React from "react";

// Interface definitions;
export interface ServiceContact {phone: string; email: string; website: string; address: string}
roi: string; setupTime: string; integrations: string[];
}
}
freeTier: boolean; trialPeriod: string}
accuracy: string; trainingData: string; compliance: string[];
}
}
freeTier: false; trialPeriod: "7 days"
};
{id: 2; name: "Decentralized Identity Platform";
category: "Identity Management", pricing: "Professional";
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$249-799/month";
freeTier: true; trialPeriod: "14 days"
}
responseTime: "30 minutes", sla: "99.99% uptime";
deliveryTime: "12-16 weeks", support: "Business hours"
}
responseTime: "6 hours", sla: "99.5% uptime";
certifications: ["AWS", "Azure", "GCP", "Kubernetes", "Docker"],
deliveryTime: "6-8 weeks", support: "Business hours"
}
freeTier: false; trialPeriod: "30 days"
}
freeTier: false; trialPeriod: "30 days"
}
address: "364 E Main St STE 1008 Middletown DE 19709"}, marketPrice: "$299-999/month";
freeTier: true; trialPeriod: "21 days"
}
freeTier: false; trialPeriod: "21 days"
}
if ("hourlyRate" in service) {return service.hourlyRate >= minPrice && service.hourlyRate <= maxPrice}