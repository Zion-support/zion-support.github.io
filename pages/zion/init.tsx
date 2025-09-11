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
const defaultBonus: DeployFormState['bonusModules'] = {
  'global-map': false
  'franchise-onboarding': false
  'referral-ambassadors': false
  'grant-portal': false
  trailer: false
  'book-store': false
}
const InitPage: NextPage = () => {
  const [state, setState] = useState<DeployFormState>({
    instanceName: ''
    defaultLanguage: 'en'
    deploymentRegion: 'us-east-1'
    tokenActivation: true
    governanceMode: 'Hybrid'
    branding: {
      logoUrl: ''
      primaryColor: '#4f46e5'
      secondaryColor: '#0ea5e9'
      subdomain: ''
    }
    modules: defaultModules
    bonusModules: defaultBonus
  });  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const handleToggle = (group: 'modules' | 'bonusModules', key: string) => {
    setState(prev => ({
      ...prev
      [group]: { ...prev[group], [key]: !prev[group][key] }
    }));  }

setState((prev) => ({
      ...prev;
      [group]: { ...prev[group], [key]: !prev[group][key] }}))
  };

  marketplace: true,
  gpt: true,
  academy: true,
  token: true,
  dao: true,

    setState((prev) => ({
      ...prev;
      [group]: { ...prev[group], [key]: !prev[group][key] }}))
  };


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
const InitPage: NextPage = () => {_const [state, _setState] = useState<DeployFormState>({
    instanceName: '', _defaultLanguage: 'en', _deploymentRegion: 'us-east-1', _tokenActivation: true, _governanceMode: 'Hybrid', _branding: { logoUrl: '', _primaryColor: '#4f46e5', _secondaryColor: '#0ea5e9', _subdomain: ''},
    modules: defaultModules,
    bonusModules: defaultBonus}),
  const [submitting, setSubmitting] = useState(false),
  const [result, setResult] = useState<any>(null),
  const [error, setError] = useState<string | null>(null),

  const handleToggle = (group: 'modules' | 'bonusModules', key: string) => {
    setState((prev) => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] }}))
  },

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(),
    setSubmitting(true),
    setError(null),
    setResult(null),
    try {
      const res = await fetch('/api/deploy/genesis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(state)}),
      const json = await res.json()
      if (!res.ok) throw new Error(json?.error || 'Deployment failed'),

    } catch (err: any) {
      setError(err.message || 'Unexpected error')
    } finally {
      setSubmitting(false)
    }
    
    return this.props.children;
  }}
import React from 'react';
 const InitPage: NextPage = () => {;
  const [state, setState] = useState<DeployFormState> ({;
  instanceName: '', defaultLanguage: 'en', deploymentRegion: 'us-east-1', tokenActivation: true, governanceMode: 'Hybrid', branding: {;
  logoUrl: '', primaryColor: '#4f46e5', secondaryColor: '#0ea5e9', subdomain: '' };
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify(state)
      });
import { useState } from 'react';
import type { NextPage } from 'next';
type GovernanceMode = 'Admin' | 'DAO' | 'Hybrid';
type DeployFormState = {
  instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
  governanceMode: GovernanceMode;
  branding: {;
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    subdomain: string;
  };
  modules: Record<string, boolean>,;
  bonusModules: Record<string, boolean>;
},;const defaultModules: DeployFormState['modules'] = {;
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
            <label className='block text - sm font - medium'>;
              Default Language;
            </label>;
            <input;
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.default_language}
              on_change={e =>;
                set_state ({ ...state, default_language: e.target.value });
              }
            />;
          </div>;
          <div>;
            <label className='block text - sm font - medium'>;
              Deployment Region;
            </label>;
            <input;
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.deployment_region}
              on_change={e =>;
                set_state ({ ...state, deployment_region: e.target.value });
              }
            />;
          </div>;
          <div>;
                checked={state && state.tokenActivation}
                onChange={() =>;
                  setState({;
                    ...state,;
                    tokenActivation: !state && state.tokenActivation,;
                  });
                }
              />;
              <label htmlFor='token' className='text-sm'>;
            <label className='block text - sm font - medium'>;
              Token Activation;
            </label>;
            <div className='mt - 2 flex items - center gap - 3'>;
              <input;
                id='token';
                type='checkbox';
                checked={state.token_activation}
                on_change={() =>;
                  set_state ({
                    ...state,
                    token_activation: !state.token_activation,
                  });
                }
              />;
              <label html_for='token' className='text - sm'>;                Enable ZION$ token;
              </label>;
            </div>;
          </div>;
          <div>;

            >              <option>Admin</option>
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold">Genesis Deploy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">Initialize a full Zion OS instance from a single control panel.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-6 max-w-4xl'
      >
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 max-w-4xl">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <label className='block text-sm font-medium'>
              Token Activation
            </label>
            <div className='mt-2 flex items-center gap-3'>
              <input
                id='token'
                type='checkbox'
                checked={state.tokenActivation}
                onChange={() =>
                  setState({
                    ...state
                    tokenActivation: !state.tokenActivation
                  })
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



            <label className="block text-sm font-medium">Token Activation</label>
            <div className="mt-2 flex items-center gap-3">
              <input id="token" type="checkbox" checked={state.tokenActivation} onChange={() => setState({ ...state, tokenActivation: !state.tokenActivation })} />
              <label htmlFor="token" className="text-sm">Enable ZION$ token</label>
            </div>
          </div>
          <div>

              <option>Hybrid</option>
            </select>
          </div>
        </section>
              value={state && state.governanceMode}
              onChange={e =>;
                setState({;
                  ...state,;
                  governanceMode: e && e.target.value as GovernanceMode,;
                });
              }

            >              <option>Admin</option>;
              <option>DAO</option>;
              <option>Hybrid</option>;
            </select>;
          </div>;
        </section>;
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Logo URL</label>;            <input
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


              }
            />;
          </div>;
          <div>;


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
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
            <h3 className='font-semibold mb-3'>Auto-Deploy Modules</h3>
            <div className='space-y-2'>
              {Object.keys(state.modules).map(key => (
                <label key={key} className='flex items-center gap-3 text-sm'>
                  <input
                    type='checkbox'
                    checked={state.modules[key]}
                    onChange={() => handleToggle('modules', key)}
                  />                  <span>/{key}</span>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

            </div>;
          </div>;
        </section>;
        <div className='flex items-center gap-3'>;
        </section>
        <div className='flex items-center gap-3'>          <button
            disabled={submitting}
            className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60'>;
            {submitting ? 'Deploying…' : 'Deploy Genesis'}

          </button>;
          {error && <span className='text-sm text-red-500'>{error}</span>}        </div>;
      </form>;

};

      )}
    </div>
  )
};


};


};


}
}
        <div className="flex items-center gap-3">
          <button disabled={submitting} className="inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60">
            {submitting ? 'Deploying…' : 'Deploy Genesis'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
          </button>
          {error && <span className="text-sm text-red-500">{error}</span>  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        </div>
      </form>
      {result && (
        <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
          <h3 className="font-semibold">Deployment Result</h3>
          <pre className="mt-2 text-xs whitespace-pre-wrap">{JSON.stringify(result, null, 2)}</pre>
        </div>
      )  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
            <label className='block text - sm font - medium'>Subdomain</label>;
            <input;
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.branding.subdomain}
              on_change={e =>;
                set_state ({
                  ...state,
                  branding: { ...state.branding, subdomain: e.target.value },
                });
              }
            />;
          </div>;
        </section>;
        <section className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
            <h3 className='font - semibold mb - 3'>Auto - Deploy Modules</h3>;
            <div className='space - y-2'>;
              {Object.keys (state.modules).map (key => (
                <label key={key} className='flex items - center gap - 3 text - sm'>;
                  <input;
                    type='checkbox';
                    checked={state.modules[key]}
                    on_change={() => handle_toggle ('modules', key)}
                  />                  <span>/{key}</span>;
                </label>))}
            </div>;
          </div>;
          <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
            <h3 className='font - semibold mb - 3'>Bonus Modules</h3>;
            <div className='space - y-2'>;
              {Object.keys (state.bonus_modules).map (key => (
                <label key={key} className='flex items - center gap - 3 text - sm'>;
                  <input;
                    type='checkbox';
                    checked={state.bonus_modules[key]}
                    on_change={() => handle_toggle ('bonus_modules', key)}
                  />                  <span>/{key}</span>;
                </label>))}
            </div>;
          </div>;
        </section>;
        <div className='flex items - center gap - 3'>;
          <button;
            disabled={submitting}
            className='inline - flex items - center px - 4 py - 2 rounded - md bg - indigo - 600 text - white hover:bg - indigo - 700 disabled:opacity - 60';
          >;
            {submitting ? 'Deploying…' : 'Deploy Genesis'}
          </button>;
          {error && <span className='text - sm text - red - 500'>{error}</span>}        </div>;
      </form>;
      {result && (
        <div className='rounded - lg border border - gray - 200 dark:border - gray - 800 p - 4'>;
          <h3 className='font - semibold'>Deployment Result</h3>;
          <pre className='mt - 2 text - xs whitespace - pre - wrap'>;
            {JSON.stringify (result, null, 2)}
          </pre>;
        </div>)}
    </div>);
}
;
export default InitPage;
;=======


