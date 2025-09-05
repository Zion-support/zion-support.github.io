
<<<<<<< HEAD
import { useState } from 'react',
import { AppHeader } from '@/layout/AppHeader',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard',
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder',
function PortfolioBuilderContent() {
  const [activeTab, setActiveTab] = useState('resume'),
  
  return (
    <>
      <SEO 
        title=&quot;Portfolio Builder | Zion AI Marketplace&quot; 
        description=&quot;Create and customize your resume and portfolio to showcase your skills and experience.&quot; 
      />
      <AppHeader />
      <main className=&quot;container mx-auto px-4 py-8&quot;>
        <h1 className=&quot;text-3xl font-bold mb-8&quot;>Resume & Portfolio Builder</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className=&quot;space-y-6&quot;>
          <TabsList className=&quot;bg-muted/60 p-0&quot;>
            <TabsTrigger value=&quot;resume&quot; className=&quot;data-[state=active]:bg-background&quot;>Resume</TabsTrigger>
            <TabsTrigger value=&quot;portfolio&quot; className=&quot;data-[state=active]:bg-background&quot;>Portfolio</TabsTrigger>
          </TabsList>
          
          <TabsContent value=&quot;resume&quot; className=&quot;space-y-6&quot;>
            <ResumeWizard />
          </TabsContent>
          
          <TabsContent value=&quot;portfolio&quot; className=&quot;space-y-6&quot;>
            <PortfolioSection />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  )
=======
import { useState } from 'react',;
import { AppHeader } from '@/layout/AppHeader',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs',;
import { ResumeWizard } from '@/components/resume-builder/ResumeWizard',;
import { PortfolioBuilder as PortfolioSection } from '@/components/resume-builder/portfolio/PortfolioBuilder',;
function PortfolioBuilderContent() {;
  const [activeTab, setActiveTab] = useState('resume');
  return (;
    <>;
      <SEO;
        title="Portfolio Builder | Zion AI Marketplace";
        description="Create and customize your resume and portfolio to showcase your skills and experience.";
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
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