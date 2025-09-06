


import {useState} from 'react';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ResumeWizard} from '@/components/resume-builder/ResumeWizard';
import {PortfolioBuilder, as, PortfolioSection} from '@/components/resume-builder/portfolio/PortfolioBuilder';

<<<<<<< HEAD


=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import { useState } from 'react',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard',
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder',



<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
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
export default function PortfolioBuilder() {
  return (
    <>;
      <SEO
        title="Portfolio Builder | Zion AI Marketplace" 
        description="Create and customize your resume and portfolio to showcase your skills and experience." 
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>;

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">;
          <TabsList className="bg-muted/60 p-0">;
            <TabsTrigger value="resume" className="data-[state=active]:bg-background">Resume</TabsTrigger>;
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background">Portfolio</TabsTrigger>;
          </TabsList>;

          <TabsContent value="resume" className="space-y-6">;
            <ResumeWizard />;
          </TabsContent>;

          <TabsContent value="portfolio" className="space-y-6">;
            <PortfolioSection />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;
  );
}

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

;

export default function PortfolioBuilder() {;
  return (
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}

;

<<<<<<< HEAD
;


>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
