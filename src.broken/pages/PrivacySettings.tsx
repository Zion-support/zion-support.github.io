
export default function PrivacySettings() {_const { consent, _updateConsent} = useConsent();
  const [analytics, setAnalytics] = useState(consent.analytics);
  const [ads, setAds] = useState(consent.ads);

  const _handleSave = () => {_updateConsent({ analytics, _ads});
  };

  return (
    <>
      <Header />
      <SEO title="Privacy Settings" description="Manage your cookie preferences" />
      <main className="container mx-auto px-4 py-8 space-y-6">
        <h1 className="text-2xl font-bold">Privacy Settings</h1>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span>Analytics Cookies</span>
            <Switch checked={_analytics} onCheckedChange={_setAnalytics} />
          </div>
          <div className="flex items-center justify-between">
            <span>Advertising Cookies</span>
            <Switch checked={_ads} onCheckedChange={_setAds} />
          </div>
          <Button onClick={_handleSave}>Save Preferences</Button>
        </div>
      </main>
      <Footer />
    </>
  );
}
