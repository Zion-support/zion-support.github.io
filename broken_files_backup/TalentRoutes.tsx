<<<<<<< HEAD
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import TalentDirectory from "../pages/TalentDirectory";
import TalentsPage from "../pages/TalentsPage";
import SavedTalentsPage from "../pages/SavedTalentsPage";
import CreateTalentProfile from "../pages/CreateTalentProfile";
import ProfilePage from "../pages/ProfilePage";
=======
import React from 'react';
// Next.js routing - no need for react-router-dom
import TalentDirectory from '@/pages/TalentDirectory';
import TalentsPage from '@/pages/TalentsPage';
>>>>>>> origin/main

const TalentProfilePage = React.lazy(() => import("../pages/TalentProfilePage"));

const TalentRoutes = () => {
=======
import React from 'react';
import { Route } from 'react-router-dom';
import TalentDirectory from '@/pages/TalentDirectory';
import TalentsPage from '@/pages/TalentsPage';
export default function TalentRoutes() {
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-8896:broken_files_backup/TalentRoutes.tsx
  return (
    <Routes>
      {/* Talent Routes */}
      <Route path="/talent" element={<TalentDirectory />} />
      <Route path="/talents" element={<TalentsPage />} />
      <Route
        path="/talent/:id"
        element={
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
            <ErrorBoundary fallback={<div className="p-4 text-center">Profile not found</div>}>
              <TalentProfilePage />
            </ErrorBoundary>
          </Suspense>
        }
      />
      <Route 
        path="/saved-talents" 
        element={
          <ProtectedRoute>
            <SavedTalentsPage />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/create-talent-profile" 
        element={
          <ProtectedRoute>
            <CreateTalentProfile />
          </ProtectedRoute>
        } 
      />
      <Route path="/profile/:id" element={<ProfilePage />} />
    </Routes>
  );
}