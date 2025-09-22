
import React, { useState } from 'react',;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { SEO } from "@/components/SEO",;
import { WhitelabelRequestForm } from "@/components/admin/whitelabel/WhitelabelRequestForm",;
import { TenantsList } from "@/components/admin/whitelabel/TenantsList",;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
;
export default function WhitelabelManager() {;
  const { user } = useAuth(),;
  const [activeTab, setActiveTab] = useState("tenants"),;
  ;
  // Check if user has admin role;
  const isAdmin = user?.role === "admin",;
  ;
  if (!isAdmin) {;
    return <Navigate to="/unauthorized" />,;
  }
;
  return (;
    <>;
      <SEO ;
        title="White-Label Management - Zion AI Marketplace";
        description="Create and manage white-label instances of the Zion AI Marketplace platform.";
      />;
      <Header />;
      <main className="flex-1 container max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">;
        <div className="flex flex-col space-y-6">;
          <div>;
            <h1 className="text-3xl font-bold tracking-tight">White-Label Management</h1>;
            <p className="text-muted-foreground mt-2">;
              Create and manage branded versions of the platform for agencies, startups, and enterprise clients.;
            </p>;
          </div>;

              <TabsTrigger value="tenants">Tenants</TabsTrigger>;
              <TabsTrigger value="create">Create New</TabsTrigger>;
              <TabsTrigger value="docs">Documentation</TabsTrigger>;
            </TabsList>;

                </p>;
                <table>;
                  <thead>;
                    <tr>;

                    </tr>;
                  </thead>;
                  <tbody>;
                    <tr>;

                  including content, users, and analytics. Tenant admins cannot access data from other tenants.;
                </p>;
              </div>;
            </TabsContent>;
          </Tabs>;
        </div>;
      </main>;
      <Footer />;
