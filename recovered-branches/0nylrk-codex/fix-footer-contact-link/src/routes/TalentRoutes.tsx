<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../components/ProtectedRoute";
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import TalentDirectory from "../pages/TalentDirectory",
import TalentsPage from "../pages/TalentsPage",
import TalentProfilePage from "../pages/TalentProfilePage",
import SavedTalentsPage from "../pages/SavedTalentsPage",
<<<<<<< HEAD
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";

=======
import CreateTalentProfile from "../pages/CreateTalentProfile",
import ProfilePage from "../pages/ProfilePage",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const TalentRoutes = () => {
=======
<<<<<<< HEAD
=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default TalentRoutes,
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "../components/ProtectedRoute",;
import TalentDirectory from "../pages/TalentDirectory",;
import TalentsPage from "../pages/TalentsPage",;
import TalentProfilePage from "../pages/TalentProfilePage",;
import SavedTalentsPage from "../pages/SavedTalentsPage",;
import CreateTalentProfile from "../pages/CreateTalentProfile",;
import ProfilePage from "../pages/ProfilePage",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
=======
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
export default TalentRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
