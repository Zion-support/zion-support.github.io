
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
import ProjectRoom from "@/pages/ProjectRoom",
import VideoCall from "@/pages/VideoCall",const ContentRoutes = () => {
  return (
    <Routes>
      {/* Content Routes */}
      <Route path=&quot;/&quot; element={<Home />} />
      <Route path=&quot;/home&quot; element={<Home />} />
      <Route path=&quot;/about&quot; element={<About />} />
      
      {/* Help Center Routes */}
      <Route path=&quot;/help&quot; element={<HelpCenterPage />} />
      <Route path=&quot;/support&quot; element={<HelpCenterPage />} />
      
      {/* Blog Routes */}
      <Route path=&quot;/blog&quot; element={<Blog />} />
      <Route path=&quot;/blog/:slug&quot; element={<BlogPost />} />
      
      {/* Green IT Route */}
      <Route path=&quot;/green-it&quot; element={<GreenIT />} />
      
      {/* Careers Route */}
      <Route path=&quot;/careers&quot; element={<Careers />} />

      {/* Account Settings */}
      <Route path=&quot;/settings/account&quot; element={<AccountSettings />} />
      
      {/* Project Room */}
      <Route path=&quot;/project-room/:projectId&quot; element={<ProjectRoom />} />
      
      {/* Video Call */}
      <Route path=&quot;/video-call/:roomId&quot; element={<VideoCall />} />

      {/* Global Search Route */}
      <Route path=&quot;/search&quot; element={<SearchPage />} />
      
      {/* Sitemap Page */}
      <Route path=&quot;/sitemap-page&quot; element={<SitemapPage />} />
import Home from "@/pages/Home";
import About from "@/pages/About";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import GreenIT from "@/pages/GreenIT";
import Careers from "@/pages/Careers";
import SearchPage from "@/pages/SearchPage";
import HelpCenterPage from "@/pages/HelpCenterPage";
import AccountSettings from "@/pages/AccountSettings";
import ProjectRoom from "@/pages/ProjectRoom";
import VideoCall from "@/pages/VideoCall";

const _ContentRoutes = () => {_return (
    <Routes>
      {/* Content Routes */}
      <Route path="/" element={_<Home />} />
      <Route path="/home" element={_<Home />} />
      <Route path="/about" element={_<About />} />
      
      {_/* Help Center Routes */}
      <Route path="/help" element={_<HelpCenterPage />} />
      <Route path="/support" element={_<HelpCenterPage />} />
      
      {_/* Blog Routes */}
      <Route path="/blog" element={_<Blog />} />
      <Route path="/blog/:slug" element={_<BlogPost />} />
      
      {_/* Green IT Route */}
      <Route path="/green-it" element={_<GreenIT />} />
      
      {_/* Careers Route */}
      <Route path="/careers" element={_<Careers />} />

      {_/* Account Settings */}
      <Route path="/settings/account" element={_<AccountSettings />} />
      
      {_/* Project Room */}
      <Route path="/project-room/:projectId" element={_<ProjectRoom />} />
      
      {_/* Video Call */}
      <Route path="/video-call/:roomId" element={_<VideoCall />} />

      {_/* Global Search Route */}
      <Route path="/search" element={_<SearchPage />} />
      
      {_/* Sitemap Page */}
      <Route path="/sitemap-page" element={_<SitemapPage />} />
    </Routes>
  )
},

export default ContentRoutes,
