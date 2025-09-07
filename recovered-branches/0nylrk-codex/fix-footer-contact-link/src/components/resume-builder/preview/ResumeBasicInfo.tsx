import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
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

import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
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

<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
