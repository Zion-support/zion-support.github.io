<<<<<<< HEAD

=======



>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
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
=======




>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MetadataManager} from "@/components/mobile-app/admin/MetadataManager";
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
=======
const AppMetadataManager: React.FC = () => {
const AppMetadataManager: React.FC = () => {;
  return (
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <SEO
        title="App Metadata Manager"
        description="Manage app store metadata for the Zion mobile application"
        noindex={true}
<<<<<<< HEAD
<<<<<<< HEAD

=======
      />
      <div className="container py-8">
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>
        <MetadataManager />
      </div>
    </AppLayout>
  )
=======
}
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
export default AppMetadataManager;

<<<<<<< HEAD
<<<<<<< HEAD
},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default AppMetadataManager,
import React from "react",;
import { AppLayout } from "@/layout/AppLayout",;
import { SEO } from "@/components/SEO",;
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",;
const AppMetadataManager: React.FC = () => {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import React from './react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
import { MetadataManager } from '@/components / mobile - app / admin / MetadataManager';
const AppMetadataManager: React.FC = () => {
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <AppLayout>;
      <SEO;
        title="App Metadata Manager";
        description="Manage app store metadata for the Zion mobile application";
        noindex={true}
      />;
<<<<<<< HEAD
      <div className="container py - 8">;
        <h1 className="text - 3xl font - bold text - zion - cyan mb - 8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>;
  );
},;

export default AppMetadataManager;
export default AppMetadataManager;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default AppMetadataManager;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

},


export default AppMetadataManager;
<<<<<<< HEAD
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
