<<<<<<< HEAD
=======


<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState  } from 'react';
import { AppHeader  } from '@/layout/AppHeader';
import { Footer  } from '@/components/Footer';
import { SEO  } from '@/components/SEO';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import { Tabs, TabsContent, TabsList, TabsTrigger  } from '@/components/ui/tabs';
import { ResumeWizard  } from '@/components/resume-builder/ResumeWizard';
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder';
<<<<<<< HEAD
=======
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume');
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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

<<<<<<< HEAD
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { useState } from 'react',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard',
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder',

import { useState } from "react";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

<<<<<<< HEAD
import { ResumeWizard } from "@/components/resume-builder/ResumeWizard";
import {}
  PortfolioBuilder,
  as,
  PortfolioSection,";
} from "@/components/resume-builder/portfolio/PortfolioBuilder";

=======
<<<<<<< HEAD
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
=======

function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <>
      <SEO
        title="Portfolio Builder | Zion AI Marketplace"
        description="Create and customize your resume and portfolio to showcase your skills and experience."
      />
      <AppHeader />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>

        <Tabs

          value={activeTab}
          onValueChange={setActiveTab}"
          className="space-y-6"
        >"
          <TabsList className="bg-muted/60 p-0">
            <TabsTrigger"
              value="resume""
              className="data-[state=active]:bg-background"
            >
              Resume;
            </TabsTrigger>
            <TabsTrigger"
              value="portfolio""
              className="data-[state=active]:bg-background"
            >
              Portfolio;
            </TabsTrigger>
          </TabsList>
"
          <TabsContent value="resume" className="space-y-6">
            <ResumeWizard />
          </TabsContent>
"
          <TabsContent value="portfolio" className="space-y-6">
            <PortfolioSection />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
<<<<<<< HEAD
  )
=======
  );
}

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
<<<<<<< HEAD
  const [activeTab, setActiveTab] = useState('resume');

  return (
    <ProtectedRoute>
      <PortfolioBuilderContent />
    </ProtectedRoute>
  );
}

=======
  const [activeTab, setActiveTab] = useState('resume'),;
  ;
  return (;
    <>;
      <SEO ;
        title="Portfolio Builder | Zion AI Marketplace" ;
        description="Create and customize your resume and portfolio to showcase your skills and experience." ;
      />;
      <AppHeader />;
      <main className="container mx-auto px-4 py-8">;
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>;
        ;
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">;
          <TabsList className="bg-muted/60 p-0">;
            <TabsTrigger value="resume" className="data-[state=active]:bg-background">Resume</TabsTrigger>;
            <TabsTrigger value="portfolio" className="data-[state=active]:bg-background">Portfolio</TabsTrigger>;
          </TabsList>;
          ;
          <TabsContent value="resume" className="space-y-6">;
            <ResumeWizard />;
          </TabsContent>;
          ;
          <TabsContent value="portfolio" className="space-y-6">;
            <PortfolioSection />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>;

;

export default function PortfolioBuilder() {;
  return (
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}
<<<<<<< HEAD
=======

;


=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {useState} from 'react';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {ResumeWizard} from '@/components / resume - builder / ResumeWizard';
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import {PortfolioBuilder, as, PortfolioSection} from '@/components / resume - builder / portfolio / PortfolioBuilder';
/**
 * PortfolioBuilderContent - Function description;
 */

            <PortfolioSection />;
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
    </>);
}
export default /**;
 * PortfolioBuilder - Function description;
 */
function PortfolioBuilder() {}
  return (
    <ProtectedRoute>;
      <PortfolioBuilderContent />;
    </ProtectedRoute>);
}
<<<<<<< HEAD

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  ),;
>>>>>>> merged-prs-20250907-203621
}
export default function PortfolioBuilder() {
  return (
    <ProtectedRoute>
<<<<<<< HEAD

      <PortfolioBuilderContent />

    <ProtectedRoute>;

=======
      <PortfolioBuilderContent />
    </ProtectedRoute>
  )
}
;
export default function PortfolioBuilder() {;
  return (;
    <ProtectedRoute>;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}
;
<<<<<<< HEAD
;
=======
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
