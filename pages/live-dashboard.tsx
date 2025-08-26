import React from 'react';
import Head from 'next/head';

<<<<<<< HEAD
export default function LiveDashboardPage() {
  return (
    <>
      <Head>
        <title>Live Dashboard | Zion Tech Group</title>
        <meta name="description" content="Real-time dashboard monitoring Zion Tech Group's automation systems, performance metrics, and system health." />
        <meta property="og:title" content="Live Dashboard - Zion Tech Group" />
        <meta property="og:description" content="Real-time system monitoring and analytics." />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Live Dashboard
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Real-time monitoring and analytics of our autonomous systems
            </p>
            <div className="mt-4 text-sm text-white/60">
              Last updated: <span className="text-cyan-400">Just now</span> • Auto-refresh: <span className="text-green-400">Enabled</span>
            </div>
            
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a href="/" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-cyan-400/50">
                Home
              </a>
              <a href="/automation" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-purple-400/50">
                Automation
              </a>
              <a href="/automation-health" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-green-400/50">
                Health Status
              </a>
              <a href="/component-library" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 hover:border-yellow-400/50">
                Components
              </a>
            </div>
          </section>

          <section className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Active Automations</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">227</div>
                <div className="text-sm text-white/70">+12 from yesterday</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">System Uptime</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-fuchsia-400 mb-2">99.99%</div>
                <div className="text-sm text-white/70">Last 30 days</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Response Time</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-green-400 mb-2">1.2s</div>
                <div className="text-sm text-white/70">Average</div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white">Error Rate</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-3xl font-bold text-blue-400 mb-2">0.01%</div>
                <div className="text-sm text-white/70">Last 24h</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">System Performance</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">CPU Usage</span>
                      <span className="text-cyan-400">23%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-cyan-400 h-2 rounded-full" style={{width: '23%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Memory Usage</span>
                      <span className="text-fuchsia-400">67%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-fuchsia-400 h-2 rounded-full" style={{width: '67%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Disk Usage</span>
                      <span className="text-green-400">45%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80">Network I/O</span>
                      <span className="text-blue-400">12%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{width: '12%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-4 text-fuchsia-400">Automation Status</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Content Generator</span>
                    </div>
                    <span className="text-green-400 text-sm">Running</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Health Monitor</span>
                    </div>
                    <span className="text-green-400 text-sm">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Sync Orchestrator</span>
                    </div>
                    <span className="text-green-400 text-sm">Online</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      <span className="text-white/90">Redundancy Manager</span>
                    </div>
                    <span className="text-green-400 text-sm">Operational</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Recent Activity Feed</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400">✅</div>
                  <div className="flex-1">
                    <span className="text-white/90">Content generation completed successfully</span>
                    <div className="text-xs text-white/50">2 minutes ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-blue-400">🔄</div>
                  <div className="flex-1">
                    <span className="text-white/90">Cross-branch synchronization completed</span>
                    <div className="text-xs text-white/50">1 minute ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-green-400">✅</div>
                  <div className="flex-1">
                    <span className="text-white/90">Health check passed for all systems</span>
                    <div className="text-xs text-white/50">30 seconds ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-purple-400">📊</div>
                  <div className="flex-1">
                    <span className="text-white/90">Performance metrics updated</span>
                    <div className="text-xs text-white/50">15 seconds ago</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                  <div className="text-cyan-400">🤖</div>
                  <div className="flex-1">
                    <span className="text-white/90">New automation agent deployed</span>
                    <div className="text-xs text-white/50">10 seconds ago</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-cyan-400">Content Metrics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Articles Generated</span>
                    <span className="text-cyan-400">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">SEO Score</span>
                    <span className="text-green-400">94/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Languages</span>
                    <span className="text-fuchsia-400">12</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-fuchsia-400">Security Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Vulnerabilities</span>
                    <span className="text-green-400">0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Security Score</span>
                    <span className="text-green-400">A+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Last Scan</span>
                    <span className="text-blue-400">2h ago</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h3 className="text-lg font-semibold mb-4 text-green-400">Network Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/70">Latency</span>
                    <span className="text-green-400">12ms</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Throughput</span>
                    <span className="text-cyan-400">2.1GB/s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Connections</span>
                    <span className="text-fuchsia-400">1,847</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
=======
const LiveDashboard = () => {
  return (
    <>
      <Head>
        <title>Live Dashboard - Zion.app</title>
        <meta name="description" content="Real-time monitoring and analytics dashboard for Zion.app platform" />
        <meta name="keywords" content="dashboard, monitoring, analytics, real-time, Zion" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Live Dashboard
              </h1>
              <p className="text-xl text-gray-300">
                Real-time monitoring and analytics for Zion.app platform
              </p>
            </header>

            <div className="grid gap-8">
              {/* Key Metrics */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Key Metrics</h2>
                
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">2,960</div>
                    <div className="text-gray-300">Total Pages</div>
                    <div className="text-xs text-green-400 mt-1">↑ +12% this week</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">227</div>
                    <div className="text-gray-300">Active Automations</div>
                    <div className="text-xs text-blue-400 mt-1">↑ +5% this week</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-purple-400 mb-2">98.7%</div>
                    <div className="text-gray-300">Uptime</div>
                    <div className="text-xs text-green-400 mt-1">↑ +0.3% this week</div>
                  </div>
                  
                  <div className="bg-gray-700/50 p-4 rounded text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">1.2s</div>
                    <div className="text-gray-300">Avg Response</div>
                    <div className="text-xs text-red-400 mt-1">↓ -0.1s this week</div>
                  </div>
                </div>
              </section>

              {/* System Health */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">System Health</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">GitHub Actions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Content Generation</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Healthy</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SEO Optimization</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Healthy</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Security Scanning</span>
                        <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">Warning</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Performance Testing</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Healthy</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Infrastructure</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Netlify Deployment</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Online</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Database</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Connected</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CDN</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Monitoring</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Real-time Activity */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Real-time Activity</h2>
                
                <div className="bg-gray-700/50 p-4 rounded">
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Content generation completed for /services</span>
                      <span className="text-gray-500 text-xs">2 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">SEO optimization running for homepage</span>
                      <span className="text-gray-500 text-xs">5 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Security scan detected minor vulnerability</span>
                      <span className="text-gray-500 text-xs">8 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Performance test completed - Score: 95</span>
                      <span className="text-gray-500 text-xs">12 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">New automation workflow created</span>
                      <span className="text-gray-500 text-xs">15 min ago</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-gray-300">Database backup completed successfully</span>
                      <span className="text-gray-500 text-xs">20 min ago</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Performance Metrics */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Performance Metrics</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Lighthouse Scores</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Performance</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">95</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Accessibility</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '98%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">98</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Best Practices</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '92%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">92</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">SEO</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-600 rounded-full h-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{width: '96%'}}></div>
                          </div>
                          <span className="text-green-400 text-sm">96</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Core Web Vitals</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">LCP (Largest Contentful Paint)</span>
                        <span className="text-green-400 text-sm">1.2s</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">FID (First Input Delay)</span>
                        <span className="text-green-400 text-sm">45ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CLS (Cumulative Layout Shift)</span>
                        <span className="text-green-400 text-sm">0.05</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">TTFB (Time to First Byte)</span>
                        <span className="text-green-400 text-sm">180ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Automation Status */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Automation Status</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Content Generation</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">AI Content Factory</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">SEO Optimization</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Link Management</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Monitoring</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Health Checks</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Performance Monitoring</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Error Tracking</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Deployment</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Auto Deploy</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Rollback System</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-300">Health Monitoring</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Active</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Recent Deployments */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Recent Deployments</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-600">
                        <th className="text-left p-2">Environment</th>
                        <th className="text-left p-2">Status</th>
                        <th className="text-left p-2">Duration</th>
                        <th className="text-left p-2">Deployed At</th>
                        <th className="text-left p-2">Commit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-700">
                        <td className="p-2">Production</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Success</span>
                        </td>
                        <td className="p-2">2m 34s</td>
                        <td className="p-2">2 hours ago</td>
                        <td className="p-2 text-blue-400">a1b2c3d</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2">Staging</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">Success</span>
                        </td>
                        <td className="p-2">1m 45s</td>
                        <td className="p-2">4 hours ago</td>
                        <td className="p-2 text-blue-400">e4f5g6h</td>
                      </tr>
                      <tr className="border-b border-gray-700">
                        <td className="p-2">Development</td>
                        <td className="p-2">
                          <span className="px-2 py-1 bg-yellow-600 text-white text-xs rounded">Warning</span>
                        </td>
                        <td className="p-2">3m 12s</td>
                        <td className="p-2">6 hours ago</td>
                        <td className="p-2 text-blue-400">i7j8k9l</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Quick Actions */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Quick Actions</h2>
                <p className="text-gray-300 mb-6">
                  Manage your platform directly from the dashboard
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Run Health Check
                  </button>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                    Trigger Backup
                  </button>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    View Logs
                  </button>
                  <button className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors">
                    Performance Test
                  </button>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveDashboard;
>>>>>>> origin/cursor/update-content-and-fix-links-32b9
