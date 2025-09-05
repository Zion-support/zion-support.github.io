
<<<<<<< HEAD
<<<<<<< HEAD
import React from "react",
import { AlertTriangle, AlertCircle, CheckCircle } from "lucide-react",
=======
import React from &quot;react&quot;;
import { AlertTriangle, AlertCircle, CheckCircle } from &quot;lucide-react&quot;;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

interface FraudTabContentProps {
  tabValue: string
}
=======
import React from "react";

interface FraudTabContentProps {_tabValue: string;}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export const FraudTabContent: React.FC<FraudTabContentProps> = (_{_tabValue}) => {_switch(tabValue) {
    case 'pending':
      return (
<<<<<<< HEAD
        <div className="bg-amber-50 dark: bg-amber-950/20 p-8 rounded-lg text-center">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-medium mb-4">Pending Review Flags</h3>
          <p className="text-muted-foreground">
=======
        <div className=&quot;bg-amber-50 dark:bg-amber-950/20 p-8 rounded-lg text-center&quot;>
          <AlertTriangle className=&quot;mx-auto h-12 w-12 text-amber-500 mb-4&quot; />
          <h3 className=&quot;text-xl font-medium mb-4&quot;>Pending Review Flags</h3>
          <p className=&quot;text-muted-foreground&quot;>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
            This tab will show fraud flags that are still pending admin review.
          </p>
        </div>
      ),
    
    case 'dangerous':
      return (
        <div className=&quot;bg-red-50 dark:bg-red-950/20 p-8 rounded-lg text-center&quot;>
          <AlertCircle className=&quot;mx-auto h-12 w-12 text-red-500 mb-4&quot; />
          <h3 className=&quot;text-xl font-medium mb-4&quot;>Dangerous Flags</h3>
          <p className=&quot;text-muted-foreground&quot;>
            This tab shows high-priority dangerous flags requiring immediate attention.
          </p>
        </div>
      ),
    
    case 'actioned':
      return (
        <div className=&quot;bg-green-50 dark:bg-green-950/20 p-8 rounded-lg text-center&quot;>
          <CheckCircle className=&quot;mx-auto h-12 w-12 text-green-500 mb-4&quot; />
          <h3 className=&quot;text-xl font-medium mb-4&quot;>Actioned Flags</h3>
          <p className=&quot;text-muted-foreground&quot;>
            This tab shows flags where action has already been taken.
          </p>
        </div>
      ),
    
    default:
<<<<<<< HEAD
      return null
  }
},
=======
      return null;}
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
