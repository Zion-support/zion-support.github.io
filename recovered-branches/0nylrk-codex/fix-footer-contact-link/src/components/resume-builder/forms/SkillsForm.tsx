

import {SkillsForm, as, SkillsFormComponent} from './skills';
import {SkillsFormProps} from './skills/types';
export function SkillsForm(props: SkillsFormProps) {
  return <SkillsFormComponent {...props} />

=======
import { SkillsForm as SkillsFormComponent } from './skills',;
import { SkillsFormProps } from './skills/types';
export function SkillsForm(props: SkillsFormProps) {;
  return <SkillsFormComponent {...props} />;


}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
