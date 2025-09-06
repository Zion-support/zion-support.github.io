

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null)
    try {
      const res = await fetch('/api/deploy/genesis', {
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
},;
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



        body: JSON.stringify(state)}),;







      const json = await res.json();
      if (!res.ok) throw new Error(json?.error |'Deployment failed');
      setResult(json);


    } catch (error) {
      setError(err.message || 'Unexpected error');




>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

  return (

    <div className='space-y-8'>;
      <div>;
        <h1 className='text-2xl font-bold'>Genesis Deploy</h1>;
        <p className='text-sm text-gray-600 dark:text-gray-400'>;
          Initialize a full Zion OS instance from a single control panel.;
        </p>;
      </div>;


      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-6 max-w-4xl'>;
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;
            <label className='block text-sm font-medium'>Instance Name</label>;
            <input
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state && state.instanceName}
              onChange={e =>;
                setState({ ...state, instanceName: e && e.target.value });

              }
              required;
            />;
          </div>;
          <div>;

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

                Enable ZION$ token;
              </label>;
            </div>;
          </div>;
          <div>;

            >              <option>Admin</option>


        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold mb-3">Auto-Deploy Modules</h3>
            <div className="space-y-2">
              {Object.keys(state.modules).map((key) => (
                <label key={key} className="flex items-center gap-3 text-sm">
                  <input type="checkbox" checked={state.modules[key]} onChange={() => handleToggle('modules', key)} />
                  <span>/{key}</span>





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


                </label>
              ))}
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
        </section>

        <div className='flex items-center gap-3'>
          <button
            disabled={submitting}
            className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60'>;
            {submitting ? 'Deploying…' : 'Deploy Genesis'}



export default InitPage;

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



      {result && (;
        <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;
          <h3 className='font-semibold'>Deployment Result</h3>;
          <pre className='mt-2 text-xs whitespace-pre-wrap'>;
            {JSON && JSON.stringify(result, null, 2)}
          </pre>;
        </div>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      )}
    </div>;
  );

}
export default InitPage;






>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/feature/merge-conflicts-and-improvements

