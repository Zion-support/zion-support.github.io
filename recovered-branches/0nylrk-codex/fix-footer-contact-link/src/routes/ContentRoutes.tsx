<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import SearchPage from "@/pages/SearchPage";
import {SitemapPage} from "@/components/SitemapPage";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
import { Fragment } from "react",
import { Route, Routes, Navigate } from "react-router-dom",
import Home from "@/pages/Home",
import About from "@/pages/About",
import Blog from "@/pages/Blog",
import BlogPost from "@/pages/BlogPost",
import GreenIT from "@/pages/GreenIT",
import Careers from "@/pages/Careers",
import SearchPage from "@/pages/SearchPage",
import { SitemapPage } from "@/components/SitemapPage",
import HelpCenterPage from "@/pages/HelpCenterPage",
import AccountSettings from "@/pages/AccountSettings",
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
const ContentRoutes = () => {
=======
const ContentRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Content Routes */}

      <Route path="/" element={<Home />} />;
      <Route path="/home" element={<Home />} />;
      <Route path="/about" element={<About />} />;

      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />} />;
      <Route path="/support" element={<HelpCenterPage />} />;

      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />;
      <Route path="/blog/:slug" element={<BlogPost />} />;

      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />;

      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />;

      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />} />;

      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />;

      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />} />;

      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />;

      {/* Sitemap Page */}
<Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  )

=======
=======
import {Fragment} from "react";
import {Route, Routes, Navigate} from "react-router-dom";
=======
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import SearchPage from "@/pages/SearchPage";
import { SitemapPage } from "@/components/SitemapPage";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";
const ContentRoutes = () => {
const ContentRoutes = () => {;
  return (
    <Routes>;
      {/* Content Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
=======
import { Fragment } from "react";"
import { Route, Routes, Navigate } from "react-router-dom";"
import Home from "@/pages/Home";"
import About from "@/pages/About";"
import Blog from "@/pages/Blog";"
import BlogPost from "@/pages/BlogPost";"
import GreenIT from "@/pages/GreenIT";"
import Careers from "@/pages/Careers";"
import SearchPage from "@/pages/SearchPage";"
import { SitemapPage } from "@/components/SitemapPage";"
import HelpCenterPage from "@/pages/HelpCenterPage";"
import AccountSettings from "@/pages/AccountSettings";"
import ProjectRoom from "@/pages/ProjectRoom";"
import VideoCall from "@/pages/VideoCall";
const ContentRoutes = () => {}
const ContentRoutes = () => {;

  return (
    <Routes>;
      {/* Content Routes */}"
      <Route path="/" element={<Home />} />"
      <Route path="/home" element={<Home />} />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
      <Route path="/about" element={<About />} />

      {/* Help Center Routes */}"
      <Route path="/help" element={<HelpCenterPage />} />"
      <Route path="/support" element={<HelpCenterPage />} />

      {/* Blog Routes */}"
      <Route path="/blog" element={<Blog />} />"
      <Route path="/blog/:slug" element={<BlogPost />} />

{/* Green IT Route */}
export default ContentRoutes;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default ContentRoutes,
import { Fragment } from "react",;
import { Route, Routes, Navigate } from "react-router-dom",;
import Home from "@/pages/Home",;
import About from "@/pages/About",;
import Blog from "@/pages/Blog",;
import BlogPost from "@/pages/BlogPost",;
import GreenIT from "@/pages/GreenIT",;
import Careers from "@/pages/Careers",;
import SearchPage from "@/pages/SearchPage",;
import { SitemapPage } from "@/components/SitemapPage",;
import HelpCenterPage from "@/pages/HelpCenterPage",;
import AccountSettings from "@/pages/AccountSettings",;
import ProjectRoom from "@/pages/ProjectRoom",;
import VideoCall from "@/pages/VideoCall",;
const ContentRoutes = () => {;
  return (;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
      <Route path="/green-it" element={<GreenIT />} />

      {/* Careers Route */}"
      <Route path="/careers" element={<Careers />} />;

      {/* Account Settings */}"
      <Route path="/settings/account" element={<AccountSettings />} />

      {/* Project Room */}"
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />

      {/* Video Call */}"
      <Route path="/video-call/:roomId" element={<VideoCall />} />;

      {/* Global Search Route */}"
      <Route path="/search" element={<SearchPage />} />

      {/* Sitemap Page */}"
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  );
=======
  );
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
};

export default ContentRoutes;

import { Fragment } from './react';
import { Route, Routes, Navigate } from './react-router-dom';
import Home from "@/pages / Home";
import About from "@/pages / About";
import Blog from "@/pages / Blog";
import BlogPost from "@/pages / BlogPost";
import GreenIT from "@/pages / GreenIT";
import Careers from "@/pages / Careers";
import SearchPage from "@/pages / SearchPage";
import { SitemapPage } from '@/components / SitemapPage';
import HelpCenterPage from "@/pages / HelpCenterPage";
import AccountSettings from "@/pages / AccountSettings";
import ProjectRoom from "@/pages / ProjectRoom";
=======
  );
};

export default ContentRoutes;

import { Fragment } from './react';'
import { Route, Routes, Navigate } from './react-router-dom';"
import Home from "@/pages / Home";"
import About from "@/pages / About";"
import Blog from "@/pages / Blog";"
import BlogPost from "@/pages / BlogPost";"
import GreenIT from "@/pages / GreenIT";"
import Careers from "@/pages / Careers";"
import SearchPage from "@/pages / SearchPage";'
import { SitemapPage } from '@/components / SitemapPage';"
import HelpCenterPage from "@/pages / HelpCenterPage";"
import AccountSettings from "@/pages / AccountSettings";"
import ProjectRoom from "@/pages / ProjectRoom";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import VideoCall from "@/pages / VideoCall";
const ContentRoutes = () =>: any {}
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    <Routes>;
      {/* Content Routes */}"
      <Route path="/" element={<Home />} />;"
      <Route path="/home" element={<Home />} />;"
      <Route path="/about" element={<About />} />;
      {/* Help Center Routes */}"
      <Route path="/help" element={<HelpCenterPage />} />;"
      <Route path="/support" element={<HelpCenterPage />} />;
      {/* Blog Routes */}"
      <Route path="/blog" element={<Blog />} />;"
      <Route path="/blog/:slug" element={<BlogPost />} />;
      {/* Green IT Route */}"
      <Route path="/green - it" element={<GreenIT />} />;
      {/* Careers Route */}"
      <Route path="/careers" element={<Careers />} />;
      {/* Account Settings */}"
      <Route path="/settings / account" element={<AccountSettings />} />;
      {/* Project Room */}"
      <Route path="/project - room/:project_id" element={<ProjectRoom />} />;
      {/* Video Call */}"
      <Route path="/video - call/:room_id" element={<VideoCall />} />;
      {/* Global Search Route */}"
      <Route path="/search" element={<SearchPage />} />;
{/* Sitemap Page */}
<Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  );
},;
<<<<<<< HEAD

export default ContentRoutes;
export default ContentRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
export default ContentRoutes;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
      <Route path="/sitemap - page" element={<SitemapPage />} />;
    </Routes>);
}
;

},

export default ContentRoutes;
;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
      ;
      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />} />;
      <Route path="/support" element={<HelpCenterPage />} />;
      ;
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />;
      <Route path="/blog/:slug" element={<BlogPost />} />;
      ;
      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />;
      ;
      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />;
;
      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />} />;
      ;
      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />;
      ;
      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />} />;
;
      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      ;
      {/* Sitemap Page */}
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  ),;
},;
;
export default ContentRoutes,; const ContentRoutes = () => {
  return (<Routes> {
  /* Content Routes */ 
}<Route path="/" element= {
  <Home /> 
}/> <Route path="/home" element= {
  <Home /> 
}/> <Route path="/about" element= {
  <About /> 
}/> {
  /* Help Center Routes */ 
}<Route path="/help" element= {
  <HelpCenterPage /> 
}/> <Route path="/support" element= {
  <HelpCenterPage /> 
}/> {
  /* Blog Routes */ 
}<Route path="/blog" element= {
  <Blog /> 
}/> <Route path="/blog/:slug" element= {
  <BlogPost /> 
}/> {
  /* Green IT Route */ 
}<Route path="/green-it" element= {
  <GreenIT /> 
}/> {
  /* Careers Route */ 
}<Route path="/careers" element= {
  <Careers /> 
}/> {
  /* Account Settings */ 
}<Route path="/settings/account" element= {
  <AccountSettings /> 
}/> {
  /* Project Room */ 
}<Route path="/project-room/:projectId" element= {
  <ProjectRoom /> 
}/> {
  /* Video Call */ 
}<Route path="/video-call/:roomId" element= {
  <VideoCall /> 
}/> {
  /* Global Search Route */ 
}<Route path="/search" element= {
  <SearchPage /> 
}/> {
  /* Sitemap Page */ 
}<Route path="/sitemap-page" element= {
  <SitemapPage /> 
}/> 
};
export default ContentRoutes;
export default ContentRoutes;
export default ContentRoutes;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { Fragment } from "react",;
import { Route, Routes, Navigate } from "react-router-dom",;
import Home from "@/pages/Home",;
import About from "@/pages/About",;
import Blog from "@/pages/Blog",;
import BlogPost from "@/pages/BlogPost",;
import GreenIT from "@/pages/GreenIT",;
import Careers from "@/pages/Careers",;
import SearchPage from "@/pages/SearchPage",;
import { SitemapPage } from "@/components/SitemapPage",;
import HelpCenterPage from "@/pages/HelpCenterPage",;
import AccountSettings from "@/pages/AccountSettings",;
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
