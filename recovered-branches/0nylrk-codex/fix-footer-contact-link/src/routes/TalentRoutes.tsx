<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const TalentRoutes = () => {
=======
=======
import { Route, Routes } from "react-router-dom";"
import { ProtectedRoute } from "../components/ProtectedRoute";"
import TalentDirectory from "../pages/TalentDirectory";"
import TalentsPage from "../pages/TalentsPage";"
import TalentProfilePage from "../pages/TalentProfilePage";"
import SavedTalentsPage from "../pages/SavedTalentsPage";"
import CreateTalentProfile from "../pages/CreateTalentProfile";"
import ProfilePage from "../pages/ProfilePage";
const TalentRoutes = () => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const TalentRoutes = () => {;

  return (
    <Routes>;
<<<<<<< HEAD
      {/* Talent Routes */}

      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
      <Route
        path="/saved-talents" 
        element={
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




<<<<<<< HEAD
const TalentRoutes = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const TalentRoutes = () => {;
  return (
    <Routes>;
      {/* Talent Routes */}

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
=======
      <Route ;
        path="/create-talent-profile" ;
        element={;
      <Route;
        path="/create-talent-profile";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <CreateTalentProfile />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/profile/:id" element={<ProfilePage />} />;
    </Routes>;
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
=======
<<<<<<< HEAD
  );
=======
  )
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
};

=======
  )
};

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
<<<<<<< HEAD
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
