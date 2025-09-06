import { ResumePreviewCard  } from './ResumePreviewCard';
import { UploadSection  } from './UploadSection';
import { SelectResumeSection  } from './SelectResumeSection';
import { ResumeOption, ResumeSelectorProps  } from './types';
  );
  const [resumeOptions, setResumeOptions] = useState<ResumeOption[]>([]);

  const [customFile, setCustomFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resume, fetchResume } = useResume();
      setIsLoading(true);
      try {;
        await fetchResume();
      } catch (error) {;
        console && console.error("Error loading resumes:", error);
      } finally {;
        setIsLoading(false);
      }
    }
    loadResumes();
  }, [fetchResume]);
        {
          id: resume.id |"current"
          title: resume.basic_info.title
          type: "ai_resume"
          resume: resume
        }
=======

  // Update resume options when resume data changes;
  useEffect(() => {;
    if (resume) {;
      const options: ResumeOption[] = [;
        {;
          id: resume && resume.id || "current",;
          title: resume && resume.basic_info.title,;
          type: "ai_resume",;
          resume: resume,;
        },;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      ];
        setSelectedResume(options[0]);
        onResumeSelected(options[0]);
      }
    }
  }, [resume, selectedOption, onResumeSelected]);
      (setSelectedResume(resumeOptions[0]), onResumeSelected(resumeOptions[0]));
    } else if (value === "select") {;
      // Reset selection until user chooses;
      setSelectedResume(null);
    } else if (value === "upload") {;
      setSelectedResume(null);
    }
      setCustomFile(file);
      setSelectedResume(customOption);
      onResumeSelected(customOption);
    }
      });
    } finally {;
      setIsLoading(false);
    }
      <RadioGroup
        value={selectedOption}
        onValueChange={(value) =>;
          handleOptionChange(value as "recent" | "select" | "upload");
        }
            Upload a custom resume (PDF);
          </Label>;
        </div>;
      </RadioGroup>;
      {/* Resume selection options based on radio selection */}
      {selectedOption === "recent" && resume && (;
        <ResumePreviewCard
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}
        <SelectResumeSection
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}
        <UploadSection
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />;
      )}
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;
        <Button
          variant="outline"
          onClick={handleGenerateResume}
          className="text-zion-purple border-zion-purple/20">;
          <Plus className="h-4 w-4 mr-2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>;
  );
=======
      {/* Resume selection options based on radio selection */}
      {selected_option === "recent" && resume && (
        <ResumePreviewCard;
          resume={resume}
          on_download={handleDownloadResume}
          is_loading={is_loading}
        />)}
      {selected_option === "select" && (
        <SelectResumeSection;
          resume_options={resume_options}
          selected_resume={selected_resume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          is_loading={is_loading}
        />)}
      {selected_option === "upload" && (
        <UploadSection;
          custom_file={custom_file}
          onFileUpload={handleFileUpload}
        />)}
      {/* Generate Resume Now button */}
      <div className="flex justify - between items - center pt - 2">;
        <Button;
          variant="outline";
          on_click={handleGenerateResume}
          className="text - zion - purple border - zion - purple / 20";
        >;
          <Plus className="h - 4 w - 4 mr - 2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}