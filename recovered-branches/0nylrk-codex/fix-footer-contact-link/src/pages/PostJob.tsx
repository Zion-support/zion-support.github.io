
import {Header} from "@/components/header";
import {Footer} from "@/components/Footer";
import {JobPostingForm} from "@/components/jobs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {SEO} from "@/components/SEO";
import {useAuth} from "@/hooks/useAuth";
import {Navigate} from "react-router-dom";
import {useIsMobile} from "@/hooks/use-mobile";
export default function PostJob() {;
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
}
;
