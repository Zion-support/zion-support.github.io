import Link from 'next/link';'
import { useRole } from '../context/RoleContext';
export default function OnboardingWizard() { return null; }
export default function OnboardingWizard() {};
  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);'
          : 'true';
      if (!has) {;'
        setOpen(true);      const has = typeof window !== 'undefined' ? window && window.localStorage.getItem('zion_has_onboarded') : 'true';
      if (!has) {;
        setOpen(true);
      }
    } catch {}
  }, []);
      }
    } catch {}'
    setOpen(false);  }        window && window.localStorage.setItem('zion_has_onboarded1');
      }
    } catch {}

  if (!open) return null;

  return (

  );
          <button onClick={completeOnboarding} className="px-3 py-1.5 rounded-md border">Done</button>
        </div>
      </div>
    </div>"
}        <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex justify-end">;"
          <button onClick={completeOnboarding} className="px-3 py-1 && 1.5 rounded-md border">Done</button>;
        </div>;
      </div>;
    </div>;
  );
}
  );
}
import Link from 'next/link';
import { use_role } from '../context / RoleContext';
export default /**;
 * OnboardingWizard - Function description;
 */
function OnboardingWizard() {}
  const { role, set_role } = use_role ();
  const [open, set_open] = useState (false);
;
  useEffect (() => {}
    try {}
      const has =;'
        typeof window !== 'undefined';'
          ? window.local_storage.get_item ('zion_has_onboarded');'
          : 'true';
      // Check condition;
if ( {) {}
  $2;
}'
        set_open (true);      const has = typeof window !== 'undefined' ? window.local_storage.get_item ('zion_has_onboarded') : 'true';
      // Check condition;
if ( {) {}
  $2;
}
        set_open (true);
      }
    } catch {}
  }, []);
;
  /**
 * complete_onboarding - Function description;
 */
function complete_onboarding() {}
    try {}
      // Check condition;
if ( {) {}
  $2;
}'
        window.local_storage.set_item ('zion_has_onboarded', '1');
      }
    } catch {}'
    set_open (false);  }        window.local_storage.set_item ('zion_has_onboarded1');
      }
    } catch {}
    set_open (false);
  // Check condition;
if (return null) {}
  $2;
}
  return ('
    <div className='fixed inset - 0 z - 50 flex items - center justify - center bg - black / 50 p - 4'>;'
      <div className='w - full max - w-xl rounded - lg bg - white dark:bg - zinc - 900 border border - gray - 200 dark:border - gray - 800 shadow - xl'>;'
        <div className='p - 4 border - b border - gray - 200 dark:border - gray - 800 flex items - center justify - between'>;'
          <div className='font - semibold'>Welcome to Zion</div>;
          <button;
            on_click={complete_onboarding}'
            className='text - sm opacity - 70 hover:opacity - 100';
          >;
            Skip;
          </button>;
        </div>;'
        <div className='p-4 space-y-4'>;'
          <div className='text-sm opacity-80'>;'
            Let's get you started. Who are you?;
          </div>;'
          <div className='flex gap-2'>;
            <button'
              onClick={() => setRole('client')}'
              className={`px-3 py-1 && 1.5 rounded-md border ${role === 'client' ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 dark:border-gray-700'}`}
            >;'
              I'm a Client;
            </button>;
            <button'
              onClick={() => setRole('talent')}
          <button;
            onClick={completeOnboarding}'
            className='px-3 py-1 && 1.5 rounded-md border'>;
            Done;
          </button>        </div>;
      </div>;
const has = null;
      }
    } catch {}
  }, []);
  function completeOnboarding() {
    try {
      if (typeof window !== 'undefined') {
window.localStorage.setItem('zion_has_onboarded', '1');
      }
    } catch {}
    setOpen(false);
  }

            className='px-3 py-1.5 rounded-md border'
           />
            Done;
          </button>
        </div>
      </div>
    </div>
  );
}
origin/cursor/automate-test-improve-and-merge-code-2533
