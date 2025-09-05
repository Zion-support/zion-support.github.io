
<<<<<<< HEAD
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
import VideoCall from "@/pages/VideoCall",
=======
import { Fragment } from &quot;react&quot;;
import { Route, Routes, Navigate } from &quot;react-router-dom&quot;;
import Home from &quot;@/pages/Home&quot;;
import About from &quot;@/pages/About&quot;;
import Blog from &quot;@/pages/Blog&quot;;
import BlogPost from &quot;@/pages/BlogPost&quot;;
import GreenIT from &quot;@/pages/GreenIT&quot;;
import Careers from &quot;@/pages/Careers&quot;;
import SearchPage from &quot;@/pages/SearchPage&quot;;
import { SitemapPage } from &quot;@/components/SitemapPage&quot;;
import HelpCenterPage from &quot;@/pages/HelpCenterPage&quot;;
import AccountSettings from &quot;@/pages/AccountSettings&quot;;
import ProjectRoom from &quot;@/pages/ProjectRoom&quot;;
import VideoCall from &quot;@/pages/VideoCall&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const ContentRoutes = () => {
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
    </Routes>
  )
},

export default ContentRoutes,
