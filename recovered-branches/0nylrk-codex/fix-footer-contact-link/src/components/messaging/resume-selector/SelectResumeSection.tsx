
              </div>;
            </button>;
          ))}
            <ResumePreviewCard,
resume={selectedResume && selectedResume.resume as Resume}
              onDownload={handleDownloadResume}
              isLoading={isLoading} />;
          )}
        </>;

