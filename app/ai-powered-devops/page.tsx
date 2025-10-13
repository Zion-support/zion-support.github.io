import { Helmet } from "react-helmet-async";
import { Helmet } from 'react-helmet-async';
import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Rocket } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Plus } from 'lucide-react';
import { Cloud } from 'lucide-react';

export default function AIPoweredDevOpsPage() {
  const testimonials = [
    { name: "John Doe", role: "CEO", company: "Tech Corp", content: "Great service!", rating: 5, avatar: "/api/placeholder/64/64" }
  ];
  const features = [
    "Automated CI/CD Pipeline Setup",
    "Intelligent Monitoring & Alerting",
    "Auto-scaling Infrastructure",
    "Security Vulnerability Scanning",
    "Performance Optimization",
    "Cost Optimization"
  ];

  const capabilities = [
    "Automated CI/CD pipeline setup",
    "Intelligent monitoring and alerting",
    "Auto-scaling infrastructure management",
    "Security vulnerability scanning",
    "Performance optimization",
    "Cost optimization recommendations"
  ];
  
  const pricingPlans = [
    {
      name: "Startup",
      price: "$499",
      period: "/month",
      description: "Perfect for small development teams and startups",
      features: [
        "Up to 10 applications",
        "Basic AI automation",
        "Standard monitoring",
        "Email support",
        "Basic reporting",
        "5 team members",
        "Cloud deployment only"
      ],
      popular: false;
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Ideal for growing companies and development teams",
      features: [
        "Up to 100 applications",
        "Advanced AI automation",
        "Comprehensive monitoring",
        "Priority support",
        "Advanced analytics",
        "25 team members",
        "Multi-cloud deployment",
        "API access",
        "Custom integrations",
        "24/7 monitoring"
      ],
      popular: true;
    },
    {
      name: "Enterprise Plus",
      price: "$4,999",
      period: "/month",
      description: "For large organizations with complex DevOps needs",
      features: [
        "Unlimited applications",
        "Full AI automation suite",
        "Enterprise monitoring",
        "24/7 dedicated support",
        "Custom analytics",
        "Unlimited team members",
        "Hybrid cloud deployment",
        "Advanced API access",
        "Custom AI model training",
        "Dedicated DevOps engineers",
        "White-label solution",
        "On-premise deployment"
      ],
      popular: false;
    }
  ];

  const capabilities = [
    {
      title: "Automated Testing",
      description: "AI generates and executes comprehensive test suites automatically",
      icon: <CheckCircle className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Smart Deployment",
      description: "Intelligent deployment strategies with automatic rollback capabilities",
      icon: <Rocket className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Predictive Scaling",
      description: "AI predicts traffic patterns and scales infrastructure proactively",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Intelligent Monitoring",
      description: "AI-powered monitoring with anomaly detection and alerting",
      icon: <Eye className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

}

}