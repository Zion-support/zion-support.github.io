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
      
      {/* Protected routes */}
      <Route
        path=&quot;/community/create&quot;
        element={
          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path=&quot;/community/edit/:postId&quot;
        element={
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
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
const CommunityRoutes = () => {;
  return (;
    <Routes>;
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
      {/* Protected routes */}
      <Route;
        path="/community/create";
        element={;
          <ProtectedRoute>;
            <CreatePostPage />;
          </ProtectedRoute>;
        }
      />;
      <Route;
        path="/community/edit/:postId";
        element={;
          <ProtectedRoute>;
            <EditPostPage />;
          </ProtectedRoute>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
      />;
    </Routes>;
  );
},;
export default CommunityRoutes;