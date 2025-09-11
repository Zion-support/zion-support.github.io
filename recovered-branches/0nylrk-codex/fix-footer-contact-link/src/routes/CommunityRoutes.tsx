<<<<<<< HEAD
<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

import EditPostPage from "../pages/EditPostPage",
import CommunityProfilePage from "../pages/CommunityProfilePage",
const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



const CommunityRoutes = () => {
const CommunityRoutes = () => {;
  return (
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "../components/ProtectedRoute",;
import CommunityPage from "../pages/CommunityPage",;
import ForumCategoryPage from "../pages/ForumCategoryPage",;
import ForumPostPage from "../pages/ForumPostPage",;
import CreatePostPage from "../pages/CreatePostPage",;
import EditPostPage from "../pages/EditPostPage",;
import CommunityProfilePage from "../pages/CommunityProfilePage",;
;
const CommunityRoutes = () => {;
  return (;
    <Routes>;
      {/* Public routes */}
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const CommunityRoutes = () => {
=======
const CommunityRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Public routes */}

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

<<<<<<< HEAD
<<<<<<< HEAD
        }
      />
    </Routes>
  )
}
export default CommunityRoutes;

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "../components/ProtectedRoute",;
import CommunityPage from "../pages/CommunityPage",;
import ForumCategoryPage from "../pages/ForumCategoryPage",;
import ForumPostPage from "../pages/ForumPostPage",;
import CreatePostPage from "../pages/CreatePostPage",;
import EditPostPage from "../pages/EditPostPage",;
import CommunityProfilePage from "../pages/CommunityProfilePage",;
const CommunityRoutes = () => {;
  return (;
    <Routes>;
      {/* Public routes */}
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
<<<<<<< HEAD
<<<<<<< HEAD
      ;
      {/* Protected routes */}
      <Route;
        path="/community/create";
        element={;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '../components / ProtectedRoute';
import CommunityPage from "../pages / CommunityPage";
import ForumCategoryPage from "../pages / ForumCategoryPage";
import ForumPostPage from "../pages / ForumPostPage";
import CreatePostPage from "../pages / CreatePostPage";
import EditPostPage from "../pages / EditPostPage";
import CommunityProfilePage from "../pages / CommunityProfilePage";
const CommunityRoutes = () =>: any {
  return (
    <Routes>;
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community / category/:category_id" element={<ForumCategoryPage />} />;
      <Route path="/community / post/:post_id" element={<ForumPostPage />} />;
      <Route path="/community / profile/:user_id" element={<CommunityProfilePage />} />;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      {/* Protected routes */}
      <Route;
        path="/community / create";
        element={
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <ProtectedRoute>;
            <CreatePostPage />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
<<<<<<< HEAD
      <Route;
        element={
        path="/community/edit/:postId";
        element={;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      <Route;
        path="/community / edit/:post_id";

        element={
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          <ProtectedRoute>;
            <EditPostPage />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD
<<<<<<< HEAD
      />;
    </Routes>;
},;
export default CommunityRoutes;


};
      />;
    </Routes>);
}
;
export default CommunityRoutes;
;
  ),;
},;
;export default CommunityRoutes,
 const CommunityRoutes = () => {
  return (<Routes> {
  /* Public routes */ 
}<Route path="/community" element= {
  <CommunityPage /> 
}/> <Route path="/forum" element= {
  <CommunityPage /> 
}/> <Route path="/community/category/:categoryId" element= {
  <ForumCategoryPage /> 
}/> <Route path="/community/post/:postId" element= {
  <ForumPostPage /> 
}/> <Route path="/community/profile/:userId" element= {
  <CommunityProfilePage /> 
}/> /* Protected routes */ 
}<Route <CreatePostPage /> </ProtectedRoute> 
}/> <Route <EditPostPage /> </ProtectedRoute> 
}/> </Routes>) 
};
export default CommunityRoutes;
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
      />;
    </Routes>;
  );
},;
export default CommunityRoutes;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

      />;
    </Routes>;
  );

=======
},;
export default CommunityRoutes;


<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
