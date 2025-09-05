
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { SkillItemProps } from './types';

export const SkillItem = ({ skill, category, onDelete }: SkillItemProps) => {
  return (
    <Badge 
      key={skill.id} 
      variant=&quot;secondary&quot;
      className=&quot;flex items-center gap-1 py-1.5 px-3&quot;
    >
      {skill.name}
      {skill.proficiency && (
        <span className=&quot;ml-1 text-xs opacity-60&quot;>({skill.proficiency}/5)</span>
      )}
      <Button
        variant=&quot;ghost&quot;
        size=&quot;icon&quot;
        className=&quot;h-5 w-5 p-0 ml-1&quot;
        onClick={() => onDelete(skill.id!, category)}
      >
        <Trash2 className=&quot;h-3 w-3&quot; />
      </Button>
    </Badge>
  );
};
