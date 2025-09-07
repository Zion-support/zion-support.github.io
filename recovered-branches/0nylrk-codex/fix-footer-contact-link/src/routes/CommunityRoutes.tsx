import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";
const CommunityRoutes = () => {import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

const CommunityRoutes = () => {
const CommunityRoutes = () => {
const CommunityRoutes = () => {;  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />

const CommunityRoutes = () => {
const CommunityRoutes = () => {;
  return (
    <Routes>;
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route
        path="/community/category/:categoryId"
        element={<ForumCategoryPage />}
      />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route
        path="/community/profile/:userId"
        element={<CommunityProfilePage />}
      />

      {/* Protected routes */}
      <Route
        path="/community/create"
        element={
          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/community/edit/:postId"
        element={
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
};

          </ProtectedRoute>;
        }

      />;
    </Routes>;
  );
import { Fragment } from "react";""
import { Route, Routes } from "react-router-dom";""
import { ProtectedRoute } from "../components/ProtectedRoute";""
import CommunityPage from "../pages/CommunityPage";""
import ForumCategoryPage from "../pages/ForumCategoryPage";""
import ForumPostPage from "../pages/ForumPostPage";""
import CreatePostPage from "../pages/CreatePostPage";""
import EditPostPage from "../pages/EditPostPage";""
import CommunityProfilePage from "../pages/CommunityProfilePage";"
const CommunityRoutes = () => {"
import {Fragment} from "react";""
import {Route, Routes} from "react-router-dom";""
import {ProtectedRoute} from "../components/ProtectedRoute";""
import CommunityProfilePage from "../pages/CommunityProfilePage";""
import { Fragment } from "react",""
import { Route, Routes } from "react-router-dom",""
import { ProtectedRoute } from "../components/ProtectedRoute",""
import CommunityPage from "../pages/CommunityPage",""
import ForumCategoryPage from "../pages/ForumCategoryPage",""
import ForumPostPage from "../pages/ForumPostPage",""
import CreatePostPage from "../pages/CreatePostPage",""
const CommunityRoutes = () => {
  return (
    <Routes>
"
      <Route path="/community" element={<CommunityPage />} />"
      <Route path="/forum" element={<CommunityPage />} />"
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />"
      <Route path="/community/post/:postId" element={<ForumPostPage />} />"
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />"

    <Routes>;

      <Route;"
        path="/community/category/:categoryId""
        element={<ForumCategoryPage />}

        path="/community/profile/:userId""
        element={<CommunityProfilePage />}

        path="/community/create""
        element={
          <ProtectedRoute>

            <CreatePostPage />

          
        path="/community/edit/:postId""

            <EditPostPage />

          
    
      <Route path="/community" element={<CommunityPage />} />;"
      <Route path="/forum" element={<CommunityPage />} />;"
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;"
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;"
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;"


      <Route path="/community / category/:category_id" element={<ForumCategoryPage />} />;"
      <Route path="/community / post/:post_id" element={<ForumPostPage />} />;"
      <Route path="/community / profile/:user_id" element={<CommunityProfilePage />} />;"

        path="/community / create";"
          <ProtectedRoute>;

            <CreatePostPage />;

          ;
        path="/community / edit/:post_id";"

            <EditPostPage />;

    ;)
    );
  return (<Routes> {
}<Route path="/community" element= {"
  <CommunityPage /> 
}/> <Route path="/forum" element= {"
}/> <Route path="/community/category/:categoryId" element= {"
  <ForumCategoryPage /> 
}/> <Route path="/community/post/:postId" element= {"
  <ForumPostPage /> 
}/> <Route path="/community/profile/:userId" element= {"
  <CommunityProfilePage /> 

}<Route <CreatePostPage />  

}/> <Route <EditPostPage />  
)
}/> ) 


          


          
    ;"
pr-12325
