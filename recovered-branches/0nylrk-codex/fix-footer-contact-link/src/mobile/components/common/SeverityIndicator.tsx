

interface SeverityIndicatorProps {;
  severity: "safe" | "suspicious" | "dangerous",;
  size?: "sm" | "md" | "lg";

  className?: string;
}



}: SeverityIndicatorProps) {
  const getSeverityIcon = () => {
    switch (severity) {
      case 'dangerous':
        return <AlertCircle className={cn(



export function SeverityIndicator(): any ({ ;
  severity, ;
  showIcon = true, ;
  showText = true, ;
  size = "md";
  className ;









export function SeverityIndicator({;
  severity,;
  showIcon = true,;
  showText = true,;
  size = "md",;
  className;
      default: return <CheckCircleclassName={cn(
          size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4",


          "text-green-500"
        )} />;
    }
  }



