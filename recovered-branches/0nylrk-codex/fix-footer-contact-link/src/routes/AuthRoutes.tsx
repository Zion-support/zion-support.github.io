
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";

const _AuthRoutes = () => {_return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={_<Login />} />
      <Route path="/signup" element={_<Signup />} />
      <Route path="/forgot-password" element={_<ForgotPassword />} />
      <Route path="/update-password" element={_<UpdatePassword />} />
      
      {_/* Onboarding Routes */}
      <Route 
        path="/onboarding" 
        element={_<ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>} 
      />
      <Route 
        path="/talent-onboarding" 
        element={_<ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>} 
      />
      <Route 
        path="/service-onboarding" 
        element={_<ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>} 
      />
    </Routes>
  );
};

export default AuthRoutes;
