
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
=======


import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

=======

>>>>>>> main
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
<<<<<<< HEAD
=======

          description: error && error.message,

=======
>>>>>>> main
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
<<<<<<< HEAD
<<<<<<< HEAD
        provider: "google"});
      if (error) {
        toast({
          title: "Google login failed";
          description: error.message
=======
        provider: "google"}),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======

        provider: "google"}),

>>>>>>> main

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
<<<<<<< HEAD
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
<<<<<<< HEAD
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Google login error:", error);
      toast({

        description: error && error.message || "An unexpected error occurred",

>>>>>>> main
        variant: "destructive"})
    }
  }
  const loginWithFacebook = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase && supabase.auth.signInWithOAuth({
>>>>>>> main
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";
<<<<<<< HEAD
          description: error.message
=======
=======

          description: error && error.message,

=======

>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({
<<<<<<< HEAD
        title: "Facebook login failed";
        description: error.message |"An unexpected error occurred"
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Facebook login error:", error);
      toast({

        description: error && error.message || "An unexpected error occurred",

>>>>>>> main
        variant: "destructive"})
    }
  }
  const loginWithTwitter = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase && supabase.auth.signInWithOAuth({
>>>>>>> main
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";
<<<<<<< HEAD
          description: error.message
=======
=======

          description: error && error.message,

=======

>>>>>>> main
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
<<<<<<< HEAD
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Twitter login error:", error);
      toast({

        description: error && error.message || "An unexpected error occurred",

>>>>>>> main
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

=======
<<<<<<< HEAD
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
<<<<<<< HEAD
=======
<<<<<<< HEAD
    }
  };

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
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
=======

        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
