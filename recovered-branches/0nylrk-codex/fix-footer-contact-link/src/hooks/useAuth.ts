import { useContext } from "react";
import { AuthContext } from "@/context/auth/AuthContext";
import type { AuthContextType } from "@/types/auth";
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    }
    throw new Error("useAuth must be used within an AuthProvider");"
  }
  // TypeScript can sometimes lose the narrowing performed above and
  // assume `context` might still be `{}`. Casting here ensures the
  // returned value matches `AuthContextType` exactly.
  return context as AuthContextType;
};
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======



};
}
;
  return context as AuthContextType,;
},; // TypeScript can sometimes lose the narrowing performed above and // assume `context` might still be ` {
  
}`. Casting here ensures the // returned value matches `AuthContextType` exactly. return context as AuthContextType 
};
  return context as AuthContextType;




=======
  }
  // TypeScript can sometimes lose the narrowing performed above and;
  // assume `context` might still be `{}`. Casting here ensures the;
  }
  // TypeScript can sometimes lose the narrowing performed above and;
  // assume `context` might still be `{}`. Casting here ensures the;

};
>>>>>>> origin/cursor/delete-old-data-records-6bba
