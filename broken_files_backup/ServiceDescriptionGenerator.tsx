import React, { useState } from "react";
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm";
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay";
import { NextSeo } from "@/components/NextSeo";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth();
<<<<<<< HEAD:src/pages/ServiceDescriptionGenerator.tsx
  const [generatedDescription, setGeneratedDescription] = useState(null as string | null);
  
=======
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ServiceDescriptionGenerator.tsx
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    );
  }
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />;
  }
  const handleDescriptionSave = (editedDescription: string) => {
    setGeneratedDescription(editedDescription);
    // Here you could also save to database if needed
  };
  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
<<<<<<< HEAD:src/pages/ServiceDescriptionGenerator.tsx
      <NextSeo 
        title="Service Description Generator" 
=======
      <SEO
        title="Service Description Generator"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/ServiceDescriptionGenerator.tsx
        description="Generate professional service descriptions using AI"
        keywords="service description, AI content, professional description generator"
      />
      
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>
          <p className="text-zion-slate mb-8">
            Create professional service descriptions with the help of AI. Just provide basic details about your service.
          </p>
          <div className="space-y-8">
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />
            {generatedDescription && (
              <GeneratedDescriptionDisplay
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />
            )}
          </div>
        </div>
      </main>
      
    </div>
  );
}
