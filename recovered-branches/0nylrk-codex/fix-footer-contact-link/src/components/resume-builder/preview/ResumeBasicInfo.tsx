
<<<<<<< HEAD
import { ResumeBasicInfo } from '@/types/resume',
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo
}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className=&quot;space-y-2 border-b pb-4 mb-6&quot;>
      <h1 className=&quot;text-2xl font-bold&quot;>{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className=&quot;text-sm&quot;>{basicInfo.summary}</p>
=======

interface ResumeBasicInfoSectionProps {_basicInfo: ResumeBasicInfo;}

export function ResumeBasicInfoSection(_{_basicInfo}: ResumeBasicInfoSectionProps) {_return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {_basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      )}
    </div>
  )
}
