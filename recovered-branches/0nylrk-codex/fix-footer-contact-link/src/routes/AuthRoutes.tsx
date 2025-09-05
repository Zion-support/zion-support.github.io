
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import Login from "@/pages/Login",
import Signup from "@/pages/Signup",
import ForgotPassword from "@/pages/ForgotPassword",
import UpdatePassword from "@/pages/UpdatePassword",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Onboarding from "@/pages/Onboarding",
import TalentOnboarding from "@/pages/TalentOnboarding",
import ServiceOnboarding from "@/pages/ServiceOnboarding",const AuthRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path=&quot;/login&quot; element={<Login />} />
      <Route path=&quot;/signup&quot; element={<Signup />} />
      <Route path=&quot;/forgot-password&quot; element={<ForgotPassword />} />
      <Route path=&quot;/update-password&quot; element={<UpdatePassword />} />
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
        path=&quot;/onboarding&quot; 
        element={
          <ProtectedRoute>            <Onboarding />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/talent-onboarding&quot; 
        element={
          <ProtectedRoute>            <TalentOnboarding />
          </ProtectedRoute>} 
      />
      <Route 
        path=&quot;/service-onboarding&quot; 
        element={
          <ProtectedRoute>            <ServiceOnboarding />
          </ProtectedRoute>} 
      />
    </Routes>
  )
},

export default AuthRoutes,
