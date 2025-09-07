import { useState } from "react";""
import { AppHeader } from "@/layout/AppHeader";""
import { Footer } from "@/components/Footer";""
import { SEO } from "@/components/SEO";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";""
import { ResumeWizard } from "@/components/resume-builder/ResumeWizard";"
import {
  // TODO: Implement
}
  PortfolioBuilder,
  as,
  PortfolioSection,"
} from "@/components/resume-builder/portfolio/PortfolioBuilder";"
function PortfolioBuilderContent() {"
  const [activeTab, setActiveTab] = useState("resume");"
  return (
    <>
      <SEO;"
        title="Portfolio Builder | Zion AI Marketplace"""
        description="Create and customize your resume and portfolio to showcase your skills and experience.""
      />
</SEO>
      <AppHeader />
</AppHeader>"
      <main className="container mx-auto px-4 py-8">"
</main>"
        <h1 className="text-3xl font-bold mb-8">Resume & Portfolio Builder</h1>"
        <Tabs;
          value={activeTab}
          onValueChange={setActiveTab}"
          className="space-y-6""
        >
</Tabs>"
          <TabsList className="bg-muted/60 p-0">"
</TabsList>
            <TabsTrigger;"
              value="resume"""
              className="data-[state=active]:bg-background""
            >
</TabsTrigger>
            </TabsTrigger>
            <TabsTrigger;"
              value="portfolio"""
              className="data-[state=active]:bg-background""
            >
</TabsTrigger>
            </TabsTrigger>
          </TabsList>
"
          <TabsContent value="resume" className="space-y-6">"
</TabsContent>
            <ResumeWizard />
</ResumeWizard>
          </TabsContent>
"
          <TabsContent value="portfolio" className="space-y-6">"
</TabsContent>
            <PortfolioSection />
</PortfolioSection>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
</Footer>
    </>)
  );
}
"
import {useState} from 'react';''
import {AppHeader} from '@/layout/AppHeader';''
import {Footer} from '@/components/Footer';''
import {SEO} from '@/components/SEO';''
import {ProtectedRoute} from '@/components/ProtectedRoute';''
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';''
import {ResumeWizard} from '@/components/resume-builder/ResumeWizard';''
import {PortfolioBuilder, as, PortfolioSection} from '@/components/resume-builder/portfolio/PortfolioBuilder';'
function PortfolioBuilderContent() {;'
  const [activeTab, setActiveTab] = useState('resume');'
  return (
    <ProtectedRoute>
</ProtectedRoute>
      <PortfolioBuilderContent />
</PortfolioBuilderContent>
    </ProtectedRoute>
    <ProtectedRoute>;
</ProtectedRoute>
      <PortfolioBuilderContent />;
</PortfolioBuilderContent>
    </ProtectedRoute>;
    <>;
      <SEO;'
        title="Portfolio Builder | Zion AI Marketplace";""
        description="Create and customize your resume and portfolio to showcase your skills and experience.";"
      />;
</SEO>
      <AppHeader />;
</AppHeader>"
      <main className="container mx - auto px - 4 py - 8">;"
</main>"
        <h1 className="text - 3xl font - bold mb - 8">Resume & Portfolio Builder</h1>;""
        <Tabs value={active_tab} onValueChange={setActiveTab} className="space - y-6">;"
</Tabs>"
          <TabsList className="bg - muted / 60 p - 0">;"
</TabsList>"
            <TabsTrigger value="resume" className="data-[state = active]:bg - background">Resume</TabsTrigger>;""
            <TabsTrigger value="portfolio" className="data-[state = active]:bg - background">Portfolio</TabsTrigger>;"
          </TabsList>;"
          <TabsContent value="resume" className="space - y-6">;"
</TabsContent>
            <ResumeWizard />;
</ResumeWizard>
          </TabsContent>;"
          <TabsContent value="portfolio" className="space - y-6">;"
</TabsContent>
            <PortfolioSection />;
</PortfolioSection>
          </TabsContent>;
        </Tabs>;
      </main>;
      <Footer />;
</Footer>)
    </>);
}
export default /**
 * PortfolioBuilder - Function description;
 */
function PortfolioBuilder() {
  return (
    <ProtectedRoute>;
</ProtectedRoute>
      <PortfolioBuilderContent />;
</PortfolioBuilderContent>)
    </ProtectedRoute>);
    <ProtectedRoute>
</ProtectedRoute>
      <PortfolioBuilderContent />
</PortfolioBuilderContent>
    </ProtectedRoute>
    <ProtectedRoute>;
</ProtectedRoute>
      <PortfolioBuilderContent />;
</PortfolioBuilderContent>
    </ProtectedRoute>;"