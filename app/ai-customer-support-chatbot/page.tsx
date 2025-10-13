
import { Helmet } from 'react-helmet-async';

export default function AiCustomerSupportChatbotPage() {
  const features = [
    {
      title: "AI-Powered Responses",
      description: "Intelligent chatbot that understands context and provides accurate answers",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock customer support without human intervention",
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: "Multi-language Support",
      description: "Support customers in multiple languages with real-time translation",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Seamless Handoff",
      description: "Intelligent escalation to human agents when needed",
      icon: <Users className="w-8 h-8" />
    }
  ];

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
      ],
    },
    {
      category: "Integration",
      items: [
        "API Integration",
        "CRM Integration",
        "Database Connectivity",
        "Third-party Tools",
      ],
    },
    {
      category: "Analytics",
      items: [
        "Conversation Analytics",
        "Performance Metrics",
        "User Insights",
        "Custom Reports",
      ],
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      features: ["Basic chatbot", "Email support", "Standard templates"],
      description: "Perfect for small businesses getting started",
      period: "/month",
      popular: false,
    },
    {
      name: "Professional",
      price: "$799",
      features: ["Advanced AI", "Priority support", "Custom integrations"],
      description: "Ideal for growing businesses with complex needs",
      period: "/month",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$1999",
      features: ["Full customization", "24/7 support", "Dedicated manager"],
      description: "Complete solution for large organizations",
      period: "/month",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Ai Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Ai Customer Support Chatbot solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Ai Customer Support Chatbot</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive ai customer support chatbot solutions designed to meet your business needs.
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