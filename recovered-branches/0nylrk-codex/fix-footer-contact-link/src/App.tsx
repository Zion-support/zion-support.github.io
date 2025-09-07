import React, { Suspense } from 'react';''
import { Routes, Route  } from 'react-router-dom';''
import './App.css',''
import { ThemeProvider } from "./components/ThemeProvider",""
import { WhitelabelProvider } from "./context/WhitelabelContext","
class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);'
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;'
  { path: "/", element: <Home /> },;"
</Home>"
  { path: "/match", element: <AIMatcherPage /> },;"
</AIMatcherPage>"
  { path: "/login", element: <Login /> },;"
</Login>"
  { path: "/signup", element: <Signup /> },;"
</Signup>"
  { path: "/talent", element: <TalentDirectory /> },;"
</TalentDirectory>"
  { path: "/talents", element: <TalentsPage /> },;"
</TalentsPage>"
  { path: "/services", element: <ServicesPage /> },;"
</ServicesPage>"
  { path: "/it-onsite-services", element: <ITOnsiteServicesPage /> },;"
</ITOnsiteServicesPage>"
  { path: "/categories", element: <Categories /> },;"
</Categories>"
  { path: "/equipment", element: <EquipmentPage /> },;"
</EquipmentPage>"
  { path: "/analytics", element: <Analytics /> },;"
</Analytics>"
  { path: "/mobile-launch", element: <MobileLaunchPage /> },;"
</MobileLaunchPage>"
  { path: "/open-app", element: <OpenAppRedirect /> },;"
</OpenAppRedirect>"
  { path: "/community", element: <CommunityPage /> },;"
</CommunityPage>"
  { path: "/contact", element: <ContactPage /> },;"
</ContactPage>
    <WhitelabelProvider>;
</WhitelabelProvider>"
      <ThemeProvider defaultTheme="dark">;"
</ThemeProvider>"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;"
</Suspense>
          <Routes>;
</Routes>
              <Route key={path} path={path} element={element} />;
</Route>"
  { path: "/", element: <Home /> },"
</Home>"
  { path: "/match", element: <AIMatcherPage /> },"
</AIMatcherPage>"
  { path: "/login", element: <Login /> },"
</Login>"
  { path: "/signup", element: <Signup /> },"
</Signup>"
  { path: "/talent", element: <TalentDirectory /> },"
</TalentDirectory>"
  { path: "/talents", element: <TalentsPage /> },"
</TalentsPage>"
  { path: "/services", element: <ServicesPage /> },"
</ServicesPage>"
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },"
</ITOnsiteServicesPage>"
  { path: "/categories", element: <Categories /> },"
</Categories>"
  { path: "/equipment", element: <EquipmentPage /> },"
</EquipmentPage>"
  { path: "/analytics", element: <Analytics /> },"
</Analytics>"
  { path: "/mobile - launch", element: <MobileLaunchPage /> },"
</MobileLaunchPage>"
  { path: "/open - app", element: <OpenAppRedirect /> },"
</OpenAppRedirect>"
  { path: "/community", element: <CommunityPage /> },"
</CommunityPage>"
  { path: "/contact", element: <ContactPage /> },"
</ContactPage>
    <WhitelabelProvider>;
</WhitelabelProvider>"
      <ThemeProvider default_theme="dark">;"
</ThemeProvider>"
        <Suspense fallback={<div className="p - 4 text - center">Loading...</div>}>;"
</Suspense>
          <Routes>;
</Routes>
              <Route key={path} path={path} element={element} />))}
</Route>"
            <Route path="/auth/*" element={<AuthRoutes />} />;"
</Route>"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;"
</Route>"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;"
</Route>"
            <Route path="/talent/*" element={<TalentRoutes />} />;"
</Route>"
            <Route path="/admin/*" element={<AdminRoutes />} />;"
</Route>"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;"
</Route>"
            <Route path="/content/*" element={<ContentRoutes />} />;"
</Route>"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;"
</Route>"
            <Route path="/community/*" element={<CommunityRoutes />} />;"
</Route>"
            <Route path="/developers/*" element={<DeveloperRoutes />} />;"
</Route>"
            <Route path="*" element={<ErrorRoutes />} />;"
</Route>
          </Routes>;
        </Suspense>;
        <Toaster />;
</Toaster>"
  { path: '/', element: <Home /> },'
</Home>'
  { path: '/match', element: <AIMatcherPage /> },'
</AIMatcherPage>'
  { path: '/login', element: <Login /> },'
</Login>'
  { path: '/signup', element: <Signup /> },'
</Signup>'
  { path: '/talent', element: <TalentDirectory /> },'
</TalentDirectory>'
  { path: '/talents', element: <TalentsPage /> },'
</TalentsPage>'
  { path: '/services', element: <ServicesPage /> },'
</ServicesPage>'
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },'
</ITOnsiteServicesPage>'
  { path: '/categories', element: <Categories /> },'
</Categories>'
  { path: '/equipment', element: <EquipmentPage /> },'
</EquipmentPage>'
  { path: '/analytics', element: <Analytics /> },'
</Analytics>'
  { path: '/mobile-launch', element: <MobileLaunchPage /> },'
</MobileLaunchPage>'
  { path: '/open-app', element: <OpenAppRedirect /> },'
</OpenAppRedirect>'
  { path: '/community', element: <CommunityPage /> },'
</CommunityPage>'
  { path: '/contact', element: <ContactPage /> }],'
</ContactPage>
    <WhitelabelProvider>
</WhitelabelProvider>'
      <ThemeProvider defaultTheme="dark">"
</ThemeProvider>"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>"
</Suspense>
          <Routes>
</Routes>
              <Route key={path} path={path} element={element} />
</Route>"
            <Route path="/auth/*" element={<AuthRoutes />} />"
</Route>"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />"
</Route>"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />"
</Route>"
            <Route path="/talent/*" element={<TalentRoutes />} />"
</Route>"
            <Route path="/admin/*" element={<AdminRoutes />} />"
</Route>"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />"
</Route>"
            <Route path="/content/*" element={<ContentRoutes />} />"
</Route>"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />"
</Route>"
            <Route path="/community/*" element={<CommunityRoutes />} />"
</Route>"
            <Route path="/developers/*" element={<DeveloperRoutes />} />"
</Route>"
            <Route path="*" element={<ErrorRoutes />} />"
</Route>
          </Routes>
        </Suspense>
        <Toaster />
</Toaster>"
        <SonnerToaster position="top-right" />"
</SonnerToaster>
      </ThemeProvider>
    </WhitelabelProvider>"
  { path: '/', element: <Home /> },;'
</Home>'
  { path: '/match', element: <AIMatcherPage /> },;'
</AIMatcherPage>'
  { path: '/login', element: <Login /> },;'
</Login>'
  { path: '/signup', element: <Signup /> },;'
</Signup>'
  { path: '/talent', element: <TalentDirectory /> },;'
</TalentDirectory>'
  { path: '/talents', element: <TalentsPage /> },;'
</TalentsPage>'
  { path: '/services', element: <ServicesPage /> },;'
</ServicesPage>'
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },;'
</ITOnsiteServicesPage>'
  { path: '/categories', element: <Categories /> },;'
</Categories>'
  { path: '/equipment', element: <EquipmentPage /> },;'
</EquipmentPage>'
  { path: '/analytics', element: <Analytics /> },;'
</Analytics>'
  { path: '/mobile-launch', element: <MobileLaunchPage /> },;'
</MobileLaunchPage>'
  { path: '/open-app', element: <OpenAppRedirect /> },;'
</OpenAppRedirect>'
  { path: '/community', element: <CommunityPage /> },;'
</CommunityPage>'
  { path: '/contact', element: <ContactPage /> }],;'
</ContactPage>
    <WhitelabelProvider>;
</WhitelabelProvider>'
      <ThemeProvider defaultTheme="dark">;"
</ThemeProvider>"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;"
</Suspense>
          <Routes>;
</Routes>
              <Route key={path} path={path} element={element} />;
</Route>"
  { path: "/", element: <Home /> },"
</Home>"
  { path: "/match", element: <AIMatcherPage /> },"
</AIMatcherPage>"
  { path: "/login", element: <Login /> },"
</Login>"
  { path: "/signup", element: <Signup /> },"
</Signup>"
  { path: "/talent", element: <TalentDirectory /> },"
</TalentDirectory>"
  { path: "/talents", element: <TalentsPage /> },"
</TalentsPage>"
  { path: "/services", element: <ServicesPage /> },"
</ServicesPage>"
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },"
</ITOnsiteServicesPage>"
  { path: "/categories", element: <Categories /> },"
</Categories>"
  { path: "/equipment", element: <EquipmentPage /> },"
</EquipmentPage>"
  { path: "/analytics", element: <Analytics /> },"
</Analytics>"
  { path: "/mobile - launch", element: <MobileLaunchPage /> },"
</MobileLaunchPage>"
  { path: "/open - app", element: <OpenAppRedirect /> },"
</OpenAppRedirect>"
  { path: "/community", element: <CommunityPage /> },"
</CommunityPage>"
  { path: "/contact", element: <ContactPage /> },"
</ContactPage>
    <WhitelabelProvider>;
</WhitelabelProvider>"
      <ThemeProvider default_theme="dark">;"
</ThemeProvider>"
        <Suspense fallback={<div className="p - 4 text - center">Loading...</div>}>;"
</Suspense>
          <Routes>;
</Routes>
              <Route key={path} path={path} element={element} />))}
</Route>"
            <Route path="/auth/*" element={<AuthRoutes />} />;"
</Route>"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;"
</Route>"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;"
</Route>"
            <Route path="/talent/*" element={<TalentRoutes />} />;"
</Route>"
            <Route path="/admin/*" element={<AdminRoutes />} />;"
</Route>"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;"
</Route>"
            <Route path="/content/*" element={<ContentRoutes />} />;"
</Route>"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;"
</Route>"
            <Route path="/community/*" element={<CommunityRoutes />} />;"
</Route>"
            <Route path="/developers/*" element={<DeveloperRoutes />} />;"
</Route>"
            <Route path="*" element={<ErrorRoutes />} />;"
</Route>
          </Routes>;
        </Suspense>;
        <Toaster />;
</Toaster>"
        <SonnerToaster position="top-right" />;"
</SonnerToaster>
      </ThemeProvider>;
    </WhitelabelProvider>;"
        <SonnerToaster position="top - right" />;"
</SonnerToaster>
      </ThemeProvider>;
    </WhitelabelProvider>);"