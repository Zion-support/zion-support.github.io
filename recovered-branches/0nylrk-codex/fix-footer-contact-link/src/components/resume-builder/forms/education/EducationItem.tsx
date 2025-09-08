

import {format} from 'date-fns';
import {Edit, Trash2} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {Card, CardContent} from '@/components/ui/card';
import {Education} from '@/types/resume';
import {EducationItemProps} from './types';



import { format } from 'date-fns',
import { Edit, Trash2 } from 'lucide-react',
import { Button } from '@/components/ui/button',
import { Card, CardContent } from '@/components/ui/card',
import { Education } from '@/types/resume',
import { EducationItemProps } from './types',

              {education.institution}
            </p>
            {education.field_of_study && (
              <p className="text-sm text-muted-foreground">
                {education.field_of_study}
              </p>
            )}
            <p className="text-xs text-muted-foreground mt-1">
              {typeof education.start_date === "string"
                ? education.start_date
                : format(education.start_date, "MMM yyyy")}{" "}
              -{" "}
              {education.is_current
                ? "Present"
                : education.end_date
                  ? typeof education.end_date === "string"
                    ? education.end_date
                    : format(education.end_date, "MMM yyyy")
                  : ""}
            </p>
            {education.location && (
              <p className="text-xs text-muted-foreground">
                {education.location}
              </p>
            )}
          </div>
          <div className="flex gap-2">


