<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from '@/components/ProtectedRoute';
import SellerDashboard from '@/pages/SellerDashboard';
}

=======
import { Routes, Route } from 'react-router-dom',
import { ProtectedRoute } from '@/components/ProtectedRoute',
import SellerDashboard from '@/pages/SellerDashboard',
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function SellerRoutes() {
  return (
    <Routes>
      <Route
<<<<<<< HEAD
        path='/dashboard'
=======
        path="/dashboard"
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
        element={
          <ProtectedRoute>
            <SellerDashboard />
          </ProtectedRoute>
        }
<<<<<<< HEAD
      />
    </Routes>
  );
=======
      />;
    </Routes>;
  );
}
;
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
