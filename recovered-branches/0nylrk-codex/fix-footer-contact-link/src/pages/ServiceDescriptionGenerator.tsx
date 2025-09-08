
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ServiceDescriptionForm} from "@/components/services/ServiceDescriptionForm";
import {GeneratedDescriptionDisplay} from "@/components/services/GeneratedDescriptionDisplay";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function ServiceDescriptionGenerator() {;  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    )
  }
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" state={ from: '/service-description-generator' } replace />
  }
  const handleDescriptionSave = (editedDescription: string) => {}
    setGeneratedDescription(editedDescription)

        keywords="service description, AI content, professional description generator"      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>;
          <p className="text-zion-slate mb-8">;
            Create professional service descriptions with the help of AI. Just provide basic details about your service.;
          </p>;

          <div className="space-y-8">;
            {generatedDescription && (;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay
