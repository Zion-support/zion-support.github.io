import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
interface ProjectHeaderProps {
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="mr-2"
          onClick={() => navigate(-1)}
}
<<<<<<< HEAD

=======
=======
export function ProjectHeader({ title }: ProjectHeaderProps) {
  const navigate = useNavigate(),
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  
=======

>>>>>>> main
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="sm"
          className="mr-2"

import React from 'react',;
import { useNavigate } from 'react-router-dom',;
import { Button } from '@/components/ui/button',;
import { ArrowLeft } from 'lucide-react',;
;
  return (
    <div className="flex flex - col md:flex - row justify - between items - start md:items - center py - 4 border - b">;
      <div className="flex items - center">;
        <Button;
          variant="ghost";
          size="sm";
          className="mr - 2";
          on_click={() => navigate (-1)}
        >;
          <ArrowLeft className="h - 4 w - 4 mr - 1" />;
          Back;
        </Button>;
        <h1 className="text - 2xl md:text - 3xl font - bold truncate max - w-xl">;
          {title}
import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { Button  } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {
  title: string;
}
export function ProjectHeader({ title }: ProjectHeaderProps) {

<<<<<<< HEAD

  const navigate = useNavigate();


=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
  title: string
}

export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'lucide-react';

interface ProjectHeaderProps {;
  title: string;
}
export function ProjectHeader(): any ({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();



<<<<<<< HEAD
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>

=======
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'lucide-react';

interface ProjectHeaderProps {;
  title: string;
}
>>>>>>> origin/cursor/delete-old-data-records-6bba


        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">
          {title}
        </h1>
      </div>
    </div>
<<<<<<< HEAD
=======

  );
}
;

  ),;}
 <Button variant="ghost" size="sm" className="mr-2" onClick= {
  () => navigate (-1) 
}> <ArrowLeft className="h-4 w-4 mr-1" /> Back </Button> </div> </div>) 
}
  );
}
}
;

  );
}
  )
}
;
  )
}
;
>>>>>>> origin/cursor/delete-old-data-records-6bba
