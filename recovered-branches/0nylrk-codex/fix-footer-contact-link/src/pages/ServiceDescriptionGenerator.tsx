<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ServiceDescriptionForm} from "@/components/services/ServiceDescriptionForm";
import {GeneratedDescriptionDisplay} from "@/components/services/GeneratedDescriptionDisplay";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD

  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);

=======
<<<<<<< HEAD
=======
export default function ServiceDescriptionGenerator() {;
<<<<<<< HEAD
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD

  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);"
import { useAuth } from "@/hooks/useAuth","
import { Navigate } from "react-router-dom",
export default function ServiceDescriptionGenerator() {}
  const { isAuthenticated, isLoading } = useAuth(),
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),

  // Show loading while checking authentication
  if (isLoading) {

=======
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth($2);
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),
  
  // Show loading while checking authentication
  if (isLoading) {
<<<<<<< HEAD
export default function ServiceDescriptionGenerator() {;  if (isLoading) {
=======
<<<<<<< HEAD
=======

>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
  const handleDescriptionSave = (editedDescription: string) => {
    setGeneratedDescription($2);
=======
  const handleDescriptionSave = (editedDescription: string) => {}
    setGeneratedDescription(editedDescription)
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/resolved-merge-conflicts
    // Here you could also save to database if needed
  },
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO
        title="Service Description Generator"
        description="Generate professional service descriptions using AI"
        keywords="service description, AI content, professional description generator"
      />
      <Header />
      <main className="flex-1 p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>
          <p className="text-zion-slate mb-8">
            Create professional service descriptions with the help of AI. Just provide basic details about your service.
          </p>
          <div className="space-y-8">
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />
            {generatedDescription && (
<<<<<<< HEAD
              <GeneratedDescriptionDisplay
=======
<<<<<<< HEAD

              <GeneratedDescriptionDisplay
              <GeneratedDescriptionDisplay 

=======
<<<<<<< HEAD
              <GeneratedDescriptionDisplay
              <GeneratedDescriptionDisplay 
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",;
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;

import { Navigate } from "react-router-dom",;
export default function ServiceDescriptionGenerator() { return null; }
  const { isAuthenticated, isLoading } = useAuth(),;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),;
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
=======

<<<<<<< HEAD
              <GeneratedDescriptionDisplay
              <GeneratedDescriptionDisplay 

import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",;
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;

import { Navigate } from "react-router-dom",;
export default function ServiceDescriptionGenerator() { return null; }
  const { isAuthenticated, isLoading } = useAuth(),;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  // Show loading while checking authentication;
  if (isLoading) {;
<<<<<<< HEAD
=======
    return (
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
  // Show loading while checking authentication;
  if (isLoading) {;
    return (
  // Show loading while checking authentication;
  if (isLoading) {;
<<<<<<< HEAD
    return (
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
=======
<<<<<<< HEAD
    return (
=======
>>>>>>> merged-prs-20250907-203621
    return (;
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
<<<<<<< HEAD
  }  // Redirect to login if not authenticated;
=======
<<<<<<< HEAD

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
),;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
  }
<<<<<<< HEAD
;
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  // Redirect to login if not authenticated;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> origin/resolved-merge-conflicts
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={ from: '/service-description-generator' } replace />;
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
    ),;
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  }
  ;
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from:'/service-description-generator' }} replace />,;
  }
;
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const handleDescriptionSave = (editedDescription:string) => {;
    setGeneratedDescription(editedDescription),;
    // Here you could also save to database if needed;
  },;
;
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO ;
        title="Service Description Generator" ;
        description="Generate professional service descriptions using AI";
        keywords="service description, AI content, professional description generator";
;
  const handleDescriptionSave = (editedDescription: string) => {;
<<<<<<< HEAD
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    setGeneratedDescription(editedDescription);
    // Here you could also save to database if needed;
  };
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Service Description Generator";
        description="Generate professional service descriptions using AI";
        keywords="service description, AI content, professional description generator";
=======
>>>>>>> origin/resolved-merge-conflicts

  const handleDescriptionSave = (editedDescription: string) => {;
    setGeneratedDescription(editedDescription),;
    // Here you could also save to database if needed
};

  return (
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO
        title="Service Description Generator" 
        description="Generate professional service descriptions using AI"
        keywords="service description, AI content, professional description generator"      />;
  }
;
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={ from: '/service-description-generator' } replace />;
  }
;
  const handleDescriptionSave = (editedDescription: string) => {;
    setGeneratedDescription(editedDescription);
    // Here you could also save to database if needed;
  };
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Service Description Generator";
        description="Generate professional service descriptions using AI";
        keywords="service description, AI content, professional description generator";
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>;
          <p className="text-zion-slate mb-8">;
            Create professional service descriptions with the help of AI. Just provide basic details about your service.;
          </p>;
<<<<<<< HEAD
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay;
              <GeneratedDescriptionDisplay;
              <GeneratedDescriptionDisplay;
              <GeneratedDescriptionDisplay;
          ;"
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
              <GeneratedDescriptionDisplay

              <GeneratedDescriptionDisplay 

              <GeneratedDescriptionDisplay
          ;
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            ;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay ;
=======
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay

              <GeneratedDescriptionDisplay

<<<<<<< HEAD
=======
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;

              <GeneratedDescriptionDisplay;
          ;"

              <GeneratedDescriptionDisplay ;

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />;
            )}
<<<<<<< HEAD
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </div>;
        </div>;

      </main>;
<<<<<<< HEAD
      <Footer />;
=======
      <Footer />;
<<<<<<< HEAD
    </div>;
  ),;}
 export default function ServiceDescriptionGenerator () {
  const {
  isAuthenticated, isLoading 
}= useAuth ();
const [generatedDescription, setGeneratedDescription] = useState<string | null> (null);
//Show loading while checking authentication if (isLoading) {
  return (<div className="flex justify-center items-center min-h-screen bg-zion-blue" > <div className="animate-pulse text-zion-purple text-lg" > Loading... </div> </div>) 
}//Redirect to login if not authenticated if (!isAuthenticated) {
  
}const handleDescriptionSave = (editedDescription: string) => {
  setGeneratedDescription (editedDescription);
//Here you could also save to database if needed 
};
min-h-screen flex flex-col bg-zion-blue"> <SEO title=" Service Description Generator"description=" Generate professional service descriptions using AI"keywords=" service description, AI content, professional description generator"/> <Header /> <main className=" flex-1 p-6 md:p-10"> <div className=" max-w-4xl mx-auto"> <h1 className=" text-3xl font-bold text-white mb-2">Service Description Generator</h1> <p className=" text-zion-slate mb-8" > Create professional service descriptions with the help of AI. Just provide basic details about your service. </p> {
  generatedDescription && (<GeneratedDescriptionDisplay description= {
  generatedDescription 
}onSave= {
  handleDescriptionSave 
}/>) 
}</div> </div> </main> <Footer /> </div>) 
}
>>>>>>> merged-prs-20250907-203621
>>>>>>> origin/resolved-merge-conflicts
          <div className="space-y-8">;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;

              <GeneratedDescriptionDisplay;
          ;"

              <GeneratedDescriptionDisplay ;

                description={generatedDescription}
                onSave={handleDescriptionSave}
              />;
            )}

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
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
          </div>;
        </div>;

      </main>;
      <Footer />;
=======
=======

    </div>);
}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
