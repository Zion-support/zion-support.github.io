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
import CommunityPage from "../pages/CommunityPage";""
import ForumCategoryPage from "../pages/ForumCategoryPage";""
import ForumPostPage from "../pages/ForumPostPage";""
import CreatePostPage from "../pages/CreatePostPage";""
import EditPostPage from "../pages/EditPostPage";""
import CommunityProfilePage from "../pages/CommunityProfilePage";""
import { Fragment } from "react",""
import { Route, Routes } from "react-router-dom",""
import { ProtectedRoute } from "../components/ProtectedRoute",""
import CommunityPage from "../pages/CommunityPage",""
import ForumCategoryPage from "../pages/ForumCategoryPage",""
import ForumPostPage from "../pages/ForumPostPage",""
import CreatePostPage from "../pages/CreatePostPage",""
import EditPostPage from "../pages/EditPostPage";""
import CommunityProfilePage from "../pages/CommunityProfilePage";"
const CommunityRoutes = () => {
  return (
    <Routes>
</Routes>"
      <Route path="/community" element={<CommunityPage />} />"
</Route>"
      <Route path="/forum" element={<CommunityPage />} />"
</Route>"
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />"
</Route>"
      <Route path="/community/post/:postId" element={<ForumPostPage />} />"
</Route>"
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />"
</Route>
    <Routes>;
</Routes>"
      <Route path="/community" element={<CommunityPage />} />"
</Route>"
      <Route path="/forum" element={<CommunityPage />} />"
</Route>
      <Route;"
        path="/community/category/:categoryId""
        element={<ForumCategoryPage />}
</Route>"
      <Route path="/community/post/:postId" element={<ForumPostPage />} />"
</Route>
      <Route;"
        path="/community/profile/:userId""
        element={<CommunityProfilePage />}
</Route>
      <Route;"
        path="/community/create""
        element={
          <ProtectedRoute>
</Route>
            <CreatePostPage />
</CreatePostPage>
          </ProtectedRoute>
      <Route;"
        path="/community/edit/:postId""
        element={
          <ProtectedRoute>
</Route>
            <EditPostPage />
</EditPostPage>
          </ProtectedRoute>
    </Routes>
    <Routes>;
</Routes>"
      <Route path="/community" element={<CommunityPage />} />;"
</Route>"
      <Route path="/forum" element={<CommunityPage />} />;"
</Route>"
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;"
</Route>"
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;"
</Route>"
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;"
</Route>
    <Routes>;
</Routes>
    <Routes>;
</Routes>"
      <Route path="/community" element={<CommunityPage />} />;"
</Route>"
      <Route path="/forum" element={<CommunityPage />} />;"
</Route>"
      <Route path="/community / category/:category_id" element={<ForumCategoryPage />} />;"
</Route>"
      <Route path="/community / post/:post_id" element={<ForumPostPage />} />;"
</Route>"
      <Route path="/community / profile/:user_id" element={<CommunityProfilePage />} />;"
</Route>
      <Route;"
        path="/community / create";"
        element={
          <ProtectedRoute>;
</Route>
            <CreatePostPage />;
</CreatePostPage>
          </ProtectedRoute>;
      <Route;"
        path="/community / edit/:post_id";"
        element={
          <ProtectedRoute>;
</Route>
            <EditPostPage />;
</EditPostPage>
          </ProtectedRoute>;
    </Routes>;
    </Routes>;)
    </Routes>);
  return (<Routes> {
</Routes>"
}<Route path="/community" element= {"
  <CommunityPage /> 
</Route>"
}/> <Route path="/forum" element= {"
  <CommunityPage /> 
</Route>"
}/> <Route path="/community/category/:categoryId" element= {"
  <ForumCategoryPage /> 
</Route>"
}/> <Route path="/community/post/:postId" element= {"
  <ForumPostPage /> 
</Route>"
}/> <Route path="/community/profile/:userId" element= {"
  <CommunityProfilePage /> 
</Route>
}<Route <CreatePostPage /> </ProtectedRoute> 
</Route>
}/> <Route <EditPostPage /> </ProtectedRoute> 
</Route>)
}/> </Routes>) 
      <Route;"
        path="/community/create""
        element={
          <ProtectedRoute>
</Route>
            <CreatePostPage />
</CreatePostPage>
          </ProtectedRoute>
      <Route;"
        path="/community/edit/:postId""
        element={
          <ProtectedRoute>
</Route>
            <EditPostPage />
</EditPostPage>
          </ProtectedRoute>
    </Routes>;"