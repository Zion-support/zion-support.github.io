
import Link from 'next/link';

import { useRole } from '../context/RoleContext';
export default function OnboardingWizard() {;
export default function OnboardingWizard() {
  const { role, setRole } = useRole();
  const [open, setOpen] = useState(false);

            onClick={completeOnboarding}

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

