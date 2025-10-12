import React from 'react';
import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Shield, Play, Heart, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
export default AICustomerInsightsPage;
const AICustomerInsightsPage: React.FC = () => {
const features = [
{
icon: <Brain className="w-5h-5ml-2" />,
title: 'AI-Powered Analytics',
description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
price: '$299/month',
benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting'];
},
{
icon: <BarChart3 className="w-5h-5ml-2" />,
title: 'Customer Segmentation',
description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
price: '$199/month',
benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria'];
},
{
icon: <Users className="w-5h-5ml-2" />,
title: 'Customer Journey Mapping',
description: 'Visualize complete customer journeys across all touchpoints with interactive journey maps and conversion funnels.',
price: '$249/month',
benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights'];
},
{
icon: <TrendingUp className="w-5h-5ml-2" />,
title: 'Churn Prediction',
description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
price: '$179/month',
benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts'];
},
{
icon: <Target className="w-5h-5ml-2" />,
title: 'Personalization Engine',
description: 'Create hyper-personalized experiences with AI-driven content recommendations and dynamic pricing.',
price: '$399/month',
benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B testing'];
},
{
icon: <Zap className="w-5h-5ml-2" />,
title: 'Real-time Insights',
description: 'Get instant customer insights with real-time data processing and live dashboard updates.',
price: '$149/month',
benefits: ['Live dashboards', 'Real-time alerts', 'Instant notifications', 'Live data streams'];
}
];

const useCases = [
{
title: 'E-commerce Personalization',
description: 'Increase conversion rates by 35% with personalized product recommendations and dynamic pricing.',
metrics: ['35% conversion increase', '28% higher AOV', '42% repeat purchases'],
icon: <div>
