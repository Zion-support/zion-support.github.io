import { Fragment } from "react";""
import { Route, Routes } from "react-router-dom";""
import NotFound from "@/pages/NotFound";""
import Unauthorized from "@/pages/Unauthorized";"
const ErrorRoutes = () => {
const ErrorRoutes = () => {;
  return (
    <Routes>;
"
      <Route path="/unauthorized" element={<Unauthorized />} />"
      <Route path="*" element={<NotFound />} />"

    
      <Route path="/unauthorized" element={<Unauthorized />} />;"
      <Route path="*" element={<NotFound />} />;"


  return (<Routes> {
}<Route path="/unauthorized" element= {"
  <Unauthorized /> 
}/> <Route path="*" element= {"
  <NotFound /> 


    ;)"