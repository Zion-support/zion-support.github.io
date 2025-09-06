import { Header } from "@/components/header";"
import { Footer } from "@/components/Footer";"
import { JobPostingForm } from "@/components/jobs";
import {}
  Card,
  CardContent,
  CardDescription,
  CardHeader,
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

    <>;
      <SEO;"
        title="Post a Job | Zion AI Marketplace";"
        description="Post a job to find the perfect AI talent for your project.";
      />;
      <Header />;



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
;


}
;"
      {is_mobile && <div className="h - 16"></div>}
    </>);
}

'"`