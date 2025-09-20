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
  
login: loginImpl;
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
title: "Login Failed";
description: data.error || "Email not confirmed. Please check your inbox to verify your email.";
variant: "destructive";
});