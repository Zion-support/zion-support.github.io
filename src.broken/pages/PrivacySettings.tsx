<<<<<<< HEAD
import { useState } from 'react',;
import { Header } from '@/components/Header',;
import { Footer } from '@/components/Footer',;
import { SEO } from '@/components/SEO',;
import { Switch } from '@/components/ui/switch',;
import { Button } from '@/components/ui/button',;
import { useConsent } from '@/context/ConsentContext',;
;
export default function PrivacySettings() {;
  const { consent, updateConsent } = useConsent(),;
  const [analytics, setAnalytics] = useState(consent.analytics),;
  const [ads, setAds] = useState(consent.ads),;
;
  const handleSave = () => {;
    updateConsent({ analytics, ads }),;
  },;
;
  return (;
    <>;
      <Header />;
      <SEO title="Privacy Settings" description="Manage your cookie preferences" />;
      <main className="container mx-auto px-4 py-8 space-y-6">;
        <h1 className="text-2xl font-bold">Privacy Settings</h1>;
        <div className="space-y-4">;
          <div className="flex items-center justify-between">;
            <span>Analytics Cookies</span>;
            <Switch checked={analytics} onCheckedChange={setAnalytics} />;
          </div>;
          <div className="flex items-center justify-between">;
            <span>Advertising Cookies</span>;
            <Switch checked={ads} onCheckedChange={setAds} />;
          </div>;
          <Button onClick={handleSave}>Save Preferences</Button>;
        </div>;
      </main>;
      <Footer />;
    </>;
  ),;
=======
import { useState } from 'react',
import { Header } from '@/components/Header',
import { Footer } from '@/components/Footer',
import { SEO } from '@/components/SEO',
import { Switch } from '@/components/ui/switch',
import { Button } from '@/components/ui/button',
import { useConsent } from '@/context/ConsentContext',
export default function PrivacySettings() {
  const { consent, updateConsent } = useConsent(),
  const [analytics, setAnalytics] = useState(consent.analytics),
  const [ads, setAds] = useState(consent.ads),

  const handleSave = () => {
    updateConsent({ analytics, ads })
  },
  return (
    <>
      <Header />
      <SEO title=&quot;Privacy Settings&quot; description=&quot;Manage your cookie preferences&quot; />
      <main className=&quot;container mx-auto px-4 py-8 space-y-6&quot;>
        <h1 className=&quot;text-2xl font-bold&quot;>Privacy Settings</h1>
        <div className=&quot;space-y-4&quot;>
          <div className=&quot;flex items-center justify-between&quot;>
            <span>Analytics Cookies</span>
            <Switch checked={_analytics} onCheckedChange={_setAnalytics} />
          </div>
          <div className=&quot;flex items-center justify-between&quot;>
            <span>Advertising Cookies</span>
            <Switch checked={_ads} onCheckedChange={_setAds} />
          </div>
          <Button onClick={_handleSave}>Save Preferences</Button>
        </div>
      </main>
      <Footer />
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}
