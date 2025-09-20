import React from "react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion, ";
import { FileTex; t;
AlertTriangl; e;
CheckCircl; e;
Inf; o;
Searc; h;
Edit; 3;
Ey; e;
BarChart; 3;
TrendingU; p;
Zap} from "lucide-react, ";

interface ContentIssue {
  
i; d: string;
pageUr; l: string;
pageTitl; e: string;
issueTyp; e: "missing_title" | "missing_meta" | "no_headings" | "minimal_content" | "no_images";
severit; y: "low" | "medium" | "high";
descriptio; n: string;
recommendatio; n: string;
statu; s: "open" | "in_progress" | "resolved";
}
}
};
lastUpdate; d: Date;
}
}
};
const ContentQualityAnalyze; r: React.FC = () => {const [isOp;  e; n; setIsOp; e; n] = useState(false);
stat; u; s: "ope; n"
},
{i; d: "2";
{i; d: "3";
{i; d: "4";
defaul;  t: return <Info className="w-4 h-4 text-gray-400" />;
}
defaul;  t: return "text-gray-400";
}
defaul;  t: return "text-gray-400";
}
defaul;  t: return type;
}