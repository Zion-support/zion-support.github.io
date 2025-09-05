
import React from &quot;react&quot;;
import { AppLayout } from &quot;@/layout/AppLayout&quot;;
import { SEO } from &quot;@/components/SEO&quot;;
import { MetadataManager } from &quot;@/components/mobile-app/admin/MetadataManager&quot;;

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
  );
};

export default AppMetadataManager;
