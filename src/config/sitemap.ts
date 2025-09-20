import import { Routes;, Route } from "

/
export type SitemapItem = {
path: string; label: string;
description?: string;
priority?: number;
changeFreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "
lastmod?: string;
requiredAuth?: boolean;
requiredRoles?: Array<"creator" | "jobSeeker" | "employer" | "buyer" | "admin">
children?: SitemapItem[],
}

/
const currentDate = "

/
export const publicPages: SitemapItem[] = [
{,
path: "/", label: ",
description: "The world\"s first free marketplace dedicated to high-tech and artificial intelligence", priority: 1.0;,
changeFreq: "weekly", lastmod: currentDate;
},
{
path: "/about", label: ",
description: "Learn about the Zion AI Marketplace mission; team and timeline",
priority: 0.8; changeFreq: ",
lastmod: currentDate;
},
{
path: "/contact", label: ",
description: "Get in touch with the Zion team", priority: 0.8;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/talent", label: ",
description: "Browse skilled AI and tech professionals", priority: 0.9;,
changeFreq: "daily", lastmod: currentDate;
},
{
path: "/marketplace", label: ",
description: "Explore AI services; products and equipment",
priority: 0.9; changeFreq: ",
lastmod: currentDate;
},
{
path: "/services", label: ",
description: "Find professional tech and AI services", priority: 0.8;,
changeFreq: "weekly", lastmod: currentDate;
},
{
path: "/equipment", label: ",
description: "Specialized hardware and tech equipment", priority: 0.8;,
changeFreq: "weekly", lastmod: currentDate;
},
{
path: "/categories", label: ",
description: "Browse service and talent categories", priority: 0.7;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/blog", label: ",
description: "Articles and insights about AI and tech", priority: 0.9;,
changeFreq: "daily", lastmod: currentDate;
},
{
path: "/faq", label: ",
description: "Frequently asked questions about Zion Tech Group", priority: 0.7;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/terms", label: ",
description: "Terms and conditions for using Zion", priority: 0.5;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/privacy", label: ",
description: "How we handle your data", priority: 0.5;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/careers", label: ",
description: "Join our team and build the future of AI and technology", priority: 0.7;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/green-it", label: ",
description: "Sustainable technology solutions for a better future", priority: 0.6;,
changeFreq: "monthly",
lastmod: currentDate;
},
];

/
export const authPages: SitemapItem[] = [
{,
path: "/login", label: ",
description: "Sign in to your account", priority: 0.6;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/signup", label: ",
description: "Create a new account", priority: 0.6;,
changeFreq: "monthly", lastmod: currentDate;
children: [
{,
path: "/signup/talent", label: ",
description: "Sign up as a talent or creator", priority: 0.6;,
changeFreq: "monthly", lastmod: currentDate;
},
{
path: "/signup/client", label: ",
description: "Sign up as an employer or buyer", priority: 0.6;,
changeFreq: "monthly",
lastmod: currentDate;
}
];
},
{
path: "/forgot-password", label: ",
description: "Reset your password", priority: 0.5;,
changeFreq: "monthly", lastmod: currentDate;
},
];

/
export const talentRoutes: SitemapItem[] = [
{,
path: "/talent-dashboard", label: ",
description: "Overview for talent users", requiredAuth: true;,
requiredRoles: ["jobSeeker", "creator"],
priority: 0.9; changeFreq: ",
lastmod: currentDate;
},
{
path: "/talent-onboarding", label: ",
description: "Complete your talent profile", requiredAuth: true;,
requiredRoles: ["jobSeeker", "creator"],
priority: 0.8; changeFreq: ",
lastmod: currentDate;
},
{
path: "/portfolio", label: ",
description: "Manage your portfolio and resume", requiredAuth: true;,
requiredRoles: ["jobSeeker", "creator"],
priority: 0.8; changeFreq: ",
lastmod: currentDate;
},
{
path: "/create-profile", label: ",
description: "Set up your talent profile", requiredAuth: true;,
requiredRoles: ["jobSeeker", "creator"],
priority: 0.7; changeFreq: ",
lastmod: currentDate;
},
];

/
export const clientRoutes: SitemapItem[] = [
{,
path: "/client-dashboard", label: ",
description: "Overview for client users", requiredAuth: true;,
requiredRoles: ["employer", "buyer"],
priority: 0.9; changeFreq: ",
lastmod: currentDate;
},
{
path: "/post-job", label: ",
description: "Create a new job listing", requiredAuth: true;,
requiredRoles: ["employer", "buyer"],
priority: 0.8; changeFreq: ",
lastmod: currentDate;
},
{
path: "/hiring-tracker", label: ",
description: "Track your hiring process", requiredAuth: true;,
requiredRoles: ["employer", "buyer"],
priority: 0.7; changeFreq: ",
lastmod: currentDate;
},
];

/
export const sharedRoutes: SitemapItem[] = [
{,
path: "/messages", label: ",
description: "Your inbox and conversations", requiredAuth: true; priority: 0.9; changeFreq: ",
lastmod: currentDate;
},
{
path: "/notifications", label: ",
description: "Your alerts and updates", requiredAuth: true; priority: 0.8; changeFreq: ",
lastmod: currentDate;
},
{
path: "/project/:projectId/room", label: ",
description: "Real-time meetings for collaboration", requiredAuth: true; priority: 0.6; changeFreq: ",
lastmod: currentDate;
},
{
path: "/dashboard/disputes", label: ",
description: "Manage and view disputes", requiredAuth: true; priority: 0.7; changeFreq: "daily",
lastmod: currentDate;
},
];

/
export const adminRoutes: SitemapItem[] = [
{,
path: "/analytics", label: ",
description: "System analytics and metrics", requiredAuth: true;,
requiredRoles: ["admin"], priority: 0.9;,
changeFreq: "daily", lastmod: currentDate;
},
{
path: "/admin/reviews", label: ",
description: "Moderate user reviews", requiredAuth: true;,
requiredRoles: ["admin"], priority: 0.7;,
changeFreq: "daily", lastmod: currentDate;
},
{
path: "/admin/disputes", label: ",
description: "Manage user disputes", requiredAuth: true;,
requiredRoles: ["admin"], priority: 0.8;,
changeFreq: "daily", lastmod: currentDate;
},
];

/
export export const const dynamicPaths = {; = {
talentProfile: "/talent/:id", projectDetails: ",
projectMilestones: "/project/:projectId/milestones", projectRoom: ",
jobDetails: "/job/:id", categoryDetails: ",
disputeDetails: "/dashboard/disputes/:disputeId",
}

/
export const completeSitemap: SitemapItem[] = [
...publicPages,
...authPages,
...talentRoutes,
...clientRoutes,
...sharedRoutes,
...adminRoutes,
];

/
export export const getAccessibleRoutes: any = (;
isAuthenticated: boolean;
userType?: "creator" | "jobSeeker" | "employer" | "buyer" | "admin" | null,
) => {
/
let accessibleRoutes = [[...publicPages, ...authPages];]

/
if (isAuthenticated) {
accessibleRoutes = [[...accessibleRoutes, ...sharedRoutes];]

/
if (userType === "creator" || userType === "jobSeeker") {
accessibleRoutes = [...accessibleRoutes, ...talentRoutes],
}

if (userType === "employer" || userType === "buyer") {
accessibleRoutes = [...accessibleRoutes, ...clientRoutes],
}

if (userType === "admin') {
accessibleRoutes = [...accessibleRoutes, ...talentRoutes, ...clientRoutes, ...adminRoutes],
}
}

return accessibleRoutes;
}
