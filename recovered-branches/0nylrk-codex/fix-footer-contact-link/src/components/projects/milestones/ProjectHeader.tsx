
import React from 'react';

interface ProjectHeaderProps {_title: string;}

export function ProjectHeader(_{_title}: ProjectHeaderProps) {_const _navigate = useNavigate();
  
  return (_<div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">{_title}</h1>
      </div>
    </div>
  );
}
