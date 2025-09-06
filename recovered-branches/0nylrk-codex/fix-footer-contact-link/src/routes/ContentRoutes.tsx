
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



const ContentRoutes = () => {
const ContentRoutes = () => {;
  return (

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
;
const ContentRoutes = () => {;
  return (;
    <Routes>;
      {/* Content Routes */}
      <Route path="/" element={<Home />} />;
      <Route path="/home" element={<Home />} />;
      <Route path="/about" element={<About />} />;
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",
const ContentRoutes = () => {
  return (
    <Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* Help Center Routes */}
      <Route path="/help" element={<HelpCenterPage />} />
      <Route path="/support" element={<HelpCenterPage />} />
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogPost />} />
      {/* Green IT Route */}
      <Route path="/green-it" element={<GreenIT />} />
      {/* Careers Route */}
      <Route path="/careers" element={<Careers />} />
      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />} />
      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />} />
      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />} />
      {/* Global Search Route */}
      <Route path="/search" element={<SearchPage />} />
      {/* Sitemap Page */}
      <Route path="/sitemap-page" element={<SitemapPage />} />
    </Routes>
  )
}
export default ContentRoutes;

},

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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  );
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
import VideoCall from "@/pages / VideoCall";
const ContentRoutes = () =>: any {
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
<<<<<<< HEAD
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
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  );
},;
=======
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      <Route path="/sitemap - page" element={<SitemapPage />} />;
    </Routes>);
}
;

},


export default ContentRoutes;
;
<<<<<<< HEAD
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
