<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const TalentRoutes = () => {
const TalentRoutes = () => {;

  return (
    <Routes>;
{/* Talent Routes */}

      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route
        path="/saved-talents" 
        element={
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../components/ProtectedRoute";
=======
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import TalentProfilePage from "../pages/TalentProfilePage";
import SavedTalentsPage from "../pages/SavedTalentsPage";

import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import TalentDirectory from "../pages/TalentDirectory",
import TalentsPage from "../pages/TalentsPage",
import TalentProfilePage from "../pages/TalentProfilePage",
import SavedTalentsPage from "../pages/SavedTalentsPage",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
const TalentRoutes = () => {
const TalentRoutes = () => {;
  return (
    <Routes>;
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />
      <Route path="/talents" element={<TalentsPage />} />
=======
      {/* Talent Routes */}"
      <Route path="/talent" element={<TalentDirectory />} />"
      <Route path="/talents" element={<TalentsPage />} />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <Route path="/talent/:id" element={<TalentProfilePage />} />
      <Route"
        path="/saved-talents"
        element={}
          <ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/create-talent-profile"
        element={}
          <ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>
        }
      />"
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const TalentRoutes = () => {;
  return (
    <Routes>;
      {/* Talent Routes */}

const TalentRoutes = () => {;
  return (
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "../components/ProtectedRoute",;
import TalentDirectory from "../pages/TalentDirectory",;
import TalentsPage from "../pages/TalentsPage",;
import TalentProfilePage from "../pages/TalentProfilePage",;
import SavedTalentsPage from "../pages/SavedTalentsPage",;
import CreateTalentProfile from "../pages/CreateTalentProfile",;
import ProfilePage from "../pages/ProfilePage",;
;
const TalentRoutes = () => {;
  return (;
    <Routes>;
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route ;
        path="/saved-talents" ;
        element={;
const TalentRoutes = () => {;
  return (;
    <Routes>;
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route;
        path="/saved-talents";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <SavedTalentsPage />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
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
},;

export default TalentRoutes;
export default TalentRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default TalentRoutes;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const TalentRoutes = () => {
const TalentRoutes = () => {;
  return (
    <Routes>;
      {/* Talent Routes */}
=======
  );
};

};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '../components / ProtectedRoute';
import TalentDirectory from "../pages / TalentDirectory";
import TalentsPage from "../pages / TalentsPage";
import TalentProfilePage from "../pages / TalentProfilePage";
import SavedTalentsPage from "../pages / SavedTalentsPage";
import CreateTalentProfile from "../pages / CreateTalentProfile";
=======
};

import { Route, Routes } from './react-router-dom';'
import { ProtectedRoute } from '../components / ProtectedRoute';"
import TalentDirectory from "../pages / TalentDirectory";"
import TalentsPage from "../pages / TalentsPage";"
import TalentProfilePage from "../pages / TalentProfilePage";"
import SavedTalentsPage from "../pages / SavedTalentsPage";"
import CreateTalentProfile from "../pages / CreateTalentProfile";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import ProfilePage from "../pages / ProfilePage";
const TalentRoutes = () =>: any {}
  return (
    <Routes>;
      {/* Talent Routes */}"
      <Route path="/talent" element={<TalentDirectory />} />;"
      <Route path="/talents" element={<TalentsPage />} />;"
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route;"
        path="/saved - talents";
        element={}
          <ProtectedRoute>;
            <SavedTalentsPage />;
          </ProtectedRoute>;
        } ;
      />;
      <Route"
        path="/create-talent-profile" 
        element={}
          <ProtectedRoute>;
            <CreateTalentProfile />;
          </ProtectedRoute>;
        }
      />;"
      <Route path="/profile/:id" element={<ProfilePage />} />;
    </Routes>);
}
;
export default TalentRoutes;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  ),;
},;
;export default TalentRoutes,
 const TalentRoutes = () => {
  return (<Routes> {
  /* Talent Routes */ 
}<Route path="/talent" element= {
  <TalentDirectory /> 
}/> <Route path="/talents" element= {
  <TalentsPage /> 
}/> <Route path="/talent/:id" element= {
  <TalentProfilePage /> 
}/> <Route path="/saved-talents" element= {
  <ProtectedRoute> 
}/> <Route <CreateTalentProfile /> </ProtectedRoute> 
}/> </Routes>) 
};
export default TalentRoutes;
  );
},;
export default TalentRoutes;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
