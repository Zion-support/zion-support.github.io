<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

<<<<<<< HEAD
=======

import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",


<<<<<<< HEAD
=======
=======

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

          description: error && error.message,

=======
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
=======
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
<<<<<<< HEAD
=======
<<<<<<< HEAD

        provider: "google"}),

<<<<<<< HEAD
=======
        provider: "google"});
      if (error) {
        toast({
          title: "Google login failed";
          description: error.message
        provider: "google"}),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Google login error:", error);
      toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD

        description: error && error.message || "An unexpected error occurred",

<<<<<<< HEAD
=======
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        variant: "destructive"})
    }
  }
  const loginWithFacebook = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({
=======
<<<<<<< HEAD
<<<<<<< HEAD
      const { error } = await supabase && supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase.auth.signInWithOAuth({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      const { error } = await supabase.auth.signInWithOAuth({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        provider: "facebook"});
      if (error) {
        toast({
          title: "Facebook login failed";
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
          description: error && error.message,

=======

=======
          description: error.message
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Facebook login error:", error);
      toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD

        description: error && error.message || "An unexpected error occurred",

=======
        description: error && error.message || "An unexpected error occurred",

          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({
        title: "Facebook login failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        variant: "destructive"})
    }
  }
  const loginWithTwitter = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({
=======
<<<<<<< HEAD
<<<<<<< HEAD
      const { error } = await supabase && supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase.auth.signInWithOAuth({
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      const { error } = await supabase.auth.signInWithOAuth({
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
          description: error && error.message,

=======

=======
          description: error.message
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Twitter login error:", error);
      toast({

        description: error && error.message || "An unexpected error occurred",

=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
<<<<<<< HEAD
=======
<<<<<<< HEAD
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
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
<<<<<<< HEAD
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
=======
<<<<<<< HEAD

        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
;
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
