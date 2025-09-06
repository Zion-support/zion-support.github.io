import { useState } from 'react'
import type { NextPage } from 'next'
type GovernanceMode = 'Admin' | 'DAO' | 'Hybrid',

type DeployFormState = {
  instanceName: string,
  defaultLanguage: string,
  deploymentRegion: string,
  tokenActivation: boolean,
  governanceMode: GovernanceMode,
  branding: {
    logoUrl: string,
    primaryColor: string,
    secondaryColor: string,
    subdomain: string
  },
  modules: Record<string, boolean>,
  bonusModules: Record<string, boolean>
},

const defaultModules: DeployFormState['modules'] = {
  marketplace: true,
  gpt: true,
  academy: true,
  token: true,
  dao: true,
  'nation-builder': true,
  'launch-kit': true,
  'book-builder': true,
  'roadmap-whitepaper': true,
  'api-docs-wiki': true,
  'zion-brain': true},

const defaultBonus: DeployFormState['bonusModules'] = {
  'global-map': false,
  'franchise-onboarding': false,
  'referral-ambassadors': false,
  'grant-portal': false,
  trailer: false,
  'book-store': false},

type GovernanceMode = 'Admin' | 'DAO' | 'Hybrid';

type DeployFormState = {_instanceName: string;
  defaultLanguage: string;
  deploymentRegion: string;
  tokenActivation: boolean;
  governanceMode: GovernanceMode;
  branding: {
    logoUrl: string;
    primaryColor: string;
    secondaryColor: string;
    subdomain: string;};
  modules: Record<string, boolean>;
  bonusModules: Record<string, boolean>;
};

const defaultModules: DeployFormState['modules'] = {_marketplace: true, _gpt: true, _academy: true, _token: true, _dao: true, _'nation-builder': true, _'launch-kit': true, _'book-builder': true, _'roadmap-whitepaper': true, _'api-docs-wiki': true, _'zion-brain': true};

const defaultBonus: DeployFormState['bonusModules'] = {_'global-map': false, _'franchise-onboarding': false, _'referral-ambassadors': false, _'grant-portal': false, _trailer: false, _'book-store': false};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

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
      setResult(json)
    } catch (err: any) {
      setError(err.message || 'Unexpected error')
    } finally {
      setSubmitting(false)
    }
  },

  return (
    <div className=&quot;space-y-8&quot;>
      <div>
        <h1 className=&quot;text-2xl font-bold&quot;>Genesis Deploy</h1>
        <p className=&quot;text-sm text-gray-600 dark:text-gray-400&quot;>Initialize a full Zion OS instance from a single control panel.</p>
      </div>

      <form onSubmit={handleSubmit} className=&quot;grid grid-cols-1 gap-6 max-w-4xl&quot;>
        <section className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Instance Name</label>
            <input className=&quot;mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2&quot; value={state.instanceName} onChange={(e) => setState({ ...state, instanceName: e.target.value })} required />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Default Language</label>
            <input className=&quot;mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2&quot; value={state.defaultLanguage} onChange={(e) => setState({ ...state, defaultLanguage: e.target.value })} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Deployment Region</label>
            <input className=&quot;mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2&quot; value={state.deploymentRegion} onChange={(e) => setState({ ...state, deploymentRegion: e.target.value })} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Token Activation</label>
            <div className=&quot;mt-2 flex items-center gap-3&quot;>
              <input id=&quot;token&quot; type=&quot;checkbox&quot; checked={state.tokenActivation} onChange={() => setState({ ...state, tokenActivation: !state.tokenActivation })} />
              <label htmlFor=&quot;token&quot; className=&quot;text-sm&quot;>Enable ZION$ token</label>
            </div>
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Governance Mode</label>
            <select className=&quot;mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2&quot; value={state.governanceMode} onChange={(e) => setState({ ...state, governanceMode: e.target.value as GovernanceMode })}>
              <option>Admin</option>
              <option>DAO</option>
              <option>Hybrid</option>
            </select>
          </div>
        </section>

        <section className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Logo URL</label>
            <input className=&quot;mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2&quot; value={state.branding.logoUrl} onChange={(e) => setState({ ...state, branding: { ...state.branding, logoUrl: e.target.value } })} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Primary Color</label>
            <input type=&quot;color&quot; className=&quot;mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40&quot; value={state.branding.primaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, primaryColor: e.target.value } })} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Secondary Color</label>
            <input type=&quot;color&quot; className=&quot;mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40&quot; value={state.branding.secondaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, secondaryColor: e.target.value } })} />
          </div>
          <div>
            <label className=&quot;block text-sm font-medium&quot;>Subdomain</label>
            <input className=&quot;mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2&quot; value={state.branding.subdomain} onChange={(e) => setState({ ...state, branding: { ...state.branding, subdomain: e.target.value } })} />
          </div>
        </section>

        <section className=&quot;grid grid-cols-1 md:grid-cols-2 gap-4&quot;>
          <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
            <h3 className=&quot;font-semibold mb-3&quot;>Auto-Deploy Modules</h3>
            <div className=&quot;space-y-2&quot;>
              {Object.keys(state.modules).map((key) => (
                <label key={key} className=&quot;flex items-center gap-3 text-sm&quot;>
                  <input type=&quot;checkbox&quot; checked={state.modules[key]} onChange={() => handleToggle('modules', key)} />
                  <span>/{key}</span>
                </label>
              ))}
            </div>
          </div>
          <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
            <h3 className=&quot;font-semibold mb-3&quot;>Bonus Modules</h3>
            <div className=&quot;space-y-2&quot;>
              {Object.keys(state.bonusModules).map((key) => (
                <label key={key} className=&quot;flex items-center gap-3 text-sm&quot;>
                  <input type=&quot;checkbox&quot; checked={state.bonusModules[key]} onChange={() => handleToggle('bonusModules', key)} />
                  <span>/{key}</span>
                </label>
              ))}
            </div>
          </div>
        </section>

        <div className=&quot;flex items-center gap-3&quot;>
          <button disabled={submitting} className=&quot;inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60&quot;>
            {submitting ? 'Deploying…' : 'Deploy Genesis'}
          </button>
          {error && <span className=&quot;text-sm text-red-500&quot;>{error}</span>}
        </div>
      </form>

      {result && (
        <div className=&quot;rounded-lg border border-gray-200 dark:border-gray-800 p-4&quot;>
          <h3 className=&quot;font-semibold&quot;>Deployment Result</h3>
          <pre className=&quot;mt-2 text-xs whitespace-pre-wrap&quot;>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  )
},

export default InitPage