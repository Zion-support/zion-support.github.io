import React, { useState, useEffect } from 'react';

interface ContentMetrics {
  totalViews: number;
  totalDownloads: number;
  totalEngagement: number;
  topContent: Array<{
    title: string;
    views: number;
    type: string;
    href: string;
  }>;
}

export default function ContentMetrics() {
  const [metrics, setMetrics] = useState<ContentMetrics>({
    totalViews: 0,
    totalDownloads: 0,
    totalEngagement: 0,
    topContent: []
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading metrics data
    const loadMetrics = async () => {
      setIsLoading(true);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data - in real implementation, this would come from analytics API
      setMetrics({
        totalViews: 125000,
        totalDownloads: 15000,
        totalEngagement: 95,
        topContent: [
          {
            title: "AI 2025: Generative AI Enterprise Revolution",
            views: 25000,
            type: "Blog Post",
            href: "/blog/ai-2025-generative-ai-enterprise-revolution"
          },
          {
            title: "AI 2025 Comprehensive Implementation Playbook",
            views: 18000,
            type: "Resource Guide",
            href: "/resources/ai-2025-comprehensive-implementation-playbook"
          },
          {
            title: "AI Transformation: Global Retail Giant Success",
            views: 15000,
            type: "Case Study",
            href: "/case-studies/ai-transformation-global-retail-giant-2025"
          },
          {
            title: "AI 2025: Autonomous Vehicles Revolution",
            views: 12000,
            type: "Blog Post",
            href: "/blog/ai-2025-autonomous-vehicles-transportation"
          },
          {
            title: "AI 2026 Strategy Playbook",
            views: 10000,
            type: "Resource Guide",
            href: "/resources/ai-2026-strategy-playbook"
          }
        ]
      });
      
      setIsLoading(false);
    };

    loadMetrics();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Content Performance</h3>
      
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {metrics.totalViews.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Total Views</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">
            {metrics.totalDownloads.toLocaleString()}
          </div>
          <div className="text-sm text-gray-600">Downloads</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">
            {metrics.totalEngagement}%
          </div>
          <div className="text-sm text-gray-600">Engagement</div>
        </div>
      </div>

      <div>
        <h4 className="font-medium text-gray-900 mb-3">Top Performing Content</h4>
        <div className="space-y-2">
          {metrics.topContent.map((content, index) => (
            <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900 truncate">
                  {content.title}
                </div>
                <div className="text-xs text-gray-500">
                  {content.type} • {content.views.toLocaleString()} views
                </div>
              </div>
              <div className="ml-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContentMetricsWidget() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Content Performance Insights
          </h2>
          <p className="text-lg text-gray-600">
            Real-time metrics and analytics for our AI content library
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ContentMetrics />
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Engagement Trends</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Average Time on Page</span>
                <span className="text-sm font-semibold text-green-600">4.2 min</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Bounce Rate</span>
                <span className="text-sm font-semibold text-blue-600">25%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Return Visitors</span>
                <span className="text-sm font-semibold text-purple-600">68%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Social Shares</span>
                <span className="text-sm font-semibold text-orange-600">2.3K</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Content Categories</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Blog Posts</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-12 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold">45%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Resources</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-10 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold">35%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Case Studies</span>
                <div className="flex items-center gap-2">
                  <div className="w-16 h-2 bg-gray-200 rounded-full">
                    <div className="w-8 h-2 bg-purple-500 rounded-full"></div>
                  </div>
                  <span className="text-sm font-semibold">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}