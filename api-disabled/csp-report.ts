export default function cspReportHandler() {
  // CSP report handler functionality would go here
  return {
    handleCSPReport: (report: any) => {
      console.log('CSP report received:', report);
    }
  };
}