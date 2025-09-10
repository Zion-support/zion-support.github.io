export interface ProductListing {
  &quot;id&quot;: string;
  title: string;
  description: string;
  category: string;
  price: number;
  currency: string;
  tags: string[];
  author: {
    name: string;
    id: string;
  };
  &quot;rating&quot;: number;
  reviews: number;
  deliveryTime: string;
  features: string[];
  image?: string;
}
    price: 2999,
    currency: "$",
    tags: ["Process Automation", "RPA", "Workflow Optimization", "AI"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group"
    },
    rating: 4.8,
    reviews: 156,
    deliveryTime: "2-4 weeks",
    features: [
      "AI-powered process mapping",
      "RPA integration",
      "Analytics dashboard",
      "Custom workflow automation",
      "Multi-platform support"
    ]
  },
  {
export const &quot;ENHANCED_SERVICES&quot;: ProductListing[] = [{
    id: &quot;ai-automation-suite
    &quot;title&quot;: &quot;AI Process Automation Suite
    &quot;description&quot;: &quot;Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.
    &quot;category&quot;: &quot;AI Automation
    &quot;price&quot;: 2999,
    &quot;currency&quot;: &quot;$
    &quot;tags&quot;: [&quot;Process Automation &quot;RPA &quot;Workflow Optimization &quot;AI&quot;],
    &quot;author&quot;: {
      name: &quot;Zion Tech Group
      &quot;id&quot;: &quot;zion-tech-group&quot;
export const "ENHANCED_SERVICES": ProductListing[] = [{
    id: "ai-automation-suite
    "title": "AI Process Automation Suite
    "description": "Complete workflow automation solution using AI to streamline business processes, reduce manual tasks by 80%, and increase operational efficiency. Includes process mapping, RPA integration, and analytics dashboard.
    "category": "AI Automation
    "price": 2999,
    "currency": "$
    "tags": ["Process Automation "RPA "Workflow Optimization "AI"],
    "author": {
      name: "Zion Tech Group
      "id": "zion-tech-group"
    },
    &quot;rating&quot;: 4.8,
    &quot;reviews&quot;: 156,
    &quot;deliveryTime&quot;: &quot;2-4 weeks
    &quot;features&quot;: [&quot;AI-powered process mapping
      &quot;RPA integration
      &quot;Analytics dashboard
      &quot;Custom workflow automation
      &quot;Multi-platform support&quot;
    ]
<<<<<<< HEAD
  },
=======
  },
  {
    &quot;id&quot;: &quot;micro-saas-platform
    &quot;title&quot;: &quot;Micro SaaS Platform
    &quot;description&quot;: &quot;Complete micro SaaS platform with user management, billing, analytics, and deployment. Perfect for launching your SaaS product quickly.
    &quot;category&quot;: &quot;Micro SaaS
    &quot;price&quot;: 4999,
    &quot;currency&quot;: &quot;$
    &quot;tags&quot;: [&quot;SaaS &quot;Platform &quot;Billing &quot;Analytics&quot;],
    &quot;author&quot;: {
      name: &quot;Zion Tech Group
      &quot;id&quot;: &quot;zion-tech-group&quot;
    },
<<<<<<< HEAD
    &quot;rating&quot;: 4.9,
    &quot;reviews&quot;: 89,
    &quot;deliveryTime&quot;: &quot;4-6 weeks
    &quot;features&quot;: [&quot;User authentication
      &quot;Subscription billing
      &quot;Analytics dashboard
      &quot;API management
      &quot;Multi-tenant architecture&quot;
    ]
  };
];
export const SERVICE_CATEGORIES = ["AI Automation
  "Micro SaaS
  "Web Development
  "Mobile Apps
  "Cloud Solutions
  "Cybersecurity"
];
    id: "micro-saas-platform",
    title: "Micro SaaS Platform",
    description: "Complete micro SaaS platform with user management, billing, analytics, and deployment. Perfect for launching your SaaS product quickly.",
    category: "Micro SaaS",
    price: 4999,
    currency: "$",
    tags: ["SaaS", "Platform", "Billing", "Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group"
    },
    rating: 4.9,
    reviews: 89,
    deliveryTime: "4-6 weeks",
    features: [
      "User authentication",
      "Subscription billing",
      "Analytics dashboard",
      "API management",
      "Multi-tenant architecture"
    ]
  }
=======
    images: ["https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-01-30T11:45:00.000Z",
    rating: 4.9,
    reviewCount: 78,
    featured: true,
    location: "Global",
    availability: "3-4 Weeks",
    aiScore: 94
  },
  {
    id: "edge-computing-solution",
    title: "Edge Computing Infrastructure Solution",
    description: "Distributed edge computing platform for IoT devices, reducing latency and bandwidth costs. Includes edge node management, data processing, and real-time analytics capabilities.",
    category: "Edge Computing",
    price: 5999,
    currency: "$",
    tags: ["Edge Computing", "IoT", "Low Latency", "Real-time Analytics"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: ["https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500"],
    createdAt: "2024-02-05T08:20:00.000Z",
    rating: 4.8,
    reviewCount: 12,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },

  // Additional modern services (new)
  {
    id: "mlops-platform",
    title: "Managed MLOps Platform",
    description: "End-to-end model lifecycle management with CI/CD for ML, feature store, model registry, automated evaluations, and safe rollout.",
    category: "AI Platform",
    price: 7999,
    currency: "$",
    tags: ["MLOps", "Model Registry", "Feature Store", "CI/CD"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-05T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 64,
    featured: false,
    location: "Global",
    availability: "4-6 Weeks",
    aiScore: 94
  },
  {
    id: "finops-cost-optimization",
    title: "Cloud FinOps Cost Optimization",
    description: "Data-driven cloud spend optimization across AWS, Azure, and GCP with continuous rightsizing, commitment planning, and anomaly detection.",
    category: "Cloud Management",
    price: 2499,
    currency: "$",
    tags: ["FinOps", "Cost Optimization", "AWS", "Azure", "GCP"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1508711043292-8f5023f1c3d9?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-12T09:30:00.000Z",
    rating: 4.7,
    reviewCount: 102,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 88
  },
  {
    id: "soc2-compliance-automation",
    title: "SOC 2 Compliance Automation",
    description: "Automated evidence collection, control monitoring, policy management, and audit readiness with mapped tasks and dashboards.",
    category: "Security & Compliance",
    price: 3999,
    currency: "$",
    tags: ["SOC 2", "Compliance", "Audit", "GRC"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-18T11:00:00.000Z",
    rating: 4.9,
    reviewCount: 41,
    featured: true,
    location: "Global",
    availability: "3-5 Weeks",
    aiScore: 90
  },
  {
    id: "ai-sales-sdr",
    title: "AI Sales SDR Automation",
    description: "Outbound research, personalized messaging, meeting scheduling, and CRM updates driven by AI agents with human-in-the-loop.",
    category: "Sales Automation",
    price: 1299,
    currency: "$",
    tags: ["SDR", "Outreach", "Personalization", "CRM"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-03-25T14:15:00.000Z",
    rating: 4.6,
    reviewCount: 78,
    location: "Global",
    availability: "1-2 Weeks",
    aiScore: 87
  },

  // Advanced AI & Machine Learning Services
  {
    id: "ai-video-generation",
    title: "AI Video Generation & Editing Suite",
    description: "Professional AI-powered video creation platform with automated editing, scene generation, and content optimization. Includes voice synthesis, background music, and multi-format export capabilities.",
    category: "AI & Machine Learning",
    price: 3999,
    currency: "$",
    tags: ["Video Generation", "AI Editing", "Content Creation", "Automation"],
    author: {
      name: "Zion Tech Group",
      id: "zion-tech-group",
      email: "kleber@ziontechgroup.com"
    },
    images: [
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&h=500"
    ],
    createdAt: "2024-04-01T10:00:00.000Z",
    rating: 4.8,
    reviewCount: 56,
    featured: false,
    location: "Global",
    availability: "2-3 Weeks",
    aiScore: 92
  },

  // Additional services can be added here...
>>>>>>> origin/backup-improvements-20250827-015311
];

export const SERVICE_CATEGORIES = [
  "AI Automation",
  "Micro SaaS",
  "Web Development",
  "Mobile Apps",
  "Cloud Solutions",
  "Cybersecurity"
];
    );"}"
>>>>>>> 51ecdee898e0f4ef436b73e6c8197c3d4a98485c
