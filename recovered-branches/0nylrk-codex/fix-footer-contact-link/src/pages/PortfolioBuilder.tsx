import { useState } from "react";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ResumeWizard } from "@/components/resume-builder/ResumeWizard";
import {
  PortfolioBuilder,
  as,
  PortfolioSection,
} from "@/components/resume-builder/portfolio/PortfolioBuilder";
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState("resume");

  return (

=======

import { ResumeWizard } from "@/components/resume-builder/ResumeWizard";
import {}
  PortfolioBuilder,
  as,
  PortfolioSection,";
} from "@/components/resume-builder/portfolio/PortfolioBuilder";


>>>>>>> origin/cursor/delete-old-data-records-6bba
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

  );
}


=======
  );
}

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
    <ProtectedRoute>
      <PortfolioBuilderContent />
    </ProtectedRoute>
  );
}

=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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

;


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import {useState} from 'react';
import {AppHeader} from '@/layout / AppHeader';
import {Footer} from '@/components / Footer';
import {SEO} from '@/components / SEO';
import {ProtectedRoute} from '@/components / ProtectedRoute';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';
import {ResumeWizard} from '@/components / resume - builder / ResumeWizard';
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
  ),;
>>>>>>> origin/cursor/delete-old-data-records-6bba
}
export default function PortfolioBuilder() {
  return (
    <ProtectedRoute>

<<<<<<< HEAD
      <PortfolioBuilderContent />
    </ProtectedRoute>
  )
}
;
export default function PortfolioBuilder() {;
  return (;
    <ProtectedRoute>;

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
      <PortfolioBuilderContent />;
    </ProtectedRoute>;
  );
}
;

;
<<<<<<< HEAD


=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
