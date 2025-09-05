
import React from 'react',;
import { useNavigate } from 'react-router-dom',;
import { Button } from '@/components/ui/button',;
import { ArrowLeft } from 'lucide-react',;
interface ProjectHeaderProps {;
  title: string;
}
<<<<<<< HEAD

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const navigate = useNavigate(),
  
  return (
    <div className=&quot;flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b&quot;>
      <div className=&quot;flex items-center&quot;>
        <Button 
          variant=&quot;ghost&quot; 
          size=&quot;sm&quot; 
          className=&quot;mr-2&quot;
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className=&quot;h-4 w-4 mr-1&quot; />
          Back
        </Button>
        <h1 className=&quot;text-2xl md:text-3xl font-bold truncate max-w-xl&quot;>{title}</h1>
      </div>
    </div>
  )
=======
;
export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();
  return (;
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">;
      <div className="flex items-center">;
        <Button;
          variant="ghost";
          size="sm";
          className="mr-2";
          onClick={() => navigate(-1)}
        >;
          <ArrowLeft className="h-4 w-4 mr-1" />;
          Back;
        </Button>;
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{title}</h1>;
      </div>;
    </div>;
  );
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}
;