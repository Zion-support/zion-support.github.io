import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useAnalytics } from '../src/hooks/useAnalytics';

const Dashboard = React.memo(function Dashboard(): JSX.Element {
	const [activeTab, setActiveTab] = useState('overview');
	const [isRealTime, setIsRealTime] = useState(false);
	const { trackClick } = useAnalytics();

	const tabs = [
		{ id: 'overview', label: 'Overview', icon: '📊' },
		{ id: 'analytics', label: 'Analytics', icon: '📈' },
		{ id: 'performance', label: 'Performance', icon: '⚡' },
		{ id: 'security', label: 'Security', icon: '🔒' },
		{ id: 'system-monitor', label: 'System Monitor', icon: '🖥️' }
	];

	const renderTabContent = () => {
		switch (activeTab) {
			case 'overview':
				return (
					<div className="p-8">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-600">Total Users</p>
										<p className="text-2xl font-bold text-gray-900">12,543</p>
									</div>
									<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
										<span className="text-blue-600 text-xl">👥</span>
									</div>
								</div>
								<p className="text-sm text-green-600 mt-2">+12.5% from last month</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-600">Revenue</p>
										<p className="text-2xl font-bold text-gray-900">$45,678</p>
									</div>
									<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
										<span className="text-green-600 text-xl">💰</span>
									</div>
								</div>
								<p className="text-sm text-green-600 mt-2">+8.2% from last month</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-600">Active Sessions</p>
										<p className="text-2xl font-bold text-gray-900">1,234</p>
									</div>
									<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
										<span className="text-purple-600 text-xl">🔄</span>
									</div>
								</div>
								<p className="text-sm text-red-600 mt-2">-2.1% from last hour</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-sm font-medium text-gray-600">Error Rate</p>
										<p className="text-2xl font-bold text-gray-900">0.12%</p>
									</div>
									<div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
										<span className="text-red-600 text-xl">⚠️</span>
									</div>
								</div>
								<p className="text-sm text-green-600 mt-2">-0.05% from last week</p>
							</div>
						</div>
						<div className="bg-white rounded-lg p-6 shadow-md">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
							<div className="space-y-3">
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
										<span className="text-blue-600 text-sm">👤</span>
									</div>
									<div className="flex-1">
										<p className="text-sm font-medium text-gray-900">New user registered</p>
										<p className="text-xs text-gray-500">2 minutes ago</p>
									</div>
								</div>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
										<span className="text-green-600 text-sm">💳</span>
									</div>
									<div className="flex-1">
										<p className="text-sm font-medium text-gray-900">Payment processed</p>
										<p className="text-xs text-gray-500">5 minutes ago</p>
									</div>
								</div>
								<div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
									<div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
										<span className="text-yellow-600 text-sm">📧</span>
									</div>
									<div className="flex-1">
										<p className="text-sm font-medium text-gray-900">Email campaign sent</p>
										<p className="text-xs text-gray-500">10 minutes ago</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				);

			case 'analytics':
				return (
					<div className="p-8">
						<div className="flex justify-between items-center mb-8">
							<h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
							<div className="flex items-center space-x-4">
								<label className="flex items-center">
									<input
										type="checkbox"
										checked={isRealTime}
										onChange={(e) => setIsRealTime(e.target.checked)}
										className="mr-2"
									/>
									Real-time Updates
								</label>
							</div>
						</div>
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Page Views</h3>
								<div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
									<span className="text-gray-500">Chart placeholder</span>
								</div>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">User Engagement</h3>
								<div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
									<span className="text-gray-500">Chart placeholder</span>
								</div>
							</div>
						</div>
					</div>
				);

			case 'performance':
				return (
					<div className="p-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-8">Performance Metrics</h1>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Response Time</h3>
								<p className="text-3xl font-bold text-blue-600">245ms</p>
								<p className="text-sm text-gray-600 mt-2">Average response time</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Uptime</h3>
								<p className="text-3xl font-bold text-green-600">99.9%</p>
								<p className="text-sm text-gray-600 mt-2">Last 30 days</p>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Throughput</h3>
								<p className="text-3xl font-bold text-purple-600">1,234</p>
								<p className="text-sm text-gray-600 mt-2">Requests per second</p>
							</div>
						</div>
					</div>
				);

			case 'security':
				return (
					<div className="p-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-8">Security Dashboard</h1>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Security Events</h3>
								<div className="space-y-3">
									<div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
										<div className="flex items-center gap-3">
											<span className="text-red-600">🚨</span>
											<span className="text-sm font-medium">Failed login attempt</span>
										</div>
										<span className="text-xs text-gray-500">2 min ago</span>
									</div>
									<div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
										<div className="flex items-center gap-3">
											<span className="text-yellow-600">⚠️</span>
											<span className="text-sm font-medium">Unusual traffic pattern</span>
										</div>
										<span className="text-xs text-gray-500">15 min ago</span>
									</div>
									<div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
										<div className="flex items-center gap-3">
											<span className="text-green-600">✅</span>
											<span className="text-sm font-medium">Security scan completed</span>
										</div>
										<span className="text-xs text-gray-500">1 hour ago</span>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Security Status</h3>
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-gray-700">Firewall Status</span>
										<span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Active</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-gray-700">SSL Certificate</span>
										<span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Valid</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-gray-700">Backup Status</span>
										<span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Up to date</span>
									</div>
									<div className="flex items-center justify-between">
										<span className="text-sm font-medium text-gray-700">Vulnerability Scan</span>
										<span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">In progress</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				);

			case 'system-monitor':
				return (
					<div className="p-8">
						<div className="flex justify-between items-center mb-8">
							<h1 className="text-3xl font-bold text-gray-900">System Monitor</h1>
							<div className="flex items-center space-x-4">
								<label className="flex items-center">
									<input
										type="checkbox"
										checked={isRealTime}
										onChange={(e) => setIsRealTime(e.target.checked)}
										className="mr-2"
									/>
									Real-time Updates
								</label>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">CPU Usage</h3>
								<div className="text-center">
									<div className="text-3xl font-bold text-blue-600 mb-2">45%</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Memory Usage</h3>
								<div className="text-center">
									<div className="text-3xl font-bold text-green-600 mb-2">67%</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-green-600 h-2 rounded-full" style={{ width: '67%' }}></div>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Disk Usage</h3>
								<div className="text-center">
									<div className="text-3xl font-bold text-yellow-600 mb-2">23%</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-yellow-600 h-2 rounded-full" style={{ width: '23%' }}></div>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-lg p-6 shadow-md">
								<h3 className="text-lg font-semibold text-gray-900 mb-4">Network I/O</h3>
								<div className="text-center">
									<div className="text-3xl font-bold text-purple-600 mb-2">12%</div>
									<div className="w-full bg-gray-200 rounded-full h-2">
										<div className="bg-purple-600 h-2 rounded-full" style={{ width: '12%' }}></div>
									</div>
								</div>
							</div>
						</div>
					</div>
				);

			default:
				return (
					<div className="p-8">
						<h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
						<p className="text-gray-600 mt-4">Select a tab to view dashboard content.</p>
					</div>
				);
		}
	};

	return (
		<>
			<Head>
				<title>Dashboard - Zion App</title>
				<meta name="description" content="Comprehensive dashboard for monitoring and managing your Zion App instance." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gray-50">
				<div className="flex">
					{/* Sidebar */}
					<div className="w-64 bg-white shadow-md">
						<div className="p-6">
							<h2 className="text-xl font-bold text-gray-900">Dashboard</h2>
						</div>
						<nav className="mt-6">
							{tabs.map((tab) => (
								<button
									key={tab.id}
									onClick={() => {
										setActiveTab(tab.id);
										trackClick(`dashboard-tab-${tab.id}`, 'navigation');
									}}
									className={`w-full flex items-center gap-3 px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
										activeTab === tab.id ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' : 'text-gray-700'
									}`}
								>
									<span className="text-xl">{tab.icon}</span>
									<span className="font-medium">{tab.label}</span>
								</button>
							))}
						</nav>
					</div>

					{/* Main Content */}
					<div className="flex-1">
						{renderTabContent()}
					</div>
				</div>
			</div>
		</>
	);
});

export default Dashboard;