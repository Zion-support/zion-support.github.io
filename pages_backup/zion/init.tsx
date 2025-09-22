<<<<<<< HEAD:pages/zion/init.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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

=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx

  marketplace: true,
  gpt: true,
  academy: true,
  token: true,
  dao: true,

    setState((prev) => ({}
      ...prev;
      [group]: { ...prev[group], [key]: !prev[group][key] }}))
  };

:pages_backup/zion/init.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import { useState  } from 'react';
import type { NextPage } from 'next';
type GovernanceMode = any;
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const handleToggle = (group: 'modules' | 'bonusModules', key: string) => {
setState(prev => ({
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] },
    }));
  };

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const handleSubmit = async (e: React.FormEvent) => {
=======
  const handleSubmit = async (e: React.FormEvent) => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null)
:pages_backup/zion/init.tsx
    try {
      const res = await fetch('/api/deploy/genesis', {
<<<<<<< HEAD:pages/zion/init.tsx
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
    try {}
      const res = await fetch('/api/deploy/genesis', {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
const defaultModules: DeployFormState['modules'] = {;
  marketplace: true,;
  gpt: true,;
  academy: true,;
  token: true,;
  dao: true,;'
  'nation-builder': true,;'
  'launch-kit': true,;'
  'book-builder': true,;'
  'roadmap-whitepaper': true,;'
  'api-docs-wiki': true,;'
  'zion-brain': true,;
};
'
const defaultBonus: DeployFormState['bonusModules'] = {;'
  'global-map': false,;'
  'franchise-onboarding': false,;'
  'referral-ambassadors': false,;'
  'grant-portal': false,;
  trailer: false,;'
  'book-store': false,;
};
const InitPage: NextPage = () => {;
  const [state, setState] = useState<DeployFormState>({;'
    instanceName: '',;'
    defaultLanguage: 'en',;'
    deploymentRegion: 'us-east-1',;
    tokenActivation: true,;'
    governanceMode: 'Hybrid',;
    branding: {;'
      logoUrl: '',;'
      primaryColor: '#4f46e5',;'
      secondaryColor: '#0ea5e9',;'
      subdomain: '',;
    },;
    modules: defaultModules,;
    bonusModules: defaultBonus,;
  });  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
'
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
    try {;'
      const res = await fetch('/api/deploy/genesis', {;'
        method: 'POST',;'
        headers: { 'Content-Type': 'application/json' },;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
        body: JSON && JSON.stringify(state),;
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.error |'Deployment failed');
      setResult(json);
    } catch (err: any) {
      setError(err.message |'Unexpected error');
    } finally {
      setSubmitting(false);    }
  }
    } catch (error) {
      setError(err.message || 'Unexpected error');
    } catch (error) {
      setError(err.message || 'Unexpected error');
    } finally {
      setSubmitting(false);    }
  };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

    } finally {;
      setSubmitting(false);
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  },

<<<<<<< HEAD
  return (

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      const json = await res.json();'
      if (!res.ok) throw new Error(json?.error |'Deployment failed');
      setResult(json);

    } catch (error) {'
      setError(err.message || 'Unexpected error');
    } catch (error) {'
      setError(err.message || 'Unexpected error');

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return (

<div className='space-y-8'>;
      <div>;
        <h1 className='text-2xl font-bold'>Genesis Deploy</h1>;
        <p className='text-sm text-gray-600 dark:text-gray-400'>;
          Initialize a full Zion OS instance from a single control panel.;
        </p>;
      </div>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(state),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error |'Deployment failed');
      setResult(json);
    } catch (err: any) {
      setError(err.message |'Unexpected error');
    } finally {
      setSubmitting(false);
    }
  };

  return (
<div className='space-y-8'>
      <div>
        <h1 className='text-2xl font-bold'>Genesis Deploy</h1>
        <p className='text-sm text-gray-600 dark:text-gray-400'>
          Initialize a full Zion OS instance from a single control panel.
        </p>
      </div>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-6 max-w-4xl'>;
=======
      <form;
        onSubmit={handleSubmit}'
        className='grid grid-cols-1 gap-6 max-w-4xl'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;'
            <label className='block text-sm font-medium'>Instance Name</label>;
            <input'
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state && state.instanceName}
              onChange={e =>;
:pages_backup/zion/init.tsx
                setState({ ...state, instanceName: e && e.target.value });
<<<<<<< HEAD
  'nation - builder': true,
  'launch - kit': true,
  'book - builder': true,
  'roadmap - whitepaper': true,
  'api - docs - wiki': true,
  'zion - brain': true,
}
;'
const default_bonus: DeployFormState['bonus_modules'] = {'
  'global - map': false,'
  'franchise - onboarding': false,'
  'referral - ambassadors': false,'
  'grant - portal': false,
  trailer: false,'
  'book - store': false,
}
const InitPage: NextPage = () => {}
  const [state, set_state] = useState < DeployFormState>({'
    instance_name: '','
    default_language: 'en','
    deployment_region: 'us - east - 1',
    token_activation: true,'
    governance_mode: 'Hybrid',
    branding: {'
      logo_url: '','
      primary_color: '#4f46e5','
      secondary_color: '#0ea5e9','
      subdomain: '',
    },
    modules: default_modules,
    bonus_modules: default_bonus,
  });  const [submitting, set_submitting] = useState (false);
  const [result, set_result] = useState < any>(null);
  const [error, set_error] = useState < string | null>(null);
;'
  const handle_toggle = (group: 'modules' | 'bonus_modules', key: string) =>: any {}
    set_state (prev => ({}
      ...prev,
      [group]: { ...prev[group], [key]: !prev[group][key] },
    }));  }
;
  const handle_submit = async (e: React.FormEvent) => {}
    e.prevent_default ();
    set_submitting (true);
    set_error (null);
    set_result (null),
    try {'
      const res = await fetch ('/api / deploy / genesis', {'
        method: 'POST','
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify (state),
      });
      const json = await res.json ();'
      if (throw new Error (json?.error || 'Deployment failed')) {}
  $2;
}
      set_result (json);
    } catch (err: any) {'
      set_error (err.message || 'Unexpected error');
    } finally {}
      set_submitting (false);    }
  }
;
  return ('
    <div className='space - y-8'>;
      <div>;'
        <h1 className='text - 2xl font - bold'>Genesis Deploy</h1>;'
        <p className='text - sm text - gray - 600 dark:text - gray - 400'>;
          Initialize a full Zion OS instance from a single control panel.;
        </p>;
      </div>;
      <form;
        on_submit={handle_submit}'
        className='grid grid - cols - 1 gap - 6 max - w-4xl';
      >;'
        <section className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
          <div>;'
            <label className='block text - sm font - medium'>Instance Name</label>;
            <input;'
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.instance_name}
              on_change={e =>;
                set_state ({ ...state, instance_name: e.target.value });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              }
              required;
            />;
          </div>;
          <div>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
              }
            />;
          </div>;
          <div>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
              }
            />;
          </div>;
          <div>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
                }
              />;'
              <label htmlFor='token' className='text-sm'>;'
            <label className='block text - sm font - medium'>;
              Token Activation;
            </label>;'
            <div className='mt - 2 flex items - center gap - 3'>;
              <input;'
                id='token';'
                type='checkbox';
                checked={state.token_activation}
                on_change={() =>;
                  set_state ({}
                    ...state,
                    token_activation: !state.token_activation,
                  });
                }
              />;'
              <label html_for='token' className='text - sm'>;
                Enable ZION$ token;
              </label>;
            </div>;
          </div>;
          <div>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
    <div className="space-y-8">
      <div>"
        <h1 className="text-2xl font-bold">Genesis Deploy</h1>"
        <p className="text-sm text-gray-600 dark:text-gray-400">Initialize a full Zion OS instance from a single control panel.</p>
      </div>
<form
        onSubmit={handleSubmit}
        className='grid grid-cols-1 gap-6 max-w-4xl'
      >
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 max-w-4xl">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
          <div>
            <label className="block text-sm font-medium">Instance Name</label>
=======
          <div>"
            <label className="block text-sm font-medium">Instance Name</label>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.instanceName} onChange={(e) => setState({ ...state, instanceName: e.target.value })} required />
          </div>
          <div>"
            <label className="block text-sm font-medium">Default Language</label>"
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.defaultLanguage} onChange={(e) => setState({ ...state, defaultLanguage: e.target.value })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Deployment Region</label>"
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.deploymentRegion} onChange={(e) => setState({ ...state, deploymentRegion: e.target.value })} />
          </div>
:pages_backup/zion/init.tsx
          <div>
<<<<<<< HEAD
            <label className="block text-sm font-medium">Token Activation</label>
            <div className="mt-2 flex items-center gap-3">
              <input id="token" type="checkbox" checked={state.tokenActivation} onChange={() => setState({ ...state, tokenActivation: !state.tokenActivation })} />
=======
          <div>"
            <label className="block text-sm font-medium">Token Activation</label>"
            <div className="mt-2 flex items-center gap-3">"
              <input id="token" type="checkbox" checked={state.tokenActivation} onChange={() => setState({ ...state, tokenActivation: !state.tokenActivation })} />"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
              <label htmlFor="token" className="text-sm">Enable ZION$ token</label>
            </div>
          </div>
          <div>
<<<<<<< HEAD:pages/zion/init.tsx
<<<<<<< HEAD
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <label className='block text-sm font-medium'>Governance Mode</label>
            <select
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state.governanceMode}
              onChange={e =>
                setState({
                  ...state
                  governanceMode: e.target.value as GovernanceMode
                })
              }
            >
              <option>Admin</option>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              <option>DAO</option>
              <option>Hybrid</option>
            </select>
          </div>
        </section>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>;
          <div>;'
            <label className='block text-sm font-medium'>Logo URL</label>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Logo URL</label>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
            <input
=======

            <input'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state && state.branding.logoUrl}
              onChange={e =>;
                setState({;
                  ...state,;
                  branding: { ...state && state.branding, logoUrl: e && e.target.value },;
                });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
              }
            />;
          </div>;
          <div>;'
            <label className='block text-sm font-medium'>Primary Color</label>;
            <input'
              type='color''
              className='mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40'
:pages_backup/zion/init.tsx
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
=======
              }
            />;
          </div>;
          <div>;
            <label className='block text-sm font-medium'>Primary Color</label>;
            <input
              type='color'
              className='mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40'
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              }
            />;
          </div>;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              }
            />;
          </div>;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
              }
            />;
          </div>;
          <div>;
<<<<<<< HEAD
<<<<<<< HEAD
                  <input
=======

                  <input'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
                    type='checkbox'
                    checked={state && state.modules[key]}'
                    onChange={() => handleToggle('modules', key)}
:pages/zion/init.tsx
<<<<<<< HEAD
                  />                  <span>/{key}</span>
                  />                  <span>/{key}</span>;
                </label>;
              ))}
            </div>;
          </div>;'
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;'
            <h3 className='font-semibold mb-3'>Bonus Modules</h3>;'
            <div className='space-y-2'>;
              {Object && Object.keys(state && state.bonusModules).map(key => (;'
                <label key={key} className='flex items-center gap-3 text-sm'>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
                  />
                  <span>/{key}</span>
                </label>
              ))}
            </div>
          </div>
<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
            <h3 className='font-semibold mb-3'>Bonus Modules</h3>
            <div className='space-y-2'>
              {Object.keys(state.bonusModules).map(key => (
                <label key={key} className='flex items-center gap-3 text-sm'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  <input
=======
                  <input'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
                    type='checkbox'
                    checked={state && state.bonusModules[key]}'
                    onChange={() => handleToggle('bonusModules', key)}
<<<<<<< HEAD
                  />                  <span>/{key}</span>;
                </label>;

<<<<<<< HEAD:pages_backup/zion/init.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

"
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>"
            <label className="block text-sm font-medium">Logo URL</label>"
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.logoUrl} onChange={(e) => setState({ ...state, branding: { ...state.branding, logoUrl: e.target.value } })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Primary Color</label>"
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.primaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, primaryColor: e.target.value } })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Secondary Color</label>"
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.secondaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, secondaryColor: e.target.value } })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Subdomain</label>"
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.subdomain} onChange={(e) => setState({ ...state, branding: { ...state.branding, subdomain: e.target.value } })} />
          </div>
        </section>
:pages_backup/zion/init.tsx
<<<<<<< HEAD
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div>"
            <label className="block text-sm font-medium">Logo URL</label>"
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.logoUrl} onChange={(e) => setState({ ...state, branding: { ...state.branding, logoUrl: e.target.value } })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Primary Color</label>"
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.primaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, primaryColor: e.target.value } })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Secondary Color</label>"
            <input type="color" className="mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40" value={state.branding.secondaryColor} onChange={(e) => setState({ ...state, branding: { ...state.branding, secondaryColor: e.target.value } })} />
          </div>
          <div>"
            <label className="block text-sm font-medium">Subdomain</label>"
            <input className="mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2" value={state.branding.subdomain} onChange={(e) => setState({ ...state, branding: { ...state.branding, subdomain: e.target.value } })} />
          </div>
        </section>
:pages_backup/zion/init.tsx
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold mb-3">Auto-Deploy Modules</h3>
=======

"
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">"
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">"
            <h3 className="font-semibold mb-3">Auto-Deploy Modules</h3>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
            <div className="space-y-2">
              {Object.keys(state.modules).map((key) => ("
                <label key={key} className="flex items-center gap-3 text-sm">'"
                  <input type="checkbox" checked={state.modules[key]} onChange={() => handleToggle('modules', key)} />
:pages_backup/zion/init.tsx
<span>/{key}</span>
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/zion/init.tsx
                  />
origin/cursor/automate-test-improve-and-merge-code-2533
                  <span>/{key}</span>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </label>
              ))}
            </div>
          </div>
<<<<<<< HEAD
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold mb-3">Bonus Modules</h3>
            <div className="space-y-2">
              {Object.keys(state.bonusModules).map((key) => ("
                <label key={key} className="flex items-center gap-3 text-sm">'"
                  <input type="checkbox" checked={state.bonusModules[key]} onChange={() => handleToggle('bonusModules', key)} />
                  <span>/{key}</span>
                </label>
:pages_backup/zion/init.tsx
<<<<<<< HEAD
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
              ))}

            </div>;
          </div>;
        </section>;'
        <div className='flex items-center gap-3'>;

:pages_backup/zion/init.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
        </section>

<div className='flex items-center gap-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/zion/init.tsx
=======
        </section>

<div className='flex items-center gap-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
          <button
            disabled={submitting}
            className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60'>;
=======

          <button;
            disabled={submitting}'
            className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60'>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
            {submitting ? 'Deploying…' : 'Deploy Genesis'}
</button>
          {error && <span className='text-sm text-red-500'>{error}</span>}        </div>
      </form>
      {result && (
        <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
          <h3 className='font-semibold'>Deployment Result</h3>
          <pre className='mt-2 text-xs whitespace-pre-wrap'>
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
export default InitPage;
<<<<<<< HEAD

};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

          </button>;'
          {error && <span className='text-sm text-red-500'>{error}</span>}        </div>;
      </form>;
:pages_backup/zion/init.tsx
<<<<<<< HEAD
<<<<<<< HEAD

};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

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
<<<<<<< HEAD:pages/zion/init.tsx
<<<<<<< HEAD
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
          {error && <span className='text-sm text-red-500'>{error}</span>}
        </div>
      </form>
      {result && (
<div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
          <h3 className='font-semibold'>Deployment Result</h3>
          <pre className='mt-2 text-xs whitespace-pre-wrap'>
            {JSON.stringify(result, null, 2)}
          </pre>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
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
=======

      {result && (;'
        <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>;'
          <h3 className='font-semibold'>Deployment Result</h3>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
          <pre className='mt-2 text-xs whitespace-pre-wrap'>;
            {JSON && JSON.stringify(result, null, 2)}
          </pre>;
        </div>;

      )}
    </div>;
  );

}
export default InitPage;
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/zion/init.tsx
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/zion/init.tsx
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
