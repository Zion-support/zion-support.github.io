

import { useState } from "react",
import { Briefcase, Star, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Briefcase, Star, User } from "lucide-react",
import { Button } from "@/components/ui/button",    {

      id: "talent"
      name: "Talent"
      description: "I want to showcase my skills and find opportunities"

      icon: Star          const Icon = type.icon;
          const is_selected = selected_type === type.id,

          const Icon = type.icon,
          const isSelected = selectedType === type.id,

          return (
            <Button;
              key={type.id}          return (
            <Button;
              key={type.id}

=======          return (
            <Button;
              key={type.id}
              }`}
            >"`
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>"`

                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />
              </div>"
              <div className="text-center">"
                <h4 className="font-medium">{type.name}</h4>"
                <p className="text-sm text-zion-slate-light mt-1">

    <div className="space-y-6">;
      <div className="text-center mb-6">;
        <h3 className="text-2xl font-bold text-white">Choose your role</h3>;

        <p className="text-zion-slate-light mt-2">;
          This helps us personalize your experience;
        </p>;
      </div>;
      <div className="grid gap-4 md: grid-cols-3">;
        {userTypes && userTypes.map((type) => {;
          const Icon = type && type.icon;
          const isSelected = selectedType === type && type.id,;

          return (
            <Button
              key={type && type.id}
              onClick={() => onSelect(type && type.id)}
              variant="outline";
              className={`h-auto flex flex-col items-center justify-center p-6 space-y-3 border ${;
                isSelected ;
                  ? "border-zion-purple bg-zion-purple/10 text-zion-purple" ;              }`}
            >;
              <div className={`p-3 rounded-full ${isSelected ? "bg-zion-purple" : "bg-zion-blue"}`}>;

                <Icon className={`h-6 w-6 ${isSelected ? "text-white" : "text-zion-slate-light"}`} />;
              </div>;"
              <div className="text-center">;

}      </div>;
    </div>;
  );

}
}
