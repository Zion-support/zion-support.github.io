
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";
import { cleanupAuthState } from "@/utils/authUtils";

export const useEmailAuth = (
  setUser: (user: UserProfile | null) => void,
  setIsLoading: (loading: boolean) => void
) => {
  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      setIsLoading(true);
      // Clean up any stale auth state before login
      cleanupAuthState();
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
