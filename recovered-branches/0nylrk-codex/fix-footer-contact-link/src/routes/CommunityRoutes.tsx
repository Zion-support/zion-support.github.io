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
        path="/community/create"
        element={_<ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>}
      />
      <Route
        path="/community/edit/:postId"
        element={_<ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>}
      />
    </Routes>
  );
};

export default CommunityRoutes;