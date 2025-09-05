import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;../components/ProtectedRoute&quot;;
import TalentDirectory from &quot;../pages/TalentDirectory&quot;;
import TalentsPage from &quot;../pages/TalentsPage&quot;;
import TalentProfilePage from &quot;../pages/TalentProfilePage&quot;;
import SavedTalentsPage from &quot;../pages/SavedTalentsPage&quot;;
import CreateTalentProfile from &quot;../pages/CreateTalentProfile&quot;;
import ProfilePage from &quot;../pages/ProfilePage&quot;;

const TalentRoutes = () => {
  return (
    <Routes>
      {/* Talent Routes */}
      <Route path=&quot;/talent&quot; element={<TalentDirectory />} />
      <Route path=&quot;/talents&quot; element={<TalentsPage />} />
      <Route path=&quot;/talent/:id&quot; element={<TalentProfilePage />} />
      <Route 
        path=&quot;/saved-talents&quot; 
        element={
          <ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/create-talent-profile&quot; 
        element={
          <ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>
        } 
      />
      <Route path=&quot;/profile/:id&quot; element={<ProfilePage />} />
    </Routes>
  );
};

export default TalentRoutes;