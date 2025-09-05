<<<<<<< HEAD
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import TalentDirectory from "../pages/TalentDirectory",
import TalentsPage from "../pages/TalentsPage",
import TalentProfilePage from "../pages/TalentProfilePage",
import SavedTalentsPage from "../pages/SavedTalentsPage",
import CreateTalentProfile from "../pages/CreateTalentProfile",
import ProfilePage from "../pages/ProfilePage",
=======
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;../components/ProtectedRoute&quot;;
import TalentDirectory from &quot;../pages/TalentDirectory&quot;;
import TalentsPage from &quot;../pages/TalentsPage&quot;;
import TalentProfilePage from &quot;../pages/TalentProfilePage&quot;;
import SavedTalentsPage from &quot;../pages/SavedTalentsPage&quot;;
import CreateTalentProfile from &quot;../pages/CreateTalentProfile&quot;;
import ProfilePage from &quot;../pages/ProfilePage&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
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
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <SavedTalentsPage />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/create-talent-profile&quot; 
        element={
          <ProtectedRoute>
=======
        path="/create-talent-profile" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CreateTalentProfile />
          </ProtectedRoute>} 
      />
<<<<<<< HEAD
      <Route path=&quot;/profile/:id&quot; element={<ProfilePage />} />
=======
      <Route path="/profile/:id" element={_<ProfilePage />} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Routes>
  )
},

export default TalentRoutes,