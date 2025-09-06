
import { ResumeBasicInfo  } from '@/types / resume';

interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
}

import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
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


import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}

      <h1 className="text-2xl font-bold">
        {basicInfo.headline || basicInfo.title}
      </h1>
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}
    </div>
  )
}
;

