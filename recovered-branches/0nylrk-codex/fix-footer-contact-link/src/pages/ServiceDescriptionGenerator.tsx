<<<<<<< HEAD

<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ServiceDescriptionForm} from "@/components/services/ServiceDescriptionForm";
import {GeneratedDescriptionDisplay} from "@/components/services/GeneratedDescriptionDisplay";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
export default function ServiceDescriptionGenerator() {;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
<<<<<<< HEAD




=======
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth(),
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),
  
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Show loading while checking authentication
  if (isLoading) {
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
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />
  }
  const handleDescriptionSave = (editedDescription: string) => {
    setGeneratedDescription(editedDescription)
    // Here you could also save to database if needed

<<<<<<< HEAD

  },


<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD

=======
              <GeneratedDescriptionDisplay
              <GeneratedDescriptionDisplay 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",;
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
export default function ServiceDescriptionGenerator() {;
  const { isAuthenticated, isLoading } = useAuth(),;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),;
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  // Show loading while checking authentication;
  if (isLoading) {;
    return (
<<<<<<< HEAD
=======

import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",;
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
;
export default function ServiceDescriptionGenerator() {;
  const { isAuthenticated, isLoading } = useAuth(),;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),;
  ;
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  // Show loading while checking authentication;
  if (isLoading) {;
    return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
  }
<<<<<<< HEAD
<<<<<<< HEAD

=======
;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />;
  }
<<<<<<< HEAD
<<<<<<< HEAD

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
=======
    ),;
  }
  ;
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from:'/service-description-generator' }} replace />,;
  }
;
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
    setGeneratedDescription(editedDescription);
    // Here you could also save to database if needed;
  };
  return (;
    <div className="min-h-screen flex flex-col bg-zion-blue">;
      <SEO;
        title="Service Description Generator";
        description="Generate professional service descriptions using AI";
        keywords="service description, AI content, professional description generator";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>;
          <p className="text-zion-slate mb-8">;
            Create professional service descriptions with the help of AI. Just provide basic details about your service.;
          </p>;

<<<<<<< HEAD
<<<<<<< HEAD
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;

            {generatedDescription && (;
=======
  const { isAuthenticated, isLoading } = useAuth();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay
<<<<<<< HEAD
=======

              <GeneratedDescriptionDisplay 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
              <GeneratedDescriptionDisplay

              <GeneratedDescriptionDisplay 

              <GeneratedDescriptionDisplay
          ;
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            ;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay ;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />;
            )}
<<<<<<< HEAD
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<< HEAD

    </div>);
}

=======
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
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay;
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
