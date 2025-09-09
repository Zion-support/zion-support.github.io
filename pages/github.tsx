import React from 'react';
import Head from 'next/head';

const GitHub: React.FC = () => {
  const repositories = [
    {
      name: 'zion-app-core',
      description: 'Core application framework and utilities',
      language: 'TypeScript',
      stars: 42,
      forks: 8,
      lastUpdated: '2 days ago',
      topics: ['framework', 'typescript', 'react', 'nextjs']
    },
    {
      name: 'zion-ui-components',
      description: 'Reusable UI component library',
      language: 'TypeScript',
      stars: 28,
      forks: 5,
      lastUpdated: '1 week ago',
      topics: ['ui', 'components', 'react', 'tailwind']
    },
    {
      name: 'zion-api-sdk',
      description: 'JavaScript SDK for Zion API integration',
      language: 'JavaScript',
      stars: 35,
      forks: 12,
      lastUpdated: '3 days ago',
      topics: ['sdk', 'api', 'javascript', 'integration']
    },
    {
      name: 'zion-docs',
      description: 'Documentation and guides for Zion platform',
      language: 'Markdown',
      stars: 15,
      forks: 3,
      lastUpdated: '5 days ago',
      topics: ['documentation', 'guides', 'markdown']
    }
  ];

  const contributions = [
    {
      date: '2024-01-15',
      count: 8,
      level: 4
    },
    {
      date: '2024-01-14',
      count: 12,
      level: 4
    },
    {
      date: '2024-01-13',
      count: 5,
      level: 2
    },
    {
      date: '2024-01-12',
      count: 15,
      level: 4
    },
    {
      date: '2024-01-11',
      count: 3,
      level: 1
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <Head>
        <title>GitHub - Zion App</title>
        <meta name="description" content="Explore our open source projects and contributions on GitHub" />
        <meta name="keywords" content="github, open source, repositories, code, development" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Our GitHub
            </h1>
            <p className="text-xl text-gray-300">
              Open source projects and contributions from the Zion team
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Repositories */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-white mb-6">Repositories</h2>
              <div className="space-y-4">
                {repositories.map((repo, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-blue-500/50 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-1">{repo.name}</h3>
                        <p className="text-gray-300 text-sm">{repo.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-sm">⭐ {repo.stars}</span>
                        <span className="text-gray-400 text-sm">🍴 {repo.forks}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        {repo.language}
                      </span>
                      <span>Updated {repo.lastUpdated}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {repo.topics.map((topic, idx) => (
                        <span key={idx} className="bg-blue-900/50 text-blue-300 text-xs px-2 py-1 rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Stats */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Profile Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Repositories</span>
                    <span className="text-white font-semibold">24</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Stars</span>
                    <span className="text-white font-semibold">156</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Followers</span>
                    <span className="text-white font-semibold">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Following</span>
                    <span className="text-white font-semibold">42</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-gray-300">Pushed to <span className="text-blue-400">zion-app-core</span></p>
                    <p className="text-gray-500 text-xs">2 hours ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-300">Created repository <span className="text-blue-400">zion-mobile-sdk</span></p>
                    <p className="text-gray-500 text-xs">1 day ago</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-300">Starred <span className="text-blue-400">react/next.js</span></p>
                    <p className="text-gray-500 text-xs">3 days ago</p>
                  </div>
                </div>
              </div>

              {/* Contribution Graph */}
              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">Contributions</h3>
                <div className="grid grid-cols-5 gap-1">
                  {contributions.map((contribution, index) => (
                    <div
                      key={index}
                      className={`h-3 rounded-sm ${
                        contribution.level === 4 ? 'bg-green-500' :
                        contribution.level === 3 ? 'bg-green-400' :
                        contribution.level === 2 ? 'bg-green-300' :
                        contribution.level === 1 ? 'bg-green-200' :
                        'bg-gray-700'
                      }`}
                      title={`${contribution.count} contributions on ${contribution.date}`}
                    ></div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs mt-2">Last 5 days</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Follow Us on GitHub</h2>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Stay updated with our latest open source projects and contribute to the community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/zion-app"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GitHub;