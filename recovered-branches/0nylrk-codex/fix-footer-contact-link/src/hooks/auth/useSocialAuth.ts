<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast",

import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
<<<<<<< HEAD
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
<<<<<<< HEAD

          description: error && error.message,
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;"
        provider: "google"});"
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

          description: error && error.message,

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export const useSocialAuth = () => {
=======

import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",export const useSocialAuth = () => {
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934

<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

export const useSocialAuth = () => {}
  const loginWithGoogle = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth({}
      if (error) {}
        toast({"
          title: "Google login failed",
          description: error.message,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
import { toast } from "@/hooks/use-toast",export const useSocialAuth = () => {
=======
export const useSocialAuth = () => {
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import { supabase } from "@/integrations/supabase/client",;
import { toast } from "@/hooks/use-toast",export const useSocialAuth = () => {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

        provider: "google"}),

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======

=======
provider: "google"});
      if (error) {
        toast({
          title: "Google login failed";
          description: error.message
        provider: "google"}),
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          variant: "destructive"})
      };
    } catch (error: any) {";
      console && console.error("Google login error:", error);
toast({

        description: error && error.message || "An unexpected error occurred",

variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"
        variant: "destructive"})

import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import {supabase} from "@/integrations/supabase/client";""
import {toast} from "@/hooks/use-toast";""
import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import {supabase} from "@/integrations/supabase/client";""
import {toast} from "@/hooks/use-toast";"
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
  // TODO: Implement
}
          description: error && error.message,

      const { error } = await supabase.auth.signInWithOAuth({;)"
        provider: "google"});"
      const { error } = await supabase.auth.signInWithOAuth({;)"
        provider: "google"});""
import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast","
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
  // TODO: Implement
}
      const { error } = await supabase.auth.signInWithOAuth({
)"
        provider: "google"}),"
      if (error) {
        toast({"
          title: "Google login failed","
          description: error.message,)"
          variant: "destructive"})"
      }
    } catch (error: any) {"
      console && console.error("Google login error:", error);"
      toast({
"
        description: error && error.message || "An unexpected error occurred",")"
        variant: "destructive"})"
    }
  }
  const loginWithFacebook = async () => {
    try {
      const { error } = await supabase && supabase.auth.signInWithOAuth({
      const { error } = await supabase.auth.signInWithOAuth({
const { error } = await supabase.auth.signInWithOAuth({
        provider: "facebook"});
      if (error) {
        toast({
<<<<<<< HEAD
<<<<<<< HEAD
        variant: "destructive"})
"
        description: error && error.message || "An unexpected error occurred",")"
        variant: "destructive"})"
    }
  }
  const loginWithFacebook = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth({}
"
        provider: "facebook"});
      if (error) {}
        toast({"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
          title: "Facebook login failed";
"
        title: "Google login failed","
        description: error.message || "An unexpected error occurred","
        variant: "destructive"})
    }
  },

  const loginWithFacebook = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth({"
        provider: "facebook"}),

      if (error) {}
        toast({"
          title: "Facebook login failed",
          description: error.message,

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          variant: "destructive"})
      }
    } catch (error: any) {"
      console && console.error("Facebook login error:", error);
toast({
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
      toast({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        variant: "destructive"})
=======
          title: "Facebook login failed";        variant: "destructive"})
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
          title: "Facebook login failed";        variant: "destructive"})
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    }
  }
const loginWithTwitter = async () => {
    try {
      const { error } = await supabase && supabase.auth.signInWithOAuth({
      const { error } = await supabase.auth.signInWithOAuth({
const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";

          description: error && error.message,

description: error.message
      const { error } = await supabase.auth.signInWithOAuth({      const { error } = await supabase.auth.signInWithOAuth({
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed",
  description: error && error.message,
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
  // TODO: Implement
}
      const { error } = await supabase && supabase.auth.signInWithOAuth({
      const { error } = await supabase.auth.signInWithOAuth({)"
        provider: "twitter"});"
      if (error) {
        toast({"
          title: "Twitter login failed";",
  description: error && error.message,
"
        title: "Facebook login failed",""
        description: error.message || "An unexpected error occurred",")"
        variant: "destructive"})"
    }
  },

  const loginWithTwitter = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth({"
        provider: "twitter"}),

      if (error) {}
        toast({"
          title: "Twitter login failed",
          description: error.message,
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Twitter login error:", error);
      toast({

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
"
          variant: "destructive"})
      }
    } catch (error: any) {"
      console.error("Twitter login error:", error),
      toast({}
"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
      toast({
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { supabase } from "@/integrations/supabase/client",;
=======
"
import { supabase } from "@/integrations/supabase/client",;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
import { supabase } from "@/integrations/supabase/client",;
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
import { toast } from "@/hooks/use-toast",;
export const useSocialAuth = () => {;
  const loginWithGoogle = async () => {;
    try {;
const { error } = await supabase.auth.signInWithOAuth({;"
        provider: "google"}),;
      if (error) {;
        toast({;"
          title: "Google login failed",;
          description: error.message,;"
          variant: "destructive"});
      }
    } catch (error: any) {;"
      console.error("Google login error:", error),;
      toast({;"
        title: "Google login failed",;"
        description: error.message || "An unexpected error occurred",;"
        variant: "destructive"});
    }
  },;
  const loginWithFacebook = async () => {;
    try {;
const { error } = await supabase.auth.signInWithOAuth({;"
        provider: "facebook"}),;
      if (error) {;
        toast({;"
          title: "Facebook login failed",;
          description: error.message,;"
          variant: "destructive"});
      }
    } catch (error: any) {;"
      console.error("Facebook login error:", error),;
      toast({;"
        title: "Facebook login failed",;"
        description: error.message || "An unexpected error occurred",;"
        variant: "destructive"});
    }
  },;
  const loginWithTwitter = async () => {;
    try {;
const { error } = await supabase.auth.signInWithOAuth({;"
        provider: "twitter"}),;
      if (error) {;
        toast({;"
          title: "Twitter login failed",;
          description: error.message,;"
          variant: "destructive"});
      }
    } catch (error: any) {;"
      console.error("Twitter login error:", error),;
      toast({;"
        title: "Twitter login failed",;"
        description: error.message || "An unexpected error occurred",;"
        variant: "destructive"});
    }
  };

<<<<<<< HEAD
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

import { supabase } from '@/integrations / supabase / client';'
import { toast } from '@/hooks / use - toast';
=======
        description: error && error.message || "An unexpected error occurred",

        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
export const useSocialAuth = () =>: any {
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth ({
=======
export const useSocialAuth = () =>: any {}
  const loginWithGoogle = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth ({";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        provider: "google"});
;
      // Check condition;
if ( {) {}
  $2;
}
toast ({
<<<<<<< HEAD
          title: "Google login failed",
  description: error.message,
=======
          title: "Google login failed",
  description: error.message,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          variant: "destructive"});
      }
    } catch (error: any) {"
      console.error ("Google login error:", error);
toast ({
<<<<<<< HEAD
        title: "Google login failed",
  description: error.message || "An unexpected error occurred",
=======
        title: "Google login failed",
  description: error.message || "An unexpected error occurred",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive"});
  // TODO: Implement
}
      const { error } = await supabase.auth.signInWithOAuth({)"
        provider: "twitter"}),"
      if (error) {
        toast({"
          title: "Twitter login failed","
          description: error.message,
)"
          variant: "destructive"})"
      }
    } catch (error: any) {"
      console && console.error("Twitter login error:", error);"
      toast({
"
        description: error && error.message || "An unexpected error occurred",")"
          variant: "destructive"})"
      }
    } catch (error: any) {"
      console.error("Twitter login error:", error),"
      toast({"
        title: "Twitter login failed";","
  description: error.message |"An unexpected error occurred"")"
        variant: "destructive"})"
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
"
import { supabase } from "@/integrations/supabase/client",;""
import { toast } from "@/hooks/use-toast",;"
export const useSocialAuth = () => {;
  const loginWithGoogle = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;)"
        provider: "google"}),;"
      if (error) {;
        toast({;"
          title: "Google login failed",;"
          description: error.message,;)"
          variant: "destructive"});"
      }
    } catch (error: any) {;"
      console.error("Google login error:", error),;"
      toast({;"
        title: "Google login failed",;""
        description: error.message || "An unexpected error occurred",;")"
        variant: "destructive"});"
    }
  },;
  const loginWithFacebook = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;)"
        provider: "facebook"}),;"
      if (error) {;
        toast({;"
          title: "Facebook login failed",;"
          description: error.message,;)"
          variant: "destructive"});"
      }
    } catch (error: any) {;"
      console.error("Facebook login error:", error),;"
      toast({;"
        title: "Facebook login failed",;""
        description: error.message || "An unexpected error occurred",;")"
        variant: "destructive"});"
    }
  },;
  const loginWithTwitter = async () => {;
    try {;
      const { error } = await supabase.auth.signInWithOAuth({;)"
        provider: "twitter"}),;"
      if (error) {;
        toast({;"
          title: "Twitter login failed",;"
          description: error.message,;)"
          variant: "destructive"});"
      }
    } catch (error: any) {;"
      console.error("Twitter login error:", error),;"
      toast({;"
        title: "Twitter login failed",;""
        description: error.message || "An unexpected error occurred",;")"
        variant: "destructive"});"
    }
  };
"
        description: error && error.message || "An unexpected error occurred",""
        variant: "destructive"})"
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
"
import { supabase } from '@/integrations / supabase / client';''
import { toast } from '@/hooks / use - toast';'
export const useSocialAuth = () =>: any {
  // TODO: Implement
}
  const loginWithGoogle = async () => {
    try {
  // TODO: Implement
}
      const { error } = await supabase.auth.signInWithOAuth ({)'
        provider: "google"});"
;
      // Check condition;
if ( {) {
  $2;
}
        toast ({"
          title: "Google login failed";",
  description: error.message,)"
          variant: "destructive"});"
      }
    } catch (error: any) {"
      console.error ("Google login error:", error);"
      toast ({"
        title: "Google login failed";","
  description: error.message || "An unexpected error occurred",")"
        variant: "destructive"});"
    }
  }
;
  const loginWithFacebook = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth ({"
        provider: "facebook"});
;
      // Check condition;
if ( {) {}
  $2;
}
toast ({
<<<<<<< HEAD
          title: "Facebook login failed",
  description: error.message,
=======
          title: "Facebook login failed",
  description: error.message,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          variant: "destructive"});
      }
    } catch (error: any) {"
      console.error ("Facebook login error:", error);
toast ({
<<<<<<< HEAD
        title: "Facebook login failed",
  description: error.message || "An unexpected error occurred",
=======
        title: "Facebook login failed",
  description: error.message || "An unexpected error occurred",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive"});
  // TODO: Implement
}
      const { error } = await supabase.auth.signInWithOAuth ({)"
        provider: "facebook"});"
;
      // Check condition;
if ( {) {
  $2;
}
        toast ({"
          title: "Facebook login failed";",
  description: error.message,)"
          variant: "destructive"});"
      }
    } catch (error: any) {"
      console.error ("Facebook login error:", error);"
      toast ({"
        title: "Facebook login failed";","
  description: error.message || "An unexpected error occurred",")"
        variant: "destructive"});"
    }
  }
;
  const loginWithTwitter = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth ({"
        provider: "twitter"});
;
      // Check condition;
if ( {) {}
  $2;
}
toast ({
<<<<<<< HEAD
          title: "Twitter login failed",
  description: error.message,
=======
          title: "Twitter login failed",
  description: error.message,
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
          variant: "destructive"});
      }
    } catch (error: any) {"
      console.error ("Twitter login error:", error);
toast ({
<<<<<<< HEAD
        title: "Twitter login failed",
  description: error.message || "An unexpected error occurred",
=======
        title: "Twitter login failed",
  description: error.message || "An unexpected error occurred",
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
        variant: "destructive"});
    }
  }
;
<<<<<<< HEAD

import { supabase } from "@/integrations/supabase/client",""
import { toast } from "@/hooks/use-toast",""
import {supabase} from "@/integrations/supabase/client";""
import {toast} from "@/hooks/use-toast";""
import {toast} from "@/hooks/use-toast";"
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
  // TODO: Implement
}
          description: error && error.message,

      const { error } = await supabase.auth.signInWithOAuth({;)"
        provider: "google"});"
        provider: "google"});""
import { toast } from "@/hooks/use-toast","
  // TODO: Implement
      const { error } = await supabase.auth.signInWithOAuth({
)"
        provider: "google"}),"
      if (error) {
        toast({"
          title: "Google login failed","
          description: error.message,)"
          variant: "destructive"})"
    } catch (error: any) {"
      console && console.error("Google login error:", error);"
      toast({
"
        description: error && error.message || "An unexpected error occurred",")"
  const loginWithFacebook = async () => {
  // TODO: Implement
      const { error } = await supabase && supabase.auth.signInWithOAuth({
      const { error } = await supabase.auth.signInWithOAuth({)"
        provider: "facebook"});"
          title: "Facebook login failed";",
        title: "Google login failed",""
        description: error.message || "An unexpected error occurred",")"
  },

  // TODO: Implement
        provider: "facebook"}),"
          title: "Facebook login failed","
          description: error.message,
      console && console.error("Facebook login error:", error);"
  const loginWithTwitter = async () => {
  // TODO: Implement
        provider: "twitter"});"
          title: "Twitter login failed";",
        title: "Facebook login failed",""

  // TODO: Implement
        provider: "twitter"}),"
          title: "Twitter login failed","
      console && console.error("Twitter login error:", error);"
      console.error("Twitter login error:", error),"
        title: "Twitter login failed";","
  description: error.message |"An unexpected error occurred"")"
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
import { supabase } from "@/integrations/supabase/client",;""
import { toast } from "@/hooks/use-toast",;"
export const useSocialAuth = () => {;
  const loginWithGoogle = async () => {;
    try {;
        provider: "google"}),;"
      if (error) {;
        toast({;"
          title: "Google login failed",;"
          description: error.message,;)"
          variant: "destructive"});"
    } catch (error: any) {;"
      console.error("Google login error:", error),;"
        title: "Google login failed",;""
        description: error.message || "An unexpected error occurred",;")"
  },;
  const loginWithFacebook = async () => {;
        provider: "facebook"}),;"
          title: "Facebook login failed",;"
      console.error("Facebook login error:", error),;"
        title: "Facebook login failed",;""
  const loginWithTwitter = async () => {;
        provider: "twitter"}),;"
          title: "Twitter login failed",;"
      console.error("Twitter login error:", error),;"
        title: "Twitter login failed",;""
  };
        description: error && error.message || "An unexpected error occurred",""
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export const useSocialAuth = () =>: any {
  // TODO: Implement
  // TODO: Implement
      const { error } = await supabase.auth.signInWithOAuth ({)
;
      // Check condition;
if ( {) {
  $2;
        toast ({"
          title: "Google login failed";",
      console.error ("Google login error:", error);"
        title: "Google login failed";","
  // TODO: Implement
      const { error } = await supabase.auth.signInWithOAuth ({)"
      // Check condition;
      console.error ("Facebook login error:", error);"
        title: "Facebook login failed";","
  // TODO: Implement
      // Check condition;
      console.error ("Twitter login error:", error);"
        title: "Twitter login failed",""
        description: error.message || "An unexpected error occurred",""
pr-12325
        variant: "destructive"})"
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
;
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======
"

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
