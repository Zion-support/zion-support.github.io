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
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import TalentDirectory from "../pages/TalentDirectory",
import TalentsPage from "../pages/TalentsPage",
import TalentProfilePage from "../pages/TalentProfilePage",
import SavedTalentsPage from "../pages/SavedTalentsPage",
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
<<<<<<< HEAD
const TalentRoutes = $2;
export default TalentRoutes,
=======

import CreateTalentProfile from "../pages/CreateTalentProfile",
import ProfilePage from "../pages/ProfilePage",
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
const TalentRoutes = () => {;
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
const TalentRoutes = () => {

const TalentRoutes = () => {;

  return (
    <Routes>;

import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../components/ProtectedRoute";

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

import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
const TalentRoutes = () => {
const TalentRoutes = () => {;
  return (
    <Routes>;
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />
      <Route path="/talents" element={<TalentsPage />} />

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

export default TalentRoutes;

const TalentRoutes = () => {
const TalentRoutes = () => {;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Routes>;
      {/* Talent Routes */}

<<<<<<< HEAD
=======
<<<<<<< HEAD
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
=======
      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route
        path="/saved-talents" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <SavedTalentsPage />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route ;
        path="/create-talent-profile" ;
        element={;
      <Route;
        path="/create-talent-profile";
        element={;
=======
      <Route
        path="/create-talent-profile" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <CreateTalentProfile />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/profile/:id" element={<ProfilePage />} />;
    </Routes>;
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
};
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '../components / ProtectedRoute';
import TalentDirectory from "../pages / TalentDirectory";
import TalentsPage from "../pages / TalentsPage";
import TalentProfilePage from "../pages / TalentProfilePage";
import SavedTalentsPage from "../pages / SavedTalentsPage";
import CreateTalentProfile from "../pages / CreateTalentProfile";

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
<<<<<<< HEAD
export default TalentRoutes;

=======

},


export default TalentRoutes;
;
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
export default TalentRoutes;
=======
export default TalentRoutes;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
