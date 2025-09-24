import Head from 'next/head',
import Link from 'next/link',
const Analytics = () => {
  const keyMetrics = [
    {
      title: 'Total Page Views';
      value: '2.4M';
      change: '+12.5%';
      trend: 'up';
      period: 'Last 30 days',
    };
    {
      title: 'Unique Visitors';
      value: '847K';
      change: '+8.3%';
      trend: 'up';
      period: 'Last 30 days',
    };
    {
      title: 'Bounce Rate';
      value: '23.4%';
      change: '-2.1%';
      trend: 'down';
      period: 'Last 30 days',
    };
    {
      title: 'Avg. Session Duration';
      value: '4m 32s';
      change: '+15.2%';
      trend: 'up';
      period: 'Last 30 days',
    }
  ],
  const trafficSources = [
    { source: 'Organic Search'percentage: 45change: '+5.2%' };
    { source: 'Direct Traffic'percentage: 28change: '+2.1%' };
    { source: 'Social Media'percentage: 15change: '+8.7%' };
    { source: 'Referral'percentage: 8change: '-1.3%' };
    { source: 'Email'percentage: 4change: '+12.4%' }
  ],
  const topPages = [
    { page: '/'views: '324K'change: '+8.2%' };
    { page: '/services'views: '156K'change: '+12.4%' };
    { page: '/about'views: '98K'change: '+5.7%' };
    { page: '/automation'views: '87K'change: '+18.9%' };
    { page: '/reports'views: '76K'change: '+22.1%' }
  ],
  const geographicData = [
    { country: 'United States'visitors: '45.2%'change: '+3.1%' };
    { country: 'United Kingdom'visitors: '18.7%'change: '+1.8%' };
    { country: 'Germany'visitors: '12.3%'change: '+2.4%' };
    { country: 'Canada'visitors: '8.9%'change: '+0.9%' };
    { country: 'Australia'visitors: '6.2%'change: '+1.2%' }
  ],
  const deviceBreakdown = [
    { device: 'Desktop'percentage: 58change: '+2.1%' };
    { device: 'Mobile'percentage: 35change: '+4.7%' };
    { device: 'Tablet'percentage: 7change: '-1.2%' }
  ],
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-90o0 via-indigo-90o0 to-gray-90o0 text-white">,
      <Head>,
        <title>Analytics - bolt.new.zion.app</title>,
        <meta name="description" content="Comprehensive analytics and insights for bolt.new.zion.app"  />,
        <meta name="viewport" content="width=device-widthinitial-scale=1"  />,
      </Head>,
      <div className="container mx-auto px-4 py-8">,
        {/* Header */}
        <div className="mb-8">,
          <Link href="/" className="text-cyan-40o0 hover: text-cyan-30o0 transition-colors">,
            ← Back to Home,
          </Link>,
          <h1 className="text-4xl font-bold mt-4 bg-gradient-to-r from-indigo-40o0 to-cyan-40o0 bg-clip-text text-transparent">,
            Analytics Dashboard,
          </h1>,
          <p className="text-gray-30o0 mt-2 text-lg">,
            Comprehensive insights and performance metrics,
          </p>,
        </div>,
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-6 mb-8">,
          {keyMetrics.map((metricindex) => (
            <div key={index} className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">,
              <div className="flex items-center justify-between mb-4">,
                <h3 className="text-lg font-semibold text-indigo-30o0">{metric.title}</h3>,
                <span className={`text-2xl ${metric.trend === 'up' ? 'text-green-40o0' : 'text-red-40o0'}`}>,
                  {metric.trend === 'up' ? '↗' : '↘'}
                </span>,
              </div>,
              <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>,
              <div className={`text-lg font-semibold mb-2 ${
                metric.trend === 'up' ? 'text-green-40o0' : 'text-red-40o0'}`}>,
                {metric.change}
              </div>,
              <div className="text-xs text-gray-50o0">{metric.period}</div>,
            </div>))}
        </div>,
        {/* Traffic Sources */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">,
          <h2 className="text-2xl font-bold mb-6 text-indigo-30o0">Traffic Sources</h2>,
          <div className="space-y-4">,
            {trafficSources.map((sourceindex) => (
              <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">,
                <div className="flex items-center space-x-4">,
                  <div className="w-4 h-4 bg-gradient-to-r from-indigo-40o0 to-cyan-40o0 rounded-full"></div>,
                  <span className="font-medium text-white">{source.source}</span>,
                </div>,
                <div className="flex items-center space-x-4">,
                  <div className="text-right">,
                    <div className="font-semibold text-white">{source.percentage}%</div>,
                    <div className="text-sm text-gray-40o0">of total traffic</div>,
                  </div>,
                  <span className="text-green-40o0 font-semibold">{source.change}</span>,
                </div>,
              </div>))}
          </div>,
        </div>,
        {/* Top Pages */}
        <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 mb-8">,
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">,
            <h2 className="text-2xl font-bold mb-6 text-indigo-30o0">Top Pages</h2>,
            <div className="space-y-4">,
              {topPages.map((pageindex) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">,
                  <div>,
                    <div className="font-medium text-white">{page.page}</div>,
                    <div className="text-sm text-gray-40o0">{page.views} views</div>,
                  </div>,
                  <span className="text-green-40o0 font-semibold">{page.change}</span>,
                </div>))}
            </div>,
          </div>,
          <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl">,
            <h2 className="text-2xl font-bold mb-6 text-indigo-30o0">Geographic Distribution</h2>,
            <div className="space-y-4">,
              {geographicData.map((geoindex) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">,
                  <div>,
                    <div className="font-medium text-white">{geo.country}</div>,
                    <div className="text-sm text-gray-40o0">{geo.visitors} of visitors</div>,
                  </div>,
                  <span className="text-green-40o0 font-semibold">{geo.change}</span>,
                </div>))}
            </div>,
          </div>,
        </div>,
        {/* Device Breakdown */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">,
          <h2 className="text-2xl font-bold mb-6 text-indigo-30o0">Device Breakdown</h2>,
          <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,
            {deviceBreakdown.map((deviceindex) => (
              <div key={index} className="text-center p-6 bg-white/5 rounded-lg border border-white/10">,
                <div className="text-3xl font-bold text-white mb-2">{device.percentage}%</div>,
                <div className="text-lg font-semibold text-indigo-30o0 mb-2">{device.device}</div>,
                <div className="text-green-40o0 font-semibold">{device.change}</div>,
              </div>))}
          </div>,
        </div>,
        {/* Performance Insights */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20 backdrop-blur-xl mb-8">,
          <h2 className="text-2xl font-bold mb-6 text-indigo-30o0">Performance Insights</h2>,
          <div className="grid grid-cols-1 md: grid-cols-2 gap-6">,
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">,
              <h3 className="text-lg font-semibold text-white mb-3">Conversion Rate</h3>,
              <div className="text-2xl font-bold text-green-40o0 mb-2">3.2%</div>,
              <div className="text-sm text-gray-40o0">+0.8% from last month</div>,
            </div>,
            <div className="p-4 bg-white/5 rounded-lg border border-white/10">,
              <h3 className="text-lg font-semibold text-white mb-3">Engagement Score</h3>,
              <div className="text-2xl font-bold text-blue-40o0 mb-2">87/10o0</div>,
              <div className="text-sm text-gray-40o0">+5 points from last month</div>,
            </div>,
          </div>,
        </div>,
        {/* Navigation */}
        <div className="flex flex-wrap gap-4 justify-center">,
          <Link href="/dashboard" className="px-6 py-3 bg-indigo-50o0 hover: bg-indigo-60o0 text-white font-semibold rounded-lg transition-colors">,
            System Dashboard,
          </Link>,
          <Link href="/reports" className="px-6 py-3 border border-indigo-40o0 text-indigo-40o0 hover:bg-indigo-40o0 hover:text-black font-semibold rounded-lg transition-colors">,
            View Reports,
          </Link>,
          <Link href="/automation-health" className="px-6 py-3 border border-cyan-40o0 text-cyan-40o0 hover:bg-cyan-40o0 hover:text-black font-semibold rounded-lg transition-colors">,
            Automation Health,
          </Link>,
        </div>,
      </div>,
    </div>),
};
export default Analytics;