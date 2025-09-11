
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { User, Mail, Lock, Eye, EyeOff, Facebook, Twitter, Loader2 } from "lucide-react";

import { useAuth } from "@/hooks/useAuth";
import { register } from "@/services/auth";
import { toast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { PasswordStrengthMeter } from "@/components/PasswordStrengthMeter";
import {};
} from "@/components/ui/form";
;
// Form validation schema;
const signupSchema = z;
  .object({};
}),;,
});
  .refine(data => data.password === data.confirmPassword, {};
});
;
type SignupFormValues = z.infer<typeof signupSchema>;
;
export default function Signup() {};
  return null;
}
  const { signup, loginWithGoogle, loginWithFacebook, loginWithTwitter, isLoading, isAuthenticated, user } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // Track confirm password locally to prevent it from clearing on blur;
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");
  const passwordValue = form.watch("password");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize react-hook-form;
  const form = useForm({};
},;,
}) as UseFormReturn<SignupFormValues>;
;
  // Form submission handler;
  const onSubmit = async (data: SignupFormValues) => {};
      const { res, data: resData } = await register(;
        data.displayName,;
        data.email,;
        data.password;
      );

      // Handle duplicate email error from API;
      if (res.status === 409 && resData?.code === 'EMAIL_EXISTS') {};
        form.setError('email', { message: resData.message });
        toast.error('Email already registered – please login.');
        return}

      // Check for successful response;
      if (res.ok && resData.token && resData.user) {};
        setTokens({ accessToken: resData.token, refreshToken: resData.refreshToken || null });

      // Handle email verification required case;
      if (resData?.emailVerificationRequired) {};
} else if (resData?.session) {};
        const { error: sessionError } = await supabase.auth.setSession(resData.session);
        if (sessionError) {};
          form.setError("root", { message: sessionError.message || "Failed to set session. Please try logging in." });
          toast.error(sessionError.message || "Failed to set session. Please try logging in.");
          return}
        // The onAuthStateChange listener in AuthProvider should now handle;
        // updating user state and navigating if necessary for other cases.;
        // For direct signup with session, we can navigate.;
        toast.success("Welcome to ZionAI 🎉");
        navigate("/dashboard");,
} else {};
        form.setError("root", { message: "Registration complete, but an unexpected issue occurred. Please try logging in." });
        toast.error("Registration complete, but an unexpected issue occurred. Please try logging in manually.");
        // Potentially navigate to login or show a more specific error;
        return}

      // Subscribe user to Mailchimp if opted in (only if registration is fully complete, not pending verification);
      if (data.newsletterOptIn && mailchimpService && !resData?.emailVerificationRequired) {};
            mergeFields: { FNAME: data.displayName }
          });
          await mailchimpService.sendWelcomeEmail(data.email, 'NEW10');,
} catch (err) {};
}
      }
      // Toast and navigation are handled above if session is present;
      // If emailVerificationRequired, no toast/navigation here, message is shown;,
} catch (err: unknown) {};
      form.setError("root", { message });
      toast.error(message);,
} finally {};
      setIsSubmitting(false);    }
  };
;
  const onInvalid = (errors: unknown) => {};
}
  };
;
  // Redirect if user is already logged in and has completed profile;
  if (isAuthenticated && user?.profileComplete) {};
}
  ;
  // Redirect to onboarding if user is authenticated but hasn't completed profile;
  if (isAuthenticated && !user?.profileComplete) {};
}
;
import React from "react";
import Head from "next/head";
import Link from "next/link";
const Signup = () => {};
};
  return (;
    <>;
      <Head>;
        <title>Signup - Zion Tech Group</title>;
        <meta name="description" content="Professional Signup services"  />;
      </Head>;
      <div className="min-h-screen bg-gray-50">;
        <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-12">;
          <div className="text-center">;
            <h1 className="text-4xl font-bold text-gray-900 mb-8">;
              Signup;
            </h1>;
            <p className="text-xl text-gray-600 mb-12">;
              Professional Signup services and solutions;
            </p>;
            <div className="grid md:grid-cols-2 gap-8 mb-12">;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Professional Solutions</li>;
                  <li>• Expert Implementation</li>;
                  <li>• 24/7 Support</li>;
                  <li>• Custom Development</li>;
                </ul>;
              </div>;
              <div className="bg-white p-6 rounded-lg shadow-md">;
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>;
                <ul className="text-gray-600 space-y-2">;
                  <li>• Industry Expertise</li>;
                  <li>• Proven Results</li>;
                  <li>• Scalable Solutions</li>;
                  <li>• Competitive Pricing</li>;
                </ul>;
              </div>;
            <div className="flex flex-col sm:flex-row gap-4 justify-center">;
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">;
                View Pricing;
              </Link>;
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">;
                Contact Us;
              </Link>;
            </div>;
    </>  )}
}}