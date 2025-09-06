<<<<<<< HEAD




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const CommunityRoutes = () => {
=======
const CommunityRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Public routes */}

=======
=======
<<<<<<< HEAD
=======
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
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
<<<<<<< HEAD
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

=======
import EditPostPage from "../pages/EditPostPage",
import CommunityProfilePage from "../pages/CommunityProfilePage",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
<<<<<<< HEAD
        }
      />
    </Routes>
  )
}
export default CommunityRoutes;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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

      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;

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
          </ProtectedRoute>;
        }

      />;
    </Routes>;
  );

=======
},;
export default CommunityRoutes;
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
