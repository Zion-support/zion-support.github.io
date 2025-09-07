<<<<<<< HEAD
const CommunityRoutes = () => {import { Fragment } from "react",
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
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
const CommunityRoutes = () => {;  return (
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
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/forum" element={<CommunityPage />} />
      <Route
        path="/community/category/:categoryId"
        element={<ForumCategoryPage />}
      />
      <Route path="/community/post/:postId" element={<ForumPostPage />} />
      <Route
        path="/community/profile/:userId"
        element={<CommunityProfilePage />}
      />
<<<<<<< HEAD

=======
=======
const CommunityRoutes = () => {}
const CommunityRoutes = () => {}
const CommunityRoutes = () => {;
<<<<<<< HEAD

  return (
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
<<<<<<< HEAD
  )
}

=======
<<<<<<< HEAD
        }
      />
    </Routes>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  )
}
export default CommunityRoutes;

<<<<<<< HEAD
=======
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
      <Route path="/community" element={<CommunityPage />} />;
      <Route path="/forum" element={<CommunityPage />} />;
      <Route path="/community/category/:categoryId" element={<ForumCategoryPage />} />;
      <Route path="/community/post/:postId" element={<ForumPostPage />} />;
      <Route path="/community/profile/:userId" element={<CommunityProfilePage />} />;
<<<<<<< HEAD
=======
<<<<<<< HEAD
      ;
      {/* Protected routes */}
      <Route;
        path="/community/create";
        element={;
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
        element={}
          <ProtectedRoute>;
            <CreatePostPage />;

<<<<<<< HEAD
=======
=======
        element={
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          <ProtectedRoute>;
            <CreatePostPage />;
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
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
>>>>>>> origin/resolved-merge-conflicts
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
<<<<<<< HEAD
=======
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
=======
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  <CommunityProfilePage /> 
}/> /* Protected routes */ 
}<Route <CreatePostPage /> </ProtectedRoute> 
}/> <Route <EditPostPage /> </ProtectedRoute> 

          <ProtectedRoute>
            <CreatePostPage />
          </ProtectedRoute>
        }
>>>>>>> origin/resolved-merge-conflicts
      />
    </Routes>
  )
};

          </ProtectedRoute>;
        }

      />;
    </Routes>;
  );
<<<<<<< HEAD
const CommunityRoutes = $2;
export default CommunityRoutes,
=======
},;
<<<<<<< HEAD
export default CommunityRoutes;
=======
export default CommunityRoutes;
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
>>>>>>> origin/resolved-merge-conflicts
