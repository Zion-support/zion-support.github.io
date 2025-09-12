import React from 'react';

interface Metric {
  value: string;
  label: string;
  description?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'stable';
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'red';
}

interface SuccessMetricsProps {
  title?: string;
  subtitle?: string;
  metrics: Metric[];
  variant?: 'default' | 'featured' | 'minimal';
  showTrends?: boolean;
}

export default function SuccessMetrics({
  title = "Trusted by Industry Leaders",
  subtitle = "Join thousands of professionals who rely on our expertise and resources",
  metrics,
  variant = 'default',
  showTrends = true
}: SuccessMetricsProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'featured':
        return {
          container: 'bg-gradient-to-r from-blue-50 to-indigo-50',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          card: 'bg-white shadow-lg border border-gray-100',
          value: 'text-blue-600',
          label: 'text-gray-600',
          description: 'text-gray-500'
        };
      case 'minimal':
        return {
          container: 'bg-white',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          card: 'bg-gray-50 border border-gray-200',
          value: 'text-gray-900',
          label: 'text-gray-600',
          description: 'text-gray-500'
        };
      default:
        return {
          container: 'bg-white',
          title: 'text-gray-900',
          subtitle: 'text-gray-600',
          card: 'bg-white border border-gray-200',
          value: 'text-blue-600',
          label: 'text-gray-600',
          description: 'text-gray-500'
        };
    }
  };

  const getColorStyles = (color?: string) => {
    switch (color) {
      case 'green':
        return 'text-green-600';
      case 'purple':
        return 'text-purple-600';
      case 'orange':
        return 'text-orange-600';
      case 'red':
        return 'text-red-600';
      default:
        return 'text-blue-600';
    }
  };

  const getTrendIcon = (trend?: string) => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return null;
    }
  };

  const styles = getVariantStyles();

  return (
    <section className={`py-16 ${styles.container}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className={`text-3xl font-bold mb-4 ${styles.title}`}>
            {title}
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${styles.subtitle}`}>
            {subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl font-bold mb-2 ${getColorStyles(metric.color)}`}>
                {metric.value}
              </div>
              <div className={`text-sm ${styles.label} mb-1`}>
                {metric.label}
              </div>
              {metric.description && (
                <div className={`text-xs ${styles.description}`}>
                  {metric.description}
                </div>
              )}
              {showTrends && metric.trend && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  <span className="text-sm">{getTrendIcon(metric.trend)}</span>
                  <span className={`text-xs ${styles.description}`}>
                    {metric.trend === 'up' ? 'Growing' : 
                     metric.trend === 'down' ? 'Declining' : 'Stable'}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center mb-12">
          <p className={`text-gray-600 mb-8 ${styles.subtitle}`}>
            Trusted by leading companies worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-gray-400">Microsoft</div>
            <div className="text-2xl font-bold text-gray-400">Google</div>
            <div className="text-2xl font-bold text-gray-400">Amazon</div>
            <div className="text-2xl font-bold text-gray-400">IBM</div>
            <div className="text-2xl font-bold text-gray-400">Salesforce</div>
            <div className="text-2xl font-bold text-gray-400">Oracle</div>
          </div>
        </div>

        {/* Recent Success Stories */}
        <div className={`${styles.card} rounded-xl p-8`}>
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recent Success Stories
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">AI</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fortune 500 Manufacturing</h4>
                  <p className="text-sm text-gray-600">AI Implementation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Zion Tech Group helped us implement AI automation across our supply chain, 
                resulting in 40% cost reduction and 60% faster processing times."
              </p>
              <div className="text-sm text-blue-600 font-medium">
                - CTO, Global Manufacturing Co.
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold">SaaS</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Growing SaaS Startup</h4>
                  <p className="text-sm text-gray-600">Micro SaaS Development</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "From concept to $1M ARR in 18 months. Their expertise in micro SaaS 
                development and growth strategies was invaluable."
              </p>
              <div className="text-sm text-green-600 font-medium">
                - Founder, Tech Startup
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Predefined metric sets for common use cases
export const defaultMetrics: Metric[] = [
  {
    value: "500+",
    label: "Projects Delivered",
    description: "Successfully completed",
    color: "blue",
    trend: "up"
  },
  {
    value: "25K+",
    label: "Resource Downloads",
    description: "Free guides & templates",
    color: "green",
    trend: "up"
  },
  {
    value: "98%",
    label: "Client Satisfaction",
    description: "Average rating",
    color: "purple",
    trend: "stable"
  },
  {
    value: "15+",
    label: "Years Experience",
    description: "Industry expertise",
    color: "orange",
    trend: "up"
  }
];

export const contentMetrics: Metric[] = [
  {
    value: "50+",
    label: "Articles Published",
    description: "This year",
    color: "blue",
    trend: "up"
  },
  {
    value: "15K+",
    label: "Monthly Readers",
    description: "Growing community",
    color: "green",
    trend: "up"
  },
  {
    value: "4.9/5",
    label: "Content Rating",
    description: "User feedback",
    color: "purple",
    trend: "stable"
  },
  {
    value: "Weekly",
    label: "New Content",
    description: "Fresh insights",
    color: "orange",
    trend: "up"
  }
];