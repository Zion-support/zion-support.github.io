<<<<<<< HEAD
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
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
      ;
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
        }
      />;
    </Routes>;
  ),;
},;
;
=======
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage",
import CommunityProfilePage from "../pages/CommunityProfilePage",const CommunityRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path=&quot;/community&quot; element={<CommunityPage />} />
      <Route path=&quot;/forum&quot; element={<CommunityPage />} />
      <Route path=&quot;/community/category/:categoryId&quot; element={<ForumCategoryPage />} />
      <Route path=&quot;/community/post/:postId&quot; element={<ForumPostPage />} />
      <Route path=&quot;/community/profile/:userId&quot; element={<CommunityProfilePage />} />
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
      
      {_/* Protected routes */}
      <Route
        path=&quot;/community/create&quot;
        element={
          <ProtectedRoute>            <CreatePostPage />
          </ProtectedRoute>}
      />
      <Route
        path=&quot;/community/edit/:postId&quot;
        element={
          <ProtectedRoute>            <EditPostPage />
          </ProtectedRoute>}
      />
    </Routes>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default CommunityRoutes,