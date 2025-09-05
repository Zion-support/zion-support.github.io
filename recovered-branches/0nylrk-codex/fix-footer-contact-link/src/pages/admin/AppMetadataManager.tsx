
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",
=======
import React from &quot;react&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { MetadataManager } from &quot;@/components/mobile-app/admin/MetadataManager&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const AppMetadataManager: React.FC = () => {
  return (
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
=======
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",;
const AppMetadataManager: React.FC = () => {;
  return (;
    <AppLayout>;
      <SEO;
        title="App Metadata Manager";
        description="Manage app store metadata for the Zion mobile application";
        noindex={true}
      />;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>;
  );
},;
export default AppMetadataManager;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
