import React, { useState, useEffect } from 'react';
import { Activity, AlertCircle, CheckCircle, Clock, Globe, Search, Shield, Zap, Eye, Users, TrendingUp, AlertTriangle } from 'lucide-react';
export function SiteHealthDashboard() {
    const [healthData, setHealthData] = useState([]);
    const [overallScore, setOverallScore] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate health check data collection
        const performHealthCheck = async () => {
            setIsLoading(true);
            // Simulate API calls to various monitoring services
            await new Promise(resolve => setTimeout(resolve, 2000));
            const healthCategories = [
                {
                    name: 'Performance',
                    icon: Zap,
                    overallScore: 88,
                    metrics: [
                        {
                            name: 'Page Load Time',
                            value: 2.1,
                            status: 'good',
                            description: 'Average page load time across all pages',
                            recommendation: 'Optimize images and enable compression to reach < 2s'
                        },
                        {
                            name: 'First Contentful Paint',
                            value: 1.4,
                            status: 'excellent',
                            description: 'Time until first content appears',
                        },
                        {
                            name: 'Largest Contentful Paint',
                            value: 2.8,
                            status: 'good',
                            description: 'Time until largest content element loads',
                        },
                        {
                            name: 'Core Web Vitals Score',
                            value: 85,
                            status: 'good',
                            description: 'Overall Google Core Web Vitals performance',
                        }
                    ]
                },
                {
                    name: 'SEO Health',
                    icon: Search,
                    overallScore: 82,
                    metrics: [
                        {
                            name: 'Meta Descriptions',
                            value: 78,
                            status: 'good',
                            description: 'Percentage of pages with proper meta descriptions',
                            recommendation: 'Add meta descriptions to remaining 22% of pages'
                        },
                        {
                            name: 'Title Tags',
                            value: 95,
                            status: 'excellent',
                            description: 'Percentage of pages with optimized title tags',
                        },
                        {
                            name: 'Internal Linking',
                            value: 72,
                            status: 'warning',
                            description: 'Internal link structure and distribution',
                            recommendation: 'Improve internal linking between related services'
                        },
                        {
                            name: 'Mobile Friendliness',
                            value: 98,
                            status: 'excellent',
                            description: 'Mobile optimization score',
                        },
                        {
                            name: 'Schema Markup',
                            value: 85,
                            status: 'good',
                            description: 'Structured data implementation',
                        }
                    ]
                },
                {
                    name: 'Accessibility',
                    icon: Eye,
                    overallScore: 91,
                    metrics: [
                        {
                            name: 'ARIA Implementation',
                            value: 88,
                            status: 'good',
                            description: 'ARIA labels and roles implementation',
                            recommendation: 'Add ARIA labels to interactive elements'
                        },
                        {
                            name: 'Keyboard Navigation',
                            value: 95,
                            status: 'excellent',
                            description: 'Keyboard accessibility support',
                        },
                        {
                            name: 'Color Contrast',
                            value: 92,
                            status: 'excellent',
                            description: 'Text contrast ratio compliance',
                        },
                        {
                            name: 'Screen Reader Support',
                            value: 89,
                            status: 'good',
                            description: 'Screen reader compatibility',
                        }
                    ]
                },
                {
                    name: 'Security',
                    icon: Shield,
                    overallScore: 94,
                    metrics: [
                        {
                            name: 'HTTPS Implementation',
                            value: 100,
                            status: 'excellent',
                            description: 'SSL certificate and HTTPS enforcement',
                        },
                        {
                            name: 'Security Headers',
                            value: 92,
                            status: 'excellent',
                            description: 'Security headers implementation',
                        },
                        {
                            name: 'Vulnerability Scan',
                            value: 88,
                            status: 'good',
                            description: 'Security vulnerability assessment',
                            recommendation: 'Update dependencies with known vulnerabilities'
                        },
                        {
                            name: 'Content Security Policy',
                            value: 95,
                            status: 'excellent',
                            description: 'CSP header implementation',
                        }
                    ]
                },
                {
                    name: 'Content Quality',
                    icon: Globe,
                    overallScore: 76,
                    metrics: [
                        {
                            name: 'Content Completeness',
                            value: 68,
                            status: 'warning',
                            description: 'Percentage of pages with complete content',
                            recommendation: 'Add comprehensive content to 32% of service pages'
                        },
                        {
                            name: 'Broken Links',
                            value: 45,
                            status: 'critical',
                            description: 'Link health across the website',
                            recommendation: 'Fix 278 broken links identified in audit'
                        },
                        {
                            name: 'Image Optimization',
                            value: 82,
                            status: 'good',
                            description: 'Image optimization and alt text',
                        },
                        {
                            name: 'Content Freshness',
                            value: 89,
                            status: 'good',
                            description: 'Recently updated content percentage',
                        }
                    ]
                },
                {
                    name: 'User Experience',
                    icon: Users,
                    overallScore: 85,
                    metrics: [
                        {
                            name: 'Mobile Responsiveness',
                            value: 96,
                            status: 'excellent',
                            description: 'Mobile device compatibility',
                        },
                        {
                            name: 'Navigation Clarity',
                            value: 88,
                            status: 'good',
                            description: 'Navigation structure and usability',
                        },
                        {
                            name: 'Form Usability',
                            value: 79,
                            status: 'good',
                            description: 'Contact and service forms usability',
                        },
                        {
                            name: 'Error Handling',
                            value: 77,
                            status: 'good',
                            description: '404 pages and error handling',
                        }
                    ]
                }
            ];
            setHealthData(healthCategories);
            // Calculate overall score
            const totalScore = healthCategories.reduce((sum, category) => sum + category.overallScore, 0);
            setOverallScore(Math.round(totalScore / healthCategories.length));
            setIsLoading(false);
        };
        performHealthCheck();
    }, []);
    const getStatusColor = (status) => {
        switch (status) {
            case 'excellent': return 'text-green-500 bg-green-50 border-green-200';
            case 'good': return 'text-blue-500 bg-blue-50 border-blue-200';
            case 'warning': return 'text-yellow-500 bg-yellow-50 border-yellow-200';
            case 'critical': return 'text-red-500 bg-red-50 border-red-200';
            default: return 'text-gray-500 bg-gray-50 border-gray-200';
        }
    };
    const getStatusIcon = (status) => {
        switch (status) {
            case 'excellent': return <CheckCircle className="w-4 h-4"/>;
            case 'good': return <CheckCircle className="w-4 h-4"/>;
            case 'warning': return <AlertTriangle className="w-4 h-4"/>;
            case 'critical': return <AlertCircle className="w-4 h-4"/>;
            default: return <Clock className="w-4 h-4"/>;
        }
    };
    const getScoreColor = (score) => {
        if (score >= 90)
            return 'text-green-500';
        if (score >= 75)
            return 'text-blue-500';
        if (score >= 60)
            return 'text-yellow-500';
        return 'text-red-500';
    };
    if (isLoading) {
        return (<div className="max-w-7xl mx-auto p-6">
        <div className="text-center py-12">
          <Activity className="w-12 h-12 mx-auto mb-4 animate-spin text-blue-500"/>
          <h2 className="text-2xl font-bold mb-2">Analyzing Site Health</h2>
          <p className="text-gray-600">Performing comprehensive health check...</p>
        </div>
      </div>);
    }
    return (<div className="max-w-7xl mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Site Health Dashboard
        </h1>
        <p className="text-gray-600 text-lg">
          Comprehensive monitoring of website performance, SEO, accessibility, and user experience
        </p>
      </div>
      {/* Overall Score */}
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Overall Health Score</h2>
        <div className={`text-6xl font-bold ${getScoreColor(overallScore)} mb-4`}>
          {overallScore}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div className={`h-4 rounded-full ${overallScore >= 90 ? 'bg-green-500' : overallScore >= 75 ? 'bg-blue-500' : overallScore >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} style={{ width: `${overallScore}%` }}></div>
        </div>
        <p className="text-gray-600">
          {overallScore >= 90 ? 'Excellent - Your site is performing at peak levels!' :
            overallScore >= 75 ? 'Good - Minor improvements can boost performance.' :
                overallScore >= 60 ? 'Needs Attention - Several areas require improvement.' :
                    'Critical - Immediate action required for optimal performance.'}
        </p>
      </div>
      {/* Health Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthData.map((category, index) => {
            const IconComponent = category.icon;
            return (<div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-blue-600"/>
                    </div>
                    <h3 className="text-xl font-bold">{category.name}</h3>
                  </div>
                  <div className={`text-2xl font-bold ${getScoreColor(category.overallScore)}`}>
                    {category.overallScore}
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                {category.metrics.map((metric, metricIndex) => (<div key={metricIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-700">{metric.name}</span>
                      <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs border ${getStatusColor(metric.status)}`}>
                        {getStatusIcon(metric.status)}
                        <span>{typeof metric.value === 'number' && metric.value < 10 ? `${metric.value}s` : `${metric.value}${typeof metric.value === 'number' && metric.value >= 10 ? '%' : ''}`}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{metric.description}</p>
                    {metric.recommendation && (<p className="text-sm text-blue-600 bg-blue-50 p-2 rounded">
                        💡 {metric.recommendation}
                      </p>)}
                  </div>))}
              </div>
            </div>);
        })}
      </div>
      {/* Action Items */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
          <TrendingUp className="w-6 h-6 text-blue-600"/>
          <span>Priority Action Items</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-red-600 flex items-center space-x-2">
              <AlertCircle className="w-5 h-5"/>
              <span>Critical Issues</span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span>Fix 278 broken links across the website</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span>Update dependencies with security vulnerabilities</span>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-yellow-600 flex items-center space-x-2">
              <AlertTriangle className="w-5 h-5"/>
              <span>Improvements Needed</span>
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Add content to 32% of service pages</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Improve internal linking structure</span>
              </li>
              <li className="flex items-start space-x-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <span>Add meta descriptions to remaining pages</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Performance Trends */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Improvements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2"/>
            <h3 className="font-semibold">TypeScript Errors Fixed</h3>
            <p className="text-sm text-gray-600">All compilation errors resolved</p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <Zap className="w-8 h-8 text-blue-500 mx-auto mb-2"/>
            <h3 className="font-semibold">Build Optimization</h3>
            <p className="text-sm text-gray-600">Improved bundle splitting implemented</p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2"/>
            <h3 className="font-semibold">SEO Enhanced</h3>
            <p className="text-sm text-gray-600">Better meta tags and structured data</p>
          </div>
        </div>
      </div>
    </div>);
}
