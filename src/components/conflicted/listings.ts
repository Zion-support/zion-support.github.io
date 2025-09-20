import React from "react";

export interface ProductListing {id: string; title: string; description: string; category: string; price: number; currency: string; pricingModel: "one-time" | "subscription" | "usage-based" | "custom";
features: string[], tags: string[];
images?: string[];
rating?: number;
reviewCount?: number;,
availability: "immediate" | "within-week" | "within-month" | "custom";
deliveryTime?: string;,
supportLevel: "basic" | "standard" | "premium" | "enterprise";
compliance?: string[];
integrations?: string[];
documentation?: string;
demoUrl?: string;
website?: string;
contactEmail?: string;
contactPhone?: string;
location?: string;
company?: string;
author?: {,
name: string; id: string;
<<<<<<< HEAD
avatarUrl?: string;
=======
}
avatarUrl?: string;}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
email?: string};
createdAt: string; updatedAt: string;
featured?: boolean;
popular?: boolean;
new?: boolean;
aiScore?: number;
}