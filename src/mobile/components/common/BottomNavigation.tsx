import React from "react";
import { useRouter,} from "next/router";
import React from "react";
import { Home,,, ShoppingBag,,, Users,,, User,} from 'lucide-react'
import React from "react";
export function BottomNavigation() {
isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <div className="h-5 w-5">
              {React.cloneElement(item.icon as React.ReactElement {
                className: cn("h-5 w-5", isActive ? "stroke-primary" : "stroke-muted-foreground")
              })}
            </div>
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        )
      })}
    </div>
  )
}