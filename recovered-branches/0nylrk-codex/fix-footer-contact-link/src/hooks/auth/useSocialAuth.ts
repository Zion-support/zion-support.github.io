
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google"}),
      if (error) {
        toast({
          title: &quot;Google login failed&quot;,
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
export const _useSocialAuth = () => {_const _loginWithGoogle = async () => {
    try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "google"});

      if (error) {_toast({
          title: "Google login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Google login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
    }
  },

  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"}),
      if (error) {
        toast({
          title: &quot;Facebook login failed&quot;,
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})  const _loginWithFacebook = async () => {_try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "facebook"});

      if (error) {_toast({
          title: "Facebook login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Facebook login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
    }
  },

  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"}),
      if (error) {
        toast({
          title: &quot;Twitter login failed&quot;,
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})  const _loginWithTwitter = async () => {_try {
      const { error} = await supabase.auth.signInWithOAuth({_provider: "twitter"});

      if (error) {_toast({
          title: "Twitter login failed", _description: error.message, _variant: "destructive"});
      }
    } catch (error: unknown) {_toast({
        title: "Twitter login failed", _description: error.message || "An unexpected error occurred", _variant: "destructive"});
    }
  },

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
},