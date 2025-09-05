
import React from &quot;react&quot;;
import { Routes, Route, Navigate } from &quot;react-router-dom&quot;;
import { MobileThemeProvider } from &quot;./theme/MobileThemeProvider&quot;;
import { MobileOnboarding } from &quot;./pages/MobileOnboarding&quot;;
import { MobileHome } from &quot;./pages/MobileHome&quot;;
import { MobileBrowse } from &quot;./pages/MobileBrowse&quot;;
import { MobileProjects } from &quot;./pages/MobileProjects&quot;;
import { MobileMessages } from &quot;./pages/MobileMessages&quot;;
import { MobileResumeBuilder } from &quot;./pages/MobileResumeBuilder&quot;;
import { MobileJobPost } from &quot;./pages/MobileJobPost&quot;;
import { useAuth } from &quot;@/hooks/useAuth&quot;;

export function MobileApp() {
  const { isAuthenticated } = useAuth();
  
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
        <Route path=&quot;*&quot; element={<Navigate to=&quot;/&quot; replace />} />
      </Routes>
    </MobileThemeProvider>
  );
}
