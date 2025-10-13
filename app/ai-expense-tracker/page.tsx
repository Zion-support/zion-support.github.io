import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { Brain } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Receipt } from 'lucide-react';
"use client";
export default function AIExpenseTracker() {,
  const features = [
    {,
      icon: <Brain className="w-12 h-12 text-cyan-400" /></Brain>
      title: "AI-Powered Analysis"
      description:
        "Advanced AI algorithms analyze your spending patterns and provide intelligent insights."
    }
    {,
      icon: <TrendingUp className="w-12 h-12 text-purple-400" /></TrendingUp>
      title: "Real-time Tracking"
      description:
        "Track your expenses in real-time with automatic categorization and smart notifications."
    }
    {,
      icon: <Shield className="w-12 h-12 text-green-400" /></Shield>
      title: "Secure & Private"
      description:
        "Bank-level security ensures your financial data is protected and private."
    }
    {,
      icon: <BarChart3 className="w-12 h-12 text-yellow-400" /></BarChart3>
      title: "Smart Reports"
      description:
        "Generate detailed reports and visualizations to understand your spending habits."
    },]
  ];
  const capabilities = [
    {,
      title: "Automatic Categorization"
      description:
        "AI automatically categorizes your expenses into predefined categories like food, transportation, entertainment, etc."
      icon: <Bot className="w-8 h-8 text-blue-400" /></Bot>
    }
    {,
      title: "Receipt Scanning"
      description:
        "Simply take a photo of your receipt and let AI extract all the relevant information automatically."
      icon: <Receipt className="w-8 h-8 text-green-400" /></Receipt>
    }
    {,
      title: "Budget Management"
      description:
        "Set budgets for different categories and get alerts when you're approaching your limits."
      icon: <DollarSign className="w-8 h-8 text-yellow-400" /></DollarSign>
    }
    {,
      title: "Expense Insights"
      description:
        "Get personalized insights and recommendations to help you save money and manage finances better."
      icon: <Brain className="w-8 h-8 text-purple-400" /></Brain>
    },]
  ];
  const pricingPlans = [
    {,
      name: "Basic"
      price: "$9.99"
      period: "/month"
      description: "Perfect for personal use"
      features: [
        "Unlimited expense tracking"
        "Basic AI categorization"
        "Receipt scanning (50/month)"
        "Basic reports"
        "Mobile app access"
        "Email support",]
      ]
      popular: false;
    }
    {,
      name: "Pro"
      price: "$19.99"
      period: "/month"
      description: "Ideal for professionals"
      features: [
        "Everything in Basic"
        "Advanced AI insights"
        "Unlimited receipt scanning"
        "Advanced analytics"
        "Budget management"
        "Priority support"
        "API access",]
      ]
      popular: true;
    }
    {,
      name: "Business"
      price: "$49.99"
      period: "/month"
      description: "For small businesses"
      features: [
        "Everything in Pro"
        "Team collaboration"
        "Multi-user accounts"
        "Advanced reporting"
        "Integration with accounting software"
        "Dedicated support"
        "Custom categories",]
      ]
      popular: false;
    }
  ];
export default function AiExpenseTrackerPage() {,
  return()
    <div className="min-h-screen bg-gray-900 text-white" /></div>
      <Helmet /></Helmet>
        <title>Ai Expense Tracker - Zion Tech Group</title>
        <meta name="description" content="Ai Expense Tracker solutions by Zion Tech Group" / /></meta>
      </Helmet>
      
      <div className="container mx-auto px-4 py-20" /></div>
        <h1 className="text-4xl font-bold mb-8">Ai Expense Tracker</h1>
        <div className="prose prose-invert max-w-none" /></div>
          <p className="text-xl text-gray-300 mb-8" /></p>
            Discover our comprehensive ai expense tracker solutions designed to meet your business needs.
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