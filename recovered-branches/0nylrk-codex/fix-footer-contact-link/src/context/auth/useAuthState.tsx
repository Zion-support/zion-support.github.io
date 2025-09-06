
<<<<<<< HEAD

<<<<<<< HEAD
import React, { useState } from "react",
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import React, { useState } from "react";
import type { UserProfile } from "@/types/auth";
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {;
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import React, { useState } from "react",
<<<<<<< HEAD
import type { UserProfile } from "@/types/auth";
=======
import type { UserProfile } from "@/types/auth",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/**
 * Custom hook to manage auth state
 */
export function useAuthState() {
<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
  const [user, setUser] = useState<UserProfile | null>(null),
  const [isLoading, setIsLoading] = useState<boolean>(true),
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),
<<<<<<< HEAD

  

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    onboardingStep,
    setOnboardingStep
<<<<<<< HEAD

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import React, { useState } from "react",;
import type { UserProfile } from "@/types/auth",;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
/**;
 * Custom hook to manage auth state;
 */;
export function useAuthState() {;
<<<<<<< HEAD

import React, { useState } from './react';
import type { UserProfile } from "@/types / auth";
/**;
* Custom hook to manage auth state;
*/;
export /**
 * useAuthState - Function description
 */
function useAuthState() {
  const [user, set_user] = useState < UserProfile | null>(null);
  const [is_loading, setIsLoading] = useState < boolean>(true);
  const [onboarding_step, setOnboardingStep] = useState < string | null>(null);
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const [user, setUser] = useState<UserProfile | null>(null),;
  const [isLoading, setIsLoading] = useState<boolean>(true),;
  const [onboardingStep, setOnboardingStep] = useState<string | null>(null),;
  return {;
    user,;
    setUser,;
    isLoading,;
    setIsLoading;
    onboardingStep;
    setOnboardingStep;
<<<<<<< HEAD

<<<<<<< HEAD
=======


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
;
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  return {
=======

  return {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    user;
    set_user;
    is_loading;
    setIsLoading;

    onboarding_step;

    setOnboardingStep;
  }
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
