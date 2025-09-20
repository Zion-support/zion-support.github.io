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
className?: string;
}

const LinkHealthChecke; r: React.FC<LinkHealthCheckerProps> = ({ link;  s; className = "" }) => {
const [linkStatus; e; s; setLinkStatus; e; s] = useState<LinkStatus[]>([]);
const [isChecki;  n; g; setIsChecki; n; g] = useState(false);

const checkLinkHealth = async (ur;  l: string): Promise<LinkStatus> => {
const startTime = Date.now();
try {
  
// Check if it"s an external link;
if (url.startsWith("http") && !url.includes("ziontechgroup.com")) {
return {
  
ur;  l;
statu; s: "external";
responseTim; e: Date.now() - startTime;
};
responseTim; e: Date.now() - startTime;
};
responseTim; e: Date.now() - startTime;
};
responseTim; e: Date.now() - startTime;
};
} catch (error) {return {
  
defaul;  t: return <AlertTriangle className="w-5 h-5 text-gray-500" />;
}
defaul;  t: return "Unknown";
}
defaul;  t: return "text-gray-500";
}