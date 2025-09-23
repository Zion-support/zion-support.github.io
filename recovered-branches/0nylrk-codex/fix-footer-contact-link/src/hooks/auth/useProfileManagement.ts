
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import type { UserProfile } from "@/types/auth";

export const useProfileManagement = (setIsLoading: (loading: boolean) => void) => {
  const updateProfile = async (data: Partial<UserProfile>) => {
    try {
      setIsLoading(true);

      if (!data.id) {
        return { error: "User ID is required" };
      }

      // Update user metadata
      const { error: authError } = await supabase.auth.updateUser({
        data: {
          display_name: data.displayName,
          user_type: data.userType,
