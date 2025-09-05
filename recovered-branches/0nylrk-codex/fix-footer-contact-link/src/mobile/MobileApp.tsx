
<<<<<<< HEAD
import React from "react",;
import { Routes, Route, Navigate } from "react-router-dom",;
import { MobileThemeProvider } from "./theme/MobileThemeProvider",;
import { MobileOnboarding } from "./pages/MobileOnboarding",;
import { MobileHome } from "./pages/MobileHome",;
import { MobileBrowse } from "./pages/MobileBrowse",;
import { MobileProjects } from "./pages/MobileProjects",;
import { MobileMessages } from "./pages/MobileMessages",;
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",;
import { MobileJobPost } from "./pages/MobileJobPost",;
import { useAuth } from "@/hooks/useAuth",;
;
export function MobileApp() {;
  const { isAuthenticated } = useAuth(),;
  ;
  return (;
    <MobileThemeProvider>;
      <Routes>;
        <Route path="/onboarding" element={<MobileOnboarding />} />;
        <Route ;
          path="/" ;
          element={;
            isAuthenticated ? <MobileHome /> :<Navigate to="/onboarding" />;
          } ;
        />;
        <Route path="/browse" element={<MobileBrowse />} />;
        <Route path="/projects" element={<MobileProjects />} />;
        <Route path="/inbox" element={<MobileMessages />} />;
        <Route path="/resume" element={<MobileResumeBuilder />} />;
        <Route path="/post-job" element={<MobileJobPost />} />;
        <Route path="/profile" element={<div>Profile page</div>} />;
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;
    </MobileThemeProvider>;
  ),;
=======
import React from "react",
import { Routes, Route, Navigate } from "react-router-dom",
import { MobileThemeProvider } from "./theme/MobileThemeProvider",
import { MobileOnboarding } from "./pages/MobileOnboarding",
import { MobileHome } from "./pages/MobileHome",
import { MobileBrowse } from "./pages/MobileBrowse",
import { MobileProjects } from "./pages/MobileProjects",
import { MobileMessages } from "./pages/MobileMessages",
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",
import { MobileJobPost } from "./pages/MobileJobPost",
import { useAuth } from "@/hooks/useAuth",export function MobileApp() {
  const { isAuthenticated } = useAuth(),
import React from "react";

export function MobileApp() {_const { isAuthenticated} = useAuth();
  
  return (
    <MobileThemeProvider>
      <Routes>
        <Route path=&quot;/onboarding&quot; element={<MobileOnboarding />} />
        <Route 
          path=&quot;/&quot; 
          element={
            isAuthenticated ? <MobileHome /> : <Navigate to=&quot;/onboarding&quot; />
          } 
        />
        <Route path=&quot;/browse&quot; element={<MobileBrowse />} />
        <Route path=&quot;/projects&quot; element={<MobileProjects />} />
        <Route path=&quot;/inbox&quot; element={<MobileMessages />} />
        <Route path=&quot;/resume&quot; element={<MobileResumeBuilder />} />
        <Route path=&quot;/post-job&quot; element={<MobileJobPost />} />
        <Route path=&quot;/profile&quot; element={<div>Profile page</div>} />
        <Route path=&quot;*&quot; element={<Navigate to=&quot;/&quot; replace />} />      </Routes>
    </MobileThemeProvider>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
