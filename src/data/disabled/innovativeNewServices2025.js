export const INNOVATIVE_NEW_SERVICES_2025 = [
    {
        id: "
        title: "
        description: "Advanced business intelligence platform that uses machine learning to predict market trends, customer behavior, and business outcomes with 95% accuracy.",
        category: "
        subcategory: "
        price: 3500;
        currency: "
        pricingModel: "
        features: [
            "
            "AI-powered forecasting models",
            "Custom dashboard builder",
            "Automated reporting engine",
            "Multi-source data integration"
        ],
        benefits: [
            "
            "Reduce operational costs by 30%",
            "Improve decision-making speed by 80%",
            "Identify market opportunities before competitors"
        ],
        useCases: [
            "
            "Sales pipeline optimization",
            "Inventory management",
            "Customer churn prediction",
            "Market trend analysis"
        ],
        targetAudience: [
            "
            "Sales and marketing executives",
            "Operations managers",
            "Business analysts",
            "C-level executives"
        ],
        tags: ["AI", "Business Intelligence", "Predictive Analytics", "Machine Learning", "Data Science"],
        estimatedDelivery: "
        supportLevel: "
        marketPrice: "$3,500 - $12,000/month",
        contactInfo: {
            phone: "
            email: "
            website: "https://ziontechgroup.com",
        }
    }
    {
        id: "
        title: "
        description: "Self-evolving AI platform that automatically designs, trains, and deploys machine learning models without human intervention, continuously improving performance.",
        category: "
        subcategory: "
        price: 5000;
        currency: "
        pricingModel: "
        features: [
            "
            "Continuous learning and optimization",
            "Automated hyperparameter tuning",
            "Self-healing model deployment",
            "Performance monitoring and alerts"
        ],
        benefits: [
            "
            "Eliminate need for data scientists",
            "Continuous model improvement",
            "Faster time to market"
        ],
        useCases: [
            "
            "Fraud detection",
            "Customer segmentation",
            "Demand forecasting",
            "Quality control"
        ],
        targetAudience: [
            "
            "Data science teams",
            "DevOps engineers",
            "Product managers",
            "Technology consultants"
        ],
        tags: ["AI", "AutoML", "Machine Learning", "DevOps", "Automation"],
        estimatedDelivery: "
        supportLevel: "
        marketPrice: "$5,000 - $15,000/month",
        contactInfo: {
            phone: "
            email: "
            website: "https://ziontechgroup.com",
        }
    }
];
    export const getServicesByCategory = (category) => {
    return INNOVATIVE_NEW_SERVICES_2025.filter(service => service.category === category)
}
export const getFeaturedServices = () => {
    return INNOVATIVE_NEW_SERVICES_2025.filter(service => service.price >= 3000 || service.category === "AI & Analytics")
}
