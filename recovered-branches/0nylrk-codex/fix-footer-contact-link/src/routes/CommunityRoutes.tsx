import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import { ProtectedRoute } from &quot;../components/ProtectedRoute&quot;;
import CommunityPage from &quot;../pages/CommunityPage&quot;;
import ForumCategoryPage from &quot;../pages/ForumCategoryPage&quot;;
import ForumPostPage from &quot;../pages/ForumPostPage&quot;;
import CreatePostPage from &quot;../pages/CreatePostPage&quot;;
import EditPostPage from &quot;../pages/EditPostPage&quot;;
import CommunityProfilePage from &quot;../pages/CommunityProfilePage&quot;;

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
        }
      />
    </Routes>
  );
};

export default CommunityRoutes;