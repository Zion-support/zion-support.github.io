<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx

<<<<<<< HEAD

import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",
import { SEO } from "@/components/SEO",

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx




>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
=======
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth(),
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD
=======


  },


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
=======
  },
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
<<<<<<< HEAD
              <GeneratedDescriptionDisplay
=======
              <GeneratedDescriptionDisplay 
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
  // Show loading while checking authentication;
  if (isLoading) {;
    return (
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  // Show loading while checking authentication;
  if (isLoading) {;
    return (;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
<<<<<<< HEAD
<<<<<<< HEAD
    );
  }
=======
    );
  }
;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />;
  }
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
<<<<<<< HEAD
              <GeneratedDescriptionDisplay;

=======

              <GeneratedDescriptionDisplay
=======

              <GeneratedDescriptionDisplay 

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
              <GeneratedDescriptionDisplay
=======
          ;
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            ;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay ;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />;
            )}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx

=======
========
<<<<<<< HEAD
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx

========
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
          </div>;
        </div>;
      </main>;
      <Footer />;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx

    </div>);
}

========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/ServiceDescriptionGenerator.tsx
=======
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
