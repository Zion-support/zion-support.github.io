import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight,
  Users,
  Star,
  CheckCircle,
  Zap,
  Brain,
  Globe,
  Monitor,
  Target,
  BarChart3,
  Heart,
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Heart, Zap, BarChart3, TrendingUp, Shield, Target, Brain, Users, CheckCircle, ArrowRight, Globe, AlertCircle, Clock } from 'lucide-react';

const AICustomerSentimentTrackerPage = () => {
  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "10M+", label: "Reviews Analyzed" },
    { number: "50+", label: "Languages Supported" },
    { number: "24/7", label: "Real-time Monitoring" }
  ];

  const benefits = [
    "Real-time sentiment analysis across all channels",
    "Automated alert system for negative sentiment spikes",
    "Comprehensive reporting and trend analysis",
    "Integration with popular CRM and support tools",
    "Customizable sentiment scoring and categorization",
    "Historical data analysis and trend prediction"
  ];

  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Real-time Sentiment Analysis",
      description: "Advanced AI analyzes customer feedback, reviews, and interactions in real-time to provide instant sentiment insights."
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: "Multi-channel Monitoring",
      description: "Track sentiment across all channels including social media, email, chat, reviews, and support tickets."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-green-400" />,
      title: "Advanced Analytics Dashboard",
      description: "Comprehensive analytics with sentiment trends, customer satisfaction scores, and actionable insights."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-red-400" />,
      title: "Proactive Alerts",
      description: "Get instant notifications when sentiment drops or negative feedback requires immediate attention."
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Automated Response Suggestions",
      description: "AI-powered suggestions for responding to negative feedback and improving customer satisfaction."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Team Collaboration",
      description: "Share insights across teams, assign tasks, and track resolution progress for better customer experience."
    }
  ];

  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "2.5s", label: "Response Time" },
    { number: "50+", label: "Languages" },
    { number: "24/7", label: "Monitoring" }
  ];

  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-green-400" />,
      title: "Increase customer satisfaction by 40%",
      description: "Our AI-powered sentiment analysis helps you understand and improve customer satisfaction levels."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: "Reduce response time by 60%",
      description: "Get instant insights and automated responses to customer feedback and concerns."
    },
    {
      icon: <AlertCircle className="w-8 h-8 text-yellow-400" />,
      title: "Identify issues before they escalate",
      description: "Proactive monitoring helps you catch and resolve issues before they become major problems."
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: "Improve brand reputation",
      description: "Monitor and manage your brand reputation across all channels with real-time insights."
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />,
      title: "Make data-driven decisions",
      description: "Comprehensive analytics and reporting help you make informed business decisions."
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: "Scale customer support efficiently",
      description: "Handle more customer interactions with the same resources through intelligent automation."
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5,000 mentions/month",
        "Basic sentiment analysis",
        "Email alerts",
        "Basic dashboard",
        "Email support",
        "3 team members"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25,000 mentions/month",
        "Advanced AI analysis",
        "Multi-channel monitoring",
        "Advanced analytics",
        "Priority support",
        "10 team members",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$249",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited mentions",
        "Custom AI models",
        "White-label solution",
        "Advanced security",
        "Dedicated support",
        "Unlimited team members",
        "Custom integrations"
      ],
      popular: false
    }
  ];

export default function AiCustomerSentimentTrackerPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Customer Sentiment Tracker - Zion Tech Group</title>
        <meta name="description" content="Ai Customer Sentiment Tracker solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Customer Sentiment Tracker</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai customer sentiment tracker solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}