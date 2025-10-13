import { 
  Brain, 
  BarChart3, 
  Users, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  Star, 
  CheckCircle, 
  ArrowRight,
  Eye,
  Heart,
  ShoppingCart,
  Clock,
  Award,
  Shield,
  Globe,
  Zap,
  PieChart,
  Activity
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionAiCustomerInsights = () => {
  const features = [
    {
      title: "Real-Time Sentiment Analysis",
      description: "Analyze customer emotions and sentiment across all touchpoints in real-time using advanced NLP",
      icon: <Brain className="w-6 h-6" />,
      stats: "99.2% accuracy"
    },
    {
      title: "Predictive Customer Behavior",
      description: "Predict customer actions, churn risk, and lifetime value using machine learning algorithms",
      icon: <TrendingUp className="w-6 h-6" />,
      stats: "85% prediction accuracy"
    },
    {
      title: "Automated Insights Generation",
      description: "Get actionable insights and recommendations automatically generated from your customer data",
      icon: <Zap className="w-6 h-6" />,
      stats: "50+ insights daily"
    },
    {
      title: "Multi-Channel Integration",
      description: "Connect with 100+ platforms including social media, email, chat, and CRM systems",
      icon: <Globe className="w-6 h-6" />,
      stats: "100+ integrations"
