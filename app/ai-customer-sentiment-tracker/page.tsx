import React from 'react';
import { Helmet } from 'react-helmet-async';

const AICustomerSentimentTrackerPage = () => {
  const benefits = [
    {
      title: "Expert Team",
      description: "Our team of AI and technology experts delivers exceptional results.",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Proven Results",
      description: "We have a track record of successful projects and satisfied clients.",
      icon: <CheckCircle className="w-8 h-8" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your success.",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Innovation",
      description: "Cutting-edge solutions that keep you ahead of the competition.",
      icon: <Zap className="w-8 h-8" />
    }
  ];

  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Years Experience", value: "5+" },
    { label: "Team Members", value: "50+" }
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

<<<<<<< HEAD
  const stats = [
    { number: "95%", label: "Accuracy Rate" },
    { number: "2.5M+", label: "Mentions Analyzed" },
    { number: "50+", label: "Languages Supported" },
    { number: "99.9%", label: "Uptime" }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-12 h-12 text-green-400" />,
      title: "Increase Customer Satisfaction",
      description: "Proactively identify and resolve issues before they impact customer experience"
    },
    {
      icon: <Target className="w-12 h-12 text-blue-400" />,
      title: "Improve Response Time",
      description: "Get instant alerts for negative sentiment and respond within minutes, not hours"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-400" />,
      title: "Data-Driven Decisions",
      description: "Make informed business decisions based on comprehensive sentiment analytics"
    },
    {
      icon: <Users className="w-12 h-12 text-cyan-400" />,
      title: "Team Collaboration",
      description: "Enable seamless collaboration across teams with shared insights and task management"
    }
  ];

=======
export default function AiCustomerSentimentTrackerPage() {
>>>>>>> 1768cb0a99d39a994ad89c8211ed1a93ecd366f9
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