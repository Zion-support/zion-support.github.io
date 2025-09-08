import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContentHub() {
  const [contentStats, setContentStats] = useState({
    totalReports: 0,
    totalComponents: 0,
    lastUpdated: new Date().toISOString()
  });

	const featuredContent = [
		{
			title: 'Complete Guide to Autonomous Cloud Operations',
			description: 'Master the fundamentals of building and managing self-operating cloud infrastructure',
			category: 'Guide',
			readTime: '45 min',
			featured: true
		},
		{
			title: 'AI Automation: From Theory to Practice',
			description: 'Practical implementation of AI-driven automation in production environments',
			category: 'Tutorial',
			readTime: '35 min',
			featured: true
		},
		{
			title: 'Enterprise Security Automation Case Study',
			description: 'How a Fortune 500 company implemented automated security monitoring',
			category: 'Case Study',
			readTime: '12 min',
			featured: true
		}
	];

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
			<Head>
				<title>Content Hub - Zion App</title>
				<meta name="description" content="Comprehensive collection of documentation, tutorials, and learning resources" />
			</Head>

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Head>
        <title>Content Hub | Zion Tech Group</title>
        <meta name="description" content="Central hub for all our AI, cloud, and technology content." />
      </Head>
      
      <main className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Content Hub
          </h1>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Discover, explore, and engage with our comprehensive content library
          </p>
        </div>

					{/* Search Bar */}
					<div className="max-w-2xl mx-auto mb-16">
						<div className="relative">
							<input
								type="text"
								placeholder="Search for content, tutorials, or documentation..."
								className="w-full px-6 py-4 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 text-lg"
							/>
							<button className="absolute right-2 top-2 px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-xl transition-colors">
								Search
							</button>
						</div>
					</div>

					{/* Featured Content */}
					<section className="mb-16">
						<h2 className="text-3xl font-semibold text-white mb-8">Featured Content</h2>
						<div className="grid md:grid-cols-3 gap-8">
							{featuredContent.map((content, index) => (
								<div key={index} className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-xl rounded-2xl p-6 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300">
									<div className="flex items-center gap-2 mb-3">
										<span className="px-3 py-1 bg-cyan-500/30 text-cyan-300 text-xs font-medium rounded-full">
											{content.category}
										</span>
										<span className="text-gray-300 text-sm">{content.readTime}</span>
									</div>
									<h3 className="text-xl font-semibold text-white mb-3">
										{content.title}
									</h3>
									<p className="text-gray-300 text-sm mb-4">
										{content.description}
									</p>
									<button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
										Read More →
									</button>
								</div>
							))}
						</div>
					</section>

					{/* Content Categories */}
					<section className="mb-16">
						<h2 className="text-3xl font-semibold text-white mb-8">Browse by Category</h2>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{contentCategories.map((category) => (
								<div key={category.name} className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover;border-cyan-400/50 transition-all duration-300">
									<div className="text-4xl mb-4">{category.icon}</div>
									<h3 className="text-xl font-semibold text-white mb-2">{category.name}</h3>
									<p className="text-gray-300 text-sm mb-4">{category.description}</p>
									<div className="flex items-center justify-between mb-4">
										<span className="text-cyan-400 text-sm font-medium">{category.count} items</span>
										<button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
											Browse All →
										</button>
									</div>
									<div className="space-y-2">
										{category.items.map((item, index) => (
											<div key={index} className="p-3 bg-white/5 rounded-lg">
												<div className="flex items-center justify-between">
													<span className="text-white text-sm font-medium">{item.title}</span>
													<span className="text-gray-400 text-xs">
														{item.readTime || item.duration}
													</span>
												</div>
												<span className="text-gray-500 text-xs">{item.type}</span>
											</div>
										))}
									</div>
								</div>
							))}
						</div>
					</section>

					{/* Quick Actions */}
					<section className="mb-16">
						<h2 className="text-3xl font-semibold text-white mb-8">Quick Actions</h2>
						<div className="grid md:grid-cols-4 gap-6">
							<button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
								<div className="text-3xl mb-3">🚀</div>
								<h3 className="text-white font-medium mb-2">Get Started</h3>
								<p className="text-gray-400 text-sm">Quick start guide for new users</p>
							</button>
							<button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
								<div className="text-3xl mb-3">📖</div>
								<h3 className="text-white font-medium mb-2">Documentation</h3>
								<p className="text-gray-400 text-sm">Complete API and user documentation</p>
							</button>
							<button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
								<div className="text-3xl mb-3">🎯</div>
								<h3 className="text-white font-medium mb-2">Examples</h3>
								<p className="text-gray-400 text-sm">Code examples and templates</p>
							</button>
							<button className="p-6 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-2xl border border-white/20 transition-all duration-300 text-center">
								<div className="text-3xl mb-3">💬</div>
								<h3 className="text-white font-medium mb-2">Support</h3>
								<p className="text-gray-400 text-sm">Get help and ask questions</p>
							</button>
						</div>
					</section>

					{/* Newsletter Signup */}
					<section className="text-center">
						<div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20">
							<h3 className="text-2xl font-semibold text-white mb-4">
								Stay Updated with New Content
							</h3>
							<p className="text-gray-300 mb-6">
								Get notified when we publish new tutorials, guides, and resources
							</p>
							<div className="flex max-w-md mx-auto gap-3">
								<input
									type="email"
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
								/>
								<button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors">
									Subscribe
								</button>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}