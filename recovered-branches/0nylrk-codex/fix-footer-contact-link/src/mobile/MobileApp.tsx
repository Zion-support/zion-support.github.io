<<<<<<< HEAD
=======
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { MobileThemeProvider } from "./theme/MobileThemeProvider";
import { MobileOnboarding } from "./pages/MobileOnboarding";
import { MobileHome } from "./pages/MobileHome";
import { MobileBrowse } from "./pages/MobileBrowse";
import { MobileProjects } from "./pages/MobileProjects";
import { MobileMessages } from "./pages/MobileMessages";
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder";
import { MobileJobPost } from "./pages/MobileJobPost";

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
import React from "react",
import { Routes, Route, Navigate } from "react-router-dom",
import { MobileThemeProvider } from "./theme/MobileThemeProvider",
import { MobileOnboarding } from "./pages/MobileOnboarding",
import { MobileHome } from "./pages/MobileHome",
import { MobileBrowse } from "./pages/MobileBrowse",
import { MobileProjects } from "./pages/MobileProjects",
import { MobileMessages } from "./pages/MobileMessages",
<<<<<<< HEAD
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",
import { MobileJobPost } from "./pages/MobileJobPost";
import { useAuth } from "@/hooks/useAuth";
export function MobileApp() {
  const { isAuthenticated } = useAuth($2);
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
=======
<<<<<<< HEAD
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",import { MobileJobPost } from "./pages/MobileJobPost";
=======
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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

import { useAuth } from "@/hooks/useAuth";
export function MobileApp() {
  const { isAuthenticated } = useAuth();

<<<<<<< HEAD
import { useAuth } from "@/hooks/useAuth";
export function MobileApp() {};
  const { isAuthenticated } = useAuth();

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <MobileThemeProvider>
      <Routes>"
        <Route path="/onboarding" element={<MobileOnboarding />} />
        <Route"
          path="/"
          element={"
            isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />
          }
        />"
        <Route path="/browse" element={<MobileBrowse />} />"
        <Route path="/projects" element={<MobileProjects />} />"
        <Route path="/inbox" element={<MobileMessages />} />"
        <Route path="/resume" element={<MobileResumeBuilder />} />"
        <Route path="/post-job" element={<MobileJobPost />} />"
        <Route path="/profile" element={<div>Profile page</div>} />"
>>>>>>> merged-prs-20250907-203621
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </MobileThemeProvider>

  )
<<<<<<< HEAD
}
}
;
=======
<<<<<<< HEAD
import React from "react";"
import {Routes, Route, Navigate} from "react-router-dom";"
import {MobileThemeProvider} from "./theme/MobileThemeProvider";"
import {MobileOnboarding} from "./pages/MobileOnboarding";"
import {MobileHome} from "./pages/MobileHome";"
import {MobileBrowse} from "./pages/MobileBrowse";"
import {MobileProjects} from "./pages/MobileProjects";"
import {MobileMessages} from "./pages/MobileMessages";"
import {MobileResumeBuilder} from "./pages/MobileResumeBuilder";"
import {MobileJobPost} from "./pages/MobileJobPost";"
import {useAuth} from "@/hooks/useAuth";"
import { Routes, Route, Navigate } from "react-router-dom";"
import { MobileThemeProvider } from "./theme/MobileThemeProvider",;"
import { MobileOnboarding } from "./pages/MobileOnboarding",;"
import { MobileHome } from "./pages/MobileHome",;"
import { MobileBrowse } from "./pages/MobileBrowse",;"
import { MobileProjects } from "./pages/MobileProjects",;"
import { MobileMessages } from "./pages/MobileMessages",;"
import { MobileResumeBuilder } from "./pages/MobileResumeBuilder",;"
import { MobileJobPost } from "./pages/MobileJobPost",;"
import { useAuth } from "@/hooks/useAuth",;"
=======

<<<<<<< HEAD

}
=======
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

<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
export function MobileApp() {;
  const { isAuthenticated } = useAuth();
  return (;
=======

;
<<<<<<< HEAD

>>>>>>> origin/chore/fix-lint-and-merge
=======
  return (
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    <MobileThemeProvider>;
      <Routes>;
        <Route path="/onboarding" element={<MobileOnboarding />} />;
        <Route;
          path="/";
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD

=======
=======
          element={
            is_authenticated ? <MobileHome /> : <Navigate to="/onboarding" />;
          }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        />;
        <Route path="/browse" element={<MobileBrowse />} />;
        <Route path="/projects" element={<MobileProjects />} />;
        <Route path="/inbox" element={<MobileMessages />} />;
<<<<<<< HEAD
=======
        <Route path="/resume" element={<MobileResumeBuilder />} />;
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

"
        <Route path="/post - job" element={<MobileJobPost />} />;"
        <Route path="/profile" element={<div > Profile page</div>} />;"
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;

  );
}
        <Route path="/post - job" element={<MobileJobPost />} />;
        <Route path="/profile" element={<div > Profile page</div>} />;
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;
    </MobileThemeProvider>);
}
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
;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
