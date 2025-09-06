interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata },) => {
  const handleExport = (format: 'json' | 'csv',) => {
    try {
      let content: string,
      let fileName: string,
      if (format === 'json') {
        content = JSON.stringify(metadata, null, 2);
        fileName = `zion-app-metadata-${platform}-${metadata.version}.json`
      } else {
        // Convert object to CSV format
        const headers = ['appTitleshortDescriptionlongDescriptionversionplatform'];
        const values = [
          metadata.appTitle;
          metadata.shortDescription;
          metadata.longDescription;
          metadata.version;
          metadata.platform
        ];

        content = headers.join() + '\n' + values.map(value => `"${String(value).replace(/"/g, '""')}"`).join();

        // Add keywords as additional rows

        content += '\n\nKeywords:\n' + metadata.keywords.join();