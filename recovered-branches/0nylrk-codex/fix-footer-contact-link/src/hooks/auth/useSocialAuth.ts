


import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

=======

import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {

          description: error && error.message,

=======
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google"});
      if (error) {
        toast({
          title: "Google login failed";
          description: error.message
        provider: "google"}),

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Google login error:", error);
      toast({
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})
    }
  }
  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase && supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";
          description: error.message
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
      console && console.error("Facebook login error:", error);
      toast({
        title: "Facebook login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})
    }
  }
  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase && supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";
          description: error.message
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
      console && console.error("Twitter login error:", error);
      toast({
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
