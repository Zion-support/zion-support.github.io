
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
          <Label htmlFor="recent" className="text-white">Use most recent AI Resume</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select" className="text-white">Select from saved versions</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload" className="text-white">Upload a custom resume (PDF)</Label>
        </div>
      </RadioGroup>
      
      {/* Resume selection options based on radio selection */}
      {selectedOption === 'recent' && resume && (
        <ResumePreviewCard
          resume={resume}
          onDownload={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
      
      {selectedOption === 'select' && (
        <SelectResumeSection
          resumeOptions={resumeOptions}
          selectedResume={selectedResume}
          handleResumeSelect={handleResumeSelect}
          handleDownloadResume={handleDownloadResume}
          isLoading={isLoading}
        />
      )}
      
      {selectedOption === 'upload' && (
        <UploadSection
          customFile={customFile}
          onFileUpload={handleFileUpload}
        />
      )}
      
      {/* Generate Resume Now button */}
      <div className="flex justify-between items-center pt-2">
        <Button 
          variant="outline"
          onClick={handleGenerateResume}
          className="text-zion-purple border-zion-purple/20"
        >
          <Plus className="h-4 w-4 mr-2" />
          Generate Resume Now
        </Button>
      </div>
    </div>

