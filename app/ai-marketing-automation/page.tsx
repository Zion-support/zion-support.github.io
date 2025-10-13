import { Helmet } from 'react-helmet-async';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Share2 } from 'lucide-react';

export default function AIMarketingAutomation() {
import { Helmet } from 'react-helmet-async';
const benefits = [
    "Advanced AI algorithms for accurate predictions",
    "Real-time risk assessment and monitoring",
    "Automated report generation and insights",
    "Seamless integration with existing systems",
    "24/7 monitoring and alert system",
    "Scalable cloud-based infrastructure"
  ];
const features = [
    {
      title: "Predictive Analytics",
      description: "Advanced machine learning models for accurate financial forecasting",
      icon: "Brain"
    },
    {
      title: "Risk Assessment",
      description: "Comprehensive risk analysis and mitigation strategies",
      icon: "Shield"
    },
    {
      title: "Real-time Monitoring",
      description: "Continuous monitoring of financial metrics and KPIs",
      icon: "Activity"
    },
    {
      title: "Automated Reporting",
      description: "Generate detailed reports automatically",
      icon: "FileText"
    }
  ];
export default function Page() {
  const benefits = [
    "Benefit 1",
    "Benefit 2"
  ];
  const features = [
    {
      title: "Email Marketing Automation",
      description: "Intelligent email campaigns with personalized content, automated sequences, and advanced segmentation based on user behavior and preferences.",
      icon: <Mail className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      benefits: ["Personalized Content", "Behavioral Triggers", "A/B Testing", "Analytics Dashboard"]
    },
    {
      title: "Social Media Management",
      description: "Automated social media posting, content scheduling, and engagement tracking across all major platforms with AI-powered content optimization.",
      icon: <Share2 className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      benefits: ["Multi-platform Posting", "Content Optimization", "Engagement Tracking", "Hashtag Research"]
    },
    {
      title: "Lead Scoring & Nurturing",
      description: "AI-powered lead qualification and automated nurturing sequences that identify high-value prospects and guide them through the sales funnel.",
      icon: <Target className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      benefits: ["Lead Scoring", "Nurturing Sequences", "Behavioral Tracking", "Conversion Optimization"]
    },
    {
      title: "Campaign Analytics",
      description: "Comprehensive analytics and reporting with real-time insights, ROI tracking, and predictive analytics for campaign optimization.",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      benefits: ["Real-time Analytics", "ROI Tracking", "Predictive Insights", "Custom Reports"]
    },
    {
      title: "Customer Segmentation",
      description: "Advanced customer segmentation using AI to create highly targeted audiences based on demographics, behavior, and preferences.",
      icon: <Users className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      benefits: ["Dynamic Segmentation", "Behavioral Analysis", "Personalization", "Audience Insights"]
    },
    {
      title: "Workflow Automation",
      description: "Automated marketing workflows that trigger based on customer actions, ensuring timely and relevant communication throughout the customer journey.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      benefits: ["Trigger-based Actions", "Multi-channel Workflows", "Conditional Logic", "Performance Monitoring"]
    }
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses getting started with marketing automation",
      features: [
        "Up to 1,000 contacts",
        "Email automation",
        "Basic analytics",
        "Social media posting",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing businesses with advanced automation needs",
      features: [
        "Up to 10,000 contacts",
        "Advanced email automation",
        "Lead scoring",
        "A/B testing",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "Complete solution for large organizations with complex requirements",
      features: [
        "Unlimited contacts",
        "Custom workflows",
        "Advanced segmentation",
        "API access",
        "Custom integrations",
        "Dedicated support"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6">
            AI Marketing Automation
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
            Advanced AI-powered marketing automation solutions to streamline your campaigns and boost conversions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {marketingServices.map((service, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-colors">
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{service.title}</h3>
              </div>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <ul className="text-sm text-gray-400 space-y-1">
                {service.features.map((feature, idx) => (
                  <li key={idx}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}