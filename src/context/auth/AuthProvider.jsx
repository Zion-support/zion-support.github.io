import React, {useEffect} from "react";
;
;
import {AuthContext} from "./AuthContext";
import {cleanupAuthState} from "../../utils/authUtils";
import {useNavigate, useLocation} from 'react-router-dom';
import {useAuthState} from "useAuthState.ts";
import {useAuthEventHandlers} from "useAuthEventHandlers.ts";
import {mapProfileToUser} from "profileMapper.ts";
import {loginUser, registerUser} from "@/services/authService";
import {safeStorage} from "@/utils/safeStorage";
import {toast} from "@/hooks/use-toast"; // Import toast;
import {useDispatch} from 'react-redux';import {addItem} from '@/store/cartSlice';
export const AuthProvider = ("props": "any) => {"}
    const {user, setUser, isLoading, setIsLoading, onboardingStep, setOnboardingStep, tokens, setTokens} = useAuthState();