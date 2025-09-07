<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client","
=======


<<<<<<< HEAD
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",



import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
=======

import { supabase } from "@/integrations/supabase/client",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { toast } from "@/hooks/use-toast",

import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import {supabase} from "@/integrations/supabase/client";
import {toast} from "@/hooks/use-toast";
export const useSocialAuth = () => {
  const loginWithGoogle = async () => {
    try {
<<<<<<< HEAD
=======

        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;"
        provider: "google"});"
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast","
import { supabase } from "@/integrations/supabase/client","
import { toast } from "@/hooks/use-toast",

<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
      const { error } = await supabase.auth.signInWithOAuth({;
        provider: "google"});
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
import { supabase } from "@/integrations/supabase/client",
import { toast } from "@/hooks/use-toast",
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export const useSocialAuth = () => {

  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

export const useSocialAuth = () => {}
  const loginWithGoogle = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth({}
      if (error) {}
        toast({"
          title: "Google login failed",
          description: error.message,

<<<<<<< HEAD
        "provider": "google"}),"

"variant": "destructive"});"
      }
    } catch ("error": any) {
      }
      console && console.error("Google login "error":", error);"
      toast({

        }

        "description": error && error.message || "An unexpected error occurred","

"variant": "destructive"});"
    }
  }
  const loginWithFacebook = async () => {
    }
    try {
      }
      const { error } = await supabase.auth.signInWithOAuth({      const { error } = await supabase.auth.signInWithOAuth({
        }
        "provider": "facebook"});"
      if (error) {
        }
        toast({
          }
          "title": "Facebook login failed";        "variant": "destructive"})"
    }
  }
  const loginWithTwitter = async () => {
    }
    try {
      }
        }
        "provider": "twitter"});"
      if (error) {
        }
        toast({
          }
          "title": "Twitter login failed","
  "description": error && error.message,
        "title": "Facebook login failed","
        "description": error.message || "An unexpected error occurred","
"variant": "destructive"});"
    }
  },

    }
    try {
      }
        }
        "provider": "twitter"}),"

      if (error) {
        }
        toast({
          }
          "title": "Twitter login failed","
          "description": error.message,

"variant": "destructive"});"
      }
    } catch ("error": any) {
      }
      console && console.error("Twitter login "error":", error);"
      toast({

        }

        "description": error && error.message || "An unexpected error occurred","
"variant": "destructive"});"
      }
    } catch ("error": any) {
      }
      console.error("Twitter login "error":", error),"
      toast({import { toast } from '@/hooks / use - toast';'
export const useSocialAuth = () =>: any {
  }
    }
    try {
      }
      const { error } = await supabase.auth.signInWithOAuth ({
        }
        "provider": "google"});"
;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "title": "Google login failed","
  "description": error.message,
          "variant": "destructive"});"
      }
    } catch ("error": any) {
      }
      console.error ("Google login "error":", error);"
      toast ({
        }
        "title": "Google login failed","
  "description": error.message || "An unexpected error occurred","
        "variant": "destructive"});"
    }
  }
;
    }
    try {
      }
        }
        "provider": "facebook"});"
;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "title": "Facebook login failed","
  "description": error.message,
          "variant": "destructive"});"
      }
    } catch ("error": any) {
      }
      console.error ("Facebook login "error":", error);"
      toast ({
        }
        "title": "Facebook login failed","
  "description": error.message || "An unexpected error occurred","
        "variant": "destructive"});"
    }
  }
;
    }
    try {
      }
        }
        "provider": "twitter"});"
;
      // Check condition,
if ( {) {
  $2
}
        toast ({
          }
          "title": "Twitter login failed","
  "description": error.message,
          "variant": "destructive"});"
      }
    } catch ("error": any) {
      }
      console.error ("Twitter login "error":", error);"
      toast ({
        }
        "title": "Twitter login failed","
  "description": error.message || "An unexpected error occurred","
        "variant": "destructive"});"
    }
  }
;
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
=======
  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({

        provider: "google"}),

<<<<<<< HEAD
=======
<<<<<<< HEAD
        provider: "google"});
      if (error) {
        toast({
          title: "Google login failed";
          description: error.message
        provider: "google"}),
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
      if (error) {
        toast({
          title: "Google login failed",
          description: error.message,
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Google login error:", error);
      toast({
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

>>>>>>> origin/chore/fix-lint-and-merge
          variant: "destructive"})
      };
    } catch (error: any) {";
      console && console.error("Google login error:", error);

<<<<<<< HEAD
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Google login error:", error),
      toast({
        title: "Google login failed";
        description: error.message |"An unexpected error occurred"
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"})
"
        description: error && error.message || "An unexpected error occurred",")"
        variant: "destructive"})"
    }
  }
<<<<<<< HEAD
  const loginWithFacebook = async () => {}
    try {}
      const { error } = await supabase.auth.signInWithOAuth({}
"
=======
  const loginWithFacebook = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase && supabase.auth.signInWithOAuth({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        provider: "facebook"});
      if (error) {}
        toast({"

          title: "Facebook login failed";
<<<<<<< HEAD
"
        title: "Google login failed","
        description: error.message || "An unexpected error occurred","
=======

<<<<<<< HEAD
          description: error.message
=======
          description: error && error.message,

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Google login failed",
        description: error.message || "An unexpected error occurred",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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

<<<<<<< HEAD
=======
<<<<<<< HEAD
        description: error && error.message || "An unexpected error occurred",

          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Facebook login error:", error),
      toast({
        title: "Facebook login failed";
        description: error.message |"An unexpected error occurred"
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
          variant: "destructive"})
      }
    } catch (error: any) {"
      console && console.error("Facebook login error:", error);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"})

    }
  }
<<<<<<< HEAD

=======
  const loginWithTwitter = async () => {
    try {
<<<<<<< HEAD
      const { error } = await supabase.auth.signInWithOAuth({
=======
      const { error } = await supabase && supabase.auth.signInWithOAuth({
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        provider: "twitter"});
      if (error) {
        toast({
          title: "Twitter login failed";

<<<<<<< HEAD
          description: error.message
=======
          description: error && error.message,

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        title: "Facebook login failed",
        description: error.message || "An unexpected error occurred",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
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
          variant: "destructive"})
      }
    } catch (error: any) {
      console.error("Twitter login error:", error),
      toast({
        title: "Twitter login failed";
        description: error.message |"An unexpected error occurred"
=======

          variant: "destructive"})
      }
    } catch (error: any) {
      console && console.error("Twitter login error:", error);
      toast({

<<<<<<< HEAD
=======
        description: error && error.message || "An unexpected error occurred",

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

<<<<<<< HEAD
        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };

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

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        variant: "destructive"})
    }
  }
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}

<<<<<<< HEAD
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})
    }
  };

import { supabase } from "@/integrations/supabase/client",;

import { toast } from "@/hooks/use-toast",;
export const useSocialAuth = () => {;
  const loginWithGoogle = async () => {;
    try {;

        variant: "destructive"});
    }
  },;
  const loginWithFacebook = async () => {;
    try {;

        variant: "destructive"});
    }
  },;
  const loginWithTwitter = async () => {;
    try {;

        variant: "destructive"});
    }
  };

import { supabase } from '@/integrations / supabase / client';'
import { toast } from '@/hooks / use - toast';

        provider: "google"});
;
      // Check condition;
if ( {) {}
  $2;
}

          variant: "destructive"});
      }
    } catch (error: any) {"
      console.error ("Google login error:", error);

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
          title: "Google login failed","
          description: error.message,;)"
          variant: "destructive"});"
      }
    } catch (error: any) {;"
      console.error("Google login error:", error),;"
      toast({;"
        title: "Google login failed",""
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
          title: "Facebook login failed","
          description: error.message,;)"
          variant: "destructive"});"
      }
    } catch (error: any) {;"
      console.error("Facebook login error:", error),;"
      toast({;"
        title: "Facebook login failed",""
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
          title: "Twitter login failed","
          description: error.message,;)"
          variant: "destructive"});"
      }
    } catch (error: any) {;"
      console.error("Twitter login error:", error),;"
      toast({;"
        title: "Twitter login failed",""
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

          variant: "destructive"});
      }
    } catch (error: any) {"
      console.error ("Facebook login error:", error);

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

          variant: "destructive"});
      }
    } catch (error: any) {"
      console.error ("Twitter login error:", error);

        variant: "destructive"});
    }
  }
;

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
          title: "Google login failed","
          description: error.message,;)"
          variant: "destructive"});"
    } catch (error: any) {;"
      console.error("Google login error:", error),;"
        title: "Google login failed",""
        description: error.message || "An unexpected error occurred",;")"
  },;
  const loginWithFacebook = async () => {;
        provider: "facebook"}),;"
          title: "Facebook login failed","
      console.error("Facebook login error:", error),;"
        title: "Facebook login failed",""
  const loginWithTwitter = async () => {;
        provider: "twitter"}),;"
          title: "Twitter login failed","
      console.error("Twitter login error:", error),;"
        title: "Twitter login failed",""
  };
        description: error && error.message || "An unexpected error occurred",""
=======
=======
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { supabase } from '@/integrations / supabase / client';
import { toast } from '@/hooks / use - toast';
export const useSocialAuth = () =>: any {
  // TODO: Implement
  // TODO: Implement
      const { error } = await supabase.auth.signInWithOAuth ({)
;
      // Check condition;
if ( {) {
<<<<<<< HEAD
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

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
=======
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

        title: "Twitter login failed",
        description: error.message || "An unexpected error occurred",
        variant: "destructive"})

  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
}
;
<<<<<<< HEAD
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
  return { loginWithGoogle, loginWithFacebook, loginWithTwitter }
};
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
