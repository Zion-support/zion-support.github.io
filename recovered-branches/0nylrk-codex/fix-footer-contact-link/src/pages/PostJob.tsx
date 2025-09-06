
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;

import { Navigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
export default function PostJob() {
  const { isAuthenticated, isLoading } = useAuth();

  const isMobile = useIsMobile();




    return (
      <div className="flex items-center justify-center min-h-screen">;
        <div className="animate-pulse">Loading...</div>;
      </div>;
    );
  }


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





      {is_mobile && <div className="h - 16"></div>}
    </>);
}




