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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



<<<<<<< HEAD
=======


>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MetadataManager} from "@/components/mobile-app/admin/MetadataManager";
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


const AppMetadataManager: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
=======
const AppMetadataManager: React.FC = () => {;
  return (
    <AppLayout>;
const AppMetadataManager: React.FC = () => {
  return (
    <AppLayout>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <SEO
        title="App Metadata Manager"
        description="Manage app store metadata for the Zion mobile application"
        noindex={true}
<<<<<<< HEAD

=======
      />
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>
        <MetadataManager />
      </div>
    </AppLayout>
  )
}
export default AppMetadataManager;

},

export default AppMetadataManager,
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",;
const AppMetadataManager: React.FC = () => {;
  return (;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      />;

      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;

        <MetadataManager />;
      </div>;
    </AppLayout>;
  );
};
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default AppMetadataManager;

=======
import React from './react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { MetadataManager } from '@/components / mobile - app / admin / MetadataManager';
const AppMetadataManager: React.FC = () => {
  return (
    <AppLayout>;
      <SEO;
        title="App Metadata Manager";
        description="Manage app store metadata for the Zion mobile application";
        noindex={true}
      />;
    </AppLayout>);
}
;

},


export default AppMetadataManager;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

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
export default AppMetadataManager,; const AppMetadataManager: React.FC = () => {
  return (App Metadata Manager"description=" Manage app store metadata for the Zion mobile application"noindex= {
  true 
}/> <div className=" container py-8"> <h1 className=" text-3xl font-bold text-zion-cyan mb-8" >App Metadata Manager</h1> <MetadataManager /> </div> </AppLayout>) 
};
export default AppMetadataManager;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>;
  );
},;
export default AppMetadataManager;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
