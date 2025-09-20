import React from "

export interface InnovativeService2025 {
id: string;
title: string;
description: string;
category: string;
subcategory: string;
price: number;
currency: string;
pricingModel: string;
features: string[[];]
benefits: string[[];]
useCases: string[[];]
targetAudience: string[[];]
tags: string[[];]
estimatedDelivery: string;
supportLevel: string;
marketPrice: string;
contactInfo: {
phone: string;
email: string;,
website: string;,
}
}

export const INNOVATIVE_NEW_SERVICES_2025: InnovativeService2025[] = [
{
id: "
title: ",
description: "Advanced business intelligence platform that uses machine learning to predict market trends; customer behavior; and business outcomes with 95% accuracy.",
category: "
subcategory: "
price: 3500;
currency: "
pricingModel: ",
features: [
"
"AI-powered forecasting models",
"Custom dashboard builder",
"Automated reporting engine",
"
],
benefits: [
"
"Reduce operational costs by 30%",
"Improve decision-making speed by 80%",
"
],
useCases: [
"
"Sales pipeline optimization",
"Inventory management",
"Customer churn prediction",
"
],
targetAudience: [
"
"Sales and marketing executives",
"Operations managers",
"Business analysts",
"
],
tags: ["AI", "Business Intelligence", "Predictive Analytics", "Machine Learning", "Data Science"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$3;500 - $12;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
{
id: "
title: ",
description: "Self-evolving AI platform that automatically designs; trains; and deploys machine learning models without human intervention; continuously improving performance.",
category: "
subcategory: "
price: 5000;
currency: "
pricingModel: ",
features: [
"
"Continuous learning and optimization",
"Automated hyperparameter tuning",
"Self-healing model deployment",
"
],
benefits: [
"
"Eliminate need for data scientists",
"Continuous model improvement",
"
],
useCases: [
"
"Fraud detection",
"Customer segmentation",
"Demand forecasting",
"
],
targetAudience: [
"
"Data science teams",
"DevOps engineers",
"Product managers",
"
],
tags: ["AI", "AutoML", "Machine Learning", "DevOps", "Automation"],
estimatedDelivery: "
supportLevel: ",
marketPrice: "$5;000 - $15;000/month",
contactInfo: {
phone: "
email: ",
website: "https://ziontechgroup.com",
}
}
];
export export const getServicesByCategory: any = (category: string) => {;
return INNOVATIVE_NEW_SERVICES_2025.filter(service => service.category === category)
}

export const getFeaturedServices: any = () => {
return INNOVATIVE_NEW_SERVICES_2025.filter(service =>
service.price >= 3000 || service.category === "
)
}