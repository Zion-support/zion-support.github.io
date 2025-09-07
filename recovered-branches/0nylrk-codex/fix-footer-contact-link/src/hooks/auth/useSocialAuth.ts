
<<<<<<< HEAD


import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",



import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {

          description: error && error.message,

      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
export const useSocialAuth = () => {
=======
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",export const useSocialAuth = () => {
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

        provider: "google"}),

<<<<<<< HEAD

      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Google login error:", error);
      toast({

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"})
    }
  }
  const loginWithFacebook = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase && supabase.auth.signInWithOAuth({
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";

          description: error && error.message,

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

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"})
=======
      const { error } = await supabase.auth.signInWithOAuth({      const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";        variant: "destructive"})
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    }
  }
  const loginWithTwitter = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase && supabase.auth.signInWithOAuth({
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";

          description: error && error.message,

=======
      const { error } = await supabase.auth.signInWithOAuth({      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed",
  description: error && error.message,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
<<<<<<< HEAD
      toast({
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
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

        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
=======
      toast({import { toast } from '@/hooks / use - toast';
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          title: "Google login failed";
          description: error.message,
=======
          title: "Google login failed",
  description: error.message,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});
      }
    } catch (error: any) {
      console.error ("Google login error:", error);
      toast ({
<<<<<<< HEAD
        title: "Google login failed";
        description: error.message || "An unexpected error occurred",
=======
        title: "Google login failed",
  description: error.message || "An unexpected error occurred",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          title: "Facebook login failed";
          description: error.message,
=======
          title: "Facebook login failed",
  description: error.message,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});
      }
    } catch (error: any) {
      console.error ("Facebook login error:", error);
      toast ({
<<<<<<< HEAD
        title: "Facebook login failed";
        description: error.message || "An unexpected error occurred",
=======
        title: "Facebook login failed",
  description: error.message || "An unexpected error occurred",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
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
<<<<<<< HEAD
          title: "Twitter login failed";
          description: error.message,
=======
          title: "Twitter login failed",
  description: error.message,
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
          variant: "destructive"});
      }
    } catch (error: any) {
      console.error ("Twitter login error:", error);
      toast ({
<<<<<<< HEAD
        title: "Twitter login failed";
        description: error.message || "An unexpected error occurred",
=======
        title: "Twitter login failed",
  description: error.message || "An unexpected error occurred",
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        variant: "destructive"});
    }
  }
;
<<<<<<< HEAD

        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
;
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
=======
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
