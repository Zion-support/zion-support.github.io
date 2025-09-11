
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MetadataManager} from "@/components/mobile-app/admin/MetadataManager";
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


const AppMetadataManager: React.FC = () => {
=======



const AppMetadataManager: React.FC = () => {
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (

    <AppLayout>;

<<<<<<< HEAD
<<<<<<< HEAD
const AppMetadataManager: React.FC = () => {;
  return (
    <AppLayout>;
const AppMetadataManager: React.FC = () => {
  return (
    <AppLayout>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <SEO
        title="App Metadata Manager"
        description="Manage app store metadata for the Zion mobile application"
        noindex={true}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>
        <MetadataManager />
      </div>
    </AppLayout>
  )
}
export default AppMetadataManager;

<<<<<<< HEAD
},

export default AppMetadataManager,
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",;
const AppMetadataManager: React.FC = () => {;
  return (;
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

      />;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>;
  );
};
export default AppMetadataManager;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
    </AppLayout>);
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <div className="container py - 8">;
        <h1 className="text - 3xl font - bold text - zion - cyan mb - 8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>);
}
;
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

},


<<<<<<< HEAD
<<<<<<< HEAD
export default AppMetadataManager;
;

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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default AppMetadataManager;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default AppMetadataManager;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
