
const InitPage: NextPage = () => {
  const [state, setState] = useState<DeployFormState> ({
  instanceName: '', defaultLanguage: 'en', deploymentRegion: 'us-east-1', tokenActivation: true, governanceMode: 'Hybrid', branding: {
  logoUrl: '', primaryColor: '#4f46e5', secondaryColor: '#0ea5e9', subdomain: '' }
const defaultModules: DeployFormState['modules'] = {
  marketplace: true
  gpt: true
  academy: true
  token: true
  dao: true
  'nation-builder': true
  'launch-kit': true
  'book-builder': true
  'roadmap-whitepaper': true
  'api-docs-wiki': true
  'zion-brain': true

}
import React from 'react';
 const InitPage: NextPage = () => {;
  const [state, setState] = useState<DeployFormState> ({;
  instanceName: '', defaultLanguage: 'en', deploymentRegion: 'us-east-1', tokenActivation: true, governanceMode: 'Hybrid', branding: {;
  logoUrl: '', primaryColor: '#4f46e5', secondaryColor: '#0ea5e9', subdomain: '' };
const defaultModules: DeployFormState['modules'] = {;
  marketplace: true,;
  gpt: true,;
  academy: true,;
  token: true,;
  dao: true,;
  'nation-builder': true,;
  'launch-kit': true,;
  'book-builder': true,;
  'roadmap-whitepaper': true,;
  'api-docs-wiki': true,;
  'zion-brain': true,;
};
const defaultBonus: DeployFormState['bonusModules'] = {;
  'global-map': false,;
  'franchise-onboarding': false,;
  'referral-ambassadors': false,;
  'grant-portal': false,;
  trailer: false,;
  'book-store': false,;
};
const InitPage: NextPage = () => {;
  const [state, setState] = useState<DeployFormState>({;
    instanceName: '',;
    defaultLanguage: 'en',;
    deploymentRegion: 'us-east-1',;
    tokenActivation: true,;
    governanceMode: 'Hybrid',;
    branding: {;
      logoUrl: '',;
      primaryColor: '#4f46e5',;
      secondaryColor: '#0ea5e9',;
      subdomain: '',;
    },;
    modules: defaultModules,;
    bonusModules: defaultBonus,;
  });  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const handleToggle = (group: 'modules' | 'bonusModules', key: string) => {;
    setState(prev => ({;
      ...prev,;
      [group]: { ...prev[group], [key]: !prev[group][key] },;
    }));  };
  const handleSubmit = async (e: React && React.FormEvent) => {;
    e && e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null),;
    try {;
      const res = await fetch('/api/deploy/genesis', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify(state),;
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error |'Deployment failed');
      setResult(json);

    } finally {;
      setSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },

  return (

          <div>
            <label className="block text-sm font-medium">Instance Name</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.instanceName} onChange={(e) => setState({ ...state, instanceName: e.target.value })} required />
          </div>
          <div>
            <label className="block text-sm font-medium">Default Language</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.defaultLanguage} onChange={(e) => setState({ ...state, defaultLanguage: e.target.value })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Deployment Region</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.deploymentRegion} onChange={(e) => setState({ ...state, deploymentRegion: e.target.value })} />
          </div>
          <div>

              <option>DAO</option>
              <option>Hybrid</option>
            </select>
          </div>
        </section>

            <input
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state && state.branding.logoUrl}
              onChange={e =>;
                setState({;
                  ...state,;
                  branding: { ...state && state.branding, logoUrl: e && e.target.value },;
                });
              }
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Primary Color</label>;
            <input
              type='color'
              className='mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40'
              value={state && state.branding.primaryColor}
              onChange={e =>;
                setState({;
                  ...state,;
                  branding: { ...state && state.branding, primaryColor: e && e.target.value },;
                });
            <label className='block text - sm font - medium'>Governance Mode</label>;
            <select;
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.governance_mode}
              on_change={e =>;
                set_state ({
                  ...state,
                  governance_mode: e.target.value as GovernanceMode,
                });
              }
            >              <option > Admin</option>;
              <option > DAO</option>;
              <option > Hybrid</option>;
            </select>;
          </div>;
        </section>;
        <section className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <div>;
            <label className='block text - sm font - medium'>Logo URL</label>;
            <input;
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.branding.logo_url}
              on_change={e =>;
                set_state ({
                  ...state,
                  branding: { ...state.branding, logo_url: e.target.value },
                });
              }
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>Primary Color</label>;
            <input;
              type='color';
              className='mt - 1 w - 20 h - 10 p - 1 rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40';
              value={state.branding.primary_color}
              on_change={e =>;
                set_state ({
                  ...state,
                  branding: { ...state.branding, primary_color: e.target.value },
                });
              }
            />;
          </div>;
          <div>;
              value={state && state.branding.secondaryColor}
              onChange={e =>;
                setState({;
                  ...state,;
                  branding: {;
                    ...state && state.branding,;
                    secondaryColor: e && e.target.value,;
                  },;
                });
            <label className='block text - sm font - medium'>Secondary Color</label>;
            <input;
              type='color';
              className='mt - 1 w - 20 h - 10 p - 1 rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40';
              value={state.branding.secondary_color}
              on_change={e =>;
                set_state ({
                  ...state,
                  branding: {
                    ...state.branding,
                    secondary_color: e.target.value,
                  },
                });
              }
            />;
          </div>;
          <div>;
              value={state && state.branding.subdomain}
              onChange={e =>;
                setState({;
                  ...state,;
                  branding: { ...state && state.branding, subdomain: e && e.target.value },;
                });
              }
            />;
          </div>;
        </section>;
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
            <h3 className='font-semibold mb-3'>Auto-Deploy Modules</h3>;
            <div className='space-y-2'>;
              {Object && Object.keys(state && state.modules).map(key => (;
                <label key={key} className='flex items-center gap-3 text-sm'>;
                  <input
                    type='checkbox'
                    checked={state && state.modules[key]}
                    onChange={() => handleToggle('modules', key)}
                  />                  <span>/{key}</span>;
                </label>;
              ))}
            </div>;
          </div>;
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
            <h3 className='font-semibold mb-3'>Bonus Modules</h3>;
            <div className='space-y-2'>;
              {Object && Object.keys(state && state.bonusModules).map(key => (;
                <label key={key} className='flex items-center gap-3 text-sm'>;
                  <input
                    type='checkbox'
                    checked={state && state.bonusModules[key]}
                    onChange={() => handleToggle('bonusModules', key)}
                  />                  <span>/{key}</span>;
                </label>;
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Logo URL</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.logoUrl} onChange={(e) => setState({ ...state, branding: { ...state.branding, logoUrl: e.target.value } })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Primary Color</label>
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.primaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, primaryColor: e.target.value } })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Secondary Color</label>
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.secondaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, secondaryColor: e.target.value } })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Subdomain</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.subdomain} onChange={(e) => setState({ ...state, branding: { ...state.branding, subdomain: e.target.value } })} />
          </div>
        </section>

          <div>
            <label className="block text-sm font-medium">Logo URL</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.logoUrl} onChange={(e) => setState({ ...state, branding: { ...state.branding, logoUrl: e.target.value } })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Primary Color</label>
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.primaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, primaryColor: e.target.value } })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Secondary Color</label>
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.secondaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, secondaryColor: e.target.value } })} />
          </div>
          <div>
            <label className="block text-sm font-medium">Subdomain</label>
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.subdomain} onChange={(e) => setState({ ...state, branding: { ...state.branding, subdomain: e.target.value } })} />
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold mb-3">Auto-Deploy Modules</h3>
            <div className="space-y-2">
              {Object.keys(state.modules).map((key) => (
                <label key={key} className="flex items-center gap-3 text-sm">
                  <input type="checkbox" checked={state.modules[key]} onChange={() => handleToggle('modules', key)} />
                  <span>/{key}</span>

                </label>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold mb-3">Bonus Modules</h3>
            <div className="space-y-2">
              {Object.keys(state.bonusModules).map((key) => (
                <label key={key} className="flex items-center gap-3 text-sm">
                  <input type="checkbox" checked={state.bonusModules[key]} onChange={() => handleToggle('bonusModules', key)} />
                  <span>/{key}</span>
                </label>
              ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
            </div>
          </div>

      )}
    </div>;
  );
