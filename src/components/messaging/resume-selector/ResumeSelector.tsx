
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="recent" id="recent" />
          <Label htmlFor="recent">Use most recent resume</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="select" id="select" />
          <Label htmlFor="select">Select from saved resumes</Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="upload" id="upload" />
          <Label htmlFor="upload">Upload new resume</Label>
        </div>
      </RadioGroup>

      {selectedOption === 'recent' && resume && (
        <div className="space-y-4">
          <ResumePreviewCard
            resume={{
              id: resume.id || 'recent',
              name: resume.title || 'Most Recent Resume',
              lastModified: resume.updatedAt || new Date().toISOString(),
              preview: resume.summary || 'No preview available'
            }}
            onSelect={() => handleResumeSelect({
              id: resume.id || 'recent',
              name: resume.title || 'Most Recent Resume',
              lastModified: resume.updatedAt || new Date().toISOString(),
              preview: resume.summary || 'No preview available'
            })}
            isSelected={selectedResume?.id === resume.id}
          />
        </div>
      )}

      {selectedOption === 'select' && (
        <SelectResumeSection
          resumes={resumeOptions}
          onSelect={handleResumeSelect}
          selectedResume={selectedResume}
          isLoading={isLoading}
        />
      )}

      {selectedOption === 'upload' && (
        <UploadSection
          onFileUpload={handleFileUpload}
          selectedFile={customFile}
        />
      )}

      {selectedResume && (
        <div className="flex justify-center space-x-4 pt-4 border-t">
          <Button
            onClick={handleExportPDF}
            disabled={isLoading}
            variant="outline"
            size="sm"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            ) : (
              <Plus className="h-4 w-4 mr-2" />
            )}
            Export PDF
          </Button>
        </div>
      )}
    </div>

