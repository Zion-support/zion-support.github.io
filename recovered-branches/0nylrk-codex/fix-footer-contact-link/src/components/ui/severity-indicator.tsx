





import React from "react";""
import {cn} from "@/lib/utils";""
import {AlertTriangle, AlertCircle, CheckCircle} from "lucide-react";"
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;""
import React from "react",""
import { cn } from "@/lib/utils";""
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react";"
interface SeverityIndicatorProps {
  // TODO: Implement
}"
  severity: "safe" | "suspicious" | "dangerous""
interface SeverityIndicatorProps {;"
  severity: "safe" | "suspicious" | "dangerous",;"
  showIcon?: boolean;
  showText?: boolean;"
  size?: "sm" | "md" | "lg";"
  className?: string;

}
import React from \"react\";
import {cn} from \"@/lib/utils\";
import {AlertTriangle, AlertCircle, CheckCircle} from \"lucide-react\";
interface SeverityIndicatorProps {;}
  severity: \"safe\" | \"suspicious\" | \"dangerous\",;import React from \"react\",}
import { cn } from \"@/lib/utils\";
import { AlertTriangle, AlertCircle, CheckCircle } from \"lucide-react\";
interface SeverityIndicatorProps {

  // TODO: Implement
}"
  severity: "safe" | "suspicious" | "dangerous","
  showIcon?: boolean,
  showText?: boolean,"
  size?: "sm" | "md" | "lg","
  className?: string;
}

export function SeverityIndicator({ 
  severity, 
  showIcon = true, 

  showText = true, "
  size = "md","
  className;
  showText = true, ;"
  size = "md";"
  showText = true, "
  size = "md","
  className;)
}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {"
      case 'dangerous':'
        return <AlertCircle className={cn(
)
export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;'
  size = "md";"
  className ;"
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",""
          "text-destructive"")
        )} />,
</AlertCircle>
        return <AlertTriangle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",""
          "text-amber-500"")
        )} />,
</AlertTriangle>
        return <CheckCircle className={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",""
          "text-green-500"")
        )} />
</CheckCircle>"
    <div className={cn("flex items-center gap-1", className)}>"
</div>"
      {showText && <span className="capitalize text-sm">{severity}</span>}"
    </div>
        return <AlertCircleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"""
          "text-destructive"")
        )} />;
</AlertCircleclassName>
        return <AlertTriangleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"""
          "text-amber-500"")
        )} />;
</AlertTriangleclassName>

      default: return <CheckCircleclassName={cn("
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",""
          "text-green-500"")
        )} />;
</CheckCircleclassName>"
    <div className={cn("flex items-center gap-1", className)}>;"
</div>"
      {showText && <span className="capitalize text-sm">{severity}</span>}"
        return <AlertCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";")"
          "text - destructive")} />;"
</AlertCircle>
        return <AlertTriangle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4";")"
          "text - amber - 500")} />;"
</AlertTriangle>
      default: return <CheckCircle className={cn ("
          size === "sm" ? "h - 3 w - 3" : size === "lg" ? "h - 5 w - 5" : "h - 4 w - 4",")"
          "text - green - 500")} />;"
</CheckCircle>"
    <div className={cn ("flex items - center gap - 1", class_name)}>;"
</div>"
      {show_text && <span className="capitalize text - sm">{severity}</span>}"
    </div>);"
  case 'dangerous': return <AlertCircle className= {'
  cn () 
}/>;
</AlertCircle>'
case 'suspicious': return <AlertTriangle className= {''
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";")"
"text-amber-500")"
}/>;
</AlertTriangle>
default: return <CheckCircle className= {"
  cn (size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4";")"
"text-green-500")"
}/>;
</CheckCircle>
return (</div>) "
    <div className={cn("flex items-center gap-1", className)}>;"
</div>"
      {showText && <span className="capitalize text-sm">{severity}</span>}"
    </div>;"

