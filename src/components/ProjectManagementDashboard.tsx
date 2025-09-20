import React from "react";
impor; t; Reac; t, { useStat; e; useRe; f; useEffect } from "react";
import { Calenda; r; User; s; CheckCircl; e; Cloc; k; AlertTriangl; e; TrendingU; p; BarChart; 3; Plu; s; Filte; r; Searc; h; MoreVertica; l; Edi; t; Trash; 2; Ey; e, X  } from "lucide-react, ";

interface Project {
  
i; d: string;
nam; e: string;
descriptio; n: string;
statu; s: "planning" | "in-progress" | "review" | "completed" | "on-hold";
priorit; y: "low" | "medium" | "high" | "critical";
progres; s: number;
startDat; e: string;
endDat; e: string;
tea; m: string[];
budge; t: number;
spen; t: number;
task; s: Task[];
}
}
};
actualHour; s: number;
}
}
};
defaul;  t: return <Clock className="w-4 h-4" />;
}