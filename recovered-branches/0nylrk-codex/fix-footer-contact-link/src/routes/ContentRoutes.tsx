
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
  );
};

export default ContentRoutes;
