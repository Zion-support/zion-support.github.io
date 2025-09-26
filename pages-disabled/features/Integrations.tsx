import React, { useEffect } from "react";
import { Header } from "../components/Header";
import { SEO } from "../components/SEO";
import { GradientHeading } from "../components/GradientHeading";

export default function Integrations() {
  useEffect(() => {
    // Initialize integrations
  }, []);

  return (
    <div className="min-h-screen bg-zion-blue">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-white mb-8">Integrations</h1>
        
        <div className="bg-white rounded-lg p-8">
          <p>Integration features will be displayed here.</p>
        </div>
      </div>
    </div>
  );
}