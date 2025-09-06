




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








>>>>>>> origin/feature/merge-conflicts-and-improvements


import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MetadataManager} from "@/components/mobile-app/admin/MetadataManager";


import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",







>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba




const AppMetadataManager: React.FC = () => {
  return (

    <AppLayout>;

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
  )


export default AppMetadataManager,
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
      <div className="container py - 8">;
        <h1 className="text - 3xl font - bold text - zion - cyan mb - 8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;





    </AppLayout>);
}
;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


export default AppMetadataManager;

