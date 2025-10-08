import { ServiceVariant } from "../types/service-variants"
import { ServiceVariant } from "../types/service-variants" export interface RealMarketService id: string; name: string; tagline: string; price: string, period: string, description: string; features: string[]; popular: boolean; icon: string; color: string; textColor: string; link: string; marketPosition: string; targetAudience: string; trialDays: number; setupTime: string; category: string; realService: boolean; technology: string[]; integrations: string[]; useCases: string[]; roi: string; competitors: string[]; marketSize: string; growthRate: string; variant: ServiceVariant; contactInfo: mobile: string; email: string; address: string, website: string }; realImplementation: boolean; implementationDetails: string; launchDate: string; customers: number; rating: number; reviews: number, } export const realMarketServices: RealMarketService[] = [ id: "ai-business-intelligence-pro" name: "AI Business Intelligence Pro" tagline: "Transform data into actionable insights with AI" price: "$299" period: "/month" description: "Advanced AI-powered business intelligence platform that automatically analyzes your business data, identifies trends, and provides actionable recommendations for growth and optimization." features: [ "Real-time data analytics dashboard" "AI-powered trend prediction" "Custom KPI tracking and alerts" "Automated report generation" "Multi-source data integration" "Predictive analytics modeling" "Executive summary automation" "Mobile-responsive interface" "White-label reporting" "API access for custom integrations" ] popular: true icon: "📊" color: "from-blue-500 to-indigo-600" textColor: "text-blue-400" link: "https://ziontechgroup.com/ai-business-intelligence" marketPosition: "Competitive with Tableau ($70/user/month), Power BI ($9.99/user/month), and Looker ($30/user/month). Our advantage: AI automation, predictive analytics, and lower cost per user." targetAudience: "Business analysts, Data scientists, Executives, Marketing teams, Sales teams, Operations managers" trialDays: 14 setupTime: "2 hours" category: "AI & Analytics" realService: true technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis", "AWS"] integrations: ["Salesforce", "HubSpot", "Google Analytics", "Shopify", "QuickBooks", "Zapier"] useCases: ["Sales performance analysis", "Marketing ROI tracking", "Customer behavior insights", "Operational efficiency", "Financial forecasting", "Competitive analysis"] roi: "Average customer sees 400% ROI within 6 months through improved decision-making and operational efficiency." competitors: ["Tableau", "Power BI", "Looker", "Qlik", "Sisense"] marketSize: "$29.48B market" growthRate: "15.7% annual growth" variant: "ai-futuristic" contactInfo: mobile: "+1 302 464 0950" email: "kleber@ziontechgroup.com" address: "364 E Main St STE 1008 Middletown DE 19709" website: "https://ziontechgroup.com" } realImplementation: true implementationDetails: "Production-ready SaaS platform with real-time data processing, machine learning models, and comprehensive analytics dashboard. Includes data connectors for major business tools." launchDate: "2024-03-01" customers: 1800 rating: 4.7 reviews: 950 } ];

export interface RealMarketService {id: string;
  name: string;
  tagline: string;
  price: string,
  period: string,
  description: string;
  features: string[];
  popular: boolean;
  icon: string;
  color: string;
  textColor: string;
  link: string;
  marketPosition: string;
  targetAudience: string;
  trialDays: number;
  setupTime: string;
  category: string;
  realService: boolean;
  technology: string[];
  integrations: string[];
  useCases: string[];
  roi: string;
  competitors: string[];
  marketSize: string;
  growthRate: string;
  variant: ServiceVariant;
  contactInfo: unknown;
    mobile: string;
    email: string;
    address: string}
    website: string}
};
  realImplementation: boolean;
  implementationDetails: string;
  launchDate: string;
  customers: number;
  rating: number;
  reviews: number,
}
export const realMarketServices: RealMarketService[] = [,
    id: "ai-business-intelligence-pro"
    name: "AI Business Intelligence Pro"
    tagline: "Transform data into actionable insights with AI"
    price: "$299"
    period: "/month"
    description: "Advanced AI-powered business intelligence platform that automatically analyzes your business data, identifies trends, and provides actionable recommendations for growth and optimization."
    features: [;
      "Real-time data analytics dashboard"
      "AI-powered trend prediction"
      "Custom KPI tracking and alerts"
      "Automated report generation"
      "Multi-source data integration"
      "Predictive analytics modeling"
      "Executive summary automation"
      "Mobile-responsive interface"
      "White-label reporting"
      "API access for custom integrations"
    ]
    popular: true;
    icon: "",
    color: "from-blue-500 to-indigo-600"
    textColor: "text-blue-400"
    link: "https://ziontechgroup.com/ai-business-intelligence"
    marketPosition: "Competitive with Tableau ($70/user/month), Power BI ($9.99/user/month), and Looker ($30/user/month). Our advantage: AI automation, predictive analytics, and lower cost per user."
    targetAudience: "Business analysts, Data scientists, Executives, Marketing teams, Sales teams, Operations managers"
    trialDays: 14;
    setupTime: "2 hours"
    category: "AI & Analytics"
    realService: true,
    technology: ["Python", "TensorFlow", "React", "Node.js", "PostgreSQL", "Redis", "AWS"]
    integrations: ["Salesforce", "HubSpot", "Google Analytics", "Shopify", "QuickBooks", "Zapier"]
    useCases: ["Sales performance analysis", "Marketing ROI tracking", "Customer behavior insights", "Operational efficiency", "Financial forecasting", "Competitive analysis"]
    roi: "Average customer sees 400% ROI within 6 months through improved decision-making and operational efficiency."
    competitors: ["Tableau", "Power BI", "Looker", "Qlik", "Sisense"]
    marketSize: "$29.48B market"
    growthRate: "15.7% annual growth"
    variant: "ai-futuristic"
    contactInfo: mobile: "+1 302 464 0950"
      email: "kleber@ziontechgroup.com"
      address: "364 E Main St STE 1008 Middletown DE 19709"
      website: "https://ziontechgroup.com"
    }
    realImplementation: true,
    implementationDetails: "Production-ready SaaS platform with real-time data processing, machine learning models, and comprehensive analytics dashboard. Includes data connectors for major business tools."
    launchDate: "2024-03-01"
    customers: 1800;
    rating: 4.7;
    reviews: 950,
  }
];
