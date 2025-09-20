import React from 'react';
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";

function ClientDashboardContent() {
  return (
    <>
      <SEO
        title="Client Dashboard | Zion AI Marketplace"
        description="Manage your jobs and talent requests in the Zion AI Marketplace."
      />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Client Dashboard</h1>
          <p className="text-gray-300">
            Manage your projects and track your AI service requests.
          </p>
        </div>
      </main>
    </>
  );
}

export default function ClientDashboard() {
  return (
    <ProtectedRoute>
      <ClientDashboardContent />
    </ProtectedRoute>
  );
}