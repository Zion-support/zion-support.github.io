
<<<<<<< HEAD
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
import React from "react",
import { Routes, Route, Navigate } from "react-router-dom",
import { MobileThemeProvider } from "./theme/MobileThemeProvider",
import { MobileOnboarding } from "./pages/MobileOnboarding",
import { MobileHome } from "./pages/MobileHome",
import { MobileBrowse } from "./pages/MobileBrowse",
import { MobileProjects } from "./pages/MobileProjects",
import { MobileMessages } from "./pages/MobileMessages",
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",


import { MobileJobPost } from "./pages/MobileJobPost";
import { useAuth } from "@/hooks/useAuth";
export function MobileApp() {
  const { isAuthenticated } = useAuth();
import { MobileJobPost } from "./pages/MobileJobPost",
import { useAuth } from "@/hooks/useAuth",
export function MobileApp() {
  const { isAuthenticated } = useAuth(),
  
=======



>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======


=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
<<<<<<< HEAD
export function MobileApp() {;
  const { isAuthenticated } = useAuth();
  return (;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    <MobileThemeProvider>;
      <Routes>;
        <Route path="/onboarding" element={<MobileOnboarding />} />;
        <Route;
          path="/";
<<<<<<< HEAD
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
          element={;
            isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />;
          } ;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          element={
            is_authenticated ? <MobileHome /> : <Navigate to="/onboarding" />;
          }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        />;
        <Route path="/browse" element={<MobileBrowse />} />;
        <Route path="/projects" element={<MobileProjects />} />;
        <Route path="/inbox" element={<MobileMessages />} />;
        <Route path="/resume" element={<MobileResumeBuilder />} />;
<<<<<<< HEAD
<<<<<<< HEAD
    </MobileThemeProvider>);
}
        <Route path="/post-job" element={<MobileJobPost />} />;
        <Route path="/profile" element={<div>Profile page</div>} />;
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;
    </MobileThemeProvider>;
  );
}
;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
        <Route path="/post - job" element={<MobileJobPost />} />;
        <Route path="/profile" element={<div > Profile page</div>} />;
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;
    </MobileThemeProvider>);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
;
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
