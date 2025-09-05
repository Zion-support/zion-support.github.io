import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import TalentDirectory from "../pages/TalentDirectory",
import TalentsPage from "../pages/TalentsPage",
import TalentProfilePage from "../pages/TalentProfilePage",
import SavedTalentsPage from "../pages/SavedTalentsPage",
import CreateTalentProfile from "../pages/CreateTalentProfile",
import ProfilePage from "../pages/ProfilePage",const TalentRoutes = () => {
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
        path=&quot;/create-talent-profile&quot; 
        element={
          <ProtectedRoute>            <CreateTalentProfile />
          </ProtectedRoute>} 
      />
      <Route path=&quot;/profile/:id&quot; element={<ProfilePage />} />    </Routes>
  )
},

export default TalentRoutes,