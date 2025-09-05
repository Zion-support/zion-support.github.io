
import { ResumeBasicInfo } from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
}
<<<<<<< HEAD

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className=&quot;space-y-2 border-b pb-4 mb-6&quot;>
      <h1 className=&quot;text-2xl font-bold&quot;>{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className=&quot;text-sm&quot;>{basicInfo.summary}</p>
=======
;
export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {;
  return (;
    <div className="space-y-2 border-b pb-4 mb-6">;
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>;
      {basicInfo.summary && (;
        <p className="text-sm">{basicInfo.summary}</p>;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
      )}
    </div>;
  );
}
;