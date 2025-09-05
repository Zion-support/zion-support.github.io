<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage",
import CommunityProfilePage from "../pages/CommunityProfilePage",
=======
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;../components/ProtectedRoute&quot;;
import CommunityPage from &quot;../pages/CommunityPage&quot;;
import ForumCategoryPage from &quot;../pages/ForumCategoryPage&quot;;
import ForumPostPage from &quot;../pages/ForumPostPage&quot;;
import CreatePostPage from &quot;../pages/CreatePostPage&quot;;
import EditPostPage from &quot;../pages/EditPostPage&quot;;
import CommunityProfilePage from &quot;../pages/CommunityProfilePage&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path=&quot;/community&quot; element={<CommunityPage />} />
      <Route path=&quot;/forum&quot; element={<CommunityPage />} />
      <Route path=&quot;/community/category/:categoryId&quot; element={<ForumCategoryPage />} />
      <Route path=&quot;/community/post/:postId&quot; element={<ForumPostPage />} />
      <Route path=&quot;/community/profile/:userId&quot; element={<CommunityProfilePage />} />
=======
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

const _CommunityRoutes = () => {_return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={_<CommunityPage />} />
      <Route path="/forum" element={_<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={_<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={_<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={_<CommunityProfilePage />} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      
      {_/* Protected routes */}
      <Route
<<<<<<< HEAD
        path=&quot;/community/create&quot;
        element={
          <ProtectedRoute>
=======
        path="/community/create"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <CreatePostPage />
          </ProtectedRoute>}
      />
      <Route
<<<<<<< HEAD
        path=&quot;/community/edit/:postId&quot;
        element={
          <ProtectedRoute>
=======
        path="/community/edit/:postId"
        element={_<ProtectedRoute>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            <EditPostPage />
          </ProtectedRoute>}
      />
    </Routes>
  )
},

export default CommunityRoutes,