<<<<<<< HEAD

import { ResumeBasicInfo  } from '@/types / resume';

interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
}

import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
>>>>>>> main
}

export function ResumeBasicInfoSection({
  basicInfo,
}: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">
        {basicInfo.headline || basicInfo.title}
      </h1>
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}
    </div>
  );
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
