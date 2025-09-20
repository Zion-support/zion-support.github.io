import React from 'react';
<<<<<<< HEAD
  return (,
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">,
      <Helmet>,
        <title>micro-crm | Zion Tech Group</title>,
        <meta name="description" content="micro-crm - Revolutionary technology solutions" />,
      </Helmet>,
      <div className="container mx-auto px-4 py-20">,
        <div className="text-center">,
          <h1 className="text-4xl font-bold mb-6">micro-crm</h1>,
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>,
        </div>,
      </div>,
    </div>,
=======
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Users, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  ArrowLeft,
  Phone,
  Mail,
  Globe,
  Shield,
  BarChart3,
  MessageSquare,
  Calendar,
  Target,
  Zap,
  Database,
  Lock,
  Eye,
  Search,
  Filter,
  Download,
  Upload,
  Settings,
  Bell,
  Award
} from 'lucide-react';

const MicroCRM = (props: any) => {
  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008, Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  const features = [
    {
      title: "Contact Management",
      description: "Organize and manage all your customer contacts with detailed profiles and interaction history",
      icon: User s
    },
    {
      title: "Lead Tracking",
      description: "Track leads through your sales pipeline with automated scoring and qualification",
      icon: Targe t
    },
    {
      title: "Sales Pipeline",
      description: "Visualize and manage your sales process with customizable stages and workflows",
      icon: TrendingU p
    },
    {
      title: "Email Integration",
      description: "Seamlessly integrate with your email provider for automatic contact sync and tracking",
      icon: Mai l
    },
    {
      title: "Analytics Dashboard",
      description: "Get insights into your sales performance with real-time analytics and reports",
      icon: BarChart 3
    },
    {
      title: "Mobile Access",
      description: "Access your CRM on the go with our responsive mobile application",
      icon: Za p
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 contacts",
        "Basic lead tracking",
        "Email integration",
        "Mobile app access",
        "Email support",
        "Basic reporting"
      ],
      popular: fals e
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "Ideal for growing businesses and sales teams",
      features: [
        "Up to 10,000 contacts",
        "Advanced lead scoring",
        "Sales pipeline management",
        "Team collaboration",
        "Priority support",
        "Advanced analytics",
        "API access",
        "Custom fields"
      ],
      popular: tru e
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with complex sales processes",
      features: [
        "Unlimited contacts",
        "Custom workflows",
        "Advanced automation",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label options",
        "Advanced security"
      ],
      popular: fals e
    }
  ];

  const testimonials = [
    {
      name: "David Thompson",
      role: "Sales Manager",
      company: "GrowthTech Inc",
      content: "The Micro CRM has streamlined our sales process completely. We've seen a 40% increase in conversion rates and our team is much more organized.",
      rating: 5
    },
    {
      name: "Lisa Chen",
      role: "Founder",
      company: "StartupHub",
      content: "As a startup, we needed something simple but powerful. This CRM fits perfectly and has helped us scale our sales operations efficiently.",
      rating: 5
    },
    {
      name: "Robert Martinez",
      role: "Business Development",
      company: "Innovation Labs",
      content: "The lead tracking and pipeline management features are game-changers. We can now track every interaction and optimize our sales process.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>micro-crm | Zion Tech Group</title>
        <meta name="description" content="micro-crm - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">micro-crm</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
>>>>>>> 9de841a86934bc4a418b22e98c02b56496dc2aa9
  );
};
export default micro-crm;