<<<<<<< HEAD
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df



const CommunityRoutes = () => {
<<<<<<< HEAD
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
const CommunityRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
<<<<<<< HEAD
    <Routes>;
      {/* Public routes */}

=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
=======
        }
      />
    </Routes>
  )
}
export default CommunityRoutes;

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
<<<<<<< HEAD

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
=======
      ;
      {/* Protected routes */}
      <Route;
        path="/community/create";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <CreatePostPage />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD

      <Route;
        path="/community / edit/:post_id";

        element={
=======
      <Route;
        element={
        path="/community/edit/:postId";
        element={;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
          <ProtectedRoute>;
            <EditPostPage />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD

      />;
    </Routes>;
  );

=======
},;
export default CommunityRoutes;


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
