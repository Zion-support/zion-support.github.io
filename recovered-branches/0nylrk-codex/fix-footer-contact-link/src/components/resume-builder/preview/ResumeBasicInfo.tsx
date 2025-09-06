interface ResumeBasicInfoSectionProps {
  basic_info: ResumeBasicInfo;
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
