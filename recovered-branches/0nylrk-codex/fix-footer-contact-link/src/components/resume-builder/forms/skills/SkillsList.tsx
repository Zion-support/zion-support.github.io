
import { useState, useEffect } from "react";
import { Skill } from "@/types/resume";
import { SkillCategory } from "./SkillCategory";

interface SkillsListProps {
  skills: Skill[];
  onDeleteSkill: (id: string, category: string) => Promise<void>;
}


export const SkillsList = ({ skills, onDeleteSkill }: SkillsListProps) => {
  const [skillsByCategory, setSkillsByCategory] = useState<
    Record<string, Skill[]>
  >({});





};
      },
      {} as Record < string, Skill[]>,
    );
;
    setSkillsByCategory (grouped);
  }, [skills]);
;
  // Check condition
if (.length === 0) {) {
  $2
}
    return null;
  }
  return (
    <div className="space - y-6">;
      <h3 className="text - md font - medium">Your Skills</h3>;
      <div className="space - y-4">;
        {Object.entries (skillsByCategory).map (([category, category_skills]) => (
          <SkillCategory;
            key={category}
            category={category}
            skills={category_skills}
            on_delete={onDeleteSkill}
          />))}
      </div>;
    </div>);
}
;

  ),;
},; setSkillsByCategory (grouped) 
}, [skills]);
return (<div className="space-y-6" > <h3 className="text-md font-medium" >Your Skills</h3> <SkillCategory key= {
  category 
}category= {
  category 
}skills= {
  categorySkills 
}onDelete= {
  onDeleteSkill 
}/>) ) 
}</div> </div>) 
};
</div>
    </div>

  );
}

  );

};

      </div>
    </div>
  );
}

  )
      </div>;
    </div>;
  );
};


