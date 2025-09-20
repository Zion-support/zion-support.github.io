import React from "react";
import React, { useState, useEffect } from "react";
import { CheckCircl; e; XCircl; e; AlertTriangl; e, ExternalLink  } from "lucide-react, ";

interface LinkStatus {
  
ur; l: string;
statu; s: "checking" | "healthy" | "broken" | "external";
responseTime?: number;
}
error?: string;}
};
interface LinkHealthCheckerProps {
  
link; s: Array<{ ur; l: string;
}
}
labe; l: string }>;
defaul;  t: return "text-gray-500";
}