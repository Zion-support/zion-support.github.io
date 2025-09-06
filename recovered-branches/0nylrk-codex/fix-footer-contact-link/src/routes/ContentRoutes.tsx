


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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

},


export default ContentRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
