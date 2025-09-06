
<<<<<<< HEAD
import { ResumeBasicInfo  } from '@/types / resume';

interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ResumeBasicInfo } from '@/types/resume';
<<<<<<< HEAD
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
<<<<<<< HEAD
}

export function ResumeBasicInfoSection(): any ({ basicInfo }: ResumeBasicInfoSectionProps) {;
  return (
    <div className="space-y-2 border-b pb-4 mb-6">;
      <h1 className="text-2xl font-bold">{basicInfo && basicInfo.headline || basicInfo && basicInfo.title}</h1>;
      {basicInfo && basicInfo.summary && (;
        <p className="text-sm">{basicInfo && basicInfo.summary}</p>;
      )}
    </div>;
  );
}

=======
export /**
 * ResumeBasicInfoSection - Function description
 */
function ResumeBasicInfoSection() {
  return (
    <div className="space - y-2 border - b pb - 4 mb - 6">;
      <h1 className="text - 2xl font - bold">;
        {basic_info.headline || basic_info.title}
      </h1>;
      {basic_info.summary && <p className="text - sm">{basic_info.summary}</p>}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


=======
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
<<<<<<< HEAD

=======
<<<<<<< HEAD
    </div>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    </div>
  )
}
;
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
