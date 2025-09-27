import React from "react";
import Head from "next/head";
import { useState } from "react";
import SEO from "../src/components/SEO";
import { useAnalytics } from "../src/hooks/useAnalytics";

const Dashboard = React.memo(function Dashboard(): JSX.Element {
	const [activeTab, setActiveTab] = useState("overview");
	const [isRealTime, setIsRealTime] = useState(false);

	// Analytics tracking
	const { trackClick } = useAnalytics();

	const handleTabChange = (tab: string) => {
		setActiveTab(tab);
		trackClick(`dashboard-tab-${tab}`, "navigation");
	};

	const renderDashboard = () => {
		switch (activeTab) {
			case "overview":
				return (
					<div className="p-8">
						<div className="flex justify-between items-center mb-8">
							<h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
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

						{/* Stats Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
							<div className="bg-white rounded-xl shadow-lg p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-gray-600 text-sm">Total Users</p>
										<p className="text-2xl font-bold text-gray-900">1234</p>
									</div>
									<div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
										<span className="text-blue-600 text-xl">👥</span>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-xl shadow-lg p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-gray-600 text-sm">Active Sessions</p>
										<p className="text-2xl font-bold text-gray-900">567</p>
									</div>
									<div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
										<span className="text-green-600 text-xl">🔋</span>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-xl shadow-lg p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-gray-600 text-sm">Revenue</p>
										<p className="text-2xl font-bold text-gray-900">$45.6K</p>
									</div>
									<div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
										<span className="text-purple-600 text-xl">💰</span>
									</div>
								</div>
							</div>
							<div className="bg-white rounded-xl shadow-lg p-6">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-gray-600 text-sm">Conversion Rate</p>
										<p className="text-2xl font-bold text-gray-900">3.2%</p>
									</div>
									<div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
										<span className="text-orange-600 text-xl">📈</span>
									</div>
								</div>
							</div>
						</div>

						{/* Chart Placeholder */}
						<div className="bg-white rounded-xl shadow-lg p-8">
							<h3 className="text-lg font-semibold text-gray-900 mb-4">Performance Overview</h3>
							<div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
								<p className="text-gray-500">Chart will be rendered here</p>
							</div>
						</div>
					</div>
				);
			case "analytics":
				return (
					<div className="p-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-8">Analytics</h1>
						<div className="bg-white rounded-xl shadow-lg p-8">
							<p className="text-gray-600">Analytics content will be displayed here</p>
						</div>
					</div>
				);
			case "settings":
				return (
					<div className="p-8">
						<h1 className="text-3xl font-bold text-gray-900 mb-8">Settings</h1>
						<div className="bg-white rounded-xl shadow-lg p-8">
							<p className="text-gray-600">Settings content will be displayed here</p>
						</div>
					</div>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<SEO />
			<Head>
				<title>Dashboard - Zion App</title>
				<meta name="description" content="Access your dashboard to view analytics, manage settings, and monitor performance." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gray-50">
				{/* Navigation */}
				<nav className="bg-white shadow-sm border-b">
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between h-16">
							<div className="flex">
								<div className="flex-shrink-0 flex items-center">
									<h1 className="text-xl font-bold text-gray-900">Zion App</h1>
								</div>
								<div className="hidden sm:ml-6 sm:flex sm:space-x-8">
									<button
										onClick={() => handleTabChange("overview")}
										className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
											activeTab === "overview"
												? "border-blue-500 text-gray-900"
												: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
										}`}
									>
										Overview
									</button>
									<button
										onClick={() => handleTabChange("analytics")}
										className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
											activeTab === "analytics"
												? "border-blue-500 text-gray-900"
												: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
										}`}
									>
										Analytics
									</button>
									<button
										onClick={() => handleTabChange("settings")}
										className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
											activeTab === "settings"
												? "border-blue-500 text-gray-900"
												: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
										}`}
									>
										Settings
									</button>
								</div>
							</div>
						</div>
					</div>
				</nav>

				{/* Main Content */}
				<main>
					{renderDashboard()}
				</main>
			</div>
		</>
	);
});

export default Dashboard;