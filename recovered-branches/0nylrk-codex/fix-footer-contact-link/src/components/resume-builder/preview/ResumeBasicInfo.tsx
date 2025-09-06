
import { ResumeBasicInfo } from '@/types/resume';
<<<<<<< HEAD
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
}
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
=======
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
    </div>;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  );
}