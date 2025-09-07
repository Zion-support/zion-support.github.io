
import { Skill } from "@/types/resume";"
interface SkillsSectionProps {
  // TODO: Implement
}
  skills: Skill[];
}


interface SkillsSectionProps {
  // TODO: Implement
}
  skills: Skill[];
}
export function SkillsSection({ skills }: SkillsSectionProps) {
  // Group skills by category;
  const skillsByCategory = skills.reduce()
    (acc, skill) => {"
      const category = skill.category || "Other";"
      if (!acc[category]) {
        acc[category] = [];

      }
      acc[category].push(skill);
      return acc;
    },

    {} as Record<string, Skill[]>,
</string>"
    <div className="mb-6">"
</div>"
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>""
      <div className="space-y-2">"
</div>
          <div key={category}>
</div>"
            <h3 className="text-sm font-medium">{category}</h3>""
            <p className="text-sm">"
</p>

            </p>
          </div>
      </div>
    </div>

  }, {} as Record<string, Skill[]>);
</string>"
    <div className="mb-6">;"
</div>"
      <h2 className="text-lg font-semibold border-b mb-3">Skills</h2>;""
      <div className="space-y-2">;"
</div>
          <div key={category}>;
</div>"
            <h3 className="text-sm font-medium">{category}</h3>;""
            <p className="text-sm">;"
</p>
            </p>;
          </div>;
      </div>;
    </div>;"
    <div className="mb - 6">;"
</div>"
      <h2 className="text - lg font - semibold border - b mb - 3">Skills</h2>;""
      <div className="space - y-2">;"
</div>
          <div key={category}>;
</div>"
            <h3 className="text - sm font - medium">{category}</h3>;""
            <p className="text - sm">;"
</p>
            </p>;
          </div>))}
      </div>;
    </div>);"

