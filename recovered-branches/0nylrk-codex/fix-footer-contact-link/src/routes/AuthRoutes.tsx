import { Fragment } from "react";""
import { Route, Routes } from "react-router-dom";""
import Login from "@/pages/Login";""
import Signup from "@/pages/Signup";""
import ForgotPassword from "@/pages/ForgotPassword";""
import UpdatePassword from "@/pages/UpdatePassword";""
import { ProtectedRoute } from "@/components/ProtectedRoute";""
import Onboarding from "@/pages/Onboarding";""
import TalentOnboarding from "@/pages/TalentOnboarding";""
import ServiceOnboarding from "@/pages/ServiceOnboarding";"
const AuthRoutes = () => {
const AuthRoutes = () => {;"
import {Fragment} from "react";""
import {Route, Routes} from "react-router-dom";""
import {ProtectedRoute} from "@/components/ProtectedRoute";""
import ServiceOnboarding from "@/pages/ServiceOnboarding";""
import { Fragment } from "react",""
import { Route, Routes } from "react-router-dom",""
import Login from "@/pages/Login",""
import Signup from "@/pages/Signup",""
import ForgotPassword from "@/pages/ForgotPassword",""
import UpdatePassword from "@/pages/UpdatePassword",""
import { ProtectedRoute } from "@/components/ProtectedRoute",""
import Onboarding from "@/pages/Onboarding",""
import TalentOnboarding from "@/pages/TalentOnboarding",""
import ServiceOnboarding from "@/pages/ServiceOnboarding","
  return (
    <Routes>
"
      <Route path="/login" element={<Login />} />"
      <Route path="/signup" element={<Signup />} />"
      <Route path="/forgot-password" element={<ForgotPassword />} />"
      <Route path="/update-password" element={<UpdatePassword />} />"

      <Route;"
        path="/onboarding""
        element={
          <ProtectedRoute>

            <Onboarding />

          
        path="/talent-onboarding""

            <TalentOnboarding />

          
        path="/service-onboarding""

            <ServiceOnboarding />

          
    
    <Routes>;



          


          


          
    

  return (<Routes> {
}<Route path="/login" element= {"
  <Login /> 
}/> <Route path="/signup" element= {"
  <Signup /> 
}/> <Route path="/forgot-password" element= {"
  <ForgotPassword /> 
}/> <Route path="/update-password" element= {"
  <UpdatePassword /> 

}<Route <Onboarding />  

}/> <Route <TalentOnboarding />  

}/> <Route <ServiceOnboarding />  
)
}/> ) "