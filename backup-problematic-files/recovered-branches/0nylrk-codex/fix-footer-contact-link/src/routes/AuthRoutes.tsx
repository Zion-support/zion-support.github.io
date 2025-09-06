<<<<<<< HEAD
const AuthRoutes = () => {;
  return (
=======

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import Login from "@/pages/Login",;
import Signup from "@/pages/Signup",;
import ForgotPassword from "@/pages/ForgotPassword",;
import UpdatePassword from "@/pages/UpdatePassword",;
import { ProtectedRoute } from "@/components/ProtectedRoute",;
import Onboarding from "@/pages/Onboarding",;
import TalentOnboarding from "@/pages/TalentOnboarding",;
import ServiceOnboarding from "@/pages/ServiceOnboarding",;
;
const AuthRoutes = () => {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Routes>;
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/update-password" element={<UpdatePassword />} />;
<<<<<<< HEAD
      {/* Onboarding Routes */}
      <Route
        path="/onboarding" 
        element={
=======
      ;
      {/* Onboarding Routes */}
      <Route ;
        path="/onboarding" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route
        path="/talent-onboarding" 
        element={
=======
      <Route ;
        path="/talent-onboarding" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route
        path="/service-onboarding" 
        element={
=======
      <Route ;
        path="/service-onboarding" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
<<<<<<< HEAD
  );
};
export default AuthRoutes;
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import Login from "@/pages / Login";
import Signup from "@/pages / Signup";
import ForgotPassword from "@/pages / ForgotPassword";
import UpdatePassword from "@/pages / UpdatePassword";
import { ProtectedRoute } from '@/components / ProtectedRoute';
import Onboarding from "@/pages / Onboarding";
import TalentOnboarding from "@/pages / TalentOnboarding";
import ServiceOnboarding from "@/pages / ServiceOnboarding";
const AuthRoutes = () =>: any {
  return (
    <Routes>;
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot - password" element={<ForgotPassword />} />;
      <Route path="/update - password" element={<UpdatePassword />} />;
      {/* Onboarding Routes */}
      <Route;
        path="/onboarding";
        element={
          <ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/talent - onboarding";
        element={
          <ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/service - onboarding";
        element={
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        }
      />;
    </Routes>);
}
;
export default AuthRoutes;
;
=======
  ),;
},;
;
export default AuthRoutes,; const AuthRoutes = () => {
  return (<Routes> {
  /* Auth Routes */ 
}<Route path="/login" element= {
  <Login /> 
}/> <Route path="/signup" element= {
  <Signup /> 
}/> <Route path="/forgot-password" element= {
  <ForgotPassword /> 
}/> <Route path="/update-password" element= {
  <UpdatePassword /> 
}/> /* Onboarding Routes */ 
}<Route <Onboarding /> </ProtectedRoute> 
}/> <Route <TalentOnboarding /> </ProtectedRoute> 
}/> <Route <ServiceOnboarding /> </ProtectedRoute> 
}/> </Routes>) 
};
export default AuthRoutes;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
