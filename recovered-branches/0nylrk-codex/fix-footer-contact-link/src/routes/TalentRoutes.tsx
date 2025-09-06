

<<<<<<< HEAD
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import TalentDirectory from "../pages/TalentDirectory",
import TalentsPage from "../pages/TalentsPage",
import TalentProfilePage from "../pages/TalentProfilePage",
import SavedTalentsPage from "../pages/SavedTalentsPage",
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";

import CreateTalentProfile from "../pages/CreateTalentProfile",
import ProfilePage from "../pages/ProfilePage",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
const TalentRoutes = () => {
  return (
    <Routes>
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />
      <Route path="/talents" element={<TalentsPage />} />
      <Route path="/talent/:id" element={<TalentProfilePage />} />
      <Route
        path="/saved-talents"
        element={
          <ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/create-talent-profile"
        element={
          <ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>
        }
      />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  )
}
export default TalentRoutes;

},



export default TalentRoutes,
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "../components/ProtectedRoute",;
import TalentDirectory from "../pages/TalentDirectory",;
import TalentsPage from "../pages/TalentsPage",;
import TalentProfilePage from "../pages/TalentProfilePage",;
import SavedTalentsPage from "../pages/SavedTalentsPage",;
import CreateTalentProfile from "../pages/CreateTalentProfile",;
import ProfilePage from "../pages/ProfilePage",;

const TalentRoutes = () => {

=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const TalentRoutes = () => {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const TalentRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Talent Routes */}

      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route
        path="/saved-talents" 
        element={
          <ProtectedRoute>;
            <SavedTalentsPage />;
          </ProtectedRoute>;
        } ;
      />;
      <Route
        path="/create-talent-profile" 
        element={
          <ProtectedRoute>;
            <CreateTalentProfile />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/profile/:id" element={<ProfilePage />} />;
    </Routes>;
  );
<<<<<<< HEAD





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
};


=======
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '../components / ProtectedRoute';
import TalentDirectory from "../pages / TalentDirectory";
import TalentsPage from "../pages / TalentsPage";
import TalentProfilePage from "../pages / TalentProfilePage";
import SavedTalentsPage from "../pages / SavedTalentsPage";
import CreateTalentProfile from "../pages / CreateTalentProfile";
import ProfilePage from "../pages / ProfilePage";
const TalentRoutes = () =>: any {
  return (
    <Routes>;
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route;
        path="/saved - talents";
        element={
          <ProtectedRoute>;
            <SavedTalentsPage />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/create - talent - profile";
        element={
          <ProtectedRoute>;
            <CreateTalentProfile />;
          </ProtectedRoute>;
        }
      />;
      <Route path="/profile/:id" element={<ProfilePage />} />;
    </Routes>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default TalentRoutes;
