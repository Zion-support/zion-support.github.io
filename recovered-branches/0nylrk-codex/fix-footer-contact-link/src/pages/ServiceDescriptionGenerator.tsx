
<<<<<<< HEAD
import React, { useState } from "react",
import { Header } from "@/components/Header",
import { Footer } from "@/components/Footer",
import { ServiceDescriptionForm } from "@/components/services/ServiceDescriptionForm",
import { GeneratedDescriptionDisplay } from "@/components/services/GeneratedDescriptionDisplay",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom",
=======
import React, { useState } from &quot;react&quot;;
import { Header } from &quot;@/components/Header&quot;;
import { Footer } from &quot;@/components/Footer&quot;;
import { ServiceDescriptionForm } from &quot;@/components/services/ServiceDescriptionForm&quot;;
import { GeneratedDescriptionDisplay } from &quot;@/components/services/GeneratedDescriptionDisplay&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;
import { Navigate } from &quot;react-router-dom&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export default function ServiceDescriptionGenerator() {
  const { isAuthenticated, isLoading } = useAuth(),
  const [generatedDescription, setGeneratedDescription] = useState<string | null>(null),
  
  // Show loading while checking authentication
  if (isLoading) {
    return (
      <div className=&quot;flex justify-center items-center min-h-screen bg-zion-blue&quot;>
        <div className=&quot;animate-pulse text-zion-purple text-lg&quot;>
          Loading...
        </div>
      </div>
    )
  }
  
  // Redirect to login if not authenticated
  if (!isAuthenticated) {
<<<<<<< HEAD
    return <Navigate to="/login" state={{ from: '/service-description-generator' }} replace />
=======
    return <Navigate to=&quot;/login&quot; state={{ from: '/service-description-generator' }} replace />;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  }

  const handleDescriptionSave = (editedDescription: string) => {
    setGeneratedDescription(editedDescription),
    // Here you could also save to database if needed
  },

  return (
    <div className=&quot;min-h-screen flex flex-col bg-zion-blue&quot;>
      <SEO 
        title=&quot;Service Description Generator&quot; 
        description=&quot;Generate professional service descriptions using AI&quot;
        keywords=&quot;service description, AI content, professional description generator&quot;
      />
      <Header />
      <main className=&quot;flex-1 p-6 md:p-10&quot;>
        <div className=&quot;max-w-4xl mx-auto&quot;>
          <h1 className=&quot;text-3xl font-bold text-white mb-2&quot;>Service Description Generator</h1>
          <p className=&quot;text-zion-slate mb-8&quot;>
            Create professional service descriptions with the help of AI. Just provide basic details about your service.
          </p>
          
          <div className=&quot;space-y-8&quot;>
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
      <Footer />
    </div>
  )
}
