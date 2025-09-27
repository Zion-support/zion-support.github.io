import React from "react";
import Head from "next/head";
import { useState } from "react";
import SEO from "../src/components/SEO";
const Dashboard = React.memo(function Dashboard(): React.JSX.Element {
	const [isRealTime, setIsRealTime] = useState(false);


	const renderDashboard = () => {
		switch (activeTab) {
			case "overview":
				return (
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
				);
			default:
				return <div>Tab not found</div>;
		}
	};

	return (
		<>
			<SEO />
			<Head>
				<title>Dashboard - Zion App</title>
				<meta name="description" content="Access your dashboard and manage your account." />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<div className="min-h-screen bg-gray-50 pt-20">
				<div className="container mx-auto px-4 py-8 max-w-7xl">
					{renderDashboard()}
				</div>
			</div>
		</>
	);
});

export default Dashboard;