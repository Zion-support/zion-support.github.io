import Link from 'next/link';
import { useRouter  } from 'next/router';
import { Home, Search, BriefcaseIcon, MessageSquare, User, X, MessageCircle } from 'lucide-react'
import { cn  } from '@/lib/utils';
import { useAuth  } from '@/hooks/useAuth';
import { Button  } from '@/components/ui/button';
import { ModeToggle  } from '@/components/ModeToggle';
import { useTranslation } from 'react-i18next';
export interface MobileMenuProps {
  unreadCount?: number;
  onClose: () => void;
  openLoginModal: (returnToPath: string) => void, // Added from plan
}

// Define protected routes - consistent with ResponsiveNavigation.tsx and middleware.ts
// These are routes that should trigger the login modal if accessed while unauthenticated.
const protectedRoutes = null;
                // It's important to call onClose AFTER openLoginModal if the modal might be part of the same parent that controls menu visibility.
                // Or ensure modal is rendered at a higher level. Given AppHeader structure, this should be okay.
              }
              onClose(), // Close mobile menu on any click
            }}
          >
            <div className="relative mr-4">
              <item.icon className="h-5 w-5" aria-hidden="true" />
              {item.badge && item.badge > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? '9+' : item.badge}
                </span>
              )}
            </div>
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="mt-6 px-6">
        <ModeToggle />
      </div>
    </div>
  )
}