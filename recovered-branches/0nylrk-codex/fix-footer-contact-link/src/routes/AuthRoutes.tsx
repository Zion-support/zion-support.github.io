<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react";"
import { Route, Routes } from "react-router-dom";"
import Login from "@/pages/Login";"
import Signup from "@/pages/Signup";"
import ForgotPassword from "@/pages/ForgotPassword";"
import UpdatePassword from "@/pages/UpdatePassword";"
import { ProtectedRoute } from "@/components/ProtectedRoute";"
import Onboarding from "@/pages/Onboarding";"
import TalentOnboarding from "@/pages/TalentOnboarding";"
import ServiceOnboarding from "@/pages/ServiceOnboarding";"
const AuthRoutes = () => {import {Fragment} from "react";"
import {Route, Routes} from "react-router-dom";"
import {ProtectedRoute} from "@/components/ProtectedRoute";"
=======
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

"
>>>>>>> origin/chore/fix-lint-and-merge
import { Fragment } from "react","
import { Route, Routes } from "react-router-dom","
import Login from "@/pages/Login","
import Signup from "@/pages/Signup","
import ForgotPassword from "@/pages/ForgotPassword","
import UpdatePassword from "@/pages/UpdatePassword","
import { ProtectedRoute } from "@/components/ProtectedRoute","
<<<<<<< HEAD
import Onboarding from "@/pages/Onboarding","
=======
import Onboarding from "@/pages/Onboarding",";
import TalentOnboarding from "@/pages/TalentOnboarding";"
import ServiceOnboarding from "@/pages/ServiceOnboarding";
"
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
export default AuthRoutes,
import Login from "Login";"
import Signup from "Signup";"
import ForgotPassword from "ForgotPassword";"
import UpdatePassword from "UpdatePassword";"
import { ProtectedRoute } from "@/components/ProtectedRoute",;"
import Onboarding from "Onboarding";"
import TalentOnboarding from "TalentOnboarding";"
import ServiceOnboarding from "ServiceOnboarding";"
}
=======

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

const AuthRoutes = () => {

>>>>>>> origin/chore/fix-lint-and-merge
const AuthRoutes = () => {;

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

=======

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



const AuthRoutes = () => {
const AuthRoutes = () => {;
  return (
    <Routes>;
      {/* Auth Routes */}

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/update-password" element={<UpdatePassword />} />;
<<<<<<< HEAD
      ;
      {/* Onboarding Routes */}
      <Route ;
        path="/onboarding" ;
        element={;
      {/* Onboarding Routes */}
      <Route;
        path="/onboarding";
        element={;
=======

      {/* Onboarding Routes */}
      <Route
        path="/onboarding" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route ;
        path="/talent-onboarding" ;
        element={;
      <Route;
        path="/talent-onboarding";
        element={;
=======
      <Route
        path="/talent-onboarding" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD
      <Route ;
        path="/service-onboarding" ;
        element={;
      <Route;
        path="/service-onboarding";
        element={;
=======
      <Route
        path="/service-onboarding" 
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          <ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        } ;
      />;
<<<<<<< HEAD

export default AuthRoutes;

          <ProtectedRoute>
            <ServiceOnboarding />
          </ProtectedRoute>
        }
      />
    </Routes>

};

};
=======
    </Routes>;
<<<<<<< HEAD
=======
  );
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
};

},

<<<<<<< HEAD
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Routes>;
      {/* Auth Routes */}

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
<<<<<<< HEAD
  );
},;
export default AuthRoutes;
=======
;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
