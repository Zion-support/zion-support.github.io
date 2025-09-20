import { Link  } from 'react-router-dom',

export default function Page() {
 from 'framer-motion',
,
    {,
      title: "Custom Dashboards",
      description: "Build personalized dashboards tailored to your business needs",
      icon: Target,
      color: "from - orange - 400 to - red - 500"
    },
  ],

export default function Analytics() {
  const [timeRange, setTimeRange] = useState('30d'),
  
  const { data: pageViewTrends } = useQuery({
    queryKey: ['page-views-trend', timeRange],
    queryFn: async () => {
      // Get daily page views for trend chart
      const days = parseInt(timeRange.replace('d', '')),
      const startDate = new Date(),
      startDate.setDate(startDate.getDate() - days),
      
      const { data, error } = await supabase
        .from('analytics_events')
        .select('created_at, path')
        .eq('event_typepage_view')
        .gte('created_at', startDate.toISOString()),
        
      if (error) throw error,
      
      // Group by date
      const viewsByDate: Record<string, { date: string, views: number }> = {},
      data?.forEach(view => {
        const date = new Date(view.created_at).toISOString().split('T')[0],
        if (!viewsByDate[date]) viewsByDate[date] = { date, views: 0 },
        viewsByDate[date].views++,
      }),
      
      // Fill in missing dates
      const result = [],
      for (let i = 0, i < days, i++) {
        const date = new Date(),
        date.setDate(date.getDate() - i),
        const dateStr = date.toISOString().split('T')[0],
        
        if (viewsByDate[dateStr]) {
          result.push(viewsByDate[dateStr]),
        } else {
          result.push({ date: dateStr, views: 0 }),
        }
      }
      
      return result.sort((a, b) => a.date.localeCompare(b.date)),
    }
  }),
  
  const { data: conversionData } = useQuery({
    queryKey: ['conversion-data', timeRange],
    queryFn: async () => {
      const days = parseInt(timeRange.replace('d', '')),
      const startDate = new Date(),
      startDate.setDate(startDate.getDate() - days),
      
      const { data, error } = await supabase
        .from('analytics_events')
        .select('created_at, metadata')
        .eq('event_typeconversion')
        .gte('created_at', startDate.toISOString()),
        
      if (error) throw error,
      
      // Group by conversion type and date
      const conversionsByType: Record<string, Record<string, number>> = {},
      data?.forEach(item => {
        const date = new Date(item.created_at).toISOString().split('T')[0],
        const conversionType = item.metadata?.conversionType || 'unknown',
        
        if (!conversionsByType[conversionType]) {
          conversionsByType[conversionType] = {},
        }
        
        if (!conversionsByType[conversionType][date]) {
          conversionsByType[conversionType][date] = 0,
        }
        
        conversionsByType[conversionType][date]++,
      }),
      
      // Get all dates in range
      const dates = [],
      for (let i = 0, i < days, i++) {
        const date = new Date(),
        date.setDate(date.getDate() - i),
        dates.push(date.toISOString().split('T')[0]),
      }
      dates.sort(),
      
      // Format data for chart
      return dates.map(date => {
        const result: Record<string, string | number> = { date },
        
        Object.keys(conversionsByType).forEach(type => {
          result[type] = conversionsByType[type][date] || 0,
        }),
        
        return result,
      }),
    }
  }),

  const { data: featureUsageData } = useQuery({
    queryKey: ['feature-usage-data', timeRange],
    queryFn: async () => {
      const days = parseInt(timeRange.replace('d', '')),
      const { data, error } = await supabase.rpc('get_feature_usage_stats', {
        days_back: days
      }),

      if (error) {
        console.error('Error fetching feature usage:', error),
        // fallback query
        const startDate = new Date(),
        startDate.setDate(startDate.getDate() - days),
        const { data: manual, error: manualError } = await supabase
          .from('analytics_events')
          .select('created_at, metadata')
          .eq('event_typefeature_usage')
          .gte('created_at', startDate.toISOString()),

        if (manualError) throw manualError,

        const usageByDate: Record<string, Record<string, number>> = {},
        manual?.forEach(ev => {
          const date = new Date(ev.created_at).toISOString().split('T')[0],
          const feature = ev.metadata?.feature || 'unknown',
          if (!usageByDate[date]) usageByDate[date] = {},
          if (!usageByDate[date][feature]) usageByDate[date][feature] = 0,
          usageByDate[date][feature]++,
        }),

        return Object.entries(usageByDate).map(([date, feats]) => ({
          date,
          ...feats
        })),
      }

      return data || [],
    },
    {
      name: "Website Analytics",
      description: "Track website performance and user behavior",
      icon: Globe,
      features: ["Traffic analysis", "User engagement", "Conversion tracking", "SEO insights"],
      path: "/services / website - analytics"
    },
    {
      name: "AI Data Analytics",
      description: "Advanced AI - powered data analysis and insights",
      icon: Zap,
      features: ["Machine learning", "Pattern recognition", "Predictive modeling", "Automated insights"],
      path: "/services / ai - data - analytics"
    },
    {,
      name: "Financial Analytics",
      description: "Financial performance tracking and optimization",
      icon: DollarSign,
      features: ["Revenue analysis", "Cost optimization", "Profit margins", "Financial forecasting"],
      path: "/services / ai - financial - analytics"
    },
  ],

  const metrics = [,
    { icon: Users, value: "10K+", label: "Active Users", description: "Monthly active users" },
    { icon: TrendingUp, value: "95%", label: "Uptime", description: "System reliability" },
    { icon: Globe, value: "25+", label: "Countries", description: "Global reach" },
    { icon: Zap, value: "1M+", label: "Data Points", description: "Processed daily" },
  ],

  const integrations = [,
    { name: "Google Analytics", icon: "🔍", description: "Website traffic and user behavior" },
    { name: "Salesforce", icon: "☁️", description: "CRM data and sales metrics" },
    { name: "Stripe", icon: "💳", description: "Payment and revenue data" },
    { name: "Slack", icon: "💬", description: "Team communication metrics" },
    { name: "HubSpot", icon: "🎯", description: "Marketing and lead data" },
    { name: "AWS", icon: "☁️", description: "Cloud infrastructure metrics" },
  ],

  return (<div className="min - h-screen bg-gradient - to - br from - slate - 900 via - slate - 800 to - slate -900">
      <SEO
        title="Analytics - Zion Tech Group"
        description="Transform your data into actionable insights with our comprehensive analytics solutions.Real - time monitoring, AI - powered analysis, and custom dashboards."
        keywords="analytics, business intelligence, data analysis, AI analytics, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset - 0 bg-gradient - to - r from - cyan - 500 / 10 via - blue - 500 / 10 to - purple -500 / 10"></div>
        <div className="relative z - 10 container mx - auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            animate = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center max - w-4xl mx -auto"

            <div className="flex items - center justify - center mb-6">
              <div className="w-16 h-16 bg-gradient - to - br from - cyan - 400 to - blue - 500 rounded-2xl flex items - center justify - center mr-4">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font - bold text-white">Analytics</h1>
            </div>

            <h2 className="text-5xl md:text-6xl font - bold text-white mb-6 leading -tight">
              Data - Driven < span className="block bg-gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg-clip - text text-transparent">
                Insights
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate - 300 mb-8 leading -relaxed">
              Transform your raw data into actionable insights with our comprehensive analytics platform.Monitor performance, track trends, and make informed decisions with real - time data.</p>

            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <Link
                to="/contact"
                className="inline - flex items - center px-8 py-4 bg-gradient - to - r from - cyan - 500 to - blue - 600 text-white font - semibold rounded-lg hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 200 hover:scale - 105 shadow-lg shadow-cyan -500 / 25"

                Get Started < ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline - flex items - center px-8 py-4 border border-cyan - 400 / 30 text-cyan - 400 font - semibold rounded-lg hover:bg-cyan - 400 / 10 transition - all duration -200"

                Explore Services
              </Link>
            </div>
          </motion.div>,
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-16 bg-slate -800 / 50">,
        <div className="container mx - auto px-4">
          <div className="grid grid - cols - 2 md:grid - cols - 4 gap-8">
            {metrics.map ( (metric, index) => (<motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 20

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="text-center"

                <div className="w-16 h-16 bg-gradient - to - br from - cyan - 400 / 20 to - blue - 500 / 20 rounded-full flex items - center justify - center mx - auto mb-4">
                  <metric.icon className="w-8 h-8 text-cyan -400" />
                </div>
                <div className="text-3xl font - bold text-white mb-2">{metric.value}</div>
                <div className="text-cyan - 400 font - semibold mb-1">{metric.label}</div>
                <div className="text-sm text-slate -400">{metric.description}</div>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">,
        <div className="container mx - auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-6">
              Powerful < span className="text-cyan -400">Analytics Features</span>
            </h2>
            <p className="text-xl text-slate - 300 max - w-3xl mx -auto">
              Our analytics platform provides everything you need to understand your data
              and make informed business decisions.</p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 4 gap-8">
            {analyticsFeatures.map((feature, index) => (<motion.div
                key={index}
                initial = {
  { opacity: 0,
  y: 30

}}
                whileInView = {
  { opacity: 1,
  y: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-slate - 800 / 50 border border-slate - 700 / 50 rounded-xl p - 6 hover:border-cyan - 400 / 30 transition - all duration - 300 hover:scale -105"

                <div className={`w-12 h-12 bg-gradient - to - br ${feature.color} rounded-lg flex items - center justify - center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font - bold text-white mb-3">{feature.title}</h3>
                <p className="text-slate -300">{feature.description}</p>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 bg-slate -800 / 50">,
        <div className="container mx - auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-6">
              Analytics < span className="text-cyan -400">Solutions</span>
            </h2>
            <p className="text-xl text-slate - 300 max - w-3xl mx -auto">
              Choose from our comprehensive range of analytics solutions designed to meet
              every aspect of your business intelligence needs.</p>
          </motion.div>

          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-8">
            {analyticsTypes.map((type, index) => (<motion.div
                key={index}
                initial = {
  { opacity: 0,
  x: index % 2 === 0 ? -30 : 30

}}
                whileInView = {
  { opacity: 1,
  x: 0

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-slate - 700 / 30 border border-slate - 600 / 30 rounded-xl p - 8 hover:border-cyan - 400 / 30 transition - all duration -300"

                <div className="w-16 h-16 bg-gradient - to - br from - cyan - 400 / 20 to - blue - 500 / 20 rounded-xl flex items - center justify - center mb-6">
                  <type.icon className="w-8 h-8 text-cyan -400" />
                </div>

                <h3 className="text-2xl font - bold text-white mb-4">{type.name}</h3>
                <p className="text-slate - 300 mb-6">{type.description}</p>

                <div className="space - y-3 mb-6">
                  {type.features.map((feature, featureIndex) => (<div key={featureIndex} className="flex items - center text-slate -400">
                      <CheckCircle className="w-4 h-4 text-cyan - 400 mr-3 flex - shrink -0" />
                      {feature}
                    </div>) ) }
                </div>

                <Link
                  to={type.path}
                  className="inline - flex items - center text-cyan - 400 hover: text-cyan - 300 font - medium transition -colors"

                  Learn More < ArrowRight className="ml-2 w-4 h-4" />
                </Link>,
              </motion.div>) ) }
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20">,
        <div className="container mx - auto px-4">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"

            <h2 className="text-4xl font - bold text-white mb-6">
              Seamless < span className="text-cyan -400">Integrations</span>
            </h2>
            <p className="text-xl text-slate - 300 max - w-3xl mx -auto">
              Connect with your favorite tools and platforms to centralize all your data
              and get a complete view of your business.</p>
          </motion.div>

          <div className="grid grid - cols - 2 md:grid - cols - 3 lg:grid - cols - 6 gap-6">
            {integrations.map((integration, index) => (<motion.div
                key={index}
                initial = {
  { opacity: 0,
  scale: 0.8

}}
                whileInView = {
  { opacity: 1,
  scale: 1

}}
                transition = {
  { duration: 0.6,
  delay: index * 0.1

}}
                className="bg-slate - 800 / 50 border border-slate - 700 / 50 rounded-xl p - 6 text-center hover:border-cyan - 400 / 30 transition - all duration - 300 hover:scale -105"

                <div className="text-4xl mb-3">{integration.icon}</div>
                <h3 className="text-white font - medium mb-2">{integration.name}</h3>
                <p className="text-sm text-slate -400">{integration.description}</p>
              </motion.div>,) ) }
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient - to - r from - cyan - 500 / 10 via - blue - 500 / 10 to - purple -500 / 10">,
        <div className="container mx - auto px-4 text-center">
          <motion.div
            initial = {
  { opacity: 0,
  y: 30

}}
            whileInView = {
  { opacity: 1,
  y: 0

}}
            transition={{ duration: 0.8 }}

            <h2 className="text-4xl font - bold text-white mb-6">
              Ready to Unlock Your Data?
            </h2>
            <p className="text-xl text-slate - 300 mb-8 max - w-2xl mx -auto">
              Start transforming your data into actionable insights today.Our analytics platform will help you make better decisions and drive growth.</p>

            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <Link
                to="/contact"
                className="inline - flex items - center px-8 py-4 bg-gradient - to - r from - cyan - 500 to - blue - 600 text-white font - semibold rounded-lg hover:from - cyan - 400 hover:to - blue - 500 transition - all duration - 200 hover:scale - 105 shadow-lg shadow-cyan -500 / 25"

                Start Your Analytics Journey < ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/request - quote"
                className="inline - flex items - center px-8 py-4 border border-cyan - 400 / 30 text-cyan - 400 font - semibold rounded-lg hover:bg-cyan - 400 / 10 transition - all duration -200"
              >
                Get Custom Quote,
              </Link>,
            </div>,
          </motion.div>,
        </div>,
      </section>,
    </div>,) 
},
