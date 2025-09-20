export default function Page() {
,
      {

        name: 'Error Rate',
        value: Math.random() * 2,
        unit: '%',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.8 ? 'good' : Math.random() > 0.5 ? 'warning' : 'critical',
        icon: AlertTriangle
      },
      {

        name: 'Response Time',
        value: Math.random() * 500 + 100,
        unit: 'ms',
        trend: Math.random() > 0.5 ? 'up' : 'down',
        status: Math.random() > 0.7 ? 'good' : 'warning',
        icon: Zap

    ];

      'High memory usage detected on server-01',;
      'Network latency increased by 15%',;
      'Error rate spike detected in last 5 minutes';
    ];

    
      'Consider implementing lazy loading for images',;
      'Optimize database queries for better performance',;
      'Enable CDN for static assets delivery';
          transition={{ delay: 0.6 }}
          className="bg-white / 5 backdrop - blur - sm border border-white / 10 rounded-xl p - 8 text-center"
        >
          <BarChart3 className="w-16 h-16 text-gray - 400 mx - auto mb-4" />
          <h3 className="text-xl font - semibold text-white mb-2">Performance Trends</h3>
          <p className="text-gray -400">
            {isMonitoring
              ? 'Real - time performance data is being collected and analyzed...'
