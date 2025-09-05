
import React from "react";

export function MobileApp() {_const { isAuthenticated} = useAuth();
  
  return (
    <MobileThemeProvider>
      <Routes>
        <Route path="/onboarding" element={_<MobileOnboarding />} />
        <Route 
          path="/" 
          element={_isAuthenticated ? <MobileHome /> : <Navigate to="/onboarding" />} 
        />
        <Route path="/browse" element={_<MobileBrowse />} />
        <Route path="/projects" element={_<MobileProjects />} />
        <Route path="/inbox" element={_<MobileMessages />} />
        <Route path="/resume" element={_<MobileResumeBuilder />} />
        <Route path="/post-job" element={_<MobileJobPost />} />
        <Route path="/profile" element={_<div>Profile page</div>} />
        <Route path="*" element={_<Navigate to="/" replace />} />
      </Routes>
    </MobileThemeProvider>
  );
}
