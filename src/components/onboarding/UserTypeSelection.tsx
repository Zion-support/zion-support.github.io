
import { useState } from &quot;react&quot;;
import { Briefcase, Star, User } from 'lucide-react'
import { Button } from &quot;@/components/ui/button&quot;;

interface UserTypeOption {
  id: &quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot;;
  name: string;
  description: string;
  icon: React.ElementType;
}

interface UserTypeSelectionProps {
  onSelect: (userType: &quot;serviceProvider&quot; | &quot;talent&quot; | &quot;client&quot;) => void;
  selectedType: string | null;
}

export function UserTypeSelection({ onSelect, selectedType }: UserTypeSelectionProps) {
  const userTypes: UserTypeOption[] = [
    {
      id: &quot;serviceProvider&quot;,
      name: &quot;Service Provider&quot;,
      description: &quot;I want to offer services on the platform&quot;,
      icon: Briefcase
    },
    {
      id: &quot;talent&quot;,
      name: &quot;Talent&quot;,
      description: &quot;I want to showcase my skills and find opportunities&quot;,
      icon: Star
    },
    {
      id: &quot;client&quot;,
      name: &quot;Client&quot;,
      description: &quot;I want to discover and hire talent or services&quot;,
      icon: User
    }
  ];

  return (
    <div className=&quot;space-y-6&quot;>
      <div className=&quot;text-center mb-6&quot;>
        <h3 className=&quot;text-2xl font-bold text-white&quot;>Choose your role</h3>
        <p className=&quot;text-zion-slate-light mt-2&quot;>
          This helps us personalize your experience
        </p>
      </div>
      
      <div className=&quot;grid gap-4 md:grid-cols-3&quot;>
        {userTypes.map((type) => {
          const Icon = type.icon;
          const isSelected = selectedType === type.id;
          
          return (
            <Button
              key={type.id}
              onClick={() => onSelect(type.id)}
              variant=&quot;outline&quot;
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? &quot;border-zion-purple bg-zion-purple/10 text-zion-purple&quot; 
                  : &quot;border-zion-blue-light hover:border-zion-cyan/50 text-white&quot;
              }`}
            >
              <div className={`p-3 rounded-full ${isSelected ? &quot;bg-zion-purple&quot; : &quot;bg-zion-blue&quot;}`}>
                <Icon className={`h-6 w-6 ${isSelected ? &quot;text-white&quot; : &quot;text-zion-slate-light&quot;}`} />
              </div>
              <div className=&quot;text-center&quot;>
                <h4 className=&quot;font-medium&quot;>{type.name}</h4>
                <p className=&quot;text-sm text-zion-slate-light mt-1&quot;>
                  {type.description}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
