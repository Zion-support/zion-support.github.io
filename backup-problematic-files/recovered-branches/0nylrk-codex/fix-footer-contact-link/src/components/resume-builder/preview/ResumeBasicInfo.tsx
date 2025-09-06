<<<<<<< HEAD
import { ResumeBasicInfo  } from '@/types / resume';
interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
}
import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
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

import { ResumeBasicInfo } from '@/types/resume',;
;
interface ResumeBasicInfoSectionProps {;
  basicInfo:ResumeBasicInfo;
}
;
export function ResumeBasicInfoSection({ basicInfo } ResumeBasicInfoSectionProps) {;
  return (;
    <div className="space-y-2 border-b pb-4 mb-6">;
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>;
      {basicInfo.summary && (;
        <p className="text-sm">{basicInfo.summary}</p>;
      )}
    </div>;
  ),;}
) 
}</div>) 
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
