<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
=======
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Edit } from 'lucide-react';
import { Play } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Cloud } from 'lucide-react';import React, { useState } from 'react';
const ZionAIVideoGeneratorPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  return null;
};

const ZionAIVideoGeneratorPage: React.FC = () => {
  const features = [
    "AI-powered script generation",
    "50+ professional voice options",
    "Auto video editing and transitions",
    "Multi-language support (25+ languages)",
    "Brand customization and templates",
    "Social media optimization",
    "Real-time collaboration",
    "Cloud-based processing",
    "HD/4K video output",
    "Automatic subtitle generation"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      description: "Perfect for small businesses and content creators",
      features: [
        "10 videos per month",
        "HD quality output",
        "Basic templates",
        "5 voice options",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      description: "Ideal for marketing agencies and growing businesses",
      features: [
        "50 videos per month",
        "4K quality output",
        "Premium templates",
        "25 voice options",
        "Brand customization",
        "Priority support",
        "Analytics dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "For large organizations with high video needs",
      features: [
        "Unlimited videos",
        "4K + 8K quality",
        "Custom templates",
        "All voice options",
        "White-label solution",
        "Dedicated support",
        "Advanced analytics",
        "API access"
      ],
      popular: false
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "Digital Marketing Agency",
      role: "Creative Director",
      content: "Zion AI Video Generator has revolutionized our content creation process. We've increased our video output by 300% while reducing production time by 80%.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      company: "E-commerce Solutions",
      role: "Marketing Manager",
      content: "The AI-generated scripts are incredibly natural and engaging. Our conversion rates have improved by 45% since we started using this tool.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      company: "Tech Startup",
      role: "Content Manager",
      content: "The multi-language support is a game-changer for our global audience. We can now create localized content in 15 different languages effortlessly.",
      rating: 5,
      avatar: "EJ"
  ];

  const stats = [
    { number: "10,000+", label: "Videos Generated", icon: <Video className="w-6 h-6" /> },
    { number: "95%", label: "Time Saved", icon: <Clock className="w-6 h-6" /> },
    { number: "25+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> },
    { number: "4.9/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa

export default function Page() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </div>
=======
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Video Generator - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Video Generator solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Video Generator</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai video generator solutions designed to meet your business needs.
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
      </div>    </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-fbfa
  );
}
