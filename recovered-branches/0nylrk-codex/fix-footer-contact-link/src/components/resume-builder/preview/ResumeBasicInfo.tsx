<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/preview/ResumeBasicInfo.tsx

<<<<<<< HEAD

import { ResumeBasicInfo } from '@/types/resume';
=======
import { ResumeBasicInfo  } from '@/types / resume';

interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
}

========
<<<<<<< HEAD
import { ResumeBasicInfo  } from '@/types / resume';
interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
}
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/preview/ResumeBasicInfo.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/preview/ResumeBasicInfo.tsx

=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/preview/ResumeBasicInfo.tsx
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/preview/ResumeBasicInfo.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
=======
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

}

export function ResumeBasicInfoSection({
  basicInfo,
}: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
<h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}

<<<<<<< HEAD
<<<<<<< HEAD
=======
    </div>
  )
}
;

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
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
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/components/resume-builder/preview/ResumeBasicInfo.tsx
=======
    </div>;

  );
}
    </div>
  );
}
;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
