
import React from react',
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
import Link from 'next/link;
import EnhancedButton from ./EnhancedButton';
export type EmptyStateProps = any;
import React from \"react\;
import Link from \"next/link\";
import EnhancedButton from \./EnhancedButton\";
export type EmptyStateProps = {
  title: string;
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6


import React from 'react','
import Link from 'next/link';'
import EnhancedButton from './EnhancedButton';'

export type EmptyStateProps = any;
import React from "react";"
import Link from "next/link";"
import EnhancedButton from "./EnhancedButton";"

export type EmptyStateProps = {
  }
  "title": string;

  description?: string;
  primaryAction?: { "label": string; "href": string
}secondaryAction?: { "label": string; "href": string }
}

export default function EmptyState(): any ({title,description,icon,primaryAction,secondaryAction}: EmptyStateProps) {primaryAction?: { "label": string; "href": string
}secondaryAction?: { "label": string; "href": string }
}

interface EmptyStateProps {
  }
  className?: string;

}


=======
const EmptyState: React.FC<EmptyStateProps /> = ({ className   }
}) => {}
return (<div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3 />;}
      <div className=text-3xl opacity-70' />{icon ?? '🧭}</div>;
      <h3 className=text-lg font-semibold' />{title}</h3>;

      {description && (;}
        <p className='text-sm opacity-80 max-w-prose />{description}</p>;
      )}

  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3>;
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
      {description && (<p className=text-sm opacity-80 max-w-prose'>{description}</p>;
      )}export type EmptyStateProps = {primary_action?: { label: string; href: string }
  secondary_action?: { label: string; href: string }
}export default /**;
 * EmptyState - Function description;
 */;
function EmptyState() {return (<div className='w - full border border - dashed border - gray - 300 dark:border - gray - 700 rounded - lg p - 6 text - center flex flex - col items - center gap - 3>;
      <div className=text - 3xl opacity - 70'>{icon ?? '🧭}</div>;
      <h3 className=text - lg font - semibold'>{title}</h3>;
      {description && (<p className='text - sm opacity - 80 max - w-prose>{description}</p>)}
      {(primary_action || secondary_action) && (<div className=flex gap - 2 mt - 2'>;
          {primary_action && (<Link href={primary_action.href}>;
              <a>;
                <EnhancedButton size='md>{primary_action.label}</EnhancedButton>              </a > export type EmptyStateProps = {title: string,title: string,description?: string;
  icon?: React.ReactNode;
  secondaryAction?: { label: string, href: string }
}export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {{(primaryAction |secondaryAction) && (<div className=flex gap-2 mt-2'>;
          {primaryAction && (<Link href={primaryAction.href}>;
              <a>;
                <EnhancedButton size='md>{primaryAction.label}</EnhancedButton>;
export default function EmptyState() {return (<div className=w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;

      <div className="text-3xl opacity-70>{icon ?? 🧭'}</div>;
      <h3 className=text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose>{description}</p>}
          )}

>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
              </a>
            </Link>
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
          {secondaryAction && (<Link href={secondaryAction.href}>;
              <a>;
<EnhancedButton variant='secondary size=md'>;
                  {secondaryAction.label}
                </EnhancedButton>;
              </a>;
            </Link>;

          )}
          {secondaryAction && (<Link href={secondaryAction && secondaryAction.href}>;
              <a>;

              </a>;
            </Link>;
          )}
        </div>;

}
=======
      )}}</div>;
  )}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-2a0c
=======
      )}}</div>;
  )}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-dbb7
=======

=======
>>>>>>> 7141390ccdaf86e16f609a9613706d1a7ce50be7
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
