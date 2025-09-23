<<<<<<< HEAD
=======
import { RoutesRoute } from 'react-router-dom';
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
>>>>>>> 8f0785411043 (chore: auto-resolve merge conflicts (keep incoming))
