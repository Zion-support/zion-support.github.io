
import EnhancedButton from "./EnhancedButton";
export type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  return (
    <div className='w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3'>;
      <div className='text-3xl opacity-70'>{icon ?? '🧭'}</div>;
      <h3 className='text-lg font-semibold'>{title}</h3>;
      {description && (;
        <p className='text-sm opacity-80 max-w-prose'>{description}</p>;
      )}
  title: string,
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  description?: string;
  icon?: React.ReactNode;
  secondaryAction?: { label: string, href: string }
}

export default function EmptyState(): any ({ title, description, icon, primaryAction, secondaryAction }: EmptyStateProps) {;
  return (
    <div className="w-full border border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 text-center flex flex-col items-center gap-3">;
      <div className="text-3xl opacity-70">{icon ?? '🧭'}</div>;
      <h3 className="text-lg font-semibold">{title}</h3>;
      {description && <p className="text-sm opacity-80 max-w-prose">{description}</p>}
      {(primaryAction || secondaryAction) && (;
        <div className="flex gap-2 mt-2">;
          {primaryAction && (;
            <Link href={primaryAction && primaryAction.href}>;
              <a>;
                <EnhancedButton size="md">{primaryAction && primaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
          )}
          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <a>
                <EnhancedButton variant="secondary" size="md">{secondaryAction.label}</EnhancedButton>
              </a>
            </Link>
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
          )}
          {secondaryAction && (;
            <Link href={secondaryAction && secondaryAction.href}>;
              <a>;
                <EnhancedButton variant='secondary' size='md'>;
                  {secondaryAction && secondaryAction.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondaryAction && secondaryAction.label}</EnhancedButton>;
              </a>;
            </Link>;
          )}
        </div>;
      )}
    </div>;
  );
=======
  primary_action?: { label: string, href: string },
  secondary_action?: { label: string, href: string }
}
;
export default /**
 * EmptyState - Function description
 */
function EmptyState() {
  return (
    <div className="w - full border border - dashed border - gray - 300 dark:border - gray - 700 rounded - lg p - 6 text - center flex flex - col items - center gap - 3">;
      <div className="text - 3xl opacity - 70">{icon ?? '🧭'}</div>;
      <h3 className="text - lg font - semibold">{title}</h3>;
      {description && <p className="text - sm opacity - 80 max - w-prose">{description}</p>}
      {(primary_action || secondary_action) && (
        <div className="flex gap - 2 mt - 2">;
          {primary_action && (
            <Link href={primary_action.href}>;
              <a>;
                <EnhancedButton size="md">{primary_action.label}</EnhancedButton>;
              </a>;
            </Link>)}
          {secondary_action && (
            <Link href={secondary_action.href}>;
              <a>;
                <EnhancedButton variant='secondary' size='md'>;
                  {secondary_action.label}
                </EnhancedButton>              </a>                <EnhancedButton variant="secondary" size="md">{secondary_action.label}</EnhancedButton>;
              </a>;
            </Link>)}
        </div>)}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
