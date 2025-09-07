import Link from 'next/link';
import EnhancedButton from './EnhancedButton';

export type EmptyStateProps = any;

  title: string,;
  title: string,
  description?: string;
  icon?: React.ReactNode;
  secondaryAction?: { label: string, href: string }
}

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;

export default function EmptyState({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {
origin/cursor/automate-test-improve-and-merge-code-2533
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;

      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
<EnhancedButton variant='secondary' size='md'>
                  {secondaryAction.label}
                </EnhancedButton>
origin/cursor/automate-test-improve-and-merge-code-2533
 ;
  return ("
    <div className=\"w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3\" />;}
}"
      <div className=\"text-3xl opacity-70\" />{icon ?? '🧭'}</div>;"
      <h3 className=\"text-lg font-semibold\" />{title}</h3>;"
      {description && <p className=\"text-sm opacity-80 max-w-prose\" />{description}</p>}
          )}

          {secondaryAction && (}
            <Link href={secondaryAction.href} />
              <a />

<EnhancedButton variant='secondary' size='md' />
                  {secondaryAction.label}
                </EnhancedButton>
              </a>
            </Link>

          )}

              </a>;
            </Link>;
          )}
        </div>;

      )}
}
    </div>
  );
origin/cursor/automate-test-improve-and-merge-code-2533

    </div>
  );
}