
<<<<<<< HEAD
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",;
;
const AppMetadataManager:React.FC = () => {;
  return (;
    <AppLayout>;
      <SEO ;
        title="App Metadata Manager";
        description="Manage app store metadata for the Zion mobile application";
        noindex={true}
      />;
      ;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        ;
        <MetadataManager />;
      </div>;
    </AppLayout>;
  ),;
},;
;
export default AppMetadataManager,;
=======
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",const AppMetadataManager: React.FC = () => {
  return (
import React from "react";

const AppMetadataManager: React.FC = () => {_return (
    <AppLayout>
      <SEO 
        title=&quot;App Metadata Manager&quot;
        description=&quot;Manage app store metadata for the Zion mobile application&quot;
        noindex={true}
      />
      
      <div className=&quot;container py-8&quot;>
        <h1 className=&quot;text-3xl font-bold text-zion-cyan mb-8&quot;>App Metadata Manager</h1>
        
        <MetadataManager />
      </div>
    </AppLayout>
  )
},

export default AppMetadataManager,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
