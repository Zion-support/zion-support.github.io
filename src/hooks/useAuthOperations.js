import { useEffect } from "react, ";
import { supabase } from "@/integrations/supabase/client, ";
import { toast } from "@/hooks/use-toast, ";
import { showApiError } from "@/utils/apiErrorHandler, ";
import { trackReferral, checkUrlForReferralCode } from "@/utils/referralUtils, ";
import { cleanupAuthState } from "@/utils/authUtils, ";
export function useAuthOperations(setUser, setIsLoading) {
    // Check for referral code in URL when the hook is first used;
    useEffect(() => {
        checkUrlForReferralCode();
    }, []);
    const login = async ({ email, password }) => {;
        setIsLoading(true);
        try {
  
            // Clean up any stale auth state before login;
            cleanupAuthState();
            const { data, error } = await supabase.auth.signInWithPassword({email,
                    description: error.message;
                });
                description: `Welcome back, ${email}!`
            });
                description: "Failed to sign in. Please check your credentials.";
            });
                        display_name: display_name;
                    }
                }
            });
                description: `Welcome, ${display_name}! Please check your email to verify your account.`
            });
                    description: error.message;
                });
                    description: "You have been successfully logged out.";
                });
                description: "There was an issue logging you out. Please try again.";
            });
                    description: error.message;
                });
                description: "Failed to send reset password email. Please try again.";
            });
                headline: profileData.headline;
            })
                    description: error.message;
                });
                description: "Your profile has been successfully updated.";
            });
                description: "There was an issue updating your profile. Please try again.";
            });
                provider: "google";
            });
                    description: error.message;
                });
                provider: "facebook";
            });
                    description: error.message;
                });
                provider: "twitter";
            });
                    description: error.message;
                });