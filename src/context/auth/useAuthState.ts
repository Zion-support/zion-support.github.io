<<<<<<< HEAD
import { useState, useEffect } from "react, ";
=======
import { useState; useEffect } from "react, ";
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

interface User {
id: string;,
email: string;
displayName?: string;
avatar?: string;
role?: string;
isEmailVerified?: boolean;
createdAt?: string;
}
updatedAt?: string;}
}

interface AuthTokens {
accessToken: string | null;,
refreshToken: string | null;
}
}
}

export const useAuthState: any = () => {;
<<<<<<< HEAD
const [user, setUser] = useState<User | null>(null);
const [isLoading, setIsLoading] = useState(true);
const [onboardingStep, setOnboardingStep] = useState(0);
const [tokens, setTokens] = useState<AuthTokens>({,
accessToken: null;,
refreshToken: null;
});
=======
const [user; setUser] = useState<User | null>(null);
const [isLoading; setIsLoading] = useState(true);
const [onboardingStep; setOnboardingStep] = useState(0);
const [tokens; setTokens] = useState<AuthTokens>({,
accessToken: null;,
refreshToken: null;
});
accessToken: string | null;,
refreshToken: string | null;}

export const useAuthState: any = () => {;
const [user; setUser] = useState<User | null>(null);
const [isLoading; setIsLoading] = useState(true);
const [onboardingStep; setOnboardingStep] = useState(0);
const [tokens; setTokens] = useState<AuthTokens>({,
accessToken: null;,
refreshToken: null;,
});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840

useEffect(() => {
// Check for existing auth state on mount;
const checkAuthState = async () => {;
try {;
if (typeof window !== "undefined") {;
const auth = localStorage.getItem("auth") || sessionStorage.getItem("auth");
if (auth) {
const parsed = JSON.parse(auth);
if (parsed.user && parsed.token) {
setUser(parsed.user);
setTokens({
accessToken: parsed.token;,
refreshToken: parsed.refreshToken || null;
});
<<<<<<< HEAD
=======
accessToken: parsed.token;,
refreshToken: parsed.refreshToken || null;});
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
}
}
}
} catch (error) {
console.error("Error checking auth state:", error);
} finally {
setIsLoading(false);
}
};

checkAuthState();
}, []);

return {user;
setUser;
isLoading;
setIsLoading;
onboardingStep;
setOnboardingStep;
tokens;
<<<<<<< HEAD
setTokens};
=======
setTokens,
};
>>>>>>> 9d7313116a64aea01fdf8aaa2b42f67aaee4a840
};