
<<<<<<< HEAD

<<<<<<< HEAD
=======

import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
<<<<<<< HEAD

import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
<<<<<<< HEAD

          description: error && error.message,

=======
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",

=======
=======
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
<<<<<<< HEAD
=======

        provider: "google"}),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
        provider: "google"});
      if (error) {
        toast({
          title: "Google login failed";
          description: error.message
=======
        provider: "google"}),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Google login error:", error);
      toast({
<<<<<<< HEAD

=======

        description: error && error.message || "An unexpected error occurred",

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
<<<<<<< HEAD
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        variant: "destructive"})
    }
  }
  const loginWithFacebook = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase && supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase.auth.signInWithOAuth({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";
<<<<<<< HEAD

          description: error && error.message,

=======

=======
          description: error.message
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Facebook login error:", error);
      toast({
<<<<<<< HEAD

=======

        description: error && error.message || "An unexpected error occurred",

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({
<<<<<<< HEAD
        title: "Facebook login failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        variant: "destructive"})
    }
  }
  const loginWithTwitter = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase && supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase.auth.signInWithOAuth({
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";
<<<<<<< HEAD

          description: error && error.message,

=======

=======
          description: error.message
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Twitter login error:", error);
      toast({
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
<<<<<<< HEAD
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};

=======

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
