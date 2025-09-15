<<<<<<< HEAD
import { RoutesRoute } from 'react-router-dom';
=======
import { Routes, Route } from 'react-router-dom';
>>>>>>> origin/auto/autonomy-17186719616
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
