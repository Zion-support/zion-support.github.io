import React from 'react';
import Layout from '../../components/Layout';

export default function ZionInit() {
  return (
    <Layout
      title="Zion Init - Zion Tech Group"
      description="Zion initialization and setup page"
    >
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Zion Init
            </h1>
            <p className="text-xl text-gray-600">
              Zion initialization page is under construction.
            </p>
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Default Language
            </label>
            <input
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state.defaultLanguage}
              onChange={e =>
                setState({ ...state, defaultLanguage: e.target.value })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>
              Deployment Region
            </label>
            <input
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state.deploymentRegion}
              onChange={e =>
                setState({ ...state, deploymentRegion: e.target.value })
              }
            />
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
                }
              />
              <label htmlFor='token' className='text-sm'>
                Enable ZION$ token
              </label>
            </div>
          </div>
          <div>
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
            >              <option>Admin</option>
              <option>DAO</option>
              <option>Hybrid</option>
            </select>
          </div>
        </section>
        <section className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <label className='block text-sm font-medium'>Logo URL</label>
            <input
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state.branding.logoUrl}
              onChange={e =>
                setState({
                  ...state
                  branding: { ...state.branding, logoUrl: e.target.value }
                })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Primary Color</label>
            <input
              type='color'
              className='mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40'
              value={state.branding.primaryColor}
              onChange={e =>
                setState({
                  ...state
                  branding: { ...state.branding, primaryColor: e.target.value }
                })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Secondary Color</label>
            <input
              type='color'
              className='mt-1 w-20 h-10 p-1 rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40'
              value={state.branding.secondaryColor}
              onChange={e =>
                setState({
                  ...state
                  branding: {
                    ...state.branding
                    secondaryColor: e.target.value
                  }
                })
              }
            />
          </div>
          <div>
            <label className='block text-sm font-medium'>Subdomain</label>
            <input
              className='mt-1 w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white/60 dark:bg-black/40 px-3 py-2'
              value={state.branding.subdomain}
              onChange={e =>
                setState({
                  ...state
                  branding: { ...state.branding, subdomain: e.target.value }
                })
              }
            />
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
                </label>
              ))}
            </div>
          </div>
          <div className='rounded-lg border border-gray-200 dark:border-gray-800 p-4'>
            <h3 className='font-semibold mb-3'>Bonus Modules</h3>
            <div className='space-y-2'>
              {Object.keys(state.bonusModules).map(key => (
                <label key={key} className='flex items-center gap-3 text-sm'>
                  <input
                    type='checkbox'
                    checked={state.bonusModules[key]}
                    onChange={() => handleToggle('bonusModules', key)}
                  />                  <span>/{key}</span>
                </label>
              ))}
            </div>
          </div>
        </section>
        <div className='flex items-center gap-3'>
          <button
            disabled={submitting}
            className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60'>{submitting ? 'Deploying…' : 'Deploy Genesis'}
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
      </div>
    </Layout>
  );
}