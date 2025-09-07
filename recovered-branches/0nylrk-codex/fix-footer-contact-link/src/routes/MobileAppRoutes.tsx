import { Route, Routes } from "react-router-dom";""
import MobileAppPage from "../pages/MobileAppPage";""
import MobileLaunchPage from "../pages/MobileLaunchPage";""
import OpenAppRedirect from "../pages/OpenAppRedirect";"
const MobileAppRoutes = () => {
const MobileAppRoutes = () => {;"
import {Route, Routes} from "react-router-dom";""
import OpenAppRedirect from "../pages/OpenAppRedirect";""
import { Route, Routes } from "react-router-dom",""
import MobileAppPage from "../pages/MobileAppPage",""
import MobileLaunchPage from "../pages/MobileLaunchPage",""
import OpenAppRedirect from "../pages/OpenAppRedirect","
  return (
    <Routes>
"
      <Route path="/download" element={<MobileAppPage />} />"
      <Route path="/mobile-app" element={<MobileAppPage />} />"
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />"
      <Route path="/open-app" element={<OpenAppRedirect />} />"

    
    <Routes>;

    
      <Route path="/download" element={<MobileAppPage />} />;"
      <Route path="/mobile - app" element={<MobileAppPage />} />;"
      <Route path="/mobile - launch" element={<MobileLaunchPage />} />;"
      <Route path="/open - app" element={<OpenAppRedirect />} />;"
)
    );
  return (<Routes> {
}<Route path="/download" element= {"
  <MobileAppPage /> 
}/> <Route path="/mobile-app" element= {"
}/> <Route path="/mobile-launch" element= {"
  <MobileLaunchPage /> 
}/> <Route path="/open-app" element= {"
  <OpenAppRedirect /> 
)"