import React from "react",
import { cn } from "@/lib/utils",
import { AlertTriangle, AlertCircle, CheckCircle } from 'lucide-react'

          "text-green-500"
        )} />;
;
interface SeverityIndicatorProps {
  severity: "safe" | "suspicious" | "dangerous",
  showIcon?: boolean,
  showText?: boolean,
  size?: "sm" | "md" | "lg",
  className?: string
}
    }
  }

  return (
      {showIcon && getSeverityIcon()}
      {showText && <span className="capitalize text-sm">{severity}</span>}
    </div>
  )
    <div className={cn ("flex items - center gap - 1", class_name)}>;
      {show_icon && getSeverityIcon ()}
      {show_text && <span className="capitalize text - sm">{severity}</span>}
    </div>);
}
  );

}
