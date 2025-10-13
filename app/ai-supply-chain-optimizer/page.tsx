import { ArrowRight, Globe, BarChart3, Zap, Target, CheckCircle, Star, Sparkles, Mail, Smartphone, TrendingUp } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

  const features = [
    {
      title: "Demand Forecasting",
      description: "AI-powered demand prediction with 95% accuracy using machine learning and market analysis",
      icon: <BarChart3 className="w-6 h-6" />,
      benefits: ["95% Forecast Accuracy", "Seasonal Pattern Recognition", "Market Trend Analysis", "Inventory Optimization"]
    },
    {
      title: "Route Optimization",
      description: "Intelligent logistics planning with real-time traffic, weather, and cost optimization",
      icon: <Globe className="w-6 h-6" />,
      benefits: ["30% Cost Reduction", "Faster Delivery Times", "Fuel Efficiency", "Carbon Footprint Reduction"]
    },
    {
      title: "Supplier Management",
      description: "Automated supplier evaluation, risk assessment, and performance monitoring",
      icon: <Target className="w-6 h-6" />,
      benefits: ["Risk Mitigation", "Performance Tracking", "Cost Analysis", "Quality Control"]
    },
    {
      title: "Inventory Intelligence",
      description: "Smart inventory management with automated reordering and waste reduction",
      icon: <Zap className="w-6 h-6" />,
      benefits: ["25% Inventory Reduction", "Zero Stockouts", "Waste Elimination", "Cash Flow Optimization"]
    }
  ];

  const industries = [
    {
      popular: false
    }
  ];

  const benefits = [
    {
    }
  ];

  return (
    <>
      <Helmet>
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
    </>
  );
}