import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from './components/ThemeProvider';
import { WhitelabelProvider } from './context/WhitelabelContext';
import { Toaster } from './components/ui/toaster';
import { Toaster as SonnerToaster } from './components/ui/sonner';
import InstallPrompt from './components/InstallPrompt';
import {
  AuthRoutes,
  DashboardRoutes,
  MarketplaceRoutes,
  TalentRoutes,
  AdminRoutes,
  MobileAppRoutes,
  ContentRoutes,
  ErrorRoutes,
  EnterpriseRoutes,
  CommunityRoutes,
  DeveloperRoutes,
  SellerRoutes
} from './routes',
const Home = $2;
const AIMatcherPage = $2;
const TalentDirectory = $2;
const TalentsPage = $2;
const ServicesPage = $2;
const EquipmentPage = $2;
const Analytics = $2;
const MobileLaunchPage = $2;
const CommunityPage = $2;
const Categories = $2;
const Login = $2;
const Signup = $2;
const ITOnsiteServicesPage = $2;
const OpenAppRedirect = $2;
const ContactPage = $2;
const AIServicesPage = $2;
const ITServicesPage = $2;
const MicroSAASServicesPage = $2;
const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/it-services', element: <ITServicesPage /> },
  { path: '/micro-saas-services', element: <MicroSAASServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> }],

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Suspense fallback={<div className='p-4 text-center'>Loading...</div>}>
          <Routes>
            {baseRoutes.map(({ path, element }) => (
              <Route key = $2;
export default App,
