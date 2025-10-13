import { Helmet } from 'react-helmet-async';
import { Clock } from 'lucide-react';
import { Star } from 'lucide-react';
import { Database } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
"use client";
export default function AICustomerSupportChatbot() {,
  const testimonials = [
    {,
      name: "Sarah Johnson"
      company: "TechSupport Solutions"
      role: "Customer Success Manager"
      content: "Our AI chatbot has reduced response time by 80% and increased customer satisfaction by 40%. It handles 90% of inquiries automatically."
      rating: 5;
      avatar: "SJ"
    }
    {,
      name: "Michael Chen"
      company: "E-commerce Plus"
      role: "Operations Director"
      content: "The chatbot understands context perfectly and escalates complex issues to humans seamlessly. Our support team can focus on high-value tasks."
      rating: 5;
      avatar: "MC"
    }
    {,
      name: "Emily Rodriguez"
      company: "SaaS Platform Inc"
      role: "Head of Support"
      content: "24/7 availability with consistent quality responses. Our customers love the instant help and our team loves the reduced workload."
      rating: 5;
      avatar: "ER"
    }]
  ];
  const chatbotFeatures = [
    {,
      category: "Core Features"
      items: [
        "Natural Language Processing"
        "Multi-language Support"
        "Context Awareness"
        "Real-time Responses",]
      ]
    }
    {,
      category: "Integration"
      items: [
        "API Integration"
        "CRM Integration"
        "Database Connectivity"
        "Third-party Tools",]
      ]
    }
    {,
      category: "Analytics"
      items: [
        "Conversation Analytics"
        "Performance Metrics"
        "User Insights"
        "Custom Reports",]
      ]
    }
  ];
  const pricingPlans = [
    {,
      name: "Starter"
      price: "$299",]
      features: ["Basic chatbot", "Email support", "Standard templates"]
      description: "Perfect for small businesses getting started"
      period: "/month"
      popular: false;
    }
    {,
      name: "Professional"
      price: "$799"
      features: ["Advanced AI", "Priority support", "Custom integrations"]
      description: "Ideal for growing businesses with complex needs"
      period: "/month"
      popular: true;
    }
    {,
      name: "Enterprise"
      price: "$1999"
      features: ["Full customization", "24/7 support", "Dedicated manager"]
      description: "Complete solution for large organizations"
      period: "/month"
      popular: false;
    }
  ];
  const features = [
    {,
      icon: <Brain className="w-6 h-6 text-cyan-400" /></Brain>
      title: "Natural Language Processing"
      description:
        "Advanced AI understands context, intent, and provides human-like responses"
    }
    {,
      icon: <Clock className="w-6 h-6 text-purple-400" /></Clock>
      title: "24/7 Availability"
      description:
        "Provide instant support around the clock without additional staffing costs"
    }
    {,
      icon: <Target className="w-6 h-6 text-yellow-400" /></Target>
      title: "Intelligent Routing"
      description:
        "Automatically route complex queries to the right human agents when needed"
    }
    {,
      icon: <BarChart3 className="w-6 h-6 text-green-400" /></BarChart3>
      title: "Analytics & Insights"
      description:
        "Track customer satisfaction, response times, and identify improvement opportunities"
    },]
  ];
  const testimonials = [
    {,
      name: "Sarah Johnson"
      role: "Customer Success Manager"
      company: "TechCorp"
      content: "The AI chatbot has reduced our support tickets by 70% while improving customer satisfaction. It's incredibly intelligent and handles complex queries perfectly."
      rating: 5;
      avatar: "SJ"
    }
    {,
      name: "Michael Chen"
      role: "Operations Director"
      company: "InnovateLabs"
      content: "Implementation was seamless and the results were immediate. Our customers love the instant responses and our team can focus on more complex issues."
      rating: 5;
      avatar: "MC"
    }
    {,
      name: "Emily Rodriguez"
      role: "Head of Support"
      company: "DataFlow Inc"
      content: "The analytics and insights provided by the chatbot help us understand our customers better. It's been a game-changer for our support operations."
      rating: 5;
      avatar: "ER"
    }]
  ];
export default function AiCustomerSupportChatbotPage() {,
  return()
    <div className="min-h-screen bg-gray-900 text-white" /></div>
      <Helmet /></Helmet>
        <title>Ai Customer Support Chatbot - Zion Tech Group</title>
        <meta name="description" content="Ai Customer Support Chatbot solutions by Zion Tech Group" / /></meta>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20" /></div>
        <h1 className="text-4xl font-bold mb-8">Ai Customer Support Chatbot</h1>
        <div className="prose prose-invert max-w-none" /></div>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Discover our comprehensive ai customer support chatbot solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" /></div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6" /></div>
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300" /></p>
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6" /></div>
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300" /></p>
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6" /></div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300" /></p>
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>)
  );
}

}