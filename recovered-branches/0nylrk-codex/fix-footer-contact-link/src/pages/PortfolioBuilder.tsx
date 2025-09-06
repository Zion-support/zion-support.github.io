import { useState } from "react";"
import { AppHeader } from "@/layout/AppHeader";"
import { Footer } from "@/components/Footer";"
import { SEO } from "@/components/SEO";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";"
import { ResumeWizard } from "@/components/resume-builder/ResumeWizard";
import {}
  PortfolioBuilder,
  as,
  PortfolioSection,";
} from "@/components/resume-builder/portfolio/PortfolioBuilder";
function PortfolioBuilderContent() { return null; }
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
  );
}




;

export default function PortfolioBuilder() { return null; }
}





import {useState} from 'react';'
import {AppHeader} from '@/layout / AppHeader';'
import {Footer} from '@/components / Footer';'
import {SEO} from '@/components / SEO';'
import {ProtectedRoute} from '@/components / ProtectedRoute';'
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components / ui / tabs';'
import {ResumeWizard} from '@/components / resume - builder / ResumeWizard';'
import {PortfolioBuilder, as, PortfolioSection} from '@/components / resume - builder / portfolio / PortfolioBuilder';
/**
 * PortfolioBuilderContent - Function description;
 */
function PortfolioBuilderContent() { return null; }
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-6">;"
          <TabsList className="bg - muted / 60 p - 0">;"
            <TabsTrigger value="resume" className="data-[state = active]:bg - background">Resume</TabsTrigger>;"
            <TabsTrigger value="portfolio" className="data-[state = active]:bg - background">Portfolio</TabsTrigger>;
          </TabsList>;"
          <TabsContent value="resume" className="space - y-6">;
            <ResumeWizard />;
          </TabsContent>;"
          <TabsContent value="portfolio" className="space - y-6">;
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



'"