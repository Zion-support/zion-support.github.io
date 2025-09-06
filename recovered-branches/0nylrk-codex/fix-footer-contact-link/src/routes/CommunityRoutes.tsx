

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />



const CommunityRoutes = () => {

  return (
    <Routes>;
      {/* Public routes */}



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



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements
