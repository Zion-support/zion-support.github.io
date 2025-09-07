}
      ;
      // Create a custom resume option;
      const customOption:ResumeOption = {;
        id:'custom-upload',;
        title:file.name,;
        type:'custom_upload',;
        file:file;
      },;
      ;
      setCustomFile(file),;
      setSelectedResume(customOption),;
      onResumeSelected(customOption),;
    }

        className="space-y-3";
      >;
        <div className="flex items-center space-x-2">;
          <RadioGroupItem value="recent" id="recent" />;

          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />;
      )}

        />;
      )}
      ;
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">;

          <Plus className="h-4 w-4 mr-2" />;
          Generate Resume Now;
        </Button>;
      </div>;
    </div>;

}