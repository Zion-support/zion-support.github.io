<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import ForgotPassword from "@/pages/ForgotPassword";
import UpdatePassword from "@/pages/UpdatePassword";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import Onboarding from "@/pages/Onboarding";
import TalentOnboarding from "@/pages/TalentOnboarding";
import ServiceOnboarding from "@/pages/ServiceOnboarding";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
const AuthRoutes = () => {
=======
const AuthRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {Fragment} from "react";
=======
const AuthRoutes = () => {import {Fragment} from "react";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const AuthRoutes = () => {import {Fragment} from "react";
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const AuthRoutes = () => {
const AuthRoutes = () => {;
import {Fragment} from "react";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
=======
import { Fragment } from "react";"
import { Route, Routes } from "react-router-dom";"
import Login from "@/pages/Login";"
import Signup from "@/pages/Signup";"
import ForgotPassword from "@/pages/ForgotPassword";"
import UpdatePassword from "@/pages/UpdatePassword";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import Onboarding from "@/pages/Onboarding";"
import TalentOnboarding from "@/pages/TalentOnboarding";"
import ServiceOnboarding from "@/pages/ServiceOnboarding";
const AuthRoutes = () => {}
const AuthRoutes = () => {;

"
import {Fragment} from "react";"
import {Route, Routes} from "react-router-dom";"
import Login from "@/pages/Login";"
import Signup from "@/pages/Signup";"
import ForgotPassword from "@/pages/ForgotPassword";"
import UpdatePassword from "@/pages/UpdatePassword";"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
import Onboarding from "@/pages/Onboarding";"
import TalentOnboarding from "@/pages/TalentOnboarding";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import ServiceOnboarding from "@/pages/ServiceOnboarding";

"
import { Fragment } from "react","
import { Route, Routes } from "react-router-dom","
import Login from "@/pages/Login","
import Signup from "@/pages/Signup","
import ForgotPassword from "@/pages/ForgotPassword","
import UpdatePassword from "@/pages/UpdatePassword","
import { ProtectedRoute } from "@/components/ProtectedRoute","
import Onboarding from "@/pages/Onboarding",";
import TalentOnboarding from "@/pages/TalentOnboarding";"
import ServiceOnboarding from "@/pages/ServiceOnboarding";
"
import TalentOnboarding from "@/pages/TalentOnboarding","
import ServiceOnboarding from "@/pages/ServiceOnboarding",
const AuthRoutes = () => {}
  return (
    <Routes>
      {/* Auth Routes */}"
      <Route path="/login" element={<Login />} />"
      <Route path="/signup" element={<Signup />} />"
      <Route path="/forgot-password" element={<ForgotPassword />} />"
      <Route path="/update-password" element={<UpdatePassword />} />
      {/* Onboarding Routes */}
      <Route"
        path="/onboarding"
        element={}
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/talent-onboarding"
        element={}
          <ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/service-onboarding"
        element={}
          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
};
export default AuthRoutes;

},

export default AuthRoutes,";
import { Fragment } from "react",;"
import { Route, Routes } from "react-router-dom",;"
import Login from "@/pages/Login",;"
import Signup from "@/pages/Signup",;"
import ForgotPassword from "@/pages/ForgotPassword",;"
import UpdatePassword from "@/pages/UpdatePassword",;"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import Onboarding from "@/pages/Onboarding",;"
import TalentOnboarding from "@/pages/TalentOnboarding",;"
import ServiceOnboarding from "@/pages/ServiceOnboarding",;
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
const AuthRoutes = () => {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
const AuthRoutes = () => {;
<<<<<<< HEAD
=======
const AuthRoutes = () => {}
const AuthRoutes = () => {;

  return (
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
  return (
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    <Routes>;
      {/* Auth Routes */}"
      <Route path="/login" element={<Login />} />"
      <Route path="/signup" element={<Signup />} />"
      <Route path="/forgot-password" element={<ForgotPassword />} />"
      <Route path="/update-password" element={<UpdatePassword />} />

      {/* Onboarding Routes */}
      <Route"
        path="/onboarding"
        element={}
          <ProtectedRoute>
            <Onboarding />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/talent-onboarding"
        element={}
          <ProtectedRoute>
            <TalentOnboarding />
          </ProtectedRoute>
        }
      />
      <Route"
        path="/service-onboarding"
<<<<<<< HEAD
        element={
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
      <Route;
        path="/service-onboarding";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      <Route
        path="/service-onboarding" 
        element={
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
<<<<<<< HEAD
    </Routes>;
<<<<<<< HEAD
  );
},;

export default AuthRoutes;
export default AuthRoutes;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
},;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default AuthRoutes;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        element={}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        }
      />
    </Routes>
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
<<<<<<< HEAD
=======
    </Routes>
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
    </Routes>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};


};
};



},

<<<<<<< HEAD
=======
};




};


};




},



export default AuthRoutes;


import { Fragment } from './react';'
import { Route, Routes } from './react-router-dom';"
import Login from "@/pages / Login";"
import Signup from "@/pages / Signup";"
import ForgotPassword from "@/pages / ForgotPassword";"
import UpdatePassword from "@/pages / UpdatePassword";'
import { ProtectedRoute } from '@/components / ProtectedRoute';"
import Onboarding from "@/pages / Onboarding";"
import TalentOnboarding from "@/pages / TalentOnboarding";"
import ServiceOnboarding from "@/pages / ServiceOnboarding";
const AuthRoutes = () =>: any {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  return (
    <Routes>;
      {/* Auth Routes */}
<<<<<<< HEAD
<<<<<<< HEAD
export default AuthRoutes;
<<<<<<< HEAD
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======

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
export default AuthRoutes;
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default AuthRoutes;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
export default AuthRoutes;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
