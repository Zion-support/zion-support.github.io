import SellerDashboard from '@/pages/SellerDashboard';

export default function SellerRoutes() {_return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>}
      />
    </Routes>
  );
}
