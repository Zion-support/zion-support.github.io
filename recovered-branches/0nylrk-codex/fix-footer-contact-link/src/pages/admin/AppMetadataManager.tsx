<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
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

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


<<<<<<< HEAD


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react";
import {AppLayout} from "@/layout/AppLayout";
import {SEO} from "@/components/SEO";
import {MetadataManager} from "@/components/mobile-app/admin/MetadataManager";
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import React from "react",
import { AppLayout } from "@/layout/AppLayout",
import { SEO } from "@/components/SEO",
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",
<<<<<<< HEAD
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const AppMetadataManager: React.FC = () => {
  return (

    <AppLayout>;

<<<<<<< HEAD
const AppMetadataManager: React.FC = () => {

  return (
    <AppLayout>
      <SEO"
        title="App Metadata Manager""
=======
<<<<<<< HEAD
const AppMetadataManager: React.FC = () => {;
  return (
    <AppLayout>;
const AppMetadataManager: React.FC = () => {
  return (
    <AppLayout>
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <SEO
        title="App Metadata Manager"
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        description="Manage app store metadata for the Zion mobile application"
        noindex={true}
<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

        </h1>

        <MetadataManager />
      </div>
    </AppLayout>

export default AppMetadataManager;

export default AppMetadataManager,
<<<<<<< HEAD
import { AppLayout } from "@/layout/AppLayout";"
import { SEO } from "@/components/SEO",;"
import { MetadataManager } from "@/components/mobile-app/admin/MetadataManager",;"
const "AppMetadataManager": React.FC = () => {;
  }
  return (;export default AppMetadataManager;
=======

      />;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>;

  );
};
<<<<<<< HEAD

export default AppMetadataManager;

import React from './react';'
import { AppLayout } from '@/layout / AppLayout';'
import { SEO } from '@/components / SEO';'
=======
export default AppMetadataManager;
import React from './react';
import { AppLayout } from '@/layout / AppLayout';
import { SEO } from '@/components / SEO';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { MetadataManager } from '@/components / mobile - app / admin / MetadataManager';
const AppMetadataManager: React.FC = () => {}
  return (

    <AppLayout>;
      <SEO;"
        title="App Metadata Manager";"
        description="Manage app store metadata for the Zion mobile application";
        noindex={true}
      />;

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
<<<<<<< HEAD
      ;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        ;
=======
<<<<<<< HEAD
    </AppLayout>);
}
;
=======
      <div className="container py - 8">;
        <h1 className="text - 3xl font - bold text - zion - cyan mb - 8">App Metadata Manager</h1>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        <MetadataManager />;
      </div>;
    </AppLayout>;
  ),;
},;
;
<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

},


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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default AppMetadataManager,; const AppMetadataManager: React.FC = () => {
  return (App Metadata Manager"description=" Manage app store metadata for the Zion mobile application"noindex= {
  true 
}/> <div className=" container py-8"> <h1 className=" text-3xl font-bold text-zion-cyan mb-8" >App Metadata Manager</h1> <MetadataManager /> </div> </AppLayout>) 
};
<<<<<<< HEAD
export default AppMetadataManager;
      <div className="container py-8">;
        <h1 className="text-3xl font-bold text-zion-cyan mb-8">App Metadata Manager</h1>;
        <MetadataManager />;
      </div>;
    </AppLayout>;
  );
},;
export default AppMetadataManager;
>>>>>>> origin/chore/fix-lint-and-merge
=======
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
