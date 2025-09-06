import { useEffect, useMemo, useRef, useState  } from 'react';
import { useRouter } from 'next/router';
export default function GlobalSearchBar() {
  const router = null;
                    router.push(`/search?q=${encodeURIComponent(s)}`)
                  }}
                  className="w-full text-left px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
);  )
}
