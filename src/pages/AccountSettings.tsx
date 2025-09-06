import React from "react";
import MainLayout from "../components/layout/MainLayout";

const AccountSettings: React.FC = () => {
  return (
    <MainLayout title="Account Settings - Zion Tech Group" description="Manage your account settings and preferences.">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Account Settings</h1>
        <p className="text-lg">This is the Account Settings page. Content coming soon.</p>
      </div>
    </MainLayout>
  );
};

export default AccountSettings;