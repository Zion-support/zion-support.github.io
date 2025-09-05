<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import SellerDashboard from '@/pages/SellerDashboard',;
;
export default function SellerRoutes() {;
  return (;
    <Routes>;
      <Route;
        path="/dashboard";
        element={;
          <ProtectedRoute>;
            <SellerDashboard />;
          </ProtectedRoute>;
        }
      />;
    </Routes>;
  ),;
=======
import { Routes, Route } from 'react-router-dom',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import SellerDashboard from '@/pages/SellerDashboard',
export default function SellerRoutes() {
  return (    <Routes>
      <Route
        path=&quot;/dashboard&quot;
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>}
      />
    </Routes>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
