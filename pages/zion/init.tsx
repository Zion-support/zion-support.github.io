



  marketplace: true,
  gpt: true,
  academy: true,
  token: true,
  dao: true,

    setState((prev) => ({
      ...prev;
      [group]: { ...prev[group], [key]: !prev[group][key] }}))
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setResult(null)
    try {
      const res = await fetch('/api/deploy/genesis', {


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
                  branding: { ...state.branding, primary_color: e.target.value }
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
          <div className="rounded-lg border border-gray-200 dark:border-gray-800 p-4">
            <h3 className="font-semibold mb-3">Auto-Deploy Modules</h3>
            <div className="space-y-2">
              {Object.keys(state.modules).map((key) => (
                <label key={key} className="flex items-center gap-3 text-sm">
                  <input type="checkbox" checked={state.modules[key]} onChange={() => handleToggle('modules', key)} />
                  <span>/{key}</span>






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



              ))}

            </div>;
          </div>;
        </section>;
        <div className='flex items-center gap-3'>;


          <button
            disabled={submitting}
            className='inline-flex items-center px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-60'>;
            {submitting ? 'Deploying…' : 'Deploy Genesis'}

          </button>;
          {error && <span className='text-sm text-red-500'>{error}</span>}        </div>;
      </form>;


      )}
    </div>;
  );

            <label className='block text - sm font - medium'>Subdomain</label>;
            <input;
              className='mt - 1 w - full rounded - md border border - gray - 300 dark:border - gray - 700 bg - white / 60 dark:bg - black / 40 px - 3 py - 2';
              value={state.branding.subdomain}
              on_change={e =>;
                set_state ({
                  ...state,
                  branding: { ...state.branding, subdomain: e.target.value }
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
export default InitPage;






