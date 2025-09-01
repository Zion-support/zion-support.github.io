<<<<<<< HEAD
import { Navigate, useLocation  } from 'react-router-dom';

export default function Page() {
  if(requireAuth && !isAuthenticated) {
"
    return <Navigate to="/login" state={{ from: location }} replace  />}

  if(roles.length > 0 && user && !roles.includes(user.role || 'user')) {
"
    return <Navigate to="/unauthorized" replace  />}

  return <>{children}</>
}
'"