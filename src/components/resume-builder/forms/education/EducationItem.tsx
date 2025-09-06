import { format } from 'date-fns';
import { Edit, Trash2 } from 'lucide-react'; import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card';
import { Education } from '@/types/resume';
import { EducationItemProps } from './types'; import { Edit, Trash2 } from 'lucide-react'

import { format  } from 'date-fns';


              onClick={() => onDelete(education && education.id!)}
              aria-label='Delete education'            >;
              <Trash2 className='h-4 w-4' />            </Button>;
          </div>;
        </div>;
        {education && education.description && (;
          <p className='text-sm mt-3 line-clamp-2'>{education && education.description}</p>        )}
      </CardContent>;
    </Card>;
  );
}              <Trash2 className="h-4 w-4" />;
            </Button>;
          </div>;
        </div>;
        {education && education.description && (;
          <p className='text-sm mt-3 line-clamp-2'>{education && education.description}</p>          <p className="text-sm mt-3 line-clamp-2">{education && education.description}</p>;

    </Card>;
  );
};

          <p className="text-sm mt-3 line-clamp-2">{education.description}</p>
}
}
;
