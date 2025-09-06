<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import SellerDashboard from '@/pages/SellerDashboard';

export default function SellerRoutes() {
  return (
    <Routes>
      <Route
        path='/dashboard'
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
=======
 <Routes> <Route path="/dashboard" element= {
  <ProtectedRoute> <SellerDashboard /> </ProtectedRoute> 
}/> </Routes>) 
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
