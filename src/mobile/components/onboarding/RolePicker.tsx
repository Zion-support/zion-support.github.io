
import React, { useState } from "react",
import { Button } from "@/components/ui/button",
import { Card, CardContent } from "@/components/ui/card",
import { Briefcase, Users, Check } from 'lucide-react'
type UserRole = "talent" | "client" | null,
import React, { useState } from &quot;react&quot;;
import { Button } from &quot;@/components/ui/button&quot;;
import { Card, CardContent } from &quot;@/components/ui/card&quot;;
import { Briefcase, Users, Check } from 'lucide-react'

type UserRole = &quot;talent&quot; | &quot;client&quot; | null;

interface RolePickerProps {
  onSelect: (role: UserRole) => void
}

export function RolePicker({ onSelect }: RolePickerProps) {
  const [selectedRole, setSelectedRole] = useState<UserRole>(null),

  const handleSelect = (role: UserRole) => {
    setSelectedRole(role),
    onSelect(role)
  },

  return (
    <div className=&quot;space-y-4 px-4&quot;>
      <h2 className=&quot;text-xl font-medium&quot;>What brings you to Zion?</h2>
      <p className=&quot;text-muted-foreground&quot;>Choose how you want to use our platform</p>
      <div className=&quot;space-y-3 mt-6&quot;>
        <Card 
          className={_`cursor-pointer transition-all ${
            selectedRole === 'talent' 
              ? &quot;border-primary bg-primary/5&quot; 
              : &quot;border-border hover:border-primary/40&quot;
          }`}
          onClick={() => handleSelect('talent')}        >
          <CardContent className=&quot;p-5&quot;>
            <div className=&quot;flex items-center&quot;>
              <div className=&quot;w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4&quot;>
                <Briefcase className=&quot;h-6 w-6 text-primary&quot; />
              </div>
              <div className=&quot;flex-1&quot;>
                <h3 className=&quot;font-medium&quot;>I'm offering services</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>Find work and showcase your skills</p>
              </div>
              {selectedRole === 'talent' && (
                <Check className=&quot;h-5 w-5 text-primary&quot; />              )}
            </div>
          </CardContent>
        </Card>

        <Card 
          className={_`cursor-pointer transition-all ${
            selectedRole === 'client' 
              ? &quot;border-primary bg-primary/5&quot; 
              : &quot;border-border hover:border-primary/40&quot;
          }`}
          onClick={() => handleSelect('client')}        >
          <CardContent className=&quot;p-5&quot;>
            <div className=&quot;flex items-center&quot;>
              <div className=&quot;w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4&quot;>
                <Users className=&quot;h-6 w-6 text-primary&quot; />
              </div>
              <div className=&quot;flex-1&quot;>
                <h3 className=&quot;font-medium&quot;>I'm hiring</h3>
                <p className=&quot;text-sm text-muted-foreground&quot;>Post jobs and find talented professionals</p>
              </div>
              {selectedRole === 'client' && (
                <Check className=&quot;h-5 w-5 text-primary&quot; />              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
