

import { useEffect, useMemo, useState } from 'react';

import { translateTextViaAI } from '../utils/translation';
import { translateTextViaAI } from '../utils/translation';

export type UseAutoTranslateResult = {;
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159

  translations: Record<string, string>;
  loading: boolean;
  error?: string;
}
export function useAutoTranslate(

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
