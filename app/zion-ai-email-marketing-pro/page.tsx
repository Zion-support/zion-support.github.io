import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  BarChart3, 
  Target, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Clock, 
  Sparkles,
  Cpu,
  Send,
  Heart,
  MousePointer,
  Shield,
  Zap,
  TrendingUp

} from 'lucide-react';

const ZionAIEmailMarketingProPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered Email Content Generation"Generate compelling email content, subject lines, and CTAs using advanced AI that understands your brand voice.",
      icon: <Cpu className="AI content generation", ", "A/B testing suggestions"Advanced Segmentation & Targeting",
      description: ",
      icon: <Target className="w-6 h-6", "Predictive targeting"Dynamic content"]
    },
    {
      title: ",
      description: "Create sophisticated email sequences with triggers, conditions, and personalized journeys for each subscriber."w-6 h-6"Drip campaigns"Behavioral triggers", "]
    },
    {
      title: "Real-time Analytics & Insights"Comprehensive analytics with open rates, click-through rates, conversion tracking, and ROI measurement.",
      icon: <BarChart3 className="Real-time metrics", ", "ROI analysis"Advanced A/B Testing",
      description: ",
      icon: <TrendingUp className="w-6 h-6", "AI optimization"Performance insights"]
    },
    {
      title: ",
      description: "Advanced deliverability tools to ensure your emails reach the inbox and avoid spam filters."w-6 h-6"Spam score analysis"Domain reputation", "]
    }
  ];

  const emailTypes = [
    { name: "Newsletter"w-6 h-6"from-blue-500 to-blue-600"Promotional", icon: <Zap className="from-orange-500 to-red-600" },
    { name: ", icon: <Send className="w-6 h-6" },
    { name: "Welcome Series"w-6 h-6"from-pink-500 to-purple-600"Abandoned Cart", icon: <MousePointer className="from-purple-500 to-pink-600" },
    { name: ", icon: <Target className="w-6 h-6" }
  ];

  const pricingPlans = [
    {
      name: "Starter"$29",
      period: ",
      description: "Perfect for small businesses starting their email marketing journey"Up to 1,000 subscribers",
        ",
        "Basic templates"Email analytics",
        "
      ],
      popular: false
    },
    {
      name: "Professional"$99",
      period: ",
      description: "Ideal for growing businesses with advanced email marketing needs"Up to 10,000 subscribers",
        ",
        "AI content generation"Advanced segmentation",
        ",
        "Priority support"Custom templates"
      ],
      popular: true
    },
    {
      name: ",
      price: "$299"/month",
      description: ",
      features: [
        "Unlimited subscribers"Unlimited emails",
        ",
        "White-label options"Dedicated support",
        ",
        "API access"Advanced analytics"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: ",
      company: "E-commerce Solutions"Marketing Manager",
      content: ",
      rating: 5,
      avatar: "RG"Mark Johnson",
      company: ",
      role: "Growth Manager"The segmentation and automation features helped us achieve 35% higher open rates. Our conversion rates have never been better.",
      rating: 5,
      avatar: ",
    },
    {
      name: "Sarah Wilson"Retail Brand",
      role: ",
      content: "We manage 50+ email campaigns effortlessly. The AI optimization suggestions have transformed our email strategy."SW",
    }
  ];

export default function ZionAiEmailMarketingPro() {
  return (
    <div className="description" content=" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4 xl font-bold text-gray-900 mb-6">
            Advanced zion ai email marketing pro solutions by Zion Tech Group.
          </p>
        </div>
      </div>
    </div>
  );
