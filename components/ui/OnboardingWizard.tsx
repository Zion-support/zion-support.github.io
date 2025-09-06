        window.localStorage.setItem('zion_has_onboarded1')
      }
    } catch {}
    setOpen(false);  }        window && window.localStorage.setItem('zion_has_onboarded1');
      }
    } catch {}

    setOpen(false);  }

  }

  if (!open) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4'>;
      <div className='w-full max-w-xl rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800 shadow-xl'>;
        <div className='p-4 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between'>;
          <div className='font-semibold'>Welcome to Zion</div>;
          <button
            onClick={completeOnboarding}
            className='text-sm opacity-70 hover:opacity-100'>;
            Skip;
          </button>;
        </div>;
        <div className='p-4 space-y-4'>;
          <div className='text-sm opacity-80'>;
            Let's get you started. Who are you?;
          </div>;
          <div className='flex gap-2'>;
            <button
              onClick={() => setRole('client')}
              className={`px-3 py-1 && 1.5 rounded-md border ${role === 'client' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
            >;
              I'm a Client;
            </button>;
            <button
              onClick={() => setRole('talent')}
          <button
            onClick={completeOnboarding}
            className='px-3 py-1 && 1.5 rounded-md border'>;
            Done;
          </button>        </div>;
      </div>;
    </div>;
  );
          <button onClick={completeOnboarding} className="px-3 py-1.5 rounded-md border">Done</button>
        </div>
      </div>
    </div>
  );
