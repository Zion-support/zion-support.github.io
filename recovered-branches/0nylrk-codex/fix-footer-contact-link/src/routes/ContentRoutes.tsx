
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx

=======
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD

=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const ContentRoutes = () => {
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx
const ContentRoutes = () => {;
  return (
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
import ProjectRoom from "@/pages/ProjectRoom",;
import VideoCall from "@/pages/VideoCall",;
;
const ContentRoutes = () => {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Routes>;
      {/* Content Routes */}
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx

========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx
      <Route path="/" element={<Home />} />;
      <Route path="/home" element={<Home />} />;
      <Route path="/about" element={<About />} />;
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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

<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
=======
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  );
};
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx


========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <Route path="/sitemap-page" element={<SitemapPage />} />;
    </Routes>;
  );
},;
<<<<<<< HEAD
<<<<<<< HEAD

export default ContentRoutes;

=======
      <Route path="/sitemap - page" element={<SitemapPage />} />;
    </Routes>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ContentRoutes;
;
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/routes/ContentRoutes.tsx
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ContentRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
export default ContentRoutes;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
