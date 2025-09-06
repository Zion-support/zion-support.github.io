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
const AuthRoutes = () => {
const AuthRoutes = () => {;
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "@/components/ProtectedRoute";
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import Login from "@/pages/Login",
import Signup from "@/pages/Signup",
import ForgotPassword from "@/pages/ForgotPassword",
import UpdatePassword from "@/pages/UpdatePassword",
import { ProtectedRoute } from "@/components/ProtectedRoute",
import Onboarding from "@/pages/Onboarding",

import { Fragment  } from 'react';
import { Route, Routes  } from 'react-router-dom';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import ForgotPassword from '@/pages/ForgotPassword';
import UpdatePassword from '@/pages/UpdatePassword';
import { ProtectedRoute  } from '@/components/ProtectedRoute';
import Onboarding from '@/pages/Onboarding';
import TalentOnboarding from '@/pages/TalentOnboarding';
import ServiceOnboarding from '@/pages/ServiceOnboarding';
const AuthRoutes = () => {const AuthRoutes = () => {import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
const AuthRoutes = () => {import { Fragment } from 'react';
import { Fragment } from "react",import { Route, Routes } from "react-router-dom",import Login from "@/pages/Login",import Signup from "@/pages/Signup",import ForgotPassword from "@/pages/ForgotPassword",import UpdatePassword from "@/pages/UpdatePassword",import { ProtectedRoute } from "@/components/ProtectedRoute",import Onboarding from "@/pages/Onboarding",import TalentOnboarding from "@/pages/TalentOnboarding",import ServiceOnboarding from "@/pages/ServiceOnboarding",const AuthRoutes = () => {return (<Routes>;
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/update-password" element={<UpdatePassword />} />;
      {/* Onboarding Routes */}
      <Route;
        path="/onboarding";
        element={<ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/talent-onboarding";
        element={<ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/service-onboarding";
        element={<ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
  )}
export default AuthRoutes;},export default AuthRoutes,const AuthRoutes = () => {const AuthRoutes  = () => {return (<Routes>;
      {/* Auth Routes */}return (const AuthRoutes = () => {const AuthRoutes = () => {<Routes>;
      {/* Auth Routes */}
      <Route path="/login" element={<Login />} />;
      <Route path="/signup" element={<Signup />} />;
      <Route path="/forgot-password" element={<ForgotPassword />} />;
      <Route path="/update-password" element={<UpdatePassword />} />;
      {/* Onboarding Routes */}
      <Route;
        path="/onboarding";
        element={<ProtectedRoute>;
            <Onboarding />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/talent-onboarding";
        element={<ProtectedRoute>;
            <TalentOnboarding />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/service-onboarding";
        element={<ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
  )}}}},export default AuthRoutes;export default AuthRoutes;import { Fragment  } from './react';
import { Route, Routes  } from './react-router-dom';
import Login from '@/pages / Login';
import Signup from '@/pages / Signup';
import ForgotPassword from '@/pages / ForgotPassword';
import UpdatePassword from '@/pages / UpdatePassword';
import { ProtectedRoute  } from '@/components / ProtectedRoute';
import Onboarding from '@/pages / Onboarding';
import TalentOnboarding from '@/pages / TalentOnboarding';
import ServiceOnboarding from '@/pages / ServiceOnboarding';
const AuthRoutes = () =>: any {return (<Routes>;
      {/* Auth Routes */}
export default AuthRoutes;)},export default AuthRoutes,const AuthRoutes = () => {return (<Routes> {/* Auth Routes */;
}<Route path="/login" element= {<Login />;
}/> <Route path="/signup" element= {<Signup />;
}/> <Route path="/forgot-password" element= {<ForgotPassword />;
}/> <Route path="/update-password" element= {<UpdatePassword />;
}/> /* Onboarding Routes */;
}<Route <Onboarding /> </ProtectedRoute>;
}/> <Route <TalentOnboarding /> </ProtectedRoute>;
}/> <Route <ServiceOnboarding /> </ProtectedRoute>;
}/> </Routes>)}export default AuthRoutes;
  )},export default AuthRoutes;<ProtectedRoute>;
            <ServiceOnboarding />;
          </ProtectedRoute>;
        }/>;
    </Routes>;
}},return (<Routes>;
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
  return (
    <Routes>;
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
  );
};


};
};



},


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
