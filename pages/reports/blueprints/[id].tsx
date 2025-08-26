import React from 'react';
<<<<<<< HEAD
import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';

const BlueprintPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Mock blueprint data based on the ID
  const getBlueprintData = (blueprintId: string) => {
    const timestamp = blueprintId.replace('blueprint-', '');
    const date = new Date(
      parseInt(timestamp.substring(0, 4)),
      parseInt(timestamp.substring(4, 6)) - 1,
      parseInt(timestamp.substring(6, 8)),
      parseInt(timestamp.substring(8, 10)),
      parseInt(timestamp.substring(10, 12)),
      parseInt(timestamp.substring(12, 14))
    );

    return {
      id: blueprintId,
      title: `Automation Blueprint ${blueprintId}`,
      description: `Comprehensive automation blueprint generated on ${date.toLocaleDateString()}`,
      date: date.toLocaleDateString(),
      time: date.toLocaleTimeString(),
      status: 'completed',
      components: [
        'Content Generation Pipeline',
        'SEO Optimization Engine',
        'Security Monitoring System',
        'Performance Testing Framework',
        'Backup and Recovery System'
      ],
      metrics: {
        efficiency: '94%',
        reliability: '99.9%',
        scalability: 'High',
        costOptimization: 'Medium'
      },
      recommendations: [
        'Implement additional monitoring for edge cases',
        'Consider adding machine learning for pattern recognition',
        'Optimize resource allocation during peak hours',
        'Enhance error handling and recovery mechanisms'
      ]
    };
  };

  if (!id || typeof id !== 'string') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Blueprint Not Found</h1>
          <Link href="/reports" className="text-blue-600 hover:text-blue-800">
            Back to Reports
          </Link>
        </div>
      </div>
    );
  }

  const blueprint = getBlueprintData(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>{blueprint.title} - bolt.new.zion.app</title>
        <meta name="description" content={blueprint.description} />
        <meta name="keywords" content="blueprint, automation, report, analysis" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {blueprint.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {blueprint.description}
            </p>
            <div className="text-lg text-gray-500 mt-2">
              Generated on {blueprint.date} at {blueprint.time}
            </div>
          </div>

          {/* Navigation */}
          <nav className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Home
              </Link>
              <Link href="/reports" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Reports
              </Link>
              <Link href="/live-dashboard" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Dashboard
              </Link>
            </div>
          </nav>

          {/* Blueprint Overview */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Blueprint Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Blueprint Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Blueprint ID:</span>
                    <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">
                      {blueprint.id}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {blueprint.status}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Generated:</span>
                    <span>{blueprint.date} {blueprint.time}</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Metrics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">{blueprint.metrics.efficiency}</div>
                    <div className="text-sm text-gray-600">Efficiency</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">{blueprint.metrics.reliability}</div>
                    <div className="text-sm text-gray-600">Reliability</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">{blueprint.metrics.scalability}</div>
                    <div className="text-sm text-gray-600">Scalability</div>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">{blueprint.metrics.costOptimization}</div>
                    <div className="text-sm text-gray-600">Cost Optimization</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Components */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Automation Components</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blueprint.components.map((component, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 text-center">
                  <div className="text-3xl mb-4">🚀</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{component}</h3>
                  <div className="text-sm text-gray-500">
                    Component {index + 1} of {blueprint.components.length}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommendations</h2>
            <div className="space-y-4">
              {blueprint.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-4 p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl">💡</div>
                  <div>
                    <p className="font-semibold text-gray-900">Recommendation {index + 1}</p>
                    <p className="text-gray-600">{recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Implementation Status */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Status</h2>
            <div className="space-y-4">
              {blueprint.components.map((component, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{component}</h3>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      Implemented
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <div className="text-sm text-gray-500 mt-2">
                    Completed on {blueprint.date}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Resources */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Related Resources</h2>
            <p className="text-blue-700 mb-6">
              Explore related automation resources and documentation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/automation" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                View Automation
              </Link>
              <Link href="/reports" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                All Reports
              </Link>
              <Link href="/live-dashboard" className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                Live Dashboard
              </Link>
=======
import Head from 'next/head';
import { useRouter } from 'next/router';

const BlueprintPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Sample blueprint data - in a real app this would come from an API
  const blueprintData = {
    id: id || 'blueprint-2025-08-18-122901',
    title: 'Zion.app Platform Blueprint',
    version: '2.1.0',
    created: '2025-08-18',
    status: 'Active',
    description: 'Comprehensive blueprint for the Zion.app autonomous platform architecture and implementation.',
    sections: [
      {
        title: 'Platform Architecture',
        content: 'Multi-layered architecture with autonomous agents, cloud automation, and self-healing systems.',
        status: 'Implemented'
      },
      {
        title: 'AI Content Factory',
        content: 'Automated content generation, SEO optimization, and performance monitoring.',
        status: 'Active'
      },
      {
        title: 'Redundancy Systems',
        content: 'Comprehensive redundancy with PM2, GitHub Actions, and automated failover.',
        status: 'Operational'
      },
      {
        title: 'Monitoring & Analytics',
        content: 'Real-time dashboard, performance metrics, and automated health checks.',
        status: 'Monitoring'
      }
    ],
    metrics: {
      uptime: '98.7%',
      pages: '2,960',
      automations: '227',
      performance: '95/100'
    }
  };

  return (
    <>
      <Head>
        <title>{blueprintData.title} - Zion.app</title>
        <meta name="description" content={blueprintData.description} />
        <meta name="keywords" content="blueprint, architecture, Zion, platform, automation" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <header className="text-center mb-12">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {blueprintData.title}
              </h1>
              <p className="text-xl text-gray-300 mb-4">
                {blueprintData.description}
              </p>
              <div className="flex justify-center space-x-6 text-sm">
                <span className="text-gray-400">Version: {blueprintData.version}</span>
                <span className="text-gray-400">Created: {blueprintData.created}</span>
                <span className="px-3 py-1 bg-green-600 text-white rounded-full">{blueprintData.status}</span>
              </div>
            </header>

            <div className="grid gap-8">
              {/* Blueprint Overview */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Blueprint Overview</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Key Metrics</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Platform Uptime</span>
                        <span className="text-green-400 font-semibold">{blueprintData.metrics.uptime}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Total Pages</span>
                        <span className="text-blue-400 font-semibold">{blueprintData.metrics.pages}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Active Automations</span>
                        <span className="text-purple-400 font-semibold">{blueprintData.metrics.automations}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Performance Score</span>
                        <span className="text-yellow-400 font-semibold">{blueprintData.metrics.performance}</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Blueprint Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Blueprint ID</span>
                        <span className="text-blue-400 font-mono text-sm">{blueprintData.id}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Current Version</span>
                        <span className="text-green-400">{blueprintData.version}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Creation Date</span>
                        <span className="text-gray-300">{blueprintData.created}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Status</span>
                        <span className="px-2 py-1 bg-green-600 text-white text-xs rounded">{blueprintData.status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Blueprint Sections */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Blueprint Sections</h2>
                
                <div className="space-y-6">
                  {blueprintData.sections.map((section, index) => (
                    <div key={index} className="bg-gray-700/50 p-4 rounded border-l-4 border-blue-500">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-medium text-green-400">{section.title}</h3>
                        <span className={`px-3 py-1 text-xs rounded-full ${
                          section.status === 'Implemented' ? 'bg-green-600 text-white' :
                          section.status === 'Active' ? 'bg-blue-600 text-white' :
                          section.status === 'Operational' ? 'bg-purple-600 text-white' :
                          'bg-yellow-600 text-white'
                        }`}>
                          {section.status}
                        </span>
                      </div>
                      <p className="text-gray-300">{section.content}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Implementation Status */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Implementation Status</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Completed Features</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Autonomous cloud automations</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">AI content generation system</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Redundancy and failover systems</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-gray-300">Performance monitoring dashboard</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-yellow-400 mb-3">In Progress</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Advanced AI agent orchestration</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Multi-region deployment</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Enhanced security protocols</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span className="text-gray-300">Predictive analytics engine</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Technical Specifications */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Technical Specifications</h2>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Frontend</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Framework</span>
                        <span className="text-blue-400">Next.js 15</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Styling</span>
                        <span className="text-blue-400">Tailwind CSS</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Language</span>
                        <span className="text-blue-400">TypeScript</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Backend</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Runtime</span>
                        <span className="text-blue-400">Node.js</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Process Manager</span>
                        <span className="text-blue-400">PM2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Automation</span>
                        <span className="text-blue-400">GitHub Actions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-700/50 p-4 rounded">
                    <h3 className="font-medium text-green-400 mb-3">Infrastructure</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Hosting</span>
                        <span className="text-blue-400">Netlify</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">Monitoring</span>
                        <span className="text-blue-400">Custom + PM2</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-300">CI/CD</span>
                        <span className="text-blue-400">GitHub Actions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Blueprint History */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h2 className="text-2xl font-semibold mb-6 text-blue-400">Blueprint History</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-18</span>
                    <span className="text-gray-300">Blueprint v2.1.0 released</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-15</span>
                    <span className="text-gray-300">Redundancy systems implemented</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-10</span>
                    <span className="text-gray-300">AI content factory activated</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-gray-400">2025-08-05</span>
                    <span className="text-gray-300">Performance monitoring deployed</span>
                  </div>
                </div>
              </section>

              {/* Actions */}
              <section className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 text-center">
                <h2 className="text-2xl font-semibold mb-4 text-blue-400">Blueprint Actions</h2>
                <p className="text-gray-300 mb-6">
                  Manage and update your blueprint implementation
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    Update Blueprint
                  </button>
                  <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors">
                    Export PDF
                  </button>
                  <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors">
                    Share Blueprint
                  </button>
                  <button className="px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors">
                    View All Blueprints
                  </button>
                </div>
              </section>
>>>>>>> origin/cursor/update-content-and-fix-links-32b9
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
    </>
>>>>>>> origin/cursor/update-content-and-fix-links-32b9
  );
};

export default BlueprintPage;