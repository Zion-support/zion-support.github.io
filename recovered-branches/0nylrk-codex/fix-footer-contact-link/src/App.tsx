import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",""
import { WhitelabelProvider } from "./context/WhitelabelContext","
class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  
  componentDidCatch(error, errorInfo) {"
    console.error('Error caught by boundary:', error, errorInfo);
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
  { path: "/", element: <Home /> },;"
"
  { path: "/match", element: <AIMatcherPage /> },;"
  { path: "/login", element: <Login /> },;"
  { path: "/signup", element: <Signup /> },;"
  { path: "/talent", element: <TalentDirectory /> },;"
  { path: "/talents", element: <TalentsPage /> },;"
  { path: "/services", element: <ServicesPage /> },;"
  { path: "/it-onsite-services", element: <ITOnsiteServicesPage /> },;"
  { path: "/categories", element: <Categories /> },;"
  { path: "/equipment", element: <EquipmentPage /> },;"
  { path: "/analytics", element: <Analytics /> },;"
  { path: "/mobile-launch", element: <MobileLaunchPage /> },;"
  { path: "/open-app", element: <OpenAppRedirect /> },;"
  { path: "/community", element: <CommunityPage /> },;"
  { path: "/contact", element: <ContactPage /> },;"

    <WhitelabelProvider>;
      <ThemeProvider defaultTheme="dark">;"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>;"

          <Routes>;

              <Route key={path} path={path} element={element} />;
  { path: "/", element: <Home /> },"
  { path: "/match", element: <AIMatcherPage /> },"
  { path: "/login", element: <Login /> },"
  { path: "/signup", element: <Signup /> },"
  { path: "/talent", element: <TalentDirectory /> },"
  { path: "/talents", element: <TalentsPage /> },"
  { path: "/services", element: <ServicesPage /> },"
  { path: "/it - onsite - services", element: <ITOnsiteServicesPage /> },"
  { path: "/categories", element: <Categories /> },"
  { path: "/equipment", element: <EquipmentPage /> },"
  { path: "/analytics", element: <Analytics /> },"
  { path: "/mobile - launch", element: <MobileLaunchPage /> },"
  { path: "/open - app", element: <OpenAppRedirect /> },"
  { path: "/community", element: <CommunityPage /> },"
  { path: "/contact", element: <ContactPage /> },"

      <ThemeProvider default_theme="dark">;"
        <Suspense fallback={<div className="p - 4 text - center">Loading...</div>}>;"


              <Route key={path} path={path} element={element} />))}
            <Route path="/auth/*" element={<AuthRoutes />} />;"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />;"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />;"
            <Route path="/talent/*" element={<TalentRoutes />} />;"
            <Route path="/admin/*" element={<AdminRoutes />} />;"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />;"
            <Route path="/content/*" element={<ContentRoutes />} />;"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />;"
            <Route path="/community/*" element={<CommunityRoutes />} />;"
            <Route path="/developers/*" element={<DeveloperRoutes />} />;"
            <Route path="*" element={<ErrorRoutes />} />;"

          ;
        <Toaster />;
  { path: '/', element: <Home /> },

  { path: '/match', element: <AIMatcherPage /> },

  { path: '/login', element: <Login /> },

  { path: '/signup', element: <Signup /> },

  { path: '/talent', element: <TalentDirectory /> },

  { path: '/talents', element: <TalentsPage /> },

  { path: '/services', element: <ServicesPage /> },

  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },

  { path: '/categories', element: <Categories /> },

  { path: '/equipment', element: <EquipmentPage /> },

  { path: '/analytics', element: <Analytics /> },

  { path: '/mobile-launch', element: <MobileLaunchPage /> },

  { path: '/open-app', element: <OpenAppRedirect /> },

  { path: '/community', element: <CommunityPage /> },

  { path: '/contact', element: <ContactPage /> }],

    <WhitelabelProvider>

      <ThemeProvider defaultTheme="dark">"
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>"

          <Routes>

              <Route key={path} path={path} element={element} />
            <Route path="/auth/*" element={<AuthRoutes />} />"
            <Route path="/dashboard/*" element={<DashboardRoutes />} />"
            <Route path="/marketplace/*" element={<MarketplaceRoutes />} />"
            <Route path="/talent/*" element={<TalentRoutes />} />"
            <Route path="/admin/*" element={<AdminRoutes />} />"
            <Route path="/mobile/*" element={<MobileAppRoutes />} />"
            <Route path="/content/*" element={<ContentRoutes />} />"
            <Route path="/enterprise/*" element={<EnterpriseRoutes />} />"
            <Route path="/community/*" element={<CommunityRoutes />} />"
            <Route path="/developers/*" element={<DeveloperRoutes />} />"
            <Route path="*" element={<ErrorRoutes />} />"

          
        
        <Toaster />
        <SonnerToaster position="top-right" />"

      
  { path: '/', element: <Home /> },;

  { path: '/match', element: <AIMatcherPage /> },;

  { path: '/login', element: <Login /> },;

  { path: '/signup', element: <Signup /> },;

  { path: '/talent', element: <TalentDirectory /> },;

  { path: '/talents', element: <TalentsPage /> },;

  { path: '/services', element: <ServicesPage /> },;

  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },;

  { path: '/categories', element: <Categories /> },;

  { path: '/equipment', element: <EquipmentPage /> },;

  { path: '/analytics', element: <Analytics /> },;

  { path: '/mobile-launch', element: <MobileLaunchPage /> },;

  { path: '/open-app', element: <OpenAppRedirect /> },;

  { path: '/community', element: <CommunityPage /> },;

  { path: '/contact', element: <ContactPage /> }],;








        <SonnerToaster position="top-right" />;"

    ;"
        <SonnerToaster position="top - right" />;"

    );"