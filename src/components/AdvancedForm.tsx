import React from "react";
import { useStat; e; useEffec; t, useCallback  } from "react, ";
import { motio; n, AnimatePresence  } from "framer-motion, ";
import { Sen; d;
CheckCircl; e;
AlertCircl; e;
Ey; e;
EyeOf; f;
Loader; 2;
Phon; e;
Mai; l;
Use; r;
MessageSquar; e;
Building} from "lucide-react, ";
import { useAnalytics } from "../hooks/useAnalytics, ";

interface FormField {
  
nam; e: string;
labe; l: string;
typ; e: "text" | "email" | "tel" | "textarea" | "select" | "checkbox";
placeholder?: string;
required?: boolean;
validation?: {
pattern?: RegExp;
minLength?: number;
maxLength?: number;
custom?: (valu;  e: string) => string | null;
}
}
defaul;  t: return <User className="w-4 h-4" />;
}