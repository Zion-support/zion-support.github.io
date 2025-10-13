  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Zap, 
  Shield, 
  Cloud, 
  Smartphone, 
  Globe, 
  Mail, 
  Phone, 
  TrendingUp,
  Database,
  Settings,
  Monitor,
  Lock,
  Server,
  Cpu,
  Network,
  HardDrive,
  Headphones,
  Sparkles,
  Target,
  Calendar,
  FileText,
  Code,
  Bot,
  Wifi,
  Heart,
  Receipt,
  Package,
  Clock
} from "lucide-react";

export default function ZionAiAnalyticsPro() {
  const features = [
    {
      title: "Real-time Analytics Dashboard",
      description: "Monitor your business performance with live dashboards that update in real-time, providing instant insights into key metrics and KPIs.",
      icon: <Monitor className="w-8 h-8" />,
      benefits: ["Live data updates", "Customizable widgets", "Mobile-responsive design", "Export capabilities"]
    },
    {
      title: "Predictive Modeling & Forecasting",
      description: "Leverage advanced AI algorithms to predict future trends, forecast sales, and identify opportunities before they happen.",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Sales forecasting", "Trend prediction", "Risk assessment", "Opportunity identification"]
    },
    {
      title: "Custom Report Generation",
      description: "Create detailed, professional reports automatically with our AI-powered report generator that adapts to your business needs.",
      icon: <FileText className="w-8 h-8" />,
      benefits: ["Automated scheduling", "Custom templates", "Multiple formats", "Brand customization"]
    },
    {
      title: "API Integration & Data Connectors",
      description: "Connect seamlessly with over 100+ business applications and data sources to centralize all your business intelligence.",
      icon: <Database className="w-8 h-8" />,
      benefits: ["100+ integrations", "Real-time sync", "Data transformation", "Secure connections"]
    },
    {
      title: "Mobile App Access",
      description: "Access your analytics anywhere with our native mobile apps for iOS and Android, featuring offline capabilities.",
      icon: <Smartphone className="w-8 h-8" />,
      benefits: ["Native mobile apps", "Offline access", "Push notifications", "Touch-optimized UI"]
    },
    {
      title: "White-label Solutions",
      description: "Rebrand our analytics platform as your own with complete white-label customization options for agencies and resellers.",
      icon: <Settings className="w-8 h-8" />,
      benefits: ["Custom branding", "Domain mapping", "API access", "Reseller tools"]
