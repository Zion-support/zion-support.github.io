import React from 'react';
// Next.js routing - no need for react-router-dom
import NotFound from '@/pages/NotFound';
export default function ErrorRoutes() {
  return (
    <Route path="*" element={<NotFound />} />
  );
}