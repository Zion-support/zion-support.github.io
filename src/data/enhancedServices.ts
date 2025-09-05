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

export const SERVICE_CATEGORIES = [&quot;AI Automation
  &quot;Micro SaaS
  &quot;Web Development
  &quot;Mobile Apps
  &quot;Cloud Solutions
  &quot;Cybersecurity&quot;
];
