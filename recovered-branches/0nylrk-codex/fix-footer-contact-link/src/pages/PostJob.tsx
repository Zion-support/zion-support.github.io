
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> main
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;
<<<<<<< HEAD
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Header } from "@/components/header",
import { Footer } from "@/components/Footer",
import { JobPostingForm } from "@/components/jobs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD
import { Navigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostJob() {
=======

>>>>>>> main
  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();

<<<<<<< HEAD
=======
import { Navigate } from "react-router-dom",
import { useIsMobile } from "@/hooks/use-mobile",
export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth(),
  const isMobile = useIsMobile(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse">Loading...</div>
      </div>
    )
  }
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
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======




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


  return (
=======


>>>>>>> main
=======
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
      <SEO;
        title="Post a Job | Zion AI Marketplace";
        description="Post a job to find the perfect AI talent for your project.";
=======

    <>;
      <SEO
        title="Post a Job | Zion AI Marketplace" 
        description="Post a job to find the perfect AI talent for your project." 
>>>>>>> main
      />;
      <Header />;
      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>;
        <Card className="border shadow-md">;
          <CardHeader>;
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>;
<<<<<<< HEAD
=======
=======
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
    <>;
      <SEO;
        title="Post a Job | Zion AI Marketplace";
        description="Post a job to find the perfect AI talent for your project.";
      />;
      <Header />;
      <main className={`container mx - auto px-${is_mobile ? '2' : '4'} py-${is_mobile ? '6' : '12'} max - w-4xl`}>;
        <Card className="border shadow - md">;
          <CardHeader>;
            <CardTitle className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Post a Job</CardTitle>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
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
      {isMobile && <div className="h-16"></div>}
    </>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
