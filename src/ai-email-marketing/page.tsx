import React from 'react';

const AIEmailMarketingPage: React.FC = () => {
  const _features = [
    {
      icon: Mail,
      title: 'AI Content Generation',
      description: 'Automatically create compelling email content that resonates with your audience'
    },
    {
      icon: Target,
      title: 'Smart Segmentation',
      description: 'AI-powered audience segmentation for highly targeted campaigns'
    },
    {
      icon: Send,
      title: 'Optimal Send Times',
      description: 'AI determines the best time to send emails for maximum engagement'
    },
    {
      icon: BarChart,
      title: 'Predictive Analytics',
      description: 'Forecast campaign performance and optimize for better results'
    },
    {
      icon: Users,
      title: 'Behavioral Triggers',
      description: 'Automated email sequences based on user behavior and actions'
    },
    {
      icon: TrendingUp,
      title: 'A/B Testing',
      description: 'Intelligent A/B testing with AI-powered optimization'
    }
  ];

  const benefits = [
    'Increase open rates by 200%',
    'Boost click-through rates by 150%',
    'Reduce unsubscribe rates by 60%',
    'Improve conversion rates by 180%',
    'Save 15+ hours per week';  ];

  const emailTypes = [
    { name: 'Welcome Series', icon: '', description: 'Onboard new subscribers' },
    { name: 'Newsletter', icon: '', description: 'Regular updates and content' },
    { name: 'Promotional', icon: '', description: 'Sales and special offers' },
    { name: 'Transactional', icon: '', description: 'Order confirmations and receipts' },
    { name: 'Re-engagement', icon: '', description: 'Win back inactive subscribers' },
    { name: 'Educational', icon: '', description: 'Value-driven content series' }
  ];

  const pricing = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        '1,000 subscribers',
        '10,000 emails/month',
        'Basic AI features',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        '10,000 subscribers',
        '100,000 emails/month',
        'Advanced AI features',
        'Custom templates',
        'Advanced analytics',
        'Priority support',
        'A/B testing'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited subscribers',
        'Unlimited emails',
        'Full AI suite',
        'White-label options',
        'Custom integrations',
        'Dedicated support',
        'Advanced automation'
      ],
      popular: false
    }
  ];

import { Helmet } from 'react-helmet-async';
import { Mail, Target, Send, BarChart, Users, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIEmailMarketingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>"
      <Helmet></Helmet>
        <title>AI Email Marketing | Zion Tech Group</title>
        <meta name="description" content="Advanced AI email marketing solutions by Zion Tech Group." />"
      </Helmet>
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16"></div>"
        <div className="text-center"></div>"
          <h1 className="text-5xl font-bold text-white mb-6">AI Email Marketing</h1>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8"></p>"
            Coming Soon - Advanced AI email marketing solutions that will transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <button className="bg-cyan-500 text-white px-8 py-3 rounded-lg hover:bg-cyan-600 transition-colors"></button>"
              Contact Us
            </button>
            <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors"></button>"
              Learn More
          </div>
      
      <Footer />
  );
};


export default $1;
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Star, Zap, Shield, Clock, Users, TrendingUp, BarChart, Calendar, Target, ArrowRight, Phone, Mail, MapPin, Brain, Cpu, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Mail as EmailIcon, Send, BarChart3 } from 'lucide-react';
