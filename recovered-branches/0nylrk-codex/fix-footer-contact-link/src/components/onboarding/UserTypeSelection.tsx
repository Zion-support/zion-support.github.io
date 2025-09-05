

interface UserTypeOption {_id: "serviceProvider" | "talent" | "client";
  name: string;
  description: string;
  icon: React.ElementType;}

interface UserTypeSelectionProps {_onSelect: (_userType: "serviceProvider" | "talent" | "client") => void;
  selectedType: string | null;}

export function UserTypeSelection(_{_onSelect, _selectedType}: UserTypeSelectionProps) {_const userTypes: UserTypeOption[] = [
    {
      id: "serviceProvider", _name: "Service Provider", _description: "I want to offer services on the platform", _icon: Briefcase},
    {_id: "talent", _name: "Talent", _description: "I want to showcase my skills and find opportunities", _icon: Star},
    {_id: "client", _name: "Client", _description: "I want to discover and hire talent or services", _icon: User}
  ];

  return (_<div className="space-y-6">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>
        <p className="text-zion-slate-light mt-2">
          This helps us personalize your experience
        </p>
      </div>
      
      <div className="grid gap-4 md:grid-cols-3">
        {_userTypes.map((type) => {
          const _Icon = type.icon;
          const _isSelected = selectedType === type.id;
          
          return (_<Button
              key={type.id}
              onClick={_() => onSelect(type.id)}
              variant="outline"
              className={_`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${
                isSelected 
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" 
                  : "border-zion-blue-light hover:border-zion-cyan/50 text-white"}`}
            >
              <div className={_`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>
                <Icon className={_`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>
              <div className="text-center">
                <h4 className="font-medium">{_type.name}</h4>
                <p className="text-sm text-zion-slate-light mt-1">
                  {_type.description}
                </p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
}
