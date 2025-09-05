
import React from "react";

const AppMetadataManager: React.FC = () => {_return (
    <AppLayout>
      <SEO 
        title="App Metadata Manager"
        description="Manage app store metadata for the Zion mobile application"
        noindex={true}
      />
      
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>
        
        <MetadataManager />
      </div>
    </AppLayout>
  );
};

export default AppMetadataManager;
