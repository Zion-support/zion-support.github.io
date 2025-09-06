



import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",





import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
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

          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"


        variant: "destructive"})
    }
  }
  const loginWithFacebook = async () => {
    try {

      const { error } = await supabase.auth.signInWithOAuth({


      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";



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
        variant: "destructive"})
    }
  }
  const loginWithTwitter = async () => {
    try {

      const { error } = await supabase.auth.signInWithOAuth({


      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";



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

        description: error && error.message || "An unexpected error occurred",

          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",;
export const useSocialAuth = () => {;
  const loginWithGoogle = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"}),;
      if (error) {;
        toast({;
          title: "Google login failed",;
          description: error.message,;
          variant: "destructive"});
      }
    } catch (error: any) {;
      console.error("Google login error:", error),;
      toast({;
        title: "Google login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
    }
  },;
  const loginWithFacebook = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "facebook"}),;
      if (error) {;
        toast({;
          title: "Facebook login failed",;
          description: error.message,;
          variant: "destructive"});
      }
    } catch (error: any) {;
      console.error("Facebook login error:", error),;
      toast({;
        title: "Facebook login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
    }
  },;
  const loginWithTwitter = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "twitter"}),;
      if (error) {;
        toast({;
          title: "Twitter login failed",;
          description: error.message,;
          variant: "destructive"});
      }
    } catch (error: any) {;
      console.error("Twitter login error:", error),;
      toast({;
        title: "Twitter login failed",;
        description: error.message || "An unexpected error occurred",;
        variant: "destructive"});
    }
  };

import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export const useSocialAuth = () =>: any {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth ({
        provider: "google"});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Google login failed";
          description: error.message,
          variant: "destructive"});
      }
    } catch (error: any) {
      console.error ("Google login error:", error);
      toast ({
        title: "Google login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
    }
  }
;
  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth ({
        provider: "facebook"});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Facebook login failed";
          description: error.message,
          variant: "destructive"});
      }
    } catch (error: any) {
      console.error ("Facebook login error:", error);
      toast ({
        title: "Facebook login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
    }
  }
;
  const loginWithTwitter = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth ({
        provider: "twitter"});
;
      // Check condition
if ( {) {
  $2
}
        toast ({
          title: "Twitter login failed";
          description: error.message,
          variant: "destructive"});
      }
    } catch (error: any) {
      console.error ("Twitter login error:", error);
      toast ({
        title: "Twitter login failed";
        description: error.message || "An unexpected error occurred",
        variant: "destructive"});
    }
  }
;
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
