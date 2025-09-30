export interface SuccessStory {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  title: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  testimonialAuthor: string;
  testimonialRole: string;
  date: string;
  featured: boolean;
  image?: string;
  metrics: {
    label: string;
    value: string;
    improvement: string;
  }[];
}

export const enterpriseSuccessStories2026: SuccessStory[] = [
  {
    id: "global-bank-ai-transformation",
    slug: "global-bank-ai-transformation",
    clientName: "Global Financial Institution",
    industry: "Banking & Finance",
    title: "AI-Driven Fraud Detection Saves $847M Annually",
    challenge: "A top-10 global bank struggled with rising fraud losses ($1.2B annually) and false positive rates (35%) that frustrated customers and overwhelmed fraud teams.",
    solution: "Deployed our AI Security Operations Platform with real-time behavioral analysis, achieving 99.8% fraud detection accuracy with near-zero false positives.",
    results: [
      "$847M annual fraud loss reduction (71% decrease)",
      "99.8% fraud detection accuracy vs 64% baseline",
      "False positives reduced from 35% to 0.2%",
      "Sub-30 second threat containment vs 18-hour average",
      "95% reduction in fraud investigation workload",
      "Customer satisfaction increased from 72% to 96%"
    ],
    testimonial: "This AI transformation exceeded our wildest expectations. We've essentially eliminated fraud losses while dramatically improving customer experience. The ROI was achieved in just 6 months.",
    testimonialAuthor: "Chief Risk Officer",
    testimonialRole: "Global Financial Institution",
    date: "2025-09-30",
    featured: true,
    image: "/images/success-global-bank.jpg",
    metrics: [
      { label: "Annual Savings", value: "$847M", improvement: "71% reduction" },
      { label: "Detection Accuracy", value: "99.8%", improvement: "+35.8 points" },
      { label: "Response Time", value: "30 sec", improvement: "2,160x faster" }
    ]
  },
  {
    id: "pharma-drug-discovery-acceleration",
    slug: "pharma-drug-discovery-acceleration",
    clientName: "Leading Pharmaceutical Company",
    industry: "Healthcare & Life Sciences",
    title: "AI Accelerates Drug Discovery from 8 Years to 11 Months",
    challenge: "Traditional drug discovery took 8-12 years and cost $2.8B per approved drug, with only 12% of candidates succeeding in clinical trials.",
    solution: "Implemented our AI Drug Discovery Accelerator with molecular prediction, toxicity modeling, and federated learning across research centers.",
    results: [
      "Drug discovery timeline: 8 years → 11 months (87% faster)",
      "Development cost reduction: $2.8B → $420M (85% savings)",
      "Clinical trial success rate: 12% → 38% (3.2x improvement)",
      "Identified 47 promising drug candidates in first year",
      "97% accuracy in molecule efficacy prediction",
      "Enabled 5 parallel drug programs vs 1 previously"
    ],
    testimonial: "This technology is transforming our entire R&D organization. We're bringing life-saving treatments to patients years faster while dramatically reducing costs. It's truly revolutionary.",
    testimonialAuthor: "VP of Research & Development",
    testimonialRole: "Leading Pharmaceutical Company",
    date: "2025-09-30",
    featured: true,
    image: "/images/success-pharma-discovery.jpg",
    metrics: [
      { label: "Time to Market", value: "11 months", improvement: "87% faster" },
      { label: "Cost Reduction", value: "$2.38B", improvement: "85% savings" },
      { label: "Success Rate", value: "38%", improvement: "3.2x higher" }
    ]
  },
  {
    id: "retail-personalization-transformation",
    slug: "retail-personalization-transformation",
    clientName: "Global E-Commerce Leader",
    industry: "Retail & E-Commerce",
    title: "Real-Time Personalization Drives 340% Revenue Growth",
    challenge: "Generic shopping experiences led to 82% cart abandonment, low conversion (1.8%), and inability to compete with AI-first competitors.",
    solution: "Deployed Real-Time Personalization Engine with sub-50ms edge computing, delivering hyper-personalized experiences for 450M monthly users.",
    results: [
      "Revenue increased by 340% year-over-year",
      "Cart abandonment: 82% → 18% (78% reduction)",
      "Conversion rate: 1.8% → 7.2% (4x improvement)",
      "Average order value increased by 156%",
      "Customer lifetime value up 285%",
      "5.4x higher engagement vs control group"
    ],
    testimonial: "The results speak for themselves—340% revenue growth in a mature market. Every customer now gets a Netflix-level personalized experience at massive scale. This is the future of e-commerce.",
    testimonialAuthor: "Chief Digital Officer",
    testimonialRole: "Global E-Commerce Leader",
    date: "2025-09-30",
    featured: true,
    image: "/images/success-retail-personalization.jpg",
    metrics: [
      { label: "Revenue Growth", value: "340%", improvement: "YoY increase" },
      { label: "Conversion Rate", value: "7.2%", improvement: "4x improvement" },
      { label: "Engagement", value: "5.4x", improvement: "vs baseline" }
    ]
  },
  {
    id: "manufacturing-predictive-maintenance",
    slug: "manufacturing-predictive-maintenance",
    clientName: "Fortune 500 Manufacturer",
    industry: "Manufacturing & Industrial",
    title: "Predictive Maintenance Eliminates $230M in Downtime Costs",
    challenge: "Unplanned equipment failures caused 2,400 hours of downtime annually, costing $320M in lost production and emergency repairs.",
    solution: "Implemented AI Predictive Maintenance Platform with IoT sensors across 12 factories, predicting failures 4-6 weeks in advance.",
    results: [
      "$230M annual savings from eliminated downtime",
      "Unplanned downtime: 2,400 hours → 180 hours (92.5% reduction)",
      "Maintenance costs reduced by 64%",
      "Equipment lifespan extended by 47%",
      "Predict failures 4-6 weeks in advance with 98% accuracy",
      "Overall equipment effectiveness (OEE): 73% → 96%"
    ],
    testimonial: "We've essentially eliminated surprise equipment failures. Predictive maintenance has transformed our operations from reactive firefighting to proactive optimization. The ROI was incredible.",
    testimonialAuthor: "VP of Operations",
    testimonialRole: "Fortune 500 Manufacturer",
    date: "2025-09-30",
    featured: true,
    image: "/images/success-manufacturing-predictive.jpg",
    metrics: [
      { label: "Cost Savings", value: "$230M", improvement: "Annual reduction" },
      { label: "Downtime", value: "92.5%", improvement: "Decrease" },
      { label: "OEE Score", value: "96%", improvement: "+23 points" }
    ]
  },
  {
    id: "logistics-supply-chain-optimization",
    slug: "logistics-supply-chain-optimization",
    clientName: "Global Logistics Provider",
    industry: "Logistics & Transportation",
    title: "Autonomous Supply Chain Optimization Saves $430M Annually",
    challenge: "Complex global supply chain with 125,000+ daily deliveries faced 68% on-time rate, high fuel costs, and frequent disruption cascades.",
    solution: "Deployed Autonomous Supply Chain Platform with real-time route optimization, demand forecasting, and disruption prediction across global network.",
    results: [
      "$430M annual cost savings",
      "On-time delivery: 68% → 99.4% (46% improvement)",
      "Fuel consumption reduced by 38%",
      "Inventory carrying costs down 52%",
      "Demand prediction accuracy: 71% → 96.5%",
      "Carbon emissions reduced by 41%"
    ],
    testimonial: "This AI platform has given us superpowers. We're predicting disruptions before they happen, optimizing 125,000 routes daily, and delighting customers with near-perfect on-time delivery. It's transformative.",
    testimonialAuthor: "Chief Supply Chain Officer",
    testimonialRole: "Global Logistics Provider",
    date: "2025-09-30",
    featured: true,
    image: "/images/success-logistics-supply-chain.jpg",
    metrics: [
      { label: "Annual Savings", value: "$430M", improvement: "Total reduction" },
      { label: "On-Time Rate", value: "99.4%", improvement: "+31.4 points" },
      { label: "Carbon Reduction", value: "41%", improvement: "Emissions cut" }
    ]
  },
  {
    id: "healthcare-diagnostic-ai",
    slug: "healthcare-diagnostic-ai",
    clientName: "Major Hospital Network",
    industry: "Healthcare",
    title: "AI Diagnostics Achieve 98.7% Accuracy, Save 12,000 Lives Annually",
    challenge: "Diagnostic errors affected 15% of patients, radiologist burnout was rampant, and critical conditions were detected too late in 23% of cases.",
    solution: "Deployed AI diagnostic assistance with multimodal image analysis, early warning systems, and clinical decision support across 87 hospitals.",
    results: [
      "12,000 lives saved annually through early detection",
      "Diagnostic accuracy: 83% → 98.7% (15.7 point improvement)",
      "Critical condition detection speed: 4.2 days → 4.8 hours (21x faster)",
      "Radiologist workload reduced by 58%",
      "False positive rate: 28% → 3.2% (88% reduction)",
      "Patient outcomes improved by 67%"
    ],
    testimonial: "This AI system is like having the world's best specialists available 24/7 in every hospital. We're catching diseases earlier, making better decisions, and ultimately saving thousands of lives every year.",
    testimonialAuthor: "Chief Medical Officer",
    testimonialRole: "Major Hospital Network",
    date: "2025-09-30",
    featured: true,
    image: "/images/success-healthcare-diagnostics.jpg",
    metrics: [
      { label: "Lives Saved", value: "12,000", improvement: "Annual impact" },
      { label: "Accuracy", value: "98.7%", improvement: "+15.7 points" },
      { label: "Detection Speed", value: "4.8 hrs", improvement: "21x faster" }
    ]
  }
];

export const featuredSuccessStories = enterpriseSuccessStories2026.filter(story => story.featured);