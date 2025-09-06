
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {ServiceDescriptionForm} from "@/components/services/ServiceDescriptionForm";
import {GeneratedDescriptionDisplay} from "@/components/services/GeneratedDescriptionDisplay";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default function ServiceDescriptionGenerator() {;
<<<<<<< HEAD
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
<<<<<<< HEAD
=======
export default function ServiceDescriptionGenerator() {;

  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31




<<<<<<< HEAD
=======
  const { isAuthenticated, isLoading } = useAuth();
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",
import { SEO } from "@/components/SEO",
<<<<<<< HEAD
<<<<<<< HEAD

=======
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
export default function ServiceDescriptionGenerator() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


import React, { useState } from "react";"
import {Header} from "@/components/Header";"
import {Footer} from "@/components/Footer";"
import {ServiceDescriptionForm} from "@/components/services/ServiceDescriptionForm";"
import {GeneratedDescriptionDisplay} from "@/components/services/GeneratedDescriptionDisplay";"
import {SEO} from "@/components/SEO";"
import {useAuth} from "@/hooks/useAuth";"
import {Navigate} from "react-router-dom";
export default function ServiceDescriptionGenerator() { return null; }
  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
"
import React, { useState } from "react","
import { Header } from "@/components/Header","
import { Footer } from "@/components/Footer","
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm","
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay","
import { SEO } from "@/components/SEO",";
import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom";
export default function ServiceDescriptionGenerator() {};
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  const { isAuthenticated, isLoading } = useAuth();

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);"
import { useAuth } from "@/hooks/useAuth","
import { Navigate } from "react-router-dom",
export default function ServiceDescriptionGenerator() {}
  const { isAuthenticated, isLoading } = useAuth(),
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),
<<<<<<< HEAD
  
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Show loading while checking authentication
  if (isLoading) {
=======
export default function ServiceDescriptionGenerator() {;  if (isLoading) {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default function ServiceDescriptionGenerator() {;  if (isLoading) {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
  
  // Show loading while checking authentication
  if (isLoading) {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">
=======
  ;
;
  // Show loading while checking authentication;
  if (isLoading) {}
    return ("
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="animate-pulse text-zion-purple text-lg">
          Loading...
        </div>
      </div>
    )
  }
  // Redirect to login if not authenticated;
  if (!isAuthenticated) {"
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />
  }
  const handleDescriptionSave = (editedDescription: string) => {}
    setGeneratedDescription(editedDescription)
<<<<<<< HEAD
    // Here you could also save to database if needed
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD

  },
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc


<<<<<<< HEAD
=======
  }
  },
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  return (
=======
    // Here you could also save to database if needed;
  return ("
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    <div className="min-h-screen flex flex-col bg-zion-blue">
      <SEO"
        title="Service Description Generator""
        description="Generate professional service descriptions using AI""
        keywords="service description, AI content, professional description generator"
      />
      <Header />"
      <main className="flex-1 p-6 md:p-10">"
        <div className="max-w-4xl mx-auto">"
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>"
          <p className="text-zion-slate mb-8">
            Create professional service descriptions with the help of AI. Just provide basic details about your service.
          </p>"
          <div className="space-y-8">
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />
            {generatedDescription && (
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              <GeneratedDescriptionDisplay
              <GeneratedDescriptionDisplay 
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


  },



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

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import React, { useState } from "react",;
import { Header } from "@/components/Header",;
import { Footer } from "@/components/Footer",;
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",;
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
<<<<<<< HEAD
=======
"
import React, { useState } from "react",;"
import { Header } from "@/components/Header",;"
import { Footer } from "@/components/Footer",;"
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",;"
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",;"
import { SEO } from "@/components/SEO",;"
import { useAuth } from "@/hooks/useAuth",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { Navigate } from "react-router-dom",;
export default function ServiceDescriptionGenerator() { return null; }
  const { isAuthenticated, isLoading } = useAuth(),;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Navigate } from "react-router-dom",;
export default function ServiceDescriptionGenerator() {;
  const { isAuthenticated, isLoading } = useAuth(),;
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),;

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Show loading while checking authentication;
  if (isLoading) {;
    return (
  // Show loading while checking authentication;
  if (isLoading) {;
    return (
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;
=======


  // Show loading while checking authentication;
  if (isLoading) {;
    return (
"
      <div className="flex justify-center items-center min-h-screen bg-zion-blue">;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="animate-pulse text-zion-purple text-lg">;
          Loading...;
        </div>;
      </div>;
    );
<<<<<<< HEAD
<<<<<<< HEAD
  }  // Redirect to login if not authenticated;
=======
  }

  // Redirect to login if not authenticated;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
      />;
      <Header />;
      <main className="flex-1 p-6 md:p-10">;
        <div className="max-w-4xl mx-auto">;
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>;
=======
  }



  // Redirect to login if not authenticated;
  if (!isAuthenticated) {;'"
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />;
  }



      />;
      <Header />;"
      <main className="flex-1 p-6 md:p-10">;"
        <div className="max-w-4xl mx-auto">;"
          <h1 className="text-3xl font-bold text-white mb-2">Service Description Generator</h1>;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          <p className="text-zion-slate mb-8">;
            Create professional service descriptions with the help of AI. Just provide basic details about your service.;
          </p>;

<<<<<<< HEAD
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;

            {generatedDescription && (;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
              <GeneratedDescriptionDisplay;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
  const { isAuthenticated, isLoading } = useAuth();
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay;
              <GeneratedDescriptionDisplay;
              <GeneratedDescriptionDisplay;
              <GeneratedDescriptionDisplay;
          ;"
=======

  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay
              <GeneratedDescriptionDisplay

              <GeneratedDescriptionDisplay 

              <GeneratedDescriptionDisplay
          ;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <div className="space-y-8">;
            <ServiceDescriptionForm onDescriptionGenerated={setGeneratedDescription} />;
            ;
            {generatedDescription && (;
              <GeneratedDescriptionDisplay ;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
                description={generatedDescription}
                onSave={handleDescriptionSave}
              />;
            )}

          </div>;
        </div>;
      </main>;
      <Footer />;

<<<<<<< HEAD

<<<<<<< HEAD
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
=======
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null);
              <GeneratedDescriptionDisplay
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
    </div>);
}

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
