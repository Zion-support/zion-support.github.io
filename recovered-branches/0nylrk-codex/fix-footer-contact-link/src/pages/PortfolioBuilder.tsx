
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
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
import {useState} from 'react';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ResumeWizard} from '@/components/resume-builder/ResumeWizard';
import {PortfolioBuilder, as, PortfolioSection} from '@/components/resume-builder/portfolio/PortfolioBuilder';
=======

function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
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
=======

import {useState} from 'react';
import {AppHeader} from '@/layout/AppHeader';
import {Footer} from '@/components/Footer';
import {SEO} from '@/components/SEO';
import {ProtectedRoute} from '@/components/ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import {ResumeWizard} from '@/components/resume-builder/ResumeWizard';
import {PortfolioBuilder, as, PortfolioSection} from '@/components/resume-builder/portfolio/PortfolioBuilder';
function PortfolioBuilderContent() {;
  const [activeTab, setActiveTab] = useState('resume');

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
=======

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
;

export default function PortfolioBuilder() {;
  return (
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}

;
;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
