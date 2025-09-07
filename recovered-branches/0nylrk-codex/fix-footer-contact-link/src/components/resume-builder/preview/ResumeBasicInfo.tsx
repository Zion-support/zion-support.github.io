<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
import { ResumeBasicInfo  } from '@/types / resume';

interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;

}

<<<<<<< HEAD
=======
import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;

  basicInfo: ResumeBasicInfo;
<<<<<<< HEAD
=======
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

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
<<<<<<< HEAD
import { ResumeBasicInfo } from '@/types/resume';
import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo
import { ResumeBasicInfo } from '@/types/resume';
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
interface ResumeBasicInfoSectionProps {;
  basicInfo: ResumeBasicInfo;
}

export function ResumeBasicInfoSection({
  basicInfo,
}: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
<h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
    </div>;
  );
}
=======
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}

<<<<<<< HEAD
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    </div>
  )
}
;

<<<<<<< HEAD
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
    </div>;

  );
}
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    </div>
  );
}
;

<<<<<<< HEAD
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
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
