import { motion } from 'framer-motion';
import { 
  Heart, 
  TrendingUp, 
  MessageSquare, 
  Zap, 
  BarChart3, 
  Users, 
  Clock, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Target,
  Globe,
  Smile,
  Frown,
  AlertCircle
} from 'lucide-react';

const AICustomerSentimentTrackerPage = () => {
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

  const benefits = [
    {
      icon: <Smile className="w-12 h-12 text-green-400" />,
      title: "Improve Customer Satisfaction",
      description: "Increase customer satisfaction scores by 35% with proactive sentiment monitoring and quick response times."
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-400" />,
      title: "Boost Brand Reputation",
      description: "Protect and enhance your brand reputation by quickly addressing negative sentiment and amplifying positive feedback."
    },
    {
      icon: <MessageSquare className="w-12 h-12 text-purple-400" />,
      title: "Reduce Customer Churn",
      description: "Identify at-risk customers early and take proactive steps to retain them, reducing churn by up to 40%."
    },
    {
      icon: <Heart className="w-12 h-12 text-red-400" />,
      title: "Increase Customer Loyalty",
      description: "Build stronger customer relationships through better understanding of their needs and emotions."
    }
  ];

  const stats = [
    { number: "35%", label: "Satisfaction Increase" },
    { number: "40%", label: "Churn Reduction" },
    { number: "95%", label: "Accuracy Rate" },
    { number: "2.5x", label: "Faster Response" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>"
        <title>Home - Zion Tech Group</title>""
        <meta name="description" content="Home - Zion Tech Group" />"
      </Helmet>""
      <div className="container mx-auto px-4 py-16"></div>""
        <div className="text-center"></div>""
          <h1 className="text-4xl font-bold text-white mb-8">Home</h1>""
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Tracking
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagePage;
