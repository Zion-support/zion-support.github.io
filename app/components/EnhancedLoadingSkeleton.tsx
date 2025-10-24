'use client';
import React from 'react';
import { Helmet     } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp, CheckCircle, Star, Clock, Zap, Shield, Globe, Database, Users, Settings, Check     } from 'lucide-react';
import Navigation from '../components/Navigation'
const EnhancedLoadingSkeletonPage: React.FC = () => {
const features = [
    {
icon: Brain, title: 'AI-Powered Intelligence', description: 'Advanced AI algorithms that provide intelligent insights and recommendations.', benefits: ['Smart recommendations','Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
    {
icon: BarChart, title: 'Advanced Analytics', description: 'Comprehensive analytics dashboard with real-time data visualization.', benefits: ['Real-time dashboards','Custom reports', 'Data visualization', 'Performance metrics']
    }
    {
icon: Target, title: 'Precision Targeting', description: 'Target specific goals and objectives with precision and accuracy.', benefits: ['Goal tracking','Performance optimization', 'Strategic planning', 'Success metrics']
    }
    {
icon: TrendingUp, title: 'Growth Optimization', description: 'Optimize your business growth with data-driven strategies.', benefits: ['Growth strategies','Market analysis', 'Competitive insights', 'ROI optimization']
  ];
export default EnhancedLoadingSkeletonPage;
}}