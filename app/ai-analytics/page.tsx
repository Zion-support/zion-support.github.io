import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Brain, CheckCircle, Star, Globe, Mail, Phone, Database, Settings, Monitor, Sparkles, Lightbulb } from "lucide-react";
const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-8 h-8 text-blue-500"
      title: 'Real-time Analytics'
      description: 'Monitor your data in real-time with advanced visualization tools and interactive dashboards.'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500"
      title: 'AI-Powered Insights'
      description: 'Get intelligent recommendations and predictions based on your data patterns and trends.'
    },
    {
      icon: <Database className="w-8 h-8 text-green-500"
      title: 'Data Integration'
      description: 'Connect multiple data sources and create unified views of your business metrics.'
    },
    {
      icon: <Settings className="w-8 h-8 text-yellow-500"
      title: 'Custom Dashboards'
      description: 'Build personalized dashboards tailored to your specific business needs and KPIs.'
    },
    {
      icon: <Monitor className="w-8 h-8 text-red-500"
      title: 'Performance Monitoring'
      description: 'Track system performance and identify bottlenecks with comprehensive monitoring tools.'
    },
    {
      icon: <Sparkles className="w-8 h-8 text-indigo-500"
      title: 'Automated Reports'
      description: 'Generate detailed reports automatically and schedule them for regular delivery.'
    }
  ];
  const benefits = [
    'Increase data-driven decision making by 85%'
    'Reduce reporting time by 70%'
    'Improve operational efficiency by 60%'
    'Enhance customer insights and satisfaction'
    'Streamline business processes'
    'Gain competitive advantage through data'
  ];
>>>>>>> origin/main;
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"

      <Helmet></Helmet>"
"
        <meta name="description" content="Professional services by Zion Tech Group." />"
"
}
"
}