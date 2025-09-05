
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import Login from &quot;@/pages/Login&quot;;
import Signup from &quot;@/pages/Signup&quot;;
import ForgotPassword from &quot;@/pages/ForgotPassword&quot;;
import UpdatePassword from &quot;@/pages/UpdatePassword&quot;;
import { ProtectedRoute } from &quot;@/components/ProtectedRoute&quot;;
import Onboarding from &quot;@/pages/Onboarding&quot;;
import TalentOnboarding from &quot;@/pages/TalentOnboarding&quot;;
import ServiceOnboarding from &quot;@/pages/ServiceOnboarding&quot;;

const AuthRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path=&quot;/login&quot; element={<Login />} />
      <Route path=&quot;/signup&quot; element={<Signup />} />
      <Route path=&quot;/forgot-password&quot; element={<ForgotPassword />} />
      <Route path=&quot;/update-password&quot; element={<UpdatePassword />} />
      
      {/* Onboarding Routes */}
      <Route 
        path=&quot;/onboarding&quot; 
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/talent-onboarding&quot; 
        element={
          <ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>
        } 
      />
      <Route 
        path=&quot;/service-onboarding&quot; 
        element={
          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        } 
      />
    </Routes>
  );
};

export default AuthRoutes;
