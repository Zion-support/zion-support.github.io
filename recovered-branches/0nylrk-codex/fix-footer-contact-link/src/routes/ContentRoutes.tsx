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



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
}
=======
  return (
    <Routes>;
      {/* Content Routes */}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default ContentRoutes;

<<<<<<< HEAD
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
=======
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
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
=======
      <Route path="/sitemap - page" element={<SitemapPage />} />;
    </Routes>);
}
;
<<<<<<< HEAD
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default ContentRoutes;
