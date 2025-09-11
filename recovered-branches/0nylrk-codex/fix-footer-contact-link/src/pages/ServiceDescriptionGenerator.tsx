
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth(),
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),
  
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />;
  }
  const handleDescriptionSave = (editedDescription: string) => {;
    setGeneratedDescription(editedDescription),;
    // Here you could also save to database if needed;
  };

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO
        title="Service Description Generator" 
        description="Generate professional service descriptions using AI"
        keywords="service description, AI content, professional description generator"
              <GeneratedDescriptionDisplay 

              <GeneratedDescriptionDisplay
          ;
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            ;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay ;
=======
=======          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;

            {generatedDescription && (;

              <GeneratedDescriptionDisplay
=======

              <GeneratedDescriptionDisplay 
=======
import React, { useState } from './react';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { ServiceDescriptionForm } from '@/components / services / ServiceDescriptionForm';
import { GeneratedDescriptionDisplay } from '@/components / services / GeneratedDescriptionDisplay';
import { SEO } from '@/components / SEO';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
export default /**
 * ServiceDescriptionGenerator - Function description
 */
function ServiceDescriptionGenerator() {
  const { is_authenticated, is_loading } = use_auth ();
  const [generated_description, setGeneratedDescription] = useState < string | null>(null);
;
  // Show loading while checking authentication;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex justify - center items - center min - h-screen bg - zion - blue">;
        <div className="animate - pulse text - zion - purple text - lg">;
          Loading...;
        </div>;
      </div>);
  }
  // Redirect to login if not authenticated;
  // Check condition
if ( {) {
  $2
}
    return <Navigate to="/login" state={{ from: '/service - description - generator' }} replace />;
  }
  const handleDescriptionSave = (edited_description: string) =>: any {
    setGeneratedDescription (edited_description),
    // Here you could also save to database if needed;
  }
;
  return (
    <div className="min - h-screen flex flex - col bg - zion - blue">;
      <SEO;
        title="Service Description Generator";
        description="Generate professional service descriptions using AI";
        keywords="service description, AI content, professional description generator";
      />;
      <Header />;
      <main className="flex - 1 p - 6 md:p - 10">;
        <div className="max - w-4xl mx - auto">;
          <h1 className="text - 3xl font - bold text - white mb - 2">Service Description Generator</h1>;
          <p className="text - zion - slate mb - 8">;
            Create professional service descriptions with the help of AI. Just provide basic details about your service.;
          </p>;
          <div className="space - y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            {generated_description && (
              <GeneratedDescriptionDisplay;
                description={generated_description}
                on_save={handleDescriptionSave}
              />)}

<<<<<<< HEAD=======