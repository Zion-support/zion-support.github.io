<<<<<<< HEAD
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';

=======
import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  Mail, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  CheckCircle,
  ArrowRight,
  Brain,
  Target,
  Globe  } from 'lucide-react';
} from 'lucide-react';
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
const AIPoweredEmailAnalyzerPage = () => {
  const stats = [
    { label: "Emails Analyzed", value: "1M+", icon: <Mail className="w-6 h-6" /> },
    { label: "Accuracy Rate", value: "99.5%", icon: <Target className="w-6 h-6" /> },
    { label: "Time Saved", value: "80%", icon: <Clock className="w-6 h-6" /> },
    { label: "Cost Reduction", value: "60%", icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze email content, sentiment, and intent with 99.5% accuracy."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Detection",
      description: "Automatically detect phishing attempts, spam, and malicious content to protect your organization."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and reporting to track email performance and communication trends."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Processing",
      description: "Process and analyze emails in real-time with instant notifications and alerts."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small teams and individuals",
      features: [
        "Up to 1,000 emails/month",
        "Basic sentiment analysis",
        "Response suggestions",
        "Email templates",
        "Basic analytics",
        "Email support"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 10,000 emails/month",
        "Advanced AI analysis",
        "Custom response templates",
        "Team collaboration",
        "Advanced analytics",
        "Priority support",
        "API access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Custom integrations",
        "Dedicated support",
        "On-premise deployment"
      ],
      popular: false;
    }
  ];
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f

export default function AiPoweredEmailAnalyzerPage() {
}

}}