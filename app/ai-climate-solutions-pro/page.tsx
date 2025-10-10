'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Target, Cloud, DollarSign, Calendar, MessageSquare, Globe, Leaf, Activity, Play, Save, Building } from 'lucide-react';

const AIClimateSolutionsProPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedFeature, setSelectedFeature] = useState(0);

  const features = [
    {
      icon: Activity,
      title: 'Carbon Footprint Tracking',
      description: 'Monitor and track carbon emissions across your entire organization in real-time.',
      benefits: [
        'Real-time carbon tracking',
        'Automated reduction recommendations',
        'Industry-specific benchmarks',
        'Regulatory compliance monitoring'
      ]
    },
    {
      icon: Cloud,
      title: 'Climate Prediction AI',
      description: 'Advanced AI models for accurate weather and climate predictions.',
      benefits: [
        '95% accuracy in weather predictions',
        'Extreme weather early warning',
        'Climate trend analysis',
        'Long-term forecasting'
      ]
    },
    {
      icon: Target,
      title: 'Sustainability Planning',
      description: 'AI-powered tools for creating and managing sustainability initiatives.',
      benefits: [
        'Custom sustainability roadmaps',
        'ROI analysis for green initiatives',
        'Resource optimization',
        'Progress tracking & reporting'
      ]
    },
    {
      icon: Building,
      title: 'Emission Monitoring',
      description: 'Comprehensive monitoring and reporting of greenhouse gas emissions.',
      benefits: [
        'Real-time emission monitoring',
        'Automated compliance reporting',
        'Predictive emission modeling',
        'Regulatory compliance tracking'
      ]
    },
    {
      icon: Globe,
      title: 'Renewable Energy Optimization',
      description: 'AI-powered optimization of renewable energy systems and smart grid management',
      benefits: [
        'Energy efficiency optimization',
        'Smart grid management',
        'Renewable energy forecasting',
        'Cost reduction strategies'
      ]
    },
    {
      icon: CheckCircle,
      title: 'Environmental Risk Assessment',
      description: 'Comprehensive environmental risk analysis and mitigation strategies using AI',
      benefits: [
        'Risk identification & analysis',
        'Mitigation strategy recommendations',
        'Environmental impact assessment',
        'Compliance risk monitoring'
      ]
    }]
  ];

  const useCases = [
    {
      title: 'Corporate Sustainability',
      description: 'Help corporations achieve their sustainability goals and reduce environmental impact',
      icon: '🏢'
    },
    {
      title: 'Smart Cities',
      description: 'Build sustainable smart cities with AI-powered environmental management',
      icon: '🏙️'
    },
    {
      title: 'Agriculture',
      description: 'Optimize agricultural practices for climate resilience and sustainability',
      icon: '🌾'
    },
    {
      title: 'Energy Sector',
      description: 'Optimize renewable energy systems and reduce carbon footprint',
      icon: '⚡'
    },
    {
      title: 'Transportation',
      description: 'Develop sustainable transportation solutions and reduce emissions',
      icon: '🚗'
    },
    {
      title: 'Manufacturing',
      description: 'Optimize manufacturing processes for environmental sustainability',
      icon: '🏭'
    }]
  ];

  return (
                      </li>
                    ))}
                  </ul>
                </div>
  );
};

export default AIClimateSolutionsProPage;
