
<<<<<<< HEAD
import { ResumeBasicInfo } from '@/types/resume';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {ResumeBasicInfo} from '@/types/resume';
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { ResumeBasicInfo } from '@/types/resume';
<<<<<<< HEAD
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
}
<<<<<<< HEAD
export function ResumeBasicInfoSection({
  basicInfo
}: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">
        {basicInfo.headline |basicInfo.title}
      </h1>
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}
    </div>
  );
}
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
=======

import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
<<<<<<< HEAD
    </div>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
}
=======
    </div>
  )
}
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
