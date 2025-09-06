

import {EducationForm, as, EducationFormComponent} from './education';
import {EducationFormProps} from './education/types';
export function EducationForm(props: EducationFormProps) {
  return <EducationFormComponent {...props} />

=======
import { EducationForm as EducationFormComponent } from './education',;
import { EducationFormProps } from './education/types';
export function EducationForm(props: EducationFormProps) {;
  return <EducationFormComponent {...props} />;


}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
