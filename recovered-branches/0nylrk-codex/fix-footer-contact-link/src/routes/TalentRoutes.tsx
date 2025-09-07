import { Route, Routes } from "react-router-dom";""
import { ProtectedRoute } from "../components/ProtectedRoute";""
import TalentDirectory from "../pages/TalentDirectory";""
import TalentsPage from "../pages/TalentsPage";""
import TalentProfilePage from "../pages/TalentProfilePage";""
import SavedTalentsPage from "../pages/SavedTalentsPage";""
import CreateTalentProfile from "../pages/CreateTalentProfile";""
import ProfilePage from "../pages/ProfilePage";"
const TalentRoutes = () => {
const TalentRoutes = () => {;
  return (
    <Routes>;
</Routes>"
      <Route path="/talent" element={<TalentDirectory />} />"
</Route>"
      <Route path="/talents" element={<TalentsPage />} />"
</Route>"
      <Route path="/talent/:id" element={<TalentProfilePage />} />"
</Route>
      <Route;"
        path="/saved-talents""
        element={
          <ProtectedRoute>
</Route>
            <SavedTalentsPage />
</SavedTalentsPage>
          </ProtectedRoute>
      <Route;"
        path="/create-talent-profile""
        element={
          <ProtectedRoute>
</Route>
            <CreateTalentProfile />
</CreateTalentProfile>
          </ProtectedRoute>"
      <Route path="/profile/:id" element={<ProfilePage />} />"
</Route>
    </Routes>
    <Routes>;
</Routes>"
      <Route path="/talent" element={<TalentDirectory />} />;"
</Route>"
      <Route path="/talents" element={<TalentsPage />} />;"
</Route>"
      <Route path="/talent/:id" element={<TalentProfilePage />} />;"
</Route>
      <Route;"
        path="/saved - talents";"
        element={
          <ProtectedRoute>;
</Route>
            <SavedTalentsPage />;
</SavedTalentsPage>
          </ProtectedRoute>;
      <Route;"
        path="/create-talent-profile""
        element={
          <ProtectedRoute>;
</Route>
            <CreateTalentProfile />;
</CreateTalentProfile>
          </ProtectedRoute>;"
      <Route path="/profile/:id" element={<ProfilePage />} />;"
</Route>)
    </Routes>);
  return (<Routes> {
</Routes>"
}<Route path="/talent" element= {"
  <TalentDirectory /> 
</Route>"
}/> <Route path="/talents" element= {"
  <TalentsPage /> 
</Route>"
}/> <Route path="/talent/:id" element= {"
  <TalentProfilePage /> 
</Route>"
}/> <Route path="/saved-talents" element= {"
  <ProtectedRoute> 
</Route>
}/> <Route <CreateTalentProfile /> </ProtectedRoute> 
</Route>)
}/> </Routes>) "