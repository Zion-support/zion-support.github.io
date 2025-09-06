
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const AuthRoutes = () => {
=======
const AuthRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import Login from "@/pages/Login",
import Signup from "@/pages/Signup",
import ForgotPassword from "@/pages/ForgotPassword",
import UpdatePassword from "@/pages/UpdatePassword",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Onboarding from "@/pages/Onboarding",
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";

import TalentOnboarding from "@/pages/TalentOnboarding",
import ServiceOnboarding from "@/pages/ServiceOnboarding",
const AuthRoutes = () => {
  return (
    <Routes>
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/update-password" element={<UpdatePassword />} />
      {/* Onboarding Routes */}
      <Route
        path="/onboarding"
        element={
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />
      <Route
        path="/talent-onboarding"
        element={
          <ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>
        }
      />
      <Route
        path="/service-onboarding"
        element={
          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}
export default AuthRoutes;

},

export default AuthRoutes,
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



const AuthRoutes = () => {
const AuthRoutes = () => {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  return (
    <Routes>;
      {/* Auth Routes */}

<<<<<<< HEAD
=======
const AuthRoutes = () => {;
  return (

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
    <Routes>;
      {/* Auth Routes */}
const AuthRoutes = () => {;
  return (;
    <Routes>;
      {/* Auth Routes */}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      {/* Onboarding Routes */}
      <Route;
        path="/onboarding";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      <Route;
        path="/talent-onboarding";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
      <Route;
        path="/service-onboarding";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
<<<<<<< HEAD
  );
};


=======
=======
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

},


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default AuthRoutes;

=======
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
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
  );
},;
export default AuthRoutes;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
