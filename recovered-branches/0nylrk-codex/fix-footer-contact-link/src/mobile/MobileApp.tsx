
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import {MobileThemeProvider} from "./theme/MobileThemeProvider";
import {MobileOnboarding} from "./pages/MobileOnboarding";
import {MobileHome} from "./pages/MobileHome";
import {MobileBrowse} from "./pages/MobileBrowse";
import {MobileProjects} from "./pages/MobileProjects";
import {MobileMessages} from "./pages/MobileMessages";
import {MobileResumeBuilder} from "./pages/MobileResumeBuilder";
import {MobileJobPost} from "./pages/MobileJobPost";
import {useAuth} from "@/hooks/useAuth";
export function MobileApp() {;
  const { isAuthenticated } = useAuth();
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React from "react",
import { Routes, Route, Navigate } from "react-router-dom",
import { MobileThemeProvider } from "./theme/MobileThemeProvider",
import { MobileOnboarding } from "./pages/MobileOnboarding",
import { MobileHome } from "./pages/MobileHome",
import { MobileBrowse } from "./pages/MobileBrowse",
import { MobileProjects } from "./pages/MobileProjects",
import { MobileMessages } from "./pages/MobileMessages",
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",
<<<<<<< HEAD
import { MobileJobPost } from "./pages/MobileJobPost";
import { useAuth } from "@/hooks/useAuth";
export function MobileApp() {
  const { isAuthenticated } = useAuth();
=======
import { MobileJobPost } from "./pages/MobileJobPost",
import { useAuth } from "@/hooks/useAuth",
export function MobileApp() {
  const { isAuthenticated } = useAuth(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  return (
    <MobileThemeProvider>
      <Routes>
        <Route path="/onboarding" element={<MobileOnboarding />} />
        <Route
          path="/"
          element={
            isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />
          }
        />
        <Route path="/browse" element={<MobileBrowse />} />
        <Route path="/projects" element={<MobileProjects />} />
        <Route path="/inbox" element={<MobileMessages />} />
        <Route path="/resume" element={<MobileResumeBuilder />} />
        <Route path="/post-job" element={<MobileJobPost />} />
        <Route path="/profile" element={<div>Profile page</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileThemeProvider>
  )
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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

export function MobileApp() {;
  const { isAuthenticated } = useAuth();

  return (
    <MobileThemeProvider>;
      <Routes>;
        <Route path="/onboarding" element={<MobileOnboarding />} />;
        <Route
          path="/" 
          element={
            isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />;
          } ;
=======
import React from './react';
import { Routes, Route, Navigate } from './react-router-dom';
import { MobileThemeProvider } from './theme / MobileThemeProvider';
import { MobileOnboarding } from './pages / MobileOnboarding';
import { MobileHome } from './pages / MobileHome';
import { MobileBrowse } from './pages / MobileBrowse';
import { MobileProjects } from './pages / MobileProjects';
import { MobileMessages } from './pages / MobileMessages';
import { MobileResumeBuilder } from './pages / MobileResumeBuilder';
import { MobileJobPost } from './pages / MobileJobPost';
import { use_auth } from '@/hooks / use_auth';
export /**
 * MobileApp - Function description
 */
function MobileApp() {
  const { is_authenticated } = use_auth ();
;
  return (
    <MobileThemeProvider>;
      <Routes>;
        <Route path="/onboarding" element={<MobileOnboarding />} />;
        <Route;
          path="/";
          element={
            is_authenticated ? <MobileHome /> : <Navigate to="/onboarding" />;
          }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        />;
        <Route path="/browse" element={<MobileBrowse />} />;
        <Route path="/projects" element={<MobileProjects />} />;
        <Route path="/inbox" element={<MobileMessages />} />;
        <Route path="/resume" element={<MobileResumeBuilder />} />;




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        <Route path="/post - job" element={<MobileJobPost />} />;
        <Route path="/profile" element={<div > Profile page</div>} />;
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;
    </MobileThemeProvider>;
  );
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
