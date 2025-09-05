import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";

const _TalentRoutes = () => {_return (
    <Routes>
      {/* Talent Routes */}
      <Route path="/talent" element={_<TalentDirectory />} />
      <Route path="/talents" element={_<TalentsPage />} />
      <Route path="/talent/:id" element={_<TalentProfilePage />} />
      <Route 
        path="/saved-talents" 
        element={_<ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>} 
      />
      <Route 
        path="/create-talent-profile" 
        element={_<ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>} 
      />
      <Route path="/profile/:id" element={_<ProfilePage />} />
    </Routes>
  );
};

export default TalentRoutes;