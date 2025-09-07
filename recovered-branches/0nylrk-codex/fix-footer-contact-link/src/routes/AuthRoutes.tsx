
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
import Login from "@/pages/Login";""
import Signup from "@/pages/Signup";""
import ForgotPassword from "@/pages/ForgotPassword";""
import UpdatePassword from "@/pages/UpdatePassword";""
import {ProtectedRoute} from "@/components/ProtectedRoute";""
import Onboarding from "@/pages/Onboarding";""
import TalentOnboarding from "@/pages/TalentOnboarding";""
import ServiceOnboarding from "@/pages/ServiceOnboarding";""
import { Fragment } from "react",""
import { Route, Routes } from "react-router-dom",""
import Login from "@/pages/Login",""
import Signup from "@/pages/Signup",""
import ForgotPassword from "@/pages/ForgotPassword",""
import UpdatePassword from "@/pages/UpdatePassword",""
import { ProtectedRoute } from "@/components/ProtectedRoute",""
import Onboarding from "@/pages/Onboarding",""
import TalentOnboarding from "@/pages/TalentOnboarding";""
import ServiceOnboarding from "@/pages/ServiceOnboarding";""
import TalentOnboarding from "@/pages/TalentOnboarding",""
import ServiceOnboarding from "@/pages/ServiceOnboarding","
const AuthRoutes = () => {
  return (
    <Routes>
</Routes>"
      <Route path="/login" element={<Login />} />"
</Route>"
      <Route path="/signup" element={<Signup />} />"
</Route>"
      <Route path="/forgot-password" element={<ForgotPassword />} />"
</Route>"
      <Route path="/update-password" element={<UpdatePassword />} />"
</Route>
      <Route;"
        path="/onboarding""
        element={
          <ProtectedRoute>
</Route>
            <Onboarding />
</Onboarding>
          </ProtectedRoute>
      <Route;"
        path="/talent-onboarding""
        element={
          <ProtectedRoute>
</Route>
            <TalentOnboarding />
</TalentOnboarding>
          </ProtectedRoute>
      <Route;"
        path="/service-onboarding""
        element={
          <ProtectedRoute>
</Route>
            <ServiceOnboarding />
</ServiceOnboarding>
          </ProtectedRoute>
    </Routes>
    <Routes>;
</Routes>"
      <Route path="/login" element={<Login />} />"
</Route>"
      <Route path="/signup" element={<Signup />} />"
</Route>"
      <Route path="/forgot-password" element={<ForgotPassword />} />"
</Route>"
      <Route path="/update-password" element={<UpdatePassword />} />"
</Route>
      <Route;"
        path="/onboarding""
        element={
          <ProtectedRoute>
</Route>
            <Onboarding />
</Onboarding>
          </ProtectedRoute>
      <Route;"
        path="/talent-onboarding""
        element={
          <ProtectedRoute>
</Route>
            <TalentOnboarding />
</TalentOnboarding>
          </ProtectedRoute>
      <Route;"
        path="/service-onboarding""
        element={
          <ProtectedRoute>
</Route>
            <ServiceOnboarding />
</ServiceOnboarding>
          </ProtectedRoute>
    </Routes>
    <Routes>;
</Routes>
  return (<Routes> {
</Routes>"
}<Route path="/login" element= {"
  <Login /> 
</Route>"
}/> <Route path="/signup" element= {"
  <Signup /> 
</Route>"
}/> <Route path="/forgot-password" element= {"
  <ForgotPassword /> 
</Route>"
}/> <Route path="/update-password" element= {"
  <UpdatePassword /> 
</Route>
}<Route <Onboarding /> </ProtectedRoute> 
</Route>
}/> <Route <TalentOnboarding /> </ProtectedRoute> 
</Route>
}/> <Route <ServiceOnboarding /> </ProtectedRoute> 
</Route>)
}/> </Routes>) "

