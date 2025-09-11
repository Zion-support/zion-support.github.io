
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();

  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();

=======



  if (isLoading) {
  if (isLoading) {;
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }


  return (



=======import { Header } from "@/components/header",;
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
    <>;
      <SEO
        title="Post a Job | Zion AI Marketplace" 
        description="Post a job to find the perfect AI talent for your project." 
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
=======
      />;
      <Header />;      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>;
        <Card className="border shadow-md">;
          <CardHeader>;
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>;



<<<<<<< HEAD
<<<<<<< HEAD
}
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
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
      {isMobile && <div className="h-16"></div>}
    </>;
  );
}
;
=======}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
