id: 'serviceProvider'
      name: 'Service Provider'
      description: 'I want to offer services on the platform'
      icon: Briefcase
    }
import { useState } from 'react';
import { Briefcase, Star, User } from 'lucide-react';
import { Button } from '@/components / ui / button';
interface UserTypeOption {
  id: 'service_provider' | 'talent' | 'client';
  name: string;
  description: string;
  icon: React.ElementType;
interface UserTypeSelectionProps {
  on_select: (user_type: 'service_provider' | 'talent' | 'client') => void;
  selected_type: string | null;
export /**
 * UserTypeSelection - Function description
 */
function UserTypeSelection() {
  const user_types: UserTypeOption[] = [;
    {
      id: 'service_provider',
      name: 'Service Provider',
      description: 'I want to offer services on the platform',
      icon: Briefcase,
    },
    {
      id: 'talent'
      name: 'Talent'
      description: 'I want to showcase my skills and find opportunities'
      icon: Star
    }
    {




import { Briefcase, Star, User } from 'lucide-react'
                  {type.description}
                </p>;
              </div>;
            </Button>);
        })}

                />;

      
      <div className="grid gap-4 md: grid-cols-3">
        {userTypes.map((type) => {
          const Icon = type.icon,
          const isSelected = selectedType === type.id,
          
          return (
            <Button
              key={type.id}
        })}
      </div>
    </div>
  )
}



      </div>;
    </div>);
}

}
;
