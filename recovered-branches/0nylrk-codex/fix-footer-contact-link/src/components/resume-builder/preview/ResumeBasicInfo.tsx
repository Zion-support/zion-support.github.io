import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;

}

<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;

  basicInfo: ResumeBasicInfo;


<<<<<<< HEAD

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba

}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>

<<<<<<< HEAD
<h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
    </div>;
  );
}


=======
export function ResumeBasicInfoSection({
  basicInfo,
}: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}


  basicInfo,
}: ResumeBasicInfoSectionProps) {}
  return ("
    <div className="space-y-2 border-b pb-4 mb-6">"
      <h1 className="text-2xl font-bold">
        {basicInfo.headline || basicInfo.title}
      </h1>"
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>});
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


;
>>>>>>> origin/cursor/delete-old-data-records-6bba
