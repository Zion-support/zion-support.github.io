<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
=======
import { RoutesRoute } from 'react-router-dom';
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
import { ProtectedRoute } from '@/components/ProtectedRoute';
import SellerDashboard from '@/pages/SellerDashboard';

export default function SellerRoutes() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
