import { Helmet } from "react-helmet-async";
import { 
  ArrowRight, 
  BarChart3, 
  Brain, 
  CheckCircle, 
  TrendingUp,
  Database
} from "lucide-react";
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

export default function AiAnalytics() {
  const features = [
    {
      icon: <Brain className="w-6 h-6 text-blue-400" />,
      title: 'Advanced AI Analytics',
      description: 'Leverage machine learning algorithms to uncover hidden patterns and insights in your data'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      title: 'Real-time Dashboards',
      description: 'Monitor key metrics and KPIs with interactive, real-time analytics dashboards'
    }
}