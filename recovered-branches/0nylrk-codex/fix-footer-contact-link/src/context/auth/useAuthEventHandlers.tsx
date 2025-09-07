



import {toast} from "@/hooks/use-toast";""
import type { UserProfile } from "@/types/auth";""
import {checkNewRegistration} from "@/utils/authUtils";""
import {useNavigate} from 'react-router-dom';
import { toast } from "@/hooks/use-toast",""
import { checkNewRegistration } from "@/utils/authUtils";""
import { useNavigate } from 'react-router-dom';
import type { UserProfile } from "@/types/auth",""
import { checkNewRegistration } from "@/utils/authUtils",""
import { useNavigate } from 'react-router-dom',
/**
 * Custom hook for auth event handling;
 */
export function useAuthEventHandlers(

  setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>

  setOnboardingStep: React.Dispatch<React.SetStateAction<string | null>>

  setUser: React && React.Dispatch<React && React.SetStateAction<UserProfile | null>>,;

  setOnboardingStep: React && React.Dispatch<React && React.SetStateAction<string | null>>;



  setUser:React.Dispatch<React.SetStateAction<UserProfile | null>>,;

  setOnboardingStep:React.Dispatch<React.SetStateAction<string | null>>;
)