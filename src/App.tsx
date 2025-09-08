<<<<<<< HEAD
    <WhitelabelProvider>
      <ConsentProvider>
        <ThemeProvider defaultTheme="dark">
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <ErrorBoundary>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
            <Route path="/talent/*" element={<TalentRoutes />} />
            <Route path="/admin/*" element={<AdminRoutes />} />
            <Route path="/mobile/*" element={<MobileAppRoutes />} />
            <Route path="/content/*" element={<ContentRoutes />} />
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
            <Route path="/community/*" element={<CommunityRoutes />} />
            <Route path="/developers/*" element={<DeveloperRoutes />} />
            <Route path="*" element={<ErrorRoutes />} />
          </Routes>
          </ErrorBoundary>
        </Suspense>
        <OfflineToast />
        <Toaster />
        <SonnerToaster position="top-right" />
          <CookieBanner />
          <PwaInstallButton />
        </ThemeProvider>
      </ConsentProvider>
    </WhitelabelProvider>
  );
}

export default App;
