import { Helmet } from 'react-helmet-async';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Code } from 'lucide-react';

const AICodeAssistantProZionTechGroup = () => {

  const features = [
    {
      title: "AI Code Generation",
      description: "Generate high-quality code in 50+ programming languages using advanced AI models",
      icon: <Code className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Intelligent Debugging",
      description: "Automatically detect and fix bugs with AI-powered analysis and suggestions",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Code Optimization",
      description: "Optimize performance and efficiency with AI-driven code analysis and recommendations",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Multi-Language Support",
      description: "Support for Python, JavaScript, Java, C++, Go, Rust, and 45+ other languages",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for individual developers",
      features: [
        "5,000 AI code generations per month",
        "10 programming languages",
        "Basic debugging assistance",
        "Email support",
        "Code optimization suggestions"
      ],
      popular: false;
    },
    {
      name: "Professional",
      price: "$199",
      period: "month",
      description: "Ideal for development teams",
      features: [
        "Unlimited AI code generations",
        "50+ programming languages",
        "Advanced debugging & optimization",
        "Priority support",
        "Team collaboration features",
        "Custom AI model training",
        "API access"
      ],
      popular: true;
    },
    {
      name: "Enterprise",
      price: "$499",
      period: "month",
      description: "For large organizations",
      features: [
        "Everything in Professional",
        "Custom AI model deployment",
        "On-premise installation",
        "Dedicated support team",
        "SLA guarantee",
        "Custom integrations",
        "Advanced analytics"
      ],
      popular: false;
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      company: "TechCorp",
      content: "Zion AI Code Assistant Pro has revolutionized our development workflow. The code generation is incredibly accurate and saves us hours every day.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Engineer",
      company: "InnovateLabs",
      content: "The debugging capabilities are outstanding. It catches issues we would have missed and provides clear explanations for fixes.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "Full Stack Developer",
      company: "DataFlow Inc",
      content: "Multi-language support is fantastic. We can work across different tech stacks seamlessly with this tool.",
      rating: 5,
      avatar: "EJ"
    }
  ];

export default function AiCodeAssistantProPage() {
}