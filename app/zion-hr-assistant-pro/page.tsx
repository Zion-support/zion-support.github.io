const ZionHRAssistantPro = () => {
  const features = [
    {
      title: "AI-Powered Resume Screening",
      description: "Automatically screen and rank candidates with 95% accuracy using advanced NLP and machine learning",
      icon: <FileText className="w-6 h-6" />,
      benefit: "Save 80% screening time"
    },
    {
      title: "Intelligent Interview Scheduling",
      description: "Automatically coordinate interview times across multiple time zones and calendars",
      icon: <Clock className="w-6 h-6" />,
      benefit: "Zero scheduling conflicts"
    },
    {
      title: "Employee Performance Analytics",
      description: "Track and analyze employee performance with AI-driven insights and recommendations",
      icon: <TrendingUp className="w-6 h-6" />,
      benefit: "Data-driven HR decisions"
    },
    {
      title: "Automated Onboarding",
      description: "Streamline new employee onboarding with personalized workflows and task automation",
      icon: <Users className="w-6 h-6" />,
      benefit: "50% faster onboarding"
    },
    {
      title: "Smart Leave Management",
      description: "Intelligent leave balance tracking, approval workflows, and conflict resolution",
      icon: <Calendar className="w-6 h-6" />,
      benefit: "Automated compliance"
    },
    {
      title: "Employee Sentiment Analysis",
      description: "Monitor employee satisfaction and engagement through AI-powered sentiment analysis",
      icon: <Brain className="w-6 h-6" />,
      benefit: "Proactive engagement"
    }
  ];

  const pricingPlans = [
    {
      name: "Startup",
      price: "$149",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 25 employees",
        "Basic AI screening",
        "Interview scheduling",
        "Leave management",
        "Email support",
        "Mobile app access",
        "Basic analytics"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month",
      description: "Ideal for growing companies",
      features: [
        "Up to 100 employees",
        "Advanced AI screening",
        "Performance analytics",
        "Automated onboarding",
        "Priority support",
        "Custom workflows",
        "API integration",
        "Advanced reporting"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$799",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Premium AI features",
        "Custom AI training",
        "White-label options",
        "24/7 phone support",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security"
      ],
      popular: false;
    }
  ];

  const hrProcesses = [
    {
      title: "Recruitment & Hiring",
      description: "AI-powered candidate screening, interview scheduling, and talent pipeline management",
      icon: <Users className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Performance Management",
      description: "Continuous performance tracking, goal setting, and 360-degree feedback systems",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Employee Engagement",
      description: "Sentiment analysis, engagement surveys, and culture monitoring tools",
      icon: <Heart className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Compliance & Analytics",
      description: "Automated compliance tracking, reporting, and predictive analytics",
      icon: <Shield className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];
import { Helmet } from 'react-helmet-async';

export default function ZionHrAssistantProPage() {
}

}}