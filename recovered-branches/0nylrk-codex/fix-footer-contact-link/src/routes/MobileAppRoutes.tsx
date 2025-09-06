

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path="/download" element={<MobileAppPage />} />
      <Route path="/mobile-app" element={<MobileAppPage />} />
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />
      <Route path="/open-app" element={<OpenAppRedirect />} />
    </Routes>
  )

},


export default MobileAppRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
