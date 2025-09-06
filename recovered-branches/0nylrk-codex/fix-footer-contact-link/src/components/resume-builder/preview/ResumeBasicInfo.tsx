<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo
import { ResumeBasicInfo } from '@/types/resume';
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import { ResumeBasicInfo  } from '@/types / resume';

interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

import {ResumeBasicInfo} from '@/types/resume';
interface ResumeBasicInfoSectionProps {;
=======
import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
  basicInfo: ResumeBasicInfo;
<<<<<<< HEAD
=======
<<<<<<< HEAD
}

<<<<<<< HEAD
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

export function ResumeBasicInfoSection({ basicInfo }: ResumeBasicInfoSectionProps) {
  return (
    <div className="space-y-2 border-b pb-4 mb-6">
      <h1 className="text-2xl font-bold">{basicInfo.headline || basicInfo.title}</h1>
      {basicInfo.summary && (
        <p className="text-sm">{basicInfo.summary}</p>
      )}
<<<<<<< HEAD
    </div>;
  );
}
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export function ResumeBasicInfoSection({
=======
import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {}
  basicInfo: ResumeBasicInfo;



"
import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {}
  basicInfo: ResumeBasicInfo;
}

export function ResumeBasicInfoSection({}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  basicInfo,
}: ResumeBasicInfoSectionProps) {}
  return ("
    <div className="space-y-2 border-b pb-4 mb-6">"
      <h1 className="text-2xl font-bold">
        {basicInfo.headline || basicInfo.title}
      </h1>"
      {basicInfo.summary && <p className="text-sm">{basicInfo.summary}</p>}
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
    </div>
=======
    </div>;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  );
}
;

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import { ResumeBasicInfo } from "@/types/resume";
interface ResumeBasicInfoSectionProps {
  basicInfo: ResumeBasicInfo;
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
