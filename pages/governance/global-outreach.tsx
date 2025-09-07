import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function GlobalOutreachPage() {
  return (
    <Layout
      title="Global Outreach - Zion Tech Group"
      description="Zion Tech Group's global outreach initiatives and international partnerships."
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Global Outreach
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building international partnerships and expanding our global impact through technology and innovation.
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-gray-600">
              Global outreach initiatives are under development.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}