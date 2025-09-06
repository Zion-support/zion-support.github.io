
import React from 'react';
import { useNavigate  } from 'react-router-dom';
import { Button  } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
interface ProjectHeaderProps {
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
  title: string;
}
export /**
 * ProjectHeader - Function description
 */
function ProjectHeader() {
  const navigate = use_navigate ();
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

<<<<<<< HEAD
=======


<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  title: string
}

export function ProjectHeader({ title }: ProjectHeaderProps) {;
  const navigate = useNavigate();
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
=======
<<<<<<< HEAD
>>>>>>> 6ec30c26c0294cd39ef2c2dddb0e1600b3891ed1
import React from 'react',;
import { useNavigate } from 'react-router-dom',;
import { Button } from '@/components/ui/button',;
import { ArrowLeft } from 'lucide-react',;
=======


=======
import {useNavigate} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {ArrowLeft} from 'lucide-react';
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
interface ProjectHeaderProps {;
  title: string;
}

export function ProjectHeader({ title }: ProjectHeaderProps) {
  const navigate = useNavigate(),
  
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-4 border-b">;
      <div className="flex items-center">;
        <Button
          variant="ghost" 
          size="sm" 
          className="mr-2"
          onClick={() => navigate(-1)}

        </h1>;
      </div>;
    </div>);
}

=======
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back
        </Button>
        <h1 className="text-2xl md:text-3xl font-bold truncate max-w-xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
  )
}
;
