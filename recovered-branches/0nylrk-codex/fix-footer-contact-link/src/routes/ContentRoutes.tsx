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
=======
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
<<<<<<< HEAD
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  )
=======
}
export default ContentRoutes;

},
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
const ContentRoutes = () => {
const ContentRoutes = () => {;
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
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  );
};
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default ContentRoutes;

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
import VideoCall from "@/pages / VideoCall";
const ContentRoutes = () =>: any {
  return (
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
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
      <Route path="/green - it" element={<GreenIT />} />;
      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />;
      {/* Account Settings */}
      <Route path="/settings / account" element={<AccountSettings />} />;
      {/* Project Room */}
      <Route path="/project - room/:project_id" element={<ProjectRoom />} />;
      {/* Video Call */}
      <Route path="/video - call/:room_id" element={<VideoCall />} />;
      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />;
      {/* Sitemap Page */}
<<<<<<< HEAD
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
=======
      <Route path="/sitemap - page" element={<SitemapPage />} />;
    </Routes>);
}
;

},


export default ContentRoutes;
<<<<<<< HEAD
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
