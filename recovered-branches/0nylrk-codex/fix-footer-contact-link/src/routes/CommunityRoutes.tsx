<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
const CommunityRoutes = () => {import { Fragment } from "react,
import { Fragment } from react",
import { Route, Routes } from "react-router-dom,
import { ProtectedRoute } from ../components/ProtectedRoute",
import CommunityPage from "../pages/CommunityPage,
import ForumCategoryPage from ../pages/ForumCategoryPage",
import ForumPostPage from "../pages/ForumPostPage,
import CreatePostPage from ../pages/CreatePostPage",
import EditPostPage from "../pages/EditPostPage;
import CommunityProfilePage from ../pages/CommunityProfilePage";
const CommunityRoutes = () => {
const CommunityRoutes = () => {  return (
=======
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";

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
>>>>>>> origin/chore/fix-lint-and-merge
    <Routes>
      {/* Public routes */}
      <Route path="/community element={<CommunityPage />} />
      <Route path=/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId element={<ForumCategoryPage />} />
      <Route path=/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId element={<CommunityProfilePage />} />

<<<<<<< HEAD
=======const CommunityRoutes = () => {
=======
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "../components/ProtectedRoute";
import CommunityPage from "../pages/CommunityPage";
import ForumCategoryPage from "../pages/ForumCategoryPage";
import ForumPostPage from "../pages/ForumPostPage";
import CreatePostPage from "../pages/CreatePostPage";
import EditPostPage from "../pages/EditPostPage";
import CommunityProfilePage from "../pages/CommunityProfilePage";
>>>>>>> merged-prs-20250907-203621
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
const CommunityRoutes = $2;
export default CommunityRoutes,
=======

import EditPostPage from "../pages/EditPostPage",
import CommunityProfilePage from "../pages/CommunityProfilePage",
const CommunityRoutes = () => {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36



const CommunityRoutes = () => {
const CommunityRoutes = () => {;
  return (
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
<<<<<<< HEAD
      <Route path=/community" element={<CommunityPage />} />
      <Route path="/forum element={<CommunityPage />} />
      <Route
        path=/community/category/:categoryId"
        element={<ForumCategoryPage />}
      />
      <Route path="/community/post/:postId element={<ForumPostPage />} />
      <Route
        path=/community/profile/:userId"
        element={<CommunityProfilePage />}
      />
=======
const CommunityRoutes = () => {}
const CommunityRoutes = () => {}
const CommunityRoutes = () => {;

  return (
>>>>>>> origin/chore/fix-lint-and-merge

=======
<<<<<<< HEAD
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      {/* Protected routes */}
      <Route
        path="/community/create
        element={
          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />
      <Route
        path=/community/edit/:postId"
        element={
          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>

<<<<<<< HEAD
  )
}

=======
<<<<<<< HEAD
        }
      />
    </Routes>
  )
}
export default CommunityRoutes;

=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
<<<<<<< HEAD
      ;
      {/* Protected routes */}
      <Route;
        path="/community/create";
        element={;
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
<<<<<<< HEAD
        element={}
          <ProtectedRoute>;
            <CreatePostPage />;

=======
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <CreatePostPage />;
          </ProtectedRoute>;
        }
      />;
<<<<<<< HEAD
      <Route;
        element={
        path="/community/edit/:postId";
        element={;
=======

      <Route;
        path="/community / edit/:post_id";

        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <EditPostPage />;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          </ProtectedRoute>;
        }
<<<<<<< HEAD
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
 const CommunityRoutes = () => {
  return (<Routes> {
  /* Public routes */ 
}<Route path="/community" element= {
  <CommunityPage /> 
}/> <Route path="/forum" element= {
  <CommunityPage /> 
}/> <Route path="/community/category/:categoryId" element= {
  <ForumCategoryPage /> 
}/> <Route path="/community/post/:postId" element= {
  <ForumPostPage /> 
}/> <Route path="/community/profile/:userId" element= {
  <CommunityProfilePage /> 
}/> /* Protected routes */ 
}<Route <CreatePostPage /> </ProtectedRoute> 
}/> <Route <EditPostPage /> </ProtectedRoute> 
}/> </Routes>) 
};
export default CommunityRoutes;
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
        }
      />;
    </Routes>;
  );
},;
export default CommunityRoutes;
=======

      />;
    </Routes>;
  );

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

<<<<<<< HEAD
  <CommunityProfilePage /> 
}/> /* Protected routes */ 
}<Route <CreatePostPage /> </ProtectedRoute> 
}/> <Route <EditPostPage /> </ProtectedRoute> 

          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
      />

          <ProtectedRoute>
            <EditPostPage />
          </ProtectedRoute>
        }
      />;
    </Routes>;
  );
},;
export default CommunityRoutes;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
