<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Header } from "@/components/header",
import { Footer } from "@/components/Footer",
import { JobPostingForm } from "@/components/jobs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",
<<<<<<< HEAD

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

}
;
=======
=======
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
=======
import { Header } from "@/components/header";"
import { Footer } from "@/components/Footer";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { JobPostingForm } from "@/components/jobs";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
CardTitle,
} from "@/components/ui/card";
import { SEO } from "@/components/SEO";
import { useAuth } from "@/hooks/useAuth";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
import { Navigate } from "react-router-dom";
=======
import { useAuth } from "@/hooks/useAuth",import { Navigate } from "react-router-dom";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostJob() {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (isLoading) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    return (
      <div className="flex items-center justify-center min-h-screen">
=======
  CardTitle,";
} from "@/components/ui/card";"
import { SEO } from "@/components/SEO";"
import { useAuth } from "@/hooks/useAuth";"
import { Navigate } from "react-router-dom";"
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostJob() {};
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();

  if (isLoading) {}
    return ("
      <div className="flex items-center justify-center min-h-screen">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        <div className="animate-pulse">Loading...</div>
      </div>
    );
  }

return (
    <>
      <SEO
        title="Post a Job | Zion AI Marketplace"
        description="Post a job to find the perfect AI talent for your project."
      />
      <Header />
      <main
        className={`container mx-auto px-${isMobile ? "2" : "4"} py-${isMobile ? "6" : "12"} max-w-4xl`}
      >
        <Card className="border shadow-md">
          <CardHeader>
            <CardTitle className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>
              Post a Job
            </CardTitle>
            <CardDescription>
              Fill out the form below to post your job and find the perfect
              talent.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <JobPostingForm />

import { Header } from "@/components/header";""
import { Footer } from "@/components/Footer";""
import { JobPostingForm } from "@/components/jobs";"
import {
  // TODO: Implement
}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,"
} from "@/components/ui/card";""
import { SEO } from "@/components/SEO";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";""
import { useIsMobile } from "@/hooks/use-mobile";"
export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();

  if (isLoading) {
    return ("
      <div className="flex items-center justify-center min-h-screen">"
</div>"
        <div className="animate-pulse">Loading...</div>"
      </div>
    <>
      <SEO;"
        title="Post a Job | Zion AI Marketplace"""
        description="Post a job to find the perfect AI talent for your project.""

      />
</SEO>
      <Header />

</Header>
      <main;"
        className={`container mx-auto px-${isMobile ? "2" : "4"} py-${isMobile ? "6" : "12"} max-w-4xl`}"
      >
</main>"
        <Card className="border shadow-md">"
</Card>
          <CardHeader>
</CardHeader>"
            <CardTitle className={`text-${isMobile ? "2xl" : "3xl"} font-bold`}>"
</CardTitle>
            </CardTitle>
            <CardDescription>
</CardDescription>
            </CardDescription>
          </CardHeader>
          <CardContent>
</CardContent>

            <JobPostingForm />
</JobPostingForm>
          </CardContent>
        </Card>
      </main>
      <Footer />
      {/* Add extra bottom padding on mobile to account for the bottom nav */}
      {isMobile && <div className="h-16"></div>}
    </>
)
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

  if (isLoading) {
<<<<<<< HEAD
  if (isLoading) {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }
return (

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
}
    return (
      <div className="flex items - center justify - center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  return (;
    <>;
        title="Post a Job | Zion AI Marketplace";""
        description="Post a job to find the perfect AI talent for your project.";"
      />;

      <Header />;
      <main className={`container mx - auto px-${is_mobile ? '2' : '4'} py-${is_mobile ? '6' : '12'} max - w-4xl`}>;
        <Card className="border shadow - md">;"

          <CardHeader>;
            <CardTitle className={`text-${is_mobile ? '2xl' : '3xl'} font - bold`}>Post a Job;
      <div className="flex items-center justify-center min-h-screen">;"
        <div className="animate-pulse">Loading...</div>;"
      </div>;
      <SEO ;"
        title="Post a Job | Zion AI Marketplace" ;""
        description="Post a job to find the perfect AI talent for your project." ;"

      <main className={`container mx-auto px-${isMobile ? '2' :'4'} py-${isMobile ? '6' :'12'} max-w-4xl`}>;
        <Card className="border shadow-md">;"

            <CardTitle className={`text-${isMobile ? '2xl' :'3xl'} font-bold`}>Post a Job;`;
      <main className={`container mx-auto px-${isMobile ? '2' : '4'} py-${isMobile ? '6' : '12'} max-w-4xl`}>;
        <Card className="border shadow-md">;
          <CardHeader>;
            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job</CardTitle>;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
            <CardDescription>;

            ;
          <CardContent>;

            <JobPostingForm />;

      </main>;
      <Footer />;
{/* Add extra bottom padding on mobile to account for the bottom nav */}
<<<<<<< HEAD
      {isMobile && <div className="h-16"></div>}
    </>;
  );
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}"
      {is_mobile && <div className="h - 16"></div>}
    </>);
}"
      {is_mobile && <div className="h - 16"></div>}
    </>);
}"
      {isMobile && <div className="h-16"></div>}
    </>;
  ),;}
 export default function PostJob () {}
  const {};
  isAuthenticated, isLoading;
}= useAuth ();
const isMobile = useIsMobile ();
if (isLoading) {"
  return (<div className="flex items-center justify-center min-h-screen" > <div className="animate-pulse" >Loading...</div> </div>) "
}Post a Job | Zion AI Marketplace"description=" Post a job to find the perfect AI talent for your project." /> <Header /> <CardHeader> <CardTitle className= {}
  `text-$ {}
  isMobile ? '2xl' : '3xl' `
}font-bold` 
}>Post a Job</CardTitle> <CardDescription> Fill out the form below to post your job and find the perfect talent. </CardDescription> </CardHeader> <CardContent> <JobPostingForm /> </CardContent> </Card> </main> <Footer /> </>) 
}"
      {isMobile && <div className="h-16"></div>}
    </>;
  );
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;"
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    </>);
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
if (isLoading) {"
  return (<div className="flex items-center justify-center min-h-screen" > <div className="animate-pulse" >Loading...</div> </div>)""
}Post a Job | Zion AI Marketplace"description=" Post a job to find the perfect AI talent for your project." /> <Header /> <CardHeader> <CardTitle className= {"

}>Post a Job <CardDescription> Fill out the form below to post your job and find the perfect talent.   <CardContent> <JobPostingForm />   </main> <Footer /> </>) 
;"
pr-12325
      {is_mobile && <div className="h - 16"></div>}"
    </>);
}
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
