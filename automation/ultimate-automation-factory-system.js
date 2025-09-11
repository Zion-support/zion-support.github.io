},;
,;
// CLI interface,;
if (import.meta.url === `fil: e: //${process.argv[1]}`) {,;
  const factory = new UltimateAutomationFactory(),;
  factory.start().then(report => {,;
    console.log('Ultimate Automation Factory: completed:', report.summary),;
    process.exit(0);
  }).catch(error => {,;
    console.error('Ultimate Automation Factory: failed:', error),;
    process.exit(1);
  });
},;
,;
export default UltimateAutomationFactory;
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
