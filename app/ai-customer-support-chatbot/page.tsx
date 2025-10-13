<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';

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
const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CFO",
      company: "TechCorp",
      content: "The AI financial analysis platform has revolutionized our decision-making process.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Investment Manager",
      company: "FinancePro",
      content: "Incredible accuracy and insights that have improved our portfolio performance.",
      rating: 5
    }
  ];
export default function AICustomerSupportChatbot() {
=======

"use client";
>>>>>>> cursor/fix-errors-and-merge-to-main-b18f
  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechSupport Solutions",
      role: "Customer Success Manager",
      content: "Our AI chatbot has reduced response time by 80% and increased customer satisfaction by 40%. It handles 90% of inquiries automatically.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      company: "E-commerce Plus",
      role: "Operations Director",
      content: "The chatbot understands context perfectly and escalates complex issues to humans seamlessly. Our support team can focus on high-value tasks.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      company: "SaaS Platform Inc",
      role: "Head of Support",
      content: "24/7 availability with consistent quality responses. Our customers love the instant help and our team loves the reduced workload.",
      rating: 5,
      avatar: "ER"
    }
  ];

  const chatbotFeatures = [
    {
      category: "Core Features",
      items: [
        "Natural Language Processing",
        "Multi-language Support",
        "Context Awareness",
        "Real-time Responses",
      ]},
    {
      category: "Integration",
      items: [
        "API Integration",
        "CRM Integration",
        "Database Connectivity",
        "Third-party Tools",
      ]},
    {
      category: "Analytics",
      items: [
        "Conversation Analytics",
        "Performance Metrics",
        "User Insights",
        "Custom Reports",
      ]},
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      features: ["Basic chatbot", "Email support", "Standard templates"],
      description: "Perfect for small businesses getting started",
      period: "/month",
      popular: false},
    {
      name: "Professional",
      price: "$799",
      features: ["Advanced AI", "Priority support", "Custom integrations"],
      description: "Ideal for growing businesses with complex needs",
      period: "/month",
      popular: true},
    {
      name: "Enterprise",
      price: "$1999",
      features: ["Full customization", "24/7 support", "Dedicated manager"],
      description: "Complete solution for large organizations",
      period: "/month",
      popular: false},
  ];
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-cyan-400" />,
      title: "Natural Language Processing",
      description:
        "Advanced AI understands context, intent, and provides human-like responses"},
    {
      icon: <Clock className="w-6 h-6 text-purple-400" />,
      title: "24/7 Availability",
      description:
        "Provide instant support around the clock without additional staffing costs"},
    {
      icon: <Target className="w-6 h-6 text-yellow-400" />,
      title: "Intelligent Routing",
      description:
        "Automatically route complex queries to the right human agents when needed"},
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: "Analytics & Insights",
      description:
        "Track customer satisfaction, response times, and identify improvement opportunities"},
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Customer Success Manager",
      company: "TechCorp",
      content: "The AI chatbot has reduced our support tickets by 70% while improving customer satisfaction. It's incredibly intelligent and handles complex queries perfectly.",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Operations Director",
      company: "InnovateLabs",
      content: "Implementation was seamless and the results were immediate. Our customers love the instant responses and our team can focus on more complex issues.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Support",
      company: "DataFlow Inc",
      content: "The analytics and insights provided by the chatbot help us understand our customers better. It's been a game-changer for our support operations.",
      rating: 5,
      avatar: "ER"
    }
  ];

}

}