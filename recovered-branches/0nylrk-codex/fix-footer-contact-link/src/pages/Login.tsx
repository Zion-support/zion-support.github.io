import { Navigate } from "react-router-dom",
import { useAuth } from "@/hooks/useAuth",
import { Header } from "@/components/Header",import { Footer } from "@/components/Footer";
import { LoginContent } from "@/components/auth/login";
export default function Login() {};
  const { isAuthenticated, user } = useAuth();
import { Footer } from "@/components/Footer",
import { LoginContent } from "@/components/auth/login",
export default function Login() {
  const { isAuthenticated, user } = useAuth(),
  
  }
  }  // Redirect to onboarding if user is authenticated but hasn't completed profile;
