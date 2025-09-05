
<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import Login from "@/pages/Login",
import Signup from "@/pages/Signup",
import ForgotPassword from "@/pages/ForgotPassword",
import UpdatePassword from "@/pages/UpdatePassword",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Onboarding from "@/pages/Onboarding",
import TalentOnboarding from "@/pages/TalentOnboarding",
import ServiceOnboarding from "@/pages/ServiceOnboarding",
=======
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const AuthRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path=&quot;/login&quot; element={<Login />} />
      <Route path=&quot;/signup&quot; element={<Signup />} />
      <Route path=&quot;/forgot-password&quot; element={<ForgotPassword />} />
      <Route path=&quot;/update-password&quot; element={<UpdatePassword />} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      {_/* Onboarding Routes */}
      <Route 
<<<<<<< HEAD
        path=&quot;/onboarding&quot; 
        element={
          <ProtectedRoute>
=======
        path="/onboarding" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <Onboarding />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/talent-onboarding&quot; 
        element={
          <ProtectedRoute>
=======
        path="/talent-onboarding" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <TalentOnboarding />
          </ProtectedRoute>} 
      />
      <Route 
<<<<<<< HEAD
        path=&quot;/service-onboarding&quot; 
        element={
          <ProtectedRoute>
=======
        path="/service-onboarding" 
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <ServiceOnboarding />
          </ProtectedRoute>} 
      />
    </Routes>
  )
},

export default AuthRoutes,
