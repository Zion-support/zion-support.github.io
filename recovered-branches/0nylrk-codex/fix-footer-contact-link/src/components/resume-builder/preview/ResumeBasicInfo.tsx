

interface ResumeBasicInfoSectionProps {_basicInfo: ResumeBasicInfo;}

export function ResumeBasicInfoSection(_{_basicInfo}: ResumeBasicInfoSectionProps) {_return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {_basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
    </div>
  );
}
