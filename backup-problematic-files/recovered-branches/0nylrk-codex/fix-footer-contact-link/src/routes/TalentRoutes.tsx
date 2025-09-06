<<<<<<< HEAD
const TalentRoutes = () => {;
  return (
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Routes>;
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />;
      <Route path="/talents" element={<TalentsPage />} />;
      <Route path="/talent/:id" element={<TalentProfilePage />} />;
<<<<<<< HEAD
      <Route
        path="/saved-talents" 
        element={
=======
      <Route ;
        path="/saved-talents" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ProtectedRoute>;
            <CreateTalentProfile />;
          </ProtectedRoute>;
        } ;
      />;
      <Route path="/profile/:id" element={<ProfilePage />} />;
    </Routes>;
<<<<<<< HEAD
  );
};
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
export default TalentRoutes;
;
=======
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
