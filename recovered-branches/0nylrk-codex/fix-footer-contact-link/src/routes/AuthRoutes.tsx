
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AuthRoutes.tsx

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import Login from "@/pages/Login",
import Signup from "@/pages/Signup",
import ForgotPassword from "@/pages/ForgotPassword",
import UpdatePassword from "@/pages/UpdatePassword",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Onboarding from "@/pages/Onboarding",
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";

import TalentOnboarding from "@/pages/TalentOnboarding",
import ServiceOnboarding from "@/pages/ServiceOnboarding",
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
}
export default AuthRoutes;

},

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const AuthRoutes = () => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const AuthRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Auth Routes */}

========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AuthRoutes.tsx
=======
const AuthRoutes = () => {;
  return (;
    <Routes>;
      {/* Auth Routes */}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/update-password" element={<UpdatePassword />} />;
<<<<<<< HEAD
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
=======
      {/* Onboarding Routes */}
      <Route;
        path="/onboarding";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <Route
        path="/talent-onboarding" 
        element={
=======
      <Route ;
        path="/talent-onboarding" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <Route;
        path="/talent-onboarding";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <Route
        path="/service-onboarding" 
        element={
=======
      <Route ;
        path="/service-onboarding" ;
        element={;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
      <Route;
        path="/service-onboarding";
        element={;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
    </Routes>;
<<<<<<< HEAD
<<<<<<< HEAD
  );
<<<<<<< HEAD
},;

export default AuthRoutes;

=======
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AuthRoutes.tsx


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AuthRoutes.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AuthRoutes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/AuthRoutes.tsx
=======
  );
},;
export default AuthRoutes;
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
