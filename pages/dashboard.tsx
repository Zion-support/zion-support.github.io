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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Total Users</h3>
                <p className="text-3xl font-bold text-blue-600">1,234</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Active Sessions</h3>
                <p className="text-3xl font-bold text-green-600">567</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Revenue</h3>
                <p className="text-3xl font-bold text-purple-600">$12,345</p>
              </div>
            </div>
          </div>
        );
      default:
        return <div>Tab content not found</div>;
    }
  };

  return (
    <>
      <SEO 
        title="Dashboard - Zion Tech Group"
        description="Access your dashboard and manage your account"
        keywords="dashboard, analytics, management"
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto">
          <div className="flex border-b">
            <button
              onClick={() => handleTabChange("overview")}
              className={`px-6 py-3 font-medium ${
                activeTab === "overview" 
                  ? "border-b-2 border-blue-500 text-blue-600" 
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Overview
            </button>
          </div>
          {renderDashboard()}
        </div>
      </main>
    </>
  );
});

export default Dashboard;
