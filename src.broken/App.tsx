import React, {_Suspense} from 'react';
import './App.css';
import InstallPrompt from "./components/InstallPrompt";
import {_AuthRoutes, _DashboardRoutes, _MarketplaceRoutes, _TalentRoutes, _AdminRoutes, _MobileAppRoutes, _ContentRoutes, _ErrorRoutes, _EnterpriseRoutes, _CommunityRoutes, _DeveloperRoutes, _SellerRoutes} from './routes';
const _Home = React.lazy__(() => import('./pages/Home'));
const _AIMatcherPage = React.lazy__(() => import('./pages/AIMatcher'));
const _TalentDirectory = React.lazy__(() => import('./pages/TalentDirectory'));
const _TalentsPage = React.lazy__(() => import('./pages/TalentsPage'));
const _ServicesPage = React.lazy__(() => import('./pages/ServicesPage'));
const _EquipmentPage = React.lazy__(() => import('./pages/EquipmentPage'));
const _Analytics = React.lazy__(() => import('./pages/Analytics'));
const _MobileLaunchPage = React.lazy__(() => import('./pages/MobileLaunchPage'));
const _CommunityPage = React.lazy__(() => import('./pages/CommunityPage'));
const _Categories = React.lazy__(() => import('./pages/Categories'));
const _Login = React.lazy__(() => import('./pages/Login'));
const _Signup = React.lazy__(() => import('./pages/Signup'));
const _ITOnsiteServicesPage = React.lazy__(() => import('./pages/ITOnsiteServicesPage'));
const _OpenAppRedirect = React.lazy__(() => import('./pages/OpenAppRedirect'));
const _ContactPage = React.lazy__(() => import('./pages/Contact'));
const _AIServicesPage = React.lazy__(() => import('./pages/AIServicesPage'));
const _ITServicesPage = React.lazy__(() => import('./pages/ITServicesPage'));
const _MicroSAASServicesPage = React.lazy__(() => import('./pages/MicroSAASServicesPage'));

const _baseRoutes = [
  {_path: '/', _element: <Home />},
  {_path: '/match', _element: <AIMatcherPage />},
  {_path: '/login', _element: <Login />},
  {_path: '/signup', _element: <Signup />},
  {_path: '/talent', _element: <TalentDirectory />},
  {_path: '/talents', _element: <TalentsPage />},
  {_path: '/services', _element: <ServicesPage />},
  {_path: '/it-onsite-services', _element: <ITOnsiteServicesPage />},
  {_path: '/ai-services', _element: <AIServicesPage />},
  {_path: '/it-services', _element: <ITServicesPage />},
  {_path: '/micro-saas-services', _element: <MicroSAASServicesPage />},
  {_path: '/categories', _element: <Categories />},
  {_path: '/equipment', _element: <EquipmentPage />},
  {_path: '/analytics', _element: <Analytics />},
  {_path: '/mobile-launch', _element: <MobileLaunchPage />},
  {_path: '/open-app', _element: <OpenAppRedirect />},
  {_path: '/community', _element: <CommunityPage />},
  {_path: '/contact', _element: <ContactPage />}];

const _App = () => {_return (_<WhitelabelProvider>
      <ThemeProvider>
        <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
          <Routes>
            {_baseRoutes.map(({ path, _element}) => (
              <Route key={_path} path={_path} element={_element} />
            ))}
            <Route path="/auth/*" element={_<AuthRoutes />} />
            <Route path="/dashboard/*" element={_<DashboardRoutes />} />
            <Route path="/marketplace/*" element={_<MarketplaceRoutes />} />
            <Route path="/talent/*" element={_<TalentRoutes />} />
            <Route path="/admin/*" element={_<AdminRoutes />} />
            <Route path="/mobile/*" element={_<MobileAppRoutes />} />
            <Route path="/content/*" element={_<ContentRoutes />} />
            <Route path="/enterprise/*" element={_<EnterpriseRoutes />} />
            <Route path="/community/*" element={_<CommunityRoutes />} />
            <Route path="/developers/*" element={_<DeveloperRoutes />} />
            <Route path="/seller/*" element={_<SellerRoutes />} />
            <Route path="*" element={_<ErrorRoutes />} />
          </Routes>
        </Suspense>
        <Toaster />
        <SonnerToaster position="top-right" />
        <InstallPrompt />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;
