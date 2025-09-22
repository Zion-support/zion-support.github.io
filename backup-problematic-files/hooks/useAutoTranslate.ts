<<<<<<< HEAD


import { useEffect, useMemo, useState } from 'react';

import { translateTextViaAI } from '../utils/translation';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  translations: Record<string, string>;
<<<<<<< HEAD
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(
<<<<<<< HEAD

  text: string,
  targets: string[],
  debounceMs = 600;
): UseAutoTranslateResult {  const [translations, setTranslations] = useState<Record<string, string>>({});export function useAutoTranslate(text: string, targets: string[], debounceMs = 600): UseAutoTranslateResult {;

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
:hooks/useAutoTranslate.ts
    }
  }, [key, debounceMs]);
  return { translations, loading, error }
}
}
main:hooks/useAutoTranslate.ts
:backup-problematic-files/hooks/useAutoTranslate.ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
</string>
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  const [translations, setTranslations] = useState<Record<string, string>>({});

<<<<<<< HEAD
  return { translations, loading, error }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
  const [error, setError] = useState<string | undefined>(undefined);
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
