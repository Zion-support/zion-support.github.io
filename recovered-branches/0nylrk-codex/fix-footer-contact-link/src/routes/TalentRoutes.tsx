<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '../components/ProtectedRoute';
import TalentDirectory from '../pages/TalentDirectory';
import TalentsPage from '../pages/TalentsPage';
import TalentProfilePage from '../pages/TalentProfilePage';
import SavedTalentsPage from '../pages/SavedTalentsPage';
import CreateTalentProfile from '../pages/CreateTalentProfile';
import ProfilePage from '../pages/ProfilePage';

const TalentRoutes = () => {
  return (
    <Routes>
      {/* Talent Routes */}
      <Route path='/talent' element={<TalentDirectory />} />
      <Route path='/talents' element={<TalentsPage />} />
      <Route path='/talent/:id' element={<TalentProfilePage />} />
      <Route
        path='/saved-talents'
        element={
          <ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/create-talent-profile'
        element={
          <ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>
        }
      />
      <Route path='/profile/:id' element={<ProfilePage />} />
    </Routes>
  );
};

=======
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
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default TalentRoutes;
