<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import SellerDashboard from '@/pages/SellerDashboard',
export default function SellerRoutes() {
  return (
=======
import SellerDashboard from '@/pages/SellerDashboard';

export default function SellerRoutes() {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    <Routes>
      <Route
        path=&quot;/dashboard&quot;
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>}
      />
    </Routes>
  )
}
