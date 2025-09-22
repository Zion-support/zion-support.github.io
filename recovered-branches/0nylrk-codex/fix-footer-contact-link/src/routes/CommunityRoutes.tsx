<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";
<<<<<<< HEAD
<<<<<<< HEAD
const CommunityRoutes = () => {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
=======
const CommunityRoutes = () => {import { Fragment } from "react",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
const CommunityRoutes = () => {import { Fragment } from "react",
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import { Fragment } from "react",
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />
<<<<<<< HEAD

const CommunityRoutes = () => {}
const CommunityRoutes = () => {}
const CommunityRoutes = () => {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

const CommunityRoutes = () => {

=======

const CommunityRoutes = () => {
=======const CommunityRoutes = () => {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
const CommunityRoutes = () => {
const CommunityRoutes = () => {;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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

=======
    <Routes>;
      {/* Public routes */}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
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
  )
};

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import { ProtectedRoute } from "../components/ProtectedRoute",;
import CommunityPage from "../pages/CommunityPage",;
import ForumCategoryPage from "../pages/ForumCategoryPage",;
import ForumPostPage from "../pages/ForumPostPage",;
import CreatePostPage from "../pages/CreatePostPage",;
import EditPostPage from "../pages/EditPostPage",;

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import CommunityProfilePage from "../pages/CommunityProfilePage",;
;
const CommunityRoutes = () => {;
  return (;
    <Routes>;
      {/* Public routes */}
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import { ProtectedRoute } from '../components / ProtectedRoute';
import CommunityPage from "../pages / CommunityPage";
import ForumCategoryPage from "../pages / ForumCategoryPage";
import ForumPostPage from "../pages / ForumPostPage";
import CreatePostPage from "../pages / CreatePostPage";
import EditPostPage from "../pages / EditPostPage";

import CommunityProfilePage from "../pages / CommunityProfilePage";
const CommunityRoutes = () =>: any {}
  return (
    <Routes>;
      {/* Public routes */}"
      <Route path="/community" element={<CommunityPage />} />;"
      <Route path="/forum" element={<CommunityPage />} />;"
      <Route path="/community / category/:category_id" element={<ForumCategoryPage />} />;"
      <Route path="/community / post/:post_id" element={<ForumPostPage />} />;"
      <Route path="/community / profile/:user_id" element={<CommunityProfilePage />} />;
      {/* Protected routes */}
      <Route;"
        path="/community / create";
        element={}
          <ProtectedRoute>;
            <CreatePostPage />;

=======
  )
};

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
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
      {/* Protected routes */}
      <Route;
        path="/community / create";
        element={
          <ProtectedRoute>;
            <CreatePostPage />;
          </ProtectedRoute>;
        }
      />;

      <Route;
        path="/community / edit/:post_id";

        element={
          <ProtectedRoute>;
            <EditPostPage />;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          </ProtectedRoute>;
        }

      />;
    </Routes>;
  );
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
const CommunityRoutes = () => {}
  return (<Routes> {}
  /* Public routes */ "
}<Route path="/community" element= {}
  <CommunityPage /> "
}/> <Route path="/forum" element= {}
  <CommunityPage /> "
}/> <Route path="/community/category/:categoryId" element= {}
  <ForumCategoryPage /> "
}/> <Route path="/community/post/:postId" element= {}
  <ForumPostPage /> "
}/> <Route path="/community/profile/:userId" element= {}
  <CommunityProfilePage /> 
}/> /* Protected routes */ 
}<Route <CreatePostPage /> </ProtectedRoute> 
}/> <Route <EditPostPage /> </ProtectedRoute> 
}/> </Routes>) ;
};
export default CommunityRoutes;
      {/* Protected routes */}
      <Route"
        path="/community/create"
        element={}
          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />
<Route"
        path="/community/edit/:postId"
        element={}
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
        }
      />;
    </Routes>;
  );
},;
export default CommunityRoutes;
;
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
