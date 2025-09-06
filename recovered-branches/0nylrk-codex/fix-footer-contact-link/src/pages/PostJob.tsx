<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PostJob.tsx

<<<<<<< HEAD

import { Header } from "@/components/header",
import { Footer } from "@/components/Footer",
import { JobPostingForm } from "@/components/jobs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",

  if (isLoading) {
========
=======

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();
<<<<<<< HEAD
<<<<<<< HEAD
  if (isLoading) {;
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PostJob.tsx
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Header } from "@/components/header",
import { Footer } from "@/components/Footer",
import { JobPostingForm } from "@/components/jobs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
import { Navigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();

import { Navigate } from "react-router-dom",
import { useIsMobile } from "@/hooks/use-mobile",
export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth(),
  const isMobile = useIsMobile(),
  
  if (isLoading) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PostJob.tsx
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return (
    <>
      <SEO
        title="Post a Job | Zion AI Marketplace"
        description="Post a job to find the perfect AI talent for your project."
      />
      <Header />
      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>
        <Card className="border shadow-md">
          <CardHeader>
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>
            <CardDescription>
              Fill out the form below to post your job and find the perfect talent.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <JobPostingForm />
          </CardContent>
        </Card>
      </main>
      <Footer />
      {/* Add extra bottom padding on mobile to account for the bottom nav */}
      {isMobile && <div className="h-16"></div>}
    </>
  )
<<<<<<< HEAD
<<<<<<< HEAD

=======
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;

  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();





  if (isLoading) {
=======
  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PostJob.tsx
  return (
=======


=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Header } from "@/components/header",;
import { Footer } from "@/components/Footer",;
import { JobPostingForm } from "@/components/jobs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { useIsMobile } from "@/hooks/use-mobile",;
export default function PostJob() {;
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }
;
  return (;
<<<<<<< HEAD

    <>;
      <SEO
        title="Post a Job | Zion AI Marketplace" 
        description="Post a job to find the perfect AI talent for your project." 
      />;
      <Header />;
      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>;
        <Card className="border shadow-md">;
          <CardHeader>;
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>;
import { Header } from '@/components / header';
import { Footer } from '@/components / Footer';
import { JobPostingForm } from '@/components / jobs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components / ui / card';
import { SEO } from '@/components / SEO';
import { use_auth } from '@/hooks / use_auth';
import { Navigate } from './react-router-dom';
import { useIsMobile } from '@/hooks / use - mobile';
export default /**
 * PostJob - Function description
 */
function PostJob() {
  const { is_authenticated, is_loading } = use_auth ();
  const is_mobile = useIsMobile ();
;
  // Check condition
if ( {) {
  $2
}
    return (
      <div className="flex items - center justify - center min - h-screen">;
        <div className="animate - pulse">Loading...</div>;
      </div>);
  }
  return (
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    <>;
      <SEO;
        title="Post a Job | Zion AI Marketplace";
        description="Post a job to find the perfect AI talent for your project.";
      />;
      <Header />;
<<<<<<< HEAD
      <main className={`container mx - auto px-${is_mobile ? '2' : '4'} py-${is_mobile ? '6' : '12'} max - w-4xl`}>;
        <Card className="border shadow - md">;
          <CardHeader>;
            <CardTitle className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Post a Job</CardTitle>;
=======

import { Header } from "@/components/header",;
import { Footer } from "@/components/Footer",;
import { JobPostingForm } from "@/components/jobs",;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",;
import { SEO } from "@/components/SEO",;
import { useAuth } from "@/hooks/useAuth",;
import { Navigate } from "react-router-dom",;
import { useIsMobile } from "@/hooks/use-mobile",;
;
export default function PostJob() {;
  const { isAuthenticated, isLoading } = useAuth(),;
  const isMobile = useIsMobile(),;
  ;
  if (isLoading) {;
    return (;
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    ),;
  }
  ;
  return (;
    <>;
      <SEO ;
        title="Post a Job | Zion AI Marketplace" ;
        description="Post a job to find the perfect AI talent for your project." ;
      />;
      <Header />;
      <main className={`container mx-auto px-${isMobile ? '2' :'4'} py-${isMobile ? '6' :'12'} max-w-4xl`}>;
        <Card className="border shadow-md">;
          <CardHeader>;
            <CardTitle className={`text-${isMobile ? '2xl' :'3xl'} font-bold`}>Post a Job</CardTitle>;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>;
        <Card className="border shadow-md">;
          <CardHeader>;
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
            <CardDescription>;
              Fill out the form below to post your job and find the perfect talent.;
            </CardDescription>;
          </CardHeader>;
          <CardContent>;
            <JobPostingForm />;
          </CardContent>;
        </Card>;
      </main>;
      <Footer />;
      {/* Add extra bottom padding on mobile to account for the bottom nav */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PostJob.tsx
      {isMobile && <div className="h-16"></div>}
    </>;
  );

}
;

=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
=======
      {isMobile && <div className="h-16"></div>}
    </>;
  ),;}
 export default function PostJob () {
  const {
  isAuthenticated, isLoading 
}= useAuth ();
const isMobile = useIsMobile ();
if (isLoading) {
  return (<div className="flex items-center justify-center min-h-screen" > <div className="animate-pulse" >Loading...</div> </div>) 
}Post a Job | Zion AI Marketplace"description=" Post a job to find the perfect AI talent for your project." /> <Header /> <CardHeader> <CardTitle className= {
  `text-$ {
  isMobile ? '2xl' : '3xl' 
}font-bold` 
}>Post a Job</CardTitle> <CardDescription> Fill out the form below to post your job and find the perfect talent. </CardDescription> </CardHeader> <CardContent> <JobPostingForm /> </CardContent> </Card> </main> <Footer /> </>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/pages/PostJob.tsx
=======
      {isMobile && <div className="h-16"></div>}
    </>;
  );
}
;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
