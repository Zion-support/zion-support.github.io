import { ArrowRight, Home, Search, AlertTriangle } from 'lucide-react';

  ArrowRight,   BarChart3, 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  Brain, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Database,
  Settings,
  Sparkles,
  Lightbulb,
  CheckCircle,
  TrendingDown,
  Monitor  } from 'lucide-react';
} from "lucide-react";

export default function AIAnalytics() {
  const benefits = [
    "Real-time data processing and analysis",
    "Predictive analytics and forecasting",
    "Custom dashboard creation",
    "Automated reporting and insights",
    "Machine learning model integration",
    "Advanced data visualization"
  ];
    const analyticsStats = [
    { number: "40%", label: "Faster Decision Making", icon: <Zap className="w-6 h-6" /> },
    { number: "85%", label: "Prediction Accuracy", icon: <Brain className="w-6 h-6" /> },
    { number: "60%", label: "Cost Reduction", icon: <TrendingDown className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Monitoring", icon: <Monitor className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      content: "Zion's AI analytics platform has revolutionized how we process and understand our data. The insights are incredible!",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "DataFlow Inc",
      content: "The predictive analytics capabilities have helped us make better business decisions and reduce costs significantly.",
      rating: 5,
      avatar: "/api/placeholder/64/64"
    }
  ];

  const features = [
    {
      title: "Real-time Analytics",
      description: "Process and analyze data in real-time with our advanced AI algorithms and machine learning models.",
      icon: <BarChart3 className="w-8 h-8" />,
      benefits: ["Live data processing", "Instant insights", "Real-time dashboards", "Automated alerts"]
    },
    {
      title: "Predictive Modeling",
      description: "Build sophisticated predictive models to forecast trends, behaviors, and outcomes with high accuracy.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Trend forecasting", "Risk assessment", "Demand prediction", "Performance optimization"]
    },
    {
      title: "Custom Dashboards",
      description: "Create personalized dashboards with interactive visualizations tailored to your specific business needs.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Drag-and-drop builder", "Custom widgets", "Interactive charts", "Mobile responsive"]
    },
    {
      title: "Automated Reporting",
      description: "Generate comprehensive reports automatically with scheduled delivery and customizable formats.",
      icon: <Zap className="w-8 h-8" />,
      benefits: ["Scheduled reports", "Custom templates", "Multi-format export", "Email delivery"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and integrate data from multiple sources including databases, APIs, and cloud services.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Multi-source integration", "API connectivity", "Cloud synchronization", "Data transformation"]
    },
    {
      title: "Custom AI Models",
      description: "Build and deploy custom machine learning models tailored to your specific business needs and data patterns.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Custom model training", "Model deployment", "Performance monitoring", "Continuous learning"]
    }
  ];
}