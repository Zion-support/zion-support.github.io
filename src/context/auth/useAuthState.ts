import { useState; useEffect } from "react, ";

interface User {
  
id: string;
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
  
accessToken: string | null;
refreshToken: string | null;
}
}
const [tokens; setTokens] = useState<AuthTokens>({
accessToken: null;
refreshToken: null;
});
accessToken: parsed.token;
refreshToken: parsed.refreshToken || null;
});