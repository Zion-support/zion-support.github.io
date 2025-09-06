import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
const CommunityRoutes = () => {
const CommunityRoutes = () => {;
  return (
    <Routes>;
      {/* Public routes */}
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
      {/* Protected routes */}
      <Route;
        path="/community / create";
        element={
          <ProtectedRoute>;
            <CreatePostPage />;
          </ProtectedRoute>;
        }
        }
      />
    </Routes>
  )
}
export default CommunityRoutes;
