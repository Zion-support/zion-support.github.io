import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Progress } from './ui/Progress';
import { 
  Zap, 
  TrendingUp, 
  Clock, 
  Shield, 
  Database,
  Globe,
  Smartphone,
  Monitor,
  CheckCircle,
  AlertTriangle,
  BarChart3,
  Target,
  Rocket,
  Cpu,
  MemoryStick
} from 'lucide-react';

const PerformanceOptimizationShowcase: React.FC = () => {
  const [selectedMetric, setSelectedMetric] = useState('overall');

  const optimizationMetrics = [
    {
      id: 'overall',
      title: 'Overall Performance',
      value: 98,
      target: 95,
      status: 'excellent',
      description: 'Comprehensive performance score across all metrics'
    },
    {
      id: 'speed',
      title: 'Page Load Speed',
      value: 1.2,
      target: 2.0,
      unit: 's',
      status: 'excellent',
      description: 'Average page load time'
    },
    {
      id: 'lighthouse',
      title: 'Lighthouse Score',
      value: 96,
      target: 90,
      status: 'excellent',
      description: 'Google Lighthouse performance score'
    },
    {
      id: 'core-web-vitals',
      title: 'Core Web Vitals',
      value: 94,
      target: 85,
      status: 'excellent',
      description: 'Google Core Web Vitals compliance'
    },
    {
      id: 'mobile',
      title: 'Mobile Performance',
      value: 97,
      target: 90,
      status: 'excellent',
      description: 'Mobile-specific performance metrics'
    },
    {
      id: 'accessibility',
      title: 'Accessibility Score',
      value: 99,
      target: 95,
      status: 'excellent',
      description: 'WCAG compliance and accessibility'
    }
  ];

  const optimizations = [
    {
      id: 1,
      title: "Advanced Code Splitting",
      description: "Intelligent code splitting reduces initial bundle size by 60% while maintaining functionality.",
      icon: <Zap className="h-8 w-8 text-blue-500" />,
      impact: "High",
      implementation: "Automatic",
      benefits: ["60% smaller initial bundle", "Faster page loads", "Better user experience"],
      category: "Frontend"
    },
    {
      id: 2,
      title: "Image Optimization Pipeline",
      description: "Automated image compression and format conversion for optimal web delivery.",
      icon: <Database className="h-8 w-8 text-green-500" />,
      impact: "High",
      implementation: "Automated",
      benefits: ["80% smaller images", "Next-gen formats", "Responsive delivery"],
      category: "Assets"
    },
    {
      id: 3,
      title: "CDN & Edge Caching",
      description: "Global content delivery network with intelligent edge caching for maximum speed.",
      icon: <Globe className="h-8 w-8 text-purple-500" />,
      impact: "Very High",
      implementation: "Infrastructure",
      benefits: ["Global edge locations", "99.9% uptime", "Reduced latency"],
      category: "Infrastructure"
    },
    {
      id: 4,
      title: "Database Query Optimization",
      description: "Advanced query optimization and caching strategies for lightning-fast data access.",
      icon: <Cpu className="h-8 w-8 text-orange-500" />,
      impact: "High",
      implementation: "Backend",
      benefits: ["Query caching", "Index optimization", "Connection pooling"],
      category: "Backend"
    },
    {
      id: 5,
      title: "Progressive Web App Features",
      description: "PWA implementation with service workers for offline functionality and app-like experience.",
      icon: <Smartphone className="h-8 w-8 text-indigo-500" />,
      impact: "Medium",
      implementation: "Frontend",
      benefits: ["Offline support", "App-like experience", "Push notifications"],
      category: "Mobile"
    },
    {
      id: 6,
      title: "Security & Performance Headers",
      description: "Optimized security headers that enhance both security and performance.",
      icon: <Shield className="h-8 w-8 text-red-500" />,
      impact: "Medium",
      implementation: "Server",
      benefits: ["Enhanced security", "Better caching", "Compliance"],
      category: "Security"
    }
  ];

  const performanceData = [
    { metric: 'Page Load Time', before: 4.2, after: 1.2, improvement: 71 },
    { metric: 'First Contentful Paint', before: 2.8, after: 0.9, improvement: 68 },
    { metric: 'Largest Contentful Paint', before: 5.1, after: 1.8, improvement: 65 },
    { metric: 'Cumulative Layout Shift', before: 0.15, after: 0.02, improvement: 87 },
    { metric: 'First Input Delay', before: 180, after: 45, improvement: 75 },
    { metric: 'Time to Interactive', before: 6.8, after: 2.1, improvement: 69 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Very High': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-blue-100 text-blue-800';
      case 'Low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-16 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-white border-0">
            <Rocket className="h-3 w-3 mr-1" />
            Performance Optimization
          </Badge>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Lightning-Fast Performance
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience blazing-fast load times and optimal performance with our advanced optimization techniques. 
            From code splitting to edge caching, we've implemented cutting-edge solutions for maximum speed.
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {optimizationMetrics.map((metric) => (
            <Card key={metric.id} className={`bg-gray-800 border-gray-700 hover:border-blue-500 transition-colors cursor-pointer ${
              selectedMetric === metric.id ? 'border-blue-500' : ''
            }`} onClick={() => setSelectedMetric(metric.id)}>
              <CardContent className="p-4 text-center">
                <div className={`text-2xl font-bold mb-1 ${getStatusColor(metric.status)}`}>
                  {metric.value}{metric.unit || '%'}
                </div>
                <div className="text-xs text-gray-400 mb-2">{metric.title}</div>
                <Progress 
                  value={(metric.value / (metric.target + 10)) * 100} 
                  className="h-1 bg-gray-700"
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Selected Metric Details */}
        {selectedMetric && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-2">
                {optimizationMetrics.find(m => m.id === selectedMetric)?.title}
              </h3>
              <p className="text-blue-100 mb-4">
                {optimizationMetrics.find(m => m.id === selectedMetric)?.description}
              </p>
              <div className="text-4xl font-bold mb-2">
                {optimizationMetrics.find(m => m.id === selectedMetric)?.value}
                {optimizationMetrics.find(m => m.id === selectedMetric)?.unit || '%'}
              </div>
              <div className="text-blue-200">
                Target: {optimizationMetrics.find(m => m.id === selectedMetric)?.target}
                {optimizationMetrics.find(m => m.id === selectedMetric)?.unit || '%'}
              </div>
            </div>
          </div>
        )}

        {/* Optimization Techniques */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {optimizations.map((optimization) => (
            <Card key={optimization.id} className="group hover:shadow-2xl transition-all duration-300 bg-gray-800 border-gray-700 hover:border-green-500">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  {optimization.icon}
                  <div className="flex gap-2">
                    <Badge className={getImpactColor(optimization.impact)}>
                      {optimization.impact}
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {optimization.category}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-green-400 transition-colors">
                  {optimization.title}
                </CardTitle>
                <CardDescription className="text-gray-400">
                  {optimization.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-sm text-gray-500">
                    Implementation: <span className="text-green-400">{optimization.implementation}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-gray-300">Key Benefits:</div>
                    {optimization.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-400">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Performance Comparison */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center">Performance Improvements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {performanceData.map((data, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">{data.metric}</div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm">Before: {data.before}{data.metric.includes('Time') ? 's' : data.metric.includes('Delay') ? 'ms' : ''}</span>
                  <span className="text-sm">After: {data.after}{data.metric.includes('Time') ? 's' : data.metric.includes('Delay') ? 'ms' : ''}</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-300" />
                  <span className="text-green-300 font-semibold">{data.improvement}% improvement</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
            <div className="text-gray-300">Performance Score</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-400 mb-2">1.2s</div>
            <div className="text-gray-300">Avg Load Time</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
            <div className="text-gray-300">Uptime</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-orange-400 mb-2">A+</div>
            <div className="text-gray-300">Security Grade</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Optimize Your Performance?</h3>
          <p className="text-gray-300 mb-6">Let our experts analyze and optimize your application for maximum performance.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
              Get Performance Audit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Case Studies
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceOptimizationShowcase;