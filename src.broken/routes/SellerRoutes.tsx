<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import SellerDashboard from '@/pages/SellerDashboard',
export default function SellerRoutes() {
  return (
    <Routes>
      <Route
        path=&quot;/dashboard&quot;
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>
=======
import { Routes, Route } from 'react-router-dom',;
import { ProtectedRoute } from '@/components/ProtectedRoute',;
import SellerDashboard from '@/pages/SellerDashboard';
export default function SellerRoutes() {;
  return (;
    <Routes>;
      <Route;
        path="/dashboard";
        element={;
          <ProtectedRoute>;
            <SellerDashboard />;
          </ProtectedRoute>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
        }
      />;
    </Routes>;
  );
}
;