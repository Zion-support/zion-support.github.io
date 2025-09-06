<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import { ProtectedRoute } from "../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage",
import ForumCategoryPage from "../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage",
import CreatePostPage from "../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";
<<<<<<< HEAD

const CommunityRoutes = () => {
=======
const CommunityRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Public routes */}
<<<<<<< HEAD
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />
=======
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
<<<<<<< HEAD
      <Route
        path="/community/edit/:postId"
=======
      <Route;
        path="/community / edit/:post_id";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
        element={
          <ProtectedRoute>;
            <EditPostPage />;
          </ProtectedRoute>;
        }
<<<<<<< HEAD
<<<<<<< HEAD
      />
    </Routes>
  )
}
export default CommunityRoutes;
=======
      />;
    </Routes>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
      />;
    </Routes>);
}
;
export default CommunityRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
