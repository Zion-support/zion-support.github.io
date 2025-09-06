import { logInfo, logErrorToProduction } from '@/utils/productionLogger';


interface ExportPanelProps {
  platform: AppPlatform,
  metadata: AppMetadataValues
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ platform, metadata }) => {
  const handleExport = (format: 'json' | 'csv') => {
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
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        content += '\n\nKeywords:\n' + metadata.keywords.join();
        
};
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
