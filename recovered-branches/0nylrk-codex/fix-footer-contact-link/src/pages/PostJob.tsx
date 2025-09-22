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
import { Header } from "@/components/header",
import { Footer } from "@/components/Footer",
import { JobPostingForm } from "@/components/jobs",
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card",
import { SEO } from "@/components/SEO",
import { useAuth } from "@/hooks/useAuth",

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
import { Header } from "@/components/header";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/header";"
import { Footer } from "@/components/Footer";"
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
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth",import { Navigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth();
  const isMobile = useIsMobile();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
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

  if (isLoading) {
  if (isLoading) {;
    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }
return (

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

            <CardTitle className={`text-${isMobile ? '2xl' : '3xl'} font-bold`}>Post a Job;
            <CardDescription>;

            ;
          <CardContent>;

            <JobPostingForm />;

      </main>;
      <Footer />;
{/* Add extra bottom padding on mobile to account for the bottom nav */}
      {isMobile && <div className="h-16"></div>}
    </>;
  );

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
}

}
;"
      {is_mobile && <div className="h - 16"></div>}
    </>);
}
    </>);
}

'"`
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

