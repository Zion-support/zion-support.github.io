

import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

=======
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

        provider: "google"}),


      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({

        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  },

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"}),

      if (error) {
        toast({
          title: "Facebook login failed",
          description: error.message,

          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({

        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  },

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"}),

      if (error) {
        toast({
          title: "Twitter login failed",
          description: error.message,

          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({

        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
