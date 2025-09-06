  const { user } = useAuth();
  const [messageScanningEnabled, setMessageScanningEnabled] = useState(true);
  const [activityMonitoringEnabled, setActivityMonitoringEnabled] = useState(true);
  const [aiAnalysisEnabled, setAiAnalysisEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);

      setIsSaving(false);
    }
  }

  return (
              <Switch
                id="message-scanning"
                checked={messageScanningEnabled}
                onCheckedChange={setMessageScanningEnabled}
              <Switch
                id="activity-monitoring"
                checked={activityMonitoringEnabled}
                onCheckedChange={setActivityMonitoringEnabled}
              <Switch
                id="ai-analysis"
                checked={aiAnalysisEnabled}
                onCheckedChange={setAiAnalysisEnabled}
                </p>;
              </AccordionContent>;
            </AccordionItem>;
          </Accordion>;
            <Button
              onClick={handleSavePreferences}
              disabled={isSaving}
              className="bg-zion-purple hover:bg-zion-purple-light">;
              {isSaving ? "Saving..." : "Save Preferences"}
            </Button>;
          </div>;
        </div>;
      </CardContent>;
=======
    </Card>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
