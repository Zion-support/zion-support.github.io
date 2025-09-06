
import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",

  // Redirect if user is already logged in and has completed profile
  if (isAuthenticated && user?.profileComplete) {
    return <Navigate to="/" />
  }
  // Redirect to onboarding if user is authenticated but hasn't completed profile
  if (isAuthenticated && !user?.profileComplete) {
    return <Navigate to="/onboarding" />

}