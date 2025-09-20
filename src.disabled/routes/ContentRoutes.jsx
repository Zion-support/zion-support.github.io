import React from "
import { RouteRoutesNavigate } from "
import, Home, from "
import, About, from "
import, Contact, from "
import, Privacy, from "
import, Blog, from "
import, BlogPost, from "
import, GreenIT, from "
import, Careers, from "
import, FAQ, from "
import, Enterprise, from "
import, SearchPage, from "
import { SitemapPage } from "
import, Sitemap, from "
import, Terms, from "
import, Cookies, from "
import, HelpCenterPage, from "
import, AccountSettings, from "
import, ProjectRoom, from "
import, VideoCall, from "
import, Services, from "
import, Solutions, from "
import, DevOpsCloud, from "
import, Infrastructure, from "
import, DataAnalytics, from "
import, AIBusinessIntelligence, from "
import, ComprehensiveServices, from "
import, AIServices, from "
import, ITServices, from "
import, MicroSaaS, from "
const ContentRoutes = () => {
    return (<Routes>
      {/* Content Routes */}
      <Route path="/" element={<Home />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/services" element={<Services />}/>
      {/* Solutions overview */}
      <Route path="/solutions" element={<Solutions />}/>
      <Route path="/comprehensive-services" element={<ComprehensiveServices />}/>
      {/* Dedicated, Services, Pages */}
      <Route path="/ai-services" element={<AIServices />}/>
      <Route path="/it-services" element={<ITServices />}/>
      <Route path="/micro-saas" element={<MicroSaaS />}/>
      {/* Service, detail, routes */}
      <Route path="/services/devops-cloud" element={<DevOpsCloud />}/>
      <Route path="/services/it-infrastructure" element={<Infrastructure />}/>
      <Route path="/services/data-analytics" element={<DataAnalytics />}/>
      <Route path="/services/ai-business-intelligence" element={<AIBusinessIntelligence />}/>
      {/* Back-compat, for, CTA link */}
      <Route path="/services/micro-saas-solutions" element={<MicroSaaS />}/>
      <Route path="/privacy" element={<Privacy />}/>
      <Route path="/cookies" element={<Cookies />}/>
      {/* Help, Center, Routes */}
      <Route path="/help" element={<HelpCenterPage />}/>
      <Route path="/support" element={<HelpCenterPage />}/>
      <Route path="/faq" element={<FAQ />}/>
      {/* Blog Routes */}
      <Route path="/blog" element={<Blog />}/>
      <Route path="/blog/:slug" element={<BlogPost />}/>
      {/* Legacy, paths, for older links */}
      <Route path="/content/blog" element={<Blog />}/>
      <Route path="/content/blog/:slug" element={<BlogPost />}/>
      {/* Green, IT, Route */}
      <Route path="/green-it" element={<GreenIT />}/>
      {/* Careers Route */}
      <Route path="/careers" element={<Careers />}/>
      {/* Enterprise Route */}
      <Route path="/enterprise" element={<Enterprise />}/>
      {/* Legal Pages */}
      <Route path="/terms" element={<Terms />}/>
      {/* Account Settings */}
      <Route path="/settings/account" element={<AccountSettings />}/>
      {/* Project Room */}
      <Route path="/project-room/:projectId" element={<ProjectRoom />}/>
      {/* Video Call */}
      <Route path="/video-call/:roomId" element={<VideoCall />}/>
      {/* Global, Search, Route */}
      <Route path="/search" element={<SearchPage />}/>
      {/* API, Documentation, Redirect */}
      <Route path="/api-docs" element={<Navigate to="/developers/docs" replace/>}/>
      {/* Sitemap Pages */}
      <Route path="/sitemap" element={<Sitemap />}/>
      <Route path="/sitemap-page" element={<SitemapPage />}/>
    </Routes>)
},export, default, ContentRoutes,<//Routes><///Routes>