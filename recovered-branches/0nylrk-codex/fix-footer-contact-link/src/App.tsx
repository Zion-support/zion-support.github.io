import React, { Suspense } from 'react';
import { Routes, Route  } from 'react-router-dom';
import './App.css',
import { ThemeProvider } from "./components/ThemeProvider",
import { WhitelabelProvider } from "./context/WhitelabelContext",
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { AuthRoutes;
  DashboardRoutes;
  MarketplaceRoutes;
  TalentRoutes;
  AdminRoutes;
  MobileAppRoutes;
  ContentRoutes;
  ErrorRoutes;
  EnterpriseRoutes;
  CommunityRoutes;
  DeveloperRoutes
 } from './routes';
const Home = null;