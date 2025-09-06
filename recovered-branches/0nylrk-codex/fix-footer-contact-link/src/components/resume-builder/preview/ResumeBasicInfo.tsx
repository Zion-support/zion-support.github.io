import { ResumeBasicInfo  } from '@/types/resume';
interface ResumeBasicInfoSectionProps  {basicInfo: ResumeBasicInfo;
}export function ResumeBasicInfoSection() {return (<div className="space-y-2 border-b pb-4 mb-6">;
      <h1 className="text-2xl font-bold">;
        {basicInfo.headline || basicInfo.title}
      </h1>;
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}
    </div>;
  )}interface ResumeBasicInfoSectionProps  {basicInfo: ResumeBasicInfo;}export function ResumeBasicInfoSection() {return (<div className="space-y-2 border-b pb-4 mb-6">;
      <h1 className="text-2xl font-bold">;
        {basicInfo.headline || basicInfo.title}
      </h1>;
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}</div>;
  )}interface ResumeBasicInfoSectionProps  {basicInfo: ResumeBasicInfo;
interface ResumeBasicInfoSectionProps  {basicInfo: ResumeBasicInfo;
}export function ResumeBasicInfoSection() {return (<div className="space-y-2 border-b pb-4 mb-6">;
      <h1 className="text-2xl font-bold">;
        {basicInfo.headline || basicInfo.title}
      </h1>;
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}
    </div>;
  )}