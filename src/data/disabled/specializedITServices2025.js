export const SPECIALIZED_IT_SERVICES_2025 = [
    {
        id: "
        title: "
        description: "Comprehensive 5G enterprise networking solution that provides ultra-fast, low-latency connectivity with advanced network slicing, security, and management capabilities.",
        category: "
        subcategory: "
        price: 6500,
        currency: "
        pricingModel: "
        features: [
            "
            "Ultra-low latency connectivity",
            "Massive IoT device support",
            "Network function virtualization",
            "Advanced traffic management",
            "Real-time network analytics"
        ],
        benefits: [
            "
            "Support 100x more connected devices",
            "Improve network reliability by 99.9%",
            "Enable real-time applications",
            "Reduce infrastructure costs by 40%"
        ],
        useCases: [
            "
            "Autonomous vehicles",
            "Remote surgery",
            "Augmented reality",
            "Industrial automation"
        ],
        targetAudience: [
            "
            "Healthcare organizations",
            "Transportation companies",
            "Technology companies",
            "Government agencies"
        ],
        tags: ["5G", "Network Infrastructure", "IoT", "Low Latency", "Network Slicing"],
        estimatedDelivery: "
        supportLevel: "
        marketPrice: "$6,500 - $25,000/month",
        contactInfo: {
            phone: "
            email: "
            website: "https://ziontechgroup.com"}
        websiteUrl: "
        technologyStack: ["5G Core", "Network Slicing", "SDN", "NFV", "OpenStack", "Kubernetes"],
        roiMetrics: ["90% reduction in network latency", "40% infrastructure cost savings", "99.9% network reliability"]
    },
    {
        id: "
        title: "
        description: "Distributed edge computing platform that brings AI processing closer to data sources, enabling real-time AI applications with minimal latency and bandwidth requirements.",
        category: "
        subcategory: "
        price: 4200,
        currency: "
        pricingModel: "
        features: [
            "
            "Real-time model serving",
            "Edge device management",
            "Model optimization for edge",
            "Offline AI capabilities",
            "Federated learning support"
        ],
        benefits: [
            "
            "Cut bandwidth costs by 80%",
            "Enable offline AI operations",
            "Improve privacy and security",
            "Scale to millions of edge devices"
        ],
        useCases: [
            "
            "Smart cities",
            "Industrial IoT",
            "Retail analytics",
            "Healthcare monitoring"
        ],
        targetAudience: [
            "
            "City governments",
            "Manufacturing companies",
            "Retail chains",
            "Healthcare providers"
        ],
        tags: ["Edge Computing", "AI", "Machine Learning", "IoT", "Real-time Processing"],
        estimatedDelivery: "
        supportLevel: "
        marketPrice: "$4,200 - $15,000/month",
        contactInfo: {
            phone: "
            email: "
            website: "https://ziontechgroup.com"}
        websiteUrl: "
        technologyStack: ["TensorRT", "ONNX", "Docker", "Kubernetes", "Edge Devices", "5G Networks"],
        roiMetrics: ["95% latency reduction", "80% bandwidth cost savings", "Millions of edge devices supported"]
    }
];
export const getServicesByCategory = (category) => {
    return SPECIALIZED_IT_SERVICES_2025.filter(service => service.category === category)
}
export const getFeaturedServices = () => {
    return SPECIALIZED_IT_SERVICES_2025.filter(service => service.price >= 4000 || service.category === "Network Infrastructure")
}
