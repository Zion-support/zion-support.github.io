import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Users } from 'lucide-react';
import { Star } from 'lucide-react';
import { Download } from 'lucide-react';
import { Database } from 'lucide-react';
import { CheckCircle } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Globe } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Play } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Phone } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Hand } from 'lucide-react';import React, { useState } from 'react';
const ZionAIInvoiceGeneratorPage = () => {
  // const [selectedPlan, setSelectedPlan] = useState('pro');
  // const [selectedPlan, setSelectedPlan] = useState('pro');

  return null;
};

const ZionAIInvoiceGeneratorPage: React.FC = () => {
  const features = [
    "AI-powered invoice generation",
    "Automated data extraction from emails",
    "Smart payment reminders",
    "Multi-currency support (50+ currencies)",
    "Custom branding and templates",
    "Automated tax calculations",
    "Payment tracking and analytics",
    "Client portal integration",
    "Mobile app for on-the-go invoicing",
    "Cloud-based storage and backup"
  ];

  const pricingPlans = [
    {
      name: "Solo",
      price: "$19",
      period: "/month",
      description: "Perfect for freelancers and solo entrepreneurs",
      features: [
        "50 invoices per month",
        "Basic templates",
        "Email reminders",
        "Payment tracking",
        "Mobile app access",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Business",
      price: "$49",
      period: "/month",
      description: "Ideal for small to medium businesses",
      features: [
        "500 invoices per month",
        "Premium templates",
        "Custom branding",
        "Advanced analytics",
        "Client portal",
        "API integration",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$99",
      period: "/month",
      description: "For large organizations with complex invoicing needs",
      features: [
        "Unlimited invoices",
        "Custom templates",
        "White-label solution",
        "Advanced reporting",
        "Multi-user access",
        "Dedicated support",
        "Custom integrations"
      ],
      popular: false
  ];

  const testimonials = [
    {
      name: "David Kim",
      company: "Freelance Designer",
      role: "Owner",
      content: "Zion AI Invoice Generator has saved me hours every week. The automated reminders have improved my payment collection rate by 60%.",
      rating: 5,
      avatar: "DK"
    },
    {
      name: "Lisa Martinez",
      company: "Consulting Firm",
      role: "Operations Manager",
      content: "The AI-powered data extraction is incredible. We can now process client information from emails automatically, reducing manual work by 80%.",
      rating: 5,
      avatar: "LM"
    },
    {
      name: "James Wilson",
      company: "Digital Agency",
      role: "Finance Director",
      content: "The analytics dashboard gives us insights we never had before. We've identified payment patterns and improved our cash flow significantly.",
      rating: 5,
      avatar: "JW"
  ];

  const stats = [
    { number: "50,000+", label: "Invoices Generated", icon: <FileText className="w-6 h-6" /> },
    { number: "85%", label: "Faster Processing", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Currencies Supported", icon: <DollarSign className="w-6 h-6" /> },
    { number: "4.8/5", label: "User Rating", icon: <Star className="w-6 h-6" /> }
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Generate professional invoices in seconds instead of hours. Our AI handles all the formatting and calculations automatically."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Improve Cash Flow",
      description: "Automated payment reminders and tracking help you get paid faster. Our analytics show you exactly where your money is coming from."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Stay Compliant",
      description: "Automatic tax calculations and compliance features ensure your invoices meet all legal requirements in your jurisdiction."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Gain Insights",
      description: "Detailed analytics and reporting help you understand your business performance and make data-driven decisions."
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion Ai Invoice Generator - Zion Tech Group</title>
        <meta name="description" content="Zion Ai Invoice Generator solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Zion Ai Invoice Generator</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive zion ai invoice generator solutions designed to meet your business needs.
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
  );
};

