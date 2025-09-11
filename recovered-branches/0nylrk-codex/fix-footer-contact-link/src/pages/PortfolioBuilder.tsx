

<<<<<<< HEAD
<<<<<<< HEAD
import { useState  } from 'react';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { ResumeWizard  } from '@/components/resume-builder/ResumeWizard';
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder';
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume');
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ResumeWizard} from '@/components/resume-builder/ResumeWizard';
import {PortfolioBuilder, as, PortfolioSection} from '@/components/resume-builder/portfolio/PortfolioBuilder';
<<<<<<< HEAD
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { useState } from 'react',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard',
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder',


<<<<<<< HEAD
<<<<<<< HEAD
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  return (
    <>
      <SEO
        title="Portfolio Builder | Zion AI Marketplace"
        description="Create and customize your resume and portfolio to showcase your skills and experience."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="bg-muted/60 p-0">
            <TabsTrigger value="resume" className="data-[state=active]:bg-background">Resume</TabsTrigger>
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background">Portfolio</TabsTrigger>
          </TabsList>
          <TabsContent value="resume" className="space-y-6">
            <ResumeWizard />
          </TabsContent>
          <TabsContent value="portfolio" className="space-y-6">
            <PortfolioSection />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
}
<<<<<<< HEAD

<<<<<<< HEAD
import { useState } from 'react',;
import { AppHeader } from '@/layout/AppHeader',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard',;
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder',;
;
=======
import {useState} from 'react';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ResumeWizard} from '@/components/resume-builder/ResumeWizard';
import {PortfolioBuilder, as, PortfolioSection} from '@/components/resume-builder/portfolio/PortfolioBuilder';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
function PortfolioBuilderContent() {;
  const [activeTab, setActiveTab] = useState('resume'),;
  ;
  return (;
    <>;
      <SEO ;
        title="Portfolio Builder | Zion AI Marketplace" ;
        description="Create and customize your resume and portfolio to showcase your skills and experience." ;
=======
export default function PortfolioBuilder() {
  return (
    <>;
      <SEO
        title="Portfolio Builder | Zion AI Marketplace" 
        description="Create and customize your resume and portfolio to showcase your skills and experience." 
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>;
<<<<<<< HEAD
        ;
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">;
          <TabsList className="bg-muted/60 p-0">;
            <TabsTrigger value="resume" className="data-[state=active]:bg-background">Resume</TabsTrigger>;
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background">Portfolio</TabsTrigger>;
          </TabsList>;
<<<<<<< HEAD
          ;
          <TabsContent value="resume" className="space-y-6">;
            <ResumeWizard />;
          </TabsContent>;
          ;
=======

          <TabsContent value="resume" className="space-y-6">;
            <ResumeWizard />;
          </TabsContent>;

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <TabsContent value="portfolio" className="space-y-6">;
            <PortfolioSection />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;
<<<<<<< HEAD
=======
  );
}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;

export default function PortfolioBuilder() {;
  return (
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

;


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {useState} from 'react';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {ResumeWizard} from '@/components / resume - builder / ResumeWizard';
import {PortfolioBuilder, as, PortfolioSection} from '@/components / resume - builder / portfolio / PortfolioBuilder';
/**
 * PortfolioBuilderContent - Function description
 */
function PortfolioBuilderContent() {
  const [active_tab, setActiveTab] = useState ('resume');
;
  return (
    <>;
      <SEO;
        title="Portfolio Builder | Zion AI Marketplace";
        description="Create and customize your resume and portfolio to showcase your skills and experience.";
      />;
      <AppHeader />;
      <main className="container mx - auto px - 4 py - 8">;
        <h1 className="text - 3xl font - bold mb - 8">Resume & Portfolio Builder</h1>;
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-6">;
          <TabsList className="bg - muted / 60 p - 0">;
            <TabsTrigger value="resume" className="data-[state = active]:bg - background">Resume</TabsTrigger>;
            <TabsTrigger value="portfolio" className="data-[state = active]:bg - background">Portfolio</TabsTrigger>;
          </TabsList>;
          <TabsContent value="resume" className="space - y-6">;
            <ResumeWizard />;
          </TabsContent>;
          <TabsContent value="portfolio" className="space - y-6">;
            <PortfolioSection />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>);
}
export default /**
 * PortfolioBuilder - Function description
 */
function PortfolioBuilder() {
  return (
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD
<<<<<<< HEAD
  ),;
}
export default function PortfolioBuilder() {
  return (
    <ProtectedRoute>
      <PortfolioBuilderContent />
    </ProtectedRoute>
  )
}
;
export default function PortfolioBuilder() {;
  return (;
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}
;
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
