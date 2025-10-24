'use client';
import React from 'react';
import { Helmet     } from 'react-helmet-async';
import { ArrowRight, Brain, BarChart, Target, TrendingUp     } from 'lucide-react';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe     } from 'lucide-react';
import { Phone, Mail     } from 'lucide-react';
const FuturisticHeroPage: React.FC = () => {
const features = [
    {
icon: Brain, title: title, description: description, benefits: ['Smart recommendations','Predictive analytics', 'Automated insights', 'Real-time analysis']
    }
  {
icon: BarChart, title: title, description: description, benefits: ['Real-time dashboards','Custom reports', 'Data visualization', 'Performance metrics']
    }
  {
icon: Target, title: title, description: description, benefits: ['Goal tracking','Performance optimization', 'Strategic planning', 'Success metrics']
    }
  {
icon: TrendingUp, title: title, description: description, benefits: ['Growth strategies','Market analysis', 'Competitive insights', 'ROI optimization']
    }
  ]
const benefits = [
    'Increase efficiency by up to 50%'
    'Reduce costs by 30% with automation'
    'Improve decision-making with AI insights'
    'Scale operations without proportional staff increases'
    'Gain competitive advantage with advanced technology';
export default FuturisticHeroPage;
}