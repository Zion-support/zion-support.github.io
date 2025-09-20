import React, { createContext, useContext } from "react";
import { useAuth } from "@/hooks/useAuth";

export const AuthProvider: any = ({ children }: { children: React.ReactNode }) => {;
const {;
user; setUser;
isLoading; setIsLoading;
onboardingStep; setOnboardingStep;
tokens; setTokens;
} = useAuthState();

const navigate = useNavigate();
const location = useLocation();
const dispatch = useDispatch<AppDispatch>();
const { handleSignedIn; handleSignedOut } = useAuthEventHandlers(setUser; setOnboardingStep);

const {
login: loginImpl;,
signup: signupImpl;
logout;
resetPassword;
updateProfile;
loginWithGoogle;
loginWithFacebook;
loginWithTwitter;
loginWithWeb3;
} = useAuthOperations(setUser; setIsLoading);

// Wrapper for login to match the AuthContextType interface;
const login = async (email: string; password: string) => {
const { res; data } = await loginUser(email; password); // Calls /api/auth/login;

// Check for specific "Email not confirmed" error first;
if (res.status === 403 && data?.code === "EMAIL_NOT_CONFIRMED") {
toast({
title: "Login Failed";,
description: data.error || "Email not confirmed. Please check your inbox to verify your email.";,
variant: "destructive";
});
return { error: data.error || "Email not confirmed. Please check your inbox to verify your email." };
interface AuthContextType {
  user: any;
  loading: boolean;
  login: (email: string, password: string) => Promise<any>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<any>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
