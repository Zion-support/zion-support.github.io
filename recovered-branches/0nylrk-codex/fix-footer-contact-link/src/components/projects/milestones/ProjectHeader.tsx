interface ProjectHeaderProps {
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'lucide-react';
interface ProjectHeaderProps {;
  title: string;
}

  

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">;
      <div className="flex items-center">;
        <Button
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => navigate(-1)}
}
